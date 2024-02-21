require('./styles.scss');

(function ($, window, SapphireWidgets) {
	const create = config => {
		this.$aside = $('.DesignSystem__Aside');
		this.$filterInput = $('#' + config.filterInput);
		this.$filterClear = this.$filterInput.parent().find('.icon');

		this.bindEvents();
	};

	const setRTLmode = () => {
		$('body').toggleClass('AR');
		$('body').toggleClass('Page');
		$('.DesignSystem.Page').toggleClass('AR');
	};

	const setLastNoteAdded = value => {
		localStorage.setItem('lastNoteAdded', value);

		this.verifyNewNotes();
	};

	filterTerm = term => {
		const $menu = $('.DesignSystem__MenuSection');
		$('.DesignSystem__MenuSubSection').addClass('DesignSystem__MenuSubSection--inactive');
		$menu.find('a').each((i, el) => {
			if (
				$(el)
					.text()
					.toLowerCase()
					.includes(term.toLowerCase())
			) {
				$(el).show();
				$(el)
					.parent()
					.addClass('DesignSystem__MenuSubSection--expanded')
					.removeClass('DesignSystem__MenuSubSection--inactive');
			} else {
				$(el).hide();
			}
		});
	};

	bindEvents = () => {
		this.$aside.on('click', '.DesignSystem__MenuItemSection', e => {
			$(e.target)
				.parent()
				.toggleClass('DesignSystem__MenuSubSection--expanded');
		});

		this.$aside.on('click', '.DesignSystem__Menu a[title]', e => {
			e.preventDefault();
			let url = $(e.target).attr('href');
			let title = $(e.target).attr('title');
			window.location.href = `${url}#${title}`;
		});

		this.$filterInput.on('keydown', evt => {
			if (evt.key === 'Enter') return false;
		});

		this.$filterInput.on('input', evt => {
			if (this.$filterInput.val().length > 2) {
				this.filterTerm(evt.target.value);
				this.$filterClear.show();
			} else {
				const $menu = $('.DesignSystem__MenuSection');
				$menu.find('a, .DesignSystem__MenuSection, .DesignSystem__MenuSubSection').show();
				$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--inactive');
				if (this.$filterInput.val().length > 0) {
					this.$filterClear.show();
				} else {
					this.$filterClear.hide();
				}
			}
		});

		this.$filterClear.on('click', () => {
			this.$filterInput.val('').trigger('input');
		});

		this.$aside.on('click', 'a[ui="button-expand-all"]', () => openAll());

		this.$aside.on('click', 'a[ui="button-collapse-all"]', () => closeAll());

		$(window).load(() => {
			const hash = window.location.hash.slice(1);
			const pathname = window.location.pathname.replace('/StyleGuideV2_UI/', '');

			if (!!hash) {
				let $content = $('.DesignSystem__Content').find('[title="' + hash + '"]');
				if (!!$content.length) $(window).scrollTop($content.offset().top);
			}

			if (pathname === 'WhatsNew.aspx') {
				$('.DesignSystem__FabButton').hide();

				localStorage.setItem('lastNoteViewed', localStorage.getItem('lastNoteAdded'));
			}

			markAsideMenu(true);
			scrollToHashTarget();
		});

		$(window).on('hashchange', () => {
			scrollToHashTarget();
		});
	};

	scrollToHashTarget = () => {
		let targetById = $('.DesignSystem__Content').find('[id="' + window.location.hash.slice(1) + '"]');
		let targetByTitle = $('.DesignSystem__Content').find('[title="' + window.location.hash.slice(1) + '"]');

		if (!!targetById.length) {
			$(window).scrollTop(targetById.offset().top);
		} else if (!!targetByTitle.length) {
			$(window).scrollTop(targetByTitle.offset().top);
		}

		markAsideMenu(false);
	};

	markAsideMenu = doScroll => {
		const hash = window.location.hash.slice(1);
		let pathname = window.location.pathname.replace('/StyleGuideV2_UI/', '');

		$('.DesignSystem__MenuSection a').each((i, el) => {
			let url = $(el)
				.attr('href')
				.split('?')[0];
			let title = $(el).attr('title');

			if (url === pathname) {
				if (hash === title || (!hash && !title)) {
					$(el).addClass('active');

					setTimeout(function () {
						if (!!$(el).closest('.DesignSystem__MenuSubSection').length) {
							$(el)
								.closest('.DesignSystem__MenuSubSection')
								.addClass('DesignSystem__MenuSubSection--expanded');

							if (doScroll) {
								let linkTopPosition = $(el).closest('.DesignSystem__MenuSubSection')[0].offsetTop;
								$('.DesignSystem__Menu')[0].scroll(0, linkTopPosition - 230);
							}
						}
					}, 150);
				} else $(el).removeClass('active');
			} else $(el).removeClass('active');
		});
	};

	openAll = () => {
		$('.DesignSystem__MenuSubSection').addClass('DesignSystem__MenuSubSection--expanded');
		$('.DesignSystem__Menu')[0].scroll(0, 0);
		$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--inactive');
	};

	closeAll = () => {
		$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--expanded');
		$('.DesignSystem__Menu')[0].scroll(0, 0);
		$('.DesignSystem__MenuSubSection').removeClass('DesignSystem__MenuSubSection--inactive');
	};

	verifyNewNotes = () => {
		const lastAdded = localStorage.getItem('lastNoteAdded');
		const lastViewed = localStorage.getItem('lastNoteViewed');

		if (+lastAdded > +lastViewed) {
			$('.DesignSystem__FabAlert').addClass('DesignSystem__FabAlert--new');
		}
	};

	SapphireWidgets.DesignSystem = {
		create,
		openAll,
		closeAll,
		setRTLmode,
		setLastNoteAdded,
	};
})(jQuery, window, SapphireWidgets);
