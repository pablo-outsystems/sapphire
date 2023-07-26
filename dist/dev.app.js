/*! dev.app.js || Version: 5.1.128142 || Generated: Wed Jul 26 2023 18:25:14 GMT+0100 (Hora de verão da Europa Ocidental) */
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "42b5e601d9e2a76170ad";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "app";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/app.js")(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./components/index.scss */ "./src/components/index.scss");

//Import all JS files
const requireAll = r => r.keys().forEach(r);
requireAll(__webpack_require__("./src/components sync recursive \\.js$"));

/***/ }),

/***/ "./src/components sync recursive \\.js$":
/*!***********************************!*\
  !*** ./src/components sync \.js$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./00-settings/config.js": "./src/components/00-settings/config.js",
	"./03-elements/script.js": "./src/components/03-elements/script.js",
	"./05-components/layout/layout-base.js": "./src/components/05-components/layout/layout-base.js",
	"./05-components/layout/layout-blank.js": "./src/components/05-components/layout/layout-blank.js",
	"./05-components/layout/layout-emergency.js": "./src/components/05-components/layout/layout-emergency.js",
	"./05-components/layout/layout-popup.js": "./src/components/05-components/layout/layout-popup.js",
	"./05-components/layout/subLayoutLeft.js": "./src/components/05-components/layout/subLayoutLeft.js",
	"./05-components/v3-pat/actions-menu/scripts.js": "./src/components/05-components/v3-pat/actions-menu/scripts.js",
	"./05-components/v3-pat/button-link/scripts.js": "./src/components/05-components/v3-pat/button-link/scripts.js",
	"./05-components/v3-pat/card-charts/scripts.js": "./src/components/05-components/v3-pat/card-charts/scripts.js",
	"./05-components/v3-pat/collapsible-side-panel/scripts.js": "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js",
	"./05-components/v3-pat/comp-line/scripts.js": "./src/components/05-components/v3-pat/comp-line/scripts.js",
	"./05-components/v3-pat/country-phone/scripts.js": "./src/components/05-components/v3-pat/country-phone/scripts.js",
	"./05-components/v3-pat/data-tables/scripts.js": "./src/components/05-components/v3-pat/data-tables/scripts.js",
	"./05-components/v3-pat/datetime-range-picker/scripts.js": "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js",
	"./05-components/v3-pat/drag-drop/scripts.js": "./src/components/05-components/v3-pat/drag-drop/scripts.js",
	"./05-components/v3-pat/dropdown-categories/scripts.js": "./src/components/05-components/v3-pat/dropdown-categories/scripts.js",
	"./05-components/v3-pat/dropzone/dropzone.js": "./src/components/05-components/v3-pat/dropzone/dropzone.js",
	"./05-components/v3-pat/expandable-link/scripts.js": "./src/components/05-components/v3-pat/expandable-link/scripts.js",
	"./05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js": "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js",
	"./05-components/v3-pat/generic-card/scripts.js": "./src/components/05-components/v3-pat/generic-card/scripts.js",
	"./05-components/v3-pat/generic-gallery/scripts.js": "./src/components/05-components/v3-pat/generic-gallery/scripts.js",
	"./05-components/v3-pat/generic-grid/scripts.js": "./src/components/05-components/v3-pat/generic-grid/scripts.js",
	"./05-components/v3-pat/horizontal-toolbar/scripts.js": "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js",
	"./05-components/v3-pat/hour-picker/scripts.js": "./src/components/05-components/v3-pat/hour-picker/scripts.js",
	"./05-components/v3-pat/input-lasa/scripts.js": "./src/components/05-components/v3-pat/input-lasa/scripts.js",
	"./05-components/v3-pat/input-with-clear/scripts.js": "./src/components/05-components/v3-pat/input-with-clear/scripts.js",
	"./05-components/v3-pat/input-with-list/scripts.js": "./src/components/05-components/v3-pat/input-with-list/scripts.js",
	"./05-components/v3-pat/line-add/scripts.js": "./src/components/05-components/v3-pat/line-add/scripts.js",
	"./05-components/v3-pat/line-details-expand-box/script.js": "./src/components/05-components/v3-pat/line-details-expand-box/script.js",
	"./05-components/v3-pat/location-box/scripts.js": "./src/components/05-components/v3-pat/location-box/scripts.js",
	"./05-components/v3-pat/main-interactive-card/scripts.js": "./src/components/05-components/v3-pat/main-interactive-card/scripts.js",
	"./05-components/v3-pat/menu-bar/scripts.js": "./src/components/05-components/v3-pat/menu-bar/scripts.js",
	"./05-components/v3-pat/multiple-selection-button/scripts.js": "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js",
	"./05-components/v3-pat/panel/confirmation-panel.js": "./src/components/05-components/v3-pat/panel/confirmation-panel.js",
	"./05-components/v3-pat/panel/confirmation-popup.js": "./src/components/05-components/v3-pat/panel/confirmation-popup.js",
	"./05-components/v3-pat/panel/modal-popup.js": "./src/components/05-components/v3-pat/panel/modal-popup.js",
	"./05-components/v3-pat/panel/panel-by-id-notify.js": "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js",
	"./05-components/v3-pat/panel/panel-by-id.js": "./src/components/05-components/v3-pat/panel/panel-by-id.js",
	"./05-components/v3-pat/panel/popup-menu.js": "./src/components/05-components/v3-pat/panel/popup-menu.js",
	"./05-components/v3-pat/panel/sapphire-panel.js": "./src/components/05-components/v3-pat/panel/sapphire-panel.js",
	"./05-components/v3-pat/panel/scripts.js": "./src/components/05-components/v3-pat/panel/scripts.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js",
	"./05-components/v3-pat/prescription-card/scripts.js": "./src/components/05-components/v3-pat/prescription-card/scripts.js",
	"./05-components/v3-pat/prescription-expandable/scripts.js": "./src/components/05-components/v3-pat/prescription-expandable/scripts.js",
	"./05-components/v3-pat/sapphire-header/scripts.js": "./src/components/05-components/v3-pat/sapphire-header/scripts.js",
	"./05-components/v3-pat/sapphire-popup/scripts.js": "./src/components/05-components/v3-pat/sapphire-popup/scripts.js",
	"./05-components/v3-pat/sapphire-radio-button/scripts.js": "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js",
	"./05-components/v3-pat/scales/scale-main-structure.js": "./src/components/05-components/v3-pat/scales/scale-main-structure.js",
	"./05-components/v3-pat/scales/toggle-item-control.js": "./src/components/05-components/v3-pat/scales/toggle-item-control.js",
	"./05-components/v3-pat/search-and-select/select-ssd.js": "./src/components/05-components/v3-pat/search-and-select/select-ssd.js",
	"./05-components/v3-pat/search-and-select/ssd-search.js": "./src/components/05-components/v3-pat/search-and-select/ssd-search.js",
	"./05-components/v3-pat/searchable-client-side/scripts.js": "./src/components/05-components/v3-pat/searchable-client-side/scripts.js",
	"./05-components/v3-pat/section-expandable-custom/scripts.js": "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js",
	"./05-components/v3-pat/section-expandable-inside/scripts.js": "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js",
	"./05-components/v3-pat/select-system/scripts.js": "./src/components/05-components/v3-pat/select-system/scripts.js",
	"./05-components/v3-pat/shift-container/scripts.js": "./src/components/05-components/v3-pat/shift-container/scripts.js",
	"./05-components/v3-pat/shift-table/shiftTable.js": "./src/components/05-components/v3-pat/shift-table/shiftTable.js",
	"./05-components/v3-pat/shift-table/shiftTableCard.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js",
	"./05-components/v3-pat/shift-table/shiftTableCardProgress.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js",
	"./05-components/v3-pat/shift-table/shiftTableHover.js": "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js",
	"./05-components/v3-pat/side-menu/scripts.js": "./src/components/05-components/v3-pat/side-menu/scripts.js",
	"./05-components/v3-pat/sidebar/sidebar-structure.js": "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js",
	"./05-components/v3-pat/small-box-selectable/scripts.js": "./src/components/05-components/v3-pat/small-box-selectable/scripts.js",
	"./05-components/v3-pat/spinner-horizontal/scripts.js": "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js",
	"./05-components/v3-pat/spinner-vertical/scripts.js": "./src/components/05-components/v3-pat/spinner-vertical/scripts.js",
	"./05-components/v3-pat/split-button/scripts.js": "./src/components/05-components/v3-pat/split-button/scripts.js",
	"./05-components/v3-pat/ssd-component-block/scripts.js": "./src/components/05-components/v3-pat/ssd-component-block/scripts.js",
	"./05-components/v3-pat/ssd-list-line/scripts.js": "./src/components/05-components/v3-pat/ssd-list-line/scripts.js",
	"./05-components/v3-pat/table-form/scripts.js": "./src/components/05-components/v3-pat/table-form/scripts.js",
	"./05-components/v3-pat/tabs-extended/scripts.js": "./src/components/05-components/v3-pat/tabs-extended/scripts.js",
	"./05-components/v3-pat/tabular-list/scripts.js": "./src/components/05-components/v3-pat/tabular-list/scripts.js",
	"./05-components/v3-pat/tabular-scroll/scripts.js": "./src/components/05-components/v3-pat/tabular-scroll/scripts.js",
	"./05-components/v3-pat/timeline/scripts.js": "./src/components/05-components/v3-pat/timeline/scripts.js",
	"./05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js": "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js",
	"./05-components/v3-pat/truncated-content/scripts.js": "./src/components/05-components/v3-pat/truncated-content/scripts.js",
	"./08-pages/clinicianWorkArea.js": "./src/components/08-pages/clinicianWorkArea.js",
	"./08-pages/eSignature.js": "./src/components/08-pages/eSignature.js",
	"./08-pages/remoteAppointment.js": "./src/components/08-pages/remoteAppointment.js",
	"./globals.js": "./src/components/globals.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components sync recursive \\.js$";

/***/ }),

/***/ "./src/components/00-settings/config.js":
/*!**********************************************!*\
  !*** ./src/components/00-settings/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};


/***/ }),

/***/ "./src/components/03-elements/script.js":
/*!**********************************************!*\
  !*** ./src/components/03-elements/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component Textarea */
(function($, window, document, SapphireWidgets) {
  
  $(document).ready(function() {
    window.parent.CallTextAreaAutoResize();
  });

  window.CallTextAreaAutoResize = function prepareTextAreaAutoResize(TextAreaId){
    
    if(TextAreaId==undefined){
      var textAreaInput = $('textarea');
    }else{
      var textAreaInput = $('#'+TextAreaId);
    }
    textAreaInput.each(function(){
        $(this).attr('rows',2);
        resizeTextArea($(this));
    });

    textAreaInput.on('input', function(){
      resizeTextArea($(this));
    });
  }

  function resizeTextArea ($textAreaInput) {
    console.log($textAreaInput[0].scrollHeight);
    if($textAreaInput[0].scrollHeight == 0){
      $textAreaInput.css('height', '60px');
    }else{
      $textAreaInput.css('height', $textAreaInput[0].scrollHeight+'px');
    }
  }
})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/layout/layout-base.js":
/*!************************************************************!*\
  !*** ./src/components/05-components/layout/layout-base.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBase */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new LayoutBase(config);
		SapphireWidgets.LayoutBase.widgetId = config.widgetId;
	};

	var openSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].openSidebarIframe(duration);
	};

	var closeSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].closeSidebarIframe(duration);
	};

	var scrollToElement = function($element, offset = 0) {
		var $targetElement = $element;

		if (!!$targetElement.length) {
			var scrollToOffsetInterval;

			scrollToOffsetInterval = setInterval(function() {
				if (window[SapphireWidgets.LayoutBase.widgetId].getThresholds().secondaryThreshold > 0) {
					clearInterval(scrollToOffsetInterval);

					let targetElementOffsetTop = $targetElement.offset().top;

					const isFixed = $('.LayoutBase-secondary').hasClass('isFixed');
					const isEmergency = !!$('.LayoutBase-emergency').text();

					const headerHeight = $('.SapphireHeader').height();
					const secondaryHeight = $('.LayoutBase-secondary').outerHeight();
					const emergencyHeight = isEmergency ? $('.LayoutBase-emergency').height() : 0;

					//const secondaryFixed = isFixed ? secondaryHeight : secondaryHeight - 26;
					targetElementOffsetTop = targetElementOffsetTop - (headerHeight + secondaryHeight + emergencyHeight);

					$('body, html').scrollTop(targetElementOffsetTop - 16);
				}
			}, 250);
		}
	};

	var LayoutBase = function(config) {
		var _this = this;
		this.layoutBaseRedrawTimer = 0;
		this.hasHeader = config.hasHeader;
		this.isExpandable = config.isExpandable;
		this.isTopWindow = window.top === window.self ? true : false;
		this.$widget = $('#' + config.widgetId);
		this.$wrapper = this.$widget.find('.LayoutBase-Wrapper');
		this.$spacer = this.$widget.find('.LayoutBase-spacer');
		this.$mainMenu = this.$widget.find('.LayoutBase-MainMenu');
		this.$header = this.$widget.find('.LayoutBase-header');
		this.$headerBody = this.$widget.find('.SapphireHeader-body');
		this.$primaryMenu = this.$widget.find('.LayoutBase-primary-menu');
		this.$emergency = this.$widget.find('.LayoutBase-emergency');
		this.$secondary = this.$widget.find('.LayoutBase-secondary');
		this.$secondaryMenu = this.$widget.find('.LayoutBase-secondary-menu');
		this.$iframeSidebar = this.$widget.find('.LayoutBase-iframesidebar');
		this.$headerAdditionalContent = this.$widget.find('.SapphireHeader-additional-content');
		this.$topfixedContent = this.$widget.find('.LayoutBase-topfixedcontent');
		this.$bottomfixedContent = this.$widget.find('.LayoutBase-bottomfixedcontent');
		this.$mainContent = this.$widget.find('.LayoutBase-MainContent');
		this.extraPaddingEmergency = 0;
		this.extraPaddingSecondary = 0;
		this.setupWindowEvents();
		this.$iframeSidebar.append('<div class="lds-ring 1"><div></div><div></div><div></div><div></div></div>');

		$(function() {
			$('body').addClass('LayoutBase');
			if (_this.isTopWindow) {
				$('body').css('overflow-y', 'scroll');
			}
		});

		$(window).load(function() {
			$('body').click();
			$(window).scroll();

			_this.$iframeSidebar.find('.lds-ring').fadeOut();
		});
	};

	LayoutBase.prototype.setupWindowEvents = function() {
		var _this = this;
		var cursorPositon = 0;

		$(window).resize(function() {
			_this.updateThresholds();
			_this.handleOptionalContainers();
			_this.handleLayoutTopPadding();
			_this.handleLayoutBottomPadding();
		});

		$(window).scroll(function() {
			var newPosition = $(window).scrollTop();

			window.clearTimeout(_this.layoutBaseRedrawTimer);
			_this.layoutBaseRedrawTimer = window.setTimeout(function() {
				_this.updateThresholds();
				_this.handleOptionalContainers();
				_this.handleLayoutTopPadding();
				_this.handleLayoutBottomPadding();
				_this.handleManageQueueCard(cursorPositon, newPosition);
				cursorPositon = newPosition;
			}, 100);
		});
	};

	LayoutBase.prototype.handleOptionalContainers = function() {
		/*const scrollTop = $(window).scrollTop();
		const isEmergency = !!$('.LayoutBase-emergency').text();*/
	};

	LayoutBase.prototype.handleLayoutTopPadding = function() {
		var paddingTop = this.contentThreshold + this.extraPaddingEmergency + this.extraPaddingSecondary;
		this.$spacer.stop().animate(
			{
				height: paddingTop,
			},
			0,
			'linear'
		);
		if (this.$topfixedContent.length === 1) {
			this.$topfixedContent.css({
				width: $('.LayoutBase-MainContent').width(),
				top: this.topfixedContentThreshold + 'px',
			});
		}
	};

	LayoutBase.prototype.handleLayoutBottomPadding = function() {
		if (this.$bottomfixedContent.length === 1) {
			if ($('body')[0].scrollHeight > $('body').height()) {
				var bottomFixedHeight = this.$bottomfixedContent.outerHeight(true);
				this.$wrapper.addClass('hasFixedBottom').css('padding-bottom', bottomFixedHeight + 'px');
				this.$bottomfixedContent.css({
					width: $('.LayoutBase-MainContent').outerWidth(true),
				});
			} else {
				this.$wrapper.removeClass('hasFixedBottom').css('padding-bottom', '');
				this.$bottomfixedContent.css({
					width: '',
				});
			}
		}
	};

	LayoutBase.prototype.updateThresholds = function() {
		var mainMenuHeight = this.$mainMenu.outerHeight(true) || 0;
		var headerBodyHeight = this.$headerBody.outerHeight(true) || this.$header.outerHeight(true) || 0;
		var topfixedContentHeight = this.$topfixedContent.outerHeight(true) || 0;
		var primaryMenuHeight = this.$primaryMenu.outerHeight(true) || 0;
		var emergencyHeight = this.$emergency.outerHeight(true) || 0;
		this.topfixedContentThreshold = mainMenuHeight + headerBodyHeight;
		this.contentThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight;
		this.emergencyThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight;
		this.secondaryThreshold =
			mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight + emergencyHeight;
	};

	LayoutBase.prototype.getThresholds = function() {
		return {
			topfixedContentThreshold: this.topfixedContentThreshold,
			contentThreshold: this.contentThreshold,
			emergencyThreshold: this.emergencyThreshold,
			secondaryThreshold: this.secondaryThreshold,
		};
	};

	LayoutBase.prototype.openSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		this.$iframeSidebar.animate(
			{
				width: '100%',
			},
			duration
		);
		$('body')
			.css('overflow-y', 'scroll')
			.click();
	};

	LayoutBase.prototype.closeSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		var targetWidth = this.isExpandable ? 40 : 262;
		this.$iframeSidebar.animate(
			{
				width: targetWidth,
			},
			duration
		);
		$('body').css('overflow-y', 'scroll');
	};

	LayoutBase.prototype.handleManageQueueCard = function(cursorPositon, newPosition) {
		const $manageQueue = $('.ManageQueueContainer');

		if ($manageQueue.length) {
			if (newPosition > cursorPositon) {
				$manageQueue.addClass('ManageQueueContainer--closed');
			} else if (newPosition < cursorPositon) {
				$manageQueue.removeClass('ManageQueueContainer--closed');
			}
		}
	};

	SapphireWidgets.LayoutBase = {
		create,
		closeSidebarIframe,
		openSidebarIframe,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-blank.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-blank.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBlank */
$(function () {
	if (window.frameElement) {
		if (!!$(this.frameElement).closest('.MainInteractiveCard').length) {
			$('.LayoutBlank.Page').addClass('MainInteractiveCard');
		}
	}
});

/***/ }),

/***/ "./src/components/05-components/layout/layout-emergency.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/layout/layout-emergency.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, document, SapphireWidgets) {
	const ForwardPatientComponent = () => {
		const $allOptions = $('.ForwardLocationsContent');
		const $multiple = $('.ForwardLocationsDiv');
		const $single = $('.SingleLocation');

		$('body').mouseup(function(e) {
			const notClickInAllOptions = !$allOptions.is(e.target) && $allOptions.has(e.target).length === 0;
			const notClickInMultiple = !$multiple.is(e.target) && $multiple.has(e.target).length === 0;
			const notClickInSingle = !$single.is(e.target) && $single.has(e.target).length === 0;
			const isOpen = $multiple.is(':visible');

			if (notClickInAllOptions && notClickInMultiple && notClickInSingle && isOpen) {
				$multiple.click();
			}
		});
	};

	SapphireWidgets.LayoutEmergency = {
		ForwardPatientComponent,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-popup.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-popup.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutPopup */
(function($, window, document, SapphireWidgets) {
	var popupWidth;
	var popupMinWidth;
	var popupHeight;
	var popupMinHeight;
	var popupMaxHeight;
	var popupWidthPercentage;
	var layoutPopupResizeTimer;

	var $popup = $('.LayoutPopup');
	var $osPopup = window.parent.$('.os-internal-Popup.os-internal-ui-dialog');
	var $osPopupContent = window.parent.$('.os-internal-ui-dialog-content.os-internal-ui-widget-content');
	var $overlay = window.parent.$('.os-internal-ui-widget-overlay');
	var popupSize;
	var paddingBody;

	const BODY_PADDING_TOP_BOTTOM = 32;

	const create = function(config) {
		SapphireWidgets.LayoutPopup.config = config;
		popupSize = SapphireWidgets.LayoutPopup.config.PopupSize;
		paddingBody = config.noContentPadding ? 0 : BODY_PADDING_TOP_BOTTOM;

		$(function() {
			$('body').addClass('LayoutPopup'); // because datetimerangepicker is attached to body

			if (SapphireWidgets.LayoutPopup.config.isTouch) {
				$popup.addClass('isTouch');
				$('body').addClass('isTouch'); // because select2 is attached to body
			}

			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation, index) {
					// Avoid to redraw the dialog if it is one the following popups
					if (
						SapphireWidgets.PopupsToAvoidMutations &&
						SapphireWidgets.PopupsToAvoidMutations.some(e => $(`.${e}`).length)
					) {
						return false;
					}

					redrawDialogWindow();
				});
			});

			observer.observe(document.body, {
				childList: true,
				subtree: true,
				attributes: false,
			});

			$('body').css('visibility', 'hidden');
		});

		$(window).load(function() {
			$(this.frameElement).css({
				width: '100%',
				height: '100%',
			});

			setTimeout(function() {
				resizeDialog();
				resizeContent();
				$('body').css('visibility', 'visible');
			}, 150);

			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.LayoutPopup.redrawDialogWindow);
		});

		$(window.parent)
			.off('resize.LayoutPopup')
			.on('resize.LayoutPopup', function() {
				redrawDialogWindow();
			});
	};

	const redrawDialogWindow = function() {
		clearTimeout(layoutPopupResizeTimer);
		layoutPopupResizeTimer = setTimeout(function() {
			resizeDialog();
			resizeContent();
			$('body').css('visibility', 'visible');
		}, 300);
	};

	const resizeDialog = function() {
		if (SapphireWidgets.LayoutPopup.config.hasClose) {
			window.parent.$('.os-internal-ui-dialog-titlebar').show();

			if (window.top._iframePopup != undefined || false) {
				const $closeButton = window.parent.$('.os-internal-ui-dialog-titlebar-close');

				$closeButton.removeAttr('href');
				$closeButton.off('click').on('click', () => window.top._iframePopup.SapphireWidgets.SapphirePopup.close());
			}
		}

		if (window.top.$('body').hasClass('LayoutBase')) {
			window.top.$('body').css({
				overflowY: 'hidden',
			});
		}

		$overlay.width('100%');

		calcWidthPercentage(popupSize, $osPopupContent);

		$osPopup.css({
			left: 'unset',
			top: 'unset',
			height: 'auto',
			minWidth: popupMinWidth + 'px',
			width: popupWidth + 'px',
		});
	};

	const resizeContent = function() {
		var $body = $('.LayoutPopup__body__content');
		var contentScrollTop = $body.scrollTop();

		if (popupSize === 'Small' && $('.daterangepicker:visible').length > 0) {
			// skip the reset of .LayoutPopup__body__content
		} else {
			$body.css({
				height: 'auto',
			});
		}

		let bodyContent = paddingBody
			? $('.LayoutPopup__body__content')[0].scrollHeight
			: $('.LayoutPopup__body__content').height();

		var headerHeight = $('.LayoutPopup__header').innerHeight() || 0;
		var introHeight = $('.LayoutPopup__intro').innerHeight() || 0;
		var bodyHeight = bodyContent || 0;
		var footerHeight = $('.LayoutPopup__footer').innerHeight() || 0;
		var contentHeight = headerHeight + introHeight + bodyHeight + footerHeight + paddingBody;
		var dialogHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();
		const windowHeight = $(window.parent).height();

		if (popupSize === 'Small') {
			var parentHeight = $(window.parent).height();

			if (contentHeight > parentHeight) {
				$osPopupContent.height(parentHeight - 70);
				$body.height($osPopupContent.height() - paddingBody);
			} else {
				$osPopupContent.height(contentHeight);
			}
		} else {
			if (contentHeight < dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight < dialogHeight) {
				$osPopupContent.height(contentHeight);
				if (contentHeight < popupMinHeight) {
					var diference = popupMinHeight - contentHeight;
					$body.height(bodyHeight + diference);
				}
			} else if (contentHeight >= dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight >= dialogHeight) {
				if (contentHeight > popupMaxHeight) {
					$osPopupContent.height(popupMaxHeight);
					var forcedBodyHeight = popupMaxHeight - headerHeight - introHeight - footerHeight - paddingBody;
					$body.height(forcedBodyHeight);
				} else {
					$osPopupContent.height(contentHeight);
				}
			} else {
				console.warn('Unexpected combination...');
			}
		}

		// Handle when DateTimeRangePicker is opened
		var dateRangePicker = $('.daterangepicker:visible');
		if (dateRangePicker.length === 1) {
			if (dateRangePicker[0].getBoundingClientRect().bottom > dialogHeight) {
				var difference = dateRangePicker[0].getBoundingClientRect().bottom - dialogHeight;
				var bodyHeight = $('.LayoutPopup__body__content').outerHeight(true);

				$('.LayoutPopup__body__content').height(bodyHeight + difference + paddingBody);
				$osPopupContent.height($('body')[0].scrollHeight);

				const popupTotalHeight = $osPopupContent.height();
				const newContentHeight = $('.LayoutPopup__body').outerHeight(true) + headerHeight + introHeight + footerHeight;

				if (windowHeight < 720) {
					const coords = dateRangePicker[0].getBoundingClientRect();
					var point = window.parent.scrollY + coords.top - coords.height;
					dateRangePicker.addClass('drop-up').css('top', point);
				} else if (windowHeight < 980 && newContentHeight > popupTotalHeight) {
					$osPopupContent.css({
						maxHeight: newContentHeight + 'px',
					});
				}
			}
		}

		$body.scrollTop(contentScrollTop);
	};

	const increaseHeight = function(diference) {
		$osPopupContent.height($osPopupContent.height() + diference);
	};

	const scrollToElement = function($element) {
		var $targetElement = $element;
		if (!!$targetElement.length) {
			var scrollToOffsetInterval;
			scrollToOffsetInterval = setInterval(function() {
				clearInterval(scrollToOffsetInterval);
				var headerHeight = $('.LayoutPopup__header').outerHeight(true) || 0;
				var introHeight = $('.LayoutPopup__intro').outerHeight(true) || 0;
				var currentBodyScroll = $('.LayoutPopup__body__content')[0].scrollTop || 0;
				var targetElementOffsetTop = $targetElement.offset().top - headerHeight - introHeight + currentBodyScroll - 20;
				$('.LayoutPopup__body__content').scrollTop(targetElementOffsetTop);
			}, 250);
		}
	};

	const calcWidthPercentage = () => {
		const windowHeight = $(window.parent).height();
		const windowWidth = $(window.parent).width();

		if (popupSize === 'Small') {
			let percentage = 0.33;

			if (windowWidth <= 1024) percentage = 0.5;
			else if (windowWidth > 1024 && windowWidth <= 1440) percentage = 0.4;

			popupWidth = parseInt(windowWidth * percentage);
			popupMinWidth = 400;
		} else if (popupSize === 'Medium') {
			if (windowWidth <= 1024) popupWidthPercentage = 0.8;
			else {
				switch (SapphireWidgets.LayoutPopup.config.PopupWidth) {
					case 'XSmall':
						popupMinWidth = 200;
						popupWidthPercentage = 0.2;
						break;
					case 'Small':
						popupMinWidth = 300;
						popupWidthPercentage = 0.3;
						break;
					case 'Medium':
						popupMinWidth = 700;
						popupWidthPercentage = 0.6;
						break;
					default:
						popupMinWidth = 700;
						popupWidthPercentage = 0.7;
				}

				popupWidthPercentage = SapphireWidgets.LayoutPopup.config.isTouch ? 0.8 : popupWidthPercentage;
			}

			popupWidth = parseInt(windowWidth * popupWidthPercentage);
			popupMinHeight = 100;
			popupMaxHeight = SapphireWidgets.LayoutPopup.config.isTouch
				? parseInt(windowHeight * 0.9)
				: parseInt(windowHeight * 0.7);

			if (SapphireWidgets.LayoutPopup.config.isFixedHeight) popupHeight = popupMaxHeight;
			else popupHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();

			$osPopupContent.css({
				maxHeight: popupMaxHeight + 'px',
				minHeight: popupMinHeight + 'px',
				height: popupHeight + 'px',
			});
		} else if (popupSize === 'Large') {
			popupMinWidth = parseInt(windowWidth * 0.8);
			popupMaxHeight = parseInt(windowHeight * 0.9);
		} else if (popupSize === 'Fixed') {
			popupWidth = SapphireWidgets.SapphirePopup.popupWidth;
			popupMinWidth = SapphireWidgets.SapphirePopup.popupWidth;
		}
	};

	SapphireWidgets.LayoutPopup = {
		create,
		resizeDialog,
		resizeContent,
		increaseHeight,
		redrawDialogWindow,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).unload(function() {
	if (!!$('.LayoutPopup').length) {
		window.top.$('body').css({
			overflowY: 'scroll',
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/layout/subLayoutLeft.js":
/*!**************************************************************!*\
  !*** ./src/components/05-components/layout/subLayoutLeft.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SubLayoutLeft */
(function($, window, document, SapphireWidgets) {
	const create = function() {};

	SapphireWidgets.SubLayoutLeft = {
		create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/actions-menu/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/actions-menu/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ActionsMenu */
(function($, window, SapphireWidgets) {
	var create = function(config) {
		var $triggerElement = $('#' + config.triggerElement);
		var $contentElement = $('#' + config.contentElement);

		if ($contentElement.text().length < 1) {
			$triggerElement.hide();
		}

		$(function() {
			// inside a document ready due to sapphire popup binded events
			window.setTimeout(function() {
				var position = config.position;
				if (config.locale === 'AR') {
					switch (config.position) {
						case 'right':
							position = 'left';
							break;
						case 'left':
							position = 'right';
							break;
						case 'bottom-left':
							position = 'bottom-right';
							break;
						case 'bottom-right':
							position = 'bottom-left';
							break;
						case 'top-left':
							position = 'top-right';
							break;
						case 'top-right':
							position = 'top-left';
							break;
					}
				}
				$triggerElement.tooltipster({
					content: $('<section/>').append($contentElement.clone(true, true)),
					trigger: config.triggerEvent,
					position: position,
					maxWidth: config.maxWidth,
					theme:
						'tooltipster-location--' +
						config.location +
						' ActionsMenu-tooltip Padding--' +
						config.padding +
						' Border--' +
						config.border,
				});
				$contentElement.remove();
			}, 500);
		});
	};

	SapphireWidgets.ActionsMenu = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/button-link/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/button-link/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ButtonLink */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			const $widget = $(`#${config.widgetId} .ButtonClick`);

			$widget.off('click').on('click', function(e) {
				const _target = $(e.target);

				if (_target.closest('.ButtonClick.click').length == 0) {
					$('.ButtonClick.click').removeClass('click');
					$(this).addClass('click');
				}
			});
		});
	};

	SapphireWidgets.ButtonLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/card-charts/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/card-charts/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CardCharts */
SapphireWidgets.CardChartsPopup = () => {
	$(document).ready(function() {
		window['CardChartsScroll'] = {};
		const isInsideIframe = window.frameElement != undefined || false;

		let $component = $('.CardCharts');
		let $header = $component.find('.CardCharts__Header');
		let $content = $component.find('.CardCharts__Content');
		let $properties = $component.find('.CardCharts__Properties');
		let $headerDiv = $component.find('.CardCharts__HeaderChart > div');
		let $fakeColumns = $('.FakeColumns');
		let $bodyContent = $('.LayoutPopup__body');

		if (isInsideIframe && !$fakeColumns.length) {
			$headerDiv.append(`<div class='FakeColumns'></div>`);
		}

		if (isInsideIframe) {
			$fakeColumns = $('.FakeColumns');

			$content.on('scroll', () => {
				clearTimeout(window['CardChartsScroll'].scrollFinished);
				window['CardChartsScroll'].scrollFinished = setTimeout(function() {
					if ($content.scrollTop() > 0) $header.addClass('ShadowMedium');
					else $header.removeClass('ShadowMedium');
				}, 50);
			});
		}

		$(window).resize(function() {
			$component = $('.CardCharts');
			$header = $component.find('.CardCharts__Header');
			$content = $component.find('.CardCharts__Content');
			$properties = $component.find('.CardCharts__Properties');
			$fakeColumns = $('.FakeColumns');
			$bodyContent = $('.LayoutPopup__body');

			let headerTitleHeight = 63;
			const headerPropertiesHeight = 56;

			const $charts = $content.find('.CardCharts__Charts .OSChart');

			$charts.each(function() {
				const $chart = $(this);

				const newWidth = $content.width() - $properties.width() + 40;
				$chart.highcharts().setSize(newWidth, $chart.height());
			});

			if (isInsideIframe) {
				const timeoutHeight = setTimeout(() => {
					const $headerTitle = $component.find('.CardCharts__HeaderTitle');

					headerTitleHeight = $headerTitle.length ? $headerTitle.outerHeight() : headerTitleHeight - 6;

					const newHeight = $(window.frameElement).height() - headerTitleHeight;

					$fakeColumns.css('height', `${newHeight + headerPropertiesHeight}px`);
					$content.css('height', `${newHeight - headerPropertiesHeight}px`);

					clearTimeout(timeoutHeight);
				}, 500);
			}
		});

		// See MutationObserver (LayoutPopup)
		SapphireWidgets.PopupsToAvoidMutations = ['ChartsPopup'];
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CollapsibleSidePanel */
(function($, window, SapphireWidgets) {
	class CollapsibleSidePanel {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		openCloseSidePanel(toOpen) {
			if (toOpen) {
				this.$content.css('display', 'grid');

				setTimeout(() => {
					this.$component.addClass('CollapsibleSidePanel--open');
				}, 50);
			} else {
				this.$component.removeClass('CollapsibleSidePanel--open');

				setTimeout(() => {
					$('.CollapsibleSidePanel__Content').css('display', 'none');
				}, 350);
			}
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$header = this.$component.find('.CollapsibleSidePanel__Header');
			this.$content = this.$component.find('.CollapsibleSidePanel__Content');
			this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
			this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
			this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
			this.$close = this.$component.find('.CollapsibleSidePanel__PanelHeader .icon');
			this.$closeEventLink = this.$component.find('.CollapsibleSidePanel__PanelHeader .PanelCloseButton');

			this.$header.on('click', () => this.openCloseSidePanel(true));
			this.$close.on('click', () => {
				this.openCloseSidePanel(false);

				this.$closeEventLink.click();

				if ($('.PanelContentEmpty').length) {
					SapphireWidgets.CollapsibleSidePanel.close(this.options.widgetId, true);
				}
			});

			if (this.options.isAutoCounter) {
				calculateCounter(this.$panelContent, this.$counter1, this.$counter2);

				this.$counter1.removeClass('Hidden');
				this.$counter2.removeClass('Hidden');
			}

			const hasEmptyMessage = this.$panelContent.find('.CollapsibleEmptyMessage');
			const contentToVerify = hasEmptyMessage.length ? this.$panelContent.find('>:first-child') : this.$panelContent;

			if (this.options.hideWhenEmpty && !contentToVerify.text()) {
				this.$component.hide();
			}

			//Diogo Ribeiro - it seems we only need margins when we show the header
			if(!this.options.hideHeader) {
				$(document).ready(function() {
					$('.CollapsibleSidePanel:visible').addClass('MultiMarginTopSmall');
					$('.CollapsibleSidePanel:visible:first').addClass('MultiMarginTopLarge');
				});
			}
			
		}
	}

	const calculateCounter = (panelContent, counter1, counter2) => {
		let total = 0;
		const counters = panelContent.find('.ExapandablePlaceholder.Counter');

		counters.each(function() {
			total += +$(this).text();
		});

		counter1.text(total);
		counter2.text(total);

		if (total === 0) counter2.addClass('ColorLightGreyBG');
	};

	const updateCounter = (widgetId, counter) => {
		this.$component = $(`#${widgetId}`);
		this.counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');

		this.counter1.text(counter);
		this.counter2.text(counter);

		if (+counter === 0) this.counter2.addClass('ColorLightGreyBG');
	};

	const close = (widgetId, hideHeader, updateCounter) => {
		this.$component = $(`#${widgetId}`);

		if (!this.$component.hasClass('CollapsibleSidePanel')) {
			this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		}

		if (hideHeader) {
			this.$component.addClass('CollapsibleSidePanel--headerHidden');
		}

		this.$component.removeClass('CollapsibleSidePanel--open');

		$('.CollapsibleSidePanel:visible').removeClass('MultiMarginTopSmall');
		$('.CollapsibleSidePanel:visible:first').removeClass('MultiMarginTopLarge');
	};

	const checkEmpty = widgetId => {
		this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
		this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
		this.$emptyMessage = this.$component.find('.CollapsibleEmptyMessage');

		this.$emptyMessage.show();

		calculateCounter(this.$panelContent, this.$counter1, this.$counter2);
	};

	const create = config => (window[config.widgetId] = new CollapsibleSidePanel(config));

	SapphireWidgets.CollapsibleSidePanel = { create, close, updateCounter, checkEmpty };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/comp-line/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/comp-line/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CompLine */
(function($, window, SapphireWidgets) {
	function SectionCompline() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var holder = $(ob).closest('.CompLine');
			var Section = $(ob).closest('.CompLineExpandable');
			var SectionContent = Section.children('.CompLine_Expand');

			// get id
			var id = holder.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.CompLine_headLine').off();

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// each all sections
			$('.CompLineExpandable').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] == null
				) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (
					curState !=
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server']
				) {
					// curstate
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['client'] = curState;
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server'] = curState;
				} else {
					// has class expanded
					if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == false &&
						$(this).hasClass('expanded')
					) {
						$(this).removeClass('expanded');
						$(this)
							.children('.CompLine_Expand')
							.height(0);
					} else if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == true &&
						!$(this).hasClass('expanded')
					) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.CompLineExpandable').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[
					$(this)
						.closest('.CompLine')
						.attr('id')
				] = {
					client: stat,
					server: stat,
				};
			});

			// add click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// remove unecessary behaviors

			// event ajax
			osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		const expandable = new SectionCompline();

		expandable.init();
	};

	SapphireWidgets.CompLine = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/country-phone/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/country-phone/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CountryPhone */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $element = document.querySelector(`#${config.widgetId}`);
		const additionalValidations = config.additionalValidations;

		const countryPhoneInput = window.intlTelInput($element, {
			initialCountry: config.initialCountry,
			preferredCountries: config.preferredCountries,
			separateDialCode: config.separateDialCode,
			nationalMode: config.nationalMode,
			autoPlaceholder: config.autoPlaceholder ? 'polite' : false,
			formatOnDisplay: false,
			utilsScript: '/V3_Pat/js/utils.js',
		});

		const $input = $(`#${config.widgetId}`);

		$input.on('keyup', function(e) {
			if ($input.val() === '+' || $input.val() === '') {
				countryPhoneInput.setCountry(config.initialCountry);
			}
		});

		$input.on('keypress', function(e) {
			const selectedCountry = countryPhoneInput.getSelectedCountryData();
			const filter = additionalValidations.find(i => i.CountryPhoneValidations.CountryCode === selectedCountry.iso2);
			const value = $input.val().trim();

			let isValid = true;

			if (filter) {
				const withouCode = value.replace(`+${selectedCountry.dialCode}`, '');

				isValid = withouCode.trim().length + 1 <= filter.CountryPhoneValidations.PhoneLength;
			}

			if (value === `+${selectedCountry.dialCode}`) {
				$input.val(`+${selectedCountry.dialCode} `);
			}

			return (
				isValid &&
				(e.metaKey || // cmd/ctrl
				e.which <= 0 || // arrow keys
				e.which == 8 || // delete key
					(!value.length && e.key === '+') ||
					/[0-9]/.test(String.fromCharCode(e.which)))
			);
		});

		$element.addEventListener('countrychange', function() {
			onChangeCountry();
		});

		const onChangeCountry = () => {
			const $selectedCountryInput = $(`#${config.selectedCountryInput}`);
			const selectedCountry = countryPhoneInput.getSelectedCountryData();

			$selectedCountryInput.val(selectedCountry.iso2);
			$selectedCountryInput.trigger('change');
		};

		$(document).ready(function() {
			onChangeCountry();
		});
	};

	SapphireWidgets.CountryPhone = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/data-tables/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/data-tables/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class DataTables {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$table = this.$widget.find('table');
			this.$table.addClass('cell-border compact');
			this.onInit();
		}

		onInit() {
			this.options = {
				...this.config,
				fixedColumns: true,
				info: false,
				ordering: false,
				paging: false,
				scrollCollapse: true,
				scrollX: true,
				searching: false,
			};

			$(() => {
				this.$table.DataTable(this.options);
			});
		}
	}

	const create = config => (window[config.widgetId] = new DataTables(config));

	SapphireWidgets.DataTables = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/datetime-range-picker/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DateTimeRangePicker */
(function($, window, document, SapphireWidgets) {
	var allDateTimeRangePickers = [];

	var create = function(config) {
		for (var i = 0; i < allDateTimeRangePickers.length; i++) {
			if (allDateTimeRangePickers[i].config.widgetId === config.widgetId) {
				allDateTimeRangePickers.splice(i, 1);
			}
		}
		window[config.widgetId] = new DateTimeRangePicker(config);
		allDateTimeRangePickers.push(window[config.widgetId]);
	};

	var DateTimeRangePicker = function(config) {
		this.config = config;
		this.currentLocale = config.currentLocale;

		this.$widget = $('#' + config.widgetId);
		this.$widget.addClass('DateTimeRangePicker');
		this.$clear = this.$widget.find('.DateTimeRangePicker-clear');
		this.$label = this.$widget.find('.DateTimeRangePicker-label');

		this.isEmptyHour = false;

		if (this.config.attachToInput) {
			this.$widget.addClass('attachedInput');
			this.$model = this.$widget.find('.DateTimeRangePicker-placeholder input[type="text"]');
			this.$model.attr('tabIndex', -1);
		}

		this.$input = $('#' + config.inputId);

		if (!this.config.allowsTyping) {
			this.$input.prop('readonly', true);
		}

		if (this.currentLocale === 'AR') {
			moment.locale('ar-kw');
		}

		var options = {};
		options.startDate = config.startDate;
		options.singleDatePicker = config.singleDatePicker;
		options.autoApply = config.autoApply;
		options.autoUpdateInput = config.autoUpdateInput;
		options.timePicker = config.timePicker;
		options.timePicker24Hour = config.timePicker24Hour;
		options.timePickerIncrement = config.timePickerIncrement;
		options.showDropdowns = config.hasDropdowns; // Month/Year Picker
		options.drops = config.drops;
		options.opens = config.currentLocale === 'AR' && config.opens != 'center' ? 'left' : config.opens;

		var stringConnection = '[, at]';

		if (config.timePicker) {
			//if (!this.config.attachToInput) //changed by Diogo Ribeiro so date picker has a placeholder even if its attached to input (otherwise it never showed)
			this.$input.prop('placeholder', 'DD-MM-YYYY HH:MM');

			if (options.timePicker24Hour) {
				this.config.formatInput = `${this.config.systemDateFormat} HH:mm`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' HH:mm'
					: 'D MMM' + stringConnection + ' HH:mm';
			} else {
				this.config.formatInput = `${this.config.systemDateFormat} hh:mm A`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' hh:mm A'
					: 'D MMM' + stringConnection + ' hh:mm A';
			}
		} else {
			this.$widget.addClass('onlyDate');

			//if (!this.config.attachToInput) 
			this.$input.prop('placeholder', 'DD-MM-YYYY');

			this.config.formatInput = this.config.systemDateFormat;
			this.config.formatLabel = this.config.hasYearWhenText ? 'D MMM YYYY' : 'D MMM';
		}

		if (!config.singleDatePicker) {
			this.$widget.addClass('rangeDates');
		}

		this.config.formatLabel = this.config.hasWeekDayNameWhenText
			? 'ddd[, ]' + this.config.formatLabel
			: this.config.formatLabel;

		options.locale = {
			direction: config.currentLocale === 'AR' ? 'rtl' : 'ltr',
			format: this.config.formatInput,
			cancelLabel: 'Cancel',
			applyLabel: 'Apply',
		};

		if (config.hasTextTrigger) {
			this.$widget.addClass('textTrigger');
		}

		const nulldDates = ['01-01-1900 00:00:00', '1900-01-01 00:00:00'];

		if (config.endDate && !nulldDates.some(i => i === config.endDate)) {
			options.endDate = config.endDate;
		}

		if (config.maxDate && !nulldDates.some(i => i === config.maxDate)) {
			options.maxDate = config.maxDate;
		}

		if (config.minDate && !nulldDates.some(i => i === config.minDate)) {
			options.minDate = config.minDate;
		}

		if (config.DisabledWeekDays) {
			var disabledWeekDays = config.DisabledWeekDays.split(',');
			options.isInvalidDate = function(date) {
				return disabledWeekDays.includes(
					moment(date)
						.day()
						.toString()
				);
			};
		}

		var _this = this;

		this.$input.daterangepicker(options, function(startDate, endDate, label) {
			// after a selection is made
			if (_this.config.attachToInput) {
				let format = '';

				if (_this.config.timePicker) {
					format = `${_this.config.systemDateFormat} HH:mm`;
				}

				if (_this.config.singleDatePicker) {
					if (_this.config.timePicker) _this.$model.val(startDate.format(format));
					else _this.$model.val(startDate.format(_this.config.systemDateFormat));
				} else {
					let start, end;

					if (_this.config.timePicker) {
						start = startDate.format(format);
						end = endDate.format(format);
					} else {
						start = startDate.format(_this.config.systemDateFormat);
						end = endDate.format(_this.config.systemDateFormat);
					}

					_this.$model.val(`${start}  ·  ${end}`);
				}

				_this.$model.trigger('change');
			}

			const initialValue = _this.$input.val();
			const allowsMMYY = _this.config.allowsTyping && _this.config.allowsTypeMMYY && _this.config.singleDatePicker;

			if (allowsMMYY && initialValue.length === 4) {
				_this.picker.setStartDate(moment(`01${initialValue}`, 'DDMMYY'));

				if (_this.config.attachToInput) {
					let format = '';

					if (_this.config.timePicker) format = `${_this.config.systemDateFormat} HH:mm`;
					else format = _this.config.systemDateFormat;

					_this.$model.val(_this.picker.startDate.format(format));
					_this.$model.trigger('change');
				}
			}
		});

		// now we have a proper instance
		this.picker = this.$input.data('daterangepicker');

		this.$calendar = $(this.picker.container);

		if (!!this.config.cssClass) {
			this.$calendar.addClass(this.config.cssClass);
		}

		this.$timeHolder = this.$calendar.find('.calendar-time');
		this.$buttonsHolder = this.$calendar.find('.drp-buttons');

		if (this.config.autoApply) {
			this.$buttonsHolder.hide();
		}

		if (config.isEmptyStartDate) {
			this.clear(false);
		} else if (config.isEmptyStartHour) {
			this.isEmptyHour = true;
			this.updateLabeling();
		} else {
			this.updateLabeling();
		}

		if (config.enabled) {
			this.nativeEvents();
			this.customEvents();
		} else {
			this.$clear.hide();
			this.$input.off('click focus keydown keyup');
		}

		if (this.config.attachToInput) {
			this.handleCustomValidation();
		}
	};

	DateTimeRangePicker.prototype.handleCustomValidation = function() {
		// TO DO
	};

	DateTimeRangePicker.prototype.nativeEvents = function() {
		const _this = this;

		this.$input.on('showCalendar.daterangepicker', function(event, picker) {
			if (_this.config.hasGoToday) {
				_this.$calendar
					.find('.calendar-table thead tr')
					.eq(0)
					.after(
						'<tr><td colspan="7" class="DateTimeRangePicker-calendar-gotoday">' +
							_this.config.goTodayLabel +
							'</td></tr>'
					);
				if (_this.config.drops === 'up') {
					_this.$calendar.css('top', _this.$calendar.offset().top - 24);
				}
			}
			_this.handleViewportPosition();

			if (!_this.config.singleDatePicker) {
				$('.drp-selected').each(function() {
					let text = $(this).text();
					text = text.replace(/-/gi, '·');

					$(this).text(text);
				});
			}
		});

		this.$input.on('show.daterangepicker', function(event, picker) {
			if (_this.config.timePicker && _this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
				if (_this.isEmptyHour) {
					_this.$timeHolder.css('opacity', 0.5);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
				} else {
					_this.$timeHolder.css('opacity', 1);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').removeClass('disabled');
				}
			}
			_this.handleViewportPosition();
			SapphireWidgets.DateTimeRangePicker.openedWidgetId = _this.config.widgetId;

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				const oldBodyHeight = $('body')[0].scrollHeight + 8;
				const calendarSafeHeight = _this.$calendar.outerHeight() + 32;

				const newHeight = oldBodyHeight > calendarSafeHeight ? oldBodyHeight : calendarSafeHeight;

				$('<div class="CalendarPopup__Overlay"></div>').insertAfter(_this.$calendar);

				$(window.frameElement).animate({ minHeight: newHeight });
				$('body').animate({ minHeight: newHeight });
			}
		});

		this.$input.on('hide.daterangepicker', function(event, picker) {
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').remove();
			_this.updateParentIframe();

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				$(window.frameElement).css({ minHeight: 'unset' });
				$('body').css({ minHeight: 'unset' });

				$('.CalendarPopup__Overlay').remove();
			}
		});

		this.$input.on('cancel.daterangepicker', function(event, picker) {});

		this.$input.on('outsideClick.daterangepicker', function(event, picker) {});

		this.$input.on('timechanged.daterangepicker', function(event, picker) {
			_this.isEmptyHour = false;
			_this.$timeHolder.css('opacity', 1);
			if (_this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
			}
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('clickDate.daterangepicker', function(event, picker) {
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('apply.daterangepicker', function(event, picker) {
			if (_this.config.autoApply && _this.config.attachToInput) {
				_this.$model.trigger('change'); //same fix as below for when the date is the same/today, when input is attached it seems we also need this extra step
			}
			_this.$input.trigger('change'); // Fix to call the change when the date is the same/today
			_this.$clear.removeClass('disabled');
			_this.updateLabeling();
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.customEvents = function() {
		var _this = this;
		this.$label.off('click').on('click', function(event) {
			_this.picker.toggle();
		});
		this.$clear.off('click').on('click', function(event) {
			_this.clear();
			_this.picker.hide();
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-clear', function() {
			if (_this.config.timePicker24Hour) {
				_this.$calendar
					.find('.hourselect')
					.val('0')
					.trigger('change');
			} else {
				_this.$calendar
					.find('.hourselect')
					.val('12')
					.trigger('change');
			}
			_this.$calendar
				.find('.minuteselect')
				.val('0')
				.trigger('change');
			_this.$calendar
				.find('.ampmselect')
				.val('AM')
				.trigger('change');
			_this.isEmptyHour = true;
			_this.$timeHolder.css('opacity', 0.5);
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-gotoday', function() {
			_this.picker.setStartDate(moment());
			_this.picker.setEndDate(moment());

			_this.picker.hide();

			if (!_this.config.autoUpdateInput || _this.config.hasTextTrigger || _this.config.attachToInput) {
				_this.updateLabeling();
				_this.$model && _this.$model.trigger('change');
			}

			_this.sendNotification();
		});

		if (this.config.attachToInput) {
			// Nothing
		} else {
			this.$input.on('click', function() {
				window.setTimeout(function() {
					_this.updateParentIframe();
				}, 50);
			});
		}
	};

	DateTimeRangePicker.prototype.updateLabeling = function() {
		var labelMask = this.config.formatLabel;
		var inputMask = this.config.formatInput;

		if (moment(this.picker.startDate).isSame(moment(), 'day')) {
			if (labelMask.includes('D MMM YYYY')) {
				labelMask = labelMask.replace('D MMM YYYY', '[Today,] D MMM YYYY');
			} else if (labelMask.includes('D MMM')) {
				labelMask = labelMask.replace('D MMM', '[Today]');
			}
		}
		if (this.isEmptyHour) {
			labelMask = labelMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');
			inputMask = inputMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');

			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));

				if (this.config.timePicker) {
					this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
				} else {
					this.$input.val(this.picker.startDate.format(this.config.systemDateFormat));
				}
			} else {
				this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
			}
		} else {
			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));
				this.$input.val(this.picker.startDate.format(inputMask));
			} else {
				if (this.config.attachToInput) {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(inputMask));
						if (this.config.timePicker) {
							this.$model && this.$model.val(this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`));
						} else {
							this.$model && this.$model.val(this.picker.startDate.format(this.config.systemDateFormat));
						}
					} else {
						const startDate = this.picker.startDate.format(inputMask);
						const endDate = this.picker.endDate.format(inputMask);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				} else {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(this.config.formatInput));
					} else {
						let startDate = this.picker.startDate.format(this.config.formatInput);
						let endDate = this.picker.endDate.format(this.config.formatInput);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				}
			}
		}
	};

	DateTimeRangePicker.prototype.handleViewportPosition = function() {
		if (
			window.frameElement &&
			($(window.frameElement.parentElement).hasClass('tooltipster-content') ||
				$(window.frameElement.parentElement).hasClass('os-internal-ui-dialog-content'))
		) {
			return;
		}

		if (!this.isInViewport()) {
			var coords = this.$calendar[0].getBoundingClientRect();
			if (this.$calendar.hasClass('drop-up') && this.$calendar[0].getBoundingClientRect().top < 0) {
				var point = window.scrollY + coords.bottom + this.$input.height() + 7;
				this.$calendar
					.removeClass('drop-up')
					.addClass('drop-down')
					.css('top', point);
			} else if (
				!this.$calendar.hasClass('drop-up') &&
				this.$calendar[0].getBoundingClientRect().bottom > (window.innerHeight || document.documentElement.clientHeight)
			) {
				var point = window.scrollY + coords.top - coords.height - this.$input.height() - 7;
				this.$calendar.addClass('drop-up').css('top', point);
			}
		}
	};

	DateTimeRangePicker.prototype.isInViewport = function() {
		var bounding = this.$calendar[0].getBoundingClientRect();
		return (
			bounding.top >= 0 && bounding.bottom <= (window.innerHeight + 5 || document.documentElement.clientHeight + 5)
		);
	};

	DateTimeRangePicker.prototype.clear = function(sendNotification) {
		this.picker.setStartDate(moment());
		this.picker.setEndDate(moment());
		this.isEmptyHour = false;
		this.$clear.addClass('disabled');
		if (this.config.hasTextTrigger) {
			this.$label.html('-- -- --');
		} else {
			this.$input.val('');
		}
		if (sendNotification || sendNotification == undefined) {
			this.sendNotification(false);
		}
	};

	DateTimeRangePicker.prototype.show = function() {
		this.picker.show();
	};

	DateTimeRangePicker.prototype.hide = function() {
		this.picker.hide();
	};

	DateTimeRangePicker.prototype.cancel = function() {
		this.picker.clickCancel();
	};

	DateTimeRangePicker.prototype.sendNotification = function(sendDate) {
		if (this.$widget.hasClass('attachedInput')) {
			this.$input.trigger('change');

			return false;
		}

		if (sendDate || sendDate == undefined) {
			if (this.isEmptyHour) {
				OsNotifyWidget(
					this.config.dateTimeRangePickerFakeNotifyId,
					this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`) + '|' + this.isEmptyHour
				);
			} else {
				if (this.config.timePicker) {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`) + '|' + this.isEmptyHour
					);
				} else {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(this.config.systemDateFormat) + '|' + this.isEmptyHour
					);
				}
			}
		} else {
			OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, 'null|true');
		}
	};

	DateTimeRangePicker.prototype.updateParentIframe = function() {
		if (typeof SapphireWidgets.ResizeParentIframe === 'object') {
			SapphireWidgets.ResizeParentIframe.resize();
		}
		if ($('.Page.LayoutPopup').length === 1) {
			SapphireWidgets.LayoutPopup.redrawDialogWindow();
		}
	};

	SapphireWidgets.DateTimeRangePicker = {
		create: create,
		all: function() {
			return allDateTimeRangePickers;
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/drag-drop/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/drag-drop/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DragDropArea */
(function($, window, document, SapphireWidgets) {
	var dragDropAreaWidget;

	var create = function(config) {
		window[config.dragDropAreaId] = new DragDropArea(config);
		dragDropAreaWidget = window[config.dragDropAreaId];

		$(window).load(function() {
			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.DragDropArea.refreshDragDrop);
		});
	};

	var refreshDragDrop = function() {
		try {
			dragDropAreaWidget.setupDraggable();
			dragDropAreaWidget.setupDroppable();
		} catch (error) {
			console.error(error);
		}
	};

	var DragDropArea = function(config) {
		var _this = this;
		this.config = config;
		this.$area = $('#' + config.dragDropAreaId);
		this.$area.css('display', 'block');
		this.skin = config.skin;
		this.fakeNotifyWidgetId = config.fakeNotifyWidgetId;
		this.setupDroppable();
		if (config.sortable) {
			this.setupSortable();
		}
		this.setupDraggable();
		this.attachEvents();
		this.$area.find('.DragDrop-droppable').each(function() {
			_this.handleDroppable($(this));
		});
	};

	DragDropArea.prototype.setupDraggable = function() {
		var _this = this;

		this.$area.find('.DragDrop-draggable').draggable({
			disabled: this.config.disabled,
			containment: this.$area,
			scope: this.config.dragDropAreaId,
			delay: 0,
			scroll: true,
			revert: 'invalid',
			revertDuration: 0,
			connectToSortable: '.DragDrop-droppable',
			stop: function(event, ui) {
				if (ui.helper.hasClass('ui-draggable-dragging')) {
					const $target = _this.$area.find('.ui-droppable.ui-sortable');

					if (_this.skin === 'Teams') {
						//$(ui.helper).hide();
						OsNotifyWidget($target.data('fakenotify'), ui.helper.data('itemtype') + '|' + ui.helper.data('itemid'));
					} else {
						OsNotifyWidget(
							$target.data('fakenotify'),
							_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.helper.data('itemid')
						);
					}
				}
			},
		});
	};

	DragDropArea.prototype.setupDroppable = function() {
		var _this = this;
		this.$area.find('.DragDrop-droppable').droppable({
			hoverClass: 'hovered',
			addClasses: true,
			disabled: this.config.disabled,
			scope: this.config.dragDropAreaId,
			tolerance: 'pointer',
			drop: function(event, ui) {
				if (_this.skin === 'Teams') {
					$(ui.draggable).hide();
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						ui.draggable.data('itemtype') + '|' + ui.draggable.data('itemid')
					);
				} else {
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.draggable.data('itemid')
					);
				}
			},
		});
	};

	DragDropArea.prototype.setupSortable = function() {
		this.$area.find('.DragDrop-droppable').sortable({
			disabled: this.config.disabled,
			forcePlaceholderSize: true,
			containment: this.$area,
			tolerance: 'pointer',
			revert: 200,
			items: '.DragDrop-droppable-items .DragDrop-draggable',
			placeholder: 'DragDrop-draggable-placeholder',
		});
	};

	DragDropArea.prototype.attachEvents = function() {
		var _this = this;
		this.$area.on('click', '.DragDrop-draggable input', function(evt) {
			evt.stopPropagation();

			const $checkbox = $(evt.currentTarget);
			const $droppable = $checkbox.closest('.DragDrop-droppable');
			const $draggable = $checkbox.closest('.DragDrop-draggable');
			const $action = $draggable.find('.DragDrop-draggable-select-action a');

			$action.trigger('click');

			if ($droppable.hasClass('allowMultiple')) {
				if ($checkbox.prop('checked')) {
					//$checkbox.prop('checked', false);
					$draggable.addClass('selected');
				} else {
					//$checkbox.prop('checked', true);
					$draggable.removeClass('selected');
				}

				//_this.handleDroppable($droppable);
			}
		});

		this.$area.on('click', '.DragDrop-draggable-select-action a', function(evt) {
			evt.stopPropagation();
		});
	};

	DragDropArea.prototype.handleDroppable = function($droppable) {
		if ($droppable.hasClass('allowMultiple')) {
			var $actions = $droppable.find('.DragDrop-droppable-intro');
			var chkSelected = $droppable.find('input[type="checkbox"]:checked').length;
			if (chkSelected > 0) {
				$actions.find('a, button').attr('disabled', false);
			} else {
				$actions.find('a, button').attr('disabled', true);
			}
		} else {
			$droppable.find('input[type="checkbox"]').prop('disabled', true);
		}
	};

	SapphireWidgets.DragDropArea = {
		create: create,
		refreshDragDrop: refreshDragDrop,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/dropdown-categories/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropdown-categories/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DropdownCategories */
(function ($, window, SapphireWidgets) {
	function optGroupSetValue(selectId, inputBoxId, buttonId) {
		var v = document.getElementById(selectId).value;
		$('#' + inputBoxId).val(v);
		$('#' + selectId + ' option[selected]').removeAttr('selected');

		if (v != -1) {
			$('#' + selectId + ' option[value="' + v + '"]').attr('selected', 'selected');
		}

		$('#' + buttonId).click();
		$('#s2id_' + selectId).removeClass('select2-container-active');
	}

	function OsCustomValidatorOptGroup(a, b) {
		var _e = $('#' + a.controltovalidate);
		var isValid = _e.find('option[selected]').length;
		var hasSibling_MandatorySelect2 = _e.prev('div.select2-container.Mandatory').length;

		if (hasSibling_MandatorySelect2) {
			if (isValid) {
				_e.prev('div.select2-container.Mandatory').removeClass('Not_Valid');
			} else {
				_e.prev('div.select2-container.Mandatory').addClass('Not_Valid');
			}
		}

		return isValid;
	}

	function addOptGroupValidator(optGroupElementId) {
		OsPage_Validators.push({
			controltovalidate: optGroupElementId,
			enabled: true,
			errormessage: 'Required field!',
			evaluationfunction: 'SapphireWidgets.DropdownCategories.OsCustomValidatorOptGroup',
			initialvalue: '',
			isvalid: true,
		});
	}

	SapphireWidgets.DropdownCategories = {
		optGroupSetValue,
		OsCustomValidatorOptGroup,
		addOptGroupValidator,
	};
})(jQuery, window, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/dropzone/dropzone.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropzone/dropzone.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component Dropzone */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		window.Dropzone.autoDiscover = false;

		$(document).ready(function() {
			bindEvents(config);

			const myDropzone = new window.Dropzone(config.hiddenInputContainer, {
				...config,
				init: function() {
					let prevFile;

					const filesList = config.filesList ? config.filesList.split(',') : [];

					for (const item of filesList) {
						const mockFile = { name: item, size: 12345678 };

						this.emit('addedfile', mockFile);
						this.emit('complete', mockFile);
						this.files.push(mockFile);

						$(`${config.hiddenInputContainer} .dz-filename`).attr('title', item);

						prevFile = mockFile;
					}

					if (+config.maxFiles === 1 && config.isReplacePrevious) {
						this.on('addedfile', function() {
							if (prevFile !== undefined) {
								this.removeFile(prevFile);
							}
						});
					}

					const $notifyInput = $(`#${config.notifyInputId}`);

					this.on('success', function(file, responseText) {
						prevFile = file;

						$(`#${config.notifyInputId} .dz-filename`).attr('title', file.name);
						$notifyInput.val(responseText);
						$notifyInput.change();
					});

					this.on('error', function(file, responseText) {
						prevFile = file;

						$notifyInput.val(responseText);
						$notifyInput.change();
					});
				},
			});
		});
	};

	const bindEvents = function(config) {
		$(`#${config.widgetId} .UploadMessageClass`).on('click', () => {
			$(`#${config.widgetId} .dz-clickable`).click();
		});
	};

	SapphireWidgets.Dropzone = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/expandable-link/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/expandable-link/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ExpandableLink */
(function($, window, SapphireWidgets) {
	const create = widgetID => {
		const $elementWrapper = $(`#${widgetID}`);

		if ($elementWrapper.parent('.ExpandableList').hasClass('HideWhenEmpty')) {
			const text = $elementWrapper.find('.ExpandableLink__Content').text();

			if (text.length === 0) $elementWrapper.parent('.ExpandableList').hide();
		}

		bindEvents(widgetID);
	};

	const bindEvents = widgetID => {
		$(`#${widgetID} .ExpandableLink__Header`).click(() => openClose(`#${widgetID}`));
	};

	const openClose = elementID => {
		// When the expandables are inside a container with class ExpandableLinkGroup, will act like a expandable group
		const $linkGroup = $(elementID).closest('.ExpandableLinkGroup');

		if ($linkGroup.length) {
			const $expandables = $linkGroup.find('.ExpandableLink--expanded').not(elementID);

			$expandables.removeClass('ExpandableLink--expanded');
		}

		$(elementID).toggleClass('ExpandableLink--expanded');

		if (SapphireWidgets.ResizeParentIframe) {
			SapphireWidgets.ResizeParentIframe.resize();
		}
	};

	SapphireWidgets.ExpandableLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component FullScreenTabsWrapper */
SapphireWidgets.FullScreenTabsWrapper = () => {
	$(document).ready(function() {
		$('.TabWrapper').click(function() {
			const $wrapper = $(this).closest('.FullScreenTabsWrapper__Tabs');
			$wrapper.find('*').removeClass('Active');

			$(this).addClass('Active');
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-card/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-card/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PersonCard */
$(document).ready(function() {
	var PersonCardEvent = function() {
		$('.IsExpandable .PersonCard__headerLeftInfo, .IsExpandable .PersonCard__content')
			.off('click')
			.on('click', function() {
				const $header = $(this).closest('.PersonCard_header');
				const $onCardOpenLink = $header.find('.PersonCard__OnCardOpenLink');
				const $onCardCloseLink = $header.find('.PersonCard__OnCardCloseClick');
				const $content = $header.next();

				const $card = $(this).closest('.PersonCard');

				$content.removeClass('IsExpanded');

				if ($card.hasClass('IsOpen')) {
					$onCardCloseLink.triggerHandler('click');
					$card.removeClass('IsOpen');
				} else {
					$onCardOpenLink.triggerHandler('click');

					$content.addClass('IsExpanded');

					$card.addClass('IsOpen');
				}
			});
	};

	$('.StopPropagation').click(function(event) {
		event.stopPropagation();
	});

	PersonCardEvent();

	osAjaxBackend.BindAfterAjaxRequest(PersonCardEvent);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-gallery/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-gallery/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGallery */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new GenericGallery(config);
	};

	var GenericGallery = function(config) {
		this.config = config;
		this.$widget = $('#' + this.config.widgetId).css('display', 'block');
		this.equalHeight = this.config.equalHeight;
		if (
			this.$widget.find('> .GenericGallery-content > span').length === 1 &&
			this.$widget.find('.GenericGallery-content > span').hasClass('ListRecords')
		) {
			this.$gallery = this.$widget.find('> .GenericGallery-content > span.ListRecords');
		} else {
			this.$gallery = this.$widget.find('> .GenericGallery-content');
		}

		let templateColumn = 'repeat(' + this.config.columnSizing + ', minmax(' + this.config.columnMinWidth + ', 1fr))';

		if (this.config.maxItemsRow > 0) {
			templateColumn = `repeat(${this.config.columnSizing}, minmax(max(${this.config.columnMinWidth}, (100% - (${this.config.maxItemsRow} - 1) * ${this.config.gapColumn}px) / ${this.config.maxItemsRow}), 1fr))`;
		}

		this.$gallery.css({
			display: 'grid',
			gridTemplateColumns: templateColumn,
		});

		this.$galleryItems = this.$gallery.children();
		this.$galleryItems.each(function() {
			if (!$(this).hasClass('GenericGallery-item')) {
				$(this).wrap('<div class="GenericGallery-item"></div>');
			}
		});
	};

	SapphireWidgets.GenericGallery = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-grid/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-grid/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGrid */
(function ($, window, document, SapphireWidgets) {
	var allGenericGrids = [];

	var create = function (config) {
		window[config.widgetId] = new GenericGrid(config);
		allGenericGrids.push(window[config.widgetId]);
	};

	var GenericGrid = function (config) {
		var _this = this;
		this.config = config;
		console.log(this.config);
	};

	SapphireWidgets.GenericGrid = {
		create: create,
	};

})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HorizontalToolbar */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $widget = $('#' + config.widgetId);

		$(document).ready(() => init($widget, config));

		if (config.isArrowNavigation) {
			$(window).load(() => {
				const $itemWrapper = $widget.find('.MenuItemWrapper.Active');
				if ($itemWrapper.length) {
					$itemWrapper[0].scrollIntoView({
						behavior: 'auto',
						block: 'end',
					});
				}
			});
		}
	};

	const init = ($widget, config) => {
		if (config.isArrowNavigation) {
			handleArrows($widget);

			const $toolbarItems = $widget.find('.Toolbar__Items');
			const $listItems = $widget.find('.Toolbar__Items .ListRecords');
			const $btnRight = $widget.find('.Toolbar__rightBtn');
			const $btnLeft = $widget.find('.Toolbar__leftBtn');

			$toolbarItems.scroll(() => handleArrows($widget));

			$btnRight.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll + 50);

				if (currentScroll == sideWidth) $btnRight.addClass('Disabled');
				if (currentScroll != 50) $btnLeft.removeClass('Disabled');
			});

			$btnLeft.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll - 50);

				if (currentScroll != sideWidth) $btnRight.removeClass('Disabled');
				if (currentScroll == 50) $btnLeft.addClass('Disabled');
			});

			$(window).on('resize.toolbar', () => handleArrows($widget));
		} else {
			handleResize($widget);
			bindEventsClick($widget);

			$(window).on('resize.toolbar', () => handleResize($widget));

			window.addEventListener('ToolbarFixed', () => handleResize($widget), false);
		}
	};

	handleArrows = $widget => {
		const $toolbarItems = $widget.find('.Toolbar__Items');
		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		const $btnRight = $widget.find('.Toolbar__rightBtn');
		const $btnLeft = $widget.find('.Toolbar__leftBtn');

		let currentScroll = $toolbarItems.scrollLeft();
		let menuWidth = $listItems.width();
		let externalWidth = $toolbarItems.width();
		var maxScrolll = menuWidth - externalWidth;

		if (externalWidth > menuWidth) {
			$btnLeft.hide();
			$btnRight.hide();

			$widget.find('.Toolbar_container').addClass('Toolbar_container--noarrows');
		} else {
			$btnLeft.show();
			$btnRight.show();

			$widget.find('.Toolbar_container').removeClass('Toolbar_container--noarrows');
		}

		if (currentScroll === 0) $btnLeft.addClass('Disabled');
		else $btnLeft.removeClass('Disabled');

		if (currentScroll >= maxScrolll) $btnRight.addClass('Disabled');
		else $btnRight.removeClass('Disabled');
	};

	handleResize = $widget => {
		let itemsTotal = 0;
		let hasItemsHidden = false;

		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		$listItems.find('> a[ui]').css('display', 'none');

		const menuWidth = $widget.find('.Toolbar__Items').outerWidth(true);

		$listItems.find('a[ui]').each(function() {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			if (itemsTotal + 90 < menuWidth) {
				$(this).css('display', 'block');
			} else {
				hasItemsHidden = true;

				return false;
			}
		});

		if (hasItemsHidden && !$listItems.find('.Toolbar__MoreOptions').length) {
			$widget
				.find('.Toolbar__MoreOptions')
				.clone()
				.css('display', 'block')
				.appendTo($listItems);

			hasItemsHidden = false;
		}

		const $optionsList = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsList');

		$listItems.find('.Toolbar__MoreOptions').css('display', $optionsList.length ? 'block' : 'none');

		const $hiddenItems = $listItems.find('> a[ui]').filter(function() {
			return $(this).css('display') == 'none';
		});

		$optionsList.empty();

		const hasNotificationHidden = $hiddenItems.find('.MenuItemWrapper_Badge:not(:empty)').length !== 0;
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');

		if (hasNotificationHidden) $trigger.addClass('Toolbar__MoreOptionsIcon--notification');
		else $trigger.removeClass('Toolbar__MoreOptionsIcon--notification');

		$hiddenItems
			.clone()
			.css('display', 'block')
			.appendTo($optionsList);
	};

	bindEventsClick = $widget => {
		const $moreOptions = $widget.find('.Toolbar__Items .Toolbar__MoreOptions');
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');
		const $optionsList = $widget.find('.Toolbar__MoreOptionsList');

		$trigger.on('click', event => {
			$moreOptions.toggleClass('Toolbar__MoreOptions--open');
			event.stopPropagation();
		});

		$optionsList.on('mousewheel', event => {
			event.stopPropagation();
		});

		$('body').on('mouseup', event => {
			const $target = $(event.target).parents();

			if (!$target.andSelf().is($moreOptions)) {
				$moreOptions.removeClass('Toolbar__MoreOptions--open');
			}
		});
	};

	SapphireWidgets.HorizontalToolbar = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/hour-picker/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/hour-picker/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HourPicker */
(function($, window, SapphireWidgets) {
	class HourPicker {
		constructor(config) {
			// Options used by jQuery Timerpicker (External Lib)
			this.options = {
				...config,
			};

			SapphireWidgets.HourPicker.allIntances.push(config.widgetId);

			this.onComponentInit();
		}

		isComponentValid() {
			let valid = true;
			let message = `Component HourPicker (${this.options.widgetId}):`;
			let errors = '';

			if (this.$model.length && this.$model.length > 1) {
				errors = `${errors} - Needs one - and just one - Input element.`;
				valid = false;
			}

			if (!this.$model.length && this.$component.find('.HourPicker__Placeholder input').length) {
				errors = `${errors}\n - The Input element must be of type Text.`;
				valid = false;
			}

			if (!valid) console.error(`${message} ${errors}`);

			return valid;
		}

		setComponentPosition() {
			const $widget = $('.ui-timepicker-container');
			const labelLeft = this.$label.offset().left;
			const labelWidth = this.$label.width();
			const labelOuterWidth = this.$label.outerWidth();
			const widgetOuterWidth = $widget.outerWidth();
			const widgetMinWidth = +$widget.css('min-width').replace('px', '');
			const isOutsideWindow =
				labelLeft + labelOuterWidth > $(window).scrollLeft() + $(window).width() - widgetOuterWidth;

			$widget.css({
				left: () => {
					let value = labelLeft - (widgetMinWidth - labelWidth) / 2;

					if (isOutsideWindow) value = labelLeft + labelWidth - widgetOuterWidth;
					else if (value < 0) value = labelLeft;

					return value;
				},
			});
		}

		setElementClass(selector, className) {
			return className ? $(selector).addClass(className) : false;
		}

		defineTimeFormat() {
			let format = [];
			let amPm = '';

			format.push(this.options.is24hFormat ? 'HH' : 'hh');
			if (this.options.showMinutes) format.push('mm');
			if (this.options.showSeconds) format.push('ss');
			if (!this.options.is24hFormat) amPm = ' p';

			return `${format.join(':')}${amPm}`;
		}

		convertTime12to24(value) {
			const [time, modifier] = value.split(' ');
			let [hours, minutes = '00', seconds = '00'] = time.split(':');

			if (hours === '12') hours = '00';
			if (modifier === 'PM') hours = parseInt(hours, 10) + 12;

			return `${hours}:${minutes}:${seconds}`;
		}

		convertTimeFormatToMask(value = '') {
			return value.replace(/[a-zA-Z]+/g, '--');
		}

		onChangeEvent(value = '') {
			let model = '01-01-1900 00:00:00'; //i.e. null
			let label = this.convertTimeFormatToMask(this.options.timeFormat);

			if (value && !!value.trim()) {
				// This condition is correct, model always uses the 24h format
				model = this.options.is24hFormat ? value : this.convertTime12to24(value);
				label = value;
			}

			if (this.options.isNotifyEnabled) OsNotifyWidget(this.options.hourPickerFakeNotifyId, model);
			if (this.options.isTextTriggerable) this.$label.text(label);

			this.$model.val(model);
			this.$model.change();

			return;
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$model = this.$component.find('.HourPicker__Placeholder input[type="text"]');
			this.$input = this.$component.find('.HourPicker__Displayed .HourPicker__InputValue');
			this.$element = this.$input;

			this.options.timeFormat = this.defineTimeFormat();

			if (!this.isComponentValid()) return;
			else {
				const $container = this.$component;

				if (this.options.isTextTriggerable) {
					$container.addClass('HourPicker--textTrigger');

					this.$label = $container.find('.HourPicker__Displayed .HourPicker__LabelValue');
					this.$element = this.$label;

					this.$label.text(this.convertTimeFormatToMask(this.options.timeFormat));

					this.$label.on('click', () => {
						this.$label.timepicker().open();

						this.setComponentPosition();
					});
				}

				if (this.options.isClearable) {
					this.$buttonClear = $container.find('.HourPicker__Displayed .HourPicker__ButtonClear');

					this.$buttonClear.on('click', () => {
						this.$input.val('');
						this.onChangeEvent();
					});
				}

				this.$element.timepicker({
					...this.options,
					change: time => this.onChangeEvent(time ? $().timepicker.formatTime(this.options.timeFormat, time) : null),
				});

				this.setElementClass('.ui-timepicker-container', this.options.currentLocale === 'AR' ? 'rtl' : 'ltr');

				this.$input.prop('readonly', !this.options.isTypeEnabled);
				this.$input.prop('placeholder', this.options.timeFormat);
			}
		}
	}

	const create = config => {
		window[config.widgetId] = new HourPicker(config);
	};

	SapphireWidgets.HourPicker = {
		create,
		allIntances: [],
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-lasa/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-lasa/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component InputLASA */
(function() {
	var setupInput = function(config) {
		$('body').off('click', '#' + config.labelId);
		$('body').off('blur change input', '#' + config.inputId);

		$('#' + config.inputId).css('width', '100%');
		$('#' + config.labelId).css('width', '100%');

		$('#' + config.inputId).hide();
		$('#' + config.labelId).show();

		SapphireWidgets.MarkWordsFromList.handlePrompt(config);

		$('body').on('click', '#' + config.labelId, function() {
			$('#' + config.labelId).hide();
			$('#' + config.inputId).show();
			$('#' + config.inputId).focus();
		});

		$('body').on('blur', '#' + config.inputId, function() {
			SapphireWidgets.MarkWordsFromList.handlePrompt(config);
			$('#' + config.inputId).hide();
			$('#' + config.labelId).show();
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.handlePrompt(config);
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: config.labelId });
			}, 250);
		});

		$('body').on('change input', '#' + config.inputId, function() {
			$('#' + config.labelId).text($('#' + config.inputId).val());
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: 'page' });
			}, 250);
		});
	};

	var handlePrompt = function(config) {
		if (!$('#' + config.inputId).val().length) {
			$('#' + config.labelId)
				.text($('#' + config.inputId).prop('placeholder'))
				.css('color', '#999');
		} else {
			$('#' + config.labelId)
				.text($('#' + config.inputId).val())
				.css('color', '');
		}
	};

	SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList || {};
	SapphireWidgets.MarkWordsFromList.setupInput = setupInput;
	SapphireWidgets.MarkWordsFromList.handlePrompt = handlePrompt;
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-clear/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-clear/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithClear {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$clear = this.$widget.find('.InputWithClear-clear');
			this.$notifyLink = this.$widget.find('.InputWithClear-notify-link');
			this.$widgetShield = this.$widget.find('.InputWithClear--shield');
			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				if (this.$input.val() !== '') this.$clear.show();
				else this.$clear.show();
			});

			this.$input.on('blur', () => {
				if (this.$input.val() === '') {
					window.setTimeout(() => {
						if ($('.daterangepicker:visible').length === 1) {
							return false;
						}
						this.$clear.hide();
						this.$notifyLink.trigger('click');
					}, 100);
				}
			});
			this.$clear.on('click', () => {
				this.$input.val('');
				this.$clear.hide();
				this.$notifyLink.trigger('click');
			});
			if (this.config.hasShield) {
				window.setTimeout(() => {
					this.$widgetShield.hide();
				}, this.config.shieldTimeout);
				if (this.config.shieldTimeout > 0) {
					this.$widgetShield.on('click', () => {
						this.$clear.hide();
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new InputWithClear(config));

	SapphireWidgets.InputWithClear = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-list/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-list/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithList {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$list = this.$widget.find('.InputWithList__List');

			this.$input.val('');

			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				// Getting elements again in order to work when this component is cloned (e.g. when using inside ActionsMenu)
				this.$widget = $(`#${this.config.widgetId}`);
				const $input = this.$widget.find('input[type]');
				const $list = this.$widget.find('.InputWithList__List');
				this.$hiddenInput = this.$widget.find('.InputWithList__HiddenInput input');

				if ($input.val().trim() !== '') {
					$list.empty();

					$list.append(`<div><b>Create:</b> ${$input.val()}</div>`);

					if (!$list.is(':visible')) $list.show();
				} else {
					$list.hide();
				}
			});

			this.$list.on('click', e => {
				const $linkNotify = this.$widget.find('.InputWithList-notify-link');
				const $list = this.$widget.find('.InputWithList__List');
				const $input = this.$widget.find('input[type]');

				this.$hiddenInput.val($input.val());
				this.$hiddenInput.change();

				$linkNotify.click();
				$list.hide();
			});
		}
	}

	const create = config => (window[config.widgetId] = new InputWithList(config));

	SapphireWidgets.InputWithList = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-add/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-add/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineAdd */
(function($, window, SapphireWidgets) {
	const create = function(config) {
		$(window).load(function() {
			setWidth(config.widgetId);
			SapphireWidgets.LineAdd.widgetId = config.widgetId;

			osAjaxBackend.BindAfterAjaxRequest(() => setWidth(config.widgetId));
		});

		$(window).on('resize.LineAdd', () => setWidth(config.widgetId));
	};

	const setWidth = function(widgetId) {
		window.setTimeout(function() {
			const $widget = $(`#${widgetId || SapphireWidgets.LineAdd.widgetId}`);
			const widths = [];

			for (i = 1; i < 8; i++) {
				let maxWidthContent = Math.max.apply(
					null,
					$widget
						.find('.lacol' + i)
						.map(function() {
							return $(this).width();
						})
						.get()
				);

				widths.push(maxWidthContent);
				$widget.find('.lacol' + i).width(maxWidthContent);
			}
		}, 100);
	};

	SapphireWidgets.LineAdd = { create, setWidth };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-details-expand-box/script.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-details-expand-box/script.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineDetailsExpandBox */
(function($, window, SapphireWidgets) {
	const init = config => {
		$(`#${config.widgetId} + .LineDetailsExpandBox_action`).click(event => {
			event.stopPropagation();
		});
	};

	const create = config => $(document).ready(() => init(config));

	SapphireWidgets.LineDetailsExpandBox = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/location-box/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/location-box/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LocationBox */
SapphireWidgets.LocationBox = function(widgetId) {
	const $component = $(`#${widgetId}`);

	if ($component.hasClass('On')) {
		$('.DisableRoom').each(function() {
			$(this)
				.removeClass('Off')
				.removeClass('On');
			$(this)
				.parent('.RoomBox')
				.css({
					opacity: '1',
				})
				.removeClass('Selected');
		});
	} else {
		$component
			.addClass('On')
			.removeClass('Off')
			.parent('.RoomBox')
			.css({
				opacity: '1',
			})
			.addClass('Selected');

		$('.DisableRoom:not(#' + widgetId + ')').each(function() {
			$(this).addClass('Off');
			$(this).removeClass('On');
		});

		$('.DisableRoom.Off')
			.parent('.RoomBox')
			.css({
				opacity: '0.50',
			})
			.removeClass('Selected');
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/main-interactive-card/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/main-interactive-card/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MainInteractiveCard */
(function($, window, document, SapphireWidgets) {
	var allMainInteractiveCards = [];
	var defaultDuration = 300;

	var create = function(config) {
		for (var i = 0; i < allMainInteractiveCards.length; i++) {
			if (allMainInteractiveCards[i].config.widgetId === config.widgetId) {
				allMainInteractiveCards.splice(i, 1);
			}
		}
		window[config.widgetId] = new MainInteractiveCard(config);
		allMainInteractiveCards.push(window[config.widgetId]);

		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded && !!osAjaxBackend) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	};

	var MainInteractiveCard = function(config) {
		var _this = this;
		this.config = config;
		this.isLockedOnClose = false;
		this.isOpen = config.isOpen;
		this.isEnabled = config.isEnabled;
		this.isSelectable = config.isSelectable;
		this.allowOpening = config.allowOpening;
		this.allowMultipleOpen = config.allowMultipleOpen;
		this.emitNotifyOnOpen = config.emitNotifyOnOpen;
		this.hideActionsOnOpen = config.hideActionsOnOpen;
		this.hideCaptionOnOpen = config.hideCaptionOnOpen;
		this.hideTitleOnOpen = config.hideTitleOnOpen;
		this.hideSubTitleOnOpen = config.hideSubTitleOnOpen;
		this.headerHeightWhenOpen = config.headerHeightWhenOpen;
		this.MainInteractiveCardFakeNotifyId = config.mainInteractiveCardFakeNotifyId;

		this.$widget = $('#' + config.widgetId);
		this.$widget.css('display', 'block');
		this.$card = this.$widget.find('> .MainInteractiveCard');
		this.$header = this.$widget.find('> .MainInteractiveCard > .MainInteractiveCard-header');
		this.$headerText = this.$header.find('.MainInteractiveCard-header-text');
		this.$expandIcon = this.$header.find('.MainInteractiveCard-expand-icon');
		this.$body = this.$widget.find('> .MainInteractiveCard > div > .MainInteractiveCard-body');
		this.$actions = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-actions'
		);
		this.$caption = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-caption'
		);
		this.$title = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-title'
		);
		this.$subTitle = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-subtitle'
		);
		this.$selectTrigger = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header > .MainInteractiveCard-header-selectable > .MainInteractiveCard-header-selectable-trigger'
		);
		this.$selectPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-selectable-placeholder'
		);
		this.$triggerPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header-triggerAction-placeholder'
		);

		if (this.$triggerPlaceholder.find('a').length === 1) {
			this.$trigger = this.$triggerPlaceholder.find('a');
		}

		if (this.isOpen) {
			this.open(false, -1);
			this.$card.addClass('forceOpen');
		}

		this.$card.addClass(this.headerHeightWhenOpen + 'Header');

		if (this.allowOpening) {
			this.$card.addClass('allowOpening');
		}

		this.attachEvents();

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation, index) {
				_this.handleHeaderWithAbsoluteButtons();
			});
		});

		observer.observe(document.getElementById(config.widgetId), {
			childList: true,
			subtree: true,
			attributes: false,
		});
	};

	MainInteractiveCard.prototype.handleHeaderWithAbsoluteButtons = function() {
		var _this = this;
		if (!!this.$body.find('> div .MainInteractiveCard-absolute-actions').length && this.isOpen) {
			var absoluteActionsWidth = Math.max.apply(
				Math,
				this.$body
					.find('> div .MainInteractiveCard-absolute-actions')
					.map(function() {
						return $(this).outerWidth(true);
					})
					.get()
			);
			var headerMaxWidth = this.$header.width() - absoluteActionsWidth;
			if (headerMaxWidth > 10) {
				this.$headerText.css({
					maxWidth: headerMaxWidth + 'px',
				});
			}
			this.$body
				.find('> div .MainInteractiveCard-absolute-actions .MainInteractiveCard--close')
				.off('click')
				.on('click', function(e) {
					e.preventDefault();
					_this.close();
				});
		}
	};

	MainInteractiveCard.prototype.attachEvents = function() {
		var _this = this;
		this.$header
			.find('.MainInteractiveCard--open:not([disabled])')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.open(true);
			});
		this.$header
			.find('.MainInteractiveCard--close')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.close();
			});
		if (this.allowOpening) {
			const clickAction = function(evt) {
				if ($(evt.target).hasClass('Button')) {
					// the user clicked on a Button inside the header, nothing to do here
				} else {
					if (_this.isOpen) {
						if (
							_this.$widget.find('iframe').length === 1 &&
							!_this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')
						) {
							// do not close when and iframe exists
						} else if (
							_this.$actions.find('a').length > 0 &&
							_this.$actions.find('.MainInteractiveCard--close').length > 0
						) {
							// do not close when the card has actions
						} else {
							_this.close();
						}
					} else {
						_this.open(true);
					}
				}
			};

			this.$headerText.off('click').on('click', function(e) {
				clickAction(e);
			});
			this.$expandIcon.off('click').on('click', function(e) {
				clickAction(e);
			});
		}
		if (this.isSelectable) {
			this.$selectTrigger.off('click').on('click', function(e) {
				if (_this.$selectPlaceholder.find('a').length === 1) {
					_this.$selectPlaceholder.find('a').click();
				} else {
					console.warn('You need 1 link in this placeholder.');
				}
			});
		}
	};

	MainInteractiveCard.prototype.open = function(sendNotify, duration) {
		var duration = duration || defaultDuration;
		this.isOpen = true;
		this.$card.addClass('isOpen');
		if (this.hideActionsOnOpen) {
			this.$actions.css('display', 'none');
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'none');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.css('display', 'none');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'none');
		}
		if (this.emitNotifyOnOpen) {
			if (sendNotify) {
				OsNotifyWidget(this.MainInteractiveCardFakeNotifyId, 'open');
			}
			this.$body.css('display', 'block');
		} else if (this.$trigger) {
			this.$trigger.click();
			this.$body.css('display', 'block');
		} else {
			if (duration > 0) {
				this.$body.slideDown(duration);
			} else {
				this.$body.css('display', 'block');
			}
		}
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			var iframeContents = this.$widget.find('iframe').contents();
			iframeContents.find('.MainInteractiveCard-iframe-actions').css('visibility', 'visible');
		} else {
			this.handleHeaderWithAbsoluteButtons();
		}
		if (!this.allowMultipleOpen) {
			allMainInteractiveCards.forEach(item => (item !== this && item.allowOpening ? item.close(duration) : null));
		}
	};

	MainInteractiveCard.prototype.close = function(duration) {
		var self = this;
		var duration = duration || defaultDuration;
		this.isOpen = false;
		this.$card.removeClass('isOpen');
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			this.$widget
				.find('iframe')
				.find('.MainInteractiveCard-iframe-actions')
				.css('visibility', 'hidden');
		}
		this.$body.slideUp(duration, function() {
			if (self.$card.hasClass('forceOpen')) {
				self.$card.removeClass('forceOpen');
			}
		});
		if (this.hideActionsOnOpen) {
			this.$actions.show();
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'block');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.css('display', 'block');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'block');
		}

		if (this.$header.width() - this.$actions.width() > 10) {
			this.$headerText.css({
				maxWidth: this.$header.width() - this.$actions.width() + 'px',
			});
		}
	};

	MainInteractiveCard.prototype.isOpen = function() {
		return this.isOpen;
	};

	SapphireWidgets.MainInteractiveCard = {
		create: create,
		all: function() {
			return allMainInteractiveCards;
		},
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!$('.MainInteractiveCard').length) {
		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	}

	setTimeout(function() {
		var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
		allMainInteractiveCards.forEach(function(element) {
			element.handleHeaderWithAbsoluteButtons();
		});
	}, 1000);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/menu-bar/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/menu-bar/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MenuBar */
SapphireWidgets.MenuBar = function(config) {
	$(function() {
		var $menuWidget = $('#' + config.menuWidget);

		var menuResider = function() {
			var navWidth = 0;
			var availabeEspace = $menuWidget.find('.Menubar_item').width();

			$menuWidget.find('.Menubar_item .MenuItem').each(function() {
				navWidth += $(this).outerWidth(true);
			});

			if (navWidth > availabeEspace) {
				var lastItem = $menuWidget.find('.Menubar_item .MenuItem').last();
				lastItem.attr('data-width', lastItem.outerWidth(true));
				lastItem.prependTo($menuWidget.find('.Menubar__extraContainer'));
				menuResider();
			} else {
				var firstMoreElement = $menuWidget.find('.Menubar__extraContainer .MenuItem').first();
				if (navWidth + firstMoreElement.data('width') < availabeEspace) {
					firstMoreElement.insertAfter($menuWidget.find('.Menubar_item .MenuItem').last());
					menuResider();
				}
			}

			if (!$menuWidget.find('.Menubar__extraContainer').is(':empty')) {
				$menuWidget.find('.Menubar_extraItem').addClass('show');
			} else {
				$menuWidget.find('.Menubar_extraItem').removeClass('show');
			}
		};

		$menuWidget.find('.MenuItem').click(function() {
			if (
				!$(this)
					.parent()
					.hasClass('Menubar__extraContainer')
			) {
				if (!$(this).hasClass('active') && !$(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$menuWidget.find('.activeIndicator').addClass('shadow');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				} else if (!$(this).hasClass('active') && $(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				}
			} else {
				$(this)
					.find('.MenuItem_subItems')
					.toggleClass('show');
			}
		});

		$menuWidget.find('.Menubar_extraItem .icon').click(function() {
			$menuWidget.find('.Menubar__extraContainer ').toggleClass('show');
		});

		$(document).mouseup(e => {
			var $menu = $menuWidget.find('.MenuItem.active');
			var $moreOptions = $menuWidget.find('.Menubar_extraItem');

			// if the target of the click isn't the menu or a descendant of the menu
			if ($menu.length > 0) {
				if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
					$menu.find('.MenuItem_subItems').removeClass('show');
					$('.activeIndicator').removeClass('shadow');
					$menuWidget.find('.MenuItem.active').removeClass('active');
				}
			}

			if (!$moreOptions.is(e.target) && $moreOptions.has(e.target).length === 0) {
				$moreOptions.find('.Menubar__extraContainer').removeClass('show');
				$('.activeIndicator').removeClass('shadow');
			}
		});

		$(window).on('resize load', function() {
			menuResider();
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/multiple-selection-button/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MultipleSelectionButton */
SapphireWidgets.MultipleSelectionButton = function(WrapperId) {
	const $widget = $(WrapperId);
	const $control = $widget.find('input[type="checkbox"]');

	if ($(WrapperId + ' input[type="checkbox"]').is(':disabled')) {
		$widget.addClass('disabled');
	} else {
		$widget.removeClass('disabled');
	}

	if ($(WrapperId + ' input[type="checkbox"]').is(':checked')) {
		$widget.addClass('active');
	} else {
		$widget.removeClass('active');
	}

	$widget.find('input[type="checkbox"]').change(function() {
		const $parent = $(this).parent();

		if ($(this).is(':checked')) $parent.parent().addClass('active');
		else $parent.parent().removeClass('active');
	});

	$widget.find('.MultipleSelectionButton-label').click(function() {
		$control[0].click();

		setTimeout(function() {
			if ($control.is(':checked')) $widget.addClass('active');
			else $widget.removeClass('active');
		}, 10);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-panel.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-panel.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPanel3Options ConfirmationPanel same javascript code*/

SapphireWidgets.ConfirmationPanel = {
	isAnyPanelOpened: function() {
		return $('body').hasClass('PanelOpened') && $('.PanelContainer:visible').length;
	},

	togglePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) return;

		if (!SapphireWidgets.ConfirmationPanel.isAnyPanelOpened()) {
			$('body').addClass('PanelOpened');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.PanelContainer')
					.slideToggle(150);
			}, 100);

			if (window.frameElement) {
				SapphireWidgets.RemoteAppointment.setModalMinimized();
			}
		}
	},

	closePanel: function(PanelId) {
		$('body').removeClass('PanelOpened');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.PanelContainer')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[confirmation-panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('confirmation-panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPanel.togglePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.ConfirmationPanel.setPanelBehavior();
	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ConfirmationPanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-popup.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-popup.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPopup */
var _isInIframe = window.frameElement != undefined || false;
SapphireWidgets.ConfirmationPopup = {
	isAnyConfirmationOpened: function() {
		if (_isInIframe) {
			return window.top.$('body').hasClass('confirmation-opened') && window.top.$('.confirm-container:visible').length;
		} else {
			return $('body').hasClass('confirmation-opened') && $('.confirm-container:visible').length;
		}
	},

	toggleConfirm: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		if (!OsValidatorOnSubmit()) return;

		if (!this.isAnyConfirmationOpened()) {
			var _body = $('body');
			var _bodyJS = document.body;
			if (_isInIframe) {
				_body = window.top.$('body');
				_bodyJS = window.top.document.body;
			}

			_body.addClass('confirmation-opened');

			var _confirmId = 'confirm_' + _id;

			var _container = document.createElement('DIV');
			_container.setAttribute('id', _confirmId);
			_container.setAttribute('class', 'confirm confirm-wb');
			_container.setAttribute('confirm-trigger-elementid', _id);

			var _background = document.createElement('DIV');
			_background.setAttribute('class', 'confirm-background confirm-wb');
			_background.setAttribute('id', 'bg_' + _confirmId);
			_container.appendChild(_background);

			var _confirm = document.createElement('DIV');
			_confirm.setAttribute('class', 'confirm-container confirm-wb');
			_container.appendChild(_confirm);

			var _confirmTitle = document.createElement('DIV');
			_confirmTitle.setAttribute('class', 'confirm-title');
			var _title = document.createTextNode(_question);
			_confirmTitle.appendChild(_title);
			_confirm.appendChild(_confirmTitle);

			var _confirmMsg = document.createElement('DIV');
			_confirmMsg.setAttribute('class', 'confirm-message');

			_confirmMsg.innerHTML = _message; /* Set HTML to render the message HTML tags, similar to the Escape Content set as No. */
			_confirm.appendChild(_confirmMsg);

			var _confirmActions = document.createElement('DIV');
			_confirmActions.setAttribute('class', 'confirm-actions');
			_confirm.appendChild(_confirmActions);

			var _noBtnLnk = document.createElement('A');
			_noBtnLnk.setAttribute('class', 'Button Third MultiMarginRight10');
			_noBtnLnk.setAttribute('cancel-button', 'cancel-button');
			_noBtnLnk.setAttribute('ui', 'ConfirmNo1');
			if (_HasNotifyOnCancel == 'True') {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'document.getElementById("' +
							'iframe_' +
							_id +
							'").contentWindow.OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				}
			} else {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				}
			}

			var _noBtn = document.createTextNode('No');
			_noBtnLnk.appendChild(_noBtn);
			_confirmActions.appendChild(_noBtnLnk);

			var _yesBtnLnk = document.createElement('A');
			_yesBtnLnk.setAttribute('class', 'Button SetAsValid Is_Default');
			_yesBtnLnk.setAttribute('cancel-button', '');
			_yesBtnLnk.setAttribute('ui', 'ConfirmYes1');

			if (_isInIframe) {
				_yesBtnLnk.setAttribute(
					'onclick',
					'document.getElementById("' +
						'iframe_' +
						_id +
						'").contentWindow.OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			} else {
				_yesBtnLnk.setAttribute(
					'onclick',
					'OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			}
			var _yesBtn = document.createTextNode('Yes');
			_yesBtnLnk.appendChild(_yesBtn);
			_confirmActions.appendChild(_yesBtnLnk);

			_confirm.appendChild(_confirmActions);

			_container.appendChild(_confirm);

			_bodyJS.appendChild(_container);

			if (_isInIframe) {
				window.top.$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					window.top
						.$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					window.top.$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);

				SapphireWidgets.RemoteAppointment.setModalMinimized();
			} else {
				$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);
			}
		}
	},

	closeConfirmPopup: function(_confirmId) {
		$('body').removeClass('confirmation-opened');
		$('body').css('overflow-y', 'scroll');
		$('#bg_' + _confirmId).fadeOut(140);

		setTimeout(function() {
			$('#' + _confirmId)
				.find('.confirm-container')
				.slideUp(150);
			$('#' + _confirmId).remove();
		}, 100);
	},

	create: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		$(document).ready(function() {
			$('#' + _id)
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPopup.toggleConfirm(_id, _question, _message, _notifyId, _HasNotifyOnCancel);
					if (_isInIframe) {
						window.frameElement.setAttribute('menu-id', _id);
						window.frameElement.setAttribute('id', 'iframe_' + _id);
					}
					return false;
				});
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/modal-popup.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/modal-popup.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Component ModalPopup */

var _isInIframe = window.frameElement != undefined || false;

SapphireWidgets.ModalPopup = {
	create: function(widgetId) {
		$(document).ready(function() {
			// Use this code to append the component to the root body
			// window.frameElement && $(window.frameElement).closest('.MainInteractiveCard-body').length > 0
			if (false) {} else {
				const $widget = $(`#${widgetId}`);
				const $btnClose = $widget.find('.modalPopup_close');

				if (window.frameElement) {
					const $modalRemoteAppt = window.top.$('.RemoteAppointment');

					if ($modalRemoteAppt.length) {
						const $minimizeModal = $modalRemoteAppt.find('.Minimize');
						$minimizeModal.click();
					}
				}

				$btnClose.click(function() {
					$widget.removeClass('Open');
					$widget.removeClass('showclose');
				});
			}
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id-notify.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByIDNotify */
var panelNotifyWidget;
SapphireWidgets.PanelByIdNotify = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},
	togglePanelByNotify: function(Id) {
		if (!isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeIn(140);

			try {
				if (justDragged == false) {
					$('.PanelContainer')
						.css('margin-left', panelMarginLeft)
						.css('left', panelLeft)
						.addClass(panelArrowClass);
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideDown(150);
			}, 100);
		} else {
			$('body').removeClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeOut(140);
			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideUp(150);
			}, 100);
		}
	},
	togglePanelNotifyById: function(Id) {
		$('body').toggleClass('PanelOpened');
		$('#' + Id)
			.parents('.ToggleButton')
			.parent()
			.children('.Panel')
			.fadeToggle(140);

		panelNotifyWidget = $('#' + Id)
			.parents('.ToggleButton')
			.attr('NotifyId');

		setTimeout(function() {
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.children('.PanelContainer')
				.slideToggle(150);
		}, 100);
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByID */
SapphireWidgets.PanelById = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},

	toggleButton: function(id) {
		const $toggleButton = $(`#${id}`).parents('.ToggleButton').length
			? $(`#${id}`).parents('.ToggleButton')
			: $(`#${id}`);

		$toggleButton.click();
	},

	togglePanelById: function(Id) {
		const $toggleButton = $(`#${Id}`).parents('.ToggleButton');
		const $panel = $toggleButton.parent().children('.Panel');
		const $panelContainer = $panel.children('.PanelContainer');
		const $panelBackground = $panel.children('.PanelBackground');

		if (!this.isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('body').css('overflow-y', 'hidden');

			$panel.show();
			$panelContainer.slideDown(200);

			try {
				if (typeof justDragged !== 'undefined') {
					if (justDragged == false) {
						$('.PanelByIdNew_PanelContainer')
							.css('margin-left', panelMarginLeft)
							.css('left', panelLeft)
							.addClass(panelArrowClass);
					}
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$panelBackground.fadeIn(80);

				$toggleButton.click();
			}, 50);
		} else {
			$panelContainer.slideUp(200);

			$panelBackground.fadeOut(80, () => {
				$toggleButton.click();

				$('body').css('overflow-y', 'scroll');
				$('body').removeClass('PanelOpened');

				$panel.hide();
			});
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/popup-menu.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/popup-menu.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PopUpMenu */
SapphireWidgets.PopUpMenu = {
	menuPosition: function(id, Context, Locale) {
		/* Hide any other menus on page and set button as collapsed. */
		$('.popup-menu:visible').hide();

		//var _this = $(this);
		var _this = $('#' + id);
		var Xx = 0;
		var Yy = 0;
		var Ww = 0;
		var Hh = 0;

		//_this.children('.button-expand:visible').hide();

		/* Get the menu element. */
		var _el = _this.next('.popup-menu');

		/* Display the menu. */
		_el.show();

		/* Set button collapse. */
		_this.children('.button-collapse').show();

		/* Get the dimensions of the button. */
		buttonHh = _this.outerHeight();
		buttonWw = _this.outerWidth();

		var buttonY = _this.position().top + buttonHh + 10;
		var buttonX = _this.offset().left;
		//var buttonX = _this.position().left;

		/* Get the distance of menu button and the parent element */
		var popupParentXx = _this.offset().left - _this.position().left;

		var popupXx = _el.offset().left;
		var popupWw = _el.outerWidth();

		Xx = Math.abs(buttonX - $('body').scrollLeft() - popupParentXx);
		Yy = Math.abs(buttonHh - buttonY - $('body').scrollTop());

		if (Locale != 'AR') {
			/* Check if clicked position plus the popup width exceed the window width. */
			if (buttonX + popupWw - $('body').scrollLeft() > $(Context).width()) {
				Xx = buttonX - popupWw - $('body').scrollLeft() - popupParentXx + buttonWw;
				//Xx = ($(window).width() - popupWw) - $('body').scrollLeft();
			}
		}

		/* Set menu position. */
		_el.css({
			left: Xx + 'px',
			top: buttonY + 'px',
		});

		/* Refresh value */
		popupXx = _el.offset().left;

		var _balloonEl = _el.children('.popup-menu-balloon');

		var _balloonXx = _balloonEl.offset().left;
		var _balloonWw = _balloonEl.outerWidth();
		var _balloonPosXx = Math.abs(buttonX - Xx - popupParentXx);

		/* Is the balloon icon positioned out of the popup menu? */
		if (_balloonPosXx + Xx + _balloonWw > Xx + popupWw) {
			_balloonPosXx = _balloonPosXx - _balloonWw;
		}

		/* Set position of the balloon effect. */
		_balloonEl.css('left', _balloonPosXx + 'px');
	},
	menuEvents: function(Context, Locale) {
		$('.popup-button')
			.off('click')
			.on('click', function(e) {
				var id = $(this).attr('id');
				SapphireWidgets.PopUpMenu.menuPosition(id, Context, Locale);

				/*e.stopPropagation();*/

				/* Prevent link submission */
				return false;
			});

		/* v *** Hide popup when click outside *** v */
		function PMClickOutside(event) {
			if (event.hasOwnProperty('target')) {
				var target = $(event.target);
				/*if ((target.parents().index($('a[sapphirehospital], .HospitalPopUp')) == -1)) {}*/
				if (
					!$(event.target).closest(
						'.popup-button, .popup-menu, .os-internal-ui-autocomplete, .os-internal-ui-menu-item, .os-internal-ui-corner-all, ui-autocomplete-item'
					).length
				) {
					$('.popup-menu:visible').hide();
					$('.button-collapse:visible').hide();
					//$('.button-expand').show();
				}
			}
		}

		var _PMIsDrag = false;
		var _PMIsClick = false;
		$(document).on('touchstart', function(event) {
			_PMIsDrag = false;
			_PMIsClick = true;
		});
		$(document).on('touchmove', function(event) {
			_PMIsDrag = true;
		});
		$(document).on('click', function(event) {
			PMClickOutside(event);
			_PMIsDrag = false;
			_PMIsClick = false;
		});
		$(document).on('touchend', function(event) {
			if (!_PMIsDrag && _PMIsClick) {
				PMClickOutside(event);
			}
			_PMIsDrag = false;
			_PMIsClick = false;
		});

		$('.button-collapse').on('click', function(event) {
			$('body').trigger('click');
			return false;
		});
		/* ^ *** Hide popup when click outside *** ^ */
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/sapphire-panel.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/sapphire-panel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePanel */
SapphireWidgets.SapphirePanel = {
	checkOpenPanel: function() {
		return $('body').hasClass('SapphirePanelOpen') && $('.SapphirePanel_Container:visible').length;
	},

	toggleSapphirePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) {
			return;
		}

		if (!SapphireWidgets.SapphirePanel.checkOpenPanel()) {
			$('body').addClass('SapphirePanelOpen');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.SapphirePanel_Container')
					.slideToggle(150);
			}, 100);
		}
	},

	closeSapphirePanel: function(PanelId) {
		$('body').removeClass('SapphirePanelOpen');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.SapphirePanel_Container')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.SapphirePanel.toggleSapphirePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.SapphirePanel.setPanelBehavior();

	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.SapphirePanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/scripts.js":
/*!**************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/scripts.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./confirmation-panel */ "./src/components/05-components/v3-pat/panel/confirmation-panel.js");
__webpack_require__(/*! ./modal-popup */ "./src/components/05-components/v3-pat/panel/modal-popup.js");
__webpack_require__(/*! ./panel-by-id */ "./src/components/05-components/v3-pat/panel/panel-by-id.js");
__webpack_require__(/*! ./popup-menu */ "./src/components/05-components/v3-pat/panel/popup-menu.js");
__webpack_require__(/*! ./sapphire-panel */ "./src/components/05-components/v3-pat/panel/sapphire-panel.js");


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancelStructure */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId).find('.PatientCallCancelStructure');
		const $listQueueWrapper = $widget.find('.PatientCallCancelStructure__ListQueues');
		const $dropdown = $listQueueWrapper.find('.InlineDropdown_label');

		$listQueueWrapper.on('click', event => {
			if (!$dropdown.length) return;
			event.stopPropagation();

			$widget.toggleClass('PatientCallCancelStructure--active');

			$(document).on('click.PatientCallCancelStructure', () => {
				$widget.removeClass('PatientCallCancelStructure--active');
				$(document).off('click.PatientCallCancelStructure');
			});

			$dropdown.trigger('click');
			event.preventDefault();
		});
	};

	SapphireWidgets.PatientCallCancelStructure = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js":
/*!****************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancel */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId);
		const $countdown = $widget.find('[ui=data-counter]');
		let $callButton = $widget.find('[ui=data-button-call]');
		let $cancelButton = $widget.find('[ui=data-button-cancel]');
		const $otherContent = $widget.find('.PatientCallCancel__Other');

		let interval;
		let timeCounter;

		const callPatient = function($widget) {
			toggleCallingState();

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + config.timeToCancel);
			else $countdown.text(config.txtCallingIn);

			startCounter();
		};

		const toggleCallingState = () => {
			$widget.toggleClass('CallingPatient');
			$countdown.text(config.txtCallPatient);
		};

		const setInitialState = () => {
			$widget.removeClass('CallingPatient');
			$callButton.show();
			$otherContent.show();
		};

		const startCounter = () => {
			timeCounter = config.timeToCancel;
			interval = window.setInterval(updateCounter, 1000);
		};

		const updateCounter = () => {
			timeCounter--;

			if (timeCounter === 0) {
				clearInterval(interval);
				OsNotifyWidget(config.patientCallFakeNotifyId, '');

				setInitialState();
			}

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + timeCounter);
			else $countdown.text(config.txtCallingIn);
		};

		if (config.startCounting) callPatient($widget);

		$callButton.on('click', () => {
			if ($widget.hasClass('CallingPatient')) return;

			callPatient($widget);

			$callButton.hide();
			$otherContent.hide();
		});

		$cancelButton.on('click', event => {
			timeCounter = config.timeToCancel;
			$countdown.text(timeCounter);
			clearInterval(interval);

			toggleCallingState();

			$callButton.show();
			$otherContent.show();
		});
	};

	SapphireWidgets.PatientCallCancel = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-card/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-card/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionCard */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $component = $(`#${config.widgetId} .PrescriptionCard`);

		if (config.isExpandable) {
			const $expandLink = $component.find('.PrescriptionCard__ExpandIcon');

			$expandLink.click(() => {
				$component.toggleClass('PrescriptionCard--expanded');
			});
		}
	};

	SapphireWidgets.PrescriptionCard = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-expandable/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-expandable/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionExpandable */
(function($, window, SapphireWidgets) {
	const PrescriptionExpandable = function(config) {
		const widgetId = config.widgetId;
		const previewstat = [];

		const $elementWrapper = $(`#${config.widgetId}`);

		const clickEvents = ob => {
			if ($(ob).hasClass('PrescriptionExpandable_header__LinksDiv')) {
				var Section = $(ob)
					.parent()
					.parent()
					.parent();
			} else {
				var Section = $(ob).parent();
			}

			var SectionContent = Section.children('.PrescriptionExpandable_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;
			}
		};

		this.init = () => {
			const $header = $elementWrapper.find('.PrescriptionExpandable_header');
			const $links = $header.find('.PrescriptionExpandable_header__LinksDiv');

			// Create array stat
			$('.SectionPrescriptionExpandableArea').each(() => {
				const stat = $header.hasClass('expanded') ? true : false;
				previewstat[widgetId] = { client: stat, server: stat };
			});

			if ($header.hasClass('NotExpandable')) {
				$header.on('click', e => e.preventDefault());
			} else if ($header.hasClass('isLinkEpandableClick')) {
				$links.on('click', e => clickEvents($links));
			} else {
				$header.on('click', e => clickEvents($header));
			}

			const elements =
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a';
			$(elements).click(function(event) {
				event.stopPropagation();
			});

			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(ajaxRefresh);
		};

		const ajaxRefresh = function(event) {
			// remove click events
			//$('.PrescriptionExpandable_header').off();

			// add stop prepagation
			$(
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// each all sections
			$('.SectionPrescriptionExpandableArea').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.PrescriptionExpandable_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};
	};

	const create = config => {
		const expandable = new PrescriptionExpandable(config);

		expandable.init();
	};

	SapphireWidgets.PrescriptionExpandable = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-header/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-header/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireHeader */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SapphireHeader(config);
		SapphireWidgets.SapphireHeader.widgetId = config.widgetId;
	};

	var handleDemographics = function() {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	};

	var SapphireHeader = function(config) {
		var _this = this;
		this.config = config;
		this.isConfidential = config.isConfidential;
		this.$widget = $('#' + config.widgetId);
		this.$widget.css({
			display: 'block',
		});
		this.$header = this.$widget.find('.SapphireHeader');
		this.$navigation = this.$widget.find('.SapphireHeader-navigation');
		this.$identification = this.$widget.find('.SapphireHeader-identification');
		this.$demographic = this.$widget.find('.SapphireHeader-demographics');
		this.$information = this.$widget.find('.SapphireHeader-information');
		this.$actions = this.$widget.find('.SapphireHeader-actions');
		this.$additionalTrigger = this.$widget.find('.SapphireHeader-additional-trigger');
		this.$additionalContent = this.$widget.find('.SapphireHeader-additional-content');

		this.handleResize();
		this.attachEvents();

		if (this.$information.text() === '') {
			this.$information.hide();
		}
	};

	SapphireHeader.prototype.getConfig = function() {
		return this.config;
	};

	SapphireHeader.prototype.handleResize = function() {
		var _this = this;
		$(window).resize(function() {
			_this.handleDemographics();
		});
	};

	SapphireHeader.prototype.attachEvents = function() {
		var _this = this;
		this.$additionalTrigger.on('click', function() {
			if (_this.$header.hasClass('isOpen')) {
				_this.$header.removeClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 2);
			} else {
				_this.$header.addClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 3);
			}
		});
	};

	SapphireHeader.prototype.handleDemographics = function() {
		const _this = this;
		this.$demographic.find('.Demographic-item').css('display', 'none');

		this.$additionalTrigger.hide();
		this.$additionalContent.empty();

		const demographicWidth = this.$demographic.outerWidth(true);
		let itemsTotal = 0;

		const componentWidth = this.$widget.outerWidth(true);
		const navigationWidth = this.$navigation.width();
		const identificationWidth = this.$identification.width();
		const demographicsWidth = this.$demographic.width();
		const informationWidth = this.$information.width();
		const actionsWidth = this.$actions.width();

		this.$demographic.find('.Demographic-item').each(function(index) {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			// 64 -> margins and 99 -> More Info button
			if (itemsTotal + 64 + 110 < demographicWidth) {
				$(this).css('display', 'inline-block');
			} else {
				$(this)
					.clone()
					.css('display', 'inline-block')
					.appendTo(_this.$additionalContent);
				_this.$additionalTrigger.show();
			}
		});

		if (this.$additionalContent.find('.Demographic-item').length === 0) {
			this.$header.removeClass('isOpen');
		}
	};

	SapphireHeader.prototype.showAdditional = function() {
		return this.$header.addClass('isOpen');
	};

	SapphireHeader.prototype.hideAdditional = function() {
		return this.$header.removeClass('isOpen');
	};

	SapphireWidgets.SapphireHeader = {
		create: create,
		handleDemographics: handleDemographics,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!SapphireWidgets.SapphireHeader.widgetId) {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	}
	if (!!$('.SapphireHeader-demographics').length) {
		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
			});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-popup/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-popup/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePopup */
var RichWidgets_Popup_Editor_notifyWidget;

(function($, window, SapphireWidgets) {
	// Check if the widget is loaded inside an iFrame
	let isInsideIframe = window.frameElement != undefined || false;

	// Constants
	const POPUP_INITIAL_WIDTH = 300;
	const POPUP_INITIAL_HEIGHT = 100;
	const POPUP_WINDOW_INDEX = 4010;
	const POPUP_CLOSING_TAG = 'closing';
	const POPUP_CLOSING_VALUE = 'true';

	let POPUP_NOTIFY_WIDGET;
	let POPUP_PARENT_URL;

	const create = config => {
		if (config.ignoreIframe) isInsideIframe = false;

		$().ready(function($) {
			const _id = config.linkId;
			const linkQuery = `#${config.linkId}`;
			let linkWidget;

			try {
				linkWidget = $(linkQuery).get(0);
			} catch (e) {}

			if (typeof linkWidget == 'undefined') {
				//Case the widget is inexistent or invisible, it will show no errors.
				return;
			}

			POPUP_PARENT_URL = config.parentUrl;

			const linkResult = getLinkHREF(linkWidget);
			const linkHref = linkResult[0];
			const isAButton = linkResult[1];

			if (typeof linkHref == 'undefined' || linkHref == '' || linkHref == '#' || linkHref.indexOf('javascript:') == 0) {
				try {
					window.OsHandleException(
						new Error('Popup link id must be the id of a Link or Button Widget with Method Navigate.'),
						outsystems.osErrorCodes.SystemJavascriptError,
						'Popup_Editor'
					);
				} catch (e) {}

				return;
			}

			// Remove the existing on-click event
			if (isAButton) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace('window.location.href=', 'return false;window.location.href=')
				);
			}

			// If there's a confirmation message, store in an attribute the result
			if (linkWidget.getAttribute('onclick') != null) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace(
							'if( ret != true )',
							"$('" + linkQuery + "').get(0).setAttribute('confirmed', ret); if( ret != true )"
						)
				);
			}

			const clickHandler = function(event) {
				// The clickHandler event is registered in osjs and $ for compatibillity reasons, they must not run both for the same click.
				// Variable is set to false in resize function.
				if ($.data(event.target, 'os-internal-processing') == true) {
					return false;
				} else {
					$.data(event.target, 'os-internal-processing', true);
				}

				// Check if the clicked link is disabled
				if (linkWidget.getAttribute('disabled') != null) {
					var linkDisabled = linkWidget
						.getAttribute('disabled')
						.toString()
						.toLowerCase();

					if (linkDisabled == 'disabled' || linkDisabled.indexOf('true') != -1) {
						return false;
					}
				}

				if (linkWidget.getAttribute('confirmed') == 'false') return false;
				if (OsIsIE()) osFocusBackend.ClearFocusedElement();

				let popupDiv;
				let pleaseWaitDiv;

				const waitText = `<div style="margin-top: 36px;">${config.loadingMessage}</div>`;
				const imgHTML = '<div class="lds-ring"><div></div></div>';
				const loadingElement = `<div class="LayoutPopup-loading">${imgHTML} ${waitText}</div>`;
				const iFrameElement = `<iframe id="iframe_${_id}" width="100%" scrolling="no" height="100%" frameborder="0" src="javascript:void(0);"/>`;

				if (isInsideIframe) {
					let _div = document.createElement('DIV');
					_div.setAttribute('style', 'text-align: center; display: none;');
					_div.setAttribute('id', 'window_' + _id);
					window.top.document.body.appendChild(_div);

					popupDiv = window.top.$('#window_' + _id);
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				} else {
					popupDiv = $("<div style='text-align: center; display: none;'></div>").appendTo('body');
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				}

				const loadTargetPage = function() {
					if (isInsideIframe) {
						window.top.POPUP_NOTIFY_WIDGET = config.notifyId;
						// Create a reference to the iframe object on the document parent
						window.top._iframePopup = window.frameElement.contentWindow;
					} else {
						window.top._iframePopup = window;
					}

					POPUP_NOTIFY_WIDGET = config.notifyId;
					RichWidgets_Popup_Editor_notifyWidget = config.notifyId;
					window.top._iframePopup.RichWidgets_Popup_Editor_notifyWidget = config.notifyId;

					// Load target page
					const ohref = getLinkHREF(linkWidget)[0];
					const rhref = ohref.replace(/(\?|&)_=.*?(&|$)/, '$1_=' + +new Date().now + '$2');
					const xhref = rhref + (rhref == ohref ? (rhref.indexOf('?') >= 0 ? '&' : '?') + '_=' + +new Date() : '');

					popupDiv.find('iframe').attr('src', xhref);

					(function(popupDiv) {
						popupDiv.find('iframe').load(function() {
							// After loading try to resize
							resize(popupDiv, _id, config.setWidth, config.setHeight, true, event);
						});
					})(popupDiv);

					popupDiv = null;
					pleaseWaitDiv = null;
				};

				openPopup(popupDiv, pleaseWaitDiv, loadTargetPage, event, config);

				return false;
			};

			$(linkQuery).click(clickHandler);

			SapphireWidgets.SapphirePopup.popupWidth = config.setWidth || POPUP_INITIAL_WIDTH;
		});
	};

	const resize = (divToPopup, _id, setWidth, setHeight, recenter, event) => {
		// Code to support old resize method Popup_Window_resize(setWidth, setHeight, recenter)
		if (typeof recenter == 'undefined') {
			recenter = setHeight;
			setHeight = setWidth;
			setWidth = divToPopup;

			if (isInsideIframe) {
				divToPopup = window.top.$('.os-internal-ui-dialog-content');
			} else {
				divToPopup = $('.os-internal-ui-dialog-content');
			}
		}

		// Resize must bail out immediately if the popup is marked as closing, and not start the animation.
		if ($.data(divToPopup.get(0), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
			return false;
		}

		let documentServer;
		let frameObj = divToPopup.find('iframe')[0];

		if (typeof frameObj == 'undefined') {
			frameObj = window.top.$('#iframe_' + _id)[0];
		}

		if (isInsideIframe) {
			documentServer = window.top.document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		} else {
			documentServer = document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		}

		if (typeof frameObj != 'undefined') {
			const frameServer = frameObj.src.replace(/(https?:\/\/[^\/]*).*/, '$1');
			const sameOrigin = frameServer.toLowerCase() == documentServer.toLowerCase() || frameServer.indexOf('http') != 0;

			if (!sameOrigin && (setWidth == -1 || setHeight == -1)) {
				throw new Error('A Popup with a screen from a different server (or https) needs explicict width, height set.');
			}

			if (sameOrigin) {
				if (frameObj.contentDocument !== null || frameObj.contentWindow !== null) {
					var innerDoc = frameObj.contentDocument ? frameObj.contentDocument : frameObj.contentWindow.document;
					if (innerDoc.documentElement.scrollHeight == 0)
						// Strangely this event is also triggered on close
						return false;
				}
			}

			let oldHeight;
			if (isInsideIframe) {
				oldHeight = window.top
					.$(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			} else {
				oldHeight = $(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			}

			let width = setWidth == -1 ? $(innerDoc).width() : setWidth;
			let height = setHeight == -1 ? $(innerDoc).height() : setHeight;

			var titleHeight;
			if (isInsideIframe) {
				titleHeight = window.top.$('.os-internal-ui-dialog-titlebar').height();
			} else {
				titleHeight = $('.os-internal-ui-dialog-titlebar').height();
			}

			// Verify if the parent window width is less than the pop-up window, if so set the responsive class on the iframe body (for responsive themes)
			if (window.innerWidth < width) {
				// only set the class if the origin is the same
				if (sameOrigin) {
					$(innerDoc)
						.find('body')
						.addClass('Responsive');
					width = window.innerWidth - 20; // 10px "padding" effect, to keep the popup look and feel on top of content
				}
			}

			// Fix issues with scrollbars
			if (setHeight == -1) {
				// IE7 needs a little more space to remove the scrollbars
				if ($.browser.msie) height = height + 1;
			} else {
				//when explicitly setting the height
				if (sameOrigin){
					if(innerDoc != undefined){
						innerDoc.body.style.height = 'auto';
					}else{
						console.log("The innerDoc.body is undefined");
					}
				}
			}

			if (isInsideIframe) {
				window.top.$(divToPopup).height(height);
			} else {
				$(divToPopup).height(height);
			}

			//Hide ECT
			if (isInsideIframe) {
				window.top
					.$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = window.top.$(divToPopup).parents('.os-internal-Popup');
			} else {
				$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = $(divToPopup).parents('.os-internal-Popup');
			}

			var animateFinal = {};

			if (setHeight == -1) {
				var oldTop = parseInt(divPopupOuterWindow.css('top'));
				if (recenter) animateFinal.top = Math.max(20, oldTop + (oldHeight - (height + titleHeight)) / 2);
				animateFinal.height = height + titleHeight;
			}

			if (setWidth == -1) {
				var oldLeft = parseInt(divPopupOuterWindow.css('left'));
				if (recenter) animateFinal.left = oldLeft + (divPopupOuterWindow.width() - width) / 2;
				animateFinal.width = width;
			}

			if (
				divPopupOuterWindow.width() == animateFinal.width &&
				divPopupOuterWindow.height() == animateFinal.height - ($.browser.msie ? 1 : 0)
			) {
				$('.os-internal-ui-dialog-content>.LayoutPopup-loading').hide();
				$(divToPopup).height(height - ($.browser.msie ? 1 : 0)); // restore size
				return true; // nothing to do...
			}

			// hide content in first resize - readjustments will not flickr
			if (divPopupOuterWindow.width() == POPUP_INITIAL_WIDTH && divPopupOuterWindow.height() == POPUP_INITIAL_HEIGHT) {
				$(frameObj).height(0);
			}

			var onAnimationComplete = function() {
				setTimeout(function() {
					if (isInsideIframe) {
						window.top.$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						window.top
							.$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					} else {
						$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					}
				}, 13);
			};

			var divPleaseWait;
			if (isInsideIframe) {
				divPleaseWait = window.top.$('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			} else {
				divPleaseWait = $('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			}

			divPleaseWait.hide();

			if (setHeight == -1 || setWidth == -1) {
				divPopupOuterWindow.animate(animateFinal, {
					duration: 200,
					complete: onAnimationComplete,
				});
			} else {
				onAnimationComplete();
			}
			innerDoc = null;
			divPopupOuterWindow = null;
			if (isInsideIframe) {
				window.top.$.data(event.target, 'os-internal-processing', false);
			} else {
				$.data(event.target, 'os-internal-processing', false);
			}
			return true;
		}
	};

	const close = () => {
		let popupToClose;
		let popupContainer;

		if (isInsideIframe) {
			popupToClose = window.top.$('.os-internal-ui-dialog-content');
			popupContainer = window.top.$('.SapphirePopup');
		} else {
			popupToClose = $('.os-internal-ui-dialog-content');
			popupContainer = $('.SapphirePopup');
		}

		popupToClose.data(POPUP_CLOSING_TAG, POPUP_CLOSING_VALUE);

		//setTimeout(function() {
		if (popupToClose.length) popupToClose.dialog('close');

		popupToClose.remove();
		popupContainer.remove();
		//}, 0);
	};

	const getLinkHREF = widget => {
		let linkHref;
		let isAButton = false;

		try {
			//Checks if the id is from a link or not
			linkHref = $(widget).attr('href');

			//Tests for visibility/existence
			if (typeof linkHref == 'undefined') {
				const onClick = widget.getAttribute('onclick');

				if (typeof onClick != 'undefined') {
					isAButton = true;

					if (onClick != null) {
						let hrefMatch;

						if ((hrefMatch = onClick.toString().match(/href='([^']*)'/)) != null) {
							linkHref = hrefMatch[1];
						}
					}
				}
			}
		} catch (e) {}

		return [linkHref, isAButton];
	};

	const openPopup = (divToPopup, divPleaseWait, loadTargetPage, event, config) => {
		// Destroy any previous dialog
		close(null);

		if (isInsideIframe) {
			const $jParent = window.top.$;
			$jParent('.os-internal-Popup').remove();
		}

		// If any close is pending, schedule to execute itself asynchronously exit
		// If no close is pending, continue with open operation
		let closingPopups;

		if (isInsideIframe) closingPopups = window.top.$('.os-internal-ui-dialog-content');
		else closingPopups = $('.os-internal-ui-dialog-content');

		for (var i = 0; i < closingPopups.length; i++) {
			if ($.data(closingPopups.get(i), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
				setTimeout(function() {
					openPopup(divToPopup, divPleaseWait, loadTargetPage, event, config);
				}, 13);

				return false;
			}
		}

		let _dialog;

		if (isInsideIframe) {
			const popupContainer = document.createElement('DIV');
			popupContainer.setAttribute('class', 'SapphirePopup');

			window.top.document.body.appendChild(popupContainer);

			_dialog = window.top.$(divToPopup);
		} else {
			$('<div class="SapphirePopup"></div>').appendTo('body');

			_dialog = $(divToPopup);
		}

		$(divPleaseWait).show();

		if ($('.ISidebar').length) window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);

		_dialog.show().dialog({
			appendTo: '.SapphirePopup',
			dialogClass: 'os-internal-Popup',
			resizable: false,
			autoResize: false,
			closeOnEscape: !config.hideCloseButton,
			bgiframe: true,
			draggable: false,
			autoOpen: true,
			title: config.setTitle,
			modal: !(config.useModal === false),
			height: config.setHeight == -1 ? POPUP_INITIAL_HEIGHT : config.setHeight,
			position: 'center',
			width: config.setWidth == -1 ? POPUP_INITIAL_WIDTH : config.setWidth,
			zIndex: POPUP_WINDOW_INDEX,
			close: function() {
				// If the popup is closed before it is resized (ESC) we need to set the processing event to false.
				$.data(event.target, 'os-internal-processing', false);

				_dialog.find('iframe').unbind('load');
				_dialog.find('iframe').attr('src', 'about:blank');

				setTimeout(function() {
					_dialog.find('iframe').empty();
					_dialog.empty();
				}, 13);
			},
		});

		_dialog.find('iframe').height(0);
		_dialog.parents('.os-internal-ui-dialog').dropShadow();

		if (config.CssClasses !== ' ') {
			if (isInsideIframe) window.top.$('.os-internal-ui-dialog').addClass(config.CssClasses);
			else $('.os-internal-ui-dialog').addClass(config.CssClasses);
		}

		loadTargetPage();
	};

	SapphireWidgets.SapphirePopup = { create, close, resize };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireRadioButton */
SapphireWidgets.SapphireRadioButton = widgetId => {
	const $widget = $(`#${widgetId}`);
	const $input = $widget.find('input[type="radio"]');
	const $label = $widget.find('.ButtonRadioInp_radioText');
	const name = $input.prop('name');

	const addRemoveClass = ($el, toAdd) => {
		if (toAdd) $el.addClass('active');
		else $el.removeClass('active');
	};

	const isChecked = $el => {
		if ($el.is(':checked')) addRemoveClass($widget, true);
		else addRemoveClass($widget, false);
	};

	$input.click(function() {
		$widget.removeClass('active');

		$(`input[type="radio"][name="${name}"]`).each(function() {
			addRemoveClass($(this).closest('.ButtonRadioInp'), $(this).is(':checked'));
		});
	});

	$input.on('change', function() {
		isChecked($(this));
	});

	$label.click(function() {
		const $closestElement = $(this).closest('.ButtonRadioInp');

		if ($closestElement.hasClass('disabled')) return false;

		$input[0].click();
		//isChecked($input);
	});

	isChecked($input);
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/scale-main-structure.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/scale-main-structure.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ScaleMainStructure */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			setupScale();
			bindClicks();

			osAjaxBackend &&
				osAjaxBackend.BindAfterAjaxRequest(function() {
					setTimeout(function() {
						bindClicks();
					}, 1000);
				});
		});
	};

	ScaleCount = conf => {
		$(function() {
			var CardScale = conf.IsCardScale;
			var RulerScale = conf.IsRulerScale;
			var MultipleScale = conf.IsMultipleScale;
			var $totalPlace = $('.ScaleMainStructure_footerResult');
			var totalCardScale = 0;
			var totalMultipleScale = 0;
			var totalRulerScale = 0;

			var ScaleTypeCard = function() {
				var totalSelected = $('.ScaleList.CardScale').find('.ScaleCard.active').length;
				var totalNumber = 0;
				$(".ScaleList.CardScale:not('.isTitle')").each(function() {
					if ($(this).find('.ScaleCard').length > 0) {
						totalNumber += 1;
					}
				});

				if (totalNumber === totalSelected) {
					var total = [];
					var inputValue = '';
					var $scaleRow = $('.ScaleList.CardScale:not(.isTitle)');
					$scaleRow.each(function() {
						inputValue = $(this)
							.find('.ScaleCard.active')
							.data('value');
						$(this)
							.find('.ScaleList_inputValue input')
							.val(inputValue);
					});

					$('.ScaleList.CardScale .ScaleCard.active').each(function() {
						total.push($(this).data('value'));
					});
					var finalTotal = eval(total.join('+'));
					return finalTotal;
				}
			};

			var ScaleTypeRuler = function() {
				var activeRulerValue = '';
				var $activeRuler = $('.RulerScale_number.active');
				if ($activeRuler.length > 0) {
					var activeRulerValue = $('.RulerScale_number.active')
						.closest('.RulerScale')
						.data().value;
					$('.ScaleList.Ruler')
						.find('.ScaleList_inputValue input')
						.val(activeRulerValue);

					return activeRulerValue;
				}
				return activeRulerValue;
			};

			var ScaleTypeMultiple = function() {
				var numberofCols = $('.ScaleList.MultipleScale')
					.first()
					.find('.ButtonGroupScale').length;
				var numberofRows = $('.ButtonGroupScale').closest('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)')
					.length;
				var total = [];
				var i = 0;
				var j = 0;
				var countActive = 0;
				var countallActiveCols = 0;
				var totalOfItems = numberofCols * numberofRows;
				var totalScore = [];

				for (i = 0; i < numberofCols; i++) {
					for (j = 0; j < numberofRows; j++) {
						var ScaleListSelected = document.querySelectorAll(
							'.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)'
						)[j];
						var ButtonScaleSelected = ScaleListSelected.querySelectorAll('.ButtonGroupScale')[i];

						if (ButtonScaleSelected.querySelectorAll('.ButtonGroup_button.active').length > 0) {
							var ScaleValue = ButtonScaleSelected.querySelectorAll('.ButtonGroup_button.active')[0].innerText;
							total.push(parseInt(ScaleValue));
							totalScore.push(parseInt(ScaleValue));
							countActive = countActive + 1;
						}
					}
					if ($('.ScaleList.MultipleScale.isSubtotal').length > 0) {
						if (countActive === numberofRows) {
							var subTotal = eval(total.join('+'));
							var subtotalScale = document.querySelectorAll('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale')[i];
							subtotalScale.innerText = subTotal;
							countallActiveCols = countallActiveCols + 1;
						}
					}
					countActive = 0;
					total = [];
				}

				if (document.querySelectorAll('.ButtonGroup_button.active').length === totalOfItems) {
					var i = 0;
					var j = 0;
					for (i = 0; i < numberofRows; i++) {
						var ScaleListRow = $('.ScaleList.MultipleScale:not(.isTitle):not(.isSubttotal)')[i];
						var $ScaleListInput = $(ScaleListRow).find('.ScaleList_inputValue input');
						var valuesSelected = '';
						for (j = 0; j < numberofCols; j++) {
							var ActiveButton = $(ScaleListRow).find('.ButtonGroup_button.active')[j];
							var ActiveValue = ActiveButton.innerText;
							//valuesSelected=valuesSelected+','+ActiveValue;
							if (j === numberofCols - 1) {
								valuesSelected += ActiveValue;
							} else {
								valuesSelected += ActiveValue + ',';
							}
						}
						$ScaleListInput.val(valuesSelected);
					}
					var getTotal = eval(totalScore.join('+'));
					return getTotal;
				}
			};

			const TotalCalc = function() {
				let isEmpty = false;

				if (CardScale === true) {
					totalCardScale = ScaleTypeCard();
					isEmpty = totalCardScale === '';
				}

				if (RulerScale === true) {
					totalRulerScale = ScaleTypeRuler();
					isEmpty = totalRulerScale === '';
				}

				if (MultipleScale === true) {
					totalMultipleScale = ScaleTypeMultiple();
					isEmpty = totalMultipleScale === '';
				}

				const $footerResult = $('.ScaleMainStructure_footerResult');
				const $totalScore = $('.ScaleMainStructure_totalScore');
				const $scoreLabel = $('.ScaleMainStructure_footerResult .TotalLabel');

				if (isEmpty) {
					$totalScore.text('---');
					$scoreLabel.text('-');

					$footerResult.removeClass('ColorZetaBG');
				} else if (!isNaN(totalMultipleScale) && !isNaN(totalCardScale) && !isNaN(totalRulerScale)) {
					const totalAbsoluteScore = totalCardScale + totalMultipleScale + totalRulerScale;
					const totalAbsoluteLabel = totalAbsoluteScore > 11 ? 'High' : 'Low';

					$totalScore.text(totalAbsoluteLabel);
					$scoreLabel.text(totalAbsoluteScore);

					$footerResult.addClass('ColorZetaBG');

					const $hiddenLink = $('.ScaleMainStructure_hiddingLink a');

					if ($hiddenLink.length > 0) $hiddenLink.click();
				}
			};

			if (CardScale === true) {
				$('.ScaleCard').click(function() {
					if (!$(this).hasClass('disabled')) {
						$parentScaleCard = $(this).closest('.ScaleList.CardScale');
						$parentScaleCard.find('.ScaleCard').removeClass('active');
						$(this).addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (RulerScale === true) {
				$('.RulerScale').click(function() {
					if ($(this).find('.viewmode').length === 0) {
						var $rulerScaleList = $(this).closest('.ScaleList.Ruler');
						$rulerScaleList.find('.RulerScale_number').removeClass('active');
						$(this)
							.find('.RulerScale_number')
							.addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (MultipleScale === true) {
				var counter;
				var ScaleListTitle = document.querySelector('.ScaleList.MultipleScale.isTitle');
				var ScaleListSubTotal = document.querySelector('.ScaleList.MultipleScale.isSubtotal');
				var ScaleList = document.querySelector('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)');

				$('.ButtonGroupScale')
					.closest('.ScaleList.MultipleScale:nth-child(2n)')
					.addClass('EvenLine');
				var numberOfGroupScale = ScaleList.querySelectorAll('.ButtonGroupScale').length;

				$('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale').text(0);
				// Check if Multiple Scale Title exists then adjust title width
				if ($('.ScaleList.MultipleScale.isTitle').length > 0) {
					for (counter = 0; counter < numberOfGroupScale; counter++) {
						var ScaleListWidth = ScaleList.querySelectorAll('.ButtonGroupScale')[counter].offsetWidth;
						ScaleListTitle.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
						ScaleListSubTotal.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
					}
				}

				$('.ButtonGroup_button').click(function() {
					TotalCalc();
				});
				TotalCalc();
			}
		});
	};

	setupScale = () => {
		var IsCardScale;
		var IsRulerScale;
		var IsMultipleScale;

		$('.ScaleCard').length > 0 ? (IsCardScale = true) : (IsCardScale = false);
		$('.ButtonGroupScale').length > 0 ? (IsMultipleScale = true) : (IsMultipleScale = false);
		$('.RulerScale').length > 0 ? (IsRulerScale = true) : (IsRulerScale = false);

		setTimeout(function() {
			ScaleCount({
				IsCardScale: IsCardScale,
				IsRulerScale: IsRulerScale,
				IsMultipleScale: IsMultipleScale,
			});
		}, 500);

		if ($('.ScaleMainStructure_options .ToggleItemControl').length > 0) {
			$('.ScaleMainStructure_options .ToggleItemControl').click(function() {
				$('.ScaleMainStructure_totalScore').text('---');
			});
		}
	};

	resetScales = () => {
		$('.ScaleMainStructure_content').css('visibility', 'hidden');
		$('.ScaleMainStructure_options .ToggleItemControl').addClass('disabled');
		setTimeout(function() {
			$('.ScaleMainStructure_totalScore').text('---');
			setupScale();
		}, 600);
		setTimeout(function() {
			$('.ScaleMainStructure_content').css('visibility', 'visible');
			$('.ScaleMainStructure_options .ToggleItemControl').removeClass('disabled');
		}, 1000);
	};

	bindClicks = () => {
		if ($('.ScaleMainStructure_options .ToggleItemControl ').length > 0) {
			$('.ScaleMainStructure')
				.off('click')
				.on('click', '.ToggleItemControl', function() {
					resetScales();
				});
		}

		if ($('.Navigation_control').length > 0) {
			$('.Navigation_right').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});

			$('.Navigation_left').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});
		}
	};

	SapphireWidgets.ScaleMainStructure = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/toggle-item-control.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/toggle-item-control.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ToggleItemControl */
SapphireWidgets.ToggleItemControl = () => {
	$(document).ready(function() {
		$('.ToggleItemControl input[type="radio"]').each(function() {
			if ($(this).is(':checked')) {
				$(this)
					.parent()
					.parent()
					.addClass('active');
			}
		});

		$('.ToggleItemControl')
			.off('click')
			.on('click', function() {
				$('.ToggleItemControl').removeClass('active');
				$(this)
					.find('input[type="radio"]')
					.not(':checked')
					.prop('checked', true)
					.click();
				if (
					$(this)
						.find('input[type="radio"]')
						.is(':checked')
				) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});

		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				$('.ToggleItemControl input[type="radio"]').each(function() {
					if ($(this).is(':checked')) {
						$(this)
							.parent()
							.parent()
							.addClass('active');
					}
				});

				$('.ToggleItemControl')
					.off('click')
					.on('click', function() {
						$('.ToggleItemControl').removeClass('active');

						if (
							$(this)
								.find('input[type="radio"]')
								.is(':checked')
						) {
							$(this).addClass('active');
						} else {
							$(this).removeClass('active');
						}
					});
			});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/select-ssd.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/select-ssd.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SelectSSD = function SSDSelectSetup(config) {
	$(function() {
		var $SSDselectId = $('#' + config.SSDSelectId);
		var isMultiple = config.isMultiple;

		var $ComponentSSD = $SSDselectId.closest('.SearchSD');
		var $ComponentSSDinput = $ComponentSSD.find('.SearchSD___input input');
		var Componentinputlength = $ComponentSSDinput.val().length;

		if (Componentinputlength > 0) {
			$SSDselectId.find('.SelectSD__contentTitle').highlight($ComponentSSDinput.val(), {
				className: 'SelectSD-searched-term',
				caseSensitive: false,
				wordsOnly: false,
			});
		}

		var $favoritesSearchInput = $ComponentSSD.find('.SearchSD_filterfavorites input');

		if ($favoritesSearchInput.length) {
			var favoritesSearchLength = $favoritesSearchInput.val().length;

			if (config.HasFavorite === 'True' && favoritesSearchLength > 0) {
				$SSDselectId.find('.SelectSD__contentTitle').highlight($favoritesSearchInput.val(), {
					className: 'SelectSD-searched-term',
					caseSensitive: false,
					wordsOnly: false,
				});
			}
		}

		var OpenConfirmPopup = function($SSDselectId) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$PopupID = $ComponentSSD.siblings('.SSDPopupWrapper');

			$PopupID.fadeIn('fast', function() {
				$ComponentSSD.addClass('Dont_Close');
				$PopupID
					.find('.SSDpopupOk')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							$SSDselectId.find('.SelectSD__starTrigger > a').click();
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});

				$PopupID
					.find('.SSDpopupCancel')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});
			});
		};

		var SSDCheckBoxSelect = function($widgetId) {
			var checkBoxCount = 0;
			if (isMultiple === 'True') {
				checkBoxCount = $widgetId
					.closest('.SearchSD.showFavorite')
					.find('.SelectSD__multiple > input[type="checkbox"]:checked').length;

				$allListcard = $widgetId.closest('.SearchSD_content');

				if (checkBoxCount > 0) {
					$widgetId.closest('.SearchSD.showFavorite').addClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.off('click');
						$(this)
							.find('.SelectSD_actionLink')
							.off('click');
					});
				} else {
					$widgetId.closest('.SearchSD.showFavorite').removeClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD ').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
						$(this)
							.find('.SelectSD_actionLink')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
					});
				}
			}
		};

		if (isMultiple === 'True') {
			$SSDselectId.find('.SelectSD__multiple > input').click(function() {
				SSDCheckBoxSelect($SSDselectId);
			});
		}

		$SSDselectId.find('.SelectSD__starLink').on('click', function(e) {
			if (!$SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starDisabled')) {
				if ($SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starSelected')) {
					OpenConfirmPopup($SSDselectId);
				} else {
					$SSDselectId.find('.SelectSD__starTrigger > a').click();
				}
			}
		});

		$SSDselectId.find('.SelectSD_contentWrapper').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}

			$ComponentSSDinput.val('');
		});

		$SSDselectId.find('.SelectSD_actionLink').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/ssd-search.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/ssd-search.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SSDSearch = function SSDsearchSetup(config) {
	$(function() {
		var $SSDwidget = $('#' + config.SSDWidgetId); // SSDComponent map not used again
		var $SSDComponent = $SSDwidget.find('.SearchSD'); // SSDSearch Component id for use in the function and manipulate classes
		var $SSDComponentContent = $SSDComponent.find('.SearchSD_content'); // SSDcomponent content
		var hasClone = config.HasClone; // HasClone variable input parameter value
		var hasFavorite = config.HasFavorite; // HasFavorite variable input parameter value
		var showClones = config.ShowClones; // ShowClones variable input parameter value
		var letterLimit = config.LimitLetter; // Number of letter to enter before trigger the search action
		var hasShield = config.HasShield;
		var shieldTimeout = config.ShieldTimeout;
		var inputLength = config.SearchInputLength;
		var $widgetShield = $SSDComponent.find('.SearchSD--shield');
		var searchTriggerTimer;
		const $SSDClearButton = $SSDComponent.find('.SearchSD___remove');
		const $SSDInputElement = $SSDComponent.find('.SearchSD___input input');

		$SSDInputElement.attr('maxLength', inputLength);

		var executeSearch = function() {
			clearTimeout(searchTriggerTimer);
			searchTriggerTimer = setTimeout(function() {
				TriggerSearch($SSDComponent);
			}, 700);
		};

		if (hasShield) {
			window.setTimeout(function() {
				$widgetShield.hide();
			}, shieldTimeout);
		}

		/*  Returns a function, that, as long as it continues to be invoked, will not
		 *   be triggered. The function will be called after it stops being called for
		 *   N milliseconds. If `immediate` is passed, trigger the function on the
		 *   leading edge, instead of the trailing.
		 */
		var debounce = function(func, wait, immediate) {
			var timeout;
			return function executedFunction() {
				var context = this;
				var args = arguments;

				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};

				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};

		/****
		 *   Reset Search UI to the initial state
		 */
		var resetUI = function($SSDComponent) {
			$SSDComponent.find('.SearchSD__inputWrapper').show();
			$SSDComponent.find('.SearchSD_search_favoriteLink').hide();
			$SSDComponent.find('.SearchSD___goToFavorite').hide();
			$SSDComponent.find('.SearchSD__FavoriteActions').hide();
			$SSDComponent.find('.SearchSD__FavoriteRemove').hide();
			$SSDComponent.find('.SearchSD__cloneWrapper').hide();
			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDInputElement.val().trim() === '') {
				$SSDComponent.find('.SearchSD___remove').hide();
			}

			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('showClone');
		};

		/*
		 *
		 *  Go to Favorites UI
		 *  --  rest SSDcomponent
		 *  --  show Favorite features
		 *  --  remove class showClone if component have that class
		 *  --  add class showFavorite to have component control
		 *  --  addClass Open with slide
		 */
		var goToFavorites = function($SSDComponent) {
			resetUI($SSDComponent);

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');
			$SSDComponent.find('.SearchSD__return').hide();
			$SSDComponent.find('.SearchSD__inputWrapper').hide();

			if ($SSDComponent.hasClass('showClone')) {
				$SSDComponent.removeClass('showClone');
			}

			$SSDComponent.find('.SearchSD_search_favoriteLink ').show();
			$SSDComponent.find('.SearchSD__FavoriteRemove ').show();
			$SSDComponent.find('.SearchSD__FavoriteActions').show();
			$SSDComponent.addClass('showFavorite');
			$SSDComponent.find('.SelectSD.hasFavorite > a').focus();
			$SSDComponent.addClass('Open');

			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}
		};

		/**************
		 *
		 *  Go to Clone UI
		 *  --  remove class Open
		 *  -- Add ShowClone class
		 *  -- SlideDown effect and add Open Class
		 */
		var goToClone = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');

			if (!$SSDComponent.hasClass('showClone')) {
				$SSDComponent.addClass('showClone');
			}
			$SSDComponent.addClass('Open');
		};

		/*
		 * Return to search from favorite or clone
		 */
		var returnToSearch = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			resetUI($SSDComponent);
			$SSDComponent.removeClass('showClone');
			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDComponent.hasClass('hasClone')) {
				$SSDComponent.addClass('hasClone');
				$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
			}
			if ($SSDComponent.hasClass('hasFavorite')) {
				$SSDComponent.addClass('hasFavorite');
				$SSDComponent.find('.SearchSD_search_favoriteLink').show();
			}
		};

		/*
		 *   SSDClear closes SSDSearch container
		 *   and clear ssd filter input
		 */
		var ssdClear = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponent.find('.SearchSD___input input').val('');
		};

		/*
		 *   CloseSSD closes SSDSearch container
		 *   must remove hightlightSelection done by keyboard navigation
		 */
		var closeSSD = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponentContent.slideUp('250');
			$SSDComponent.find('.selected').removeClass('.selected');
		};

		/*
		 *   Add Open class to SSDComponent
		 *   if SSDComponent has class Open then focus
		 *   makes open effect, check the characters inside the input to filter
		 */
		var ssdFocus = function($SSDComponent) {
			if (!$SSDComponent.hasClass('Open')) {
				// loading show hide list
				$SSDComponent.find('.SearchSD_contentList').hide();
				$SSDComponent.find('.SearchSD__loading').show();
				if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
					$SSDComponent.find('.SearchSD_showMore').hide();
				}

				$SSDComponent.removeClass('Open');
				$SSDComponent.removeClass('.showClone');
				$SSDComponent.removeClass('.showFavorite');

				if (!$SSDComponent.hasClass('Open')) {
					$SSDComponent.find('.SearchLinkInput a').click();
					$SSDComponent.addClass('Open');
				}
			}
		};

		/*
		 *   When clicking clicking outside the component
		 *   the SSD must close and return to initial state
		 */
		var ClickOut = function(e, $SSDComponent) {
			if (!$SSDComponent.is(e.target) && $SSDComponent.has(e.target).length === 0) {
				returnToSearch($SSDComponent);
				$SSDComponent.removeClass('MultiSelectActive');
			}
		};

		/*
		 *   Triggers the link to initialize
		 *   the database search based on current length of the string inserted on the input
		 */
		var TriggerSearch = function($SSDComponent) {
			var currentWord = $SSDComponent.find('.SearchSD___input input').val();
			var currentCount = currentWord.length;
			if (currentCount >= letterLimit || currentCount === 0) {
				$SSDComponent.find('.SearchLinkInput > a').click();
			}
		};

		/*
		 *   Removes all favorite checked boxes
		 *   and ends MultipleSelect
		 */
		var MultiUncheck = function($SSDComponent) {
			$checkBoxes = $SSDComponent.parent().find('.SelectSD__multiple > input[type="checkbox"]');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent
				.parent()
				.find('.SelectSD__multiple > input[type="checkbox"]')
				.each(function() {
					$(this).prop('checked', false);
				});
		};

		/*
		 *   KeyBoard events up down and enter if not filter
		 */
		var keyboardEvents = function(e, $SSDComponent) {
			if ($SSDComponent.hasClass('Open')) {
				var currentSelected = $SSDComponentContent.find('.ListRecords > span.selected'); // Current selectable item
				var $firstSelect = $SSDComponentContent.find('.ListRecords > span:first-child'); // First selectable item
				var $lastSelect = $SSDComponentContent.find('.ListRecords > span:last-child'); // Last selectable item
				var countSelected = currentSelected.length; // Number of selected item

				if (e.which == 38) {
					// if key pressed is up arrow
					if (countSelected === 0) {
						currentSelected = $lastSelect;
						$lastSelect.addClass('selected');
					} else {
						currentSelected.removeClass('selected');
						next = currentSelected.prev();

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.last().addClass('selected');
						}
					}
				} else if (e.which == 40) {
					// if key pressed is down arrow
					if (countSelected === 0) {
						$firstSelect.addClass('selected');
					} else {
						next = currentSelected.next();
						currentSelected.removeClass('selected');

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.eq(0).addClass('selected');
						}
					}
				} else if (e.which == 13) {
					// if key pressed is enter
					if (countSelected > 0) {
						e.preventDefault();
						currentSelected.find('.SelectSD .SelectSD_actionLink').click();
						ssdClear($SSDComponent);

						return true;
					} else if ($SSDComponent.find('SearchSD___input input').is(':active') && countSelected === 0) {
						e.preventDefault();
						return true;
					}
				} else {
					executeSearch();
				}
			}
		};

		/*
		 *   The first step is to reset the seetings to default
		 */
		resetUI($SSDComponent);

		/*
		 *  Remove autoComplete from search input
		 */
		$SSDComponent.find('.SearchSD___input input').attr('autocomplete', 'off');

		/*
		 *   If SSD has Clone and the clone list is visible
		 *   onclick "Clone previous medication" then
		 *   remove Open and show items to clone list
		 */
		if (hasClone === 'True') {
			$SSDComponent.addClass('hasClone');
			$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
		}

		if (hasFavorite === 'True') {
			$SSDComponent.addClass('hasFavorite');
			$SSDComponent.find('.SearchSD_search_favoriteLink').show();
		}

		if ((hasClone === 'True') & (showClones === 'True')) {
			$SSDComponent.find('.SearchSD_cloneWrapper').click(function() {
				$SSDComponent.addClass('Open');
			});
		}

		$SSDComponent.find('.SearchSD__FavoriteRemove').click(function() {
			ssdClear($SSDComponent);
			returnToSearch($SSDComponent);
			debounce(TriggerSearch($SSDComponent), 550);
			debounce($SSDComponent.find('.SearchSD___input input').focus(), 560);
		});

		$SSDComponent.find('.SearchSD__cloneWrapper').click(function() {
			goToClone($SSDComponent);
			$SSDComponent.find('.SearchSD___goToClone > a').click();
		});

		$SSDComponent.find('.SearchSD__inputWrapper').click(function() {
			if ($SSDComponent.hasClass('showClone')) {
				returnToSearch($SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsCancel').click(function() {
			MultiUncheck($SSDComponent);
		});

		$SSDComponent.find('.SearchSD___input input').focus(function() {
			debounce(ssdFocus($SSDComponent), 600);
		});

		$('body').mouseup(function(e) {
			ClickOut(e, $SSDComponent);
		});
		/*
		 *   KeyBoard events on key press
		 */
		$SSDComponent
			.find('.SearchSD___input input')
			.add($SSDComponent.find('.SelectSD_actionLink'))
			.on('keyup', function(e) {
				if (!e.which != 13) {
					keyboardEvents(e, $SSDComponent);
				}

				if ($SSDInputElement.val().trim() === '') {
					$SSDClearButton.animate({ opacity: 'hide' }, 300);
				} else {
					$SSDClearButton.animate({ opacity: 'show' }, 300);
				}
			});

		/*
		 *   Prevent form submission on enter,
		 *   instead go to keyboard events to trigger
		 *   the selection
		 */
		$($SSDComponent).on('keydown', function(e) {
			if (e.which == 13) {
				keyboardEvents(e, $SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD___remove').click(function() {
			ssdClear($SSDComponent);
			debounce(returnToSearch($SSDComponent), 600);
		});

		$SSDComponent.find('.SearchSD_search_favoriteLink').click(function() {
			ssdClear($SSDComponent);
			goToFavorites($SSDComponent);
			$SSDComponent.find('.SearchSD___goToFavorite > a').click();
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsAdd > a').click(function() {
			debounce(TriggerSearch($SSDComponent), 200);
			debounce(returnToSearch($SSDComponent), 350);
		});

		/*
		 *   On Ajax Request hide loading div if the SSD is open then show the
		 *   ListRecords
		 */
		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				if ($SSDComponent.hasClass('Open')) {
					$SSDComponent.find('.SearchSD__loading').hide();
					$SSDComponentContent.slideDown('1000', function() {
						$SSDComponent.find('.SearchSD_contentList').show();
						if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
							$SSDComponent.find('.SearchSD_showMore').show();
						}
					});
				}
			});

		$('form').append('<input type="submit" name="ssdInput" onclick="return false;"  style="display:none;" />');

		window.SearchSelectDefine.SSDSearch = {
			returnToSearch: returnToSearch,
			resetUI: resetUI,
			closeSSD: closeSSD,
			ssdFocus: ssdFocus,
			TriggerSearch: TriggerSearch,
			ssdClear: ssdClear,
		};
	});
};
// Added to close the select list if we click the prescription Iframe;
window.addEventListener('DOMContentLoaded', event => {
	var rootElement = document.querySelector('body');
	rootElement.addEventListener(
		'click',
		function(event) {
			document.querySelector("iframe[src*='Prescriptions_CW']") &&
				document
					.querySelector("iframe[src*='Prescriptions_CW']")
					.contentWindow.document.addEventListener('click', e => {
						e.stopPropagation();
						document.querySelector('.SearchSD').classList.remove('Open');
						var allInput = document.querySelector('.SearchSD___input').children;
						for (const element in allInput) {
							return allInput[element].value != undefined ? (allInput[element].value = '') : null;
						}
					});
		},
		true
	);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/searchable-client-side/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/searchable-client-side/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SearchClientSide */
(function($, window, SapphireWidgets) {
	class SearchClientSide {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();

			$(window).load(() => {
				osAjaxBackend &&
					osAjaxBackend.BindAfterAjaxRequest(() => {
						setTimeout(() => {
							$('#' + this.options.inputId).trigger('change');
						}, 200);
					});
			});
		}

		onComponentInit() {
			$('#' + this.options.inputId).on('change keydown paste input', e => {
				if (e.keyCode === 13) {
					e.preventDefault();
				} else {
					this.searchClientSide(
						this.options.inputId,
						this.options.searchableElementSelector,
						this.options.searchableChildSelector
					);
				}
			});
		}

		searchClientSide(inputId, selector, childSelector) {
			if ($('#' + inputId).is(':visible')) {
				var searchText = osjs('#' + inputId)
					.val()
					.toLowerCase();
				var searchCounter = 0;
				var selecion = osjs(selector);

				selecion.removeClass('searchNotFound');
				selecion.removeClass('searchFound');
				selecion.unhighlight();

				if (childSelector) {
					const elementToSearch = osjs(childSelector);
					elementToSearch.unhighlight();
				}

				if (searchText.length > 1) {
					selecion.each(function() {
						const textToCompare = childSelector
							? $(this)
									.find(childSelector)
									.text()
							: this.innerText;

						if (
							textToCompare
								.trim()
								.toLowerCase()
								.indexOf(searchText) > -1
						) {
							osjs(this).addClass('searchFound');
							searchCounter++;
							osjs(this).highlight(searchText);
						} else {
							osjs(this).addClass('searchNotFound');
						}
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new SearchClientSide(config));

	SapphireWidgets.SearchClientSide = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-custom/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandable */
(function($, window, SapphireWidgets) {
	function SectionExpandableCustom() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableCustom_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandable_headerCustom').off();

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandable_headerCustom').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableCustom').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableCustom_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableCustom').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = {
					client: stat,
					server: stat,
				};

				if (
					$(this).hasClass('HideWhenEmpty') &&
					$(this)
						.find('.SectionExpandableCustom_content')
						.text().length === 0
				) {
					$(this).hide();
				}

				// hack to display a message when SectionExpandableCustom has no child items
				var isEmpty = true;
				$(this)
					.find('.SectionExpandableCustom_content div, .SectionExpandableCustom_content span')
					.not('.SectionExpandableCustom_content--empty')
					.each(function() {
						if ($(this).text().length > 0) {
							isEmpty = false;
							return false;
						}
					});
				if (!isEmpty) {
					$(this)
						.find('.SectionExpandableCustom_content--empty')
						.css({
							display: 'none',
						});
				}

				var $expandableInstance = $(this);
				var $toggler = $(this).find('> .SectionExpandable-toggler');
				if ($toggler.length === 1) {
					var $togglerState = false;
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
					$toggler.off('click').on('click', function(evt) {
						evt.stopPropagation();
						$togglerState = !$togglerState;
						if ($togglerState) {
							$expandableInstance.find('.SectionExpandable-toggled').show();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));
						} else {
							$expandableInstance.find('.SectionExpandable-toggled').hide();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
						}
					});
				}
			});

			// add click events
			$('.SectionExpandable_headerCustom')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		const expandable = new SectionExpandableCustom();

		expandable.init();
	};

	SapphireWidgets.SectionExpandable = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-inside/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandableInside */
(function($, window, SapphireWidgets) {
	function SectionExpandableInside() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableInside_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				// tempHeight = SectionContent.height();
				// SectionContent.height(0);
				// SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandableInside .SectionExpandableInside_header').off();

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandableInside .SectionExpandableInside_header').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableInside').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableInside_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableInside').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = { client: stat, server: stat };
			});

			// add click events
			$('.SectionExpandableInside .SectionExpandableInside_header')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const setOpenCloseClass = id => {
		id.click(function() {
			if (id.parent().hasClass('expanded')) {
				$(this)
					.find('.HeaderIcon')
					.removeClass('open');
				$(this)
					.find('.HeaderIcon')
					.addClass('closed');
			} else {
				$(this)
					.find('.HeaderIcon')
					.removeClass('closed');
				$(this)
					.find('.HeaderIcon')
					.addClass('open');
			}
		});
	};

	const create = () => {
		const expandable = new SectionExpandableInside();

		expandable.init();
	};

	SapphireWidgets.SectionExpandableInside = {
		create,
		setOpenCloseClass,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/select-system/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/select-system/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SelectSystem */
SapphireWidgets.SelectSystem = config => {
	$(function() {
		var WidgetId = config.WidgetId; //Combo Box Id to be used.
		var Class = config.Class; //All Combo boxes with this class will be be transformed.
		var NoResultsText = config.NoResultsText; //Text to display when there are no results.
		var inputType = config.InpuType; //Options: FIlters, Dropdown, Select2
		var Prompt = config.Prompt; //Prompt in search
		var Select2Type = config.SelectType; // Type of select2 configuration
		var HasSearch = config.HasSearch; // has search
		var OnSelectingJS = config.OnSelectingJS;
		var OnUnSelectingJS = config.OnUnSelectingJS;
		var MaximumLength = config.MaximumLength;
		var SelectedValue = config.SelectedValue;
		var allowClear = config.allowClear;
		//  Select2 Ajax Configuration
		var AjaxURL = config.AjaxURL;
		var AjaxDelay = config.AjaxDelay;
		var PaginationSize = config.PaginationSize;
		var MinimumInputLenght = config.MinimumInputLenght;
		var SearchTerm = config.SearchTerm;
		var SearchExtraParam1 = config.SearchExtraParam1;
		var PageTerm = config.PageTerm;
		var AmountPage = config.PageAmount;
		var isMultiple = config.isMultiple;
		var Select2Options = {};
		var $WidgetIdentifier;

		if (config.locale === 'AR' || config.locale === 'FA') {
			Select2Options.dir = 'rtl';
		}
		
		Select2Options.theme = 'default SelectSystem';

		console.log("--- " + Select2Type + " ---");
		/*  
          Change select2 search display 
              -Multiple Select2 search UI like Single Select2
      */
		$.fn.select2.amd.define(
			'SearchLikeSingle',
			[
				'select2/utils',
				'select2/dropdown',
				'select2/dropdown/attachBody',
				'select2/dropdown/attachContainer',
				'select2/dropdown/search',
				'select2/dropdown/minimumResultsForSearch',
			],
			function(Utils, Dropdown, AttachBody, AttachContainer, Search, minimumResultsForSearch) {
				let dropdownSearch = Utils.Decorate(Dropdown, Search);
				dropdownSearch.prototype.render = function() {
					var $rendered = Dropdown.prototype.render.call(this);
					// Add ability for a placeholder in the search box
					let placeholder = this.options.get('placeholderForSearch') || '';
					var $search = $(
						'<span class="select2-search select2-search--dropdown">' +
							'<input class="select2-search__field" placeholder="' +
							placeholder +
							'" type="search"' +
							' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
							' spellcheck="false" role="textbox" />' +
							'</span>'
					);

					this.$searchContainer = $search;
					this.$search = $search.find('input');
					$search.addClass('MultipleSelect');

					$rendered.prepend($search);
					$search.parent().addClass('MultipleSelect');
					return $rendered;
				};

				// Decorate the dropdown+search with the containers
				let adapter = Utils.Decorate(dropdownSearch, AttachContainer);
				adapter = Utils.Decorate(adapter, AttachBody);

				return adapter;
			}
		);

		/**
		 * Default Configuration needed to associate the widget to the select2 plugin
		 */
		if (WidgetId === '' && Class != '') {
			$WidgetIdentifier = $('.' + Class);
		} else {
			$WidgetIdentifier = $('#' + WidgetId);
		}
		Select2Options.containerCssClass = 'select-hide ' + inputType;

		//  Select2Options.dropdownParent= $('#'+ParentDiv);

		var formatResult = function(result) {
			var $selectedOptionsValue = $WidgetIdentifier.find(':selected');
			var selectedOptions = $selectedOptionsValue.length;
			var totalOptions = $WidgetIdentifier.find('option').length;
			var selectAllOpt = $WidgetIdentifier.find('option:first-child:selected').length;
			var activeValues = '';
			var allOptExceptAll = $WidgetIdentifier.find(':selected:not(".SelectedAll")').length;
			var $allOptExceptAllObj = $WidgetIdentifier.find(':selected:not(".SelectedAll")');

			if (selectedOptions === totalOptions) {
				if (totalOptions - 1 > 3) {
					return 'All Selected';
				} else {
					$allOptExceptAllObj.each(function() {
						activeValues = activeValues + ' ' + $(this)[0].innerText;
					});
					activeValues = activeValues.replace(/,\s*$/, '');
					return activeValues;
				}
			} else {
				var totalopt = totalOptions - 1;
				if (selectedOptions > 3) {
					return selectedOptions + ' of ' + totalopt + ' selected';
				} else {
					if (selectedOptions > 0) {
						$selectedOptionsValue.each(function() {
							activeValues = activeValues + ' ' + $(this)[0].innerText + ', ';
						});
						activeValues = activeValues.replace(/,\s*$/, '');
						return activeValues;
					} else {
						return 'Select an option';
					}
				}
			}
		};

		if (NoResultsText != '') {
			Select2Options.formatNoMatches = function() {
				return NoResultsText;
			};
		}

		if (inputType != '') {
			Select2Options.dropdownCssClass = inputType;
		}

		if (allowClear === 'True') {
			Select2Options.allowClear = true;
		}

		if (MaximumLength != '') {
			Select2Options.maximumInputLength = MaximumLength;
		}

		if (Prompt != '') {
			Select2Options.placeholder = Prompt;
		} else {
			Select2Options.placeholder = {
				id: '-1', // the value of the option
				text: 'Select an option',
			};
		}

		if (Select2Type === '3') {
			// Select2 Ajax
			Select2Options = {};

			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			Select2Options.allowClear = false;

			Select2Options.templateSelection = function(repo) {
				if (!repo.element) {
					return Prompt;
				}

				return repo.full_name || repo.text;
			};

			Select2Options.templateResult = function(repo) {
				if (repo.loading) {
					return repo.text;
				}
				var markup = '<div class=""Clearfix"">' + '<div class=""ThemeGrid_Width12"">' + repo.text + '</div>';
				if (repo.description) {
					markup += '<div class=""OSAutoMarginTop"">' + repo.description + '</div>';
				}
				markup += '</div>';
				return markup;
			};

			(Select2Options.ajax = {
				url: AjaxURL,
				dataType: 'json',
				delay: AjaxDelay,
				data: function(params) {
					var Select2AjaxOpt = {};
					var SplitParameter = SearchExtraParam1.split(',');
					Select2AjaxOpt.SearchParameter = params.term;
					Select2AjaxOpt.Page = params.page || 1;
					Select2AjaxOpt.PageAmount = AmountPage;

					SplitParameter.forEach(function(el) {
						var splitText = el.split(':');
						Select2AjaxOpt[splitText[0]] = splitText[1];
					});

					return Select2AjaxOpt;
				},
				processResults: function(data, params) {
					params.page = params.page || 1;

					return {
						results: data.items,
						pagination: {
							more: params.page * PaginationSize < data.total_count,
						},
					};
				},
				cache: true,
			}),
				(Select2Options.minimumInputLength = MinimumInputLenght);

			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (config.isMultiple) {
				Select2Options.multiple = true;
				Select2Options.containerCssClass = 'Select2Ajax Multiple';
				Select2Options.dropdownCssClass = 'Select2Ajax Multiple';
			} else {
				Select2Options.multiple = false;
				Select2Options.containerCssClass = 'Select2Ajax';
				Select2Options.dropdownCssClass = 'Select2Ajax';
			}

			if (SelectedValue !== '') {
				try {
					const data = JSON.parse(SelectedValue);
					const option = new Option(data.Value, data.Id, true, true);

					$WidgetIdentifier.append(option).trigger('change');
				} catch (error) {
					console.error(`Component SelectSystem (${WidgetId}): SelectedValue must be a valid JSON!`);
				}
			}

			Select2Options.minimumResultsForSearch = 0;
			Select2Options.tags = config.HasTags;
			Select2Options.closeOnselect = true;
		}

		if (Select2Type === '2') {
			//Select2 with CheckBox

			var isAllSelected = false;
			if ($WidgetIdentifier[0].options.length === $WidgetIdentifier[0].selectedOptions.length) {
				isAllSelected = true;
			}

			if (WidgetId != '') {
				option = new Option('Select All', 'All', true, isAllSelected);
				$WidgetIdentifier.prepend(option);
				$WidgetIdentifier.find('option:first-child').addClass('SelectedAll');
			}
			Select2Options.multiple = true;
			Select2Options.closeOnSelect = false;
			Select2Options.allowHtml = false;
			Select2Options.tags = false;

			if (HasSearch === 'True') {
				Select2Options.dropdownAdapter = $.fn.select2.amd.require('SearchLikeSingle');
			} else {
				Select2Options.minimumResultsForSearch = -1;
			}

			Select2Options.containerCssClass = 'MultipleSelect';
			Select2Options.dropdownCssClass = 'MultipleSelect';
			Select2Options.templateSelection = formatResult;
		}

		if (Select2Type === '6') {
			// Select2 HtmlOptions
			Select2Options = {};
			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			var dataHtmlOption = [];
			$WidgetIdentifier.find('option').each(function(key, value) {
				var optionObject = {
					id: $(this).val(),
					text: $(this).text(),
					html: $(this).text(),
				};
				dataHtmlOption.push(optionObject);
			});

			Select2Options.containerCssClass = 'customSelect';
			Select2Options.dropdownCssClass = 'dropdownCustom';
			Select2Options.data = dataHtmlOption;
			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (SelectedValue != '') {
				$WidgetIdentifier.val(SelectedValue).trigger('change');
			} else {
				$WidgetIdentifier.val('').trigger('change');
			}
		}

		if (Select2Type === '1') {
			// Select2 TagCustom
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagCustom';
			Select2Options.dropdownCssClass = 'tagCustom';
			Select2Options.TokenSeparatos = [',', ' '];
			Select2Options.createSearchChoice = function(term, data) {
				if (
					$(data).filter(function() {
						return this.text.localeCompare(term) === 0;
					}).length === 0
				) {
					return {
						id: term,
						text: term,
					};
				}
			};
		}

		if (Select2Type === '5') {
			// Select2 TagMultiple
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagSystem';
			Select2Options.dropdownCssClass = 'tagSystem';
			Select2Options.createTag = function(params) {
				var term = $.trim(params.term);
				if (term === '') {
					return null;
				}
				return {
					id: '#' + term,
					text: term,
					newTag: true, // add additional parameters
				};
			};
		}

		if (HasSearch === 'False') {
			Select2Options.minimumResultsForSearch = -1;
		}

		if (OnUnSelectingJS != '' || OnSelectingJS != '') {
			$WidgetIdentifier
				.select2(Select2Options)
				.on('select2:unselecting', function(e) {
					$(this).data('unselecting', true);
					OnUnSelectingJS;
				})
				.on('select:selecting', function(e) {
					OnSelectingJS;
				})
				.on('select:opening', function(e) {
					if ($(this).data('unselecting')) {
						$(this).removeData('unselecting');
						e.preventDefault();
					}
				})
				.on('select:open', function(evt) {
					evt.preventDefault();
				})
				.on('select2:close', function(evt) {
					evt.preventDefault();
				});
		} else {
			if (Select2Type === '2') {
				$WidgetIdentifier.select2(Select2Options);
				var idwidget = '#' + WidgetId;

				$WidgetIdentifier.on('select2:select', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						var selectedItems = [];
						var allOptions = $(idwidget + ' option');
						allOptions.each(function() {
							selectedItems.push($(this).val());
						});
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.val(selectedItems).trigger('change');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					} else {
						var selectedOptions = $WidgetIdentifier.find('option:selected').length;
						var totalOptions = $WidgetIdentifier.find('option').length;
						if (selectedOptions === totalOptions - 1 && $(idwidget + ' >  option:selected:first-child').length === 0) {
							var selectedItems = [];
							var allOptions = $(idwidget + ' option');
							allOptions.each(function() {
								selectedItems.push($(this).val());
							});
							$WidgetIdentifier.select2('destroy');
							$WidgetIdentifier.val(selectedItems).trigger('change');
							$WidgetIdentifier.select2(Select2Options);
							$WidgetIdentifier.select2('open');
						}
					}
				});

				$WidgetIdentifier.on('select2:unselect', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						$(idwidget + ' > option').removeAttr('selected');
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
						$(idwidget)
							.val('')
							.trigger('change');
						//$(idwidget +' > option').attr('selected', "selected");
					} else {
						$(idwidget + ' > option:first-child').removeAttr('selected');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					}
				});
			} else {
				$WidgetIdentifier.select2(Select2Options);
			}
		}

		if (Select2Type === '4') {
			$WidgetIdentifier.select2(Select2Options);
			var idwidget = '#' + WidgetId;

			$WidgetIdentifier.on('select2:select', function(e) {
				if(e.target.selectedIndex !== 0){
					$WidgetIdentifier.parent().addClass('SelectSystemFilter-Selected');
				}else{
					$WidgetIdentifier.parent().removeClass('SelectSystemFilter-Selected');
				}
			})
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-container/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-container/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftContainer */
(function($, window, document, SapphireWidgets) {
	let shiftTimelineResizeTimer;
	let $shiftContainerId = $();

	const create = shiftContainerId => {
		// $('.ShiftCard_timeLine').css('visibility', 'hidden');

		$('.ShiftExpandable_container .ActionsMenu ').css('display', 'none');

		$shiftContainerId = $(shiftContainerId);

		hasScrollBar();
		handleShiftTable();

		// setTimeout(function () {
		// 	$('.ShiftCard_timeLine').css('visibility', 'visible');
		// 	$('.ShiftExpandable_container .ActionsMenu ').css('display', 'block');
		// }, 1500);

		$('.ShiftExpandable__arrow')
			.off('mousedown')
			.on('mousedown', function() {
				setTimeout(function() {
					redrawShiftTimeline();
				}, 1500);
			});
	};

	const handleShiftTable = () => {
		$('.ShiftExpandable').each(function(index, el) {
			var $elFlag = $(this)
				.parent()
				.find('.FlagLine');
			var $elFlagTime = $(this)
				.parent()
				.find('.FlagLine_time');
			var $columnFlag = $elFlag.data('column');
			var $minutesFlag = $elFlag.data('minutes');
			var $slots = $(this)
				.closest('.ShiftContainer')
				.find('.ShiftContainer_header')
				.find('.ShiftCellContent');
			var $slotWidth = Math.round($slots.eq(0).width());
			var minutesPosition = ($minutesFlag * $slotWidth) / 60;

			// handle current time flog horizontal positioning
			var slotsPosition = [];
			$slots.each(function(index, el) {
				slotsPosition.push($(this).position().left);
			});
			$elFlag.css('left', slotsPosition[$columnFlag - 1] + minutesPosition);
			$elFlag.css('display', 'block');
			if ($columnFlag === $slots.length) {
				$elFlagTime.css({
					right: '1px',
					left: 'auto',
				});
			}

			// handle cells that might span over several slots
			$(this)
				.find('.ShiftCard')
				.each(function(index, elRow) {
					var rowHasSpannedCell = false;
					$(elRow)
						.find('.ShiftCellContent')
						.each(function(index, elCell) {
							var colspan = $(elCell).data('colspan');
							if (colspan === slotsPosition.length || rowHasSpannedCell) {
								$(elCell).css({
									display: 'inline-block',
									flex: '1 1 auto',
								});
							} else if (colspan > 1) {
								rowHasSpannedCell = true;
								$(elCell).css({
									display: 'inline-block',
									flex: 'none',
									width: +(slotsPosition[colspan] - slotsPosition[0]) + 'px',
								});
							}
						});
				});

			// handle horizontal scroll behavior
			if (el.scrollWidth > el.clientWidth) {
				$(el).width(el.scrollWidth);
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width(el.scrollWidth);
			} else {
				$(el).width('auto');
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width('auto');
			}
		});
	};

	const hasScrollBar = () => {
		var $ScrollableDiv = $shiftContainerId.find('.ShiftExpandable_container');
		if ($shiftContainerId.find('.ShiftExpandable_container').length > 0) {
			if ($ScrollableDiv.get(0).scrollHeight > $ScrollableDiv.height()) {
				var $lastCell = $shiftContainerId.find('.IsTimer:last-child');
				$lastCell.css('padding-right', '7px');
			}
		}
	};

	const redrawShiftTimeline = () => {
		clearTimeout(shiftTimelineResizeTimer);
		shiftTimelineResizeTimer = setTimeout(function() {
			hasScrollBar();
			handleShiftTable();
		}, 400);
	};

	const checkScroll = () => {
		var hContent = $('.Content').height();
		var hWindow = $(window).height();

		if (hContent > hWindow) redrawShiftTimeline();
	};

	SapphireWidgets.ShiftContainer = {
		create,
		checkScroll,
		redrawShiftTimeline,
	};
})(jQuery, window, document, SapphireWidgets);

$(window)
	.off('resize.GenericGallery')
	.on('resize.GenericGallery', function() {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		SapphireWidgets.ShiftContainer.redrawShiftTimeline();

		osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ShiftContainer.redrawShiftTimeline);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 1000);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 1500);
	});

$(window).load(function() {
	if (!!$('.ShiftContainer').length) {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		setTimeout(function() {
			SapphireWidgets.ShiftContainer.redrawShiftTimeline();
		}, 400);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 600);

		$('.navigation-control-item')
			.off('click')
			.on('click', function() {
				$('.ShiftCard_timeLine').css('visibility', 'hidden');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');
			});

		//Verify the scroll if tooltip opened
		$('.ShiftExpandable_container').on('scroll', function() {
			if ($('.tooltipster-base').is(':visible')) {
				$('.tooltipster-base').css('visibility', 'hidden');
			}
		});

		osAjaxBackend.BindAfterAjaxRequest(function() {
			setTimeout(function() {
				SapphireWidgets.ShiftContainer.redrawShiftTimeline();
			}, 400);

			setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

			setTimeout(function() {
				$('.ShiftCard_timeLine').css('visibility', 'visible');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
			}, 600);

			// SapphireWidgets.ShiftContainer.redrawShiftTimeline;
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTable.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTable */
SapphireWidgets.ShiftTable = widgetId => {
	$(document).ready(() => {
		setTimeout(() => {
			const $shiftTable = $(`#${widgetId}`);
			const $headerCellList = $shiftTable.find('.ShiftTable__HeaderLabels .ShiftTableCell');
			const $hourLine = $shiftTable.find('.HourLine');

			const columnLine = $hourLine.data('column');
			const minutesLine = $hourLine.data('minutes');

			const cellWidth = $headerCellList.eq(0).width();
			const minutesPosition = (cellWidth / 60) * minutesLine;

			// Handle current hour line horizontal positioning
			const cellPosition = [];

			$headerCellList.each(function(index, el) {
				cellPosition.push($(this).position().left);
			});

			$hourLine.css('left', cellPosition[columnLine - 1] + minutesPosition);
			$hourLine.css('display', 'flex');
		}, 500);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCard.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCard */
SapphireWidgets.ShiftTableCard = widgetId => {
	const $component = $(`#${widgetId}`);
	const $actions = $component.find('.MoreActions');
	const hasActions = $actions.length > 0;

	if (hasActions) {
		$actions.on('click', e => {
			e.stopPropagation();

			$('.ShiftTableCard').removeClass('ShiftTableCard--selected');
			$component.addClass('ShiftTableCard--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($component) && !$target.parents($component).is($component)) {
				$component.removeClass('ShiftTableCard--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js":
/*!***********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ShiftTableCardProgress = config => {
	const DEFAULT_PADDING = 0;
	const DEFAULT_CARD_HEIGHT = 56;

	const setTableCardProgress = () => {
		const cardProgresID = config.widgetId;
		const startColumn = config.startColumn;
		const endColumn = config.endColumn;
		const initialMinutes = config.initialMinutes;
		const beginsIncomplete = config.beginsIncomplete;
		const endsIncomplete = config.endsIncomplete;

		const $cardProgress = $('#' + cardProgresID);
		const $shiftTable = $cardProgress.closest('.ShiftTable');
		const $tableCellList = $shiftTable.find('.ShiftTable__Content .ShiftTableCell');
		const $tableRowContent = $cardProgress.closest('.ShiftTableRow__Content');
		const $tableCard = $tableRowContent.find('.ShiftTableCard');
		const $cardProgressList = $tableRowContent.find('.ShiftTableCardProgress');
		const $progressBarList = $cardProgress.find('.ProgressBarWrap');
		const $actions = $cardProgress.find('.MoreActions');

		const cardsTotal = $tableCard.length;
		const timeSlotWidth = $tableCellList[1].getBoundingClientRect().width;
		const colFill = parseInt(endColumn) - parseInt(startColumn) > 0 ? parseInt(endColumn) - parseInt(startColumn) + 1 : 1;//changed to increment plus 1 again, needs to be reviewed when infusions start at time with minutes (like 5:30pm)
		const minuteValueWidth = timeSlotWidth / 60;
		const hasActions = $actions.length > 0;

		let totalLeft = beginsIncomplete ? 0 : (initialMinutes * minuteValueWidth);

		for (let i = 1; i < parseInt(startColumn); i++) {
			totalLeft += $tableCellList[i].getBoundingClientRect().width;
		}

		let roundWidth = Math.round((timeSlotWidth + Number.EPSILON) * 100) / 100;
		const paddingOffset = DEFAULT_PADDING * 2;
		const newWidth = parseFloat((colFill * roundWidth - paddingOffset) - (beginsIncomplete ? 0 : (endsIncomplete ? (initialMinutes * minuteValueWidth) : 0)));
		const direction = $('.Page').hasClass('AR') || $('.Page').hasClass('FA') ? 'right' : 'left';

		$cardProgress.css('width', `${newWidth}px`);
		$cardProgress.css('max-width', 'unset');
		$cardProgress.css(direction, `${(totalLeft += DEFAULT_PADDING)}px`);

		if (cardsTotal > 0) {
			let count = 0;

			$tableCard.each(function() {
				const $this = $(this);
				const isOverlaped = checkForOverlap($cardProgress[0], $this[0]);

				if (isOverlaped === true && count < $cardProgressList.length) {
					$cardProgress.css('top', $this[0].offsetTop + $cardProgress.height());
				}

				count = count++;
			});

			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					$cardProgress.css('top', $this[0].offsetTop + 130);
				} else {
					$cardProgress.css('top', $tableRowContent.height() - DEFAULT_PADDING);
				}
			});

			const offset = 4 + DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

			$tableRowContent.height($cardProgressList.last().position().top + offset);
		} else {
			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					const offset = DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

					$cardProgress.css('top', $cardProgress[0].offsetTop + offset + 'px');
					helper.$shiftCard.height(helper.$shiftCard.height() + $this[0].offsetHeight);
				}
			});
		}

		setTimeout(() => {
			if (timeSlotWidth !== $tableCellList[1].getBoundingClientRect().width) {
				setTableCardProgress(config);
			}
		}, 500);

		if (hasActions) {
			$actions.on('click', e => {
				e.stopPropagation();

				$cardProgress.addClass('ShiftTableCardProgress--selected');

				window.addEventListener('click', onClickOutside);
			});

			const onClickOutside = e => {
				const $target = $(e.target);

				if (!e.target.className.includes($cardProgress) && !$target.parents($cardProgress).is($cardProgress)) {
					$cardProgress.removeClass('ShiftTableCardProgress--selected');

					window.removeEventListener('click', onClickOutside);
				}
			};
		}

		/*$progressBarList.each(function(index) {
			const beginslot = $(this).data('beginslot');
			const beginminute = $(this).data('beginminute');
			const endslot = $(this).data('endslot');
			const endminute = $(this).data('endminute');
			const actionsWidth = 56;

			const progressBarMinutes = (endslot - beginslot) * 60 + endminute - beginminute;
			const progressendWithPer = progressBarMinutes * minuteValueWidth;

			const $progressTotal = $(this).find('.ProgressBar__animation');

			//$(this).css('left', ((beginslot - 1) * 60 + beginminute) * minuteValueWidth + 'px');
			$progressTotal.css('width', progressendWithPer - actionsWidth + 'px');
		});*/
	};

	const checkForOverlap = (el1, el2) => {
		const bounds1 = el1.getBoundingClientRect();
		const bounds2 = el2.getBoundingClientRect();

		const firstIstLeftmost = bounds1.left <= bounds2.left;
		const leftest = firstIstLeftmost ? bounds1 : bounds2;
		const rightest = firstIstLeftmost ? bounds2 : bounds1;

		// Replace > to to >= if border overlap should count
		if (leftest.right > rightest.left) {
			const firstIsTopmost = bounds1.top <= bounds2.top;
			const topest = firstIsTopmost ? bounds1 : bounds2;
			const bottomest = firstIsTopmost ? bounds2 : bounds1;

			// Replace > to >= if border should count
			return topest.bottom > bottomest.top;
		} else return false;
	};

	const helperObj = ($this, $cardProgress, $cardProgressList) => {
		const $shiftCard = $this.closest('.ShiftTableRow__Content');
		let isOverlaped = checkForOverlap($cardProgress[0], $this[0]);
		const createdId = $cardProgress.attr('id');
		const loopedId = $this.attr('id');
		const $firstSlotCreated = $cardProgressList[0];

		isOverlaped = isOverlaped === true && createdId != loopedId && createdId != $firstSlotCreated.id;

		return { $shiftCard, createdId, loopedId, $firstSlotCreated, isOverlaped };
	};

	$(document).ready(function() {
		setTableCardProgress(config);
	});

	$(window).resize(function() {
		if (window[config.widgetId]) {
			clearTimeout(window[config.widgetId].resizedFinished);
			window[config.widgetId].resizedFinished = setTimeout(function() {
				setTableCardProgress(config);
			}, 250);
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableHover.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCardHover */
SapphireWidgets.ShiftTableCardHover = widgetId => {
	$(document).ready(function() {
		const $card = $(`#${widgetId}`);
		const $cardContent = $card.find('.ShiftTableCardHover__Content');

		$cardContent.on('click', e => {
			e.stopPropagation();

			$card.addClass('ShiftTableCardHover--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($card) && !$target.parents($card).is($card)) {
				$card.removeClass('ShiftTableCardHover--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/side-menu/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/side-menu/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SideMenuStructure */
(function($, window, SapphireWidgets) {
	class SideMenu {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		setMainMenuWidth() {
			$(document).ready(() => {
				const $sideBarIframe = $('.LayoutBase-iframesidebar.notExpandable');

				if ($sideBarIframe.length) {
					const $mainMenu = $('.LayoutBase-MainMenu');
					$mainMenu.css({
						width: 'calc(100% - 262px)',
					});
				}
			});
		}

		openCloseMenu(toOpen) {
			if (toOpen) {
				this.$component.addClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 0,
				});
			} else {
				this.$component.removeClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 70,
				});
			}
		}

		windowClick($component) {
			$(window)
				.off('click.SideMenuStructure')
				.on('click.SideMenuStructure', event => {
					const isMenuItem = event.target.offsetParent && $(event.target.offsetParent).hasClass('MenuItem');

					if (!isMenuItem) {
						$component.find('.SideMenu__MenuItems .active').removeClass('active');
						$component.find('.SideMenu__MenuItems .show').removeClass('show');

						$(window).off('click.SideMenuStructure');
					}
				});
		}

		onComponentInit() {
			this.setMainMenuWidth();

			this.$component = $(`#${this.options.widgetId}`);
			this.$trigger = this.$component.find('.SideMenu__Trigger');
			this.$shield = this.$component.find('.SideMenu__Shield');
			this.$closeButton = this.$component.find('.SideMenu__MenuClose');
			this.$tabItem = this.$component.find('.SideMenu__TabItems .MenuItem');
			this.$menuItem = this.$component.find('.SideMenu__MenuItems .MenuItem__ItemTitle');
			this.$subItem = this.$component.find('.SideMenu__MenuItems .MenuItem_subItems');
			this.$department = this.$component.find('.SideMenu__Tabs .DepartmentName');

			//this.$trigger.hide();
			this.$department.hide();

			this.$iframeContainer = this.$component.find('.iframeContainer');
			this.$iframeContainer.append('<div class="lds-ring OI"><div></div><div></div><div></div><div></div></div>');
			this.$iframeContainer.find('iframe').load(() => {
				this.$iframeContainer.find('.lds-ring').fadeOut();

				if (!this.$component.hasClass('SideMenu--tabsTheme')) {
					//this.$trigger.show();
					this.$department.show();
				}
			});

			this.$trigger.on('click', () => this.openCloseMenu(true));
			this.$shield.on('click', () => this.openCloseMenu(false));
			this.$closeButton.on('click', () => this.openCloseMenu(false));

			this.$tabItem.on('click', event => {
				const $target = $(event.currentTarget);
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();
			});

			this.$menuItem.on('click', event => {
				const isIcon = event.target.className === 'icon icon-changedown';
				if (event.target !== event.currentTarget && !isIcon) return;

				const $target = $(event.currentTarget).parent();
				const $subItems = $target.find('.MenuItem_subItems');
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();

				if ($target.hasClass('active')) {
					$target.removeClass('active');
					$subItems.removeClass('show');
				} else {
					this.$component
						.find('.SideMenu__MenuItems .active')
						.not($target)
						.removeClass('active');

					this.$component
						.find('.SideMenu__MenuItems .show')
						.not($target)
						.removeClass('show');

					$target.toggleClass('active');
					$subItems.toggleClass('show');

					if (this.$component.hasClass('SideMenu--tabsTheme')) {
						this.windowClick(this.$component);
					}
				}
			});

			this.$subItem.on('click', event => event.stopPropagation());

			this.$component
				.find('.SideMenu__TabItems > div:empty')
				.parent()
				.hide();
		}
	}

	const resizeTabs = ($component, $menuTabs, isRecursive) => {
		const $menuTrigger = $component.find('.SideMenu__Trigger');
		const headerWidth = $component.find('.SideMenu__Header').outerWidth();
		const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
		const tabsWidth = $menuItems.length ? $menuItems.outerWidth() : $menuTabs.outerWidth();

		const fixedValue = $(window.parent).width() < 1024 ? 180 : 196;
		let hasItemToRemove = true;

		if (tabsWidth > 0 && tabsWidth + fixedValue > headerWidth && hasItemToRemove) {
			const $moreOptions = $component.find('.SideMenu__Content');
			const $lastItem = $menuTabs
				.find('.SideMenu__MenuItems .MenuItem')
				.last()
				.detach();

			if (!$moreOptions.find('.SideMenu__MenuItems').length) {
				$('<div class="SideMenu__MenuItems"></div>').appendTo($moreOptions);
			}

			const $menuItems = $moreOptions.find('.SideMenu__MenuItems');
			$lastItem.prependTo($menuItems);

			$menuTrigger.css('visibility', 'visible');

			hasItemToRemove = !!$lastItem.length;

			resizeTabs($component, $menuTabs, !!$lastItem.length);
		} else if (!isRecursive) {
			const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
			let $firstItem = $component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').first();

			const newLinkWidth = 140 * 1.16 + 16; // Font-size + padding between items (gap)
			const newItemsWidth = newLinkWidth + $menuItems.outerWidth();

			if (newItemsWidth + fixedValue < headerWidth) {
				$firstItem = $firstItem.detach();
				$firstItem.appendTo($menuTabs.find('.SideMenu__MenuItems'));

				if ($component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').length) {
					resizeTabs($component, $menuTabs);
				} else {
					$menuTrigger.css('visibility', 'hidden');
				}
			}
		}
	};

	const setTabsTheme = () => {
		$(top.document).ready(function() {
			$('.SideMenu', window.parent.document).addClass('SideMenu--tabsTheme');

			const $component = $('.SideMenu', window.parent.document);
			const $menuTabs = $component.find('.SideMenu__Tabs');

			$menuTabs.find('> div:empty').hide();

			const $items = $component.find('.SideMenu__MenuItems').detach();
			$items.appendTo($menuTabs);

			$(document).ready(function() {
				resizeTabs($component, $menuTabs, true);
			});

			$(window.parent).resize(function() {
				clearTimeout(window.resizedFinished);
				window.resizedFinished = setTimeout(function() {
					resizeTabs($component, $menuTabs);
				}, 250);
			});
		});
	};

	const create = config => (window[config.widgetId] = new SideMenu(config));

	SapphireWidgets.SideMenu = { create, setTabsTheme };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sidebar/sidebar-structure.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ISidebar */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new Sidebar(config);
		SapphireWidgets.Sidebar.widgetId = config.widgetId;
	};

	var close = function() {
		window[SapphireWidgets.Sidebar.widgetId].close();
	};

	var Sidebar = function(config) {
		var _this = this;
		this.isExpandable = config.isExpandable;
		this.$widget = $('#' + config.widgetId);
		this.$sidebar = this.$widget.find('.ISidebar');
		this.$sidebarMenu = this.$widget.find('.ISidebar-menu');
		this.$sidebarMenuItem = this.$widget.find('.SidebarMenuItem');
		this.$sidebarShield = this.$widget.find('.ISidebar-shield');
		this.$sidebarContent = this.$widget.find('.ISidebar-content');
		this.showLastViewed = false;

		this.$sidebarContent.find('> div').each(function() {
			if ($(this).hasClass('PH') && $(this).text() === '') {
				$(this).remove();
			}
		});
		this.attachEvents();
		if (!this.isExpandable) {
			this.openMenuItem(0);
		}
		$(function() {
			console.log(this.$showLastViewed);

			if (!config.isExpandable) {
				$(`.${config.selectedTab}`).click();
			}

			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();

			if (!this.isExpandable) {
				$('input[type="text"]:visible')
					.eq(0)
					.focus();
			}
		});

		$(window).unload(function() {
			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();
		});
	};

	Sidebar.prototype.attachEvents = function() {
		var _this = this;
		this.$sidebarMenu.on('click', function(evt) {
			console.log(evt);

			evt.stopPropagation();
			if (!_this.$sidebar.hasClass('open')) {
				_this.openMenuItem(0);
			}
		});
		this.$sidebarMenuItem.on('click', function() {
			var selectedPosition = $(this).index();
			_this.openMenuItem(selectedPosition);
		});
		this.$sidebarShield.on('click', function() {
			_this.close();
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:first-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab1')
				.removeClass('Tab2');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:last-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab2')
				.removeClass('Tab1');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});

		this.$sidebar.on('click', '.show-last-viewed', function() {
			_this.showLastViewed = !_this.showLastViewed;

			document.querySelector('.ISidebar').dataset.showlastviewed = _this.showLastViewed;

			window.parent.document.querySelector('.LayoutBase-iframesidebar.notExpandable').dataset.showlastviewed =
				_this.showLastViewed;

			if (_this.showLastViewed) {
				window.parent.document.querySelector('.LayoutBase-iframesidebar.notExpandable').style.width = '100%';
			} else {
				_this.close();
			}
		});
	};

	Sidebar.prototype.openMenuItem = function(selectedPosition) {
		var _this = this;

		this.$sidebar
			.find('.SidebarMenuItem')
			.removeClass('active')
			.eq(selectedPosition)
			.addClass('active');

		this.$sidebar
			.find('.ISidebar-content > .ISidebar-content-panel')
			.hide()
			.eq(selectedPosition)
			.show();

		this.$sidebar.addClass('open');

		// console.log(this.$sidebar);

		if (window.parent.length && this.isExpandable) {
			document.querySelector('.ISidebar').dataset.showlastviewed = 'true';
			window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);
		}

		if (this.$sidebarContent.find('.TextInput:visible').length > 0) {
			this.setFieldFocus(this.$sidebarContent.find('.TextInput:visible').eq(0));
		}

		if (window.parent.$('.select2-container--open').length) {
			window.parent.$('.select2-hidden-accessible').select2('close');
		}
	};

	Sidebar.prototype.setFieldFocus = function($input) {
		window.setTimeout(function() {
			$input.click().select();
		}, 250);
	};

	Sidebar.prototype.close = function() {
		var _this = this;

		console.log('sidebar close');

		if (window.parent.length) {
			window.parent.SapphireWidgets.LayoutBase.closeSidebarIframe(0);
			_this.showLastViewed = false;
			document.querySelector('.ISidebar').dataset.showlastviewed = _this.showLastViewed;
			window.parent.document.querySelector('.LayoutBase-iframesidebar').dataset.showlastviewed = _this.showLastViewed;
		}
		if (this.isExpandable) {
			this.$sidebar.removeClass('open');
			this.$sidebar.find('.SidebarMenuItem').removeClass('active');
			this.$sidebar.find('.ISidebar-content > .ISidebar-content-panel').hide();
		}
	};

	SapphireWidgets.Sidebar = {
		create: create,
		close: close,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/small-box-selectable/scripts.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/small-box-selectable/scripts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.SmallBoxSelectable = function(config) {
	const $component = $(`#${config.widgetId}`);

	if (config.selectOnClick) {
		$component.click(() => {
			const $list = $('.SmallBoxList .SmallBoxSelectable').not($component);

			$list.removeClass('SmallBoxSelectable--selected');
			$component.toggleClass('SmallBoxSelectable--selected');
		});
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-horizontal/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerHorizontal */
SapphireWidgets.SpinnerHorizontal = {
	create: config => {
		const $input = $(`#${config.widgetId} input`);
		const $plus = $(`#${config.widgetId} a.Plus`);
		const $minus = $(`#${config.widgetId} a.Minus`);

		let val = $input.val();

		if (val <= +config.minValue) {
			$minus.attr('disabled', 'disabled');
		} else if (val >= +config.maxValue) {
			$plus.attr('disabled', 'disabled');
		}

		$input.on('change', function() {
			val = Math.abs(parseInt(this.value, 10) || +config.minValue);
			this.value = val > +config.maxValue ? +config.maxValue : val < +config.minValue ? +config.minValue : val;

			if (val <= +config.minValue) $minus.attr('disabled', 'disabled');
			else $minus.removeAttr('disabled');

			if (val >= +config.maxValue) $plus.attr('disabled', 'disabled');
			else $plus.removeAttr('disabled');
		});
	},
	increment: function(elementId, minValue, maxValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) < maxValue) {
				_element.val(parseFloat(_element.val()) + 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Minus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) >= maxValue) {
				$(elementId)
					.find('a.Plus')
					.attr('disabled', 'disabled');
			}
		}
	},
	decrement: function(elementId, minValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) > minValue) {
				_element.val(parseFloat(_element.val()) - 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Plus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) <= minValue) {
				$(elementId)
					.find('a.Minus')
					.attr('disabled', 'disabled');
			}
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-vertical/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-vertical/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerVertical */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			const $minusVertical = $(`#${config.widgetId}`).find('.MinusVertical');
			const $inputSpinner = $(`#${config.widgetId} .SpinnerInputVertical input`);

			$inputSpinner.on('blur keyup input', function(event) {
				const currentInputValue = $inputSpinner.val();

				if (config.numberList && event.type === 'blur') {
					const inputValueInt = parseInt(currentInputValue);
					const arrayToSpin = config.numberList;
					const $errorMessage = $(`#${config.widgetId} .SpinnerErrorMessage`);

					$errorMessage.css('display', arrayToSpin.indexOf(inputValueInt) === -1 ? 'block' : 'none');
				}

				if (currentInputValue < config.minValue) $minusVertical.addClass('DisabledSpin');
				else $minusVertical.removeClass('DisabledSpin');
			});

			if ($inputSpinner.val() <= config.minValue) {
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.numberList && $inputSpinner.val() === '') {
				let currentNumber = 0;
				const arrayToSpin = config.numberList.split(',');

				$inputSpinner.val(arrayToSpin[currentNumber]);
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.isCursorOnFocus) {
				$('body').on('focus', `#${config.inputID} input`, function() {
					var that = this;

					setTimeout(function() {
						that.focus();
						var val = that.value;
						that.value = '';
						that.value = val;
					}, 1);
				});
			}

			if (config.isInputEmpty) {
				$inputSpinner.attr('value', '');
				$minusVertical.addClass('DisabledSpin');
			}
		});
	};

	const increment = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		let $input = $spinner.find('input[type="text"], input[type="number"]').first();

		var forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		var currentValue = parseFloat($input.val());
		var incrementUnit = 1;
		var isDecimals = currentValue % 1 != 0;
		var arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		$minusVertical.removeClass('DisabledSpin');

		if (arraytospin.length) {
			var currentPosition = arraytospin.indexOf(parseInt($input.val()));
			var maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			$plusVertical.removeClass('DisabledSpin');

			if (maximumToSpin - 1 === currentPosition) {
				currentPosition = currentPosition + 1;
				$input.val(arraytospin[currentPosition]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else if (maximumToSpin === currentPosition) {
				currentPosition = currentPosition % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				currentPosition = (currentPosition + 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			if (currentPosition === maximumToSpin) $plusVertical.addClass('DisabledSpin');
			if (currentPosition === 0) $minusVertical.addClass('DisabledSpin');

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (parseFloat(currentValue) < minValue) {
				$minusVertical.addClass('DisabledSpin');
			} else {
				$minusVertical.removeClass('DisabledSpin');
			}

			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) < maxValue) {
					if (currentValue === 0 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue + incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$minusVertical.removeAttr('disabled');
				} else {
					$plusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const decrement = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		const $input = $spinner.find('input[type="text"], input[type="number"]').first();

		let forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		let currentValue = parseFloat($input.val());
		let incrementUnit = 1;
		let isDecimals = currentValue % 1 != 0;
		let arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		if (arraytospin.length) {
			let currentPosition = arraytospin.indexOf(parseInt($input.val()));
			let maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			if (currentPosition == 0) {
				$input.val(arraytospin[maximumToSpin]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else {
				currentPosition = (currentPosition - 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) > minValue) {
					if (currentValue === 1 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue - incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$plusVertical.removeAttr('disabled');
				} else {
					$minusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const triggerEvents = (input, triggerOnChange, triggerOnInput) => {
		if (triggerOnChange) input.trigger('change');
		if (triggerOnInput) input.trigger('input');
	};

	const checkDisabledStatus = (elementId, valueToCheck, minValue, maxValue) => {
		if (valueToCheck <= minValue) {
			$(elementId)
				.find('a.MinusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.MinusVertical')
				.removeAttr('disabled');
		}
		if (valueToCheck >= maxValue) {
			$(elementId)
				.find('a.PlusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.PlusVertical')
				.removeAttr('disabled');
		}
	};

	SapphireWidgets.SpinnerVertical = {
		create,
		increment,
		decrement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/split-button/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/split-button/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SplitButton */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SplitButton(config);
	};

	var SplitButton = function(config) {
		var _this = this;
		this.config = config;
		this.$widget = $('#' + this.config.widgetId);
		this.$button = this.$widget.find('.SplitButton-button');
		this.$buttonLink = this.$button.find('> a');
		this.$trigger = this.$widget.find('.SplitButton-trigger');
		this.$actions = this.$widget.find('.SplitButton-actions');
		if (!!this.$actions.text()) {
			this.$widget.find('> .SplitButton').addClass('hasTrigger');
			this.buildActionsTrigger();
		}
	};

	SplitButton.prototype.buildActionsTrigger = function() {
		var _this = this;
		var classList = this.$buttonLink[0].classList.value;
		this.$trigger.addClass(classList);
		$(function() {
			// inside a document ready due to sapphire popup binded events
			if (!_this.$trigger.hasClass('tooltipstered')) {
				_this.$trigger.tooltipster({
					arrow: true,
					content: $('<section/>').append(_this.$actions.clone(true)),
					trigger: _this.config.triggerEvent,
					position: _this.config.position,
					maxWidth: _this.config.maxWidth,
					theme: 'tooltipster-splitbutton Padding-' + _this.config.padding,
				});
				_this.$actions.remove();
			}
		});
	};

	SapphireWidgets.SplitButton = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-component-block/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-component-block/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var milisecondpassed = 0;
var stoptimer = true;
var myTimout  = null;

function onKeydownFunction() {
    milisecondpassed = 0;
  
    stoptimer=true;
    clearInterval(myTimout);
    myTimout = null;
  };
  
  function onKeyUpFunction(elementToClick) {
  stoptimer = false;
  
  if(milisecondpassed == 0 && myTimout==null){
      myTimout = setInterval(
        function() {
          milisecondpassed+=100;
         
          if (milisecondpassed >= 400 && stoptimer==false) {
            milisecondpassed = 0;
            stoptimer=true;
            clearInterval(myTimout);
            myTimout = null;
            elementToClick.click();
          
          }
          else{
            if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
            }
          }
        }, 100);
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }
    }
    else{
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }   
    }
};

if(typeof(ssdComponent) === 'undefined') {

    ssdComponent = {
        length: 0,
        numberOfActive: 0,
        isRTL: false,
        id: '',
        toDestroy: false,
        onBlurDestroy: function() {
            if (ssdComponent.id != '') {
                var _ssdComponent = $('#' + ssdComponent.id);
                var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                if (ssdComponent.toDestroy) {
                    _wrapper.find('.SSDListRefreshHandler').find('a.to-destroy').click();
                    _wrapper.remove();
                }
                else {
                     var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                    _wrapper.find('input').val('');
                    ssdComponent.blur();
                }
            }
        },
        focus: function(ssdComponentWidget) {
            var _ssdComponentWidget = $(ssdComponentWidget).children('div.SSD-Wrapper:not(.Selected)');
            
            if(!_ssdComponentWidget.length)
                return; //If this SSD-Wrapper is already Selected, return.
            
            if(ssdComponent.numberOfActive)
                ssdComponent.blur(); //Blurs the other focused SSD's.
            
            ssdComponent.numberOfActive++;
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    },
                    'top': function() {
                        return this.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return this.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(this).outerWidth() - this.getBoundingClientRect().left;
                        return 'auto';
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            else{
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.closest('form').append(_ssdComponentWidget);
            }
            _ssdComponentWidget.addClass('Positioned');
            
            setTimeout(
                function() {
                    _ssdComponentWidget.addClass('Selected');
                }
                , 1
            );
            
        },
        
        
        
        blur: function() {
            if(!ssdComponent.numberOfActive)
                return;
            
            var _wrapper = $('div.SSD-Wrapper.Positioned.Selected');
            
            _wrapper.each(function() {
                var parent = $('#' + $(this).attr('data-ssd-placeholder'));
                parent.append($(this));
            });
            
            _wrapper.removeClass('Positioned')
            .children('.SSD-Component')
                .css({
                    'width': '',
                    'top': '',
                    'left': '',
                    'right': ''
                })
                .removeClass('Searching Fixed KeyboardNav')
            .children('.SSD-Bar').css({
                'width': ''
            });
                
            setTimeout(
                function() {
                    _wrapper.removeClass('Selected')
                    .find('.SSD-Bar').each(function() {
                        ssdComponent.tabsClear(this);
                    });
                }
                , 1
            );
                
            ssdComponent.numberOfActive--;
            $(".SSD_ListRecords span, .SSD_ListLine.ShowMore, .SSD_DeleteOnBlur").remove();
        },
        resize: function() {
            if(!ssdComponent.numberOfActive)
                return; //If there's no SSD active, there's no need to resize it.
            
            var _ssdWrapper = $('div.SSD-Wrapper.Selected').first();
            var _ssdComponentWidget = $('#' + _ssdWrapper.attr('data-ssd-placeholder'))[0];
            var _ssdComponent = _ssdWrapper.children('.SSD-Component');
            
            if (typeof _ssdComponentWidget.getBoundingClientRect !== "undefined") {
                _ssdComponent.css({
                    'width': function() {
                        return $(_ssdComponentWidget).width();
                    }/*,
                    'top': function() {
                        return _ssdComponentWidget.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return _ssdComponentWidget.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(_ssdComponentWidget).outerWidth() - _ssdComponentWidget.getBoundingClientRect().left;
                        return 'auto';
                    }*/
                }).children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).closest('.SSD-Component').innerWidth();
                    }
                });
            }
        },
        tabSelect: function(ssdComponentWidget, ssdBar, selectedTab, isInputEvent) {
            var _selectedTab = $(selectedTab);

            if(ssdComponent.numberOfActive == 0) {
                ssdComponent.focus(ssdComponentWidget);
            }
            
            if(!_selectedTab.is('.Selected')) {
                ssdComponent.tabsClear(ssdBar);
                _selectedTab.addClass('Selected');
            }
            
            ssdComponent.focusSelectedTab(ssdBar,isInputEvent);
        },
        focusSelectedTab: function(ssdBar,isInputEvent) {
            // Selected tab is the Search input?
            if(ssdBar.children('.SearchInput-Container.Selected').length) {
                var elementToClick = ssdBar.siblings('.SSDListRefreshHandler').find('a:not(.to-destroy)');
                
                if(isInputEvent){
                    onKeyUpFunction(elementToClick);
                }
                else{
                    elementToClick.click();
                }
                ssdBar.find('.InputPlaceholder input[type="text"]:not(:focus)').first().select().focus();
                return;
            }
            
            // Selected tab is the Short list?
            if(ssdBar.children('.ShortListSelector-Container.Selected').length) {
                ssdBar.find('.ShortListSelector-Container > a').focus();
                return;
            }
        },
        /*
         * Method being called by user action js_ssdComponent_focusCurrentRow
         */
        focusCurrentRow: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');
            var _currentFocus = _ssdList.attr('current-focus');

            _ssdComponent.addClass('KeyboardNav');
            _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')').addClass('focus');
        },
        tabsClear: function(ssdBar) {
            $(ssdBar).children().removeClass('Selected');
        },
        searchIcon: function(event) {
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, $(event.data.ssdBar).children('.SearchInput-Container'),false);
        },
        /*
         * @name inputEvent
         * @description 
         */
        inputEvent: function(event) {
            var _inputContainer = $(event.data.input).closest('.SearchInput-Container');
            
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, _inputContainer,true);
            
            if($(event.data.input).val() == '') {
                _inputContainer.closest('.SSD-Component').removeClass('Searching');
            }
            else {
                _inputContainer.closest('.SSD-Component').addClass('Searching');
            }
        },
        keydownEvent: function(event) {
           onKeydownFunction();          
          
        },
        keyboardHandler: function(event) {
            if(event.key == "Shift" || event.key == "Control")
                return;

            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(event.key == "Enter" && _ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            if(event.key == "Tab") {
                _ssdComponent.addClass('KeyboardNav');
                return;
            }
            
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                var _currentFocus = _ssdList.attr('current-focus');
                var _selectedElement = $(null);
                
                if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length) {
                    _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore.focus');
                }
                else if(_currentFocus > 0) {
                    _selectedElement = _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')');
                }
                
                _ssdComponent.addClass('KeyboardNav')
                
                if(event.key == "ArrowUp") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').prev();
                        }

                        _currentFocus--;
                    }
                    else {
                        _currentFocus = _ssdList.find('span.SSD_ListRecords > span').length;

                        if(_ssdList.find('.SSD_ListLine.ShowMore').length) {
                            _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            _currentFocus++;
                        }
                        else {
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                    }
                }
                
                if(event.key == "ArrowDown") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = $(null);
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').next();
                            
                            if(!_selectedElement.length && _ssdList.find('.SSD_ListLine.ShowMore').length) {
                                _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            }
                        }
                        
                        _currentFocus++;
                    }
                    else {
                        _selectedElement = _ssdList.find('span.SSD_ListRecords > span:first-child');
                        _currentFocus = 1;
                    }
                }
                
                _selectedElement.addClass('focus');
                
                if(!_selectedElement.length) {
                    ssdComponent.focusSelectedTab(_ssdComponent.find('.SSD-Bar'),false);
                    _currentFocus = 0;
                }
                else if (!_selectedElement.find('.SSD_ListLine.Disabled').length){
                    _selectedElement.find('.ExpandControl > a').focus();
                }
                else {
                    _ssdList.find('a.OtherControlLink').focus();
                }
                
                _ssdList.attr('current-focus', _currentFocus);

                return;
            }
            
            ssdComponent.clearKeyboardNavStatus(_ssdComponent);
        },
        clearKeyboardNavStatus: function(ssdComponent) {
            var _ssdComponent = $(ssdComponent);
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            _ssdComponent.removeClass('KeyboardNav');
            _ssdList.attr('current-focus', 0)
                .find('span.SSD_ListRecords > span.focus').removeClass('focus')
                .find('.ExpandControl > a').blur();
        },
        scrollHandler: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            if(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 1024){
                if(_ssdComponent[0].getBoundingClientRect().top > $(".toolbar-wrapper.Fixed").outerHeight()) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top', $(".toolbar-wrapper.Fixed").outerHeight() + 'px'); 
                    
                    
                }
            }else{
                /*Not Mobile apply fixed behaviour*/
                if(_ssdComponent[0].getBoundingClientRect().top > ($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight()+ $('.CTTASLevelAssessmentMainContainer').outerHeight(true) )) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top',($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight() + $('.CTTASLevelAssessmentMainContainer').outerHeight(true)) + 'px'); 
                }
            }


            _ssdComponent.addClass('Fixed');
        },
        destroy: function(_inputId) { /* Used to destroy a specific ssd component by receive the input identifier as parameter and determine the wrapper to remove. */
            $('[data-ssd-placeholder=' + ssdComponent.id + ']').remove();
        },
        init: function(ssdComponentWidget,_toDestroy) {
            ssdComponent.length++;
            ssdComponent.numberOfActive = 0;
            ssdComponent.isRTL = $('html').is('.rtl');
            ssdComponent.toDestroy = _toDestroy;
            if (typeof ssdComponentWidget != 'undefined') {
                ssdComponent.id = $(ssdComponentWidget).attr('id');
            }
            var _ssdComponentWidget = $(ssdComponentWidget);
            var _ssdComponent = _ssdComponentWidget.find('.SSD-Component');
            var _ssdBar = _ssdComponent.children('.SSD-Bar').first();
            var _searchIcon = _ssdBar.find('.SearchIcon').first();
            var _input = _ssdBar.find('input[type="text"]').first();
            var _clearControl = _ssdBar.find('.ClearControl').first();
            
            _searchIcon.off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, ssdComponent.searchIcon);
            
            _ssdBar.children('div').off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, function(event) {
                ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, this,false);
            });
            
            _clearControl.off('click').on('click', ssdComponent.onBlurDestroy);
            
            _input.off('keyup').on('keyup', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.inputEvent);
            
            _input.off('keydown').on('keydown', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.keydownEvent);
            
            $(_ssdComponent).off('click').on('click', {
                ssdComponent: _ssdComponent
            }, function(event) {
                ssdComponent.clearKeyboardNavStatus(event.data.ssdComponent);
            });
        }
    }
}

$(document).ready(function() {
    $(window).on('resize', function(event) {
        ssdComponent.resize();
    });
    
    $(document).on('click', function(event) {
        if(!$(event.target).is(':visible')) { /* Clicks on hidden elements are dismissed. */
            return;
        }
        
        var e = $(event.target).closest('.SSD-Component');
        
        if(!e.length) { // User clicked outside the SSD-Component?
            ssdComponent.onBlurDestroy();
        }
    });
    
    $(document).on('keydown', function(event) {
        if(ssdComponent.numberOfActive > 0) {
            if(event.keyCode == "27") { // User hit Escape
                ssdComponent.onBlurDestroy();
            }
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                event.preventDefault();
            }
        }
    });
    
    $(document).on('keyup', function(event) {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for Keyboard handler
            ssdComponent.keyboardHandler(event);
        }
    });
    
    $(document).on('scroll', function() {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for scroll handler
            ssdComponent.scrollHandler();
        }
    });
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-list-line/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-list-line/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SSDListLine */
SapphireWidgets.SSDListLine = {
	toggle: (lineId, lineHandler = '') => {
		var _line = $(lineId).is('.SSD_ListLine')
			? $(lineId)
			: $(lineId)
					.children('.SSD_ListLine')
					.first();

		if (!_line.length) return;

		var _expandControl = $('.expand-control-custom-width');

		if (_expandControl.length != 0) {
			_expandControl.removeClass('expand-control-custom-width');
			_expandControl.css('width', '');
		}

		if (!_line.is('.Active')) {
			var _lineHeader = _line
				.closest('div.SelectableList, .SelectableList-ListRecords')
				.find('div.SelectableList-Line.Active')
				.not(_line);

			_lineHeader.find('a[hide-action]').click();
			_lineHeader
				.removeClass('Active')
				.children('span')
				.hide(200);
			_line.addClass('Active');

			if ($(lineHandler).length) {
				$(lineHandler).click();
			}
		} else {
			_line.removeClass('Active');
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/table-form/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/table-form/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TableForm */
(function($, window, SapphireWidgets) {
	const addEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.append('<div class="TableFormColumn__EmptyItem"></div>');
	};

	const removeEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.each(function(index) {
			$(this)
				.find('> .TableFormColumn__EmptyItem:first')
				.remove();
		});
	};

	const onComponentReload = widgetId => {
		const $table = $(`#${widgetId}`);
		const $editing = $table.find('.TableFormColumn--editMode');

		if ($editing.length) {
			$table.addClass('TableForm--scrollDisabled');
		} else {
			$table.removeClass('TableForm--scrollDisabled');
		}
	};

	SapphireWidgets.TableForm = { addEmptyLine, onComponentReload, removeEmptyLine };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabs-extended/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabs-extended/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabsExtended */
SapphireWidgets.TabsExtended = function(config) {
	$(document).ready(function() {
		const $component = $(`#${config.widgetId} .Tabs_Extended`);
		const $tabHeader = $component.find('.Tabs_header');
		const $tabContainer = $component.find('.TabsContainer');
		const $tabs = $tabHeader.find('> .Tabs__tab');
		const $tabsEnabled = $tabHeader.find('> .Tabs__tab:not(.disabled)');
		const $tabsInput = $component.find('.Tabs_Input input');
		var $calculatedTabs;

		if(config.useLastTabAsActions) {
			$calculatedTabs = $tabs.slice(0,-1);
		} else {
			$calculatedTabs = $tabs;
		}
		$calculatedTabs.each(function() {
			if ($(this).text() === '') {
				$(this).remove();
			}
		});

		$tabsEnabled.on('click', function() {
			$tabContainer.attr('activetab', $(this).attr('value'));

			$tabsInput.val($(this).attr('value'));
			$tabsInput.change();
		});

		$tabsEnabled.off('mousedown').on('mousedown', function(evt) {
			var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
			$tabsExtended.removeClass('isClosed');
		});

		$('.Tabs_Extended.HideActiveOnClick .Tabs_header')
			.off('mousedown')
			.on('mousedown', '.Tabs__tab.active', function(evt) {
				var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
				var $tabsBody = $tabsExtended.find('.Tabs_body');

				if ($tabsBody.hasClass('Tabs_body--closed')) {
					$tabsBody.removeClass('Tabs_body--closed');
					$tabsExtended.removeClass('isClosed');
				} else {
					$tabsBody.addClass('Tabs_body--closed');
					$tabsExtended.addClass('isClosed');
				}
			});

		$tabHeader.find('.Tabs_Extended--disabled').each(function(index, el) {
			$(el)
				.parent()
				.css('cursor', 'default')
				.off('click');
		});

		$component.each(function(index, el) {
			if ($(el).hasClass('Tabs_Extended--closedonstart')) {
				$(el)
					.find('.Tabs_body')
					.addClass('Tabs_body--closed');
				$(el).addClass('isClosed');
				$(el).removeClass('Tabs_Extended--closedonstart');
			}

			$(el)
				.off('click')
				.on('click', '.Tabs_Extended--close', function(evt) {
					$(evt.target)
						.closest('.Tabs_body')
						.addClass('Tabs_body--closed');
				});
		});

		if (!config.tab1Enabled) $tabHeader.find('> .Tabs__tab[value=1]').addClass('disabled');
		if (!config.tab2Enabled) $tabHeader.find('> .Tabs__tab[value=2]').addClass('disabled');
		if (!config.tab3Enabled) $tabHeader.find('> .Tabs__tab[value=3]').addClass('disabled');
		if (!config.tab4Enabled) $tabHeader.find('> .Tabs__tab[value=4]').addClass('disabled');
		if (!config.tab5Enabled) $tabHeader.find('> .Tabs__tab[value=5]').addClass('disabled');
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-list/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-list/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularList */
(function($, window, document, SapphireWidgets) {
	var allTabularLists = [];

	var create = function(config) {
		window[config.tabularListId] = new TabularList(config);
		allTabularLists.push(window[config.tabularListId]);

		$(window).load(function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleTabularListColumns();
				element.handleResponsiveClasses(200);
			});
		});

		$(window).on('resize.tabularlist', function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleResponsiveClasses(200);
			});
		});
	};

	var TabularList = function(config) {
		var _this = this;
		this.config = config;
		this.tabularListResizeTimer = 0;
		this.$widget = $('#' + config.tabularListId);
		this.$widgetList = this.$widget.find('> .TabularList');
		this.$widget.find('.TabularListRow').each(function(i, row) {
			_this.columnsCount = 0;
			$(row)
				.find('.TabularListRow-values .TabularListRow-item')
				.each(function(i, el) {
					$(el).addClass('TabularListColumn' + (i + 1));
					_this.columnsCount++;
				});
		});
		if (!!config.breakOn) {
			this.breakOnOrder = parseInt(config.breakOn);
		} else {
			this.breakOnOrder = 0;
		}
		this.handleTabularListColumns();
	};

	TabularList.prototype.handleTabularListColumns = function() {
		if (this.config.columnsWidth === 'Auto') {
			if (this.$widgetList.width() > 1) {
				for (i = 1; i <= this.columnsCount; i++) {
					var maxWidthContent = Math.max.apply(
						null,
						this.$widget
							.find('.TabularListColumn' + i)
							.map(function() {
								return $(this).outerWidth(true);
							})
							.get()
					);
					this.$widget.find('.TabularListColumn' + i).width(maxWidthContent);
					this.$widget.find('.TabularListColumn' + i).css('opacity', 1);
				}
			}
		}
		if (!!this.config.propertyMinWidth) {
			this.$widget.find('.TabularListRow-property').css('min-width', convertInCSSValue(this.config.propertyMinWidth));
		}
		if (!!this.config.propertyMaxWidth) {
			this.$widget.find('.TabularListRow-property').css('max-width', convertInCSSValue(this.config.propertyMaxWidth));
		}
		if (!!this.config.actionsMinWidth) {
			this.$widget.find('.TabularListRow-actions').css('min-width', convertInCSSValue(this.config.actionsMinWidth));
		}
		if (!!this.config.actionsMaxWidth) {
			this.$widget.find('.TabularListRow-actions').css('max-width', convertInCSSValue(this.config.actionsMaxWidth));
		}
	};

	TabularList.prototype.handleResponsiveClasses = function(timeout) {
		var _this = this;
		window.clearTimeout(this.tabularListResizeTimer);
		this.tabularListResizeTimer = window.setTimeout(function() {
			_this.$widgetList.removeClass(function(index, className) {
				return (className.match(/(^|\s)screen-\S+/g) || []).join(' ');
			});

			_this.$widgetList.removeClass('isBreaking');

			var widgetWidth = _this.$widgetList.outerWidth(true);
			if (widgetWidth === 0) {
				widgetWidth = _this.$widgetList
					.parents(':visible')
					.eq(0)
					.outerWidth(true);
			}

			if (widgetWidth >= 1900) {
				_this.$widgetList.addClass('screen-DesktopHD');
				if (_this.breakOnOrder >= 6) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1600) {
				_this.$widgetList.addClass('screen-DesktopBig');
				if (_this.breakOnOrder >= 5) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1366) {
				_this.$widgetList.addClass('screen-Desktop');
				if (_this.breakOnOrder >= 4) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1024) {
				_this.$widgetList.addClass('screen-DesktopSmall');
				if (_this.breakOnOrder >= 3) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 420) {
				_this.$widgetList.addClass('screen-Tablet');
				if (_this.breakOnOrder >= 2) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else {
				_this.$widgetList.addClass('screen-Phone');
				if (_this.breakOnOrder >= 1) {
					_this.$widgetList.addClass('isBreaking');
				}
			}
		}, timeout);
	};

	SapphireWidgets.TabularList = {
		create: create,
		all: function() {
			return allTabularLists;
		},
	};
})(jQuery, window, document, SapphireWidgets);

function convertInCSSValue(value_in) {
	var returned;
	if (value_in.includes('px') || value_in.includes('%')) {
		returned = value_in;
	} else {
		returned = value_in + 'px';
	}
	return returned;
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-scroll/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-scroll/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularScroll */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			$('.TabularScroll').each(function(i, el) {
				setupTabularScroll($(el));
			});
		});

		$(window).load(function() {
			osAjaxBackend &&
				osAjaxBackend.BindAfterAjaxRequest(function() {
					$('.TabularScroll').each(function(i, el) {
						setupTabularScroll($(el));
						resizeRows($(el));
					});
				});
		});

		$(window).on('resize.tabularscroll', function() {
			$('.TabularScroll').each(function(i, el) {
				var $centerTable = $(el).find('.TabularScroll-center-table');
				var tableWidth = $centerTable.find('table').width();
				$(el)
					.find('.TabularScroll-center .TopScrollDragger')
					.width(tableWidth);
				if ($centerTable[0].scrollWidth > $centerTable.width()) {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'visible');
				} else {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'hidden');
				}
			});
		});
	};

	const setupTabularScroll = function($tabularScroll) {
		var $topScrollWrapper = $tabularScroll.find('.TopScrollWrapper');
		var $centerTable = $tabularScroll.find('.TabularScroll-center-table');
		$tabularScroll.find('.TopScrollWrapper').scroll(function() {
			$centerTable.scrollLeft($topScrollWrapper.scrollLeft());
		});
		$centerTable.scroll(function() {
			$topScrollWrapper.scrollLeft($centerTable.scrollLeft());
		});
		// similar to Resize
		var tableWidth = $centerTable.find('table').width();
		$tabularScroll.find('.TabularScroll-center .TopScrollDragger').width(tableWidth);
		if ($centerTable[0].scrollWidth > $centerTable.width()) {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'visible');
		} else {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'hidden');
		}
	};

	const resizeRows = function($tabularScroll) {
		let arrrayHeight = [];
		const $tableCenter = $tabularScroll.find('.TabularScroll-center-table table tbody');
		const $tableRight = $tabularScroll.find('.TabularScroll-right .ListRecords');
		const $tableLeft = $tabularScroll.find('.TabularScroll-left .ListRecords');

		arrrayHeight = $tableCenter
			.children('tr')
			.map(function() {
				return $(this).height();
			})
			.get();

		$tableRight.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});

		$tableLeft.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});
	};

	SapphireWidgets.TabularScroll = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/timeline/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/timeline/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Timeline Helpers */
SapphireWidgets.TimelineCounterItems = function(titleItemID, label) {
	$(document).ready(function() {
		const $section = $(`#${titleItemID}`).parents('.TimelineItemSection');
		const $title = $section.find('.TimelineItemHeader a');
		const $items = $section.find('.TimelineItem');

		$title.append($(`<div class='ColorGreyText TextLarge TextRegular'> (${$items.length})</div>`));
	});
};

SapphireWidgets.ScrollToEvent = function(elementId) {
	SapphireWidgets.LayoutBase.scrollToElement($(`#${elementId}:first`, window.top.document), 52);
};

SapphireWidgets.LineTimelineComponent = function(widgetId, hasContent, isExpandable) {
	$(document).ready(function() {
		const $component = $(`#${widgetId}`);

		if (hasContent && isExpandable) {
			const $expandableLink = $component.find('.LineTimeLine__Header');
			const $actions = $component.find('.LineTimeLine__Actions');

			$expandableLink.click(() => {
				$component.toggleClass('LineTimeLine--expanded');

				return false;
			});

			$actions.click(function(e) {
				e.stopPropagation();
			});
		}
	});
};

SapphireWidgets.TimelinePageEvents = function(showMoreTimelineLink) {
	$(document).ready(function() {
		$(window)
			.off('scroll.Timeline')
			.on('scroll.Timeline', function() {
				if (window.scrollY === 0) {
					const $item = $('.TimelineAnchor').first();
					const $list = $('.TimelinePage__Navigation .ListRecords');

					selectItem($item.attr('id'));
					clearTimeout(window.scrollFinished);

					$list.scrollTop(0);
				} else {
					clearTimeout(window.scrollFinished);
					window.scrollFinished = setTimeout(function() {
						let id = 0;

						$('.TimelineAnchor').each(function(index) {
							if ($(window).scrollTop() + 190 >= $(this).offset().top) {
								id = $(this).attr('id');

								if (index == $('.TimelineAnchor').length - 1) selectItem(id);
							} else {
								selectItem(id, true);

								window.lastItemID = id;

								return false;
							}
						});

						if ($(document).height() - $(this).height() - 150 < $(this).scrollTop()) {
							const $list = $('.TimelinePage__Navigation .ListRecords');

							$(`#${showMoreTimelineLink}`).click();
							$('.TimelinePage__Right .TimelinePage__LoadingMore').css('display', 'flex');

							window.scrollListPosition = $list.scrollTop();
						}
					}, 100);
				}

				checkEndOfPage();
			});

		infiniteScrollList(showMoreTimelineLink);
	});
};

SapphireWidgets.TimelineRestoreEvents = function(showMoreTimelineLink) {
	$('.TimelinePage__Navigation .ListRecords').scrollTop(window.scrollListPosition);
	$('.TimelinePage__LoadingMore').css('display', 'none');

	window.alreadyClicked = false;

	infiniteScrollList(showMoreTimelineLink);

	if (window.lastItemID) selectItem(window.lastItemID);
};

function selectItem(id, scrollTo) {
	const $navItem = $(`[data-item=event-${id}] .TimelineItem`);

	$('.TimelineItem.TimelineItem--active').removeClass('TimelineItem--active');
	$navItem.addClass('TimelineItem--active');

	if (scrollTo && $navItem.length) scrollToView($navItem);
}

function scrollToView(element) {
	const $parentDiv = $('.TimelinePage__Navigation .ListRecords');

	$parentDiv.scrollTop(
		$parentDiv.scrollTop() + element.position().top - $parentDiv.height() / 2 + element.height() / 2
	);

	return true;
}

function infiniteScrollList(showMoreNavLink, name) {
	const $list = $('.TimelinePage__Navigation .ListRecords');

	$list.off('mousewheel.TimelineNav').on('mousewheel.TimelineNav', function() {
		const listHeight = $list.height();
		const scrollTop = $list.scrollTop();
		const scrollHeight = $list.prop('scrollHeight');

		if (listHeight + scrollTop + 100 > scrollHeight && scrollTop > 0 && !window.alreadyClicked) {
			clearTimeout(window.scrollListFinished);
			window.scrollListFinished = setTimeout(function() {
				$(`#${showMoreNavLink}`).click();

				$('.TimelinePage__LoadingMore').css('display', 'flex');

				window.scrollListPosition = $list.scrollTop();
				window.alreadyClicked = true;
			}, 100);
		}
	});
}

function checkEndOfPage() {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		const $item = $('.TimelineAnchor').last();
		window.lastItemID = $item.attr('id');
	}
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TriggerIframeTooltip */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		var $elementId = $('#' + config.elementId);

		config.minHeight = config.minHeight + 32;

		$elementId.addClass('tooltip');

		if (config.triggerId === 'click') $elementId.addClass('tooltipstered--pointer');

		const widgetNotifyDiv = $.find('[data-iframetooltiptriggerid="' + config.elementId + '"]');
		let widgetNotifyId = '';

		if (widgetNotifyDiv.length === 1) {
			widgetNotifyId = $(widgetNotifyDiv).data('iframetooltipnotifyid');
		}

		$elementId.tooltipster({
			contentAsHTML: true,
			theme: config.theme,
			interactive: true,
			position: config.positionId,
			trigger: config.triggerId,
			minWidth: config.minWidth,
			maxWidth: config.maxWidth,
			zindex: config.zindex,
			onlyOne: true,
			content: `<iframe id="tooltipster-frame" data-ui="iframe-tooltip" src="${config.URL}" style="border:none; min-height:${config.minHeight}px;" data-iframetooltiptriggerid="${config.elementId}" iframetooltipnotifyid="${widgetNotifyId}"></iframe>`,
			functionReady: function(instance, helper) {
				$(helper).css({ visibility: 'hidden' });

				if (config.noPadding) $('.tooltipster-content').addClass('tooltipster--noPadding');
				if (config.customClass) $('.tooltipster-base').addClass(config.customClass);

				setTimeout(function() {
					$('.tooltipster-base').css({
						visibility: 'visible',
						minHeight: config.minHeight > 0 ? config.minHeight : 'auto',
					});
				}, 500);

				$('.tooltipster-content').prepend('<div class="TooltipsterLoading"><div class="lds-ring"><div></div></div>');

				const isLeftOrRight = config.positionId === 'left' || config.positionId === 'right';

				// Set a fixed height in order to keep the arrow in the same position
				if (isLeftOrRight) {
					setFixHeight();

					$(window)
						.off('scroll.Tooltip')
						.on('scroll.Tooltip', function() {
							setTimeout(() => {
								setFixHeight();
							}, 500);
						});
				}
			},
			functionAfter: function() {
				$(window).off('scroll.Tooltip');
			},
		});
	};

	const setFixHeight = () => {
		const $arrow = $('.tooltipster-arrow');

		$arrow.height($arrow.height());
	};

	SapphireWidgets.TriggerIframeTooltip = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/truncated-content/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/truncated-content/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TruncatedContent */
(function($, window, document, SapphireWidgets) {
	const create = function(config = {}) {
		$(document).ready(function() {
			var $allTruncated = $([]);
			var rootSelector = `#${config.widgetId}`;
			var openerSelector = '.TruncatedContent--all';
			var bodySelector = '.TruncatedContent--body';

			$(rootSelector).each(function() {
				var $el = $(this);
				$allTruncated = $allTruncated.add($el);
				var $elBody = $el.find(bodySelector);
				var maxLines = $el.data('maxlines');
				var lineHeight = window
					.getComputedStyle($el.find('> div')[0])
					.getPropertyValue('line-height')
					.replace('px', '');
				var lineCount = Math.ceil($el.height() / lineHeight);
				if (lineCount > maxLines) {
					$elBody.css({
						maxHeight: lineHeight * maxLines + 'px',
					});
					var sentence = $el.data('additional').replace('{n}', lineCount - maxLines);
					$el.append('<p class="' + openerSelector.replace('.', '') + '">' + sentence + '</p>');
				}
			});

			$(rootSelector).on('click', openerSelector, function() {
				var el = $(this).closest(rootSelector);
				openTruncatedContent(el);
			});

			openTruncatedContent = function(el) {
				$(el)
					.find(bodySelector)
					.css('max-height', 'none');
				$(el)
					.find(openerSelector)
					.css('display', 'none');
			};

			if (window.frameElement && window.frameElement.id === 'tooltipster-frame') {
				$(rootSelector).off('click', openerSelector);
				$(openerSelector).addClass('in-tooltip');
			}
		});
	};

	SapphireWidgets.TruncatedContent = {
		create,
		open: function(el) {
			openTruncatedContent(el);
		},
		openAll: function() {
			$allTruncated.each(function() {
				openTruncatedContent($(this));
			});
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/08-pages/clinicianWorkArea.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/clinicianWorkArea.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ClinicianWorkArea = function(containerID) {
	$(document).ready(function() {
		const $container = $(`#${containerID}`);
		const $toggler = $container.find('.SectionExpandable-toggler');

		if ($toggler.length === 1) {
			let $togglerState = false;

			$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

			$toggler.off('click').on('click', function(evt) {
				evt.stopPropagation();

				buttonClick();
			});

			const buttonClick = function() {
				$togglerState = !$togglerState;

				if ($togglerState) {
					$container.find('.SectionExpandable-toggled').show();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));

					$toggler.hide();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.click(() => buttonClick());
				} else {
					$container.find('.SectionExpandable-toggled').hide();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

					$toggler.show();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.off('click');
				}
			};
		}
	});
};


/***/ }),

/***/ "./src/components/08-pages/eSignature.js":
/*!***********************************************!*\
  !*** ./src/components/08-pages/eSignature.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.QRCodeScanner = function(options) {
	Html5Qrcode.getCameras()
		.then(devices => {
			if (devices && devices.length) startCamera(devices[0].id);
		})
		.catch(err => {
			// App doesn't have access to the camera...

			setTimeout(() => {
				const $checkbox = $('.AccessCodeOption');

				$checkbox.attr('checked', true).trigger('click');
				$('.LayoutScanCode').addClass('LayoutScanCode--modeOnlyCode');

				$('.LayoutScanCode__Splash').fadeOut(500);
			}, 500);
		});

	function startCamera(cameraID) {
		const html5QrCode = new Html5Qrcode('qrreader');
		const config = { fps: 5, qrbox: 250 };

		const successCallback = response => {
			if ($('.ModeAccessCode').length) return;

			$('.ScanOverlay').addClass('ScanOverlay--correctCode');

			OsNotifyWidget(options.widgetFakeNotifyId, response);

			//setTimeout(() => html5QrCode.stop(), 1000);
		};

		const errorCallback = response => {
			// console.error(response);
		};

		html5QrCode
			.start({ facingMode: 'environment' }, config, successCallback, errorCallback)
			.then(() => {
				setTimeout(() => $('.LayoutScanCode__Splash').fadeOut(500), 500);
			})
			.catch(err => {
				console.error(err);
			});
	}

	let isPortrait = window.matchMedia('(orientation: portrait)').matches;
	let isOrientarionChanged = false;

	$(window).on('orientationchange', function(event) {
		if ($('.ModeAccessCode').length) {
			isOrientarionChanged = window.matchMedia('(orientation: portrait)').matches;
			SapphireWidgets.IsOrientarionChanged = !(isPortrait ^ isOrientarionChanged);

			return;
		}

		window.location.reload();
	});
};

SapphireWidgets.OnModeChange = function() {
	$('.ScanOverlay').removeClass('ScanOverlay--correctCode');
	$('.ScanOverlay').removeClass('ScanOverlay--incorrectCode');

	if (SapphireWidgets.IsOrientarionChanged && !$('.ModeAccessCode').length) {
		window.location.reload();
	}
};

SapphireWidgets.GoNextInput = function(currentInput, nextInputClass) {
	const key = event.keyCode || event.charCode;
	const isNumber = !isNaN(event.key) && !isNaN(parseFloat(event.key));

	const $curr = $(currentInput);
	const $next = $(`.${nextInputClass}`);
	const $prev = $curr.prevAll('input').first();

	if (key === 8 || key === 46) {
		$prev.focus();
		$curr.removeClass('ColorAlphaBorder');

		return;
	}

	if (isNumber) {
		$next.focus();
		$curr.addClass('ColorAlphaBorder');
		$('.ValidateInputButton').click();
	} else event.preventDefault();
};


/***/ }),

/***/ "./src/components/08-pages/remoteAppointment.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/remoteAppointment.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, SapphireWidgets) {
	const create = () => {
		const $widget = $('.RemoteAppointment');
		const $header = $widget.find('.RemoteAppointment__Header');
		const $minimize = $header.find('.Minimize');
		const $smallSize = $header.find('.Small');
		const $mediumSize = $header.find('.Medium');
		const $fullScreen = $header.find('.FullScreen');
		const $restoreWindow = $widget.find('.RemoteAppointment__RestoreWindow');

		let isPreviousSmall = $smallSize.is(':visible');

		$minimize.click(() => {
			isPreviousSmall = $mediumSize.is(':visible');

			//$widget.draggable({ disabled: true });

			$widget.addClass('RemoteAppointment--minimized');
			$minimize.hide();
			$mediumSize.show();

			$widget.animate(minimizedPosition($header.height()));
		});

		$smallSize.click(() => {
			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$smallSize.hide();
			$mediumSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: '280px',
				height: '380px',
			});
		});

		$mediumSize.click(() => {
			const isCallStarted = $widget.hasClass('RemoteAppointment--callStarted');

			//$widget.draggable('enable');

			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$mediumSize.hide();
			if (isCallStarted) $smallSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: isCallStarted ? '45vw' : '450px',
				height: isCallStarted ? '45vh' : '260px',
			});
		});

		$fullScreen.click(() => {
			const iframe = document.querySelector('.RemoteAppointment iframe');

			if (iframe.requestFullscreen) {
				iframe.requestFullscreen();
			} else if (iframe.webkitRequestFullscreen) {
				iframe.webkitRequestFullscreen();
			}
		});

		$restoreWindow.click(() => {
			if (isPreviousSmall) $smallSize.click();
			else $mediumSize.click();
		});

		$(document).ready(function() {
			$widget.draggable({
				containment: 'window',
				handle: $header,
				scroll: false,
				snap: true,
				iframeFix: true,
			});

			fakeAjaxRefresh();
		});

		checkIframeLoaded();
	};

	const minimizedPosition = (headerHeight = 48) => {
		return {
			top: $(window).height() - headerHeight - 16,
			right: '76px',
			left: $(window).width() - 280 - 60 - 16,
			width: '275px',
			height: '48px',
		};
	};

	const resizeWhenJoin = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');

		$smallSize.show();
		$widget.addClass('RemoteAppointment--callStarted');

		$widget.css({
			height: '45vh',
			width: '45vw',
		});

		const centerPx = ($(window.top).width() - $widget.width()) / 2;

		$widget.css({
			inset: `230px auto auto ${centerPx}px`,
		});

		let timeout;

		function warning(e) {
			timeout = setTimeout(function() {
				// Hack to keep the current tab selected if user doesn't go to another page
				const iframeContents = window.top.$('.MainContent > iframe').contents();
				const tabItems = iframeContents.find('.TabWrapper');

				tabItems.removeClass('Active');
				tabItems.first().addClass('Active');
			}, 1000);

			return (e.returnValue = 'You are leaving the page');
		}

		function noTimeout() {
			clearTimeout(timeout);
		}

		window.top.onbeforeunload = warning;
		window.top.unload = noTimeout;

		/*window.top.addEventListener('beforeunload', function(e) {
			e.preventDefault();
			e.returnValue = '123';
		});*/
	};

	const setInitialState = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');
		const $mediumSize = $widget.find('.Medium');

		$smallSize.hide();
		$mediumSize.hide();
		$widget.removeClass('RemoteAppointment--callStarted');

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.RemoteAppointment').css({
			display: 'initial',
			right: '22%',
			top: '30%',
			height: '260px',
			width: '450px',
		});
	};

	const setModalMinimized = () => {
		// To use only inside Sapphire iFrame pages
		const $modalRemoteAppt = window.top.$('.RemoteAppointment');

		if ($modalRemoteAppt.length) {
			const $minimizeModal = $modalRemoteAppt.find('.Minimize');
			$minimizeModal.click();
		}
	};

	const checkIframeLoaded = () => {
		const iframe = document.getElementsByClassName('SapphireFrame')[0];
		const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

		if (iframeDoc.readyState == 'complete') {
			iframe.contentWindow.onload = function() {
				setInitialState();
			};

			return;
		}

		window.setTimeout(checkIframeLoaded, 100);
	};

	const setCallStarted = () => {};

	const fakeAjaxRefresh = () => {
		const $iframe = $('.SapphireFrame');

		$iframe.on('load', function() {
			$iframe[0].contentWindow.onbeforeunload = function(e) {
				$('.Feedback_AjaxWait').show();
			};

			$('.Feedback_AjaxWait').hide();
		});
	};

	const openModalLeaveContext = url => {
		SapphireWidgets.RemoteAppointment.leaveURL = url;

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.OpenModalLeaveContext').click();
	};

	SapphireWidgets.RemoteAppointment = {
		create,
		resizeWhenJoin,
		setCallStarted,
		setInitialState,
		fakeAjaxRefresh,
		setModalMinimized,
		openModalLeaveContext,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/globals.js":
/*!***********************************!*\
  !*** ./src/components/globals.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

/***/ }),

/***/ "./src/components/index.scss":
/*!***********************************!*\
  !*** ./src/components/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cyBzeW5jIFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wMC1zZXR0aW5ncy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDMtZWxlbWVudHMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1ibGFuay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtZW1lcmdlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9zdWJMYXlvdXRMZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2FjdGlvbnMtbWVudS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2J1dHRvbi1saW5rL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb2xsYXBzaWJsZS1zaWRlLXBhbmVsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY29tcC1saW5lL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY291bnRyeS1waG9uZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZGF0ZXRpbWUtcmFuZ2UtcGlja2VyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJhZy1kcm9wL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcGRvd24tY2F0ZWdvcmllcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3B6b25lL2Ryb3B6b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2V4cGFuZGFibGUtbGluay9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1jYXJkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1nYWxsZXJ5L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1ncmlkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG9yaXpvbnRhbC10b29sYmFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG91ci1waWNrZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC1sYXNhL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1jbGVhci9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtbGlzdC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtYWRkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1kZXRhaWxzLWV4cGFuZC1ib3gvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xvY2F0aW9uLWJveC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21haW4taW50ZXJhY3RpdmUtY2FyZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21lbnUtYmFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbXVsdGlwbGUtc2VsZWN0aW9uLWJ1dHRvbi9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvbW9kYWwtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQtbm90aWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BvcHVwLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2FwcGhpcmUtcGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwtc3RydWN0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tY2FyZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1leHBhbmRhYmxlL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtaGVhZGVyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcG9wdXAvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1yYWRpby1idXR0b24vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvc2NhbGUtbWFpbi1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3RvZ2dsZS1pdGVtLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc2VsZWN0LXNzZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zc2Qtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaGFibGUtY2xpZW50LXNpZGUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtY3VzdG9tL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWluc2lkZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlbGVjdC1zeXN0ZW0vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC1jb250YWluZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUhvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGUtbWVudS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGViYXIvc2lkZWJhci1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc21hbGwtYm94LXNlbGVjdGFibGUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLWhvcml6b250YWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLXZlcnRpY2FsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3BsaXQtYnV0dG9uL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWNvbXBvbmVudC1ibG9jay9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1saXN0LWxpbmUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJsZS1mb3JtL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFicy1leHRlbmRlZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItbGlzdC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItc2Nyb2xsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGltZWxpbmUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cmlnZ2VyLWlmcmFtZS10b29sdGlwL3RyaWdnZXItaWZyYW1lLXRvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdHJ1bmNhdGVkLWNvbnRlbnQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9jbGluaWNpYW5Xb3JrQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9lU2lnbmF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL3JlbW90ZUFwcG9pbnRtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLG9CQUFvQiwyQkFBMkI7UUFDL0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsbUJBQW1CLGNBQWM7UUFDakM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixLQUFLO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLHNCQUFzQjtRQUN2QztRQUNBO1FBQ0E7UUFDQSxRQUFRO1FBQ1I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsVUFBVTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLGNBQWMsd0NBQXdDO1FBQ3REO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsU0FBUztRQUNUO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsUUFBUTtRQUNSO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQSxLQUFLO1FBQ0w7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxlQUFlO1FBQ2Y7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQSxzQ0FBc0MsdUJBQXVCOzs7UUFHN0Q7UUFDQTs7Ozs7Ozs7Ozs7O0FDdjFCQSxtQkFBTyxDQUFDLDREQUF5Qjs7QUFFakM7QUFDQTtBQUNBLFdBQVcsNkRBQThDLEU7Ozs7Ozs7Ozs7O0FDSnpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RDs7Ozs7Ozs7Ozs7QUN0R0E7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMsNkM7Ozs7Ozs7Ozs7O0FDaENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN0TkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMVNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6REQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQSwrQkFBK0I7QUFDL0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFLCtCQUErQixtQ0FBbUM7O0FBRWxFO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLFNBQVM7O0FBRW5DO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEseUNBQXlDO0FBQ3pDLENBQUM7Ozs7Ozs7Ozs7OztBQ2xJRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FDak5EO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsdUJBQXVCLGdCQUFnQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUNBQXlDLHlCQUF5Qjs7QUFFbEU7QUFDQTs7QUFFQSxxQkFBcUIseUJBQXlCO0FBQzlDLG1CQUFtQix5QkFBeUI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSx1Q0FBdUMsNEJBQTRCO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLDZCQUE2QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osaUNBQWlDLDZCQUE2QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsOEJBQThCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLHlCQUF5QixNQUFNLE9BQU8sSUFBSTtBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsYUFBYTs7QUFFdkQ7QUFDQTs7QUFFQSw4Q0FBOEMsOEJBQThCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0NBQW9DLHVCQUF1QjtBQUMzRCx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELG1CQUFtQixxQkFBcUI7O0FBRXhDO0FBQ0E7QUFDQSxHQUFHOztBQUVILHFFQUFxRTs7QUFFckUsMkVBQTJFOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELDZCQUE2QjtBQUNsRixLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSixvREFBb0QsNkJBQTZCO0FBQ2pGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSw2QkFBNkI7QUFDbkcsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSx5QkFBeUIsVUFBVSxPQUFPLFFBQVE7QUFDbEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLHlCQUF5QixVQUFVLE9BQU8sUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNkJBQTZCO0FBQ2xFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw2QkFBNkI7QUFDbkU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL2hCRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxtQzs7Ozs7Ozs7Ozs7QUMvQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBOztBQUVBLFdBQVcsNEJBQTRCOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsZ0NBQWdDLHFCQUFxQjs7QUFFckQ7QUFDQTs7QUFFQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQSxRQUFRLGdCQUFnQjtBQUN4QixTQUFTLGdCQUFnQjtBQUN6QixHQUFHO0FBQ0g7O0FBRUEsNkJBQTZCO0FBQzdCLENBQUM7Ozs7Ozs7Ozs7OztBQy9ERDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLFNBQVMscURBQXFELFNBQVM7QUFDL0U7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4QkFBOEIseUJBQXlCLGVBQWUsMkJBQTJCLGFBQWEsd0JBQXdCLFVBQVUsc0JBQXNCLFFBQVEsd0JBQXdCO0FBQ3RNOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMsNkM7Ozs7Ozs7Ozs7O0FDbkJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0tEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQjtBQUNoRTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBLGdDQUFnQyxRQUFRLEdBQUcsT0FBTzs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxpQkFBaUIsRUFBRSxLQUFLO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsTUFBTSxHQUFHLFFBQVEsR0FBRyxRQUFRO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNsS0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx5QkFBeUI7QUFDN0UsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGlCQUFpQjtBQUNyRSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNyREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3BERDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDLGFBQWE7O0FBRXREO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ25ERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBNkM7QUFDdEU7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSw0QkFBNEI7QUFDNUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0JBQWdCO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLHlDQUF5QztBQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7QUNYRDtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0NBQW9DO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDelNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDNUxBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBb0JWO0FBQ0osMEJBQTBCLFNBQVM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLDhCQUE4QixHQUFHO0FBQ2pDLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRzs7QUFFZDtBQUNBLEVBQUU7O0FBRUY7QUFDQSw4QkFBOEIsR0FBRztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3JERCxtQkFBTyxDQUFDLCtGQUFzQjtBQUM5QixtQkFBTyxDQUFDLGlGQUFlO0FBQ3ZCLG1CQUFPLENBQUMsaUZBQWU7QUFDdkIsbUJBQU8sQ0FBQywrRUFBYztBQUN0QixtQkFBTyxDQUFDLHVGQUFrQjs7Ozs7Ozs7Ozs7O0FDSjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLCtDQUErQztBQUMvQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN4QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDQUFzQztBQUN0QyxDQUFDOzs7Ozs7Ozs7Ozs7QUMzRUQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDLENBQUM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGdCQUFnQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0MsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN0lEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3pIRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRCxJQUFJLHNCQUFzQjtBQUM3RTtBQUNBLCtEQUErRCxRQUFRLEdBQUcsU0FBUztBQUNuRixnREFBZ0QsSUFBSSxvRkFBb0Y7O0FBRXhJO0FBQ0E7QUFDQSxvREFBb0QsZUFBZTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsa0RBQWtELGVBQWU7QUFDakU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDamZEO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGtCQUFrQjtBQUNqQyxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDLENBQUM7Ozs7Ozs7Ozs7OztBQy9TRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDNURBLHFGQUFxRjs7QUFFckY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDeklBLHFGQUFxRjs7QUFFckY7QUFDQTtBQUNBLCtDQUErQztBQUMvQyxtREFBbUQ7QUFDbkQscUVBQXFFO0FBQ3JFLGlDQUFpQztBQUNqQyx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGLG9GQUFvRjtBQUNwRixrRkFBa0Y7QUFDbEYsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRCxLQUFLO0FBQ0wsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTs7QUFFSiwrRUFBK0UsdUJBQXVCOztBQUV0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM3Y0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9NRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QyxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMzS0Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQiwyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUM3QixzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLDhDQUE4QyxTQUFTO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDM2JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDck1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3SEFBd0g7QUFDeEg7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQSxrQ0FBa0MsK0JBQStCOztBQUVqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUM1S0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7O0FBRUEsNkJBQTZCO0FBQzdCLENBQUM7Ozs7Ozs7Ozs7OztBQ2xORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsbUJBQW1CO0FBQzdCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaktEO0FBQ0EsMEJBQTBCLGdCQUFnQjs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QyxzQkFBc0IsZ0JBQWdCO0FBQ3RDLHVCQUF1QixnQkFBZ0I7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQsK0JBQStCLGdCQUFnQjs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0JBQWdCOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGVBQWU7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdE5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7OztBQUlUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwrQjs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDhJOzs7QUFHQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpUjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMWZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSx1QkFBdUIsU0FBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0NBQWtDO0FBQ2xDLENBQUM7Ozs7Ozs7Ozs7OztBQ2pGRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBOztBQUVBLHdFQUF3RSxjQUFjO0FBQ3RGLEVBQUU7QUFDRjs7QUFFQTtBQUNBLGtEQUFrRCxVQUFVO0FBQzVEOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUzs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQSxhQUFhLHFCQUFxQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxHQUFHOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0lBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLFdBQVcscUJBQXFCLGNBQWMsaUJBQWlCLEdBQUcsaUNBQWlDLGlCQUFpQiwyQkFBMkIsZUFBZTtBQUMxTztBQUNBLG1CQUFtQix1QkFBdUI7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixPQUFPO0FBQ1A7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7QUN4RUQ7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHFEQUFxRCxFQUFFO0FBQ3ZEO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNUREO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsaUJBQWlCOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSw2QkFBNkIsU0FBUztBQUN0QyxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzlORCwwRTs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJkZXYuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiNDJiNWU2MDFkOWUyYTc2MTcwYWRcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdHN3aXRjaCAoaG90U3RhdHVzKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcbiBcdFx0XHRcdFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuIFx0XHRcdFx0XHRcdChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPVxuIFx0XHRcdFx0XHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2gsIGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0dmFyIGNodW5rSWQgPSBcImFwcFwiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gXHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpIHtcbiBcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHQhbW9kdWxlIHx8XG4gXHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbiBcdFx0XHRcdClcbiBcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuIFx0XHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbiBcdFx0XHRcdCFpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRwYXJlbnRzOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5wYXJlbnRzLnNsaWNlKCksXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGlmIChob3RVcGRhdGVOZXdIYXNoICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVuZGVmaW5lZDtcbiBcdFx0fVxuIFx0XHRob3RVcGRhdGUgPSB1bmRlZmluZWQ7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IGl0ZW0ucGFyZW50cztcbiBcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24obGlzdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiBcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRyZXR1cm4gbGlzdDtcbiBcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoIWhvdFVwZGF0ZSkgaG90VXBkYXRlID0ge307XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZSk7XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuIFx0XHRcdHJldHVybiB0cnVlO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBtb2R1bGVJZCkpXG4gXHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvYXBwLmpzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwicmVxdWlyZSgnLi9jb21wb25lbnRzL2luZGV4LnNjc3MnKTtcblxuLy9JbXBvcnQgYWxsIEpTIGZpbGVzXG5jb25zdCByZXF1aXJlQWxsID0gciA9PiByLmtleXMoKS5mb3JFYWNoKHIpO1xucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4vY29tcG9uZW50cycsIHRydWUsIC9cXC5qcyQvKSk7IiwidmFyIG1hcCA9IHtcblx0XCIuLzAwLXNldHRpbmdzL2NvbmZpZy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDAtc2V0dGluZ3MvY29uZmlnLmpzXCIsXG5cdFwiLi8wMy1lbGVtZW50cy9zY3JpcHQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzAzLWVsZW1lbnRzL3NjcmlwdC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJhc2UuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1iYXNlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtYmxhbmsuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1ibGFuay5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWVtZXJnZW5jeS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWVtZXJnZW5jeS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LXBvcHVwLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtcG9wdXAuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvbGF5b3V0L3N1YkxheW91dExlZnQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L3N1YkxheW91dExlZnQuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2FjdGlvbnMtbWVudS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9hY3Rpb25zLW1lbnUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvYnV0dG9uLWxpbmsvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvYnV0dG9uLWxpbmsvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY29sbGFwc2libGUtc2lkZS1wYW5lbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb2xsYXBzaWJsZS1zaWRlLXBhbmVsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbXAtbGluZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb21wLWxpbmUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY291bnRyeS1waG9uZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb3VudHJ5LXBob25lL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGV0aW1lLXJhbmdlLXBpY2tlci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kYXRldGltZS1yYW5nZS1waWNrZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZHJhZy1kcm9wL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RyYWctZHJvcC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9kcm9wZG93bi1jYXRlZ29yaWVzL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3Bkb3duLWNhdGVnb3JpZXMvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZHJvcHpvbmUvZHJvcHpvbmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3B6b25lL2Ryb3B6b25lLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9leHBhbmRhYmxlLWxpbmsvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZXhwYW5kYWJsZS1saW5rL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtY2FyZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWNhcmQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1nYWxsZXJ5L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtZ2FsbGVyeS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdyaWQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1ncmlkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2hvcml6b250YWwtdG9vbGJhci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3Jpem9udGFsLXRvb2xiYXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaG91ci1waWNrZXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG91ci1waWNrZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtbGFzYS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC1sYXNhL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtY2xlYXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1jbGVhci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWxpc3Qvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1saXN0L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtYWRkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtYWRkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtZGV0YWlscy1leHBhbmQtYm94L3NjcmlwdC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1kZXRhaWxzLWV4cGFuZC1ib3gvc2NyaXB0LmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9sb2NhdGlvbi1ib3gvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbG9jYXRpb24tYm94L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L21haW4taW50ZXJhY3RpdmUtY2FyZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9tYWluLWludGVyYWN0aXZlLWNhcmQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbWVudS1iYXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbWVudS1iYXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbXVsdGlwbGUtc2VsZWN0aW9uLWJ1dHRvbi9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9tdWx0aXBsZS1zZWxlY3Rpb24tYnV0dG9uL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wYW5lbC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBhbmVsLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcG9wdXAuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wb3B1cC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvbW9kYWwtcG9wdXAuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL21vZGFsLXBvcHVwLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC1ub3RpZnkuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLW5vdGlmeS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wb3B1cC1tZW51LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wb3B1cC1tZW51LmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zYXBwaGlyZS1wYW5lbC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2FwcGhpcmUtcGFuZWwuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC1zdHJ1Y3R1cmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC1zdHJ1Y3R1cmUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tY2FyZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tY2FyZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tZXhwYW5kYWJsZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tZXhwYW5kYWJsZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1oZWFkZXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtaGVhZGVyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXBvcHVwL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXBvcHVwL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXJhZGlvLWJ1dHRvbi9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1yYWRpby1idXR0b24vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3NjYWxlLW1haW4tc3RydWN0dXJlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvc2NhbGUtbWFpbi1zdHJ1Y3R1cmUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy90b2dnbGUtaXRlbS1jb250cm9sLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvdG9nZ2xlLWl0ZW0tY29udHJvbC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc2VsZWN0LXNzZC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc2VsZWN0LXNzZC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc3NkLXNlYXJjaC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc3NkLXNlYXJjaC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoYWJsZS1jbGllbnQtc2lkZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2hhYmxlLWNsaWVudC1zaWRlL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1jdXN0b20vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWN1c3RvbS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtaW5zaWRlL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1pbnNpZGUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VsZWN0LXN5c3RlbS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWxlY3Qtc3lzdGVtL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LWNvbnRhaW5lci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC1jb250YWluZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlQ2FyZFByb2dyZXNzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlQ2FyZFByb2dyZXNzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlSG92ZXIuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVIb3Zlci5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2lkZS1tZW51L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGUtbWVudS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaWRlYmFyL3NpZGViYXItc3RydWN0dXJlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaWRlYmFyL3NpZGViYXItc3RydWN0dXJlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zbWFsbC1ib3gtc2VsZWN0YWJsZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zbWFsbC1ib3gtc2VsZWN0YWJsZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLWhvcml6b250YWwvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3Bpbm5lci1ob3Jpem9udGFsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItdmVydGljYWwvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3Bpbm5lci12ZXJ0aWNhbC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGxpdC1idXR0b24vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3BsaXQtYnV0dG9uL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1jb21wb25lbnQtYmxvY2svc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWNvbXBvbmVudC1ibG9jay9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtbGlzdC1saW5lL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1saXN0LWxpbmUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGFibGUtZm9ybS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJsZS1mb3JtL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnMtZXh0ZW5kZWQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFicy1leHRlbmRlZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJ1bGFyLWxpc3Qvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1saXN0L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItc2Nyb2xsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItc2Nyb2xsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RpbWVsaW5lL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RpbWVsaW5lL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RyaWdnZXItaWZyYW1lLXRvb2x0aXAvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC90cmlnZ2VyLWlmcmFtZS10b29sdGlwLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90cnVuY2F0ZWQtY29udGVudC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cnVuY2F0ZWQtY29udGVudC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wOC1wYWdlcy9jbGluaWNpYW5Xb3JrQXJlYS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDgtcGFnZXMvY2xpbmljaWFuV29ya0FyZWEuanNcIixcblx0XCIuLzA4LXBhZ2VzL2VTaWduYXR1cmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2VTaWduYXR1cmUuanNcIixcblx0XCIuLzA4LXBhZ2VzL3JlbW90ZUFwcG9pbnRtZW50LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9yZW1vdGVBcHBvaW50bWVudC5qc1wiLFxuXHRcIi4vZ2xvYmFscy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZ2xvYmFscy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIFxcXFwuanMkXCI7IiwiU2FwcGhpcmVXaWRnZXRzID0gd2luZG93LlNhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgfHwge307XHJcbiIsIi8qIENvbXBvbmVudCBUZXh0YXJlYSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuICBcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LnBhcmVudC5DYWxsVGV4dEFyZWFBdXRvUmVzaXplKCk7XG4gIH0pO1xuXG4gIHdpbmRvdy5DYWxsVGV4dEFyZWFBdXRvUmVzaXplID0gZnVuY3Rpb24gcHJlcGFyZVRleHRBcmVhQXV0b1Jlc2l6ZShUZXh0QXJlYUlkKXtcbiAgICBcbiAgICBpZihUZXh0QXJlYUlkPT11bmRlZmluZWQpe1xuICAgICAgdmFyIHRleHRBcmVhSW5wdXQgPSAkKCd0ZXh0YXJlYScpO1xuICAgIH1lbHNle1xuICAgICAgdmFyIHRleHRBcmVhSW5wdXQgPSAkKCcjJytUZXh0QXJlYUlkKTtcbiAgICB9XG4gICAgdGV4dEFyZWFJbnB1dC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuYXR0cigncm93cycsMik7XG4gICAgICAgIHJlc2l6ZVRleHRBcmVhKCQodGhpcykpO1xuICAgIH0pO1xuXG4gICAgdGV4dEFyZWFJbnB1dC5vbignaW5wdXQnLCBmdW5jdGlvbigpe1xuICAgICAgcmVzaXplVGV4dEFyZWEoJCh0aGlzKSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemVUZXh0QXJlYSAoJHRleHRBcmVhSW5wdXQpIHtcbiAgICBjb25zb2xlLmxvZygkdGV4dEFyZWFJbnB1dFswXS5zY3JvbGxIZWlnaHQpO1xuICAgIGlmKCR0ZXh0QXJlYUlucHV0WzBdLnNjcm9sbEhlaWdodCA9PSAwKXtcbiAgICAgICR0ZXh0QXJlYUlucHV0LmNzcygnaGVpZ2h0JywgJzYwcHgnKTtcbiAgICB9ZWxzZXtcbiAgICAgICR0ZXh0QXJlYUlucHV0LmNzcygnaGVpZ2h0JywgJHRleHRBcmVhSW5wdXRbMF0uc2Nyb2xsSGVpZ2h0KydweCcpO1xuICAgIH1cbiAgfVxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpOyIsIi8qIENvbXBvbmVudCBMYXlvdXRCYXNlICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBMYXlvdXRCYXNlKGNvbmZpZyk7XHJcblx0XHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0QmFzZS53aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcclxuXHR9O1xyXG5cclxuXHR2YXIgb3BlblNpZGViYXJJZnJhbWUgPSBmdW5jdGlvbihkdXJhdGlvbikge1xyXG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkXS5vcGVuU2lkZWJhcklmcmFtZShkdXJhdGlvbik7XHJcblx0fTtcclxuXHJcblx0dmFyIGNsb3NlU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XHJcblx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uud2lkZ2V0SWRdLmNsb3NlU2lkZWJhcklmcmFtZShkdXJhdGlvbik7XHJcblx0fTtcclxuXHJcblx0dmFyIHNjcm9sbFRvRWxlbWVudCA9IGZ1bmN0aW9uKCRlbGVtZW50LCBvZmZzZXQgPSAwKSB7XHJcblx0XHR2YXIgJHRhcmdldEVsZW1lbnQgPSAkZWxlbWVudDtcclxuXHJcblx0XHRpZiAoISEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWw7XHJcblxyXG5cdFx0XHRzY3JvbGxUb09mZnNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuTGF5b3V0QmFzZS53aWRnZXRJZF0uZ2V0VGhyZXNob2xkcygpLnNlY29uZGFyeVRocmVzaG9sZCA+IDApIHtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoc2Nyb2xsVG9PZmZzZXRJbnRlcnZhbCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IHRhcmdldEVsZW1lbnRPZmZzZXRUb3AgPSAkdGFyZ2V0RWxlbWVudC5vZmZzZXQoKS50b3A7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgaXNGaXhlZCA9ICQoJy5MYXlvdXRCYXNlLXNlY29uZGFyeScpLmhhc0NsYXNzKCdpc0ZpeGVkJyk7XHJcblx0XHRcdFx0XHRjb25zdCBpc0VtZXJnZW5jeSA9ICEhJCgnLkxheW91dEJhc2UtZW1lcmdlbmN5JykudGV4dCgpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGhlYWRlckhlaWdodCA9ICQoJy5TYXBwaGlyZUhlYWRlcicpLmhlaWdodCgpO1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2Vjb25kYXJ5SGVpZ2h0ID0gJCgnLkxheW91dEJhc2Utc2Vjb25kYXJ5Jykub3V0ZXJIZWlnaHQoKTtcclxuXHRcdFx0XHRcdGNvbnN0IGVtZXJnZW5jeUhlaWdodCA9IGlzRW1lcmdlbmN5ID8gJCgnLkxheW91dEJhc2UtZW1lcmdlbmN5JykuaGVpZ2h0KCkgOiAwO1xyXG5cclxuXHRcdFx0XHRcdC8vY29uc3Qgc2Vjb25kYXJ5Rml4ZWQgPSBpc0ZpeGVkID8gc2Vjb25kYXJ5SGVpZ2h0IDogc2Vjb25kYXJ5SGVpZ2h0IC0gMjY7XHJcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50T2Zmc2V0VG9wID0gdGFyZ2V0RWxlbWVudE9mZnNldFRvcCAtIChoZWFkZXJIZWlnaHQgKyBzZWNvbmRhcnlIZWlnaHQgKyBlbWVyZ2VuY3lIZWlnaHQpO1xyXG5cclxuXHRcdFx0XHRcdCQoJ2JvZHksIGh0bWwnKS5zY3JvbGxUb3AodGFyZ2V0RWxlbWVudE9mZnNldFRvcCAtIDE2KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIExheW91dEJhc2UgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR0aGlzLmxheW91dEJhc2VSZWRyYXdUaW1lciA9IDA7XHJcblx0XHR0aGlzLmhhc0hlYWRlciA9IGNvbmZpZy5oYXNIZWFkZXI7XHJcblx0XHR0aGlzLmlzRXhwYW5kYWJsZSA9IGNvbmZpZy5pc0V4cGFuZGFibGU7XHJcblx0XHR0aGlzLmlzVG9wV2luZG93ID0gd2luZG93LnRvcCA9PT0gd2luZG93LnNlbGYgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XHJcblx0XHR0aGlzLiR3cmFwcGVyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLVdyYXBwZXInKTtcclxuXHRcdHRoaXMuJHNwYWNlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1zcGFjZXInKTtcclxuXHRcdHRoaXMuJG1haW5NZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLU1haW5NZW51Jyk7XHJcblx0XHR0aGlzLiRoZWFkZXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtaGVhZGVyJyk7XHJcblx0XHR0aGlzLiRoZWFkZXJCb2R5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1ib2R5Jyk7XHJcblx0XHR0aGlzLiRwcmltYXJ5TWVudSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1wcmltYXJ5LW1lbnUnKTtcclxuXHRcdHRoaXMuJGVtZXJnZW5jeSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKTtcclxuXHRcdHRoaXMuJHNlY29uZGFyeSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnknKTtcclxuXHRcdHRoaXMuJHNlY29uZGFyeU1lbnUgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2Utc2Vjb25kYXJ5LW1lbnUnKTtcclxuXHRcdHRoaXMuJGlmcmFtZVNpZGViYXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhcicpO1xyXG5cdFx0dGhpcy4kaGVhZGVyQWRkaXRpb25hbENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWFkZGl0aW9uYWwtY29udGVudCcpO1xyXG5cdFx0dGhpcy4kdG9wZml4ZWRDb250ZW50ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXRvcGZpeGVkY29udGVudCcpO1xyXG5cdFx0dGhpcy4kYm90dG9tZml4ZWRDb250ZW50ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLWJvdHRvbWZpeGVkY29udGVudCcpO1xyXG5cdFx0dGhpcy4kbWFpbkNvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtTWFpbkNvbnRlbnQnKTtcclxuXHRcdHRoaXMuZXh0cmFQYWRkaW5nRW1lcmdlbmN5ID0gMDtcclxuXHRcdHRoaXMuZXh0cmFQYWRkaW5nU2Vjb25kYXJ5ID0gMDtcclxuXHRcdHRoaXMuc2V0dXBXaW5kb3dFdmVudHMoKTtcclxuXHRcdHRoaXMuJGlmcmFtZVNpZGViYXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibGRzLXJpbmcgMVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdMYXlvdXRCYXNlJyk7XHJcblx0XHRcdGlmIChfdGhpcy5pc1RvcFdpbmRvdykge1xyXG5cdFx0XHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdib2R5JykuY2xpY2soKTtcclxuXHRcdFx0JCh3aW5kb3cpLnNjcm9sbCgpO1xyXG5cclxuXHRcdFx0X3RoaXMuJGlmcmFtZVNpZGViYXIuZmluZCgnLmxkcy1yaW5nJykuZmFkZU91dCgpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuc2V0dXBXaW5kb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR2YXIgY3Vyc29yUG9zaXRvbiA9IDA7XHJcblxyXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdFx0X3RoaXMudXBkYXRlVGhyZXNob2xkcygpO1xyXG5cdFx0XHRfdGhpcy5oYW5kbGVPcHRpb25hbENvbnRhaW5lcnMoKTtcclxuXHRcdFx0X3RoaXMuaGFuZGxlTGF5b3V0VG9wUGFkZGluZygpO1xyXG5cdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRCb3R0b21QYWRkaW5nKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgbmV3UG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KF90aGlzLmxheW91dEJhc2VSZWRyYXdUaW1lcik7XHJcblx0XHRcdF90aGlzLmxheW91dEJhc2VSZWRyYXdUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdF90aGlzLnVwZGF0ZVRocmVzaG9sZHMoKTtcclxuXHRcdFx0XHRfdGhpcy5oYW5kbGVPcHRpb25hbENvbnRhaW5lcnMoKTtcclxuXHRcdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRUb3BQYWRkaW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuaGFuZGxlTGF5b3V0Qm90dG9tUGFkZGluZygpO1xyXG5cdFx0XHRcdF90aGlzLmhhbmRsZU1hbmFnZVF1ZXVlQ2FyZChjdXJzb3JQb3NpdG9uLCBuZXdQb3NpdGlvbik7XHJcblx0XHRcdFx0Y3Vyc29yUG9zaXRvbiA9IG5ld1Bvc2l0aW9uO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuaGFuZGxlT3B0aW9uYWxDb250YWluZXJzID0gZnVuY3Rpb24oKSB7XHJcblx0XHQvKmNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRcdGNvbnN0IGlzRW1lcmdlbmN5ID0gISEkKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKS50ZXh0KCk7Ki9cclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5oYW5kbGVMYXlvdXRUb3BQYWRkaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcGFkZGluZ1RvcCA9IHRoaXMuY29udGVudFRocmVzaG9sZCArIHRoaXMuZXh0cmFQYWRkaW5nRW1lcmdlbmN5ICsgdGhpcy5leHRyYVBhZGRpbmdTZWNvbmRhcnk7XHJcblx0XHR0aGlzLiRzcGFjZXIuc3RvcCgpLmFuaW1hdGUoXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWlnaHQ6IHBhZGRpbmdUb3AsXHJcblx0XHRcdH0sXHJcblx0XHRcdDAsXHJcblx0XHRcdCdsaW5lYXInXHJcblx0XHQpO1xyXG5cdFx0aWYgKHRoaXMuJHRvcGZpeGVkQ29udGVudC5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0dGhpcy4kdG9wZml4ZWRDb250ZW50LmNzcyh7XHJcblx0XHRcdFx0d2lkdGg6ICQoJy5MYXlvdXRCYXNlLU1haW5Db250ZW50Jykud2lkdGgoKSxcclxuXHRcdFx0XHR0b3A6IHRoaXMudG9wZml4ZWRDb250ZW50VGhyZXNob2xkICsgJ3B4JyxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuaGFuZGxlTGF5b3V0Qm90dG9tUGFkZGluZyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMuJGJvdHRvbWZpeGVkQ29udGVudC5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0aWYgKCQoJ2JvZHknKVswXS5zY3JvbGxIZWlnaHQgPiAkKCdib2R5JykuaGVpZ2h0KCkpIHtcclxuXHRcdFx0XHR2YXIgYm90dG9tRml4ZWRIZWlnaHQgPSB0aGlzLiRib3R0b21maXhlZENvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcblx0XHRcdFx0dGhpcy4kd3JhcHBlci5hZGRDbGFzcygnaGFzRml4ZWRCb3R0b20nKS5jc3MoJ3BhZGRpbmctYm90dG9tJywgYm90dG9tRml4ZWRIZWlnaHQgKyAncHgnKTtcclxuXHRcdFx0XHR0aGlzLiRib3R0b21maXhlZENvbnRlbnQuY3NzKHtcclxuXHRcdFx0XHRcdHdpZHRoOiAkKCcuTGF5b3V0QmFzZS1NYWluQ29udGVudCcpLm91dGVyV2lkdGgodHJ1ZSksXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy4kd3JhcHBlci5yZW1vdmVDbGFzcygnaGFzRml4ZWRCb3R0b20nKS5jc3MoJ3BhZGRpbmctYm90dG9tJywgJycpO1xyXG5cdFx0XHRcdHRoaXMuJGJvdHRvbWZpeGVkQ29udGVudC5jc3Moe1xyXG5cdFx0XHRcdFx0d2lkdGg6ICcnLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUudXBkYXRlVGhyZXNob2xkcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG1haW5NZW51SGVpZ2h0ID0gdGhpcy4kbWFpbk1lbnUub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdHZhciBoZWFkZXJCb2R5SGVpZ2h0ID0gdGhpcy4kaGVhZGVyQm9keS5vdXRlckhlaWdodCh0cnVlKSB8fCB0aGlzLiRoZWFkZXIub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdHZhciB0b3BmaXhlZENvbnRlbnRIZWlnaHQgPSB0aGlzLiR0b3BmaXhlZENvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdHZhciBwcmltYXJ5TWVudUhlaWdodCA9IHRoaXMuJHByaW1hcnlNZW51Lm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XHJcblx0XHR2YXIgZW1lcmdlbmN5SGVpZ2h0ID0gdGhpcy4kZW1lcmdlbmN5Lm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XHJcblx0XHR0aGlzLnRvcGZpeGVkQ29udGVudFRocmVzaG9sZCA9IG1haW5NZW51SGVpZ2h0ICsgaGVhZGVyQm9keUhlaWdodDtcclxuXHRcdHRoaXMuY29udGVudFRocmVzaG9sZCA9IG1haW5NZW51SGVpZ2h0ICsgaGVhZGVyQm9keUhlaWdodCArIHRvcGZpeGVkQ29udGVudEhlaWdodDtcclxuXHRcdHRoaXMuZW1lcmdlbmN5VGhyZXNob2xkID0gbWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0ICsgdG9wZml4ZWRDb250ZW50SGVpZ2h0ICsgcHJpbWFyeU1lbnVIZWlnaHQ7XHJcblx0XHR0aGlzLnNlY29uZGFyeVRocmVzaG9sZCA9XHJcblx0XHRcdG1haW5NZW51SGVpZ2h0ICsgaGVhZGVyQm9keUhlaWdodCArIHRvcGZpeGVkQ29udGVudEhlaWdodCArIHByaW1hcnlNZW51SGVpZ2h0ICsgZW1lcmdlbmN5SGVpZ2h0O1xyXG5cdH07XHJcblxyXG5cdExheW91dEJhc2UucHJvdG90eXBlLmdldFRocmVzaG9sZHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRvcGZpeGVkQ29udGVudFRocmVzaG9sZDogdGhpcy50b3BmaXhlZENvbnRlbnRUaHJlc2hvbGQsXHJcblx0XHRcdGNvbnRlbnRUaHJlc2hvbGQ6IHRoaXMuY29udGVudFRocmVzaG9sZCxcclxuXHRcdFx0ZW1lcmdlbmN5VGhyZXNob2xkOiB0aGlzLmVtZXJnZW5jeVRocmVzaG9sZCxcclxuXHRcdFx0c2Vjb25kYXJ5VGhyZXNob2xkOiB0aGlzLnNlY29uZGFyeVRocmVzaG9sZCxcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUub3BlblNpZGViYXJJZnJhbWUgPSBmdW5jdGlvbihkdXJhdGlvbl9pbikge1xyXG5cdFx0dmFyIGR1cmF0aW9uID0gZHVyYXRpb25faW4gPj0gMCA/IGR1cmF0aW9uX2luIDogMTAwO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hbmltYXRlKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0ZHVyYXRpb25cclxuXHRcdCk7XHJcblx0XHQkKCdib2R5JylcclxuXHRcdFx0LmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKVxyXG5cdFx0XHQuY2xpY2soKTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5jbG9zZVNpZGViYXJJZnJhbWUgPSBmdW5jdGlvbihkdXJhdGlvbl9pbikge1xyXG5cdFx0dmFyIGR1cmF0aW9uID0gZHVyYXRpb25faW4gPj0gMCA/IGR1cmF0aW9uX2luIDogMTAwO1xyXG5cdFx0dmFyIHRhcmdldFdpZHRoID0gdGhpcy5pc0V4cGFuZGFibGUgPyA0MCA6IDI2MjtcclxuXHRcdHRoaXMuJGlmcmFtZVNpZGViYXIuYW5pbWF0ZShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdpZHRoOiB0YXJnZXRXaWR0aCxcclxuXHRcdFx0fSxcclxuXHRcdFx0ZHVyYXRpb25cclxuXHRcdCk7XHJcblx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xyXG5cdH07XHJcblxyXG5cdExheW91dEJhc2UucHJvdG90eXBlLmhhbmRsZU1hbmFnZVF1ZXVlQ2FyZCA9IGZ1bmN0aW9uKGN1cnNvclBvc2l0b24sIG5ld1Bvc2l0aW9uKSB7XHJcblx0XHRjb25zdCAkbWFuYWdlUXVldWUgPSAkKCcuTWFuYWdlUXVldWVDb250YWluZXInKTtcclxuXHJcblx0XHRpZiAoJG1hbmFnZVF1ZXVlLmxlbmd0aCkge1xyXG5cdFx0XHRpZiAobmV3UG9zaXRpb24gPiBjdXJzb3JQb3NpdG9uKSB7XHJcblx0XHRcdFx0JG1hbmFnZVF1ZXVlLmFkZENsYXNzKCdNYW5hZ2VRdWV1ZUNvbnRhaW5lci0tY2xvc2VkJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAobmV3UG9zaXRpb24gPCBjdXJzb3JQb3NpdG9uKSB7XHJcblx0XHRcdFx0JG1hbmFnZVF1ZXVlLnJlbW92ZUNsYXNzKCdNYW5hZ2VRdWV1ZUNvbnRhaW5lci0tY2xvc2VkJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0QmFzZSA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHRcdGNsb3NlU2lkZWJhcklmcmFtZSxcclxuXHRcdG9wZW5TaWRlYmFySWZyYW1lLFxyXG5cdFx0c2Nyb2xsVG9FbGVtZW50LFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IExheW91dEJsYW5rICovXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50KSB7XHJcblx0XHRpZiAoISEkKHRoaXMuZnJhbWVFbGVtZW50KS5jbG9zZXN0KCcuTWFpbkludGVyYWN0aXZlQ2FyZCcpLmxlbmd0aCkge1xyXG5cdFx0XHQkKCcuTGF5b3V0QmxhbmsuUGFnZScpLmFkZENsYXNzKCdNYWluSW50ZXJhY3RpdmVDYXJkJyk7XHJcblx0XHR9XHJcblx0fVxyXG59KTsiLCIoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y29uc3QgRm9yd2FyZFBhdGllbnRDb21wb25lbnQgPSAoKSA9PiB7XHJcblx0XHRjb25zdCAkYWxsT3B0aW9ucyA9ICQoJy5Gb3J3YXJkTG9jYXRpb25zQ29udGVudCcpO1xyXG5cdFx0Y29uc3QgJG11bHRpcGxlID0gJCgnLkZvcndhcmRMb2NhdGlvbnNEaXYnKTtcclxuXHRcdGNvbnN0ICRzaW5nbGUgPSAkKCcuU2luZ2xlTG9jYXRpb24nKTtcclxuXHJcblx0XHQkKCdib2R5JykubW91c2V1cChmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNvbnN0IG5vdENsaWNrSW5BbGxPcHRpb25zID0gISRhbGxPcHRpb25zLmlzKGUudGFyZ2V0KSAmJiAkYWxsT3B0aW9ucy5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMDtcclxuXHRcdFx0Y29uc3Qgbm90Q2xpY2tJbk11bHRpcGxlID0gISRtdWx0aXBsZS5pcyhlLnRhcmdldCkgJiYgJG11bHRpcGxlLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwO1xyXG5cdFx0XHRjb25zdCBub3RDbGlja0luU2luZ2xlID0gISRzaW5nbGUuaXMoZS50YXJnZXQpICYmICRzaW5nbGUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzT3BlbiA9ICRtdWx0aXBsZS5pcygnOnZpc2libGUnKTtcclxuXHJcblx0XHRcdGlmIChub3RDbGlja0luQWxsT3B0aW9ucyAmJiBub3RDbGlja0luTXVsdGlwbGUgJiYgbm90Q2xpY2tJblNpbmdsZSAmJiBpc09wZW4pIHtcclxuXHRcdFx0XHQkbXVsdGlwbGUuY2xpY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkxheW91dEVtZXJnZW5jeSA9IHtcclxuXHRcdEZvcndhcmRQYXRpZW50Q29tcG9uZW50LFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IExheW91dFBvcHVwICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHR2YXIgcG9wdXBXaWR0aDtcclxuXHR2YXIgcG9wdXBNaW5XaWR0aDtcclxuXHR2YXIgcG9wdXBIZWlnaHQ7XHJcblx0dmFyIHBvcHVwTWluSGVpZ2h0O1xyXG5cdHZhciBwb3B1cE1heEhlaWdodDtcclxuXHR2YXIgcG9wdXBXaWR0aFBlcmNlbnRhZ2U7XHJcblx0dmFyIGxheW91dFBvcHVwUmVzaXplVGltZXI7XHJcblxyXG5cdHZhciAkcG9wdXAgPSAkKCcuTGF5b3V0UG9wdXAnKTtcclxuXHR2YXIgJG9zUG9wdXAgPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC1Qb3B1cC5vcy1pbnRlcm5hbC11aS1kaWFsb2cnKTtcclxuXHR2YXIgJG9zUG9wdXBDb250ZW50ID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQub3MtaW50ZXJuYWwtdWktd2lkZ2V0LWNvbnRlbnQnKTtcclxuXHR2YXIgJG92ZXJsYXkgPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC11aS13aWRnZXQtb3ZlcmxheScpO1xyXG5cdHZhciBwb3B1cFNpemU7XHJcblx0dmFyIHBhZGRpbmdCb2R5O1xyXG5cclxuXHRjb25zdCBCT0RZX1BBRERJTkdfVE9QX0JPVFRPTSA9IDMyO1xyXG5cclxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcgPSBjb25maWc7XHJcblx0XHRwb3B1cFNpemUgPSBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLlBvcHVwU2l6ZTtcclxuXHRcdHBhZGRpbmdCb2R5ID0gY29uZmlnLm5vQ29udGVudFBhZGRpbmcgPyAwIDogQk9EWV9QQURESU5HX1RPUF9CT1RUT007XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdMYXlvdXRQb3B1cCcpOyAvLyBiZWNhdXNlIGRhdGV0aW1lcmFuZ2VwaWNrZXIgaXMgYXR0YWNoZWQgdG8gYm9keVxyXG5cclxuXHRcdFx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNUb3VjaCkge1xyXG5cdFx0XHRcdCRwb3B1cC5hZGRDbGFzcygnaXNUb3VjaCcpO1xyXG5cdFx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnaXNUb3VjaCcpOyAvLyBiZWNhdXNlIHNlbGVjdDIgaXMgYXR0YWNoZWQgdG8gYm9keVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcclxuXHRcdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtdXRhdGlvbiwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdC8vIEF2b2lkIHRvIHJlZHJhdyB0aGUgZGlhbG9nIGlmIGl0IGlzIG9uZSB0aGUgZm9sbG93aW5nIHBvcHVwc1xyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuUG9wdXBzVG9Bdm9pZE11dGF0aW9ucyAmJlxyXG5cdFx0XHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuUG9wdXBzVG9Bdm9pZE11dGF0aW9ucy5zb21lKGUgPT4gJChgLiR7ZX1gKS5sZW5ndGgpXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlZHJhd0RpYWxvZ1dpbmRvdygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xyXG5cdFx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcclxuXHRcdFx0XHRzdWJ0cmVlOiB0cnVlLFxyXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IGZhbHNlLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQoJ2JvZHknKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzLmZyYW1lRWxlbWVudCkuY3NzKHtcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmVzaXplRGlhbG9nKCk7XHJcblx0XHRcdFx0cmVzaXplQ29udGVudCgpO1xyXG5cdFx0XHRcdCQoJ2JvZHknKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHR9LCAxNTApO1xyXG5cclxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAucmVkcmF3RGlhbG9nV2luZG93KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93LnBhcmVudClcclxuXHRcdFx0Lm9mZigncmVzaXplLkxheW91dFBvcHVwJylcclxuXHRcdFx0Lm9uKCdyZXNpemUuTGF5b3V0UG9wdXAnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZWRyYXdEaWFsb2dXaW5kb3coKTtcclxuXHRcdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVkcmF3RGlhbG9nV2luZG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjbGVhclRpbWVvdXQobGF5b3V0UG9wdXBSZXNpemVUaW1lcik7XHJcblx0XHRsYXlvdXRQb3B1cFJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVzaXplRGlhbG9nKCk7XHJcblx0XHRcdHJlc2l6ZUNvbnRlbnQoKTtcclxuXHRcdFx0JCgnYm9keScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHR9LCAzMDApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlc2l6ZURpYWxvZyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaGFzQ2xvc2UpIHtcclxuXHRcdFx0d2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyJykuc2hvdygpO1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy50b3AuX2lmcmFtZVBvcHVwICE9IHVuZGVmaW5lZCB8fCBmYWxzZSkge1xyXG5cdFx0XHRcdGNvbnN0ICRjbG9zZUJ1dHRvbiA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhci1jbG9zZScpO1xyXG5cclxuXHRcdFx0XHQkY2xvc2VCdXR0b24ucmVtb3ZlQXR0cignaHJlZicpO1xyXG5cdFx0XHRcdCRjbG9zZUJ1dHRvbi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgKCkgPT4gd2luZG93LnRvcC5faWZyYW1lUG9wdXAuU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAuY2xvc2UoKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAod2luZG93LnRvcC4kKCdib2R5JykuaGFzQ2xhc3MoJ0xheW91dEJhc2UnKSkge1xyXG5cdFx0XHR3aW5kb3cudG9wLiQoJ2JvZHknKS5jc3Moe1xyXG5cdFx0XHRcdG92ZXJmbG93WTogJ2hpZGRlbicsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRvdmVybGF5LndpZHRoKCcxMDAlJyk7XHJcblxyXG5cdFx0Y2FsY1dpZHRoUGVyY2VudGFnZShwb3B1cFNpemUsICRvc1BvcHVwQ29udGVudCk7XHJcblxyXG5cdFx0JG9zUG9wdXAuY3NzKHtcclxuXHRcdFx0bGVmdDogJ3Vuc2V0JyxcclxuXHRcdFx0dG9wOiAndW5zZXQnLFxyXG5cdFx0XHRoZWlnaHQ6ICdhdXRvJyxcclxuXHRcdFx0bWluV2lkdGg6IHBvcHVwTWluV2lkdGggKyAncHgnLFxyXG5cdFx0XHR3aWR0aDogcG9wdXBXaWR0aCArICdweCcsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZXNpemVDb250ZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgJGJvZHkgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKTtcclxuXHRcdHZhciBjb250ZW50U2Nyb2xsVG9wID0gJGJvZHkuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0aWYgKHBvcHVwU2l6ZSA9PT0gJ1NtYWxsJyAmJiAkKCcuZGF0ZXJhbmdlcGlja2VyOnZpc2libGUnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdC8vIHNraXAgdGhlIHJlc2V0IG9mIC5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGJvZHkuY3NzKHtcclxuXHRcdFx0XHRoZWlnaHQ6ICdhdXRvJyxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGJvZHlDb250ZW50ID0gcGFkZGluZ0JvZHlcclxuXHRcdFx0PyAkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKVswXS5zY3JvbGxIZWlnaHRcclxuXHRcdFx0OiAkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKS5oZWlnaHQoKTtcclxuXHJcblx0XHR2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19oZWFkZXInKS5pbm5lckhlaWdodCgpIHx8IDA7XHJcblx0XHR2YXIgaW50cm9IZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2ludHJvJykuaW5uZXJIZWlnaHQoKSB8fCAwO1xyXG5cdFx0dmFyIGJvZHlIZWlnaHQgPSBib2R5Q29udGVudCB8fCAwO1xyXG5cdFx0dmFyIGZvb3RlckhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9fZm9vdGVyJykuaW5uZXJIZWlnaHQoKSB8fCAwO1xyXG5cdFx0dmFyIGNvbnRlbnRIZWlnaHQgPSBoZWFkZXJIZWlnaHQgKyBpbnRyb0hlaWdodCArIGJvZHlIZWlnaHQgKyBmb290ZXJIZWlnaHQgKyBwYWRkaW5nQm9keTtcclxuXHRcdHZhciBkaWFsb2dIZWlnaHQgPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC1Qb3B1cC5vcy1pbnRlcm5hbC11aS1kaWFsb2cnKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cucGFyZW50KS5oZWlnaHQoKTtcclxuXHJcblx0XHRpZiAocG9wdXBTaXplID09PSAnU21hbGwnKSB7XHJcblx0XHRcdHZhciBwYXJlbnRIZWlnaHQgPSAkKHdpbmRvdy5wYXJlbnQpLmhlaWdodCgpO1xyXG5cclxuXHRcdFx0aWYgKGNvbnRlbnRIZWlnaHQgPiBwYXJlbnRIZWlnaHQpIHtcclxuXHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KHBhcmVudEhlaWdodCAtIDcwKTtcclxuXHRcdFx0XHQkYm9keS5oZWlnaHQoJG9zUG9wdXBDb250ZW50LmhlaWdodCgpIC0gcGFkZGluZ0JvZHkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoY29udGVudEhlaWdodCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChjb250ZW50SGVpZ2h0IDwgZGlhbG9nSGVpZ2h0ICYmIFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNGaXhlZEhlaWdodCkge1xyXG5cdFx0XHRcdHZhciBmb3JjZWRCb2R5SGVpZ2h0ID0gZGlhbG9nSGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gaW50cm9IZWlnaHQgLSBmb290ZXJIZWlnaHQgLSBwYWRkaW5nQm9keTtcclxuXHRcdFx0XHQkYm9keS5oZWlnaHQoZm9yY2VkQm9keUhlaWdodCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoY29udGVudEhlaWdodCA8IGRpYWxvZ0hlaWdodCkge1xyXG5cdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoY29udGVudEhlaWdodCk7XHJcblx0XHRcdFx0aWYgKGNvbnRlbnRIZWlnaHQgPCBwb3B1cE1pbkhlaWdodCkge1xyXG5cdFx0XHRcdFx0dmFyIGRpZmVyZW5jZSA9IHBvcHVwTWluSGVpZ2h0IC0gY29udGVudEhlaWdodDtcclxuXHRcdFx0XHRcdCRib2R5LmhlaWdodChib2R5SGVpZ2h0ICsgZGlmZXJlbmNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoY29udGVudEhlaWdodCA+PSBkaWFsb2dIZWlnaHQgJiYgU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc0ZpeGVkSGVpZ2h0KSB7XHJcblx0XHRcdFx0dmFyIGZvcmNlZEJvZHlIZWlnaHQgPSBkaWFsb2dIZWlnaHQgLSBoZWFkZXJIZWlnaHQgLSBpbnRyb0hlaWdodCAtIGZvb3RlckhlaWdodCAtIHBhZGRpbmdCb2R5O1xyXG5cdFx0XHRcdCRib2R5LmhlaWdodChmb3JjZWRCb2R5SGVpZ2h0KTtcclxuXHRcdFx0fSBlbHNlIGlmIChjb250ZW50SGVpZ2h0ID49IGRpYWxvZ0hlaWdodCkge1xyXG5cdFx0XHRcdGlmIChjb250ZW50SGVpZ2h0ID4gcG9wdXBNYXhIZWlnaHQpIHtcclxuXHRcdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQocG9wdXBNYXhIZWlnaHQpO1xyXG5cdFx0XHRcdFx0dmFyIGZvcmNlZEJvZHlIZWlnaHQgPSBwb3B1cE1heEhlaWdodCAtIGhlYWRlckhlaWdodCAtIGludHJvSGVpZ2h0IC0gZm9vdGVySGVpZ2h0IC0gcGFkZGluZ0JvZHk7XHJcblx0XHRcdFx0XHQkYm9keS5oZWlnaHQoZm9yY2VkQm9keUhlaWdodCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoY29udGVudEhlaWdodCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybignVW5leHBlY3RlZCBjb21iaW5hdGlvbi4uLicpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSGFuZGxlIHdoZW4gRGF0ZVRpbWVSYW5nZVBpY2tlciBpcyBvcGVuZWRcclxuXHRcdHZhciBkYXRlUmFuZ2VQaWNrZXIgPSAkKCcuZGF0ZXJhbmdlcGlja2VyOnZpc2libGUnKTtcclxuXHRcdGlmIChkYXRlUmFuZ2VQaWNrZXIubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdGlmIChkYXRlUmFuZ2VQaWNrZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gZGlhbG9nSGVpZ2h0KSB7XHJcblx0XHRcdFx0dmFyIGRpZmZlcmVuY2UgPSBkYXRlUmFuZ2VQaWNrZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gZGlhbG9nSGVpZ2h0O1xyXG5cdFx0XHRcdHZhciBib2R5SGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50Jykub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcblxyXG5cdFx0XHRcdCQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpLmhlaWdodChib2R5SGVpZ2h0ICsgZGlmZmVyZW5jZSArIHBhZGRpbmdCb2R5KTtcclxuXHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KCQoJ2JvZHknKVswXS5zY3JvbGxIZWlnaHQpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBwb3B1cFRvdGFsSGVpZ2h0ID0gJG9zUG9wdXBDb250ZW50LmhlaWdodCgpO1xyXG5cdFx0XHRcdGNvbnN0IG5ld0NvbnRlbnRIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHknKS5vdXRlckhlaWdodCh0cnVlKSArIGhlYWRlckhlaWdodCArIGludHJvSGVpZ2h0ICsgZm9vdGVySGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93SGVpZ2h0IDwgNzIwKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjb29yZHMgPSBkYXRlUmFuZ2VQaWNrZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0XHR2YXIgcG9pbnQgPSB3aW5kb3cucGFyZW50LnNjcm9sbFkgKyBjb29yZHMudG9wIC0gY29vcmRzLmhlaWdodDtcclxuXHRcdFx0XHRcdGRhdGVSYW5nZVBpY2tlci5hZGRDbGFzcygnZHJvcC11cCcpLmNzcygndG9wJywgcG9pbnQpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAod2luZG93SGVpZ2h0IDwgOTgwICYmIG5ld0NvbnRlbnRIZWlnaHQgPiBwb3B1cFRvdGFsSGVpZ2h0KSB7XHJcblx0XHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuY3NzKHtcclxuXHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBuZXdDb250ZW50SGVpZ2h0ICsgJ3B4JyxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCRib2R5LnNjcm9sbFRvcChjb250ZW50U2Nyb2xsVG9wKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBpbmNyZWFzZUhlaWdodCA9IGZ1bmN0aW9uKGRpZmVyZW5jZSkge1xyXG5cdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodCgkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KCkgKyBkaWZlcmVuY2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNjcm9sbFRvRWxlbWVudCA9IGZ1bmN0aW9uKCRlbGVtZW50KSB7XHJcblx0XHR2YXIgJHRhcmdldEVsZW1lbnQgPSAkZWxlbWVudDtcclxuXHRcdGlmICghISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHR2YXIgc2Nyb2xsVG9PZmZzZXRJbnRlcnZhbDtcclxuXHRcdFx0c2Nyb2xsVG9PZmZzZXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoc2Nyb2xsVG9PZmZzZXRJbnRlcnZhbCk7XHJcblx0XHRcdFx0dmFyIGhlYWRlckhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9faGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdFx0XHR2YXIgaW50cm9IZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2ludHJvJykub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdFx0XHR2YXIgY3VycmVudEJvZHlTY3JvbGwgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKVswXS5zY3JvbGxUb3AgfHwgMDtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0RWxlbWVudE9mZnNldFRvcCA9ICR0YXJnZXRFbGVtZW50Lm9mZnNldCgpLnRvcCAtIGhlYWRlckhlaWdodCAtIGludHJvSGVpZ2h0ICsgY3VycmVudEJvZHlTY3JvbGwgLSAyMDtcclxuXHRcdFx0XHQkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKS5zY3JvbGxUb3AodGFyZ2V0RWxlbWVudE9mZnNldFRvcCk7XHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2FsY1dpZHRoUGVyY2VudGFnZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHdpbmRvd0hlaWdodCA9ICQod2luZG93LnBhcmVudCkuaGVpZ2h0KCk7XHJcblx0XHRjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93LnBhcmVudCkud2lkdGgoKTtcclxuXHJcblx0XHRpZiAocG9wdXBTaXplID09PSAnU21hbGwnKSB7XHJcblx0XHRcdGxldCBwZXJjZW50YWdlID0gMC4zMztcclxuXHJcblx0XHRcdGlmICh3aW5kb3dXaWR0aCA8PSAxMDI0KSBwZXJjZW50YWdlID0gMC41O1xyXG5cdFx0XHRlbHNlIGlmICh3aW5kb3dXaWR0aCA+IDEwMjQgJiYgd2luZG93V2lkdGggPD0gMTQ0MCkgcGVyY2VudGFnZSA9IDAuNDtcclxuXHJcblx0XHRcdHBvcHVwV2lkdGggPSBwYXJzZUludCh3aW5kb3dXaWR0aCAqIHBlcmNlbnRhZ2UpO1xyXG5cdFx0XHRwb3B1cE1pbldpZHRoID0gNDAwO1xyXG5cdFx0fSBlbHNlIGlmIChwb3B1cFNpemUgPT09ICdNZWRpdW0nKSB7XHJcblx0XHRcdGlmICh3aW5kb3dXaWR0aCA8PSAxMDI0KSBwb3B1cFdpZHRoUGVyY2VudGFnZSA9IDAuODtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c3dpdGNoIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLlBvcHVwV2lkdGgpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ1hTbWFsbCc6XHJcblx0XHRcdFx0XHRcdHBvcHVwTWluV2lkdGggPSAyMDA7XHJcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC4yO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ1NtYWxsJzpcclxuXHRcdFx0XHRcdFx0cG9wdXBNaW5XaWR0aCA9IDMwMDtcclxuXHRcdFx0XHRcdFx0cG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjM7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnTWVkaXVtJzpcclxuXHRcdFx0XHRcdFx0cG9wdXBNaW5XaWR0aCA9IDcwMDtcclxuXHRcdFx0XHRcdFx0cG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjY7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0cG9wdXBNaW5XaWR0aCA9IDcwMDtcclxuXHRcdFx0XHRcdFx0cG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRwb3B1cFdpZHRoUGVyY2VudGFnZSA9IFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNUb3VjaCA/IDAuOCA6IHBvcHVwV2lkdGhQZXJjZW50YWdlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwb3B1cFdpZHRoID0gcGFyc2VJbnQod2luZG93V2lkdGggKiBwb3B1cFdpZHRoUGVyY2VudGFnZSk7XHJcblx0XHRcdHBvcHVwTWluSGVpZ2h0ID0gMTAwO1xyXG5cdFx0XHRwb3B1cE1heEhlaWdodCA9IFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNUb3VjaFxyXG5cdFx0XHRcdD8gcGFyc2VJbnQod2luZG93SGVpZ2h0ICogMC45KVxyXG5cdFx0XHRcdDogcGFyc2VJbnQod2luZG93SGVpZ2h0ICogMC43KTtcclxuXHJcblx0XHRcdGlmIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzRml4ZWRIZWlnaHQpIHBvcHVwSGVpZ2h0ID0gcG9wdXBNYXhIZWlnaHQ7XHJcblx0XHRcdGVsc2UgcG9wdXBIZWlnaHQgPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC1Qb3B1cC5vcy1pbnRlcm5hbC11aS1kaWFsb2cnKS5vdXRlckhlaWdodCgpO1xyXG5cclxuXHRcdFx0JG9zUG9wdXBDb250ZW50LmNzcyh7XHJcblx0XHRcdFx0bWF4SGVpZ2h0OiBwb3B1cE1heEhlaWdodCArICdweCcsXHJcblx0XHRcdFx0bWluSGVpZ2h0OiBwb3B1cE1pbkhlaWdodCArICdweCcsXHJcblx0XHRcdFx0aGVpZ2h0OiBwb3B1cEhlaWdodCArICdweCcsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmIChwb3B1cFNpemUgPT09ICdMYXJnZScpIHtcclxuXHRcdFx0cG9wdXBNaW5XaWR0aCA9IHBhcnNlSW50KHdpbmRvd1dpZHRoICogMC44KTtcclxuXHRcdFx0cG9wdXBNYXhIZWlnaHQgPSBwYXJzZUludCh3aW5kb3dIZWlnaHQgKiAwLjkpO1xyXG5cdFx0fSBlbHNlIGlmIChwb3B1cFNpemUgPT09ICdGaXhlZCcpIHtcclxuXHRcdFx0cG9wdXBXaWR0aCA9IFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwLnBvcHVwV2lkdGg7XHJcblx0XHRcdHBvcHVwTWluV2lkdGggPSBTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQb3B1cC5wb3B1cFdpZHRoO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cCA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHRcdHJlc2l6ZURpYWxvZyxcclxuXHRcdHJlc2l6ZUNvbnRlbnQsXHJcblx0XHRpbmNyZWFzZUhlaWdodCxcclxuXHRcdHJlZHJhd0RpYWxvZ1dpbmRvdyxcclxuXHRcdHNjcm9sbFRvRWxlbWVudCxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XHJcblxyXG4kKHdpbmRvdykudW5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdGlmICghISQoJy5MYXlvdXRQb3B1cCcpLmxlbmd0aCkge1xyXG5cdFx0d2luZG93LnRvcC4kKCdib2R5JykuY3NzKHtcclxuXHRcdFx0b3ZlcmZsb3dZOiAnc2Nyb2xsJyxcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7XHJcbiIsIi8qIENvbXBvbmVudCBTdWJMYXlvdXRMZWZ0ICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuU3ViTGF5b3V0TGVmdCA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBBY3Rpb25zTWVudSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgJHRyaWdnZXJFbGVtZW50ID0gJCgnIycgKyBjb25maWcudHJpZ2dlckVsZW1lbnQpO1xyXG5cdFx0dmFyICRjb250ZW50RWxlbWVudCA9ICQoJyMnICsgY29uZmlnLmNvbnRlbnRFbGVtZW50KTtcclxuXHJcblx0XHRpZiAoJGNvbnRlbnRFbGVtZW50LnRleHQoKS5sZW5ndGggPCAxKSB7XHJcblx0XHRcdCR0cmlnZ2VyRWxlbWVudC5oaWRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gaW5zaWRlIGEgZG9jdW1lbnQgcmVhZHkgZHVlIHRvIHNhcHBoaXJlIHBvcHVwIGJpbmRlZCBldmVudHNcclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xyXG5cdFx0XHRcdGlmIChjb25maWcubG9jYWxlID09PSAnQVInKSB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKGNvbmZpZy5wb3NpdGlvbikge1xyXG5cdFx0XHRcdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAnbGVmdCc7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ3JpZ2h0JztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnYm90dG9tLWxlZnQnOlxyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ2JvdHRvbS1yaWdodCc7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2JvdHRvbS1yaWdodCc6XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAnYm90dG9tLWxlZnQnO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd0b3AtbGVmdCc6XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAndG9wLXJpZ2h0JztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAndG9wLXJpZ2h0JzpcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICd0b3AtbGVmdCc7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCR0cmlnZ2VyRWxlbWVudC50b29sdGlwc3Rlcih7XHJcblx0XHRcdFx0XHRjb250ZW50OiAkKCc8c2VjdGlvbi8+JykuYXBwZW5kKCRjb250ZW50RWxlbWVudC5jbG9uZSh0cnVlLCB0cnVlKSksXHJcblx0XHRcdFx0XHR0cmlnZ2VyOiBjb25maWcudHJpZ2dlckV2ZW50LFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHBvc2l0aW9uLFxyXG5cdFx0XHRcdFx0bWF4V2lkdGg6IGNvbmZpZy5tYXhXaWR0aCxcclxuXHRcdFx0XHRcdHRoZW1lOlxyXG5cdFx0XHRcdFx0XHQndG9vbHRpcHN0ZXItbG9jYXRpb24tLScgK1xyXG5cdFx0XHRcdFx0XHRjb25maWcubG9jYXRpb24gK1xyXG5cdFx0XHRcdFx0XHQnIEFjdGlvbnNNZW51LXRvb2x0aXAgUGFkZGluZy0tJyArXHJcblx0XHRcdFx0XHRcdGNvbmZpZy5wYWRkaW5nICtcclxuXHRcdFx0XHRcdFx0JyBCb3JkZXItLScgK1xyXG5cdFx0XHRcdFx0XHRjb25maWcuYm9yZGVyLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdCRjb250ZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5BY3Rpb25zTWVudSA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IEJ1dHRvbkxpbmsgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuQnV0dG9uQ2xpY2tgKTtcclxuXHJcblx0XHRcdCR3aWRnZXQub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRjb25zdCBfdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcblxyXG5cdFx0XHRcdGlmIChfdGFyZ2V0LmNsb3Nlc3QoJy5CdXR0b25DbGljay5jbGljaycpLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0XHQkKCcuQnV0dG9uQ2xpY2suY2xpY2snKS5yZW1vdmVDbGFzcygnY2xpY2snKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2NsaWNrJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5CdXR0b25MaW5rID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBDYXJkQ2hhcnRzICovXHJcblNhcHBoaXJlV2lkZ2V0cy5DYXJkQ2hhcnRzUG9wdXAgPSAoKSA9PiB7XHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHR3aW5kb3dbJ0NhcmRDaGFydHNTY3JvbGwnXSA9IHt9O1xyXG5cdFx0Y29uc3QgaXNJbnNpZGVJZnJhbWUgPSB3aW5kb3cuZnJhbWVFbGVtZW50ICE9IHVuZGVmaW5lZCB8fCBmYWxzZTtcclxuXHJcblx0XHRsZXQgJGNvbXBvbmVudCA9ICQoJy5DYXJkQ2hhcnRzJyk7XHJcblx0XHRsZXQgJGhlYWRlciA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0hlYWRlcicpO1xyXG5cdFx0bGV0ICRjb250ZW50ID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fQ29udGVudCcpO1xyXG5cdFx0bGV0ICRwcm9wZXJ0aWVzID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fUHJvcGVydGllcycpO1xyXG5cdFx0bGV0ICRoZWFkZXJEaXYgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19IZWFkZXJDaGFydCA+IGRpdicpO1xyXG5cdFx0bGV0ICRmYWtlQ29sdW1ucyA9ICQoJy5GYWtlQ29sdW1ucycpO1xyXG5cdFx0bGV0ICRib2R5Q29udGVudCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keScpO1xyXG5cclxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSAmJiAhJGZha2VDb2x1bW5zLmxlbmd0aCkge1xyXG5cdFx0XHQkaGVhZGVyRGl2LmFwcGVuZChgPGRpdiBjbGFzcz0nRmFrZUNvbHVtbnMnPjwvZGl2PmApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xyXG5cdFx0XHQkZmFrZUNvbHVtbnMgPSAkKCcuRmFrZUNvbHVtbnMnKTtcclxuXHJcblx0XHRcdCRjb250ZW50Lm9uKCdzY3JvbGwnLCAoKSA9PiB7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHdpbmRvd1snQ2FyZENoYXJ0c1Njcm9sbCddLnNjcm9sbEZpbmlzaGVkKTtcclxuXHRcdFx0XHR3aW5kb3dbJ0NhcmRDaGFydHNTY3JvbGwnXS5zY3JvbGxGaW5pc2hlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoJGNvbnRlbnQuc2Nyb2xsVG9wKCkgPiAwKSAkaGVhZGVyLmFkZENsYXNzKCdTaGFkb3dNZWRpdW0nKTtcclxuXHRcdFx0XHRcdGVsc2UgJGhlYWRlci5yZW1vdmVDbGFzcygnU2hhZG93TWVkaXVtJyk7XHJcblx0XHRcdFx0fSwgNTApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkY29tcG9uZW50ID0gJCgnLkNhcmRDaGFydHMnKTtcclxuXHRcdFx0JGhlYWRlciA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0hlYWRlcicpO1xyXG5cdFx0XHQkY29udGVudCA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0NvbnRlbnQnKTtcclxuXHRcdFx0JHByb3BlcnRpZXMgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19Qcm9wZXJ0aWVzJyk7XHJcblx0XHRcdCRmYWtlQ29sdW1ucyA9ICQoJy5GYWtlQ29sdW1ucycpO1xyXG5cdFx0XHQkYm9keUNvbnRlbnQgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHknKTtcclxuXHJcblx0XHRcdGxldCBoZWFkZXJUaXRsZUhlaWdodCA9IDYzO1xyXG5cdFx0XHRjb25zdCBoZWFkZXJQcm9wZXJ0aWVzSGVpZ2h0ID0gNTY7XHJcblxyXG5cdFx0XHRjb25zdCAkY2hhcnRzID0gJGNvbnRlbnQuZmluZCgnLkNhcmRDaGFydHNfX0NoYXJ0cyAuT1NDaGFydCcpO1xyXG5cclxuXHRcdFx0JGNoYXJ0cy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnN0ICRjaGFydCA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG5ld1dpZHRoID0gJGNvbnRlbnQud2lkdGgoKSAtICRwcm9wZXJ0aWVzLndpZHRoKCkgKyA0MDtcclxuXHRcdFx0XHQkY2hhcnQuaGlnaGNoYXJ0cygpLnNldFNpemUobmV3V2lkdGgsICRjaGFydC5oZWlnaHQoKSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XHJcblx0XHRcdFx0Y29uc3QgdGltZW91dEhlaWdodCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgJGhlYWRlclRpdGxlID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fSGVhZGVyVGl0bGUnKTtcclxuXHJcblx0XHRcdFx0XHRoZWFkZXJUaXRsZUhlaWdodCA9ICRoZWFkZXJUaXRsZS5sZW5ndGggPyAkaGVhZGVyVGl0bGUub3V0ZXJIZWlnaHQoKSA6IGhlYWRlclRpdGxlSGVpZ2h0IC0gNjtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBuZXdIZWlnaHQgPSAkKHdpbmRvdy5mcmFtZUVsZW1lbnQpLmhlaWdodCgpIC0gaGVhZGVyVGl0bGVIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdFx0JGZha2VDb2x1bW5zLmNzcygnaGVpZ2h0JywgYCR7bmV3SGVpZ2h0ICsgaGVhZGVyUHJvcGVydGllc0hlaWdodH1weGApO1xyXG5cdFx0XHRcdFx0JGNvbnRlbnQuY3NzKCdoZWlnaHQnLCBgJHtuZXdIZWlnaHQgLSBoZWFkZXJQcm9wZXJ0aWVzSGVpZ2h0fXB4YCk7XHJcblxyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRIZWlnaHQpO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFNlZSBNdXRhdGlvbk9ic2VydmVyIChMYXlvdXRQb3B1cClcclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5Qb3B1cHNUb0F2b2lkTXV0YXRpb25zID0gWydDaGFydHNQb3B1cCddO1xyXG5cdH0pO1xyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgQ29sbGFwc2libGVTaWRlUGFuZWwgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y2xhc3MgQ29sbGFwc2libGVTaWRlUGFuZWwge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcclxuXHRcdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLm9uQ29tcG9uZW50SW5pdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9wZW5DbG9zZVNpZGVQYW5lbCh0b09wZW4pIHtcclxuXHRcdFx0aWYgKHRvT3Blbikge1xyXG5cdFx0XHRcdHRoaXMuJGNvbnRlbnQuY3NzKCdkaXNwbGF5JywgJ2dyaWQnKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLiRjb21wb25lbnQuYWRkQ2xhc3MoJ0NvbGxhcHNpYmxlU2lkZVBhbmVsLS1vcGVuJyk7XHJcblx0XHRcdFx0fSwgNTApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5yZW1vdmVDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX0NvbnRlbnQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0XHRcdH0sIDM1MCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRvbkNvbXBvbmVudEluaXQoKSB7XHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kaGVhZGVyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fSGVhZGVyJyk7XHJcblx0XHRcdHRoaXMuJGNvbnRlbnQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19Db250ZW50Jyk7XHJcblx0XHRcdHRoaXMuJGNvdW50ZXIxID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fVGl0bGUgc3Bhbi5Db3VudGVyJyk7XHJcblx0XHRcdHRoaXMuJGNvdW50ZXIyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxUaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHRcdFx0dGhpcy4kcGFuZWxDb250ZW50ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxDb250ZW50Jyk7XHJcblx0XHRcdHRoaXMuJGNsb3NlID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxIZWFkZXIgLmljb24nKTtcclxuXHRcdFx0dGhpcy4kY2xvc2VFdmVudExpbmsgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbEhlYWRlciAuUGFuZWxDbG9zZUJ1dHRvbicpO1xyXG5cclxuXHRcdFx0dGhpcy4kaGVhZGVyLm9uKCdjbGljaycsICgpID0+IHRoaXMub3BlbkNsb3NlU2lkZVBhbmVsKHRydWUpKTtcclxuXHRcdFx0dGhpcy4kY2xvc2Uub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMub3BlbkNsb3NlU2lkZVBhbmVsKGZhbHNlKTtcclxuXHJcblx0XHRcdFx0dGhpcy4kY2xvc2VFdmVudExpbmsuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0aWYgKCQoJy5QYW5lbENvbnRlbnRFbXB0eScpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbGxhcHNpYmxlU2lkZVBhbmVsLmNsb3NlKHRoaXMub3B0aW9ucy53aWRnZXRJZCwgdHJ1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuaXNBdXRvQ291bnRlcikge1xyXG5cdFx0XHRcdGNhbGN1bGF0ZUNvdW50ZXIodGhpcy4kcGFuZWxDb250ZW50LCB0aGlzLiRjb3VudGVyMSwgdGhpcy4kY291bnRlcjIpO1xyXG5cclxuXHRcdFx0XHR0aGlzLiRjb3VudGVyMS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdFx0dGhpcy4kY291bnRlcjIucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBoYXNFbXB0eU1lc3NhZ2UgPSB0aGlzLiRwYW5lbENvbnRlbnQuZmluZCgnLkNvbGxhcHNpYmxlRW1wdHlNZXNzYWdlJyk7XHJcblx0XHRcdGNvbnN0IGNvbnRlbnRUb1ZlcmlmeSA9IGhhc0VtcHR5TWVzc2FnZS5sZW5ndGggPyB0aGlzLiRwYW5lbENvbnRlbnQuZmluZCgnPjpmaXJzdC1jaGlsZCcpIDogdGhpcy4kcGFuZWxDb250ZW50O1xyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5oaWRlV2hlbkVtcHR5ICYmICFjb250ZW50VG9WZXJpZnkudGV4dCgpKSB7XHJcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9EaW9nbyBSaWJlaXJvIC0gaXQgc2VlbXMgd2Ugb25seSBuZWVkIG1hcmdpbnMgd2hlbiB3ZSBzaG93IHRoZSBoZWFkZXJcclxuXHRcdFx0aWYoIXRoaXMub3B0aW9ucy5oaWRlSGVhZGVyKSB7XHJcblx0XHRcdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWw6dmlzaWJsZScpLmFkZENsYXNzKCdNdWx0aU1hcmdpblRvcFNtYWxsJyk7XHJcblx0XHRcdFx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWw6dmlzaWJsZTpmaXJzdCcpLmFkZENsYXNzKCdNdWx0aU1hcmdpblRvcExhcmdlJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBjYWxjdWxhdGVDb3VudGVyID0gKHBhbmVsQ29udGVudCwgY291bnRlcjEsIGNvdW50ZXIyKSA9PiB7XHJcblx0XHRsZXQgdG90YWwgPSAwO1xyXG5cdFx0Y29uc3QgY291bnRlcnMgPSBwYW5lbENvbnRlbnQuZmluZCgnLkV4YXBhbmRhYmxlUGxhY2Vob2xkZXIuQ291bnRlcicpO1xyXG5cclxuXHRcdGNvdW50ZXJzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRvdGFsICs9ICskKHRoaXMpLnRleHQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvdW50ZXIxLnRleHQodG90YWwpO1xyXG5cdFx0Y291bnRlcjIudGV4dCh0b3RhbCk7XHJcblxyXG5cdFx0aWYgKHRvdGFsID09PSAwKSBjb3VudGVyMi5hZGRDbGFzcygnQ29sb3JMaWdodEdyZXlCRycpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUNvdW50ZXIgPSAod2lkZ2V0SWQsIGNvdW50ZXIpID0+IHtcclxuXHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cdFx0dGhpcy5jb3VudGVyMSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1RpdGxlIHNwYW4uQ291bnRlcicpO1xyXG5cdFx0dGhpcy5jb3VudGVyMiA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsVGl0bGUgc3Bhbi5Db3VudGVyJyk7XHJcblxyXG5cdFx0dGhpcy5jb3VudGVyMS50ZXh0KGNvdW50ZXIpO1xyXG5cdFx0dGhpcy5jb3VudGVyMi50ZXh0KGNvdW50ZXIpO1xyXG5cclxuXHRcdGlmICgrY291bnRlciA9PT0gMCkgdGhpcy5jb3VudGVyMi5hZGRDbGFzcygnQ29sb3JMaWdodEdyZXlCRycpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNsb3NlID0gKHdpZGdldElkLCBoaWRlSGVhZGVyLCB1cGRhdGVDb3VudGVyKSA9PiB7XHJcblx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcclxuXHJcblx0XHRpZiAoIXRoaXMuJGNvbXBvbmVudC5oYXNDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwnKSkge1xyXG5cdFx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKS5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWwnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaGlkZUhlYWRlcikge1xyXG5cdFx0XHR0aGlzLiRjb21wb25lbnQuYWRkQ2xhc3MoJ0NvbGxhcHNpYmxlU2lkZVBhbmVsLS1oZWFkZXJIaWRkZW4nKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLiRjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0NvbGxhcHNpYmxlU2lkZVBhbmVsLS1vcGVuJyk7XHJcblxyXG5cdFx0JCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsOnZpc2libGUnKS5yZW1vdmVDbGFzcygnTXVsdGlNYXJnaW5Ub3BTbWFsbCcpO1xyXG5cdFx0JCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsOnZpc2libGU6Zmlyc3QnKS5yZW1vdmVDbGFzcygnTXVsdGlNYXJnaW5Ub3BMYXJnZScpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNoZWNrRW1wdHkgPSB3aWRnZXRJZCA9PiB7XHJcblx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKS5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWwnKTtcclxuXHRcdHRoaXMuJHBhbmVsQ29udGVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsQ29udGVudCcpO1xyXG5cdFx0dGhpcy4kY291bnRlcjEgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19UaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHRcdHRoaXMuJGNvdW50ZXIyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxUaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHRcdHRoaXMuJGVtcHR5TWVzc2FnZSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVFbXB0eU1lc3NhZ2UnKTtcclxuXHJcblx0XHR0aGlzLiRlbXB0eU1lc3NhZ2Uuc2hvdygpO1xyXG5cclxuXHRcdGNhbGN1bGF0ZUNvdW50ZXIodGhpcy4kcGFuZWxDb250ZW50LCB0aGlzLiRjb3VudGVyMSwgdGhpcy4kY291bnRlcjIpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgQ29sbGFwc2libGVTaWRlUGFuZWwoY29uZmlnKSk7XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5Db2xsYXBzaWJsZVNpZGVQYW5lbCA9IHsgY3JlYXRlLCBjbG9zZSwgdXBkYXRlQ291bnRlciwgY2hlY2tFbXB0eSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IENvbXBMaW5lICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGZ1bmN0aW9uIFNlY3Rpb25Db21wbGluZSgpIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQvLyBPYmplY3QgdG8gc2F2ZSBzdGF0c1xyXG5cdFx0dmFyIHByZXZpZXdzdGF0ID0gW107XHJcblxyXG5cdFx0Ly8gc2V0IGNsaWNrIGV2ZW50c1xyXG5cdFx0ZnVuY3Rpb24gY2xpY2tFdmVudHMob2IpIHtcclxuXHRcdFx0Ly8gc3RvcmUgcXVlcnlzIGluIGEgc2luZ2xlIHZhclxyXG5cdFx0XHR2YXIgaG9sZGVyID0gJChvYikuY2xvc2VzdCgnLkNvbXBMaW5lJyk7XHJcblx0XHRcdHZhciBTZWN0aW9uID0gJChvYikuY2xvc2VzdCgnLkNvbXBMaW5lRXhwYW5kYWJsZScpO1xyXG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuQ29tcExpbmVfRXhwYW5kJyk7XHJcblxyXG5cdFx0XHQvLyBnZXQgaWRcclxuXHRcdFx0dmFyIGlkID0gaG9sZGVyLmF0dHIoJ2lkJyk7XHJcblxyXG5cdFx0XHR2YXIgdGVtcEhlaWdodCA9IDA7XHJcblxyXG5cdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcclxuXHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHQsIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRyYW5zaXRpb25zIGFyZSBkaXNhYmxlZFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCkpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XHJcblxyXG5cdFx0XHRcdC8vIENvbGxhcHNlIGNvbnRlbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0U2VjdGlvbi5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHQvLyBSZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGlmIChob2xkZXIuaGFzQ2xhc3MoJ25vdFJlbmRlckludGVyYWN0aW9ucycpKSB7XHJcblx0XHRcdFx0XHRob2xkZXIuZmluZCgnLkNvbXBMaW5lLXRvZ2dsZS1pbnRlcmFjdGlvbnMnKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcclxuXHRcdFx0XHR0ZW1wSGVpZ2h0ID0gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCh0ZW1wSGVpZ2h0KTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcclxuXHRcdFx0XHRTZWN0aW9uLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRpZiAoJCgnLlBhZ2UnKS5oYXNDbGFzcygnaWU4JykgfHwgJCgnLlBhZ2UnKS5oYXNDbGFzcygnaWU5JykpIHtcclxuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xyXG5cdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoaG9sZGVyLmhhc0NsYXNzKCdub3RSZW5kZXJJbnRlcmFjdGlvbnMnKSkge1xyXG5cdFx0XHRcdFx0aG9sZGVyLmZpbmQoJy5Db21wTGluZS10b2dnbGUtaW50ZXJhY3Rpb25zJykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBhamF4IHJlZnJlcyBmdW5jdGlvblxyXG5cdFx0dGhhdC5hamF4UmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXHJcblx0XHRcdCQoJy5Db21wTGluZV9oZWFkTGluZScpLm9mZigpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JCgnLkNvbXBMaW5lX2hlYWRMaW5lIGlucHV0LCAuQ29tcExpbmVfaGVhZExpbmUgc2VsZWN0LCAuQ29tcExpbmVfaGVhZExpbmUgYScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIG5ldyBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLkNvbXBMaW5lX19leHBhbmRJY29uJykudW5iaW5kKCdjbGljaycpO1xyXG5cdFx0XHQkKCcuQ29tcExpbmVfX2V4cGFuZEljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zXHJcblx0XHRcdCQoJy5Db21wTGluZUV4cGFuZGFibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGlmIG5ldyBTZWN0aW9uRXhwYW5kYWJsZSB0aGVuIGFkZCB0byBwcmV2aWV3c3RhdCBhcnJheVxyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcclxuXHRcdFx0XHRcdF0gPT0gbnVsbFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcclxuXHRcdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHQvLyBpZiBvcGVuXHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGFkZCByb3dcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcclxuXHRcdFx0XHRcdF0gPSB7XHJcblx0XHRcdFx0XHRcdGNsaWVudDogc3RhdCxcclxuXHRcdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGN1cmVudCBzdGF0ZSAoYWpheCBzdGF0ZSB4IGluaXRpYWwgc3RhdGUpXHJcblx0XHRcdFx0dmFyIGN1clN0YXRlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdC8vIGNoZWNrIGlmIHN0YXJ0IGV4cGFuZGFibGVcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0Y3VyU3RhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgYWpheCAhPSBpbml0aWFsIHNlcnZlclxyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGN1clN0YXRlICE9XHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXHJcblx0XHRcdFx0XHRdWydzZXJ2ZXInXVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0Ly8gY3Vyc3RhdGVcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcclxuXHRcdFx0XHRcdF1bJ2NsaWVudCddID0gY3VyU3RhdGU7XHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXHJcblx0XHRcdFx0XHRdWydzZXJ2ZXInXSA9IGN1clN0YXRlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0cHJldmlld3N0YXRbXHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxyXG5cdFx0XHRcdFx0XHRdWydjbGllbnQnXSA9PSBmYWxzZSAmJlxyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5jaGlsZHJlbignLkNvbXBMaW5lX0V4cGFuZCcpXHJcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdHByZXZpZXdzdGF0W1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcclxuXHRcdFx0XHRcdFx0XVsnY2xpZW50J10gPT0gdHJ1ZSAmJlxyXG5cdFx0XHRcdFx0XHQhJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gc2V0IGV2ZW50c1xyXG5cdFx0dGhhdC5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zIHRvIGNyZWF0ZSBhcnJheSBzdGF0XHJcblx0XHRcdCQoJy5Db21wTGluZUV4cGFuZGFibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XHJcblx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgb3BlblxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFkZCByb3dcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtcclxuXHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXHJcblx0XHRcdFx0XSA9IHtcclxuXHRcdFx0XHRcdGNsaWVudDogc3RhdCxcclxuXHRcdFx0XHRcdHNlcnZlcjogc3RhdCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLkNvbXBMaW5lX19leHBhbmRJY29uJykudW5iaW5kKCdjbGljaycpO1xyXG5cdFx0XHQkKCcuQ29tcExpbmVfX2V4cGFuZEljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXHJcblx0XHRcdCQoJy5Db21wTGluZV9oZWFkTGluZSBpbnB1dCwgLkNvbXBMaW5lX2hlYWRMaW5lIHNlbGVjdCwgLkNvbXBMaW5lX2hlYWRMaW5lIGEnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHJlbW92ZSB1bmVjZXNzYXJ5IGJlaGF2aW9yc1xyXG5cclxuXHRcdFx0Ly8gZXZlbnQgYWpheFxyXG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KHRoYXQuYWpheFJlZnJlc2gpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGV4cGFuZGFibGUgPSBuZXcgU2VjdGlvbkNvbXBsaW5lKCk7XHJcblxyXG5cdFx0ZXhwYW5kYWJsZS5pbml0KCk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkNvbXBMaW5lID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBDb3VudHJ5UGhvbmUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcclxuXHRcdGNvbnN0ICRlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29uZmlnLndpZGdldElkfWApO1xyXG5cdFx0Y29uc3QgYWRkaXRpb25hbFZhbGlkYXRpb25zID0gY29uZmlnLmFkZGl0aW9uYWxWYWxpZGF0aW9ucztcclxuXHJcblx0XHRjb25zdCBjb3VudHJ5UGhvbmVJbnB1dCA9IHdpbmRvdy5pbnRsVGVsSW5wdXQoJGVsZW1lbnQsIHtcclxuXHRcdFx0aW5pdGlhbENvdW50cnk6IGNvbmZpZy5pbml0aWFsQ291bnRyeSxcclxuXHRcdFx0cHJlZmVycmVkQ291bnRyaWVzOiBjb25maWcucHJlZmVycmVkQ291bnRyaWVzLFxyXG5cdFx0XHRzZXBhcmF0ZURpYWxDb2RlOiBjb25maWcuc2VwYXJhdGVEaWFsQ29kZSxcclxuXHRcdFx0bmF0aW9uYWxNb2RlOiBjb25maWcubmF0aW9uYWxNb2RlLFxyXG5cdFx0XHRhdXRvUGxhY2Vob2xkZXI6IGNvbmZpZy5hdXRvUGxhY2Vob2xkZXIgPyAncG9saXRlJyA6IGZhbHNlLFxyXG5cdFx0XHRmb3JtYXRPbkRpc3BsYXk6IGZhbHNlLFxyXG5cdFx0XHR1dGlsc1NjcmlwdDogJy9WM19QYXQvanMvdXRpbHMuanMnLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgJGlucHV0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xyXG5cclxuXHRcdCRpbnB1dC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmICgkaW5wdXQudmFsKCkgPT09ICcrJyB8fCAkaW5wdXQudmFsKCkgPT09ICcnKSB7XHJcblx0XHRcdFx0Y291bnRyeVBob25lSW5wdXQuc2V0Q291bnRyeShjb25maWcuaW5pdGlhbENvdW50cnkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkaW5wdXQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjb25zdCBzZWxlY3RlZENvdW50cnkgPSBjb3VudHJ5UGhvbmVJbnB1dC5nZXRTZWxlY3RlZENvdW50cnlEYXRhKCk7XHJcblx0XHRcdGNvbnN0IGZpbHRlciA9IGFkZGl0aW9uYWxWYWxpZGF0aW9ucy5maW5kKGkgPT4gaS5Db3VudHJ5UGhvbmVWYWxpZGF0aW9ucy5Db3VudHJ5Q29kZSA9PT0gc2VsZWN0ZWRDb3VudHJ5LmlzbzIpO1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9ICRpbnB1dC52YWwoKS50cmltKCk7XHJcblxyXG5cdFx0XHRsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG5cdFx0XHRpZiAoZmlsdGVyKSB7XHJcblx0XHRcdFx0Y29uc3Qgd2l0aG91Q29kZSA9IHZhbHVlLnJlcGxhY2UoYCske3NlbGVjdGVkQ291bnRyeS5kaWFsQ29kZX1gLCAnJyk7XHJcblxyXG5cdFx0XHRcdGlzVmFsaWQgPSB3aXRob3VDb2RlLnRyaW0oKS5sZW5ndGggKyAxIDw9IGZpbHRlci5Db3VudHJ5UGhvbmVWYWxpZGF0aW9ucy5QaG9uZUxlbmd0aDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHZhbHVlID09PSBgKyR7c2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfWApIHtcclxuXHRcdFx0XHQkaW5wdXQudmFsKGArJHtzZWxlY3RlZENvdW50cnkuZGlhbENvZGV9IGApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGlzVmFsaWQgJiZcclxuXHRcdFx0XHQoZS5tZXRhS2V5IHx8IC8vIGNtZC9jdHJsXHJcblx0XHRcdFx0ZS53aGljaCA8PSAwIHx8IC8vIGFycm93IGtleXNcclxuXHRcdFx0XHRlLndoaWNoID09IDggfHwgLy8gZGVsZXRlIGtleVxyXG5cdFx0XHRcdFx0KCF2YWx1ZS5sZW5ndGggJiYgZS5rZXkgPT09ICcrJykgfHxcclxuXHRcdFx0XHRcdC9bMC05XS8udGVzdChTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpKSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvdW50cnljaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0b25DaGFuZ2VDb3VudHJ5KCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZUNvdW50cnkgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0ICRzZWxlY3RlZENvdW50cnlJbnB1dCA9ICQoYCMke2NvbmZpZy5zZWxlY3RlZENvdW50cnlJbnB1dH1gKTtcclxuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeVBob25lSW5wdXQuZ2V0U2VsZWN0ZWRDb3VudHJ5RGF0YSgpO1xyXG5cclxuXHRcdFx0JHNlbGVjdGVkQ291bnRyeUlucHV0LnZhbChzZWxlY3RlZENvdW50cnkuaXNvMik7XHJcblx0XHRcdCRzZWxlY3RlZENvdW50cnlJbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdG9uQ2hhbmdlQ291bnRyeSgpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkNvdW50cnlQaG9uZSA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG5cdGNsYXNzIERhdGFUYWJsZXMge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XHJcblx0XHRcdHRoaXMuJHRhYmxlID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ3RhYmxlJyk7XHJcblx0XHRcdHRoaXMuJHRhYmxlLmFkZENsYXNzKCdjZWxsLWJvcmRlciBjb21wYWN0Jyk7XHJcblx0XHRcdHRoaXMub25Jbml0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0b25Jbml0KCkge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7XHJcblx0XHRcdFx0Li4udGhpcy5jb25maWcsXHJcblx0XHRcdFx0Zml4ZWRDb2x1bW5zOiB0cnVlLFxyXG5cdFx0XHRcdGluZm86IGZhbHNlLFxyXG5cdFx0XHRcdG9yZGVyaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRwYWdpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHNjcm9sbENvbGxhcHNlOiB0cnVlLFxyXG5cdFx0XHRcdHNjcm9sbFg6IHRydWUsXHJcblx0XHRcdFx0c2VhcmNoaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdCQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuJHRhYmxlLkRhdGFUYWJsZSh0aGlzLm9wdGlvbnMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgRGF0YVRhYmxlcyhjb25maWcpKTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkRhdGFUYWJsZXMgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0fTtcclxufSkoKTtcclxuIiwiLyogQ29tcG9uZW50IERhdGVUaW1lUmFuZ2VQaWNrZXIgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBhbGxEYXRlVGltZVJhbmdlUGlja2VycyA9IFtdO1xyXG5cclxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChhbGxEYXRlVGltZVJhbmdlUGlja2Vyc1tpXS5jb25maWcud2lkZ2V0SWQgPT09IGNvbmZpZy53aWRnZXRJZCkge1xyXG5cdFx0XHRcdGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgRGF0ZVRpbWVSYW5nZVBpY2tlcihjb25maWcpO1xyXG5cdFx0YWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnMucHVzaCh3aW5kb3dbY29uZmlnLndpZGdldElkXSk7XHJcblx0fTtcclxuXHJcblx0dmFyIERhdGVUaW1lUmFuZ2VQaWNrZXIgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0dGhpcy5jdXJyZW50TG9jYWxlID0gY29uZmlnLmN1cnJlbnRMb2NhbGU7XHJcblxyXG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xyXG5cdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdEYXRlVGltZVJhbmdlUGlja2VyJyk7XHJcblx0XHR0aGlzLiRjbGVhciA9IHRoaXMuJHdpZGdldC5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jbGVhcicpO1xyXG5cdFx0dGhpcy4kbGFiZWwgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItbGFiZWwnKTtcclxuXHJcblx0XHR0aGlzLmlzRW1wdHlIb3VyID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdhdHRhY2hlZElucHV0Jyk7XHJcblx0XHRcdHRoaXMuJG1vZGVsID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLXBsYWNlaG9sZGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XHJcblx0XHRcdHRoaXMuJG1vZGVsLmF0dHIoJ3RhYkluZGV4JywgLTEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGlucHV0ID0gJCgnIycgKyBjb25maWcuaW5wdXRJZCk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmNvbmZpZy5hbGxvd3NUeXBpbmcpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQucHJvcCgncmVhZG9ubHknLCB0cnVlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50TG9jYWxlID09PSAnQVInKSB7XHJcblx0XHRcdG1vbWVudC5sb2NhbGUoJ2FyLWt3Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG9wdGlvbnMgPSB7fTtcclxuXHRcdG9wdGlvbnMuc3RhcnREYXRlID0gY29uZmlnLnN0YXJ0RGF0ZTtcclxuXHRcdG9wdGlvbnMuc2luZ2xlRGF0ZVBpY2tlciA9IGNvbmZpZy5zaW5nbGVEYXRlUGlja2VyO1xyXG5cdFx0b3B0aW9ucy5hdXRvQXBwbHkgPSBjb25maWcuYXV0b0FwcGx5O1xyXG5cdFx0b3B0aW9ucy5hdXRvVXBkYXRlSW5wdXQgPSBjb25maWcuYXV0b1VwZGF0ZUlucHV0O1xyXG5cdFx0b3B0aW9ucy50aW1lUGlja2VyID0gY29uZmlnLnRpbWVQaWNrZXI7XHJcblx0XHRvcHRpb25zLnRpbWVQaWNrZXIyNEhvdXIgPSBjb25maWcudGltZVBpY2tlcjI0SG91cjtcclxuXHRcdG9wdGlvbnMudGltZVBpY2tlckluY3JlbWVudCA9IGNvbmZpZy50aW1lUGlja2VySW5jcmVtZW50O1xyXG5cdFx0b3B0aW9ucy5zaG93RHJvcGRvd25zID0gY29uZmlnLmhhc0Ryb3Bkb3duczsgLy8gTW9udGgvWWVhciBQaWNrZXJcclxuXHRcdG9wdGlvbnMuZHJvcHMgPSBjb25maWcuZHJvcHM7XHJcblx0XHRvcHRpb25zLm9wZW5zID0gY29uZmlnLmN1cnJlbnRMb2NhbGUgPT09ICdBUicgJiYgY29uZmlnLm9wZW5zICE9ICdjZW50ZXInID8gJ2xlZnQnIDogY29uZmlnLm9wZW5zO1xyXG5cclxuXHRcdHZhciBzdHJpbmdDb25uZWN0aW9uID0gJ1ssIGF0XSc7XHJcblxyXG5cdFx0aWYgKGNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdC8vaWYgKCF0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSAvL2NoYW5nZWQgYnkgRGlvZ28gUmliZWlybyBzbyBkYXRlIHBpY2tlciBoYXMgYSBwbGFjZWhvbGRlciBldmVuIGlmIGl0cyBhdHRhY2hlZCB0byBpbnB1dCAob3RoZXJ3aXNlIGl0IG5ldmVyIHNob3dlZClcclxuXHRcdFx0dGhpcy4kaW5wdXQucHJvcCgncGxhY2Vob2xkZXInLCAnREQtTU0tWVlZWSBISDpNTScpO1xyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMudGltZVBpY2tlcjI0SG91cikge1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdElucHV0ID0gYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW1gO1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdExhYmVsID0gdGhpcy5jb25maWcuaGFzWWVhcldoZW5UZXh0XHJcblx0XHRcdFx0XHQ/ICdEIE1NTSBZWVlZJyArIHN0cmluZ0Nvbm5lY3Rpb24gKyAnIEhIOm1tJ1xyXG5cdFx0XHRcdFx0OiAnRCBNTU0nICsgc3RyaW5nQ29ubmVjdGlvbiArICcgSEg6bW0nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdElucHV0ID0gYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gaGg6bW0gQWA7XHJcblx0XHRcdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNZZWFyV2hlblRleHRcclxuXHRcdFx0XHRcdD8gJ0QgTU1NIFlZWVknICsgc3RyaW5nQ29ubmVjdGlvbiArICcgaGg6bW0gQSdcclxuXHRcdFx0XHRcdDogJ0QgTU1NJyArIHN0cmluZ0Nvbm5lY3Rpb24gKyAnIGhoOm1tIEEnO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ29ubHlEYXRlJyk7XHJcblxyXG5cdFx0XHQvL2lmICghdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkgXHJcblx0XHRcdHRoaXMuJGlucHV0LnByb3AoJ3BsYWNlaG9sZGVyJywgJ0RELU1NLVlZWVknKTtcclxuXHJcblx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdElucHV0ID0gdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdDtcclxuXHRcdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNZZWFyV2hlblRleHQgPyAnRCBNTU0gWVlZWScgOiAnRCBNTU0nO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdyYW5nZURhdGVzJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNXZWVrRGF5TmFtZVdoZW5UZXh0XHJcblx0XHRcdD8gJ2RkZFssIF0nICsgdGhpcy5jb25maWcuZm9ybWF0TGFiZWxcclxuXHRcdFx0OiB0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbDtcclxuXHJcblx0XHRvcHRpb25zLmxvY2FsZSA9IHtcclxuXHRcdFx0ZGlyZWN0aW9uOiBjb25maWcuY3VycmVudExvY2FsZSA9PT0gJ0FSJyA/ICdydGwnIDogJ2x0cicsXHJcblx0XHRcdGZvcm1hdDogdGhpcy5jb25maWcuZm9ybWF0SW5wdXQsXHJcblx0XHRcdGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcclxuXHRcdFx0YXBwbHlMYWJlbDogJ0FwcGx5JyxcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ3RleHRUcmlnZ2VyJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbnVsbGREYXRlcyA9IFsnMDEtMDEtMTkwMCAwMDowMDowMCcsICcxOTAwLTAxLTAxIDAwOjAwOjAwJ107XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5lbmREYXRlICYmICFudWxsZERhdGVzLnNvbWUoaSA9PiBpID09PSBjb25maWcuZW5kRGF0ZSkpIHtcclxuXHRcdFx0b3B0aW9ucy5lbmREYXRlID0gY29uZmlnLmVuZERhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5tYXhEYXRlICYmICFudWxsZERhdGVzLnNvbWUoaSA9PiBpID09PSBjb25maWcubWF4RGF0ZSkpIHtcclxuXHRcdFx0b3B0aW9ucy5tYXhEYXRlID0gY29uZmlnLm1heERhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5taW5EYXRlICYmICFudWxsZERhdGVzLnNvbWUoaSA9PiBpID09PSBjb25maWcubWluRGF0ZSkpIHtcclxuXHRcdFx0b3B0aW9ucy5taW5EYXRlID0gY29uZmlnLm1pbkRhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5EaXNhYmxlZFdlZWtEYXlzKSB7XHJcblx0XHRcdHZhciBkaXNhYmxlZFdlZWtEYXlzID0gY29uZmlnLkRpc2FibGVkV2Vla0RheXMuc3BsaXQoJywnKTtcclxuXHRcdFx0b3B0aW9ucy5pc0ludmFsaWREYXRlID0gZnVuY3Rpb24oZGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBkaXNhYmxlZFdlZWtEYXlzLmluY2x1ZGVzKFxyXG5cdFx0XHRcdFx0bW9tZW50KGRhdGUpXHJcblx0XHRcdFx0XHRcdC5kYXkoKVxyXG5cdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5kYXRlcmFuZ2VwaWNrZXIob3B0aW9ucywgZnVuY3Rpb24oc3RhcnREYXRlLCBlbmREYXRlLCBsYWJlbCkge1xyXG5cdFx0XHQvLyBhZnRlciBhIHNlbGVjdGlvbiBpcyBtYWRlXHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdGxldCBmb3JtYXQgPSAnJztcclxuXHJcblx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHRmb3JtYXQgPSBgJHtfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW1gO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIpIF90aGlzLiRtb2RlbC52YWwoc3RhcnREYXRlLmZvcm1hdChmb3JtYXQpKTtcclxuXHRcdFx0XHRcdGVsc2UgX3RoaXMuJG1vZGVsLnZhbChzdGFydERhdGUuZm9ybWF0KF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBzdGFydCwgZW5kO1xyXG5cclxuXHRcdFx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0XHRzdGFydCA9IHN0YXJ0RGF0ZS5mb3JtYXQoZm9ybWF0KTtcclxuXHRcdFx0XHRcdFx0ZW5kID0gZW5kRGF0ZS5mb3JtYXQoZm9ybWF0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHN0YXJ0ID0gc3RhcnREYXRlLmZvcm1hdChfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCk7XHJcblx0XHRcdFx0XHRcdGVuZCA9IGVuZERhdGUuZm9ybWF0KF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRfdGhpcy4kbW9kZWwudmFsKGAke3N0YXJ0fSAgwrcgICR7ZW5kfWApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0X3RoaXMuJG1vZGVsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBpbml0aWFsVmFsdWUgPSBfdGhpcy4kaW5wdXQudmFsKCk7XHJcblx0XHRcdGNvbnN0IGFsbG93c01NWVkgPSBfdGhpcy5jb25maWcuYWxsb3dzVHlwaW5nICYmIF90aGlzLmNvbmZpZy5hbGxvd3NUeXBlTU1ZWSAmJiBfdGhpcy5jb25maWcuc2luZ2xlRGF0ZVBpY2tlcjtcclxuXHJcblx0XHRcdGlmIChhbGxvd3NNTVlZICYmIGluaXRpYWxWYWx1ZS5sZW5ndGggPT09IDQpIHtcclxuXHRcdFx0XHRfdGhpcy5waWNrZXIuc2V0U3RhcnREYXRlKG1vbWVudChgMDEke2luaXRpYWxWYWx1ZX1gLCAnRERNTVlZJykpO1xyXG5cclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0XHRcdGxldCBmb3JtYXQgPSAnJztcclxuXHJcblx0XHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIpIGZvcm1hdCA9IGAke190aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbWA7XHJcblx0XHRcdFx0XHRlbHNlIGZvcm1hdCA9IF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0O1xyXG5cclxuXHRcdFx0XHRcdF90aGlzLiRtb2RlbC52YWwoX3RoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoZm9ybWF0KSk7XHJcblx0XHRcdFx0XHRfdGhpcy4kbW9kZWwudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBub3cgd2UgaGF2ZSBhIHByb3BlciBpbnN0YW5jZVxyXG5cdFx0dGhpcy5waWNrZXIgPSB0aGlzLiRpbnB1dC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKTtcclxuXHJcblx0XHR0aGlzLiRjYWxlbmRhciA9ICQodGhpcy5waWNrZXIuY29udGFpbmVyKTtcclxuXHJcblx0XHRpZiAoISF0aGlzLmNvbmZpZy5jc3NDbGFzcykge1xyXG5cdFx0XHR0aGlzLiRjYWxlbmRhci5hZGRDbGFzcyh0aGlzLmNvbmZpZy5jc3NDbGFzcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kdGltZUhvbGRlciA9IHRoaXMuJGNhbGVuZGFyLmZpbmQoJy5jYWxlbmRhci10aW1lJyk7XHJcblx0XHR0aGlzLiRidXR0b25zSG9sZGVyID0gdGhpcy4kY2FsZW5kYXIuZmluZCgnLmRycC1idXR0b25zJyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF1dG9BcHBseSkge1xyXG5cdFx0XHR0aGlzLiRidXR0b25zSG9sZGVyLmhpZGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLmlzRW1wdHlTdGFydERhdGUpIHtcclxuXHRcdFx0dGhpcy5jbGVhcihmYWxzZSk7XHJcblx0XHR9IGVsc2UgaWYgKGNvbmZpZy5pc0VtcHR5U3RhcnRIb3VyKSB7XHJcblx0XHRcdHRoaXMuaXNFbXB0eUhvdXIgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5lbmFibGVkKSB7XHJcblx0XHRcdHRoaXMubmF0aXZlRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMuY3VzdG9tRXZlbnRzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLiRjbGVhci5oaWRlKCk7XHJcblx0XHRcdHRoaXMuJGlucHV0Lm9mZignY2xpY2sgZm9jdXMga2V5ZG93biBrZXl1cCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdHRoaXMuaGFuZGxlQ3VzdG9tVmFsaWRhdGlvbigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmhhbmRsZUN1c3RvbVZhbGlkYXRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIFRPIERPXHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUubmF0aXZlRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ3Nob3dDYWxlbmRhci5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuaGFzR29Ub2RheSkge1xyXG5cdFx0XHRcdF90aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LmZpbmQoJy5jYWxlbmRhci10YWJsZSB0aGVhZCB0cicpXHJcblx0XHRcdFx0XHQuZXEoMClcclxuXHRcdFx0XHRcdC5hZnRlcihcclxuXHRcdFx0XHRcdFx0Jzx0cj48dGQgY29sc3Bhbj1cIjdcIiBjbGFzcz1cIkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItZ290b2RheVwiPicgK1xyXG5cdFx0XHRcdFx0XHRcdF90aGlzLmNvbmZpZy5nb1RvZGF5TGFiZWwgK1xyXG5cdFx0XHRcdFx0XHRcdCc8L3RkPjwvdHI+J1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLmRyb3BzID09PSAndXAnKSB7XHJcblx0XHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuY3NzKCd0b3AnLCBfdGhpcy4kY2FsZW5kYXIub2Zmc2V0KCkudG9wIC0gMjQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRfdGhpcy5oYW5kbGVWaWV3cG9ydFBvc2l0aW9uKCk7XHJcblxyXG5cdFx0XHRpZiAoIV90aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdFx0JCgnLmRycC1zZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRsZXQgdGV4dCA9ICQodGhpcykudGV4dCgpO1xyXG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvLS9naSwgJ8K3Jyk7XHJcblxyXG5cdFx0XHRcdFx0JCh0aGlzKS50ZXh0KHRleHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignc2hvdy5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlciAmJiBfdGhpcy5jb25maWcuaGFzQ2xlYXJIb3VyKSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5jYWxlbmRhci10aW1lJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXJcIj48L3NwYW4+Jyk7XHJcblx0XHRcdFx0aWYgKF90aGlzLmlzRW1wdHlIb3VyKSB7XHJcblx0XHRcdFx0XHRfdGhpcy4kdGltZUhvbGRlci5jc3MoJ29wYWNpdHknLCAwLjUpO1xyXG5cdFx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF90aGlzLiR0aW1lSG9sZGVyLmNzcygnb3BhY2l0eScsIDEpO1xyXG5cdFx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdF90aGlzLmhhbmRsZVZpZXdwb3J0UG9zaXRpb24oKTtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLkRhdGVUaW1lUmFuZ2VQaWNrZXIub3BlbmVkV2lkZ2V0SWQgPSBfdGhpcy5jb25maWcud2lkZ2V0SWQ7XHJcblxyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmNzc0NsYXNzID09PSAnQ2FsZW5kYXJQb3B1cCcgJiYgd2luZG93LmZyYW1lRWxlbWVudCkge1xyXG5cdFx0XHRcdGNvbnN0IG9sZEJvZHlIZWlnaHQgPSAkKCdib2R5JylbMF0uc2Nyb2xsSGVpZ2h0ICsgODtcclxuXHRcdFx0XHRjb25zdCBjYWxlbmRhclNhZmVIZWlnaHQgPSBfdGhpcy4kY2FsZW5kYXIub3V0ZXJIZWlnaHQoKSArIDMyO1xyXG5cclxuXHRcdFx0XHRjb25zdCBuZXdIZWlnaHQgPSBvbGRCb2R5SGVpZ2h0ID4gY2FsZW5kYXJTYWZlSGVpZ2h0ID8gb2xkQm9keUhlaWdodCA6IGNhbGVuZGFyU2FmZUhlaWdodDtcclxuXHJcblx0XHRcdFx0JCgnPGRpdiBjbGFzcz1cIkNhbGVuZGFyUG9wdXBfX092ZXJsYXlcIj48L2Rpdj4nKS5pbnNlcnRBZnRlcihfdGhpcy4kY2FsZW5kYXIpO1xyXG5cclxuXHRcdFx0XHQkKHdpbmRvdy5mcmFtZUVsZW1lbnQpLmFuaW1hdGUoeyBtaW5IZWlnaHQ6IG5ld0hlaWdodCB9KTtcclxuXHRcdFx0XHQkKCdib2R5JykuYW5pbWF0ZSh7IG1pbkhlaWdodDogbmV3SGVpZ2h0IH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignaGlkZS5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicpLnJlbW92ZSgpO1xyXG5cdFx0XHRfdGhpcy51cGRhdGVQYXJlbnRJZnJhbWUoKTtcclxuXHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuY3NzQ2xhc3MgPT09ICdDYWxlbmRhclBvcHVwJyAmJiB3aW5kb3cuZnJhbWVFbGVtZW50KSB7XHJcblx0XHRcdFx0JCh3aW5kb3cuZnJhbWVFbGVtZW50KS5jc3MoeyBtaW5IZWlnaHQ6ICd1bnNldCcgfSk7XHJcblx0XHRcdFx0JCgnYm9keScpLmNzcyh7IG1pbkhlaWdodDogJ3Vuc2V0JyB9KTtcclxuXHJcblx0XHRcdFx0JCgnLkNhbGVuZGFyUG9wdXBfX092ZXJsYXknKS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ2NhbmNlbC5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ291dHNpZGVDbGljay5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ3RpbWVjaGFuZ2VkLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0X3RoaXMuaXNFbXB0eUhvdXIgPSBmYWxzZTtcclxuXHRcdFx0X3RoaXMuJHRpbWVIb2xkZXIuY3NzKCdvcGFjaXR5JywgMSk7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuaGFzQ2xlYXJIb3VyKSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5jYWxlbmRhci10aW1lJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXJcIj48L3NwYW4+Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5hdXRvQXBwbHkpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2xlYXIucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0X3RoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdFx0XHRfdGhpcy5zZW5kTm90aWZpY2F0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdjbGlja0RhdGUuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmF1dG9BcHBseSkge1xyXG5cdFx0XHRcdF90aGlzLiRjbGVhci5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ2FwcGx5LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5hdXRvQXBwbHkgJiYgX3RoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0XHRfdGhpcy4kbW9kZWwudHJpZ2dlcignY2hhbmdlJyk7IC8vc2FtZSBmaXggYXMgYmVsb3cgZm9yIHdoZW4gdGhlIGRhdGUgaXMgdGhlIHNhbWUvdG9kYXksIHdoZW4gaW5wdXQgaXMgYXR0YWNoZWQgaXQgc2VlbXMgd2UgYWxzbyBuZWVkIHRoaXMgZXh0cmEgc3RlcFxyXG5cdFx0XHR9XHJcblx0XHRcdF90aGlzLiRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTsgLy8gRml4IHRvIGNhbGwgdGhlIGNoYW5nZSB3aGVuIHRoZSBkYXRlIGlzIHRoZSBzYW1lL3RvZGF5XHJcblx0XHRcdF90aGlzLiRjbGVhci5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0X3RoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdFx0X3RoaXMuc2VuZE5vdGlmaWNhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuY3VzdG9tRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy4kbGFiZWwub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF90aGlzLnBpY2tlci50b2dnbGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy4kY2xlYXIub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF90aGlzLmNsZWFyKCk7XHJcblx0XHRcdF90aGlzLnBpY2tlci5oaWRlKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuJGNhbGVuZGFyLm9uKCdjbGljaycsICcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHRcdC5maW5kKCcuaG91cnNlbGVjdCcpXHJcblx0XHRcdFx0XHQudmFsKCcwJylcclxuXHRcdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHRcdC5maW5kKCcuaG91cnNlbGVjdCcpXHJcblx0XHRcdFx0XHQudmFsKCcxMicpXHJcblx0XHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0LmZpbmQoJy5taW51dGVzZWxlY3QnKVxyXG5cdFx0XHRcdC52YWwoJzAnKVxyXG5cdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0LmZpbmQoJy5hbXBtc2VsZWN0JylcclxuXHRcdFx0XHQudmFsKCdBTScpXHJcblx0XHRcdFx0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRfdGhpcy5pc0VtcHR5SG91ciA9IHRydWU7XHJcblx0XHRcdF90aGlzLiR0aW1lSG9sZGVyLmNzcygnb3BhY2l0eScsIDAuNSk7XHJcblx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLiRjYWxlbmRhci5vbignY2xpY2snLCAnLkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItZ290b2RheScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfdGhpcy5waWNrZXIuc2V0U3RhcnREYXRlKG1vbWVudCgpKTtcclxuXHRcdFx0X3RoaXMucGlja2VyLnNldEVuZERhdGUobW9tZW50KCkpO1xyXG5cclxuXHRcdFx0X3RoaXMucGlja2VyLmhpZGUoKTtcclxuXHJcblx0XHRcdGlmICghX3RoaXMuY29uZmlnLmF1dG9VcGRhdGVJbnB1dCB8fCBfdGhpcy5jb25maWcuaGFzVGV4dFRyaWdnZXIgfHwgX3RoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRcdF90aGlzLiRtb2RlbCAmJiBfdGhpcy4kbW9kZWwudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdC8vIE5vdGhpbmdcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJGlucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0X3RoaXMudXBkYXRlUGFyZW50SWZyYW1lKCk7XHJcblx0XHRcdFx0fSwgNTApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS51cGRhdGVMYWJlbGluZyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGxhYmVsTWFzayA9IHRoaXMuY29uZmlnLmZvcm1hdExhYmVsO1xyXG5cdFx0dmFyIGlucHV0TWFzayA9IHRoaXMuY29uZmlnLmZvcm1hdElucHV0O1xyXG5cclxuXHRcdGlmIChtb21lbnQodGhpcy5waWNrZXIuc3RhcnREYXRlKS5pc1NhbWUobW9tZW50KCksICdkYXknKSkge1xyXG5cdFx0XHRpZiAobGFiZWxNYXNrLmluY2x1ZGVzKCdEIE1NTSBZWVlZJykpIHtcclxuXHRcdFx0XHRsYWJlbE1hc2sgPSBsYWJlbE1hc2sucmVwbGFjZSgnRCBNTU0gWVlZWScsICdbVG9kYXksXSBEIE1NTSBZWVlZJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAobGFiZWxNYXNrLmluY2x1ZGVzKCdEIE1NTScpKSB7XHJcblx0XHRcdFx0bGFiZWxNYXNrID0gbGFiZWxNYXNrLnJlcGxhY2UoJ0QgTU1NJywgJ1tUb2RheV0nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eUhvdXIpIHtcclxuXHRcdFx0bGFiZWxNYXNrID0gbGFiZWxNYXNrLnJlcGxhY2UoJ2hoOm1tIEEnLCAnWy0tOi0tXScpLnJlcGxhY2UoJ0hIOm1tJywgJ1stLTotLV0nKTtcclxuXHRcdFx0aW5wdXRNYXNrID0gaW5wdXRNYXNrLnJlcGxhY2UoJ2hoOm1tIEEnLCAnWy0tOi0tXScpLnJlcGxhY2UoJ0hIOm1tJywgJ1stLTotLV0nKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHRcdHRoaXMuJGxhYmVsLmh0bWwodGhpcy5jb25maWcucHJlZml4VGV4dFRyaWdnZXIgKyB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGxhYmVsTWFzaykpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gWzAwOjAwOjAwXWApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBbMDA6MDA6MDBdYCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5jb25maWcuaGFzVGV4dFRyaWdnZXIpIHtcclxuXHRcdFx0XHR0aGlzLiRsYWJlbC5odG1sKHRoaXMuY29uZmlnLnByZWZpeFRleHRUcmlnZ2VyICsgdGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChsYWJlbE1hc2spKTtcclxuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChpbnB1dE1hc2spKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoaW5wdXRNYXNrKSk7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kbW9kZWwgJiYgdGhpcy4kbW9kZWwudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW06c3NgKSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kbW9kZWwgJiYgdGhpcy4kbW9kZWwudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBzdGFydERhdGUgPSB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGlucHV0TWFzayk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGVuZERhdGUgPSB0aGlzLnBpY2tlci5lbmREYXRlLmZvcm1hdChpbnB1dE1hc2spO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKGAke3N0YXJ0RGF0ZX0gIMK3ICAke2VuZERhdGV9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KHRoaXMuY29uZmlnLmZvcm1hdElucHV0KSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRsZXQgc3RhcnREYXRlID0gdGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCk7XHJcblx0XHRcdFx0XHRcdGxldCBlbmREYXRlID0gdGhpcy5waWNrZXIuZW5kRGF0ZS5mb3JtYXQodGhpcy5jb25maWcuZm9ybWF0SW5wdXQpO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKGAke3N0YXJ0RGF0ZX0gIMK3ICAke2VuZERhdGV9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaGFuZGxlVmlld3BvcnRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR3aW5kb3cuZnJhbWVFbGVtZW50ICYmXHJcblx0XHRcdCgkKHdpbmRvdy5mcmFtZUVsZW1lbnQucGFyZW50RWxlbWVudCkuaGFzQ2xhc3MoJ3Rvb2x0aXBzdGVyLWNvbnRlbnQnKSB8fFxyXG5cdFx0XHRcdCQod2luZG93LmZyYW1lRWxlbWVudC5wYXJlbnRFbGVtZW50KS5oYXNDbGFzcygnb3MtaW50ZXJuYWwtdWktZGlhbG9nLWNvbnRlbnQnKSlcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlzSW5WaWV3cG9ydCgpKSB7XHJcblx0XHRcdHZhciBjb29yZHMgPSB0aGlzLiRjYWxlbmRhclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0aWYgKHRoaXMuJGNhbGVuZGFyLmhhc0NsYXNzKCdkcm9wLXVwJykgJiYgdGhpcy4kY2FsZW5kYXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgMCkge1xyXG5cdFx0XHRcdHZhciBwb2ludCA9IHdpbmRvdy5zY3JvbGxZICsgY29vcmRzLmJvdHRvbSArIHRoaXMuJGlucHV0LmhlaWdodCgpICsgNztcclxuXHRcdFx0XHR0aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdkcm9wLXVwJylcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZHJvcC1kb3duJylcclxuXHRcdFx0XHRcdC5jc3MoJ3RvcCcsIHBvaW50KTtcclxuXHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHQhdGhpcy4kY2FsZW5kYXIuaGFzQ2xhc3MoJ2Ryb3AtdXAnKSAmJlxyXG5cdFx0XHRcdHRoaXMuJGNhbGVuZGFyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dmFyIHBvaW50ID0gd2luZG93LnNjcm9sbFkgKyBjb29yZHMudG9wIC0gY29vcmRzLmhlaWdodCAtIHRoaXMuJGlucHV0LmhlaWdodCgpIC0gNztcclxuXHRcdFx0XHR0aGlzLiRjYWxlbmRhci5hZGRDbGFzcygnZHJvcC11cCcpLmNzcygndG9wJywgcG9pbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgYm91bmRpbmcgPSB0aGlzLiRjYWxlbmRhclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdGJvdW5kaW5nLnRvcCA+PSAwICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0ICsgNSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgNSlcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihzZW5kTm90aWZpY2F0aW9uKSB7XHJcblx0XHR0aGlzLnBpY2tlci5zZXRTdGFydERhdGUobW9tZW50KCkpO1xyXG5cdFx0dGhpcy5waWNrZXIuc2V0RW5kRGF0ZShtb21lbnQoKSk7XHJcblx0XHR0aGlzLmlzRW1wdHlIb3VyID0gZmFsc2U7XHJcblx0XHR0aGlzLiRjbGVhci5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdGlmICh0aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHR0aGlzLiRsYWJlbC5odG1sKCctLSAtLSAtLScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQudmFsKCcnKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZW5kTm90aWZpY2F0aW9uIHx8IHNlbmROb3RpZmljYXRpb24gPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuc2VuZE5vdGlmaWNhdGlvbihmYWxzZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5waWNrZXIuc2hvdygpO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucGlja2VyLmhpZGUoKTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucGlja2VyLmNsaWNrQ2FuY2VsKCk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuc2VuZE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uKHNlbmREYXRlKSB7XHJcblx0XHRpZiAodGhpcy4kd2lkZ2V0Lmhhc0NsYXNzKCdhdHRhY2hlZElucHV0JykpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNlbmREYXRlIHx8IHNlbmREYXRlID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRpZiAodGhpcy5pc0VtcHR5SG91cikge1xyXG5cdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxyXG5cdFx0XHRcdFx0dGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCxcclxuXHRcdFx0XHRcdHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gWzAwOjAwOjAwXWApICsgJ3wnICsgdGhpcy5pc0VtcHR5SG91clxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLnRpbWVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbmZpZy5kYXRlVGltZVJhbmdlUGlja2VyRmFrZU5vdGlmeUlkLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IEhIOm1tOnNzYCkgKyAnfCcgKyB0aGlzLmlzRW1wdHlIb3VyXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdFx0dGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCxcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSArICd8JyArIHRoaXMuaXNFbXB0eUhvdXJcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRPc05vdGlmeVdpZGdldCh0aGlzLmNvbmZpZy5kYXRlVGltZVJhbmdlUGlja2VyRmFrZU5vdGlmeUlkLCAnbnVsbHx0cnVlJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUudXBkYXRlUGFyZW50SWZyYW1lID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUucmVzaXplKCk7XHJcblx0XHR9XHJcblx0XHRpZiAoJCgnLlBhZ2UuTGF5b3V0UG9wdXAnKS5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLnJlZHJhd0RpYWxvZ1dpbmRvdygpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5EYXRlVGltZVJhbmdlUGlja2VyID0ge1xyXG5cdFx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0XHRhbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gYWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnM7XHJcblx0XHR9LFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IERyYWdEcm9wQXJlYSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0dmFyIGRyYWdEcm9wQXJlYVdpZGdldDtcclxuXHJcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0d2luZG93W2NvbmZpZy5kcmFnRHJvcEFyZWFJZF0gPSBuZXcgRHJhZ0Ryb3BBcmVhKGNvbmZpZyk7XHJcblx0XHRkcmFnRHJvcEFyZWFXaWRnZXQgPSB3aW5kb3dbY29uZmlnLmRyYWdEcm9wQXJlYUlkXTtcclxuXHJcblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuRHJhZ0Ryb3BBcmVhLnJlZnJlc2hEcmFnRHJvcCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR2YXIgcmVmcmVzaERyYWdEcm9wID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRkcmFnRHJvcEFyZWFXaWRnZXQuc2V0dXBEcmFnZ2FibGUoKTtcclxuXHRcdFx0ZHJhZ0Ryb3BBcmVhV2lkZ2V0LnNldHVwRHJvcHBhYmxlKCk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgRHJhZ0Ryb3BBcmVhID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLiRhcmVhID0gJCgnIycgKyBjb25maWcuZHJhZ0Ryb3BBcmVhSWQpO1xyXG5cdFx0dGhpcy4kYXJlYS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdHRoaXMuc2tpbiA9IGNvbmZpZy5za2luO1xyXG5cdFx0dGhpcy5mYWtlTm90aWZ5V2lkZ2V0SWQgPSBjb25maWcuZmFrZU5vdGlmeVdpZGdldElkO1xyXG5cdFx0dGhpcy5zZXR1cERyb3BwYWJsZSgpO1xyXG5cdFx0aWYgKGNvbmZpZy5zb3J0YWJsZSkge1xyXG5cdFx0XHR0aGlzLnNldHVwU29ydGFibGUoKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2V0dXBEcmFnZ2FibGUoKTtcclxuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblx0XHR0aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcm9wcGFibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfdGhpcy5oYW5kbGVEcm9wcGFibGUoJCh0aGlzKSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLnNldHVwRHJhZ2dhYmxlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZScpLmRyYWdnYWJsZSh7XHJcblx0XHRcdGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcclxuXHRcdFx0Y29udGFpbm1lbnQ6IHRoaXMuJGFyZWEsXHJcblx0XHRcdHNjb3BlOiB0aGlzLmNvbmZpZy5kcmFnRHJvcEFyZWFJZCxcclxuXHRcdFx0ZGVsYXk6IDAsXHJcblx0XHRcdHNjcm9sbDogdHJ1ZSxcclxuXHRcdFx0cmV2ZXJ0OiAnaW52YWxpZCcsXHJcblx0XHRcdHJldmVydER1cmF0aW9uOiAwLFxyXG5cdFx0XHRjb25uZWN0VG9Tb3J0YWJsZTogJy5EcmFnRHJvcC1kcm9wcGFibGUnLFxyXG5cdFx0XHRzdG9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuXHRcdFx0XHRpZiAodWkuaGVscGVyLmhhc0NsYXNzKCd1aS1kcmFnZ2FibGUtZHJhZ2dpbmcnKSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgJHRhcmdldCA9IF90aGlzLiRhcmVhLmZpbmQoJy51aS1kcm9wcGFibGUudWktc29ydGFibGUnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoX3RoaXMuc2tpbiA9PT0gJ1RlYW1zJykge1xyXG5cdFx0XHRcdFx0XHQvLyQodWkuaGVscGVyKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KCR0YXJnZXQuZGF0YSgnZmFrZW5vdGlmeScpLCB1aS5oZWxwZXIuZGF0YSgnaXRlbXR5cGUnKSArICd8JyArIHVpLmhlbHBlci5kYXRhKCdpdGVtaWQnKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdFx0XHQkdGFyZ2V0LmRhdGEoJ2Zha2Vub3RpZnknKSxcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXBsYWNlaG9sZGVyJykuaW5kZXgoKSArICd8JyArIHVpLmhlbHBlci5kYXRhKCdpdGVtaWQnKVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdERyYWdEcm9wQXJlYS5wcm90b3R5cGUuc2V0dXBEcm9wcGFibGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR0aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcm9wcGFibGUnKS5kcm9wcGFibGUoe1xyXG5cdFx0XHRob3ZlckNsYXNzOiAnaG92ZXJlZCcsXHJcblx0XHRcdGFkZENsYXNzZXM6IHRydWUsXHJcblx0XHRcdGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcclxuXHRcdFx0c2NvcGU6IHRoaXMuY29uZmlnLmRyYWdEcm9wQXJlYUlkLFxyXG5cdFx0XHR0b2xlcmFuY2U6ICdwb2ludGVyJyxcclxuXHRcdFx0ZHJvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblx0XHRcdFx0aWYgKF90aGlzLnNraW4gPT09ICdUZWFtcycpIHtcclxuXHRcdFx0XHRcdCQodWkuZHJhZ2dhYmxlKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdFx0JChldmVudC50YXJnZXQpLmRhdGEoJ2Zha2Vub3RpZnknKSxcclxuXHRcdFx0XHRcdFx0dWkuZHJhZ2dhYmxlLmRhdGEoJ2l0ZW10eXBlJykgKyAnfCcgKyB1aS5kcmFnZ2FibGUuZGF0YSgnaXRlbWlkJylcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxyXG5cdFx0XHRcdFx0XHQkKGV2ZW50LnRhcmdldCkuZGF0YSgnZmFrZW5vdGlmeScpLFxyXG5cdFx0XHRcdFx0XHRfdGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXBsYWNlaG9sZGVyJykuaW5kZXgoKSArICd8JyArIHVpLmRyYWdnYWJsZS5kYXRhKCdpdGVtaWQnKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLnNldHVwU29ydGFibGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZScpLnNvcnRhYmxlKHtcclxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxyXG5cdFx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcclxuXHRcdFx0Y29udGFpbm1lbnQ6IHRoaXMuJGFyZWEsXHJcblx0XHRcdHRvbGVyYW5jZTogJ3BvaW50ZXInLFxyXG5cdFx0XHRyZXZlcnQ6IDIwMCxcclxuXHRcdFx0aXRlbXM6ICcuRHJhZ0Ryb3AtZHJvcHBhYmxlLWl0ZW1zIC5EcmFnRHJvcC1kcmFnZ2FibGUnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0RyYWdEcm9wLWRyYWdnYWJsZS1wbGFjZWhvbGRlcicsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMuJGFyZWEub24oJ2NsaWNrJywgJy5EcmFnRHJvcC1kcmFnZ2FibGUgaW5wdXQnLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0Y29uc3QgJGNoZWNrYm94ID0gJChldnQuY3VycmVudFRhcmdldCk7XHJcblx0XHRcdGNvbnN0ICRkcm9wcGFibGUgPSAkY2hlY2tib3guY2xvc2VzdCgnLkRyYWdEcm9wLWRyb3BwYWJsZScpO1xyXG5cdFx0XHRjb25zdCAkZHJhZ2dhYmxlID0gJGNoZWNrYm94LmNsb3Nlc3QoJy5EcmFnRHJvcC1kcmFnZ2FibGUnKTtcclxuXHRcdFx0Y29uc3QgJGFjdGlvbiA9ICRkcmFnZ2FibGUuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZS1zZWxlY3QtYWN0aW9uIGEnKTtcclxuXHJcblx0XHRcdCRhY3Rpb24udHJpZ2dlcignY2xpY2snKTtcclxuXHJcblx0XHRcdGlmICgkZHJvcHBhYmxlLmhhc0NsYXNzKCdhbGxvd011bHRpcGxlJykpIHtcclxuXHRcdFx0XHRpZiAoJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0Ly8kY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdCRkcmFnZ2FibGUuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdCRkcmFnZ2FibGUucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL190aGlzLmhhbmRsZURyb3BwYWJsZSgkZHJvcHBhYmxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kYXJlYS5vbignY2xpY2snLCAnLkRyYWdEcm9wLWRyYWdnYWJsZS1zZWxlY3QtYWN0aW9uIGEnLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0RHJhZ0Ryb3BBcmVhLnByb3RvdHlwZS5oYW5kbGVEcm9wcGFibGUgPSBmdW5jdGlvbigkZHJvcHBhYmxlKSB7XHJcblx0XHRpZiAoJGRyb3BwYWJsZS5oYXNDbGFzcygnYWxsb3dNdWx0aXBsZScpKSB7XHJcblx0XHRcdHZhciAkYWN0aW9ucyA9ICRkcm9wcGFibGUuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZS1pbnRybycpO1xyXG5cdFx0XHR2YXIgY2hrU2VsZWN0ZWQgPSAkZHJvcHBhYmxlLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJykubGVuZ3RoO1xyXG5cdFx0XHRpZiAoY2hrU2VsZWN0ZWQgPiAwKSB7XHJcblx0XHRcdFx0JGFjdGlvbnMuZmluZCgnYSwgYnV0dG9uJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGFjdGlvbnMuZmluZCgnYSwgYnV0dG9uJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGRyb3BwYWJsZS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5EcmFnRHJvcEFyZWEgPSB7XHJcblx0XHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRcdHJlZnJlc2hEcmFnRHJvcDogcmVmcmVzaERyYWdEcm9wLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IERyb3Bkb3duQ2F0ZWdvcmllcyAqL1xyXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0ZnVuY3Rpb24gb3B0R3JvdXBTZXRWYWx1ZShzZWxlY3RJZCwgaW5wdXRCb3hJZCwgYnV0dG9uSWQpIHtcclxuXHRcdHZhciB2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpLnZhbHVlO1xyXG5cdFx0JCgnIycgKyBpbnB1dEJveElkKS52YWwodik7XHJcblx0XHQkKCcjJyArIHNlbGVjdElkICsgJyBvcHRpb25bc2VsZWN0ZWRdJykucmVtb3ZlQXR0cignc2VsZWN0ZWQnKTtcclxuXHJcblx0XHRpZiAodiAhPSAtMSkge1xyXG5cdFx0XHQkKCcjJyArIHNlbGVjdElkICsgJyBvcHRpb25bdmFsdWU9XCInICsgdiArICdcIl0nKS5hdHRyKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoJyMnICsgYnV0dG9uSWQpLmNsaWNrKCk7XHJcblx0XHQkKCcjczJpZF8nICsgc2VsZWN0SWQpLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci1hY3RpdmUnKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIE9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAoYSwgYikge1xyXG5cdFx0dmFyIF9lID0gJCgnIycgKyBhLmNvbnRyb2x0b3ZhbGlkYXRlKTtcclxuXHRcdHZhciBpc1ZhbGlkID0gX2UuZmluZCgnb3B0aW9uW3NlbGVjdGVkXScpLmxlbmd0aDtcclxuXHRcdHZhciBoYXNTaWJsaW5nX01hbmRhdG9yeVNlbGVjdDIgPSBfZS5wcmV2KCdkaXYuc2VsZWN0Mi1jb250YWluZXIuTWFuZGF0b3J5JykubGVuZ3RoO1xyXG5cclxuXHRcdGlmIChoYXNTaWJsaW5nX01hbmRhdG9yeVNlbGVjdDIpIHtcclxuXHRcdFx0aWYgKGlzVmFsaWQpIHtcclxuXHRcdFx0XHRfZS5wcmV2KCdkaXYuc2VsZWN0Mi1jb250YWluZXIuTWFuZGF0b3J5JykucmVtb3ZlQ2xhc3MoJ05vdF9WYWxpZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9lLnByZXYoJ2Rpdi5zZWxlY3QyLWNvbnRhaW5lci5NYW5kYXRvcnknKS5hZGRDbGFzcygnTm90X1ZhbGlkJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaXNWYWxpZDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZE9wdEdyb3VwVmFsaWRhdG9yKG9wdEdyb3VwRWxlbWVudElkKSB7XHJcblx0XHRPc1BhZ2VfVmFsaWRhdG9ycy5wdXNoKHtcclxuXHRcdFx0Y29udHJvbHRvdmFsaWRhdGU6IG9wdEdyb3VwRWxlbWVudElkLFxyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRlcnJvcm1lc3NhZ2U6ICdSZXF1aXJlZCBmaWVsZCEnLFxyXG5cdFx0XHRldmFsdWF0aW9uZnVuY3Rpb246ICdTYXBwaGlyZVdpZGdldHMuRHJvcGRvd25DYXRlZ29yaWVzLk9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAnLFxyXG5cdFx0XHRpbml0aWFsdmFsdWU6ICcnLFxyXG5cdFx0XHRpc3ZhbGlkOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuRHJvcGRvd25DYXRlZ29yaWVzID0ge1xyXG5cdFx0b3B0R3JvdXBTZXRWYWx1ZSxcclxuXHRcdE9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAsXHJcblx0XHRhZGRPcHRHcm91cFZhbGlkYXRvcixcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTsiLCIvKiBDb21wb25lbnQgRHJvcHpvbmUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0d2luZG93LkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRiaW5kRXZlbnRzKGNvbmZpZyk7XHJcblxyXG5cdFx0XHRjb25zdCBteURyb3B6b25lID0gbmV3IHdpbmRvdy5Ecm9wem9uZShjb25maWcuaGlkZGVuSW5wdXRDb250YWluZXIsIHtcclxuXHRcdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRsZXQgcHJldkZpbGU7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZmlsZXNMaXN0ID0gY29uZmlnLmZpbGVzTGlzdCA/IGNvbmZpZy5maWxlc0xpc3Quc3BsaXQoJywnKSA6IFtdO1xyXG5cclxuXHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBmaWxlc0xpc3QpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbW9ja0ZpbGUgPSB7IG5hbWU6IGl0ZW0sIHNpemU6IDEyMzQ1Njc4IH07XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmVtaXQoJ2FkZGVkZmlsZScsIG1vY2tGaWxlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5lbWl0KCdjb21wbGV0ZScsIG1vY2tGaWxlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5maWxlcy5wdXNoKG1vY2tGaWxlKTtcclxuXHJcblx0XHRcdFx0XHRcdCQoYCR7Y29uZmlnLmhpZGRlbklucHV0Q29udGFpbmVyfSAuZHotZmlsZW5hbWVgKS5hdHRyKCd0aXRsZScsIGl0ZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0cHJldkZpbGUgPSBtb2NrRmlsZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoK2NvbmZpZy5tYXhGaWxlcyA9PT0gMSAmJiBjb25maWcuaXNSZXBsYWNlUHJldmlvdXMpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vbignYWRkZWRmaWxlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHByZXZGaWxlICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlRmlsZShwcmV2RmlsZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjb25zdCAkbm90aWZ5SW5wdXQgPSAkKGAjJHtjb25maWcubm90aWZ5SW5wdXRJZH1gKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZmlsZSwgcmVzcG9uc2VUZXh0KSB7XHJcblx0XHRcdFx0XHRcdHByZXZGaWxlID0gZmlsZTtcclxuXHJcblx0XHRcdFx0XHRcdCQoYCMke2NvbmZpZy5ub3RpZnlJbnB1dElkfSAuZHotZmlsZW5hbWVgKS5hdHRyKCd0aXRsZScsIGZpbGUubmFtZSk7XHJcblx0XHRcdFx0XHRcdCRub3RpZnlJbnB1dC52YWwocmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LmNoYW5nZSgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5vbignZXJyb3InLCBmdW5jdGlvbihmaWxlLCByZXNwb25zZVRleHQpIHtcclxuXHRcdFx0XHRcdFx0cHJldkZpbGUgPSBmaWxlO1xyXG5cclxuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LnZhbChyZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0XHQkbm90aWZ5SW5wdXQuY2hhbmdlKCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdCQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlVwbG9hZE1lc3NhZ2VDbGFzc2ApLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0JChgIyR7Y29uZmlnLndpZGdldElkfSAuZHotY2xpY2thYmxlYCkuY2xpY2soKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5Ecm9wem9uZSA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IEV4cGFuZGFibGVMaW5rICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IHdpZGdldElEID0+IHtcclxuXHRcdGNvbnN0ICRlbGVtZW50V3JhcHBlciA9ICQoYCMke3dpZGdldElEfWApO1xyXG5cclxuXHRcdGlmICgkZWxlbWVudFdyYXBwZXIucGFyZW50KCcuRXhwYW5kYWJsZUxpc3QnKS5oYXNDbGFzcygnSGlkZVdoZW5FbXB0eScpKSB7XHJcblx0XHRcdGNvbnN0IHRleHQgPSAkZWxlbWVudFdyYXBwZXIuZmluZCgnLkV4cGFuZGFibGVMaW5rX19Db250ZW50JykudGV4dCgpO1xyXG5cclxuXHRcdFx0aWYgKHRleHQubGVuZ3RoID09PSAwKSAkZWxlbWVudFdyYXBwZXIucGFyZW50KCcuRXhwYW5kYWJsZUxpc3QnKS5oaWRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0YmluZEV2ZW50cyh3aWRnZXRJRCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYmluZEV2ZW50cyA9IHdpZGdldElEID0+IHtcclxuXHRcdCQoYCMke3dpZGdldElEfSAuRXhwYW5kYWJsZUxpbmtfX0hlYWRlcmApLmNsaWNrKCgpID0+IG9wZW5DbG9zZShgIyR7d2lkZ2V0SUR9YCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wZW5DbG9zZSA9IGVsZW1lbnRJRCA9PiB7XHJcblx0XHQvLyBXaGVuIHRoZSBleHBhbmRhYmxlcyBhcmUgaW5zaWRlIGEgY29udGFpbmVyIHdpdGggY2xhc3MgRXhwYW5kYWJsZUxpbmtHcm91cCwgd2lsbCBhY3QgbGlrZSBhIGV4cGFuZGFibGUgZ3JvdXBcclxuXHRcdGNvbnN0ICRsaW5rR3JvdXAgPSAkKGVsZW1lbnRJRCkuY2xvc2VzdCgnLkV4cGFuZGFibGVMaW5rR3JvdXAnKTtcclxuXHJcblx0XHRpZiAoJGxpbmtHcm91cC5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgJGV4cGFuZGFibGVzID0gJGxpbmtHcm91cC5maW5kKCcuRXhwYW5kYWJsZUxpbmstLWV4cGFuZGVkJykubm90KGVsZW1lbnRJRCk7XHJcblxyXG5cdFx0XHQkZXhwYW5kYWJsZXMucmVtb3ZlQ2xhc3MoJ0V4cGFuZGFibGVMaW5rLS1leHBhbmRlZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoZWxlbWVudElEKS50b2dnbGVDbGFzcygnRXhwYW5kYWJsZUxpbmstLWV4cGFuZGVkJyk7XHJcblxyXG5cdFx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUpIHtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLlJlc2l6ZVBhcmVudElmcmFtZS5yZXNpemUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuRXhwYW5kYWJsZUxpbmsgPSB7IGNyZWF0ZSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IEZ1bGxTY3JlZW5UYWJzV3JhcHBlciAqL1xyXG5TYXBwaGlyZVdpZGdldHMuRnVsbFNjcmVlblRhYnNXcmFwcGVyID0gKCkgPT4ge1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLlRhYldyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc3QgJHdyYXBwZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5GdWxsU2NyZWVuVGFic1dyYXBwZXJfX1RhYnMnKTtcclxuXHRcdFx0JHdyYXBwZXIuZmluZCgnKicpLnJlbW92ZUNsYXNzKCdBY3RpdmUnKTtcclxuXHJcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ0FjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBQZXJzb25DYXJkICovXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdHZhciBQZXJzb25DYXJkRXZlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5Jc0V4cGFuZGFibGUgLlBlcnNvbkNhcmRfX2hlYWRlckxlZnRJbmZvLCAuSXNFeHBhbmRhYmxlIC5QZXJzb25DYXJkX19jb250ZW50JylcclxuXHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29uc3QgJGhlYWRlciA9ICQodGhpcykuY2xvc2VzdCgnLlBlcnNvbkNhcmRfaGVhZGVyJyk7XHJcblx0XHRcdFx0Y29uc3QgJG9uQ2FyZE9wZW5MaW5rID0gJGhlYWRlci5maW5kKCcuUGVyc29uQ2FyZF9fT25DYXJkT3BlbkxpbmsnKTtcclxuXHRcdFx0XHRjb25zdCAkb25DYXJkQ2xvc2VMaW5rID0gJGhlYWRlci5maW5kKCcuUGVyc29uQ2FyZF9fT25DYXJkQ2xvc2VDbGljaycpO1xyXG5cdFx0XHRcdGNvbnN0ICRjb250ZW50ID0gJGhlYWRlci5uZXh0KCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KCcuUGVyc29uQ2FyZCcpO1xyXG5cclxuXHRcdFx0XHQkY29udGVudC5yZW1vdmVDbGFzcygnSXNFeHBhbmRlZCcpO1xyXG5cclxuXHRcdFx0XHRpZiAoJGNhcmQuaGFzQ2xhc3MoJ0lzT3BlbicpKSB7XHJcblx0XHRcdFx0XHQkb25DYXJkQ2xvc2VMaW5rLnRyaWdnZXJIYW5kbGVyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0JGNhcmQucmVtb3ZlQ2xhc3MoJ0lzT3BlbicpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkb25DYXJkT3BlbkxpbmsudHJpZ2dlckhhbmRsZXIoJ2NsaWNrJyk7XHJcblxyXG5cdFx0XHRcdFx0JGNvbnRlbnQuYWRkQ2xhc3MoJ0lzRXhwYW5kZWQnKTtcclxuXHJcblx0XHRcdFx0XHQkY2FyZC5hZGRDbGFzcygnSXNPcGVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQkKCcuU3RvcFByb3BhZ2F0aW9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH0pO1xyXG5cclxuXHRQZXJzb25DYXJkRXZlbnQoKTtcclxuXHJcblx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChQZXJzb25DYXJkRXZlbnQpO1xyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IEdlbmVyaWNHYWxsZXJ5ICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBHZW5lcmljR2FsbGVyeShjb25maWcpO1xyXG5cdH07XHJcblxyXG5cdHZhciBHZW5lcmljR2FsbGVyeSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIHRoaXMuY29uZmlnLndpZGdldElkKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdHRoaXMuZXF1YWxIZWlnaHQgPSB0aGlzLmNvbmZpZy5lcXVhbEhlaWdodDtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJz4gLkdlbmVyaWNHYWxsZXJ5LWNvbnRlbnQgPiBzcGFuJykubGVuZ3RoID09PSAxICYmXHJcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuR2VuZXJpY0dhbGxlcnktY29udGVudCA+IHNwYW4nKS5oYXNDbGFzcygnTGlzdFJlY29yZHMnKVxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuJGdhbGxlcnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuR2VuZXJpY0dhbGxlcnktY29udGVudCA+IHNwYW4uTGlzdFJlY29yZHMnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJGdhbGxlcnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuR2VuZXJpY0dhbGxlcnktY29udGVudCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB0ZW1wbGF0ZUNvbHVtbiA9ICdyZXBlYXQoJyArIHRoaXMuY29uZmlnLmNvbHVtblNpemluZyArICcsIG1pbm1heCgnICsgdGhpcy5jb25maWcuY29sdW1uTWluV2lkdGggKyAnLCAxZnIpKSc7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLm1heEl0ZW1zUm93ID4gMCkge1xyXG5cdFx0XHR0ZW1wbGF0ZUNvbHVtbiA9IGByZXBlYXQoJHt0aGlzLmNvbmZpZy5jb2x1bW5TaXppbmd9LCBtaW5tYXgobWF4KCR7dGhpcy5jb25maWcuY29sdW1uTWluV2lkdGh9LCAoMTAwJSAtICgke3RoaXMuY29uZmlnLm1heEl0ZW1zUm93fSAtIDEpICogJHt0aGlzLmNvbmZpZy5nYXBDb2x1bW59cHgpIC8gJHt0aGlzLmNvbmZpZy5tYXhJdGVtc1Jvd30pLCAxZnIpKWA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kZ2FsbGVyeS5jc3Moe1xyXG5cdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXHJcblx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHRlbXBsYXRlQ29sdW1uLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kZ2FsbGVyeUl0ZW1zID0gdGhpcy4kZ2FsbGVyeS5jaGlsZHJlbigpO1xyXG5cdFx0dGhpcy4kZ2FsbGVyeUl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICghJCh0aGlzKS5oYXNDbGFzcygnR2VuZXJpY0dhbGxlcnktaXRlbScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS53cmFwKCc8ZGl2IGNsYXNzPVwiR2VuZXJpY0dhbGxlcnktaXRlbVwiPjwvZGl2PicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuR2VuZXJpY0dhbGxlcnkgPSB7XHJcblx0XHRjcmVhdGU6IGNyZWF0ZSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBHZW5lcmljR3JpZCAqL1xyXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBhbGxHZW5lcmljR3JpZHMgPSBbXTtcclxuXHJcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IEdlbmVyaWNHcmlkKGNvbmZpZyk7XHJcblx0XHRhbGxHZW5lcmljR3JpZHMucHVzaCh3aW5kb3dbY29uZmlnLndpZGdldElkXSk7XHJcblx0fTtcclxuXHJcblx0dmFyIEdlbmVyaWNHcmlkID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5jb25maWcpO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5HZW5lcmljR3JpZCA9IHtcclxuXHRcdGNyZWF0ZTogY3JlYXRlLFxyXG5cdH07XHJcblxyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7IiwiLyogQ29tcG9uZW50IEhvcml6b250YWxUb29sYmFyICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XHJcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXQoJHdpZGdldCwgY29uZmlnKSk7XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5pc0Fycm93TmF2aWdhdGlvbikge1xyXG5cdFx0XHQkKHdpbmRvdykubG9hZCgoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgJGl0ZW1XcmFwcGVyID0gJHdpZGdldC5maW5kKCcuTWVudUl0ZW1XcmFwcGVyLkFjdGl2ZScpO1xyXG5cdFx0XHRcdGlmICgkaXRlbVdyYXBwZXIubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHQkaXRlbVdyYXBwZXJbMF0uc2Nyb2xsSW50b1ZpZXcoe1xyXG5cdFx0XHRcdFx0XHRiZWhhdmlvcjogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0XHRibG9jazogJ2VuZCcsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGluaXQgPSAoJHdpZGdldCwgY29uZmlnKSA9PiB7XHJcblx0XHRpZiAoY29uZmlnLmlzQXJyb3dOYXZpZ2F0aW9uKSB7XHJcblx0XHRcdGhhbmRsZUFycm93cygkd2lkZ2V0KTtcclxuXHJcblx0XHRcdGNvbnN0ICR0b29sYmFySXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcycpO1xyXG5cdFx0XHRjb25zdCAkbGlzdEl0ZW1zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLkxpc3RSZWNvcmRzJyk7XHJcblx0XHRcdGNvbnN0ICRidG5SaWdodCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX3JpZ2h0QnRuJyk7XHJcblx0XHRcdGNvbnN0ICRidG5MZWZ0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fbGVmdEJ0bicpO1xyXG5cclxuXHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGwoKCkgPT4gaGFuZGxlQXJyb3dzKCR3aWRnZXQpKTtcclxuXHJcblx0XHRcdCRidG5SaWdodC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHRcdHZhciBtYXhTY3JvbGxsID0gJGxpc3RJdGVtcy53aWR0aCgpIC0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xyXG5cdFx0XHRcdHZhciBzaWRlV2lkdGggPSBtYXhTY3JvbGxsIC0gNTA7XHJcblx0XHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KGN1cnJlbnRTY3JvbGwgKyA1MCk7XHJcblxyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsID09IHNpZGVXaWR0aCkgJGJ0blJpZ2h0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsICE9IDUwKSAkYnRuTGVmdC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkYnRuTGVmdC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHRcdHZhciBtYXhTY3JvbGxsID0gJGxpc3RJdGVtcy53aWR0aCgpIC0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xyXG5cdFx0XHRcdHZhciBzaWRlV2lkdGggPSBtYXhTY3JvbGxsIC0gNTA7XHJcblx0XHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KGN1cnJlbnRTY3JvbGwgLSA1MCk7XHJcblxyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsICE9IHNpZGVXaWR0aCkgJGJ0blJpZ2h0LnJlbW92ZUNsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsID09IDUwKSAkYnRuTGVmdC5hZGRDbGFzcygnRGlzYWJsZWQnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS50b29sYmFyJywgKCkgPT4gaGFuZGxlQXJyb3dzKCR3aWRnZXQpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhhbmRsZVJlc2l6ZSgkd2lkZ2V0KTtcclxuXHRcdFx0YmluZEV2ZW50c0NsaWNrKCR3aWRnZXQpO1xyXG5cclxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUudG9vbGJhcicsICgpID0+IGhhbmRsZVJlc2l6ZSgkd2lkZ2V0KSk7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignVG9vbGJhckZpeGVkJywgKCkgPT4gaGFuZGxlUmVzaXplKCR3aWRnZXQpLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aGFuZGxlQXJyb3dzID0gJHdpZGdldCA9PiB7XHJcblx0XHRjb25zdCAkdG9vbGJhckl0ZW1zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMnKTtcclxuXHRcdGNvbnN0ICRsaXN0SXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuTGlzdFJlY29yZHMnKTtcclxuXHRcdGNvbnN0ICRidG5SaWdodCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX3JpZ2h0QnRuJyk7XHJcblx0XHRjb25zdCAkYnRuTGVmdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX2xlZnRCdG4nKTtcclxuXHJcblx0XHRsZXQgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0bGV0IG1lbnVXaWR0aCA9ICRsaXN0SXRlbXMud2lkdGgoKTtcclxuXHRcdGxldCBleHRlcm5hbFdpZHRoID0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xyXG5cdFx0dmFyIG1heFNjcm9sbGwgPSBtZW51V2lkdGggLSBleHRlcm5hbFdpZHRoO1xyXG5cclxuXHRcdGlmIChleHRlcm5hbFdpZHRoID4gbWVudVdpZHRoKSB7XHJcblx0XHRcdCRidG5MZWZ0LmhpZGUoKTtcclxuXHRcdFx0JGJ0blJpZ2h0LmhpZGUoKTtcclxuXHJcblx0XHRcdCR3aWRnZXQuZmluZCgnLlRvb2xiYXJfY29udGFpbmVyJykuYWRkQ2xhc3MoJ1Rvb2xiYXJfY29udGFpbmVyLS1ub2Fycm93cycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGJ0bkxlZnQuc2hvdygpO1xyXG5cdFx0XHQkYnRuUmlnaHQuc2hvdygpO1xyXG5cclxuXHRcdFx0JHdpZGdldC5maW5kKCcuVG9vbGJhcl9jb250YWluZXInKS5yZW1vdmVDbGFzcygnVG9vbGJhcl9jb250YWluZXItLW5vYXJyb3dzJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGN1cnJlbnRTY3JvbGwgPT09IDApICRidG5MZWZ0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0ZWxzZSAkYnRuTGVmdC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcclxuXHJcblx0XHRpZiAoY3VycmVudFNjcm9sbCA+PSBtYXhTY3JvbGxsKSAkYnRuUmlnaHQuYWRkQ2xhc3MoJ0Rpc2FibGVkJyk7XHJcblx0XHRlbHNlICRidG5SaWdodC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcclxuXHR9O1xyXG5cclxuXHRoYW5kbGVSZXNpemUgPSAkd2lkZ2V0ID0+IHtcclxuXHRcdGxldCBpdGVtc1RvdGFsID0gMDtcclxuXHRcdGxldCBoYXNJdGVtc0hpZGRlbiA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0ICRsaXN0SXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuTGlzdFJlY29yZHMnKTtcclxuXHRcdCRsaXN0SXRlbXMuZmluZCgnPiBhW3VpXScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblxyXG5cdFx0Y29uc3QgbWVudVdpZHRoID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMnKS5vdXRlcldpZHRoKHRydWUpO1xyXG5cclxuXHRcdCRsaXN0SXRlbXMuZmluZCgnYVt1aV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpdGVtc1RvdGFsICs9IHBhcnNlSW50KCQodGhpcykub3V0ZXJXaWR0aCh0cnVlKSwgMTApO1xyXG5cclxuXHRcdFx0aWYgKGl0ZW1zVG90YWwgKyA5MCA8IG1lbnVXaWR0aCkge1xyXG5cdFx0XHRcdCQodGhpcykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aGFzSXRlbXNIaWRkZW4gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChoYXNJdGVtc0hpZGRlbiAmJiAhJGxpc3RJdGVtcy5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKS5sZW5ndGgpIHtcclxuXHRcdFx0JHdpZGdldFxyXG5cdFx0XHRcdC5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKVxyXG5cdFx0XHRcdC5jbG9uZSgpXHJcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXHJcblx0XHRcdFx0LmFwcGVuZFRvKCRsaXN0SXRlbXMpO1xyXG5cclxuXHRcdFx0aGFzSXRlbXNIaWRkZW4gPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCAkb3B0aW9uc0xpc3QgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuVG9vbGJhcl9fTW9yZU9wdGlvbnNMaXN0Jyk7XHJcblxyXG5cdFx0JGxpc3RJdGVtcy5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKS5jc3MoJ2Rpc3BsYXknLCAkb3B0aW9uc0xpc3QubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJyk7XHJcblxyXG5cdFx0Y29uc3QgJGhpZGRlbkl0ZW1zID0gJGxpc3RJdGVtcy5maW5kKCc+IGFbdWldJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJCh0aGlzKS5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkb3B0aW9uc0xpc3QuZW1wdHkoKTtcclxuXHJcblx0XHRjb25zdCBoYXNOb3RpZmljYXRpb25IaWRkZW4gPSAkaGlkZGVuSXRlbXMuZmluZCgnLk1lbnVJdGVtV3JhcHBlcl9CYWRnZTpub3QoOmVtcHR5KScpLmxlbmd0aCAhPT0gMDtcclxuXHRcdGNvbnN0ICR0cmlnZ2VyID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLlRvb2xiYXJfX01vcmVPcHRpb25zSWNvbicpO1xyXG5cclxuXHRcdGlmIChoYXNOb3RpZmljYXRpb25IaWRkZW4pICR0cmlnZ2VyLmFkZENsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9uc0ljb24tLW5vdGlmaWNhdGlvbicpO1xyXG5cdFx0ZWxzZSAkdHJpZ2dlci5yZW1vdmVDbGFzcygnVG9vbGJhcl9fTW9yZU9wdGlvbnNJY29uLS1ub3RpZmljYXRpb24nKTtcclxuXHJcblx0XHQkaGlkZGVuSXRlbXNcclxuXHRcdFx0LmNsb25lKClcclxuXHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXHJcblx0XHRcdC5hcHBlbmRUbygkb3B0aW9uc0xpc3QpO1xyXG5cdH07XHJcblxyXG5cdGJpbmRFdmVudHNDbGljayA9ICR3aWRnZXQgPT4ge1xyXG5cdFx0Y29uc3QgJG1vcmVPcHRpb25zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLlRvb2xiYXJfX01vcmVPcHRpb25zJyk7XHJcblx0XHRjb25zdCAkdHJpZ2dlciA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5Ub29sYmFyX19Nb3JlT3B0aW9uc0ljb24nKTtcclxuXHRcdGNvbnN0ICRvcHRpb25zTGlzdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX01vcmVPcHRpb25zTGlzdCcpO1xyXG5cclxuXHRcdCR0cmlnZ2VyLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRcdFx0JG1vcmVPcHRpb25zLnRvZ2dsZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9ucy0tb3BlbicpO1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRvcHRpb25zTGlzdC5vbignbW91c2V3aGVlbCcsIGV2ZW50ID0+IHtcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCdib2R5Jykub24oJ21vdXNldXAnLCBldmVudCA9PiB7XHJcblx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkucGFyZW50cygpO1xyXG5cclxuXHRcdFx0aWYgKCEkdGFyZ2V0LmFuZFNlbGYoKS5pcygkbW9yZU9wdGlvbnMpKSB7XHJcblx0XHRcdFx0JG1vcmVPcHRpb25zLnJlbW92ZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9ucy0tb3BlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuSG9yaXpvbnRhbFRvb2xiYXIgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBIb3VyUGlja2VyICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNsYXNzIEhvdXJQaWNrZXIge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdC8vIE9wdGlvbnMgdXNlZCBieSBqUXVlcnkgVGltZXJwaWNrZXIgKEV4dGVybmFsIExpYilcclxuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xyXG5cdFx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Ib3VyUGlja2VyLmFsbEludGFuY2VzLnB1c2goY29uZmlnLndpZGdldElkKTtcclxuXHJcblx0XHRcdHRoaXMub25Db21wb25lbnRJbml0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aXNDb21wb25lbnRWYWxpZCgpIHtcclxuXHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBgQ29tcG9uZW50IEhvdXJQaWNrZXIgKCR7dGhpcy5vcHRpb25zLndpZGdldElkfSk6YDtcclxuXHRcdFx0bGV0IGVycm9ycyA9ICcnO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuJG1vZGVsLmxlbmd0aCAmJiB0aGlzLiRtb2RlbC5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0ZXJyb3JzID0gYCR7ZXJyb3JzfSAtIE5lZWRzIG9uZSAtIGFuZCBqdXN0IG9uZSAtIElucHV0IGVsZW1lbnQuYDtcclxuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMuJG1vZGVsLmxlbmd0aCAmJiB0aGlzLiRjb21wb25lbnQuZmluZCgnLkhvdXJQaWNrZXJfX1BsYWNlaG9sZGVyIGlucHV0JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0ZXJyb3JzID0gYCR7ZXJyb3JzfVxcbiAtIFRoZSBJbnB1dCBlbGVtZW50IG11c3QgYmUgb2YgdHlwZSBUZXh0LmA7XHJcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCF2YWxpZCkgY29uc29sZS5lcnJvcihgJHttZXNzYWdlfSAke2Vycm9yc31gKTtcclxuXHJcblx0XHRcdHJldHVybiB2YWxpZDtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRDb21wb25lbnRQb3NpdGlvbigpIHtcclxuXHRcdFx0Y29uc3QgJHdpZGdldCA9ICQoJy51aS10aW1lcGlja2VyLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRjb25zdCBsYWJlbExlZnQgPSB0aGlzLiRsYWJlbC5vZmZzZXQoKS5sZWZ0O1xyXG5cdFx0XHRjb25zdCBsYWJlbFdpZHRoID0gdGhpcy4kbGFiZWwud2lkdGgoKTtcclxuXHRcdFx0Y29uc3QgbGFiZWxPdXRlcldpZHRoID0gdGhpcy4kbGFiZWwub3V0ZXJXaWR0aCgpO1xyXG5cdFx0XHRjb25zdCB3aWRnZXRPdXRlcldpZHRoID0gJHdpZGdldC5vdXRlcldpZHRoKCk7XHJcblx0XHRcdGNvbnN0IHdpZGdldE1pbldpZHRoID0gKyR3aWRnZXQuY3NzKCdtaW4td2lkdGgnKS5yZXBsYWNlKCdweCcsICcnKTtcclxuXHRcdFx0Y29uc3QgaXNPdXRzaWRlV2luZG93ID1cclxuXHRcdFx0XHRsYWJlbExlZnQgKyBsYWJlbE91dGVyV2lkdGggPiAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpICsgJCh3aW5kb3cpLndpZHRoKCkgLSB3aWRnZXRPdXRlcldpZHRoO1xyXG5cclxuXHRcdFx0JHdpZGdldC5jc3Moe1xyXG5cdFx0XHRcdGxlZnQ6ICgpID0+IHtcclxuXHRcdFx0XHRcdGxldCB2YWx1ZSA9IGxhYmVsTGVmdCAtICh3aWRnZXRNaW5XaWR0aCAtIGxhYmVsV2lkdGgpIC8gMjtcclxuXHJcblx0XHRcdFx0XHRpZiAoaXNPdXRzaWRlV2luZG93KSB2YWx1ZSA9IGxhYmVsTGVmdCArIGxhYmVsV2lkdGggLSB3aWRnZXRPdXRlcldpZHRoO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IGxhYmVsTGVmdDtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0RWxlbWVudENsYXNzKHNlbGVjdG9yLCBjbGFzc05hbWUpIHtcclxuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZSA/ICQoc2VsZWN0b3IpLmFkZENsYXNzKGNsYXNzTmFtZSkgOiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZpbmVUaW1lRm9ybWF0KCkge1xyXG5cdFx0XHRsZXQgZm9ybWF0ID0gW107XHJcblx0XHRcdGxldCBhbVBtID0gJyc7XHJcblxyXG5cdFx0XHRmb3JtYXQucHVzaCh0aGlzLm9wdGlvbnMuaXMyNGhGb3JtYXQgPyAnSEgnIDogJ2hoJyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuc2hvd01pbnV0ZXMpIGZvcm1hdC5wdXNoKCdtbScpO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnNob3dTZWNvbmRzKSBmb3JtYXQucHVzaCgnc3MnKTtcclxuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuaXMyNGhGb3JtYXQpIGFtUG0gPSAnIHAnO1xyXG5cclxuXHRcdFx0cmV0dXJuIGAke2Zvcm1hdC5qb2luKCc6Jyl9JHthbVBtfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29udmVydFRpbWUxMnRvMjQodmFsdWUpIHtcclxuXHRcdFx0Y29uc3QgW3RpbWUsIG1vZGlmaWVyXSA9IHZhbHVlLnNwbGl0KCcgJyk7XHJcblx0XHRcdGxldCBbaG91cnMsIG1pbnV0ZXMgPSAnMDAnLCBzZWNvbmRzID0gJzAwJ10gPSB0aW1lLnNwbGl0KCc6Jyk7XHJcblxyXG5cdFx0XHRpZiAoaG91cnMgPT09ICcxMicpIGhvdXJzID0gJzAwJztcclxuXHRcdFx0aWYgKG1vZGlmaWVyID09PSAnUE0nKSBob3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCkgKyAxMjtcclxuXHJcblx0XHRcdHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcclxuXHRcdH1cclxuXHJcblx0XHRjb252ZXJ0VGltZUZvcm1hdFRvTWFzayh2YWx1ZSA9ICcnKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bYS16QS1aXSsvZywgJy0tJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0b25DaGFuZ2VFdmVudCh2YWx1ZSA9ICcnKSB7XHJcblx0XHRcdGxldCBtb2RlbCA9ICcwMS0wMS0xOTAwIDAwOjAwOjAwJzsgLy9pLmUuIG51bGxcclxuXHRcdFx0bGV0IGxhYmVsID0gdGhpcy5jb252ZXJ0VGltZUZvcm1hdFRvTWFzayh0aGlzLm9wdGlvbnMudGltZUZvcm1hdCk7XHJcblxyXG5cdFx0XHRpZiAodmFsdWUgJiYgISF2YWx1ZS50cmltKCkpIHtcclxuXHRcdFx0XHQvLyBUaGlzIGNvbmRpdGlvbiBpcyBjb3JyZWN0LCBtb2RlbCBhbHdheXMgdXNlcyB0aGUgMjRoIGZvcm1hdFxyXG5cdFx0XHRcdG1vZGVsID0gdGhpcy5vcHRpb25zLmlzMjRoRm9ybWF0ID8gdmFsdWUgOiB0aGlzLmNvbnZlcnRUaW1lMTJ0bzI0KHZhbHVlKTtcclxuXHRcdFx0XHRsYWJlbCA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmlzTm90aWZ5RW5hYmxlZCkgT3NOb3RpZnlXaWRnZXQodGhpcy5vcHRpb25zLmhvdXJQaWNrZXJGYWtlTm90aWZ5SWQsIG1vZGVsKTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc1RleHRUcmlnZ2VyYWJsZSkgdGhpcy4kbGFiZWwudGV4dChsYWJlbCk7XHJcblxyXG5cdFx0XHR0aGlzLiRtb2RlbC52YWwobW9kZWwpO1xyXG5cdFx0XHR0aGlzLiRtb2RlbC5jaGFuZ2UoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRvbkNvbXBvbmVudEluaXQoKSB7XHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kbW9kZWwgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkhvdXJQaWNrZXJfX1BsYWNlaG9sZGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XHJcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Ib3VyUGlja2VyX19EaXNwbGF5ZWQgLkhvdXJQaWNrZXJfX0lucHV0VmFsdWUnKTtcclxuXHRcdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuJGlucHV0O1xyXG5cclxuXHRcdFx0dGhpcy5vcHRpb25zLnRpbWVGb3JtYXQgPSB0aGlzLmRlZmluZVRpbWVGb3JtYXQoKTtcclxuXHJcblx0XHRcdGlmICghdGhpcy5pc0NvbXBvbmVudFZhbGlkKCkpIHJldHVybjtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgJGNvbnRhaW5lciA9IHRoaXMuJGNvbXBvbmVudDtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc1RleHRUcmlnZ2VyYWJsZSkge1xyXG5cdFx0XHRcdFx0JGNvbnRhaW5lci5hZGRDbGFzcygnSG91clBpY2tlci0tdGV4dFRyaWdnZXInKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLiRsYWJlbCA9ICRjb250YWluZXIuZmluZCgnLkhvdXJQaWNrZXJfX0Rpc3BsYXllZCAuSG91clBpY2tlcl9fTGFiZWxWYWx1ZScpO1xyXG5cdFx0XHRcdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuJGxhYmVsO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuJGxhYmVsLnRleHQodGhpcy5jb252ZXJ0VGltZUZvcm1hdFRvTWFzayh0aGlzLm9wdGlvbnMudGltZUZvcm1hdCkpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuJGxhYmVsLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kbGFiZWwudGltZXBpY2tlcigpLm9wZW4oKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0Q29tcG9uZW50UG9zaXRpb24oKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc0NsZWFyYWJsZSkge1xyXG5cdFx0XHRcdFx0dGhpcy4kYnV0dG9uQ2xlYXIgPSAkY29udGFpbmVyLmZpbmQoJy5Ib3VyUGlja2VyX19EaXNwbGF5ZWQgLkhvdXJQaWNrZXJfX0J1dHRvbkNsZWFyJyk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy4kYnV0dG9uQ2xlYXIub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoJycpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlRXZlbnQoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy4kZWxlbWVudC50aW1lcGlja2VyKHtcclxuXHRcdFx0XHRcdC4uLnRoaXMub3B0aW9ucyxcclxuXHRcdFx0XHRcdGNoYW5nZTogdGltZSA9PiB0aGlzLm9uQ2hhbmdlRXZlbnQodGltZSA/ICQoKS50aW1lcGlja2VyLmZvcm1hdFRpbWUodGhpcy5vcHRpb25zLnRpbWVGb3JtYXQsIHRpbWUpIDogbnVsbCksXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0RWxlbWVudENsYXNzKCcudWktdGltZXBpY2tlci1jb250YWluZXInLCB0aGlzLm9wdGlvbnMuY3VycmVudExvY2FsZSA9PT0gJ0FSJyA/ICdydGwnIDogJ2x0cicpO1xyXG5cclxuXHRcdFx0XHR0aGlzLiRpbnB1dC5wcm9wKCdyZWFkb25seScsICF0aGlzLm9wdGlvbnMuaXNUeXBlRW5hYmxlZCk7XHJcblx0XHRcdFx0dGhpcy4kaW5wdXQucHJvcCgncGxhY2Vob2xkZXInLCB0aGlzLm9wdGlvbnMudGltZUZvcm1hdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XHJcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBIb3VyUGlja2VyKGNvbmZpZyk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkhvdXJQaWNrZXIgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRhbGxJbnRhbmNlczogW10sXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBJbnB1dExBU0EgKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBzZXR1cElucHV0ID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHQkKCdib2R5Jykub2ZmKCdjbGljaycsICcjJyArIGNvbmZpZy5sYWJlbElkKTtcclxuXHRcdCQoJ2JvZHknKS5vZmYoJ2JsdXIgY2hhbmdlIGlucHV0JywgJyMnICsgY29uZmlnLmlucHV0SWQpO1xyXG5cclxuXHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xyXG5cdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkuY3NzKCd3aWR0aCcsICcxMDAlJyk7XHJcblxyXG5cdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuaGlkZSgpO1xyXG5cdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkuc2hvdygpO1xyXG5cclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5oYW5kbGVQcm9tcHQoY29uZmlnKTtcclxuXHJcblx0XHQkKCdib2R5Jykub24oJ2NsaWNrJywgJyMnICsgY29uZmlnLmxhYmVsSWQsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKS5oaWRlKCk7XHJcblx0XHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLnNob3coKTtcclxuXHRcdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuZm9jdXMoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJ2JvZHknKS5vbignYmx1cicsICcjJyArIGNvbmZpZy5pbnB1dElkLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmhhbmRsZVByb21wdChjb25maWcpO1xyXG5cdFx0XHQkKCcjJyArIGNvbmZpZy5pbnB1dElkKS5oaWRlKCk7XHJcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLnNob3coKTtcclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmhhbmRsZVByb21wdChjb25maWcpO1xyXG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5hcHBseU1hcmtpbmcoeyB0YXJnZXQ6IGNvbmZpZy5sYWJlbElkIH0pO1xyXG5cdFx0XHR9LCAyNTApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnYm9keScpLm9uKCdjaGFuZ2UgaW5wdXQnLCAnIycgKyBjb25maWcuaW5wdXRJZCwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLnRleHQoJCgnIycgKyBjb25maWcuaW5wdXRJZCkudmFsKCkpO1xyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuYXBwbHlNYXJraW5nKHsgdGFyZ2V0OiAncGFnZScgfSk7XHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR2YXIgaGFuZGxlUHJvbXB0ID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRpZiAoISQoJyMnICsgY29uZmlnLmlucHV0SWQpLnZhbCgpLmxlbmd0aCkge1xyXG5cdFx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKVxyXG5cdFx0XHRcdC50ZXh0KCQoJyMnICsgY29uZmlnLmlucHV0SWQpLnByb3AoJ3BsYWNlaG9sZGVyJykpXHJcblx0XHRcdFx0LmNzcygnY29sb3InLCAnIzk5OScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZClcclxuXHRcdFx0XHQudGV4dCgkKCcjJyArIGNvbmZpZy5pbnB1dElkKS52YWwoKSlcclxuXHRcdFx0XHQuY3NzKCdjb2xvcicsICcnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgPSBTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgPSBTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgfHwge307XHJcblx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LnNldHVwSW5wdXQgPSBzZXR1cElucHV0O1xyXG5cdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5oYW5kbGVQcm9tcHQgPSBoYW5kbGVQcm9tcHQ7XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuXHRjbGFzcyBJbnB1dFdpdGhDbGVhciB7XHJcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kaW5wdXQgPSB0aGlzLiR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZV0nKTtcclxuXHRcdFx0dGhpcy4kY2xlYXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aENsZWFyLWNsZWFyJyk7XHJcblx0XHRcdHRoaXMuJG5vdGlmeUxpbmsgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aENsZWFyLW5vdGlmeS1saW5rJyk7XHJcblx0XHRcdHRoaXMuJHdpZGdldFNoaWVsZCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoQ2xlYXItLXNoaWVsZCcpO1xyXG5cdFx0XHR0aGlzLm9uSW5pdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9uSW5pdCgpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2tleXVwJywgZSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuJGlucHV0LnZhbCgpICE9PSAnJykgdGhpcy4kY2xlYXIuc2hvdygpO1xyXG5cdFx0XHRcdGVsc2UgdGhpcy4kY2xlYXIuc2hvdygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJGlucHV0Lm9uKCdibHVyJywgKCkgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLiRpbnB1dC52YWwoKSA9PT0gJycpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCQoJy5kYXRlcmFuZ2VwaWNrZXI6dmlzaWJsZScpLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLiRjbGVhci5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuJG5vdGlmeUxpbmsudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kY2xlYXIub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCgnJyk7XHJcblx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xyXG5cdFx0XHRcdHRoaXMuJG5vdGlmeUxpbmsudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNTaGllbGQpIHtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLiR3aWRnZXRTaGllbGQuaGlkZSgpO1xyXG5cdFx0XHRcdH0sIHRoaXMuY29uZmlnLnNoaWVsZFRpbWVvdXQpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5zaGllbGRUaW1lb3V0ID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0U2hpZWxkLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IElucHV0V2l0aENsZWFyKGNvbmZpZykpO1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuSW5wdXRXaXRoQ2xlYXIgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0fTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG5cdGNsYXNzIElucHV0V2l0aExpc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XHJcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XHJcblx0XHRcdHRoaXMuJGxpc3QgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3RfX0xpc3QnKTtcclxuXHJcblx0XHRcdHRoaXMuJGlucHV0LnZhbCgnJyk7XHJcblxyXG5cdFx0XHR0aGlzLm9uSW5pdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9uSW5pdCgpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2tleXVwJywgZSA9PiB7XHJcblx0XHRcdFx0Ly8gR2V0dGluZyBlbGVtZW50cyBhZ2FpbiBpbiBvcmRlciB0byB3b3JrIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgY2xvbmVkIChlLmcuIHdoZW4gdXNpbmcgaW5zaWRlIEFjdGlvbnNNZW51KVxyXG5cdFx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke3RoaXMuY29uZmlnLndpZGdldElkfWApO1xyXG5cdFx0XHRcdGNvbnN0ICRpbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlXScpO1xyXG5cdFx0XHRcdGNvbnN0ICRsaXN0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19MaXN0Jyk7XHJcblx0XHRcdFx0dGhpcy4kaGlkZGVuSW5wdXQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3RfX0hpZGRlbklucHV0IGlucHV0Jyk7XHJcblxyXG5cdFx0XHRcdGlmICgkaW5wdXQudmFsKCkudHJpbSgpICE9PSAnJykge1xyXG5cdFx0XHRcdFx0JGxpc3QuZW1wdHkoKTtcclxuXHJcblx0XHRcdFx0XHQkbGlzdC5hcHBlbmQoYDxkaXY+PGI+Q3JlYXRlOjwvYj4gJHskaW5wdXQudmFsKCl9PC9kaXY+YCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCEkbGlzdC5pcygnOnZpc2libGUnKSkgJGxpc3Quc2hvdygpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkbGlzdC5oaWRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJGxpc3Qub24oJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgJGxpbmtOb3RpZnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3Qtbm90aWZ5LWxpbmsnKTtcclxuXHRcdFx0XHRjb25zdCAkbGlzdCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoTGlzdF9fTGlzdCcpO1xyXG5cdFx0XHRcdGNvbnN0ICRpbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlXScpO1xyXG5cclxuXHRcdFx0XHR0aGlzLiRoaWRkZW5JbnB1dC52YWwoJGlucHV0LnZhbCgpKTtcclxuXHRcdFx0XHR0aGlzLiRoaWRkZW5JbnB1dC5jaGFuZ2UoKTtcclxuXHJcblx0XHRcdFx0JGxpbmtOb3RpZnkuY2xpY2soKTtcclxuXHRcdFx0XHQkbGlzdC5oaWRlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBJbnB1dFdpdGhMaXN0KGNvbmZpZykpO1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuSW5wdXRXaXRoTGlzdCA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHR9O1xyXG59KSgpO1xyXG4iLCIvKiBDb21wb25lbnQgTGluZUFkZCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZXRXaWR0aChjb25maWcud2lkZ2V0SWQpO1xyXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTGluZUFkZC53aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcclxuXHJcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoKCkgPT4gc2V0V2lkdGgoY29uZmlnLndpZGdldElkKSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS5MaW5lQWRkJywgKCkgPT4gc2V0V2lkdGgoY29uZmlnLndpZGdldElkKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0V2lkdGggPSBmdW5jdGlvbih3aWRnZXRJZCkge1xyXG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKGAjJHt3aWRnZXRJZCB8fCBTYXBwaGlyZVdpZGdldHMuTGluZUFkZC53aWRnZXRJZH1gKTtcclxuXHRcdFx0Y29uc3Qgd2lkdGhzID0gW107XHJcblxyXG5cdFx0XHRmb3IgKGkgPSAxOyBpIDwgODsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IG1heFdpZHRoQ29udGVudCA9IE1hdGgubWF4LmFwcGx5KFxyXG5cdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdCR3aWRnZXRcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5sYWNvbCcgKyBpKVxyXG5cdFx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAkKHRoaXMpLndpZHRoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5nZXQoKVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHdpZHRocy5wdXNoKG1heFdpZHRoQ29udGVudCk7XHJcblx0XHRcdFx0JHdpZGdldC5maW5kKCcubGFjb2wnICsgaSkud2lkdGgobWF4V2lkdGhDb250ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMTAwKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuTGluZUFkZCA9IHsgY3JlYXRlLCBzZXRXaWR0aCB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IExpbmVEZXRhaWxzRXhwYW5kQm94ICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGluaXQgPSBjb25maWcgPT4ge1xyXG5cdFx0JChgIyR7Y29uZmlnLndpZGdldElkfSArIC5MaW5lRGV0YWlsc0V4cGFuZEJveF9hY3Rpb25gKS5jbGljayhldmVudCA9PiB7XHJcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXQoY29uZmlnKSk7XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5MaW5lRGV0YWlsc0V4cGFuZEJveCA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgTG9jYXRpb25Cb3ggKi9cclxuU2FwcGhpcmVXaWRnZXRzLkxvY2F0aW9uQm94ID0gZnVuY3Rpb24od2lkZ2V0SWQpIHtcclxuXHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XHJcblxyXG5cdGlmICgkY29tcG9uZW50Lmhhc0NsYXNzKCdPbicpKSB7XHJcblx0XHQkKCcuRGlzYWJsZVJvb20nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdPZmYnKVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnT24nKTtcclxuXHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdC5wYXJlbnQoJy5Sb29tQm94JylcclxuXHRcdFx0XHQuY3NzKHtcclxuXHRcdFx0XHRcdG9wYWNpdHk6ICcxJyxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnU2VsZWN0ZWQnKTtcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkY29tcG9uZW50XHJcblx0XHRcdC5hZGRDbGFzcygnT24nKVxyXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ09mZicpXHJcblx0XHRcdC5wYXJlbnQoJy5Sb29tQm94JylcclxuXHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ1NlbGVjdGVkJyk7XHJcblxyXG5cdFx0JCgnLkRpc2FibGVSb29tOm5vdCgjJyArIHdpZGdldElkICsgJyknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdPZmYnKTtcclxuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnT24nKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJy5EaXNhYmxlUm9vbS5PZmYnKVxyXG5cdFx0XHQucGFyZW50KCcuUm9vbUJveCcpXHJcblx0XHRcdC5jc3Moe1xyXG5cdFx0XHRcdG9wYWNpdHk6ICcwLjUwJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xyXG5cdH1cclxufTtcclxuIiwiLyogQ29tcG9uZW50IE1haW5JbnRlcmFjdGl2ZUNhcmQgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gW107XG5cdHZhciBkZWZhdWx0RHVyYXRpb24gPSAzMDA7XG5cblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhbGxNYWluSW50ZXJhY3RpdmVDYXJkc1tpXS5jb25maWcud2lkZ2V0SWQgPT09IGNvbmZpZy53aWRnZXRJZCkge1xuXHRcdFx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IE1haW5JbnRlcmFjdGl2ZUNhcmQoY29uZmlnKTtcblx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5wdXNoKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKTtcblxuXHRcdGlmICghISFTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkICYmICEhb3NBamF4QmFja2VuZCkge1xuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWxsKCk7XG5cdFx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCA9IHRydWU7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBNYWluSW50ZXJhY3RpdmVDYXJkID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLmlzTG9ja2VkT25DbG9zZSA9IGZhbHNlO1xuXHRcdHRoaXMuaXNPcGVuID0gY29uZmlnLmlzT3Blbjtcblx0XHR0aGlzLmlzRW5hYmxlZCA9IGNvbmZpZy5pc0VuYWJsZWQ7XG5cdFx0dGhpcy5pc1NlbGVjdGFibGUgPSBjb25maWcuaXNTZWxlY3RhYmxlO1xuXHRcdHRoaXMuYWxsb3dPcGVuaW5nID0gY29uZmlnLmFsbG93T3BlbmluZztcblx0XHR0aGlzLmFsbG93TXVsdGlwbGVPcGVuID0gY29uZmlnLmFsbG93TXVsdGlwbGVPcGVuO1xuXHRcdHRoaXMuZW1pdE5vdGlmeU9uT3BlbiA9IGNvbmZpZy5lbWl0Tm90aWZ5T25PcGVuO1xuXHRcdHRoaXMuaGlkZUFjdGlvbnNPbk9wZW4gPSBjb25maWcuaGlkZUFjdGlvbnNPbk9wZW47XG5cdFx0dGhpcy5oaWRlQ2FwdGlvbk9uT3BlbiA9IGNvbmZpZy5oaWRlQ2FwdGlvbk9uT3Blbjtcblx0XHR0aGlzLmhpZGVUaXRsZU9uT3BlbiA9IGNvbmZpZy5oaWRlVGl0bGVPbk9wZW47XG5cdFx0dGhpcy5oaWRlU3ViVGl0bGVPbk9wZW4gPSBjb25maWcuaGlkZVN1YlRpdGxlT25PcGVuO1xuXHRcdHRoaXMuaGVhZGVySGVpZ2h0V2hlbk9wZW4gPSBjb25maWcuaGVhZGVySGVpZ2h0V2hlbk9wZW47XG5cdFx0dGhpcy5NYWluSW50ZXJhY3RpdmVDYXJkRmFrZU5vdGlmeUlkID0gY29uZmlnLm1haW5JbnRlcmFjdGl2ZUNhcmRGYWtlTm90aWZ5SWQ7XG5cblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0dGhpcy4kd2lkZ2V0LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdHRoaXMuJGNhcmQgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCcpO1xuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyJyk7XG5cdFx0dGhpcy4kaGVhZGVyVGV4dCA9IHRoaXMuJGhlYWRlci5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdGV4dCcpO1xuXHRcdHRoaXMuJGV4cGFuZEljb24gPSB0aGlzLiRoZWFkZXIuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtZXhwYW5kLWljb24nKTtcblx0XHR0aGlzLiRib2R5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiBkaXYgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1ib2R5Jyk7XG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLWFjdGlvbnMnXG5cdFx0KTtcblx0XHR0aGlzLiRjYXB0aW9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdGV4dC1jYXB0aW9uJ1xuXHRcdCk7XG5cdFx0dGhpcy4kdGl0bGUgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LXRpdGxlJ1xuXHRcdCk7XG5cdFx0dGhpcy4kc3ViVGl0bGUgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LXN1YnRpdGxlJ1xuXHRcdCk7XG5cdFx0dGhpcy4kc2VsZWN0VHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItc2VsZWN0YWJsZSA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci1zZWxlY3RhYmxlLXRyaWdnZXInXG5cdFx0KTtcblx0XHR0aGlzLiRzZWxlY3RQbGFjZWhvbGRlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXNlbGVjdGFibGUtcGxhY2Vob2xkZXInXG5cdFx0KTtcblx0XHR0aGlzLiR0cmlnZ2VyUGxhY2Vob2xkZXIgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXRyaWdnZXJBY3Rpb24tcGxhY2Vob2xkZXInXG5cdFx0KTtcblxuXHRcdGlmICh0aGlzLiR0cmlnZ2VyUGxhY2Vob2xkZXIuZmluZCgnYScpLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJHRyaWdnZXJQbGFjZWhvbGRlci5maW5kKCdhJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR0aGlzLm9wZW4oZmFsc2UsIC0xKTtcblx0XHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2ZvcmNlT3BlbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3ModGhpcy5oZWFkZXJIZWlnaHRXaGVuT3BlbiArICdIZWFkZXInKTtcblxuXHRcdGlmICh0aGlzLmFsbG93T3BlbmluZykge1xuXHRcdFx0dGhpcy4kY2FyZC5hZGRDbGFzcygnYWxsb3dPcGVuaW5nJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcblxuXHRcdHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xuXHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24obXV0YXRpb24sIGluZGV4KSB7XG5cdFx0XHRcdF90aGlzLmhhbmRsZUhlYWRlcldpdGhBYnNvbHV0ZUJ1dHRvbnMoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcud2lkZ2V0SWQpLCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlczogZmFsc2UsXG5cdFx0fSk7XG5cdH07XG5cblx0TWFpbkludGVyYWN0aXZlQ2FyZC5wcm90b3R5cGUuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0aWYgKCEhdGhpcy4kYm9keS5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zJykubGVuZ3RoICYmIHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR2YXIgYWJzb2x1dGVBY3Rpb25zV2lkdGggPSBNYXRoLm1heC5hcHBseShcblx0XHRcdFx0TWF0aCxcblx0XHRcdFx0dGhpcy4kYm9keVxuXHRcdFx0XHRcdC5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zJylcblx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXQoKVxuXHRcdFx0KTtcblx0XHRcdHZhciBoZWFkZXJNYXhXaWR0aCA9IHRoaXMuJGhlYWRlci53aWR0aCgpIC0gYWJzb2x1dGVBY3Rpb25zV2lkdGg7XG5cdFx0XHRpZiAoaGVhZGVyTWF4V2lkdGggPiAxMCkge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXJUZXh0LmNzcyh7XG5cdFx0XHRcdFx0bWF4V2lkdGg6IGhlYWRlck1heFdpZHRoICsgJ3B4Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRib2R5XG5cdFx0XHRcdC5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zIC5NYWluSW50ZXJhY3RpdmVDYXJkLS1jbG9zZScpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kaGVhZGVyXG5cdFx0XHQuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLW9wZW46bm90KFtkaXNhYmxlZF0pJylcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0X3RoaXMub3Blbih0cnVlKTtcblx0XHRcdH0pO1xuXHRcdHRoaXMuJGhlYWRlclxuXHRcdFx0LmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLS1jbG9zZScpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0XHR9KTtcblx0XHRpZiAodGhpcy5hbGxvd09wZW5pbmcpIHtcblx0XHRcdGNvbnN0IGNsaWNrQWN0aW9uID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdGlmICgkKGV2dC50YXJnZXQpLmhhc0NsYXNzKCdCdXR0b24nKSkge1xuXHRcdFx0XHRcdC8vIHRoZSB1c2VyIGNsaWNrZWQgb24gYSBCdXR0b24gaW5zaWRlIHRoZSBoZWFkZXIsIG5vdGhpbmcgdG8gZG8gaGVyZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChfdGhpcy5pc09wZW4pIHtcblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0X3RoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5sZW5ndGggPT09IDEgJiZcblx0XHRcdFx0XHRcdFx0IV90aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuaGFzQ2xhc3MoJ2NrZV93eXNpd3lnX2ZyYW1lJylcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHQvLyBkbyBub3QgY2xvc2Ugd2hlbiBhbmQgaWZyYW1lIGV4aXN0c1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFjdGlvbnMuZmluZCgnYScpLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFjdGlvbnMuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLWNsb3NlJykubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdC8vIGRvIG5vdCBjbG9zZSB3aGVuIHRoZSBjYXJkIGhhcyBhY3Rpb25zXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5jbG9zZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5vcGVuKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy4kaGVhZGVyVGV4dC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjbGlja0FjdGlvbihlKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kZXhwYW5kSWNvbi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjbGlja0FjdGlvbihlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAodGhpcy5pc1NlbGVjdGFibGUpIHtcblx0XHRcdHRoaXMuJHNlbGVjdFRyaWdnZXIub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKF90aGlzLiRzZWxlY3RQbGFjZWhvbGRlci5maW5kKCdhJykubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0X3RoaXMuJHNlbGVjdFBsYWNlaG9sZGVyLmZpbmQoJ2EnKS5jbGljaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignWW91IG5lZWQgMSBsaW5rIGluIHRoaXMgcGxhY2Vob2xkZXIuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oc2VuZE5vdGlmeSwgZHVyYXRpb24pIHtcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBkZWZhdWx0RHVyYXRpb247XG5cdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xuXHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2lzT3BlbicpO1xuXHRcdGlmICh0aGlzLmhpZGVBY3Rpb25zT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRhY3Rpb25zLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhpZGVUaXRsZU9uT3Blbikge1xuXHRcdFx0dGhpcy4kdGl0bGUuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVN1YlRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRzdWJUaXRsZS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlQ2FwdGlvbk9uT3Blbikge1xuXHRcdFx0dGhpcy4kY2FwdGlvbi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5lbWl0Tm90aWZ5T25PcGVuKSB7XG5cdFx0XHRpZiAoc2VuZE5vdGlmeSkge1xuXHRcdFx0XHRPc05vdGlmeVdpZGdldCh0aGlzLk1haW5JbnRlcmFjdGl2ZUNhcmRGYWtlTm90aWZ5SWQsICdvcGVuJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy4kdHJpZ2dlcikge1xuXHRcdFx0dGhpcy4kdHJpZ2dlci5jbGljaygpO1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0XHR0aGlzLiRib2R5LnNsaWRlRG93bihkdXJhdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRib2R5LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmhhc0NsYXNzKCdja2Vfd3lzaXd5Z19mcmFtZScpKSB7XG5cdFx0XHR2YXIgaWZyYW1lQ29udGVudHMgPSB0aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuY29udGVudHMoKTtcblx0XHRcdGlmcmFtZUNvbnRlbnRzLmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLWlmcmFtZS1hY3Rpb25zJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5hbGxvd011bHRpcGxlT3Blbikge1xuXHRcdFx0YWxsTWFpbkludGVyYWN0aXZlQ2FyZHMuZm9yRWFjaChpdGVtID0+IChpdGVtICE9PSB0aGlzICYmIGl0ZW0uYWxsb3dPcGVuaW5nID8gaXRlbS5jbG9zZShkdXJhdGlvbikgOiBudWxsKSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oZHVyYXRpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgZGVmYXVsdER1cmF0aW9uO1xuXHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cdFx0dGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XG5cdFx0aWYgKHRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5sZW5ndGggPT09IDEgJiYgIXRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5oYXNDbGFzcygnY2tlX3d5c2l3eWdfZnJhbWUnKSkge1xuXHRcdFx0dGhpcy4kd2lkZ2V0XG5cdFx0XHRcdC5maW5kKCdpZnJhbWUnKVxuXHRcdFx0XHQuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtaWZyYW1lLWFjdGlvbnMnKVxuXHRcdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdH1cblx0XHR0aGlzLiRib2R5LnNsaWRlVXAoZHVyYXRpb24sIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHNlbGYuJGNhcmQuaGFzQ2xhc3MoJ2ZvcmNlT3BlbicpKSB7XG5cdFx0XHRcdHNlbGYuJGNhcmQucmVtb3ZlQ2xhc3MoJ2ZvcmNlT3BlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmhpZGVBY3Rpb25zT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRhY3Rpb25zLnNob3coKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiR0aXRsZS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVN1YlRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRzdWJUaXRsZS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZUNhcHRpb25Pbk9wZW4pIHtcblx0XHRcdHRoaXMuJGNhcHRpb24uY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuJGhlYWRlci53aWR0aCgpIC0gdGhpcy4kYWN0aW9ucy53aWR0aCgpID4gMTApIHtcblx0XHRcdHRoaXMuJGhlYWRlclRleHQuY3NzKHtcblx0XHRcdFx0bWF4V2lkdGg6IHRoaXMuJGhlYWRlci53aWR0aCgpIC0gdGhpcy4kYWN0aW9ucy53aWR0aCgpICsgJ3B4Jyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5pc09wZW47XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0YWxsOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBhbGxNYWluSW50ZXJhY3RpdmVDYXJkcztcblx0XHR9LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0aWYgKCEhJCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQnKS5sZW5ndGgpIHtcblx0XHRpZiAoISEhU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCkge1xuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWxsKCk7XG5cdFx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hbGwoKTtcblx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdH0pO1xuXHR9LCAxMDAwKTtcbn0pO1xuIiwiLyogQ29tcG9uZW50IE1lbnVCYXIgKi9cclxuU2FwcGhpcmVXaWRnZXRzLk1lbnVCYXIgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyICRtZW51V2lkZ2V0ID0gJCgnIycgKyBjb25maWcubWVudVdpZGdldCk7XHJcblxyXG5cdFx0dmFyIG1lbnVSZXNpZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBuYXZXaWR0aCA9IDA7XHJcblx0XHRcdHZhciBhdmFpbGFiZUVzcGFjZSA9ICRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2l0ZW0nKS53aWR0aCgpO1xyXG5cclxuXHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfaXRlbSAuTWVudUl0ZW0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdG5hdldpZHRoICs9ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAobmF2V2lkdGggPiBhdmFpbGFiZUVzcGFjZSkge1xyXG5cdFx0XHRcdHZhciBsYXN0SXRlbSA9ICRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2l0ZW0gLk1lbnVJdGVtJykubGFzdCgpO1xyXG5cdFx0XHRcdGxhc3RJdGVtLmF0dHIoJ2RhdGEtd2lkdGgnLCBsYXN0SXRlbS5vdXRlcldpZHRoKHRydWUpKTtcclxuXHRcdFx0XHRsYXN0SXRlbS5wcmVwZW5kVG8oJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfX2V4dHJhQ29udGFpbmVyJykpO1xyXG5cdFx0XHRcdG1lbnVSZXNpZGVyKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyIGZpcnN0TW9yZUVsZW1lbnQgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXIgLk1lbnVJdGVtJykuZmlyc3QoKTtcclxuXHRcdFx0XHRpZiAobmF2V2lkdGggKyBmaXJzdE1vcmVFbGVtZW50LmRhdGEoJ3dpZHRoJykgPCBhdmFpbGFiZUVzcGFjZSkge1xyXG5cdFx0XHRcdFx0Zmlyc3RNb3JlRWxlbWVudC5pbnNlcnRBZnRlcigkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtIC5NZW51SXRlbScpLmxhc3QoKSk7XHJcblx0XHRcdFx0XHRtZW51UmVzaWRlcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCEkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXInKS5pcygnOmVtcHR5JykpIHtcclxuXHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0nKS5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2V4dHJhSXRlbScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnVJdGVtJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHQhJCh0aGlzKVxyXG5cdFx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0XHQuaGFzQ2xhc3MoJ01lbnViYXJfX2V4dHJhQ29udGFpbmVyJylcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlSW5kaWNhdG9yJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLmFjdGl2ZUluZGljYXRvcicpLmFkZENsYXNzKCdzaGFkb3cnKTtcclxuXHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpXHJcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnc2hvdycpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZUluZGljYXRvcicpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpXHJcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnc2hvdycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuZmluZCgnLk1lbnVJdGVtX3N1Ykl0ZW1zJylcclxuXHRcdFx0XHRcdC50b2dnbGVDbGFzcygnc2hvdycpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0gLmljb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfX2V4dHJhQ29udGFpbmVyICcpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKGRvY3VtZW50KS5tb3VzZXVwKGUgPT4ge1xyXG5cdFx0XHR2YXIgJG1lbnUgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudUl0ZW0uYWN0aXZlJyk7XHJcblx0XHRcdHZhciAkbW9yZU9wdGlvbnMgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0nKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSB0YXJnZXQgb2YgdGhlIGNsaWNrIGlzbid0IHRoZSBtZW51IG9yIGEgZGVzY2VuZGFudCBvZiB0aGUgbWVudVxyXG5cdFx0XHRpZiAoJG1lbnUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGlmICghJG1lbnUuaXMoZS50YXJnZXQpICYmICRtZW51LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHQkbWVudS5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdFx0XHRcdFx0JCgnLmFjdGl2ZUluZGljYXRvcicpLnJlbW92ZUNsYXNzKCdzaGFkb3cnKTtcclxuXHRcdFx0XHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51SXRlbS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoISRtb3JlT3B0aW9ucy5pcyhlLnRhcmdldCkgJiYgJG1vcmVPcHRpb25zLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0JG1vcmVPcHRpb25zLmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdFx0JCgnLmFjdGl2ZUluZGljYXRvcicpLnJlbW92ZUNsYXNzKCdzaGFkb3cnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRtZW51UmVzaWRlcigpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBNdWx0aXBsZVNlbGVjdGlvbkJ1dHRvbiAqL1xyXG5TYXBwaGlyZVdpZGdldHMuTXVsdGlwbGVTZWxlY3Rpb25CdXR0b24gPSBmdW5jdGlvbihXcmFwcGVySWQpIHtcclxuXHRjb25zdCAkd2lkZ2V0ID0gJChXcmFwcGVySWQpO1xyXG5cdGNvbnN0ICRjb250cm9sID0gJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuXHJcblx0aWYgKCQoV3JhcHBlcklkICsgJyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5pcygnOmRpc2FibGVkJykpIHtcclxuXHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0fVxyXG5cclxuXHRpZiAoJChXcmFwcGVySWQgKyAnIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHQkd2lkZ2V0LmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fVxyXG5cclxuXHQkd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0ICRwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG5cclxuXHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSAkcGFyZW50LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdGVsc2UgJHBhcmVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdCR3aWRnZXQuZmluZCgnLk11bHRpcGxlU2VsZWN0aW9uQnV0dG9uLWxhYmVsJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHQkY29udHJvbFswXS5jbGljaygpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkY29udHJvbC5pcygnOmNoZWNrZWQnKSkgJHdpZGdldC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdGVsc2UgJHdpZGdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9LCAxMCk7XHJcblx0fSk7XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBDb25maXJtYXRpb25QYW5lbDNPcHRpb25zIENvbmZpcm1hdGlvblBhbmVsIHNhbWUgamF2YXNjcmlwdCBjb2RlKi9cclxuXHJcblNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbCA9IHtcclxuXHRpc0FueVBhbmVsT3BlbmVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ1BhbmVsT3BlbmVkJykgJiYgJCgnLlBhbmVsQ29udGFpbmVyOnZpc2libGUnKS5sZW5ndGg7XHJcblx0fSxcclxuXHJcblx0dG9nZ2xlUGFuZWw6IGZ1bmN0aW9uKFBhbmVsSWQpIHtcclxuXHRcdGlmICghT3NWYWxpZGF0b3JPblN1Ym1pdCgpKSByZXR1cm47XHJcblxyXG5cdFx0aWYgKCFTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUGFuZWwuaXNBbnlQYW5lbE9wZW5lZCgpKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHRcdFx0JCgnIycgKyBQYW5lbElkKS5mYWRlSW4oMTQwKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnIycgKyBQYW5lbElkKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0XHQuc2xpZGVUb2dnbGUoMTUwKTtcclxuXHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50KSB7XHJcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlJlbW90ZUFwcG9pbnRtZW50LnNldE1vZGFsTWluaW1pemVkKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRjbG9zZVBhbmVsOiBmdW5jdGlvbihQYW5lbElkKSB7XHJcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XHJcblx0XHQkKCcjJyArIFBhbmVsSWQpLmZhZGVPdXQoMTQwKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjJyArIFBhbmVsSWQpXHJcblx0XHRcdFx0LmZpbmQoJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0LnNsaWRlVXAoMTUwKTtcclxuXHRcdH0sIDEwMCk7XHJcblx0fSxcclxuXHJcblx0c2V0UGFuZWxCZWhhdmlvcjogZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuUGFuZWxbY29uZmlybWF0aW9uLXBhbmVsLXRyaWdnZXItZWxlbWVudGlkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB0aGlzX3BhbmVsID0gJCh0aGlzKTtcclxuXHRcdFx0JCgnIycgKyB0aGlzX3BhbmVsLmF0dHIoJ2NvbmZpcm1hdGlvbi1wYW5lbC10cmlnZ2VyLWVsZW1lbnRpZCcpICsgJycpXHJcblx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC50b2dnbGVQYW5lbCh0aGlzX3BhbmVsLmF0dHIoJ2lkJykpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC5zZXRQYW5lbEJlaGF2aW9yKCk7XHJcblx0aWYgKG9zQWpheEJhY2tlbmQuRXZlbnRIYW5kbGVycy5BZnRlckFqYXhSZXF1ZXN0LnRvU3RyaW5nKCkuaW5kZXhPZignc2V0UGFuZWxCZWhhdmlvcicpID09IC0xKSB7XHJcblx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC5zZXRQYW5lbEJlaGF2aW9yKTtcclxuXHR9XHJcbn0pO1xyXG4iLCIvKiBDb21wb25lbnQgQ29uZmlybWF0aW9uUG9wdXAgKi9cclxudmFyIF9pc0luSWZyYW1lID0gd2luZG93LmZyYW1lRWxlbWVudCAhPSB1bmRlZmluZWQgfHwgZmFsc2U7XHJcblNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cCA9IHtcclxuXHRpc0FueUNvbmZpcm1hdGlvbk9wZW5lZDogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcclxuXHRcdFx0cmV0dXJuIHdpbmRvdy50b3AuJCgnYm9keScpLmhhc0NsYXNzKCdjb25maXJtYXRpb24tb3BlbmVkJykgJiYgd2luZG93LnRvcC4kKCcuY29uZmlybS1jb250YWluZXI6dmlzaWJsZScpLmxlbmd0aDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ2NvbmZpcm1hdGlvbi1vcGVuZWQnKSAmJiAkKCcuY29uZmlybS1jb250YWluZXI6dmlzaWJsZScpLmxlbmd0aDtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHR0b2dnbGVDb25maXJtOiBmdW5jdGlvbihfaWQsIF9xdWVzdGlvbiwgX21lc3NhZ2UsIF9ub3RpZnlJZCwgX0hhc05vdGlmeU9uQ2FuY2VsKSB7XHJcblx0XHRpZiAoIU9zVmFsaWRhdG9yT25TdWJtaXQoKSkgcmV0dXJuO1xyXG5cclxuXHRcdGlmICghdGhpcy5pc0FueUNvbmZpcm1hdGlvbk9wZW5lZCgpKSB7XHJcblx0XHRcdHZhciBfYm9keSA9ICQoJ2JvZHknKTtcclxuXHRcdFx0dmFyIF9ib2R5SlMgPSBkb2N1bWVudC5ib2R5O1xyXG5cdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcclxuXHRcdFx0XHRfYm9keSA9IHdpbmRvdy50b3AuJCgnYm9keScpO1xyXG5cdFx0XHRcdF9ib2R5SlMgPSB3aW5kb3cudG9wLmRvY3VtZW50LmJvZHk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF9ib2R5LmFkZENsYXNzKCdjb25maXJtYXRpb24tb3BlbmVkJyk7XHJcblxyXG5cdFx0XHR2YXIgX2NvbmZpcm1JZCA9ICdjb25maXJtXycgKyBfaWQ7XHJcblxyXG5cdFx0XHR2YXIgX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG5cdFx0XHRfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBfY29uZmlybUlkKTtcclxuXHRcdFx0X2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0gY29uZmlybS13YicpO1xyXG5cdFx0XHRfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29uZmlybS10cmlnZ2VyLWVsZW1lbnRpZCcsIF9pZCk7XHJcblxyXG5cdFx0XHR2YXIgX2JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuXHRcdFx0X2JhY2tncm91bmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLWJhY2tncm91bmQgY29uZmlybS13YicpO1xyXG5cdFx0XHRfYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JnXycgKyBfY29uZmlybUlkKTtcclxuXHRcdFx0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChfYmFja2dyb3VuZCk7XHJcblxyXG5cdFx0XHR2YXIgX2NvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuXHRcdFx0X2NvbmZpcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLWNvbnRhaW5lciBjb25maXJtLXdiJyk7XHJcblx0XHRcdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2NvbmZpcm0pO1xyXG5cclxuXHRcdFx0dmFyIF9jb25maXJtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuXHRcdFx0X2NvbmZpcm1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tdGl0bGUnKTtcclxuXHRcdFx0dmFyIF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKF9xdWVzdGlvbik7XHJcblx0XHRcdF9jb25maXJtVGl0bGUuYXBwZW5kQ2hpbGQoX3RpdGxlKTtcclxuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1UaXRsZSk7XHJcblxyXG5cdFx0XHR2YXIgX2NvbmZpcm1Nc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuXHRcdFx0X2NvbmZpcm1Nc2cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLW1lc3NhZ2UnKTtcclxuXHJcblx0XHRcdF9jb25maXJtTXNnLmlubmVySFRNTCA9IF9tZXNzYWdlOyAvKiBTZXQgSFRNTCB0byByZW5kZXIgdGhlIG1lc3NhZ2UgSFRNTCB0YWdzLCBzaW1pbGFyIHRvIHRoZSBFc2NhcGUgQ29udGVudCBzZXQgYXMgTm8uICovXHJcblx0XHRcdF9jb25maXJtLmFwcGVuZENoaWxkKF9jb25maXJtTXNnKTtcclxuXHJcblx0XHRcdHZhciBfY29uZmlybUFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuXHRcdFx0X2NvbmZpcm1BY3Rpb25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybS1hY3Rpb25zJyk7XHJcblx0XHRcdF9jb25maXJtLmFwcGVuZENoaWxkKF9jb25maXJtQWN0aW9ucyk7XHJcblxyXG5cdFx0XHR2YXIgX25vQnRuTG5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpO1xyXG5cdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdCdXR0b24gVGhpcmQgTXVsdGlNYXJnaW5SaWdodDEwJyk7XHJcblx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoJ2NhbmNlbC1idXR0b24nLCAnY2FuY2VsLWJ1dHRvbicpO1xyXG5cdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKCd1aScsICdDb25maXJtTm8xJyk7XHJcblx0XHRcdGlmIChfSGFzTm90aWZ5T25DYW5jZWwgPT0gJ1RydWUnKSB7XHJcblx0XHRcdFx0aWYgKF9pc0luSWZyYW1lKSB7XHJcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxyXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXHJcblx0XHRcdFx0XHRcdCdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIicgK1xyXG5cdFx0XHRcdFx0XHRcdCdpZnJhbWVfJyArXHJcblx0XHRcdFx0XHRcdFx0X2lkICtcclxuXHRcdFx0XHRcdFx0XHQnXCIpLmNvbnRlbnRXaW5kb3cuT3NOb3RpZnlXaWRnZXQoXCInICtcclxuXHRcdFx0XHRcdFx0XHRfbm90aWZ5SWQgK1xyXG5cdFx0XHRcdFx0XHRcdCdcIixcIkNBTkNFTFwiKTsgU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArXHJcblx0XHRcdFx0XHRcdFx0X2NvbmZpcm1JZCArXHJcblx0XHRcdFx0XHRcdFx0J1wiKTsnXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxyXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXHJcblx0XHRcdFx0XHRcdCdPc05vdGlmeVdpZGdldChcIicgK1xyXG5cdFx0XHRcdFx0XHRcdF9ub3RpZnlJZCArXHJcblx0XHRcdFx0XHRcdFx0J1wiLFwiQ0FOQ0VMXCIpOyBTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICtcclxuXHRcdFx0XHRcdFx0XHRfY29uZmlybUlkICtcclxuXHRcdFx0XHRcdFx0XHQnXCIpOydcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xyXG5cdFx0XHRcdFx0X25vQnRuTG5rLnNldEF0dHJpYnV0ZShcclxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxyXG5cdFx0XHRcdFx0XHQnU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArIF9jb25maXJtSWQgKyAnXCIpOydcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXHJcblx0XHRcdFx0XHRcdCdvbmNsaWNrJyxcclxuXHRcdFx0XHRcdFx0J1NhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgKyBfY29uZmlybUlkICsgJ1wiKTsnXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIF9ub0J0biA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdObycpO1xyXG5cdFx0XHRfbm9CdG5MbmsuYXBwZW5kQ2hpbGQoX25vQnRuKTtcclxuXHRcdFx0X2NvbmZpcm1BY3Rpb25zLmFwcGVuZENoaWxkKF9ub0J0bkxuayk7XHJcblxyXG5cdFx0XHR2YXIgX3llc0J0bkxuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0EnKTtcclxuXHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0J1dHRvbiBTZXRBc1ZhbGlkIElzX0RlZmF1bHQnKTtcclxuXHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoJ2NhbmNlbC1idXR0b24nLCAnJyk7XHJcblx0XHRcdF95ZXNCdG5Mbmsuc2V0QXR0cmlidXRlKCd1aScsICdDb25maXJtWWVzMScpO1xyXG5cclxuXHRcdFx0aWYgKF9pc0luSWZyYW1lKSB7XHJcblx0XHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoXHJcblx0XHRcdFx0XHQnb25jbGljaycsXHJcblx0XHRcdFx0XHQnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCInICtcclxuXHRcdFx0XHRcdFx0J2lmcmFtZV8nICtcclxuXHRcdFx0XHRcdFx0X2lkICtcclxuXHRcdFx0XHRcdFx0J1wiKS5jb250ZW50V2luZG93Lk9zTm90aWZ5V2lkZ2V0KFwiJyArXHJcblx0XHRcdFx0XHRcdF9ub3RpZnlJZCArXHJcblx0XHRcdFx0XHRcdCdcIixcIk9LXCIpOyBTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICtcclxuXHRcdFx0XHRcdFx0X2NvbmZpcm1JZCArXHJcblx0XHRcdFx0XHRcdCdcIik7J1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoXHJcblx0XHRcdFx0XHQnb25jbGljaycsXHJcblx0XHRcdFx0XHQnT3NOb3RpZnlXaWRnZXQoXCInICtcclxuXHRcdFx0XHRcdFx0X25vdGlmeUlkICtcclxuXHRcdFx0XHRcdFx0J1wiLFwiT0tcIik7IFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgK1xyXG5cdFx0XHRcdFx0XHRfY29uZmlybUlkICtcclxuXHRcdFx0XHRcdFx0J1wiKTsnXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgX3llc0J0biA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdZZXMnKTtcclxuXHRcdFx0X3llc0J0bkxuay5hcHBlbmRDaGlsZChfeWVzQnRuKTtcclxuXHRcdFx0X2NvbmZpcm1BY3Rpb25zLmFwcGVuZENoaWxkKF95ZXNCdG5MbmspO1xyXG5cclxuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1BY3Rpb25zKTtcclxuXHJcblx0XHRcdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2NvbmZpcm0pO1xyXG5cclxuXHRcdFx0X2JvZHlKUy5hcHBlbmRDaGlsZChfY29udGFpbmVyKTtcclxuXHJcblx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xyXG5cdFx0XHRcdHdpbmRvdy50b3AuJCgnI2JnXycgKyBfY29uZmlybUlkKS5mYWRlSW4oMTQwKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0d2luZG93LnRvcFxyXG5cdFx0XHRcdFx0XHQuJCgnIycgKyBfY29uZmlybUlkKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLmNvbmZpcm0tY29udGFpbmVyJylcclxuXHRcdFx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XHJcblx0XHRcdFx0XHR3aW5kb3cudG9wLiQoJyMnICsgX2NvbmZpcm1JZCArICcgW2NhbmNlbC1idXR0b25dJykuZm9jdXMoKTtcclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQuc2V0TW9kYWxNaW5pbWl6ZWQoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcjYmdfJyArIF9jb25maXJtSWQpLmZhZGVJbigxNDApO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKCcjJyArIF9jb25maXJtSWQpXHJcblx0XHRcdFx0XHRcdC5maW5kKCcuY29uZmlybS1jb250YWluZXInKVxyXG5cdFx0XHRcdFx0XHQuc2xpZGVUb2dnbGUoMTUwKTtcclxuXHRcdFx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZCArICcgW2NhbmNlbC1idXR0b25dJykuZm9jdXMoKTtcclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Y2xvc2VDb25maXJtUG9wdXA6IGZ1bmN0aW9uKF9jb25maXJtSWQpIHtcclxuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnY29uZmlybWF0aW9uLW9wZW5lZCcpO1xyXG5cdFx0JCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKTtcclxuXHRcdCQoJyNiZ18nICsgX2NvbmZpcm1JZCkuZmFkZU91dCgxNDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZClcclxuXHRcdFx0XHQuZmluZCgnLmNvbmZpcm0tY29udGFpbmVyJylcclxuXHRcdFx0XHQuc2xpZGVVcCgxNTApO1xyXG5cdFx0XHQkKCcjJyArIF9jb25maXJtSWQpLnJlbW92ZSgpO1xyXG5cdFx0fSwgMTAwKTtcclxuXHR9LFxyXG5cclxuXHRjcmVhdGU6IGZ1bmN0aW9uKF9pZCwgX3F1ZXN0aW9uLCBfbWVzc2FnZSwgX25vdGlmeUlkLCBfSGFzTm90aWZ5T25DYW5jZWwpIHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjJyArIF9pZClcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLnRvZ2dsZUNvbmZpcm0oX2lkLCBfcXVlc3Rpb24sIF9tZXNzYWdlLCBfbm90aWZ5SWQsIF9IYXNOb3RpZnlPbkNhbmNlbCk7XHJcblx0XHRcdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcclxuXHRcdFx0XHRcdFx0d2luZG93LmZyYW1lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lbnUtaWQnLCBfaWQpO1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cuZnJhbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnaWZyYW1lXycgKyBfaWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IE1vZGFsUG9wdXAgKi9cclxuXHJcbnZhciBfaXNJbklmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gdW5kZWZpbmVkIHx8IGZhbHNlO1xyXG5cclxuU2FwcGhpcmVXaWRnZXRzLk1vZGFsUG9wdXAgPSB7XHJcblx0Y3JlYXRlOiBmdW5jdGlvbih3aWRnZXRJZCkge1xyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIFVzZSB0aGlzIGNvZGUgdG8gYXBwZW5kIHRoZSBjb21wb25lbnQgdG8gdGhlIHJvb3QgYm9keVxyXG5cdFx0XHQvLyB3aW5kb3cuZnJhbWVFbGVtZW50ICYmICQod2luZG93LmZyYW1lRWxlbWVudCkuY2xvc2VzdCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtYm9keScpLmxlbmd0aCA+IDBcclxuXHRcdFx0aWYgKGZhbHNlKSB7XHJcblx0XHRcdFx0Y29uc3QgJHBhcmVudEJvZHkgPSBwYXJlbnQuJCgnYm9keScpO1xyXG5cdFx0XHRcdGxldCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWR9YCk7XHJcblxyXG5cdFx0XHRcdGlmICgkcGFyZW50Qm9keS5maW5kKCR3aWRnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0JHBhcmVudEJvZHkuYXBwZW5kKFxyXG5cdFx0XHRcdFx0XHQkd2lkZ2V0XHJcblx0XHRcdFx0XHRcdFx0LndyYXAoJzxkaXYvPicpXHJcblx0XHRcdFx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0XHRcdFx0LmRldGFjaCgpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JHdpZGdldCA9IHBhcmVudC4kKGAjJHt3aWRnZXRJZH1gKTtcclxuXHRcdFx0XHRjb25zdCAkYnRuQ2xvc2UgPSAkd2lkZ2V0LmZpbmQoJy5tb2RhbFBvcHVwX2Nsb3NlJyk7XHJcblxyXG5cdFx0XHRcdCRidG5DbG9zZS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcclxuXHRcdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ3Nob3djbG9zZScpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcclxuXHRcdFx0XHRjb25zdCAkYnRuQ2xvc2UgPSAkd2lkZ2V0LmZpbmQoJy5tb2RhbFBvcHVwX2Nsb3NlJyk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50KSB7XHJcblx0XHRcdFx0XHRjb25zdCAkbW9kYWxSZW1vdGVBcHB0ID0gd2luZG93LnRvcC4kKCcuUmVtb3RlQXBwb2ludG1lbnQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoJG1vZGFsUmVtb3RlQXBwdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgJG1pbmltaXplTW9kYWwgPSAkbW9kYWxSZW1vdGVBcHB0LmZpbmQoJy5NaW5pbWl6ZScpO1xyXG5cdFx0XHRcdFx0XHQkbWluaW1pemVNb2RhbC5jbGljaygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JGJ0bkNsb3NlLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnT3BlbicpO1xyXG5cdFx0XHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnc2hvd2Nsb3NlJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBQYW5lbEJ5SUROb3RpZnkgKi9cclxudmFyIHBhbmVsTm90aWZ5V2lkZ2V0O1xyXG5TYXBwaGlyZVdpZGdldHMuUGFuZWxCeUlkTm90aWZ5ID0ge1xyXG5cdGlzQW55UGFuZWxPcGVuZWREZXByZWNhdGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XHJcblx0fSxcclxuXHR0b2dnbGVQYW5lbEJ5Tm90aWZ5OiBmdW5jdGlvbihJZCkge1xyXG5cdFx0aWYgKCFpc0FueVBhbmVsT3BlbmVkRGVwcmVjYXRlZCgpKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHRcdFx0JCgnIycgKyBJZClcclxuXHRcdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWwnKVxyXG5cdFx0XHRcdC5mYWRlSW4oMTQwKTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKGp1c3REcmFnZ2VkID09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHQkKCcuUGFuZWxDb250YWluZXInKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdtYXJnaW4tbGVmdCcsIHBhbmVsTWFyZ2luTGVmdClcclxuXHRcdFx0XHRcdFx0LmNzcygnbGVmdCcsIHBhbmVsTGVmdClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKHBhbmVsQXJyb3dDbGFzcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnIycgKyBJZClcclxuXHRcdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcclxuXHRcdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWwnKVxyXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWxDb250YWluZXInKVxyXG5cdFx0XHRcdFx0LnNsaWRlRG93bigxNTApO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcclxuXHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0LmZhZGVPdXQoMTQwKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0XHQuc2xpZGVVcCgxNTApO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dG9nZ2xlUGFuZWxOb3RpZnlCeUlkOiBmdW5jdGlvbihJZCkge1xyXG5cdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdFx0JCgnIycgKyBJZClcclxuXHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHQucGFyZW50KClcclxuXHRcdFx0LmNoaWxkcmVuKCcuUGFuZWwnKVxyXG5cdFx0XHQuZmFkZVRvZ2dsZSgxNDApO1xyXG5cclxuXHRcdHBhbmVsTm90aWZ5V2lkZ2V0ID0gJCgnIycgKyBJZClcclxuXHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHQuYXR0cignTm90aWZ5SWQnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcclxuXHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWxDb250YWluZXInKVxyXG5cdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xyXG5cdFx0fSwgMTAwKTtcclxuXHR9LFxyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgUGFuZWxCeUlEICovXHJcblNhcHBoaXJlV2lkZ2V0cy5QYW5lbEJ5SWQgPSB7XHJcblx0aXNBbnlQYW5lbE9wZW5lZERlcHJlY2F0ZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHR9LFxyXG5cclxuXHR0b2dnbGVCdXR0b246IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRjb25zdCAkdG9nZ2xlQnV0dG9uID0gJChgIyR7aWR9YCkucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpLmxlbmd0aFxyXG5cdFx0XHQ/ICQoYCMke2lkfWApLnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHQ6ICQoYCMke2lkfWApO1xyXG5cclxuXHRcdCR0b2dnbGVCdXR0b24uY2xpY2soKTtcclxuXHR9LFxyXG5cclxuXHR0b2dnbGVQYW5lbEJ5SWQ6IGZ1bmN0aW9uKElkKSB7XHJcblx0XHRjb25zdCAkdG9nZ2xlQnV0dG9uID0gJChgIyR7SWR9YCkucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpO1xyXG5cdFx0Y29uc3QgJHBhbmVsID0gJHRvZ2dsZUJ1dHRvbi5wYXJlbnQoKS5jaGlsZHJlbignLlBhbmVsJyk7XHJcblx0XHRjb25zdCAkcGFuZWxDb250YWluZXIgPSAkcGFuZWwuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpO1xyXG5cdFx0Y29uc3QgJHBhbmVsQmFja2dyb3VuZCA9ICRwYW5lbC5jaGlsZHJlbignLlBhbmVsQmFja2dyb3VuZCcpO1xyXG5cclxuXHRcdGlmICghdGhpcy5pc0FueVBhbmVsT3BlbmVkRGVwcmVjYXRlZCgpKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHRcdFx0JCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdoaWRkZW4nKTtcclxuXHJcblx0XHRcdCRwYW5lbC5zaG93KCk7XHJcblx0XHRcdCRwYW5lbENvbnRhaW5lci5zbGlkZURvd24oMjAwKTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBqdXN0RHJhZ2dlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdGlmIChqdXN0RHJhZ2dlZCA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHQkKCcuUGFuZWxCeUlkTmV3X1BhbmVsQ29udGFpbmVyJylcclxuXHRcdFx0XHRcdFx0XHQuY3NzKCdtYXJnaW4tbGVmdCcsIHBhbmVsTWFyZ2luTGVmdClcclxuXHRcdFx0XHRcdFx0XHQuY3NzKCdsZWZ0JywgcGFuZWxMZWZ0KVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhwYW5lbEFycm93Q2xhc3MpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCRwYW5lbEJhY2tncm91bmQuZmFkZUluKDgwKTtcclxuXHJcblx0XHRcdFx0JHRvZ2dsZUJ1dHRvbi5jbGljaygpO1xyXG5cdFx0XHR9LCA1MCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkcGFuZWxDb250YWluZXIuc2xpZGVVcCgyMDApO1xyXG5cclxuXHRcdFx0JHBhbmVsQmFja2dyb3VuZC5mYWRlT3V0KDgwLCAoKSA9PiB7XHJcblx0XHRcdFx0JHRvZ2dsZUJ1dHRvbi5jbGljaygpO1xyXG5cclxuXHRcdFx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xyXG5cdFx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHJcblx0XHRcdFx0JHBhbmVsLmhpZGUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IFBvcFVwTWVudSAqL1xyXG5TYXBwaGlyZVdpZGdldHMuUG9wVXBNZW51ID0ge1xyXG5cdG1lbnVQb3NpdGlvbjogZnVuY3Rpb24oaWQsIENvbnRleHQsIExvY2FsZSkge1xyXG5cdFx0LyogSGlkZSBhbnkgb3RoZXIgbWVudXMgb24gcGFnZSBhbmQgc2V0IGJ1dHRvbiBhcyBjb2xsYXBzZWQuICovXHJcblx0XHQkKCcucG9wdXAtbWVudTp2aXNpYmxlJykuaGlkZSgpO1xyXG5cclxuXHRcdC8vdmFyIF90aGlzID0gJCh0aGlzKTtcclxuXHRcdHZhciBfdGhpcyA9ICQoJyMnICsgaWQpO1xyXG5cdFx0dmFyIFh4ID0gMDtcclxuXHRcdHZhciBZeSA9IDA7XHJcblx0XHR2YXIgV3cgPSAwO1xyXG5cdFx0dmFyIEhoID0gMDtcclxuXHJcblx0XHQvL190aGlzLmNoaWxkcmVuKCcuYnV0dG9uLWV4cGFuZDp2aXNpYmxlJykuaGlkZSgpO1xyXG5cclxuXHRcdC8qIEdldCB0aGUgbWVudSBlbGVtZW50LiAqL1xyXG5cdFx0dmFyIF9lbCA9IF90aGlzLm5leHQoJy5wb3B1cC1tZW51Jyk7XHJcblxyXG5cdFx0LyogRGlzcGxheSB0aGUgbWVudS4gKi9cclxuXHRcdF9lbC5zaG93KCk7XHJcblxyXG5cdFx0LyogU2V0IGJ1dHRvbiBjb2xsYXBzZS4gKi9cclxuXHRcdF90aGlzLmNoaWxkcmVuKCcuYnV0dG9uLWNvbGxhcHNlJykuc2hvdygpO1xyXG5cclxuXHRcdC8qIEdldCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgYnV0dG9uLiAqL1xyXG5cdFx0YnV0dG9uSGggPSBfdGhpcy5vdXRlckhlaWdodCgpO1xyXG5cdFx0YnV0dG9uV3cgPSBfdGhpcy5vdXRlcldpZHRoKCk7XHJcblxyXG5cdFx0dmFyIGJ1dHRvblkgPSBfdGhpcy5wb3NpdGlvbigpLnRvcCArIGJ1dHRvbkhoICsgMTA7XHJcblx0XHR2YXIgYnV0dG9uWCA9IF90aGlzLm9mZnNldCgpLmxlZnQ7XHJcblx0XHQvL3ZhciBidXR0b25YID0gX3RoaXMucG9zaXRpb24oKS5sZWZ0O1xyXG5cclxuXHRcdC8qIEdldCB0aGUgZGlzdGFuY2Ugb2YgbWVudSBidXR0b24gYW5kIHRoZSBwYXJlbnQgZWxlbWVudCAqL1xyXG5cdFx0dmFyIHBvcHVwUGFyZW50WHggPSBfdGhpcy5vZmZzZXQoKS5sZWZ0IC0gX3RoaXMucG9zaXRpb24oKS5sZWZ0O1xyXG5cclxuXHRcdHZhciBwb3B1cFh4ID0gX2VsLm9mZnNldCgpLmxlZnQ7XHJcblx0XHR2YXIgcG9wdXBXdyA9IF9lbC5vdXRlcldpZHRoKCk7XHJcblxyXG5cdFx0WHggPSBNYXRoLmFicyhidXR0b25YIC0gJCgnYm9keScpLnNjcm9sbExlZnQoKSAtIHBvcHVwUGFyZW50WHgpO1xyXG5cdFx0WXkgPSBNYXRoLmFicyhidXR0b25IaCAtIGJ1dHRvblkgLSAkKCdib2R5Jykuc2Nyb2xsVG9wKCkpO1xyXG5cclxuXHRcdGlmIChMb2NhbGUgIT0gJ0FSJykge1xyXG5cdFx0XHQvKiBDaGVjayBpZiBjbGlja2VkIHBvc2l0aW9uIHBsdXMgdGhlIHBvcHVwIHdpZHRoIGV4Y2VlZCB0aGUgd2luZG93IHdpZHRoLiAqL1xyXG5cdFx0XHRpZiAoYnV0dG9uWCArIHBvcHVwV3cgLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpID4gJChDb250ZXh0KS53aWR0aCgpKSB7XHJcblx0XHRcdFx0WHggPSBidXR0b25YIC0gcG9wdXBXdyAtICQoJ2JvZHknKS5zY3JvbGxMZWZ0KCkgLSBwb3B1cFBhcmVudFh4ICsgYnV0dG9uV3c7XHJcblx0XHRcdFx0Ly9YeCA9ICgkKHdpbmRvdykud2lkdGgoKSAtIHBvcHVwV3cpIC0gJCgnYm9keScpLnNjcm9sbExlZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qIFNldCBtZW51IHBvc2l0aW9uLiAqL1xyXG5cdFx0X2VsLmNzcyh7XHJcblx0XHRcdGxlZnQ6IFh4ICsgJ3B4JyxcclxuXHRcdFx0dG9wOiBidXR0b25ZICsgJ3B4JyxcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qIFJlZnJlc2ggdmFsdWUgKi9cclxuXHRcdHBvcHVwWHggPSBfZWwub2Zmc2V0KCkubGVmdDtcclxuXHJcblx0XHR2YXIgX2JhbGxvb25FbCA9IF9lbC5jaGlsZHJlbignLnBvcHVwLW1lbnUtYmFsbG9vbicpO1xyXG5cclxuXHRcdHZhciBfYmFsbG9vblh4ID0gX2JhbGxvb25FbC5vZmZzZXQoKS5sZWZ0O1xyXG5cdFx0dmFyIF9iYWxsb29uV3cgPSBfYmFsbG9vbkVsLm91dGVyV2lkdGgoKTtcclxuXHRcdHZhciBfYmFsbG9vblBvc1h4ID0gTWF0aC5hYnMoYnV0dG9uWCAtIFh4IC0gcG9wdXBQYXJlbnRYeCk7XHJcblxyXG5cdFx0LyogSXMgdGhlIGJhbGxvb24gaWNvbiBwb3NpdGlvbmVkIG91dCBvZiB0aGUgcG9wdXAgbWVudT8gKi9cclxuXHRcdGlmIChfYmFsbG9vblBvc1h4ICsgWHggKyBfYmFsbG9vbld3ID4gWHggKyBwb3B1cFd3KSB7XHJcblx0XHRcdF9iYWxsb29uUG9zWHggPSBfYmFsbG9vblBvc1h4IC0gX2JhbGxvb25XdztcclxuXHRcdH1cclxuXHJcblx0XHQvKiBTZXQgcG9zaXRpb24gb2YgdGhlIGJhbGxvb24gZWZmZWN0LiAqL1xyXG5cdFx0X2JhbGxvb25FbC5jc3MoJ2xlZnQnLCBfYmFsbG9vblBvc1h4ICsgJ3B4Jyk7XHJcblx0fSxcclxuXHRtZW51RXZlbnRzOiBmdW5jdGlvbihDb250ZXh0LCBMb2NhbGUpIHtcclxuXHRcdCQoJy5wb3B1cC1idXR0b24nKVxyXG5cdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Qb3BVcE1lbnUubWVudVBvc2l0aW9uKGlkLCBDb250ZXh0LCBMb2NhbGUpO1xyXG5cclxuXHRcdFx0XHQvKmUuc3RvcFByb3BhZ2F0aW9uKCk7Ki9cclxuXHJcblx0XHRcdFx0LyogUHJldmVudCBsaW5rIHN1Ym1pc3Npb24gKi9cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdC8qIHYgKioqIEhpZGUgcG9wdXAgd2hlbiBjbGljayBvdXRzaWRlICoqKiB2ICovXHJcblx0XHRmdW5jdGlvbiBQTUNsaWNrT3V0c2lkZShldmVudCkge1xyXG5cdFx0XHRpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpKSB7XHJcblx0XHRcdFx0dmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcclxuXHRcdFx0XHQvKmlmICgodGFyZ2V0LnBhcmVudHMoKS5pbmRleCgkKCdhW3NhcHBoaXJlaG9zcGl0YWxdLCAuSG9zcGl0YWxQb3BVcCcpKSA9PSAtMSkpIHt9Ki9cclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQhJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXHJcblx0XHRcdFx0XHRcdCcucG9wdXAtYnV0dG9uLCAucG9wdXAtbWVudSwgLm9zLWludGVybmFsLXVpLWF1dG9jb21wbGV0ZSwgLm9zLWludGVybmFsLXVpLW1lbnUtaXRlbSwgLm9zLWludGVybmFsLXVpLWNvcm5lci1hbGwsIHVpLWF1dG9jb21wbGV0ZS1pdGVtJ1xyXG5cdFx0XHRcdFx0KS5sZW5ndGhcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdCQoJy5wb3B1cC1tZW51OnZpc2libGUnKS5oaWRlKCk7XHJcblx0XHRcdFx0XHQkKCcuYnV0dG9uLWNvbGxhcHNlOnZpc2libGUnKS5oaWRlKCk7XHJcblx0XHRcdFx0XHQvLyQoJy5idXR0b24tZXhwYW5kJykuc2hvdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfUE1Jc0RyYWcgPSBmYWxzZTtcclxuXHRcdHZhciBfUE1Jc0NsaWNrID0gZmFsc2U7XHJcblx0XHQkKGRvY3VtZW50KS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF9QTUlzRHJhZyA9IGZhbHNlO1xyXG5cdFx0XHRfUE1Jc0NsaWNrID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdFx0JChkb2N1bWVudCkub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF9QTUlzRHJhZyA9IHRydWU7XHJcblx0XHR9KTtcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFBNQ2xpY2tPdXRzaWRlKGV2ZW50KTtcclxuXHRcdFx0X1BNSXNEcmFnID0gZmFsc2U7XHJcblx0XHRcdF9QTUlzQ2xpY2sgPSBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdFx0JChkb2N1bWVudCkub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0aWYgKCFfUE1Jc0RyYWcgJiYgX1BNSXNDbGljaykge1xyXG5cdFx0XHRcdFBNQ2xpY2tPdXRzaWRlKGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRfUE1Jc0RyYWcgPSBmYWxzZTtcclxuXHRcdFx0X1BNSXNDbGljayA9IGZhbHNlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnLmJ1dHRvbi1jb2xsYXBzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdCQoJ2JvZHknKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9KTtcclxuXHRcdC8qIF4gKioqIEhpZGUgcG9wdXAgd2hlbiBjbGljayBvdXRzaWRlICoqKiBeICovXHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlUGFuZWwgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUGFuZWwgPSB7XHJcblx0Y2hlY2tPcGVuUGFuZWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnU2FwcGhpcmVQYW5lbE9wZW4nKSAmJiAkKCcuU2FwcGhpcmVQYW5lbF9Db250YWluZXI6dmlzaWJsZScpLmxlbmd0aDtcclxuXHR9LFxyXG5cclxuXHR0b2dnbGVTYXBwaGlyZVBhbmVsOiBmdW5jdGlvbihQYW5lbElkKSB7XHJcblx0XHRpZiAoIU9zVmFsaWRhdG9yT25TdWJtaXQoKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQYW5lbC5jaGVja09wZW5QYW5lbCgpKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnU2FwcGhpcmVQYW5lbE9wZW4nKTtcclxuXHRcdFx0JCgnIycgKyBQYW5lbElkKS5mYWRlSW4oMTQwKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnIycgKyBQYW5lbElkKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5TYXBwaGlyZVBhbmVsX0NvbnRhaW5lcicpXHJcblx0XHRcdFx0XHQuc2xpZGVUb2dnbGUoMTUwKTtcclxuXHRcdFx0fSwgMTAwKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRjbG9zZVNhcHBoaXJlUGFuZWw6IGZ1bmN0aW9uKFBhbmVsSWQpIHtcclxuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnU2FwcGhpcmVQYW5lbE9wZW4nKTtcclxuXHRcdCQoJyMnICsgUGFuZWxJZCkuZmFkZU91dCgxNDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyMnICsgUGFuZWxJZClcclxuXHRcdFx0XHQuZmluZCgnLlNhcHBoaXJlUGFuZWxfQ29udGFpbmVyJylcclxuXHRcdFx0XHQuc2xpZGVVcCgxNTApO1xyXG5cdFx0fSwgMTAwKTtcclxuXHR9LFxyXG5cclxuXHRzZXRQYW5lbEJlaGF2aW9yOiBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5QYW5lbFtwYW5lbC10cmlnZ2VyLWVsZW1lbnRpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdGhpc19wYW5lbCA9ICQodGhpcyk7XHJcblx0XHRcdCQoJyMnICsgdGhpc19wYW5lbC5hdHRyKCdwYW5lbC10cmlnZ2VyLWVsZW1lbnRpZCcpICsgJycpXHJcblx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLnRvZ2dsZVNhcHBoaXJlUGFuZWwodGhpc19wYW5lbC5hdHRyKCdpZCcpKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQYW5lbC5zZXRQYW5lbEJlaGF2aW9yKCk7XHJcblxyXG5cdGlmIChvc0FqYXhCYWNrZW5kLkV2ZW50SGFuZGxlcnMuQWZ0ZXJBamF4UmVxdWVzdC50b1N0cmluZygpLmluZGV4T2YoJ3NldFBhbmVsQmVoYXZpb3InKSA9PSAtMSkge1xyXG5cdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQYW5lbC5zZXRQYW5lbEJlaGF2aW9yKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJyZXF1aXJlKCcuL2NvbmZpcm1hdGlvbi1wYW5lbCcpO1xyXG5yZXF1aXJlKCcuL21vZGFsLXBvcHVwJyk7XHJcbnJlcXVpcmUoJy4vcGFuZWwtYnktaWQnKTtcclxucmVxdWlyZSgnLi9wb3B1cC1tZW51Jyk7XHJcbnJlcXVpcmUoJy4vc2FwcGhpcmUtcGFuZWwnKTtcclxuIiwiLyogQ29tcG9uZW50IFBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCkuZmluZCgnLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlJyk7XHJcblx0XHRjb25zdCAkbGlzdFF1ZXVlV3JhcHBlciA9ICR3aWRnZXQuZmluZCgnLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlX19MaXN0UXVldWVzJyk7XHJcblx0XHRjb25zdCAkZHJvcGRvd24gPSAkbGlzdFF1ZXVlV3JhcHBlci5maW5kKCcuSW5saW5lRHJvcGRvd25fbGFiZWwnKTtcclxuXHJcblx0XHQkbGlzdFF1ZXVlV3JhcHBlci5vbignY2xpY2snLCBldmVudCA9PiB7XHJcblx0XHRcdGlmICghJGRyb3Bkb3duLmxlbmd0aCkgcmV0dXJuO1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdCR3aWRnZXQudG9nZ2xlQ2xhc3MoJ1BhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlLS1hY3RpdmUnKTtcclxuXHJcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljay5QYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZScsICgpID0+IHtcclxuXHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdQYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZS0tYWN0aXZlJyk7XHJcblx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdjbGljay5QYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZScpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgUGF0aWVudENhbGxDYW5jZWwgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcclxuXHRcdGNvbnN0ICRjb3VudGRvd24gPSAkd2lkZ2V0LmZpbmQoJ1t1aT1kYXRhLWNvdW50ZXJdJyk7XHJcblx0XHRsZXQgJGNhbGxCdXR0b24gPSAkd2lkZ2V0LmZpbmQoJ1t1aT1kYXRhLWJ1dHRvbi1jYWxsXScpO1xyXG5cdFx0bGV0ICRjYW5jZWxCdXR0b24gPSAkd2lkZ2V0LmZpbmQoJ1t1aT1kYXRhLWJ1dHRvbi1jYW5jZWxdJyk7XHJcblx0XHRjb25zdCAkb3RoZXJDb250ZW50ID0gJHdpZGdldC5maW5kKCcuUGF0aWVudENhbGxDYW5jZWxfX090aGVyJyk7XHJcblxyXG5cdFx0bGV0IGludGVydmFsO1xyXG5cdFx0bGV0IHRpbWVDb3VudGVyO1xyXG5cclxuXHRcdGNvbnN0IGNhbGxQYXRpZW50ID0gZnVuY3Rpb24oJHdpZGdldCkge1xyXG5cdFx0XHR0b2dnbGVDYWxsaW5nU3RhdGUoKTtcclxuXHJcblx0XHRcdGlmIChjb25maWcuc2hvd0NvdW50ZG93bikgJGNvdW50ZG93bi50ZXh0KGNvbmZpZy50eHRDYWxsaW5nSW4gKyAnICcgKyBjb25maWcudGltZVRvQ2FuY2VsKTtcclxuXHRcdFx0ZWxzZSAkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxpbmdJbik7XHJcblxyXG5cdFx0XHRzdGFydENvdW50ZXIoKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdG9nZ2xlQ2FsbGluZ1N0YXRlID0gKCkgPT4ge1xyXG5cdFx0XHQkd2lkZ2V0LnRvZ2dsZUNsYXNzKCdDYWxsaW5nUGF0aWVudCcpO1xyXG5cdFx0XHQkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxQYXRpZW50KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2V0SW5pdGlhbFN0YXRlID0gKCkgPT4ge1xyXG5cdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdDYWxsaW5nUGF0aWVudCcpO1xyXG5cdFx0XHQkY2FsbEJ1dHRvbi5zaG93KCk7XHJcblx0XHRcdCRvdGhlckNvbnRlbnQuc2hvdygpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzdGFydENvdW50ZXIgPSAoKSA9PiB7XHJcblx0XHRcdHRpbWVDb3VudGVyID0gY29uZmlnLnRpbWVUb0NhbmNlbDtcclxuXHRcdFx0aW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodXBkYXRlQ291bnRlciwgMTAwMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVwZGF0ZUNvdW50ZXIgPSAoKSA9PiB7XHJcblx0XHRcdHRpbWVDb3VudGVyLS07XHJcblxyXG5cdFx0XHRpZiAodGltZUNvdW50ZXIgPT09IDApIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHRcdFx0XHRPc05vdGlmeVdpZGdldChjb25maWcucGF0aWVudENhbGxGYWtlTm90aWZ5SWQsICcnKTtcclxuXHJcblx0XHRcdFx0c2V0SW5pdGlhbFN0YXRlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChjb25maWcuc2hvd0NvdW50ZG93bikgJGNvdW50ZG93bi50ZXh0KGNvbmZpZy50eHRDYWxsaW5nSW4gKyAnICcgKyB0aW1lQ291bnRlcik7XHJcblx0XHRcdGVsc2UgJGNvdW50ZG93bi50ZXh0KGNvbmZpZy50eHRDYWxsaW5nSW4pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoY29uZmlnLnN0YXJ0Q291bnRpbmcpIGNhbGxQYXRpZW50KCR3aWRnZXQpO1xyXG5cclxuXHRcdCRjYWxsQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0aWYgKCR3aWRnZXQuaGFzQ2xhc3MoJ0NhbGxpbmdQYXRpZW50JykpIHJldHVybjtcclxuXHJcblx0XHRcdGNhbGxQYXRpZW50KCR3aWRnZXQpO1xyXG5cclxuXHRcdFx0JGNhbGxCdXR0b24uaGlkZSgpO1xyXG5cdFx0XHQkb3RoZXJDb250ZW50LmhpZGUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRjYW5jZWxCdXR0b24ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdFx0XHR0aW1lQ291bnRlciA9IGNvbmZpZy50aW1lVG9DYW5jZWw7XHJcblx0XHRcdCRjb3VudGRvd24udGV4dCh0aW1lQ291bnRlcik7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0dG9nZ2xlQ2FsbGluZ1N0YXRlKCk7XHJcblxyXG5cdFx0XHQkY2FsbEJ1dHRvbi5zaG93KCk7XHJcblx0XHRcdCRvdGhlckNvbnRlbnQuc2hvdygpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlBhdGllbnRDYWxsQ2FuY2VsID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgUHJlc2NyaXB0aW9uQ2FyZCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xyXG5cdFx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlByZXNjcmlwdGlvbkNhcmRgKTtcclxuXHJcblx0XHRpZiAoY29uZmlnLmlzRXhwYW5kYWJsZSkge1xyXG5cdFx0XHRjb25zdCAkZXhwYW5kTGluayA9ICRjb21wb25lbnQuZmluZCgnLlByZXNjcmlwdGlvbkNhcmRfX0V4cGFuZEljb24nKTtcclxuXHJcblx0XHRcdCRleHBhbmRMaW5rLmNsaWNrKCgpID0+IHtcclxuXHRcdFx0XHQkY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdQcmVzY3JpcHRpb25DYXJkLS1leHBhbmRlZCcpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuUHJlc2NyaXB0aW9uQ2FyZCA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgUHJlc2NyaXB0aW9uRXhwYW5kYWJsZSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBQcmVzY3JpcHRpb25FeHBhbmRhYmxlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRjb25zdCB3aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcclxuXHRcdGNvbnN0IHByZXZpZXdzdGF0ID0gW107XHJcblxyXG5cdFx0Y29uc3QgJGVsZW1lbnRXcmFwcGVyID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xyXG5cclxuXHRcdGNvbnN0IGNsaWNrRXZlbnRzID0gb2IgPT4ge1xyXG5cdFx0XHRpZiAoJChvYikuaGFzQ2xhc3MoJ1ByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyX19MaW5rc0RpdicpKSB7XHJcblx0XHRcdFx0dmFyIFNlY3Rpb24gPSAkKG9iKVxyXG5cdFx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdC5wYXJlbnQoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpLnBhcmVudCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9jb250ZW50Jyk7XHJcblxyXG5cdFx0XHQvLyBnZXQgaWRcclxuXHRcdFx0dmFyIGlkID0gU2VjdGlvbi5hdHRyKCdpZCcpO1xyXG5cclxuXHRcdFx0dmFyIHRlbXBIZWlnaHQgPSAwO1xyXG5cclxuXHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXHJcblx0XHRcdGlmIChTZWN0aW9uLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0LCBkdXJpbmcgdGhpcyBwcm9jZXNzLCB0cmFuc2l0aW9ucyBhcmUgZGlzYWJsZWRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5hZGRDbGFzcygnbm9UcmFuc2l0aW9uJyk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KFNlY3Rpb25Db250ZW50LmhlaWdodCgpKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudFswXS5vZmZzZXRIZWlnaHQ7IC8vIGhhY2sgdG8gZm9yY2UgYSByZXBhaW50XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQucmVtb3ZlQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xyXG5cclxuXHRcdFx0XHQvLyBDb2xsYXBzZSBjb250ZW50XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0Ly8gUmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXHJcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xyXG5cdFx0XHRcdHRlbXBIZWlnaHQgPSBTZWN0aW9uQ29udGVudC5oZWlnaHQoKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KHRlbXBIZWlnaHQpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdC8vIHJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxyXG5cdFx0XHRcdFNlY3Rpb24uYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5pbml0ID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCAkaGVhZGVyID0gJGVsZW1lbnRXcmFwcGVyLmZpbmQoJy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlcicpO1xyXG5cdFx0XHRjb25zdCAkbGlua3MgPSAkaGVhZGVyLmZpbmQoJy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlcl9fTGlua3NEaXYnKTtcclxuXHJcblx0XHRcdC8vIENyZWF0ZSBhcnJheSBzdGF0XHJcblx0XHRcdCQoJy5TZWN0aW9uUHJlc2NyaXB0aW9uRXhwYW5kYWJsZUFyZWEnKS5lYWNoKCgpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0ID0gJGhlYWRlci5oYXNDbGFzcygnZXhwYW5kZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFt3aWRnZXRJZF0gPSB7IGNsaWVudDogc3RhdCwgc2VydmVyOiBzdGF0IH07XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKCRoZWFkZXIuaGFzQ2xhc3MoJ05vdEV4cGFuZGFibGUnKSkge1xyXG5cdFx0XHRcdCRoZWFkZXIub24oJ2NsaWNrJywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCRoZWFkZXIuaGFzQ2xhc3MoJ2lzTGlua0VwYW5kYWJsZUNsaWNrJykpIHtcclxuXHRcdFx0XHQkbGlua3Mub24oJ2NsaWNrJywgZSA9PiBjbGlja0V2ZW50cygkbGlua3MpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkaGVhZGVyLm9uKCdjbGljaycsIGUgPT4gY2xpY2tFdmVudHMoJGhlYWRlcikpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBlbGVtZW50cyA9XHJcblx0XHRcdFx0Jy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBpbnB1dCwgLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIHNlbGVjdCwgLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIGEnO1xyXG5cdFx0XHQkKGVsZW1lbnRzKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG9zQWpheEJhY2tlbmQgJiYgb3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChhamF4UmVmcmVzaCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFqYXhSZWZyZXNoID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0Ly8gcmVtb3ZlIGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQvLyQoJy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlcicpLm9mZigpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cclxuXHRcdFx0JChcclxuXHRcdFx0XHQnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIGlucHV0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgc2VsZWN0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgYSdcclxuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zXHJcblx0XHRcdCQoJy5TZWN0aW9uUHJlc2NyaXB0aW9uRXhwYW5kYWJsZUFyZWEnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGlmIG5ldyBTZWN0aW9uRXhwYW5kYWJsZSB0aGVuIGFkZCB0byBwcmV2aWV3c3RhdCBhcnJheVxyXG5cdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID09IG51bGwpIHtcclxuXHRcdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XHJcblx0XHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Ly8gaWYgb3BlblxyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0c3RhdCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBhZGQgcm93XHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0geyBjbGllbnQ6IHN0YXQsIHNlcnZlcjogc3RhdCB9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY3VyZW50IHN0YXRlIChhamF4IHN0YXRlIHggaW5pdGlhbCBzdGF0ZSlcclxuXHRcdFx0XHR2YXIgY3VyU3RhdGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgc3RhcnQgZXhwYW5kYWJsZVxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRjdXJTdGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBjaGVjayBpZiBhamF4ICE9IGluaXRpYWwgc2VydmVyXHJcblx0XHRcdFx0aWYgKGN1clN0YXRlICE9IHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ3NlcnZlciddKSB7XHJcblx0XHRcdFx0XHQvLyBjdXJzdGF0ZVxyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPSBjdXJTdGF0ZTtcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ3NlcnZlciddID0gY3VyU3RhdGU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxyXG5cdFx0XHRcdFx0aWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID09IGZhbHNlICYmICQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5jaGlsZHJlbignLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfY29udGVudCcpXHJcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gdHJ1ZSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XHJcblx0XHRjb25zdCBleHBhbmRhYmxlID0gbmV3IFByZXNjcmlwdGlvbkV4cGFuZGFibGUoY29uZmlnKTtcclxuXHJcblx0XHRleHBhbmRhYmxlLmluaXQoKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZSA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgU2FwcGhpcmVIZWFkZXIgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IFNhcHBoaXJlSGVhZGVyKGNvbmZpZyk7XHJcblx0XHRTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIud2lkZ2V0SWQgPSBjb25maWcud2lkZ2V0SWQ7XHJcblx0fTtcclxuXHJcblx0dmFyIGhhbmRsZURlbW9ncmFwaGljcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZF0uaGFuZGxlRGVtb2dyYXBoaWNzKCk7XHJcblx0fTtcclxuXHJcblx0dmFyIFNhcHBoaXJlSGVhZGVyID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLmlzQ29uZmlkZW50aWFsID0gY29uZmlnLmlzQ29uZmlkZW50aWFsO1xyXG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xyXG5cdFx0dGhpcy4kd2lkZ2V0LmNzcyh7XHJcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXInKTtcclxuXHRcdHRoaXMuJG5hdmlnYXRpb24gPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLW5hdmlnYXRpb24nKTtcclxuXHRcdHRoaXMuJGlkZW50aWZpY2F0aW9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1pZGVudGlmaWNhdGlvbicpO1xyXG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWRlbW9ncmFwaGljcycpO1xyXG5cdFx0dGhpcy4kaW5mb3JtYXRpb24gPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWluZm9ybWF0aW9uJyk7XHJcblx0XHR0aGlzLiRhY3Rpb25zID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1hY3Rpb25zJyk7XHJcblx0XHR0aGlzLiRhZGRpdGlvbmFsVHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWRkaXRpb25hbC10cmlnZ2VyJyk7XHJcblx0XHR0aGlzLiRhZGRpdGlvbmFsQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWRkaXRpb25hbC1jb250ZW50Jyk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVSZXNpemUoKTtcclxuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuJGluZm9ybWF0aW9uLnRleHQoKSA9PT0gJycpIHtcclxuXHRcdFx0dGhpcy4kaW5mb3JtYXRpb24uaGlkZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5nZXRDb25maWcgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZztcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdFx0X3RoaXMuaGFuZGxlRGVtb2dyYXBoaWNzKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuYXR0YWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy4kYWRkaXRpb25hbFRyaWdnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChfdGhpcy4kaGVhZGVyLmhhc0NsYXNzKCdpc09wZW4nKSkge1xyXG5cdFx0XHRcdF90aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzT3BlbicpO1xyXG5cdFx0XHRcdC8vJCgnLkxheW91dEJhc2UtaGVhZGVyJykuY3NzKCd6LWluZGV4JywgMik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X3RoaXMuJGhlYWRlci5hZGRDbGFzcygnaXNPcGVuJyk7XHJcblx0XHRcdFx0Ly8kKCcuTGF5b3V0QmFzZS1oZWFkZXInKS5jc3MoJ3otaW5kZXgnLCAzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmhhbmRsZURlbW9ncmFwaGljcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMuZmluZCgnLkRlbW9ncmFwaGljLWl0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuXHRcdHRoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyLmhpZGUoKTtcclxuXHRcdHRoaXMuJGFkZGl0aW9uYWxDb250ZW50LmVtcHR5KCk7XHJcblxyXG5cdFx0Y29uc3QgZGVtb2dyYXBoaWNXaWR0aCA9IHRoaXMuJGRlbW9ncmFwaGljLm91dGVyV2lkdGgodHJ1ZSk7XHJcblx0XHRsZXQgaXRlbXNUb3RhbCA9IDA7XHJcblxyXG5cdFx0Y29uc3QgY29tcG9uZW50V2lkdGggPSB0aGlzLiR3aWRnZXQub3V0ZXJXaWR0aCh0cnVlKTtcclxuXHRcdGNvbnN0IG5hdmlnYXRpb25XaWR0aCA9IHRoaXMuJG5hdmlnYXRpb24ud2lkdGgoKTtcclxuXHRcdGNvbnN0IGlkZW50aWZpY2F0aW9uV2lkdGggPSB0aGlzLiRpZGVudGlmaWNhdGlvbi53aWR0aCgpO1xyXG5cdFx0Y29uc3QgZGVtb2dyYXBoaWNzV2lkdGggPSB0aGlzLiRkZW1vZ3JhcGhpYy53aWR0aCgpO1xyXG5cdFx0Y29uc3QgaW5mb3JtYXRpb25XaWR0aCA9IHRoaXMuJGluZm9ybWF0aW9uLndpZHRoKCk7XHJcblx0XHRjb25zdCBhY3Rpb25zV2lkdGggPSB0aGlzLiRhY3Rpb25zLndpZHRoKCk7XHJcblxyXG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMuZmluZCgnLkRlbW9ncmFwaGljLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdGl0ZW1zVG90YWwgKz0gcGFyc2VJbnQoJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpLCAxMCk7XHJcblxyXG5cdFx0XHQvLyA2NCAtPiBtYXJnaW5zIGFuZCA5OSAtPiBNb3JlIEluZm8gYnV0dG9uXHJcblx0XHRcdGlmIChpdGVtc1RvdGFsICsgNjQgKyAxMTAgPCBkZW1vZ3JhcGhpY1dpZHRoKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmNsb25lKClcclxuXHRcdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcclxuXHRcdFx0XHRcdC5hcHBlbmRUbyhfdGhpcy4kYWRkaXRpb25hbENvbnRlbnQpO1xyXG5cdFx0XHRcdF90aGlzLiRhZGRpdGlvbmFsVHJpZ2dlci5zaG93KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0aGlzLiRhZGRpdGlvbmFsQ29udGVudC5maW5kKCcuRGVtb2dyYXBoaWMtaXRlbScpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzT3BlbicpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5zaG93QWRkaXRpb25hbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5hZGRDbGFzcygnaXNPcGVuJyk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmhpZGVBZGRpdGlvbmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCdpc09wZW4nKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIgPSB7XHJcblx0XHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRcdGhhbmRsZURlbW9ncmFwaGljczogaGFuZGxlRGVtb2dyYXBoaWNzLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdGlmICghIVNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZCkge1xyXG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZF0uaGFuZGxlRGVtb2dyYXBoaWNzKCk7XHJcblx0fVxyXG5cdGlmICghISQoJy5TYXBwaGlyZUhlYWRlci1kZW1vZ3JhcGhpY3MnKS5sZW5ndGgpIHtcclxuXHRcdG9zQWpheEJhY2tlbmQgJiZcclxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyLndpZGdldElkXS5oYW5kbGVEZW1vZ3JhcGhpY3MoKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlUG9wdXAgKi9cbnZhciBSaWNoV2lkZ2V0c19Qb3B1cF9FZGl0b3Jfbm90aWZ5V2lkZ2V0O1xuXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Ly8gQ2hlY2sgaWYgdGhlIHdpZGdldCBpcyBsb2FkZWQgaW5zaWRlIGFuIGlGcmFtZVxuXHRsZXQgaXNJbnNpZGVJZnJhbWUgPSB3aW5kb3cuZnJhbWVFbGVtZW50ICE9IHVuZGVmaW5lZCB8fCBmYWxzZTtcblxuXHQvLyBDb25zdGFudHNcblx0Y29uc3QgUE9QVVBfSU5JVElBTF9XSURUSCA9IDMwMDtcblx0Y29uc3QgUE9QVVBfSU5JVElBTF9IRUlHSFQgPSAxMDA7XG5cdGNvbnN0IFBPUFVQX1dJTkRPV19JTkRFWCA9IDQwMTA7XG5cdGNvbnN0IFBPUFVQX0NMT1NJTkdfVEFHID0gJ2Nsb3NpbmcnO1xuXHRjb25zdCBQT1BVUF9DTE9TSU5HX1ZBTFVFID0gJ3RydWUnO1xuXG5cdGxldCBQT1BVUF9OT1RJRllfV0lER0VUO1xuXHRsZXQgUE9QVVBfUEFSRU5UX1VSTDtcblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xuXHRcdGlmIChjb25maWcuaWdub3JlSWZyYW1lKSBpc0luc2lkZUlmcmFtZSA9IGZhbHNlO1xuXG5cdFx0JCgpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcblx0XHRcdGNvbnN0IF9pZCA9IGNvbmZpZy5saW5rSWQ7XG5cdFx0XHRjb25zdCBsaW5rUXVlcnkgPSBgIyR7Y29uZmlnLmxpbmtJZH1gO1xuXHRcdFx0bGV0IGxpbmtXaWRnZXQ7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxpbmtXaWRnZXQgPSAkKGxpbmtRdWVyeSkuZ2V0KDApO1xuXHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0aWYgKHR5cGVvZiBsaW5rV2lkZ2V0ID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdC8vQ2FzZSB0aGUgd2lkZ2V0IGlzIGluZXhpc3RlbnQgb3IgaW52aXNpYmxlLCBpdCB3aWxsIHNob3cgbm8gZXJyb3JzLlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdFBPUFVQX1BBUkVOVF9VUkwgPSBjb25maWcucGFyZW50VXJsO1xuXG5cdFx0XHRjb25zdCBsaW5rUmVzdWx0ID0gZ2V0TGlua0hSRUYobGlua1dpZGdldCk7XG5cdFx0XHRjb25zdCBsaW5rSHJlZiA9IGxpbmtSZXN1bHRbMF07XG5cdFx0XHRjb25zdCBpc0FCdXR0b24gPSBsaW5rUmVzdWx0WzFdO1xuXG5cdFx0XHRpZiAodHlwZW9mIGxpbmtIcmVmID09ICd1bmRlZmluZWQnIHx8IGxpbmtIcmVmID09ICcnIHx8IGxpbmtIcmVmID09ICcjJyB8fCBsaW5rSHJlZi5pbmRleE9mKCdqYXZhc2NyaXB0OicpID09IDApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR3aW5kb3cuT3NIYW5kbGVFeGNlcHRpb24oXG5cdFx0XHRcdFx0XHRuZXcgRXJyb3IoJ1BvcHVwIGxpbmsgaWQgbXVzdCBiZSB0aGUgaWQgb2YgYSBMaW5rIG9yIEJ1dHRvbiBXaWRnZXQgd2l0aCBNZXRob2QgTmF2aWdhdGUuJyksXG5cdFx0XHRcdFx0XHRvdXRzeXN0ZW1zLm9zRXJyb3JDb2Rlcy5TeXN0ZW1KYXZhc2NyaXB0RXJyb3IsXG5cdFx0XHRcdFx0XHQnUG9wdXBfRWRpdG9yJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgdGhlIGV4aXN0aW5nIG9uLWNsaWNrIGV2ZW50XG5cdFx0XHRpZiAoaXNBQnV0dG9uKSB7XG5cdFx0XHRcdGxpbmtXaWRnZXQuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdCdvbmNsaWNrJyxcblx0XHRcdFx0XHRsaW5rV2lkZ2V0XG5cdFx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKCdvbmNsaWNrJylcblx0XHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnd2luZG93LmxvY2F0aW9uLmhyZWY9JywgJ3JldHVybiBmYWxzZTt3aW5kb3cubG9jYXRpb24uaHJlZj0nKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgY29uZmlybWF0aW9uIG1lc3NhZ2UsIHN0b3JlIGluIGFuIGF0dHJpYnV0ZSB0aGUgcmVzdWx0XG5cdFx0XHRpZiAobGlua1dpZGdldC5nZXRBdHRyaWJ1dGUoJ29uY2xpY2snKSAhPSBudWxsKSB7XG5cdFx0XHRcdGxpbmtXaWRnZXQuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdCdvbmNsaWNrJyxcblx0XHRcdFx0XHRsaW5rV2lkZ2V0XG5cdFx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKCdvbmNsaWNrJylcblx0XHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0J2lmKCByZXQgIT0gdHJ1ZSApJyxcblx0XHRcdFx0XHRcdFx0XCIkKCdcIiArIGxpbmtRdWVyeSArIFwiJykuZ2V0KDApLnNldEF0dHJpYnV0ZSgnY29uZmlybWVkJywgcmV0KTsgaWYoIHJldCAhPSB0cnVlIClcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHQvLyBUaGUgY2xpY2tIYW5kbGVyIGV2ZW50IGlzIHJlZ2lzdGVyZWQgaW4gb3NqcyBhbmQgJCBmb3IgY29tcGF0aWJpbGxpdHkgcmVhc29ucywgdGhleSBtdXN0IG5vdCBydW4gYm90aCBmb3IgdGhlIHNhbWUgY2xpY2suXG5cdFx0XHRcdC8vIFZhcmlhYmxlIGlzIHNldCB0byBmYWxzZSBpbiByZXNpemUgZnVuY3Rpb24uXG5cdFx0XHRcdGlmICgkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycpID09IHRydWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnLCB0cnVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBjbGlja2VkIGxpbmsgaXMgZGlzYWJsZWRcblx0XHRcdFx0aWYgKGxpbmtXaWRnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9IG51bGwpIHtcblx0XHRcdFx0XHR2YXIgbGlua0Rpc2FibGVkID0gbGlua1dpZGdldFxuXHRcdFx0XHRcdFx0LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRcdFx0aWYgKGxpbmtEaXNhYmxlZCA9PSAnZGlzYWJsZWQnIHx8IGxpbmtEaXNhYmxlZC5pbmRleE9mKCd0cnVlJykgIT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobGlua1dpZGdldC5nZXRBdHRyaWJ1dGUoJ2NvbmZpcm1lZCcpID09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKE9zSXNJRSgpKSBvc0ZvY3VzQmFja2VuZC5DbGVhckZvY3VzZWRFbGVtZW50KCk7XG5cblx0XHRcdFx0bGV0IHBvcHVwRGl2O1xuXHRcdFx0XHRsZXQgcGxlYXNlV2FpdERpdjtcblxuXHRcdFx0XHRjb25zdCB3YWl0VGV4dCA9IGA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMzZweDtcIj4ke2NvbmZpZy5sb2FkaW5nTWVzc2FnZX08L2Rpdj5gO1xuXHRcdFx0XHRjb25zdCBpbWdIVE1MID0gJzxkaXYgY2xhc3M9XCJsZHMtcmluZ1wiPjxkaXY+PC9kaXY+PC9kaXY+Jztcblx0XHRcdFx0Y29uc3QgbG9hZGluZ0VsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIkxheW91dFBvcHVwLWxvYWRpbmdcIj4ke2ltZ0hUTUx9ICR7d2FpdFRleHR9PC9kaXY+YDtcblx0XHRcdFx0Y29uc3QgaUZyYW1lRWxlbWVudCA9IGA8aWZyYW1lIGlkPVwiaWZyYW1lXyR7X2lkfVwiIHdpZHRoPVwiMTAwJVwiIHNjcm9sbGluZz1cIm5vXCIgaGVpZ2h0PVwiMTAwJVwiIGZyYW1lYm9yZGVyPVwiMFwiIHNyYz1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIi8+YDtcblxuXHRcdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0XHRsZXQgX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0XHRcdF9kaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IG5vbmU7Jyk7XG5cdFx0XHRcdFx0X2Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dpbmRvd18nICsgX2lkKTtcblx0XHRcdFx0XHR3aW5kb3cudG9wLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoX2Rpdik7XG5cblx0XHRcdFx0XHRwb3B1cERpdiA9IHdpbmRvdy50b3AuJCgnI3dpbmRvd18nICsgX2lkKTtcblx0XHRcdFx0XHRwb3B1cERpdi5hcHBlbmQoaUZyYW1lRWxlbWVudCk7XG5cblx0XHRcdFx0XHRwbGVhc2VXYWl0RGl2ID0gcG9wdXBEaXYucHJlcGVuZChsb2FkaW5nRWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cG9wdXBEaXYgPSAkKFwiPGRpdiBzdHlsZT0ndGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBub25lOyc+PC9kaXY+XCIpLmFwcGVuZFRvKCdib2R5Jyk7XG5cdFx0XHRcdFx0cG9wdXBEaXYuYXBwZW5kKGlGcmFtZUVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0cGxlYXNlV2FpdERpdiA9IHBvcHVwRGl2LnByZXBlbmQobG9hZGluZ0VsZW1lbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgbG9hZFRhcmdldFBhZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy50b3AuUE9QVVBfTk9USUZZX1dJREdFVCA9IGNvbmZpZy5ub3RpZnlJZDtcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgaWZyYW1lIG9iamVjdCBvbiB0aGUgZG9jdW1lbnQgcGFyZW50XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wLl9pZnJhbWVQb3B1cCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQuY29udGVudFdpbmRvdztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0d2luZG93LnRvcC5faWZyYW1lUG9wdXAgPSB3aW5kb3c7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0UE9QVVBfTk9USUZZX1dJREdFVCA9IGNvbmZpZy5ub3RpZnlJZDtcblx0XHRcdFx0XHRSaWNoV2lkZ2V0c19Qb3B1cF9FZGl0b3Jfbm90aWZ5V2lkZ2V0ID0gY29uZmlnLm5vdGlmeUlkO1xuXHRcdFx0XHRcdHdpbmRvdy50b3AuX2lmcmFtZVBvcHVwLlJpY2hXaWRnZXRzX1BvcHVwX0VkaXRvcl9ub3RpZnlXaWRnZXQgPSBjb25maWcubm90aWZ5SWQ7XG5cblx0XHRcdFx0XHQvLyBMb2FkIHRhcmdldCBwYWdlXG5cdFx0XHRcdFx0Y29uc3Qgb2hyZWYgPSBnZXRMaW5rSFJFRihsaW5rV2lkZ2V0KVswXTtcblx0XHRcdFx0XHRjb25zdCByaHJlZiA9IG9ocmVmLnJlcGxhY2UoLyhcXD98JilfPS4qPygmfCQpLywgJyQxXz0nICsgK25ldyBEYXRlKCkubm93ICsgJyQyJyk7XG5cdFx0XHRcdFx0Y29uc3QgeGhyZWYgPSByaHJlZiArIChyaHJlZiA9PSBvaHJlZiA/IChyaHJlZi5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JykgKyAnXz0nICsgK25ldyBEYXRlKCkgOiAnJyk7XG5cblx0XHRcdFx0XHRwb3B1cERpdi5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCB4aHJlZik7XG5cblx0XHRcdFx0XHQoZnVuY3Rpb24ocG9wdXBEaXYpIHtcblx0XHRcdFx0XHRcdHBvcHVwRGl2LmZpbmQoJ2lmcmFtZScpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEFmdGVyIGxvYWRpbmcgdHJ5IHRvIHJlc2l6ZVxuXHRcdFx0XHRcdFx0XHRyZXNpemUocG9wdXBEaXYsIF9pZCwgY29uZmlnLnNldFdpZHRoLCBjb25maWcuc2V0SGVpZ2h0LCB0cnVlLCBldmVudCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KShwb3B1cERpdik7XG5cblx0XHRcdFx0XHRwb3B1cERpdiA9IG51bGw7XG5cdFx0XHRcdFx0cGxlYXNlV2FpdERpdiA9IG51bGw7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0b3BlblBvcHVwKHBvcHVwRGl2LCBwbGVhc2VXYWl0RGl2LCBsb2FkVGFyZ2V0UGFnZSwgZXZlbnQsIGNvbmZpZyk7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblxuXHRcdFx0JChsaW5rUXVlcnkpLmNsaWNrKGNsaWNrSGFuZGxlcik7XG5cblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwLnBvcHVwV2lkdGggPSBjb25maWcuc2V0V2lkdGggfHwgUE9QVVBfSU5JVElBTF9XSURUSDtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZXNpemUgPSAoZGl2VG9Qb3B1cCwgX2lkLCBzZXRXaWR0aCwgc2V0SGVpZ2h0LCByZWNlbnRlciwgZXZlbnQpID0+IHtcblx0XHQvLyBDb2RlIHRvIHN1cHBvcnQgb2xkIHJlc2l6ZSBtZXRob2QgUG9wdXBfV2luZG93X3Jlc2l6ZShzZXRXaWR0aCwgc2V0SGVpZ2h0LCByZWNlbnRlcilcblx0XHRpZiAodHlwZW9mIHJlY2VudGVyID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZWNlbnRlciA9IHNldEhlaWdodDtcblx0XHRcdHNldEhlaWdodCA9IHNldFdpZHRoO1xuXHRcdFx0c2V0V2lkdGggPSBkaXZUb1BvcHVwO1xuXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0ZGl2VG9Qb3B1cCA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkaXZUb1BvcHVwID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVzaXplIG11c3QgYmFpbCBvdXQgaW1tZWRpYXRlbHkgaWYgdGhlIHBvcHVwIGlzIG1hcmtlZCBhcyBjbG9zaW5nLCBhbmQgbm90IHN0YXJ0IHRoZSBhbmltYXRpb24uXG5cdFx0aWYgKCQuZGF0YShkaXZUb1BvcHVwLmdldCgwKSwgUE9QVVBfQ0xPU0lOR19UQUcpID09IFBPUFVQX0NMT1NJTkdfVkFMVUUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRsZXQgZG9jdW1lbnRTZXJ2ZXI7XG5cdFx0bGV0IGZyYW1lT2JqID0gZGl2VG9Qb3B1cC5maW5kKCdpZnJhbWUnKVswXTtcblxuXHRcdGlmICh0eXBlb2YgZnJhbWVPYmogPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGZyYW1lT2JqID0gd2luZG93LnRvcC4kKCcjaWZyYW1lXycgKyBfaWQpWzBdO1xuXHRcdH1cblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0ZG9jdW1lbnRTZXJ2ZXIgPSB3aW5kb3cudG9wLmRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKGh0dHBzPzpcXC9cXC9bXlxcL10qKS4qLywgJyQxJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50U2VydmVyID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oaHR0cHM/OlxcL1xcL1teXFwvXSopLiovLCAnJDEnKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGZyYW1lT2JqICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zdCBmcmFtZVNlcnZlciA9IGZyYW1lT2JqLnNyYy5yZXBsYWNlKC8oaHR0cHM/OlxcL1xcL1teXFwvXSopLiovLCAnJDEnKTtcblx0XHRcdGNvbnN0IHNhbWVPcmlnaW4gPSBmcmFtZVNlcnZlci50b0xvd2VyQ2FzZSgpID09IGRvY3VtZW50U2VydmVyLnRvTG93ZXJDYXNlKCkgfHwgZnJhbWVTZXJ2ZXIuaW5kZXhPZignaHR0cCcpICE9IDA7XG5cblx0XHRcdGlmICghc2FtZU9yaWdpbiAmJiAoc2V0V2lkdGggPT0gLTEgfHwgc2V0SGVpZ2h0ID09IC0xKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0EgUG9wdXAgd2l0aCBhIHNjcmVlbiBmcm9tIGEgZGlmZmVyZW50IHNlcnZlciAob3IgaHR0cHMpIG5lZWRzIGV4cGxpY2ljdCB3aWR0aCwgaGVpZ2h0IHNldC4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNhbWVPcmlnaW4pIHtcblx0XHRcdFx0aWYgKGZyYW1lT2JqLmNvbnRlbnREb2N1bWVudCAhPT0gbnVsbCB8fCBmcmFtZU9iai5jb250ZW50V2luZG93ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyRG9jID0gZnJhbWVPYmouY29udGVudERvY3VtZW50ID8gZnJhbWVPYmouY29udGVudERvY3VtZW50IDogZnJhbWVPYmouY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHRcdFx0XHRpZiAoaW5uZXJEb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCA9PSAwKVxuXHRcdFx0XHRcdFx0Ly8gU3RyYW5nZWx5IHRoaXMgZXZlbnQgaXMgYWxzbyB0cmlnZ2VyZWQgb24gY2xvc2Vcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgb2xkSGVpZ2h0O1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdG9sZEhlaWdodCA9IHdpbmRvdy50b3Bcblx0XHRcdFx0XHQuJChkaXZUb1BvcHVwKVxuXHRcdFx0XHRcdC5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKVxuXHRcdFx0XHRcdC5vdXRlckhlaWdodCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2xkSGVpZ2h0ID0gJChkaXZUb1BvcHVwKVxuXHRcdFx0XHRcdC5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKVxuXHRcdFx0XHRcdC5vdXRlckhlaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgd2lkdGggPSBzZXRXaWR0aCA9PSAtMSA/ICQoaW5uZXJEb2MpLndpZHRoKCkgOiBzZXRXaWR0aDtcblx0XHRcdGxldCBoZWlnaHQgPSBzZXRIZWlnaHQgPT0gLTEgPyAkKGlubmVyRG9jKS5oZWlnaHQoKSA6IHNldEhlaWdodDtcblxuXHRcdFx0dmFyIHRpdGxlSGVpZ2h0O1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdHRpdGxlSGVpZ2h0ID0gd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyJykuaGVpZ2h0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aXRsZUhlaWdodCA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXInKS5oZWlnaHQoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVmVyaWZ5IGlmIHRoZSBwYXJlbnQgd2luZG93IHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgcG9wLXVwIHdpbmRvdywgaWYgc28gc2V0IHRoZSByZXNwb25zaXZlIGNsYXNzIG9uIHRoZSBpZnJhbWUgYm9keSAoZm9yIHJlc3BvbnNpdmUgdGhlbWVzKVxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgd2lkdGgpIHtcblx0XHRcdFx0Ly8gb25seSBzZXQgdGhlIGNsYXNzIGlmIHRoZSBvcmlnaW4gaXMgdGhlIHNhbWVcblx0XHRcdFx0aWYgKHNhbWVPcmlnaW4pIHtcblx0XHRcdFx0XHQkKGlubmVyRG9jKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2JvZHknKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdSZXNwb25zaXZlJyk7XG5cdFx0XHRcdFx0d2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwOyAvLyAxMHB4IFwicGFkZGluZ1wiIGVmZmVjdCwgdG8ga2VlcCB0aGUgcG9wdXAgbG9vayBhbmQgZmVlbCBvbiB0b3Agb2YgY29udGVudFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpeCBpc3N1ZXMgd2l0aCBzY3JvbGxiYXJzXG5cdFx0XHRpZiAoc2V0SGVpZ2h0ID09IC0xKSB7XG5cdFx0XHRcdC8vIElFNyBuZWVkcyBhIGxpdHRsZSBtb3JlIHNwYWNlIHRvIHJlbW92ZSB0aGUgc2Nyb2xsYmFyc1xuXHRcdFx0XHRpZiAoJC5icm93c2VyLm1zaWUpIGhlaWdodCA9IGhlaWdodCArIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvL3doZW4gZXhwbGljaXRseSBzZXR0aW5nIHRoZSBoZWlnaHRcblx0XHRcdFx0aWYgKHNhbWVPcmlnaW4pe1xuXHRcdFx0XHRcdGlmKGlubmVyRG9jICE9IHVuZGVmaW5lZCl7XG5cdFx0XHRcdFx0XHRpbm5lckRvYy5ib2R5LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiVGhlIGlubmVyRG9jLmJvZHkgaXMgdW5kZWZpbmVkXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0d2luZG93LnRvcC4kKGRpdlRvUG9wdXApLmhlaWdodChoZWlnaHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JChkaXZUb1BvcHVwKS5oZWlnaHQoaGVpZ2h0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly9IaWRlIEVDVFxuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy50b3Bcblx0XHRcdFx0XHQuJChpbm5lckRvYylcblx0XHRcdFx0XHQuZmluZCgnLkVDVF9GZWVkYmFja0NvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0dmFyIGRpdlBvcHVwT3V0ZXJXaW5kb3cgPSB3aW5kb3cudG9wLiQoZGl2VG9Qb3B1cCkucGFyZW50cygnLm9zLWludGVybmFsLVBvcHVwJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKGlubmVyRG9jKVxuXHRcdFx0XHRcdC5maW5kKCcuRUNUX0ZlZWRiYWNrQ29udGFpbmVyJylcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR2YXIgZGl2UG9wdXBPdXRlcldpbmRvdyA9ICQoZGl2VG9Qb3B1cCkucGFyZW50cygnLm9zLWludGVybmFsLVBvcHVwJyk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBhbmltYXRlRmluYWwgPSB7fTtcblxuXHRcdFx0aWYgKHNldEhlaWdodCA9PSAtMSkge1xuXHRcdFx0XHR2YXIgb2xkVG9wID0gcGFyc2VJbnQoZGl2UG9wdXBPdXRlcldpbmRvdy5jc3MoJ3RvcCcpKTtcblx0XHRcdFx0aWYgKHJlY2VudGVyKSBhbmltYXRlRmluYWwudG9wID0gTWF0aC5tYXgoMjAsIG9sZFRvcCArIChvbGRIZWlnaHQgLSAoaGVpZ2h0ICsgdGl0bGVIZWlnaHQpKSAvIDIpO1xuXHRcdFx0XHRhbmltYXRlRmluYWwuaGVpZ2h0ID0gaGVpZ2h0ICsgdGl0bGVIZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZXRXaWR0aCA9PSAtMSkge1xuXHRcdFx0XHR2YXIgb2xkTGVmdCA9IHBhcnNlSW50KGRpdlBvcHVwT3V0ZXJXaW5kb3cuY3NzKCdsZWZ0JykpO1xuXHRcdFx0XHRpZiAocmVjZW50ZXIpIGFuaW1hdGVGaW5hbC5sZWZ0ID0gb2xkTGVmdCArIChkaXZQb3B1cE91dGVyV2luZG93LndpZHRoKCkgLSB3aWR0aCkgLyAyO1xuXHRcdFx0XHRhbmltYXRlRmluYWwud2lkdGggPSB3aWR0aDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRkaXZQb3B1cE91dGVyV2luZG93LndpZHRoKCkgPT0gYW5pbWF0ZUZpbmFsLndpZHRoICYmXG5cdFx0XHRcdGRpdlBvcHVwT3V0ZXJXaW5kb3cuaGVpZ2h0KCkgPT0gYW5pbWF0ZUZpbmFsLmhlaWdodCAtICgkLmJyb3dzZXIubXNpZSA/IDEgOiAwKVxuXHRcdFx0KSB7XG5cdFx0XHRcdCQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudD4uTGF5b3V0UG9wdXAtbG9hZGluZycpLmhpZGUoKTtcblx0XHRcdFx0JChkaXZUb1BvcHVwKS5oZWlnaHQoaGVpZ2h0IC0gKCQuYnJvd3Nlci5tc2llID8gMSA6IDApKTsgLy8gcmVzdG9yZSBzaXplXG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyBub3RoaW5nIHRvIGRvLi4uXG5cdFx0XHR9XG5cblx0XHRcdC8vIGhpZGUgY29udGVudCBpbiBmaXJzdCByZXNpemUgLSByZWFkanVzdG1lbnRzIHdpbGwgbm90IGZsaWNrclxuXHRcdFx0aWYgKGRpdlBvcHVwT3V0ZXJXaW5kb3cud2lkdGgoKSA9PSBQT1BVUF9JTklUSUFMX1dJRFRIICYmIGRpdlBvcHVwT3V0ZXJXaW5kb3cuaGVpZ2h0KCkgPT0gUE9QVVBfSU5JVElBTF9IRUlHSFQpIHtcblx0XHRcdFx0JChmcmFtZU9iaikuaGVpZ2h0KDApO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb25BbmltYXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRcdFx0d2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlLW5vLXRpdGxlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wXG5cdFx0XHRcdFx0XHRcdC4kKGRpdlRvUG9wdXApXG5cdFx0XHRcdFx0XHRcdC5maW5kKCdpZnJhbWUnKVxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KCcxMDAlJylcblx0XHRcdFx0XHRcdFx0LndpZHRoKGFuaW1hdGVGaW5hbC53aWR0aCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXItY2xvc2Utbm8tdGl0bGUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHRcdFx0XHRcdCQoZGl2VG9Qb3B1cClcblx0XHRcdFx0XHRcdFx0LmZpbmQoJ2lmcmFtZScpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoJzEwMCUnKVxuXHRcdFx0XHRcdFx0XHQud2lkdGgoYW5pbWF0ZUZpbmFsLndpZHRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDEzKTtcblx0XHRcdH07XG5cblx0XHRcdHZhciBkaXZQbGVhc2VXYWl0O1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdGRpdlBsZWFzZVdhaXQgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudD4uTGF5b3V0UG9wdXAtbG9hZGluZycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGl2UGxlYXNlV2FpdCA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudD4uTGF5b3V0UG9wdXAtbG9hZGluZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXZQbGVhc2VXYWl0LmhpZGUoKTtcblxuXHRcdFx0aWYgKHNldEhlaWdodCA9PSAtMSB8fCBzZXRXaWR0aCA9PSAtMSkge1xuXHRcdFx0XHRkaXZQb3B1cE91dGVyV2luZG93LmFuaW1hdGUoYW5pbWF0ZUZpbmFsLCB7XG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMCxcblx0XHRcdFx0XHRjb21wbGV0ZTogb25BbmltYXRpb25Db21wbGV0ZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRpbm5lckRvYyA9IG51bGw7XG5cdFx0XHRkaXZQb3B1cE91dGVyV2luZG93ID0gbnVsbDtcblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cudG9wLiQuZGF0YShldmVudC50YXJnZXQsICdvcy1pbnRlcm5hbC1wcm9jZXNzaW5nJywgZmFsc2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2xvc2UgPSAoKSA9PiB7XG5cdFx0bGV0IHBvcHVwVG9DbG9zZTtcblx0XHRsZXQgcG9wdXBDb250YWluZXI7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdHBvcHVwVG9DbG9zZSA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHRwb3B1cENvbnRhaW5lciA9IHdpbmRvdy50b3AuJCgnLlNhcHBoaXJlUG9wdXAnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXBUb0Nsb3NlID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHRwb3B1cENvbnRhaW5lciA9ICQoJy5TYXBwaGlyZVBvcHVwJyk7XG5cdFx0fVxuXG5cdFx0cG9wdXBUb0Nsb3NlLmRhdGEoUE9QVVBfQ0xPU0lOR19UQUcsIFBPUFVQX0NMT1NJTkdfVkFMVUUpO1xuXG5cdFx0Ly9zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdGlmIChwb3B1cFRvQ2xvc2UubGVuZ3RoKSBwb3B1cFRvQ2xvc2UuZGlhbG9nKCdjbG9zZScpO1xuXG5cdFx0cG9wdXBUb0Nsb3NlLnJlbW92ZSgpO1xuXHRcdHBvcHVwQ29udGFpbmVyLnJlbW92ZSgpO1xuXHRcdC8vfSwgMCk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TGlua0hSRUYgPSB3aWRnZXQgPT4ge1xuXHRcdGxldCBsaW5rSHJlZjtcblx0XHRsZXQgaXNBQnV0dG9uID0gZmFsc2U7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly9DaGVja3MgaWYgdGhlIGlkIGlzIGZyb20gYSBsaW5rIG9yIG5vdFxuXHRcdFx0bGlua0hyZWYgPSAkKHdpZGdldCkuYXR0cignaHJlZicpO1xuXG5cdFx0XHQvL1Rlc3RzIGZvciB2aXNpYmlsaXR5L2V4aXN0ZW5jZVxuXHRcdFx0aWYgKHR5cGVvZiBsaW5rSHJlZiA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRjb25zdCBvbkNsaWNrID0gd2lkZ2V0LmdldEF0dHJpYnV0ZSgnb25jbGljaycpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2Ygb25DbGljayAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGlzQUJ1dHRvbiA9IHRydWU7XG5cblx0XHRcdFx0XHRpZiAob25DbGljayAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRsZXQgaHJlZk1hdGNoO1xuXG5cdFx0XHRcdFx0XHRpZiAoKGhyZWZNYXRjaCA9IG9uQ2xpY2sudG9TdHJpbmcoKS5tYXRjaCgvaHJlZj0nKFteJ10qKScvKSkgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRsaW5rSHJlZiA9IGhyZWZNYXRjaFsxXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0cmV0dXJuIFtsaW5rSHJlZiwgaXNBQnV0dG9uXTtcblx0fTtcblxuXHRjb25zdCBvcGVuUG9wdXAgPSAoZGl2VG9Qb3B1cCwgZGl2UGxlYXNlV2FpdCwgbG9hZFRhcmdldFBhZ2UsIGV2ZW50LCBjb25maWcpID0+IHtcblx0XHQvLyBEZXN0cm95IGFueSBwcmV2aW91cyBkaWFsb2dcblx0XHRjbG9zZShudWxsKTtcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0Y29uc3QgJGpQYXJlbnQgPSB3aW5kb3cudG9wLiQ7XG5cdFx0XHQkalBhcmVudCgnLm9zLWludGVybmFsLVBvcHVwJykucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYW55IGNsb3NlIGlzIHBlbmRpbmcsIHNjaGVkdWxlIHRvIGV4ZWN1dGUgaXRzZWxmIGFzeW5jaHJvbm91c2x5IGV4aXRcblx0XHQvLyBJZiBubyBjbG9zZSBpcyBwZW5kaW5nLCBjb250aW51ZSB3aXRoIG9wZW4gb3BlcmF0aW9uXG5cdFx0bGV0IGNsb3NpbmdQb3B1cHM7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIGNsb3NpbmdQb3B1cHMgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXHRcdGVsc2UgY2xvc2luZ1BvcHVwcyA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjbG9zaW5nUG9wdXBzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoJC5kYXRhKGNsb3NpbmdQb3B1cHMuZ2V0KGkpLCBQT1BVUF9DTE9TSU5HX1RBRykgPT0gUE9QVVBfQ0xPU0lOR19WQUxVRSkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG9wZW5Qb3B1cChkaXZUb1BvcHVwLCBkaXZQbGVhc2VXYWl0LCBsb2FkVGFyZ2V0UGFnZSwgZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHRcdH0sIDEzKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IF9kaWFsb2c7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRwb3B1cENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1NhcHBoaXJlUG9wdXAnKTtcblxuXHRcdFx0d2luZG93LnRvcC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcblxuXHRcdFx0X2RpYWxvZyA9IHdpbmRvdy50b3AuJChkaXZUb1BvcHVwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnPGRpdiBjbGFzcz1cIlNhcHBoaXJlUG9wdXBcIj48L2Rpdj4nKS5hcHBlbmRUbygnYm9keScpO1xuXG5cdFx0XHRfZGlhbG9nID0gJChkaXZUb1BvcHVwKTtcblx0XHR9XG5cblx0XHQkKGRpdlBsZWFzZVdhaXQpLnNob3coKTtcblxuXHRcdGlmICgkKCcuSVNpZGViYXInKS5sZW5ndGgpIHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uub3BlblNpZGViYXJJZnJhbWUoMCk7XG5cblx0XHRfZGlhbG9nLnNob3coKS5kaWFsb2coe1xuXHRcdFx0YXBwZW5kVG86ICcuU2FwcGhpcmVQb3B1cCcsXG5cdFx0XHRkaWFsb2dDbGFzczogJ29zLWludGVybmFsLVBvcHVwJyxcblx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHRhdXRvUmVzaXplOiBmYWxzZSxcblx0XHRcdGNsb3NlT25Fc2NhcGU6ICFjb25maWcuaGlkZUNsb3NlQnV0dG9uLFxuXHRcdFx0YmdpZnJhbWU6IHRydWUsXG5cdFx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHRcdFx0YXV0b09wZW46IHRydWUsXG5cdFx0XHR0aXRsZTogY29uZmlnLnNldFRpdGxlLFxuXHRcdFx0bW9kYWw6ICEoY29uZmlnLnVzZU1vZGFsID09PSBmYWxzZSksXG5cdFx0XHRoZWlnaHQ6IGNvbmZpZy5zZXRIZWlnaHQgPT0gLTEgPyBQT1BVUF9JTklUSUFMX0hFSUdIVCA6IGNvbmZpZy5zZXRIZWlnaHQsXG5cdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXG5cdFx0XHR3aWR0aDogY29uZmlnLnNldFdpZHRoID09IC0xID8gUE9QVVBfSU5JVElBTF9XSURUSCA6IGNvbmZpZy5zZXRXaWR0aCxcblx0XHRcdHpJbmRleDogUE9QVVBfV0lORE9XX0lOREVYLFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBJZiB0aGUgcG9wdXAgaXMgY2xvc2VkIGJlZm9yZSBpdCBpcyByZXNpemVkIChFU0MpIHdlIG5lZWQgdG8gc2V0IHRoZSBwcm9jZXNzaW5nIGV2ZW50IHRvIGZhbHNlLlxuXHRcdFx0XHQkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycsIGZhbHNlKTtcblxuXHRcdFx0XHRfZGlhbG9nLmZpbmQoJ2lmcmFtZScpLnVuYmluZCgnbG9hZCcpO1xuXHRcdFx0XHRfZGlhbG9nLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsICdhYm91dDpibGFuaycpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X2RpYWxvZy5maW5kKCdpZnJhbWUnKS5lbXB0eSgpO1xuXHRcdFx0XHRcdF9kaWFsb2cuZW1wdHkoKTtcblx0XHRcdFx0fSwgMTMpO1xuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdF9kaWFsb2cuZmluZCgnaWZyYW1lJykuaGVpZ2h0KDApO1xuXHRcdF9kaWFsb2cucGFyZW50cygnLm9zLWludGVybmFsLXVpLWRpYWxvZycpLmRyb3BTaGFkb3coKTtcblxuXHRcdGlmIChjb25maWcuQ3NzQ2xhc3NlcyAhPT0gJyAnKSB7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZycpLmFkZENsYXNzKGNvbmZpZy5Dc3NDbGFzc2VzKTtcblx0XHRcdGVsc2UgJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZycpLmFkZENsYXNzKGNvbmZpZy5Dc3NDbGFzc2VzKTtcblx0XHR9XG5cblx0XHRsb2FkVGFyZ2V0UGFnZSgpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwID0geyBjcmVhdGUsIGNsb3NlLCByZXNpemUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlUmFkaW9CdXR0b24gKi9cclxuU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUmFkaW9CdXR0b24gPSB3aWRnZXRJZCA9PiB7XHJcblx0Y29uc3QgJHdpZGdldCA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cdGNvbnN0ICRpbnB1dCA9ICR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcblx0Y29uc3QgJGxhYmVsID0gJHdpZGdldC5maW5kKCcuQnV0dG9uUmFkaW9JbnBfcmFkaW9UZXh0Jyk7XHJcblx0Y29uc3QgbmFtZSA9ICRpbnB1dC5wcm9wKCduYW1lJyk7XHJcblxyXG5cdGNvbnN0IGFkZFJlbW92ZUNsYXNzID0gKCRlbCwgdG9BZGQpID0+IHtcclxuXHRcdGlmICh0b0FkZCkgJGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdGVsc2UgJGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBpc0NoZWNrZWQgPSAkZWwgPT4ge1xyXG5cdFx0aWYgKCRlbC5pcygnOmNoZWNrZWQnKSkgYWRkUmVtb3ZlQ2xhc3MoJHdpZGdldCwgdHJ1ZSk7XHJcblx0XHRlbHNlIGFkZFJlbW92ZUNsYXNzKCR3aWRnZXQsIGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHQkaW5wdXQuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0XHQkKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIiR7bmFtZX1cIl1gKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRhZGRSZW1vdmVDbGFzcygkKHRoaXMpLmNsb3Nlc3QoJy5CdXR0b25SYWRpb0lucCcpLCAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHQkaW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aXNDaGVja2VkKCQodGhpcykpO1xyXG5cdH0pO1xyXG5cclxuXHQkbGFiZWwuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCAkY2xvc2VzdEVsZW1lbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5CdXR0b25SYWRpb0lucCcpO1xyXG5cclxuXHRcdGlmICgkY2xvc2VzdEVsZW1lbnQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHQkaW5wdXRbMF0uY2xpY2soKTtcclxuXHRcdC8vaXNDaGVja2VkKCRpbnB1dCk7XHJcblx0fSk7XHJcblxyXG5cdGlzQ2hlY2tlZCgkaW5wdXQpO1xyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgU2NhbGVNYWluU3RydWN0dXJlICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XHJcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdFx0c2V0dXBTY2FsZSgpO1xyXG5cdFx0XHRiaW5kQ2xpY2tzKCk7XHJcblxyXG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmXHJcblx0XHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGJpbmRDbGlja3MoKTtcclxuXHRcdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2NhbGVDb3VudCA9IGNvbmYgPT4ge1xyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIENhcmRTY2FsZSA9IGNvbmYuSXNDYXJkU2NhbGU7XHJcblx0XHRcdHZhciBSdWxlclNjYWxlID0gY29uZi5Jc1J1bGVyU2NhbGU7XHJcblx0XHRcdHZhciBNdWx0aXBsZVNjYWxlID0gY29uZi5Jc011bHRpcGxlU2NhbGU7XHJcblx0XHRcdHZhciAkdG90YWxQbGFjZSA9ICQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfZm9vdGVyUmVzdWx0Jyk7XHJcblx0XHRcdHZhciB0b3RhbENhcmRTY2FsZSA9IDA7XHJcblx0XHRcdHZhciB0b3RhbE11bHRpcGxlU2NhbGUgPSAwO1xyXG5cdFx0XHR2YXIgdG90YWxSdWxlclNjYWxlID0gMDtcclxuXHJcblx0XHRcdHZhciBTY2FsZVR5cGVDYXJkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIHRvdGFsU2VsZWN0ZWQgPSAkKCcuU2NhbGVMaXN0LkNhcmRTY2FsZScpLmZpbmQoJy5TY2FsZUNhcmQuYWN0aXZlJykubGVuZ3RoO1xyXG5cdFx0XHRcdHZhciB0b3RhbE51bWJlciA9IDA7XHJcblx0XHRcdFx0JChcIi5TY2FsZUxpc3QuQ2FyZFNjYWxlOm5vdCgnLmlzVGl0bGUnKVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZmluZCgnLlNjYWxlQ2FyZCcpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0dG90YWxOdW1iZXIgKz0gMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYgKHRvdGFsTnVtYmVyID09PSB0b3RhbFNlbGVjdGVkKSB7XHJcblx0XHRcdFx0XHR2YXIgdG90YWwgPSBbXTtcclxuXHRcdFx0XHRcdHZhciBpbnB1dFZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHR2YXIgJHNjYWxlUm93ID0gJCgnLlNjYWxlTGlzdC5DYXJkU2NhbGU6bm90KC5pc1RpdGxlKScpO1xyXG5cdFx0XHRcdFx0JHNjYWxlUm93LmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGlucHV0VmFsdWUgPSAkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TY2FsZUNhcmQuYWN0aXZlJylcclxuXHRcdFx0XHRcdFx0XHQuZGF0YSgndmFsdWUnKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2NhbGVMaXN0X2lucHV0VmFsdWUgaW5wdXQnKVxyXG5cdFx0XHRcdFx0XHRcdC52YWwoaW5wdXRWYWx1ZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQkKCcuU2NhbGVMaXN0LkNhcmRTY2FsZSAuU2NhbGVDYXJkLmFjdGl2ZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHRvdGFsLnB1c2goJCh0aGlzKS5kYXRhKCd2YWx1ZScpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dmFyIGZpbmFsVG90YWwgPSBldmFsKHRvdGFsLmpvaW4oJysnKSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmluYWxUb3RhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgU2NhbGVUeXBlUnVsZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgYWN0aXZlUnVsZXJWYWx1ZSA9ICcnO1xyXG5cdFx0XHRcdHZhciAkYWN0aXZlUnVsZXIgPSAkKCcuUnVsZXJTY2FsZV9udW1iZXIuYWN0aXZlJyk7XHJcblx0XHRcdFx0aWYgKCRhY3RpdmVSdWxlci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHR2YXIgYWN0aXZlUnVsZXJWYWx1ZSA9ICQoJy5SdWxlclNjYWxlX251bWJlci5hY3RpdmUnKVxyXG5cdFx0XHRcdFx0XHQuY2xvc2VzdCgnLlJ1bGVyU2NhbGUnKVxyXG5cdFx0XHRcdFx0XHQuZGF0YSgpLnZhbHVlO1xyXG5cdFx0XHRcdFx0JCgnLlNjYWxlTGlzdC5SdWxlcicpXHJcblx0XHRcdFx0XHRcdC5maW5kKCcuU2NhbGVMaXN0X2lucHV0VmFsdWUgaW5wdXQnKVxyXG5cdFx0XHRcdFx0XHQudmFsKGFjdGl2ZVJ1bGVyVmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBhY3RpdmVSdWxlclZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gYWN0aXZlUnVsZXJWYWx1ZTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBTY2FsZVR5cGVNdWx0aXBsZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBudW1iZXJvZkNvbHMgPSAkKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUnKVxyXG5cdFx0XHRcdFx0LmZpcnN0KClcclxuXHRcdFx0XHRcdC5maW5kKCcuQnV0dG9uR3JvdXBTY2FsZScpLmxlbmd0aDtcclxuXHRcdFx0XHR2YXIgbnVtYmVyb2ZSb3dzID0gJCgnLkJ1dHRvbkdyb3VwU2NhbGUnKS5jbG9zZXN0KCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bm90KC5pc1RpdGxlKTpub3QoLmlzU3VidG90YWwpJylcclxuXHRcdFx0XHRcdC5sZW5ndGg7XHJcblx0XHRcdFx0dmFyIHRvdGFsID0gW107XHJcblx0XHRcdFx0dmFyIGkgPSAwO1xyXG5cdFx0XHRcdHZhciBqID0gMDtcclxuXHRcdFx0XHR2YXIgY291bnRBY3RpdmUgPSAwO1xyXG5cdFx0XHRcdHZhciBjb3VudGFsbEFjdGl2ZUNvbHMgPSAwO1xyXG5cdFx0XHRcdHZhciB0b3RhbE9mSXRlbXMgPSBudW1iZXJvZkNvbHMgKiBudW1iZXJvZlJvd3M7XHJcblx0XHRcdFx0dmFyIHRvdGFsU2NvcmUgPSBbXTtcclxuXHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG51bWJlcm9mQ29sczsgaSsrKSB7XHJcblx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbnVtYmVyb2ZSb3dzOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIFNjYWxlTGlzdFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0XHRcdFx0XHQnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlOm5vdCguaXNUaXRsZSk6bm90KC5pc1N1YnRvdGFsKSdcclxuXHRcdFx0XHRcdFx0KVtqXTtcclxuXHRcdFx0XHRcdFx0dmFyIEJ1dHRvblNjYWxlU2VsZWN0ZWQgPSBTY2FsZUxpc3RTZWxlY3RlZC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBTY2FsZScpW2ldO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKEJ1dHRvblNjYWxlU2VsZWN0ZWQucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwX2J1dHRvbi5hY3RpdmUnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNjYWxlVmFsdWUgPSBCdXR0b25TY2FsZVNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cF9idXR0b24uYWN0aXZlJylbMF0uaW5uZXJUZXh0O1xyXG5cdFx0XHRcdFx0XHRcdHRvdGFsLnB1c2gocGFyc2VJbnQoU2NhbGVWYWx1ZSkpO1xyXG5cdFx0XHRcdFx0XHRcdHRvdGFsU2NvcmUucHVzaChwYXJzZUludChTY2FsZVZhbHVlKSk7XHJcblx0XHRcdFx0XHRcdFx0Y291bnRBY3RpdmUgPSBjb3VudEFjdGl2ZSArIDE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICgkKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUuaXNTdWJ0b3RhbCcpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNvdW50QWN0aXZlID09PSBudW1iZXJvZlJvd3MpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc3ViVG90YWwgPSBldmFsKHRvdGFsLmpvaW4oJysnKSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHN1YnRvdGFsU2NhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUuaXNTdWJ0b3RhbCAuQnV0dG9uR3JvdXBTY2FsZScpW2ldO1xyXG5cdFx0XHRcdFx0XHRcdHN1YnRvdGFsU2NhbGUuaW5uZXJUZXh0ID0gc3ViVG90YWw7XHJcblx0XHRcdFx0XHRcdFx0Y291bnRhbGxBY3RpdmVDb2xzID0gY291bnRhbGxBY3RpdmVDb2xzICsgMTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y291bnRBY3RpdmUgPSAwO1xyXG5cdFx0XHRcdFx0dG90YWwgPSBbXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBfYnV0dG9uLmFjdGl2ZScpLmxlbmd0aCA9PT0gdG90YWxPZkl0ZW1zKSB7XHJcblx0XHRcdFx0XHR2YXIgaSA9IDA7XHJcblx0XHRcdFx0XHR2YXIgaiA9IDA7XHJcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtYmVyb2ZSb3dzOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIFNjYWxlTGlzdFJvdyA9ICQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpub3QoLmlzVGl0bGUpOm5vdCguaXNTdWJ0dG90YWwpJylbaV07XHJcblx0XHRcdFx0XHRcdHZhciAkU2NhbGVMaXN0SW5wdXQgPSAkKFNjYWxlTGlzdFJvdykuZmluZCgnLlNjYWxlTGlzdF9pbnB1dFZhbHVlIGlucHV0Jyk7XHJcblx0XHRcdFx0XHRcdHZhciB2YWx1ZXNTZWxlY3RlZCA9ICcnO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbnVtYmVyb2ZDb2xzOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgQWN0aXZlQnV0dG9uID0gJChTY2FsZUxpc3RSb3cpLmZpbmQoJy5CdXR0b25Hcm91cF9idXR0b24uYWN0aXZlJylbal07XHJcblx0XHRcdFx0XHRcdFx0dmFyIEFjdGl2ZVZhbHVlID0gQWN0aXZlQnV0dG9uLmlubmVyVGV4dDtcclxuXHRcdFx0XHRcdFx0XHQvL3ZhbHVlc1NlbGVjdGVkPXZhbHVlc1NlbGVjdGVkKycsJytBY3RpdmVWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaiA9PT0gbnVtYmVyb2ZDb2xzIC0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWVzU2VsZWN0ZWQgKz0gQWN0aXZlVmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlc1NlbGVjdGVkICs9IEFjdGl2ZVZhbHVlICsgJywnO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkU2NhbGVMaXN0SW5wdXQudmFsKHZhbHVlc1NlbGVjdGVkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZhciBnZXRUb3RhbCA9IGV2YWwodG90YWxTY29yZS5qb2luKCcrJykpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGdldFRvdGFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGNvbnN0IFRvdGFsQ2FsYyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCBpc0VtcHR5ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGlmIChDYXJkU2NhbGUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdHRvdGFsQ2FyZFNjYWxlID0gU2NhbGVUeXBlQ2FyZCgpO1xyXG5cdFx0XHRcdFx0aXNFbXB0eSA9IHRvdGFsQ2FyZFNjYWxlID09PSAnJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChSdWxlclNjYWxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHR0b3RhbFJ1bGVyU2NhbGUgPSBTY2FsZVR5cGVSdWxlcigpO1xyXG5cdFx0XHRcdFx0aXNFbXB0eSA9IHRvdGFsUnVsZXJTY2FsZSA9PT0gJyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoTXVsdGlwbGVTY2FsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0dG90YWxNdWx0aXBsZVNjYWxlID0gU2NhbGVUeXBlTXVsdGlwbGUoKTtcclxuXHRcdFx0XHRcdGlzRW1wdHkgPSB0b3RhbE11bHRpcGxlU2NhbGUgPT09ICcnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y29uc3QgJGZvb3RlclJlc3VsdCA9ICQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfZm9vdGVyUmVzdWx0Jyk7XHJcblx0XHRcdFx0Y29uc3QgJHRvdGFsU2NvcmUgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX3RvdGFsU2NvcmUnKTtcclxuXHRcdFx0XHRjb25zdCAkc2NvcmVMYWJlbCA9ICQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfZm9vdGVyUmVzdWx0IC5Ub3RhbExhYmVsJyk7XHJcblxyXG5cdFx0XHRcdGlmIChpc0VtcHR5KSB7XHJcblx0XHRcdFx0XHQkdG90YWxTY29yZS50ZXh0KCctLS0nKTtcclxuXHRcdFx0XHRcdCRzY29yZUxhYmVsLnRleHQoJy0nKTtcclxuXHJcblx0XHRcdFx0XHQkZm9vdGVyUmVzdWx0LnJlbW92ZUNsYXNzKCdDb2xvclpldGFCRycpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIWlzTmFOKHRvdGFsTXVsdGlwbGVTY2FsZSkgJiYgIWlzTmFOKHRvdGFsQ2FyZFNjYWxlKSAmJiAhaXNOYU4odG90YWxSdWxlclNjYWxlKSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgdG90YWxBYnNvbHV0ZVNjb3JlID0gdG90YWxDYXJkU2NhbGUgKyB0b3RhbE11bHRpcGxlU2NhbGUgKyB0b3RhbFJ1bGVyU2NhbGU7XHJcblx0XHRcdFx0XHRjb25zdCB0b3RhbEFic29sdXRlTGFiZWwgPSB0b3RhbEFic29sdXRlU2NvcmUgPiAxMSA/ICdIaWdoJyA6ICdMb3cnO1xyXG5cclxuXHRcdFx0XHRcdCR0b3RhbFNjb3JlLnRleHQodG90YWxBYnNvbHV0ZUxhYmVsKTtcclxuXHRcdFx0XHRcdCRzY29yZUxhYmVsLnRleHQodG90YWxBYnNvbHV0ZVNjb3JlKTtcclxuXHJcblx0XHRcdFx0XHQkZm9vdGVyUmVzdWx0LmFkZENsYXNzKCdDb2xvclpldGFCRycpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0ICRoaWRkZW5MaW5rID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9oaWRkaW5nTGluayBhJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCRoaWRkZW5MaW5rLmxlbmd0aCA+IDApICRoaWRkZW5MaW5rLmNsaWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKENhcmRTY2FsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdCQoJy5TY2FsZUNhcmQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xyXG5cdFx0XHRcdFx0XHQkcGFyZW50U2NhbGVDYXJkID0gJCh0aGlzKS5jbG9zZXN0KCcuU2NhbGVMaXN0LkNhcmRTY2FsZScpO1xyXG5cdFx0XHRcdFx0XHQkcGFyZW50U2NhbGVDYXJkLmZpbmQoJy5TY2FsZUNhcmQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHRUb3RhbENhbGMoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRUb3RhbENhbGMoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKFJ1bGVyU2NhbGUgPT09IHRydWUpIHtcclxuXHRcdFx0XHQkKCcuUnVsZXJTY2FsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZmluZCgnLnZpZXdtb2RlJykubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdHZhciAkcnVsZXJTY2FsZUxpc3QgPSAkKHRoaXMpLmNsb3Nlc3QoJy5TY2FsZUxpc3QuUnVsZXInKTtcclxuXHRcdFx0XHRcdFx0JHJ1bGVyU2NhbGVMaXN0LmZpbmQoJy5SdWxlclNjYWxlX251bWJlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuUnVsZXJTY2FsZV9udW1iZXInKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFRvdGFsQ2FsYygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoTXVsdGlwbGVTY2FsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdHZhciBjb3VudGVyO1xyXG5cdFx0XHRcdHZhciBTY2FsZUxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1RpdGxlJyk7XHJcblx0XHRcdFx0dmFyIFNjYWxlTGlzdFN1YlRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzU3VidG90YWwnKTtcclxuXHRcdFx0XHR2YXIgU2NhbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlOm5vdCguaXNUaXRsZSk6bm90KC5pc1N1YnRvdGFsKScpO1xyXG5cclxuXHRcdFx0XHQkKCcuQnV0dG9uR3JvdXBTY2FsZScpXHJcblx0XHRcdFx0XHQuY2xvc2VzdCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlOm50aC1jaGlsZCgybiknKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdFdmVuTGluZScpO1xyXG5cdFx0XHRcdHZhciBudW1iZXJPZkdyb3VwU2NhbGUgPSBTY2FsZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKS5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdCQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsIC5CdXR0b25Hcm91cFNjYWxlJykudGV4dCgwKTtcclxuXHRcdFx0XHQvLyBDaGVjayBpZiBNdWx0aXBsZSBTY2FsZSBUaXRsZSBleGlzdHMgdGhlbiBhZGp1c3QgdGl0bGUgd2lkdGhcclxuXHRcdFx0XHRpZiAoJCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzVGl0bGUnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRmb3IgKGNvdW50ZXIgPSAwOyBjb3VudGVyIDwgbnVtYmVyT2ZHcm91cFNjYWxlOyBjb3VudGVyKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIFNjYWxlTGlzdFdpZHRoID0gU2NhbGVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJylbY291bnRlcl0ub2Zmc2V0V2lkdGg7XHJcblx0XHRcdFx0XHRcdFNjYWxlTGlzdFRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJylbY291bnRlcl0uc3R5bGUud2lkdGggPSBTY2FsZUxpc3RXaWR0aCArICdweCc7XHJcblx0XHRcdFx0XHRcdFNjYWxlTGlzdFN1YlRvdGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJylbY291bnRlcl0uc3R5bGUud2lkdGggPSBTY2FsZUxpc3RXaWR0aCArICdweCc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkKCcuQnV0dG9uR3JvdXBfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRUb3RhbENhbGMoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRUb3RhbENhbGMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0c2V0dXBTY2FsZSA9ICgpID0+IHtcclxuXHRcdHZhciBJc0NhcmRTY2FsZTtcclxuXHRcdHZhciBJc1J1bGVyU2NhbGU7XHJcblx0XHR2YXIgSXNNdWx0aXBsZVNjYWxlO1xyXG5cclxuXHRcdCQoJy5TY2FsZUNhcmQnKS5sZW5ndGggPiAwID8gKElzQ2FyZFNjYWxlID0gdHJ1ZSkgOiAoSXNDYXJkU2NhbGUgPSBmYWxzZSk7XHJcblx0XHQkKCcuQnV0dG9uR3JvdXBTY2FsZScpLmxlbmd0aCA+IDAgPyAoSXNNdWx0aXBsZVNjYWxlID0gdHJ1ZSkgOiAoSXNNdWx0aXBsZVNjYWxlID0gZmFsc2UpO1xyXG5cdFx0JCgnLlJ1bGVyU2NhbGUnKS5sZW5ndGggPiAwID8gKElzUnVsZXJTY2FsZSA9IHRydWUpIDogKElzUnVsZXJTY2FsZSA9IGZhbHNlKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRTY2FsZUNvdW50KHtcclxuXHRcdFx0XHRJc0NhcmRTY2FsZTogSXNDYXJkU2NhbGUsXHJcblx0XHRcdFx0SXNSdWxlclNjYWxlOiBJc1J1bGVyU2NhbGUsXHJcblx0XHRcdFx0SXNNdWx0aXBsZVNjYWxlOiBJc011bHRpcGxlU2NhbGUsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgNTAwKTtcclxuXHJcblx0XHRpZiAoJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCcpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfdG90YWxTY29yZScpLnRleHQoJy0tLScpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXNldFNjYWxlcyA9ICgpID0+IHtcclxuXHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfY29udGVudCcpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfb3B0aW9ucyAuVG9nZ2xlSXRlbUNvbnRyb2wnKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfdG90YWxTY29yZScpLnRleHQoJy0tLScpO1xyXG5cdFx0XHRzZXR1cFNjYWxlKCk7XHJcblx0XHR9LCA2MDApO1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9jb250ZW50JykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0fSwgMTAwMCk7XHJcblx0fTtcclxuXHJcblx0YmluZENsaWNrcyA9ICgpID0+IHtcclxuXHRcdGlmICgkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sICcpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JCgnLlNjYWxlTWFpblN0cnVjdHVyZScpXHJcblx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCAnLlRvZ2dsZUl0ZW1Db250cm9sJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRyZXNldFNjYWxlcygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgkKCcuTmF2aWdhdGlvbl9jb250cm9sJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkKCcuTmF2aWdhdGlvbl9yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCEkKHRoaXMpXHJcblx0XHRcdFx0XHRcdC5maW5kKCdhJylbMF1cclxuXHRcdFx0XHRcdFx0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0cmVzZXRTY2FsZXMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JCgnLk5hdmlnYXRpb25fbGVmdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCEkKHRoaXMpXHJcblx0XHRcdFx0XHRcdC5maW5kKCdhJylbMF1cclxuXHRcdFx0XHRcdFx0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0cmVzZXRTY2FsZXMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TY2FsZU1haW5TdHJ1Y3R1cmUgPSB7IGNyZWF0ZSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IFRvZ2dsZUl0ZW1Db250cm9sICovXHJcblNhcHBoaXJlV2lkZ2V0cy5Ub2dnbGVJdGVtQ29udHJvbCA9ICgpID0+IHtcclxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wnKVxyXG5cdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcblx0XHRcdFx0XHQubm90KCc6Y2hlY2tlZCcpXHJcblx0XHRcdFx0XHQucHJvcCgnY2hlY2tlZCcsIHRydWUpXHJcblx0XHRcdFx0XHQuY2xpY2soKTtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG5cdFx0XHRcdFx0XHQuaXMoJzpjaGVja2VkJylcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdG9zQWpheEJhY2tlbmQgJiZcclxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wgaW5wdXRbdHlwZT1cInJhZGlvXCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wnKVxyXG5cdFx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXMoJzpjaGVja2VkJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9KTtcclxufTtcclxuIiwidmFyIFNlYXJjaFNlbGVjdERlZmluZSA9ICh3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lID0gd2luZG93LlNlYXJjaFNlbGVjdERlZmluZSB8fCB7fSk7XHJcblxyXG5TYXBwaGlyZVdpZGdldHMuU2VsZWN0U1NEID0gZnVuY3Rpb24gU1NEU2VsZWN0U2V0dXAoY29uZmlnKSB7XHJcblx0JChmdW5jdGlvbigpIHtcclxuXHRcdHZhciAkU1NEc2VsZWN0SWQgPSAkKCcjJyArIGNvbmZpZy5TU0RTZWxlY3RJZCk7XHJcblx0XHR2YXIgaXNNdWx0aXBsZSA9IGNvbmZpZy5pc011bHRpcGxlO1xyXG5cclxuXHRcdHZhciAkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xyXG5cdFx0dmFyICRDb21wb25lbnRTU0RpbnB1dCA9ICRDb21wb25lbnRTU0QuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKTtcclxuXHRcdHZhciBDb21wb25lbnRpbnB1dGxlbmd0aCA9ICRDb21wb25lbnRTU0RpbnB1dC52YWwoKS5sZW5ndGg7XHJcblxyXG5cdFx0aWYgKENvbXBvbmVudGlucHV0bGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19jb250ZW50VGl0bGUnKS5oaWdobGlnaHQoJENvbXBvbmVudFNTRGlucHV0LnZhbCgpLCB7XHJcblx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0U0Qtc2VhcmNoZWQtdGVybScsXHJcblx0XHRcdFx0Y2FzZVNlbnNpdGl2ZTogZmFsc2UsXHJcblx0XHRcdFx0d29yZHNPbmx5OiBmYWxzZSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyICRmYXZvcml0ZXNTZWFyY2hJbnB1dCA9ICRDb21wb25lbnRTU0QuZmluZCgnLlNlYXJjaFNEX2ZpbHRlcmZhdm9yaXRlcyBpbnB1dCcpO1xyXG5cclxuXHRcdGlmICgkZmF2b3JpdGVzU2VhcmNoSW5wdXQubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBmYXZvcml0ZXNTZWFyY2hMZW5ndGggPSAkZmF2b3JpdGVzU2VhcmNoSW5wdXQudmFsKCkubGVuZ3RoO1xyXG5cclxuXHRcdFx0aWYgKGNvbmZpZy5IYXNGYXZvcml0ZSA9PT0gJ1RydWUnICYmIGZhdm9yaXRlc1NlYXJjaExlbmd0aCA+IDApIHtcclxuXHRcdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19jb250ZW50VGl0bGUnKS5oaWdobGlnaHQoJGZhdm9yaXRlc1NlYXJjaElucHV0LnZhbCgpLCB7XHJcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdTZWxlY3RTRC1zZWFyY2hlZC10ZXJtJyxcclxuXHRcdFx0XHRcdGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0d29yZHNPbmx5OiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBPcGVuQ29uZmlybVBvcHVwID0gZnVuY3Rpb24oJFNTRHNlbGVjdElkKSB7XHJcblx0XHRcdCRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XHJcblx0XHRcdCRQb3B1cElEID0gJENvbXBvbmVudFNTRC5zaWJsaW5ncygnLlNTRFBvcHVwV3JhcHBlcicpO1xyXG5cclxuXHRcdFx0JFBvcHVwSUQuZmFkZUluKCdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JENvbXBvbmVudFNTRC5hZGRDbGFzcygnRG9udF9DbG9zZScpO1xyXG5cdFx0XHRcdCRQb3B1cElEXHJcblx0XHRcdFx0XHQuZmluZCgnLlNTRHBvcHVwT2snKVxyXG5cdFx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkUG9wdXBJRC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fc3RhclRyaWdnZXIgPiBhJykuY2xpY2soKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCRDb21wb25lbnRTU0QucmVtb3ZlQ2xhc3MoJ0RvbnRfQ2xvc2UnKSwgNTAwKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0JFBvcHVwSURcclxuXHRcdFx0XHRcdC5maW5kKCcuU1NEcG9wdXBDYW5jZWwnKVxyXG5cdFx0XHRcdFx0Lm9mZignY2xpY2snKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkUG9wdXBJRC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgkQ29tcG9uZW50U1NELnJlbW92ZUNsYXNzKCdEb250X0Nsb3NlJyksIDUwMCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgU1NEQ2hlY2tCb3hTZWxlY3QgPSBmdW5jdGlvbigkd2lkZ2V0SWQpIHtcclxuXHRcdFx0dmFyIGNoZWNrQm94Q291bnQgPSAwO1xyXG5cdFx0XHRpZiAoaXNNdWx0aXBsZSA9PT0gJ1RydWUnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb3hDb3VudCA9ICR3aWRnZXRJZFxyXG5cdFx0XHRcdFx0LmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9fbXVsdGlwbGUgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0JGFsbExpc3RjYXJkID0gJHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRF9jb250ZW50Jyk7XHJcblxyXG5cdFx0XHRcdGlmIChjaGVja0JveENvdW50ID4gMCkge1xyXG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKS5hZGRDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcclxuXHRcdFx0XHRcdCR3aWRnZXRJZC5jbG9zZXN0KCcuU2VhcmNoU0RfY29udGVudCAuU2VsZWN0U0QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9jb250ZW50V3JhcHBlcicpXHJcblx0XHRcdFx0XHRcdFx0Lm9mZignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpXHJcblx0XHRcdFx0XHRcdFx0Lm9mZignY2xpY2snKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNELnNob3dGYXZvcml0ZScpLnJlbW92ZUNsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRF9jb250ZW50IC5TZWxlY3RTRCAnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9jb250ZW50V3JhcHBlcicpXHJcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmZpbmQoJy5MaW5lQWN0aW9uTElOSyA+IGEnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuY2xpY2soKTtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpXHJcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmZpbmQoJy5MaW5lQWN0aW9uTElOSyA+IGEnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuY2xpY2soKTtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoaXNNdWx0aXBsZSA9PT0gJ1RydWUnKSB7XHJcblx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRTU0RDaGVja0JveFNlbGVjdCgkU1NEc2VsZWN0SWQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19zdGFyTGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKCEkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEIC5TZWxlY3RTRF9fc3RhcldyYXBwZXInKS5oYXNDbGFzcygnc3RhckRpc2FibGVkJykpIHtcclxuXHRcdFx0XHRpZiAoJFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRCAuU2VsZWN0U0RfX3N0YXJXcmFwcGVyJykuaGFzQ2xhc3MoJ3N0YXJTZWxlY3RlZCcpKSB7XHJcblx0XHRcdFx0XHRPcGVuQ29uZmlybVBvcHVwKCRTU0RzZWxlY3RJZCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX3N0YXJUcmlnZ2VyID4gYScpLmNsaWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX2NvbnRlbnRXcmFwcGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xyXG5cdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpLmNsaWNrKCk7XHJcblx0XHRcdGlmICghJENvbXBvbmVudFNTRC5oYXNDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKSkge1xyXG5cdFx0XHRcdFNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2gucmV0dXJuVG9TZWFyY2goJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpKTtcclxuXHRcdFx0XHRTZWFyY2hTZWxlY3REZWZpbmUuU1NEU2VhcmNoLmNsb3NlU1NEKCRTU0RzZWxlY3RJZC5jbG9zZXN0KCcuU2VhcmNoU0QnKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRDb21wb25lbnRTU0RpbnB1dC52YWwoJycpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9hY3Rpb25MaW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xyXG5cdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpLmNsaWNrKCk7XHJcblx0XHRcdGlmICghJENvbXBvbmVudFNTRC5oYXNDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKSkge1xyXG5cdFx0XHRcdFNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2gucmV0dXJuVG9TZWFyY2goJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpKTtcclxuXHRcdFx0XHRTZWFyY2hTZWxlY3REZWZpbmUuU1NEU2VhcmNoLmNsb3NlU1NEKCRTU0RzZWxlY3RJZC5jbG9zZXN0KCcuU2VhcmNoU0QnKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG4iLCJ2YXIgU2VhcmNoU2VsZWN0RGVmaW5lID0gKHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgPSB3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lIHx8IHt9KTtcclxuXHJcblNhcHBoaXJlV2lkZ2V0cy5TU0RTZWFyY2ggPSBmdW5jdGlvbiBTU0RzZWFyY2hTZXR1cChjb25maWcpIHtcclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyICRTU0R3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy5TU0RXaWRnZXRJZCk7IC8vIFNTRENvbXBvbmVudCBtYXAgbm90IHVzZWQgYWdhaW5cclxuXHRcdHZhciAkU1NEQ29tcG9uZW50ID0gJFNTRHdpZGdldC5maW5kKCcuU2VhcmNoU0QnKTsgLy8gU1NEU2VhcmNoIENvbXBvbmVudCBpZCBmb3IgdXNlIGluIHRoZSBmdW5jdGlvbiBhbmQgbWFuaXB1bGF0ZSBjbGFzc2VzXHJcblx0XHR2YXIgJFNTRENvbXBvbmVudENvbnRlbnQgPSAkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50Jyk7IC8vIFNTRGNvbXBvbmVudCBjb250ZW50XHJcblx0XHR2YXIgaGFzQ2xvbmUgPSBjb25maWcuSGFzQ2xvbmU7IC8vIEhhc0Nsb25lIHZhcmlhYmxlIGlucHV0IHBhcmFtZXRlciB2YWx1ZVxyXG5cdFx0dmFyIGhhc0Zhdm9yaXRlID0gY29uZmlnLkhhc0Zhdm9yaXRlOyAvLyBIYXNGYXZvcml0ZSB2YXJpYWJsZSBpbnB1dCBwYXJhbWV0ZXIgdmFsdWVcclxuXHRcdHZhciBzaG93Q2xvbmVzID0gY29uZmlnLlNob3dDbG9uZXM7IC8vIFNob3dDbG9uZXMgdmFyaWFibGUgaW5wdXQgcGFyYW1ldGVyIHZhbHVlXHJcblx0XHR2YXIgbGV0dGVyTGltaXQgPSBjb25maWcuTGltaXRMZXR0ZXI7IC8vIE51bWJlciBvZiBsZXR0ZXIgdG8gZW50ZXIgYmVmb3JlIHRyaWdnZXIgdGhlIHNlYXJjaCBhY3Rpb25cclxuXHRcdHZhciBoYXNTaGllbGQgPSBjb25maWcuSGFzU2hpZWxkO1xyXG5cdFx0dmFyIHNoaWVsZFRpbWVvdXQgPSBjb25maWcuU2hpZWxkVGltZW91dDtcclxuXHRcdHZhciBpbnB1dExlbmd0aCA9IGNvbmZpZy5TZWFyY2hJbnB1dExlbmd0aDtcclxuXHRcdHZhciAkd2lkZ2V0U2hpZWxkID0gJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0QtLXNoaWVsZCcpO1xyXG5cdFx0dmFyIHNlYXJjaFRyaWdnZXJUaW1lcjtcclxuXHRcdGNvbnN0ICRTU0RDbGVhckJ1dHRvbiA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fcmVtb3ZlJyk7XHJcblx0XHRjb25zdCAkU1NESW5wdXRFbGVtZW50ID0gJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpO1xyXG5cclxuXHRcdCRTU0RJbnB1dEVsZW1lbnQuYXR0cignbWF4TGVuZ3RoJywgaW5wdXRMZW5ndGgpO1xyXG5cclxuXHRcdHZhciBleGVjdXRlU2VhcmNoID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNsZWFyVGltZW91dChzZWFyY2hUcmlnZ2VyVGltZXIpO1xyXG5cdFx0XHRzZWFyY2hUcmlnZ2VyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFRyaWdnZXJTZWFyY2goJFNTRENvbXBvbmVudCk7XHJcblx0XHRcdH0sIDcwMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChoYXNTaGllbGQpIHtcclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHdpZGdldFNoaWVsZC5oaWRlKCk7XHJcblx0XHRcdH0sIHNoaWVsZFRpbWVvdXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qICBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XHJcblx0XHQgKiAgIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcclxuXHRcdCAqICAgTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXHJcblx0XHQgKiAgIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXHJcblx0XHQgKi9cclxuXHRcdHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG5cdFx0XHR2YXIgdGltZW91dDtcclxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xyXG5cclxuXHRcdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0dmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuXHRcdFx0XHRpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdFx0fTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqKipcclxuXHRcdCAqICAgUmVzZXQgU2VhcmNoIFVJIHRvIHRoZSBpbml0aWFsIHN0YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciByZXNldFVJID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuc2hvdygpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuaGlkZSgpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2dvVG9GYXZvcml0ZScpLmhpZGUoKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlQWN0aW9ucycpLmhpZGUoKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlUmVtb3ZlJykuaGlkZSgpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fY2xvbmVXcmFwcGVyJykuaGlkZSgpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyIC5TZWFyY2hTRF9fcmV0dXJuJykuaGlkZSgpO1xyXG5cclxuXHRcdFx0aWYgKCRTU0RJbnB1dEVsZW1lbnQudmFsKCkudHJpbSgpID09PSAnJykge1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fcmVtb3ZlJykuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93RmF2b3JpdGUnKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnc2hvd0Nsb25lJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKlxyXG5cdFx0ICogIEdvIHRvIEZhdm9yaXRlcyBVSVxyXG5cdFx0ICogIC0tICByZXN0IFNTRGNvbXBvbmVudFxyXG5cdFx0ICogIC0tICBzaG93IEZhdm9yaXRlIGZlYXR1cmVzXHJcblx0XHQgKiAgLS0gIHJlbW92ZSBjbGFzcyBzaG93Q2xvbmUgaWYgY29tcG9uZW50IGhhdmUgdGhhdCBjbGFzc1xyXG5cdFx0ICogIC0tICBhZGQgY2xhc3Mgc2hvd0Zhdm9yaXRlIHRvIGhhdmUgY29tcG9uZW50IGNvbnRyb2xcclxuXHRcdCAqICAtLSAgYWRkQ2xhc3MgT3BlbiB3aXRoIHNsaWRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBnb1RvRmF2b3JpdGVzID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xyXG5cdFx0XHRyZXNldFVJKCRTU0RDb21wb25lbnQpO1xyXG5cclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLnZhbCgnJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX3JldHVybicpLmhpZGUoKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2lucHV0V3JhcHBlcicpLmhpZGUoKTtcclxuXHJcblx0XHRcdGlmICgkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdzaG93Q2xvbmUnKSkge1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dDbG9uZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rICcpLnNob3coKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlUmVtb3ZlICcpLnNob3coKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlQWN0aW9ucycpLnNob3coKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnc2hvd0Zhdm9yaXRlJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlbGVjdFNELmhhc0Zhdm9yaXRlID4gYScpLmZvY3VzKCk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ09wZW4nKTtcclxuXHJcblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3RcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfY29udGVudExpc3QnKS5oaWRlKCk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19sb2FkaW5nJykuc2hvdygpO1xyXG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZScpLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKioqKioqKioqKioqKipcclxuXHRcdCAqXHJcblx0XHQgKiAgR28gdG8gQ2xvbmUgVUlcclxuXHRcdCAqICAtLSAgcmVtb3ZlIGNsYXNzIE9wZW5cclxuXHRcdCAqICAtLSBBZGQgU2hvd0Nsb25lIGNsYXNzXHJcblx0XHQgKiAgLS0gU2xpZGVEb3duIGVmZmVjdCBhbmQgYWRkIE9wZW4gQ2xhc3NcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGdvVG9DbG9uZSA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcclxuXHRcdFx0Ly8gbG9hZGluZyBzaG93IGhpZGUgbGlzdFxyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLmhpZGUoKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XHJcblx0XHRcdGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZSBhJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykudmFsKCcnKTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xyXG5cclxuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdzaG93Q2xvbmUnKSkge1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ3Nob3dDbG9uZScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ09wZW4nKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIFJldHVybiB0byBzZWFyY2ggZnJvbSBmYXZvcml0ZSBvciBjbG9uZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgcmV0dXJuVG9TZWFyY2ggPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XHJcblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3RcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfY29udGVudExpc3QnKS5oaWRlKCk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19sb2FkaW5nJykuc2hvdygpO1xyXG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZScpLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVzZXRVSSgkU1NEQ29tcG9uZW50KTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnc2hvd0Nsb25lJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dGYXZvcml0ZScpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdPcGVuJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XHJcblxyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyIC5TZWFyY2hTRF9fcmV0dXJuJykuaGlkZSgpO1xyXG5cclxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ2hhc0Nsb25lJykpIHtcclxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdoYXNDbG9uZScpO1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdoYXNGYXZvcml0ZScpKSB7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnaGFzRmF2b3JpdGUnKTtcclxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuc2hvdygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAgIFNTRENsZWFyIGNsb3NlcyBTU0RTZWFyY2ggY29udGFpbmVyXHJcblx0XHQgKiAgIGFuZCBjbGVhciBzc2QgZmlsdGVyIGlucHV0XHJcblx0XHQgKi9cclxuXHRcdHZhciBzc2RDbGVhciA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykudmFsKCcnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgQ2xvc2VTU0QgY2xvc2VzIFNTRFNlYXJjaCBjb250YWluZXJcclxuXHRcdCAqICAgbXVzdCByZW1vdmUgaGlnaHRsaWdodFNlbGVjdGlvbiBkb25lIGJ5IGtleWJvYXJkIG5hdmlnYXRpb25cclxuXHRcdCAqL1xyXG5cdFx0dmFyIGNsb3NlU1NEID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdPcGVuJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnRDb250ZW50LnNsaWRlVXAoJzI1MCcpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCcuc2VsZWN0ZWQnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgQWRkIE9wZW4gY2xhc3MgdG8gU1NEQ29tcG9uZW50XHJcblx0XHQgKiAgIGlmIFNTRENvbXBvbmVudCBoYXMgY2xhc3MgT3BlbiB0aGVuIGZvY3VzXHJcblx0XHQgKiAgIG1ha2VzIG9wZW4gZWZmZWN0LCBjaGVjayB0aGUgY2hhcmFjdGVycyBpbnNpZGUgdGhlIGlucHV0IHRvIGZpbHRlclxyXG5cdFx0ICovXHJcblx0XHR2YXIgc3NkRm9jdXMgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XHJcblx0XHRcdGlmICghJFNTRENvbXBvbmVudC5oYXNDbGFzcygnT3BlbicpKSB7XHJcblx0XHRcdFx0Ly8gbG9hZGluZyBzaG93IGhpZGUgbGlzdFxyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19sb2FkaW5nJykuc2hvdygpO1xyXG5cdFx0XHRcdGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZSBhJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdPcGVuJyk7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnLnNob3dDbG9uZScpO1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJy5zaG93RmF2b3JpdGUnKTtcclxuXHJcblx0XHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcclxuXHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaExpbmtJbnB1dCBhJykuY2xpY2soKTtcclxuXHRcdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ09wZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgV2hlbiBjbGlja2luZyBjbGlja2luZyBvdXRzaWRlIHRoZSBjb21wb25lbnRcclxuXHRcdCAqICAgdGhlIFNTRCBtdXN0IGNsb3NlIGFuZCByZXR1cm4gdG8gaW5pdGlhbCBzdGF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgQ2xpY2tPdXQgPSBmdW5jdGlvbihlLCAkU1NEQ29tcG9uZW50KSB7XHJcblx0XHRcdGlmICghJFNTRENvbXBvbmVudC5pcyhlLnRhcmdldCkgJiYgJFNTRENvbXBvbmVudC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpO1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgVHJpZ2dlcnMgdGhlIGxpbmsgdG8gaW5pdGlhbGl6ZVxyXG5cdFx0ICogICB0aGUgZGF0YWJhc2Ugc2VhcmNoIGJhc2VkIG9uIGN1cnJlbnQgbGVuZ3RoIG9mIHRoZSBzdHJpbmcgaW5zZXJ0ZWQgb24gdGhlIGlucHV0XHJcblx0XHQgKi9cclxuXHRcdHZhciBUcmlnZ2VyU2VhcmNoID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xyXG5cdFx0XHR2YXIgY3VycmVudFdvcmQgPSAkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykudmFsKCk7XHJcblx0XHRcdHZhciBjdXJyZW50Q291bnQgPSBjdXJyZW50V29yZC5sZW5ndGg7XHJcblx0XHRcdGlmIChjdXJyZW50Q291bnQgPj0gbGV0dGVyTGltaXQgfHwgY3VycmVudENvdW50ID09PSAwKSB7XHJcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoTGlua0lucHV0ID4gYScpLmNsaWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgUmVtb3ZlcyBhbGwgZmF2b3JpdGUgY2hlY2tlZCBib3hlc1xyXG5cdFx0ICogICBhbmQgZW5kcyBNdWx0aXBsZVNlbGVjdFxyXG5cdFx0ICovXHJcblx0XHR2YXIgTXVsdGlVbmNoZWNrID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xyXG5cdFx0XHQkY2hlY2tCb3hlcyA9ICRTU0RDb21wb25lbnQucGFyZW50KCkuZmluZCgnLlNlbGVjdFNEX19tdWx0aXBsZSA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpO1xyXG5cclxuXHRcdFx0JFNTRENvbXBvbmVudFxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcclxuXHRcdFx0XHQuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgS2V5Qm9hcmQgZXZlbnRzIHVwIGRvd24gYW5kIGVudGVyIGlmIG5vdCBmaWx0ZXJcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGtleWJvYXJkRXZlbnRzID0gZnVuY3Rpb24oZSwgJFNTRENvbXBvbmVudCkge1xyXG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnT3BlbicpKSB7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRTZWxlY3RlZCA9ICRTU0RDb21wb25lbnRDb250ZW50LmZpbmQoJy5MaXN0UmVjb3JkcyA+IHNwYW4uc2VsZWN0ZWQnKTsgLy8gQ3VycmVudCBzZWxlY3RhYmxlIGl0ZW1cclxuXHRcdFx0XHR2YXIgJGZpcnN0U2VsZWN0ID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3BhbjpmaXJzdC1jaGlsZCcpOyAvLyBGaXJzdCBzZWxlY3RhYmxlIGl0ZW1cclxuXHRcdFx0XHR2YXIgJGxhc3RTZWxlY3QgPSAkU1NEQ29tcG9uZW50Q29udGVudC5maW5kKCcuTGlzdFJlY29yZHMgPiBzcGFuOmxhc3QtY2hpbGQnKTsgLy8gTGFzdCBzZWxlY3RhYmxlIGl0ZW1cclxuXHRcdFx0XHR2YXIgY291bnRTZWxlY3RlZCA9IGN1cnJlbnRTZWxlY3RlZC5sZW5ndGg7IC8vIE51bWJlciBvZiBzZWxlY3RlZCBpdGVtXHJcblxyXG5cdFx0XHRcdGlmIChlLndoaWNoID09IDM4KSB7XHJcblx0XHRcdFx0XHQvLyBpZiBrZXkgcHJlc3NlZCBpcyB1cCBhcnJvd1xyXG5cdFx0XHRcdFx0aWYgKGNvdW50U2VsZWN0ZWQgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkID0gJGxhc3RTZWxlY3Q7XHJcblx0XHRcdFx0XHRcdCRsYXN0U2VsZWN0LmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHRcdFx0XHRuZXh0ID0gY3VycmVudFNlbGVjdGVkLnByZXYoKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChuZXh0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBuZXh0LmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9IGN1cnJlbnRTZWxlY3RlZC5sYXN0KCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGUud2hpY2ggPT0gNDApIHtcclxuXHRcdFx0XHRcdC8vIGlmIGtleSBwcmVzc2VkIGlzIGRvd24gYXJyb3dcclxuXHRcdFx0XHRcdGlmIChjb3VudFNlbGVjdGVkID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdCRmaXJzdFNlbGVjdC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5leHQgPSBjdXJyZW50U2VsZWN0ZWQubmV4dCgpO1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobmV4dC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkID0gbmV4dC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0ZWQuZXEoMCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGUud2hpY2ggPT0gMTMpIHtcclxuXHRcdFx0XHRcdC8vIGlmIGtleSBwcmVzc2VkIGlzIGVudGVyXHJcblx0XHRcdFx0XHRpZiAoY291bnRTZWxlY3RlZCA+IDApIHtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQuZmluZCgnLlNlbGVjdFNEIC5TZWxlY3RTRF9hY3Rpb25MaW5rJykuY2xpY2soKTtcclxuXHRcdFx0XHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoJFNTRENvbXBvbmVudC5maW5kKCdTZWFyY2hTRF9fX2lucHV0IGlucHV0JykuaXMoJzphY3RpdmUnKSAmJiBjb3VudFNlbGVjdGVkID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGV4ZWN1dGVTZWFyY2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgVGhlIGZpcnN0IHN0ZXAgaXMgdG8gcmVzZXQgdGhlIHNlZXRpbmdzIHRvIGRlZmF1bHRcclxuXHRcdCAqL1xyXG5cdFx0cmVzZXRVSSgkU1NEQ29tcG9uZW50KTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogIFJlbW92ZSBhdXRvQ29tcGxldGUgZnJvbSBzZWFyY2ggaW5wdXRcclxuXHRcdCAqL1xyXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLmF0dHIoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogICBJZiBTU0QgaGFzIENsb25lIGFuZCB0aGUgY2xvbmUgbGlzdCBpcyB2aXNpYmxlXHJcblx0XHQgKiAgIG9uY2xpY2sgXCJDbG9uZSBwcmV2aW91cyBtZWRpY2F0aW9uXCIgdGhlblxyXG5cdFx0ICogICByZW1vdmUgT3BlbiBhbmQgc2hvdyBpdGVtcyB0byBjbG9uZSBsaXN0XHJcblx0XHQgKi9cclxuXHRcdGlmIChoYXNDbG9uZSA9PT0gJ1RydWUnKSB7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ2hhc0Nsb25lJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChoYXNGYXZvcml0ZSA9PT0gJ1RydWUnKSB7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ2hhc0Zhdm9yaXRlJyk7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsnKS5zaG93KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKChoYXNDbG9uZSA9PT0gJ1RydWUnKSAmIChzaG93Q2xvbmVzID09PSAnVHJ1ZScpKSB7XHJcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2Nsb25lV3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ09wZW4nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlUmVtb3ZlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNzZENsZWFyKCRTU0RDb21wb25lbnQpO1xyXG5cdFx0XHRyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KTtcclxuXHRcdFx0ZGVib3VuY2UoVHJpZ2dlclNlYXJjaCgkU1NEQ29tcG9uZW50KSwgNTUwKTtcclxuXHRcdFx0ZGVib3VuY2UoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLmZvY3VzKCksIDU2MCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fY2xvbmVXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdGdvVG9DbG9uZSgkU1NEQ29tcG9uZW50KTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19nb1RvQ2xvbmUgPiBhJykuY2xpY2soKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19pbnB1dFdyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dDbG9uZScpKSB7XHJcblx0XHRcdFx0cmV0dXJuVG9TZWFyY2goJFNTRENvbXBvbmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZUFjdGlvbnNDYW5jZWwnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0TXVsdGlVbmNoZWNrKCRTU0RDb21wb25lbnQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLmZvY3VzKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRkZWJvdW5jZShzc2RGb2N1cygkU1NEQ29tcG9uZW50KSwgNjAwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJ2JvZHknKS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Q2xpY2tPdXQoZSwgJFNTRENvbXBvbmVudCk7XHJcblx0XHR9KTtcclxuXHRcdC8qXHJcblx0XHQgKiAgIEtleUJvYXJkIGV2ZW50cyBvbiBrZXkgcHJlc3NcclxuXHRcdCAqL1xyXG5cdFx0JFNTRENvbXBvbmVudFxyXG5cdFx0XHQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKVxyXG5cdFx0XHQuYWRkKCRTU0RDb21wb25lbnQuZmluZCgnLlNlbGVjdFNEX2FjdGlvbkxpbmsnKSlcclxuXHRcdFx0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoIWUud2hpY2ggIT0gMTMpIHtcclxuXHRcdFx0XHRcdGtleWJvYXJkRXZlbnRzKGUsICRTU0RDb21wb25lbnQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCRTU0RJbnB1dEVsZW1lbnQudmFsKCkudHJpbSgpID09PSAnJykge1xyXG5cdFx0XHRcdFx0JFNTRENsZWFyQnV0dG9uLmFuaW1hdGUoeyBvcGFjaXR5OiAnaGlkZScgfSwgMzAwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JFNTRENsZWFyQnV0dG9uLmFuaW1hdGUoeyBvcGFjaXR5OiAnc2hvdycgfSwgMzAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAgIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uIG9uIGVudGVyLFxyXG5cdFx0ICogICBpbnN0ZWFkIGdvIHRvIGtleWJvYXJkIGV2ZW50cyB0byB0cmlnZ2VyXHJcblx0XHQgKiAgIHRoZSBzZWxlY3Rpb25cclxuXHRcdCAqL1xyXG5cdFx0JCgkU1NEQ29tcG9uZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKGUud2hpY2ggPT0gMTMpIHtcclxuXHRcdFx0XHRrZXlib2FyZEV2ZW50cyhlLCAkU1NEQ29tcG9uZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19yZW1vdmUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XHJcblx0XHRcdGRlYm91bmNlKHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpLCA2MDApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2VhcmNoX2Zhdm9yaXRlTGluaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzc2RDbGVhcigkU1NEQ29tcG9uZW50KTtcclxuXHRcdFx0Z29Ub0Zhdm9yaXRlcygkU1NEQ29tcG9uZW50KTtcclxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19nb1RvRmF2b3JpdGUgPiBhJykuY2xpY2soKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZUFjdGlvbnNBZGQgPiBhJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdGRlYm91bmNlKFRyaWdnZXJTZWFyY2goJFNTRENvbXBvbmVudCksIDIwMCk7XHJcblx0XHRcdGRlYm91bmNlKHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpLCAzNTApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0LypcclxuXHRcdCAqICAgT24gQWpheCBSZXF1ZXN0IGhpZGUgbG9hZGluZyBkaXYgaWYgdGhlIFNTRCBpcyBvcGVuIHRoZW4gc2hvdyB0aGVcclxuXHRcdCAqICAgTGlzdFJlY29yZHNcclxuXHRcdCAqL1xyXG5cdFx0b3NBamF4QmFja2VuZCAmJlxyXG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICgkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcclxuXHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19sb2FkaW5nJykuaGlkZSgpO1xyXG5cdFx0XHRcdFx0JFNTRENvbXBvbmVudENvbnRlbnQuc2xpZGVEb3duKCcxMDAwJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0Jykuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZScpLnNob3coKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQkKCdmb3JtJykuYXBwZW5kKCc8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzc2RJbnB1dFwiIG9uY2xpY2s9XCJyZXR1cm4gZmFsc2U7XCIgIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIC8+Jyk7XHJcblxyXG5cdFx0d2luZG93LlNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2ggPSB7XHJcblx0XHRcdHJldHVyblRvU2VhcmNoOiByZXR1cm5Ub1NlYXJjaCxcclxuXHRcdFx0cmVzZXRVSTogcmVzZXRVSSxcclxuXHRcdFx0Y2xvc2VTU0Q6IGNsb3NlU1NELFxyXG5cdFx0XHRzc2RGb2N1czogc3NkRm9jdXMsXHJcblx0XHRcdFRyaWdnZXJTZWFyY2g6IFRyaWdnZXJTZWFyY2gsXHJcblx0XHRcdHNzZENsZWFyOiBzc2RDbGVhcixcclxuXHRcdH07XHJcblx0fSk7XHJcbn07XHJcbi8vIEFkZGVkIHRvIGNsb3NlIHRoZSBzZWxlY3QgbGlzdCBpZiB3ZSBjbGljayB0aGUgcHJlc2NyaXB0aW9uIElmcmFtZTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBldmVudCA9PiB7XHJcblx0dmFyIHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cdHJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHQnY2xpY2snLFxyXG5cdFx0ZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVtzcmMqPSdQcmVzY3JpcHRpb25zX0NXJ11cIikgJiZcclxuXHRcdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVbc3JjKj0nUHJlc2NyaXB0aW9uc19DVyddXCIpXHJcblx0XHRcdFx0XHQuY29udGVudFdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU2VhcmNoU0QnKS5jbGFzc0xpc3QucmVtb3ZlKCdPcGVuJyk7XHJcblx0XHRcdFx0XHRcdHZhciBhbGxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TZWFyY2hTRF9fX2lucHV0JykuY2hpbGRyZW47XHJcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBpbiBhbGxJbnB1dCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBhbGxJbnB1dFtlbGVtZW50XS52YWx1ZSAhPSB1bmRlZmluZWQgPyAoYWxsSW5wdXRbZWxlbWVudF0udmFsdWUgPSAnJykgOiBudWxsO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHR0cnVlXHJcblx0KTtcclxufSk7XHJcbiIsIi8qIENvbXBvbmVudCBTZWFyY2hDbGllbnRTaWRlICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNsYXNzIFNlYXJjaENsaWVudFNpZGUge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcclxuXHRcdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLm9uQ29tcG9uZW50SW5pdCgpO1xyXG5cclxuXHRcdFx0JCh3aW5kb3cpLmxvYWQoKCkgPT4ge1xyXG5cdFx0XHRcdG9zQWpheEJhY2tlbmQgJiZcclxuXHRcdFx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQkKCcjJyArIHRoaXMub3B0aW9ucy5pbnB1dElkKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0fSwgMjAwKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRvbkNvbXBvbmVudEluaXQoKSB7XHJcblx0XHRcdCQoJyMnICsgdGhpcy5vcHRpb25zLmlucHV0SWQpLm9uKCdjaGFuZ2Uga2V5ZG93biBwYXN0ZSBpbnB1dCcsIGUgPT4ge1xyXG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VhcmNoQ2xpZW50U2lkZShcclxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLmlucHV0SWQsXHJcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucy5zZWFyY2hhYmxlRWxlbWVudFNlbGVjdG9yLFxyXG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuc2VhcmNoYWJsZUNoaWxkU2VsZWN0b3JcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRzZWFyY2hDbGllbnRTaWRlKGlucHV0SWQsIHNlbGVjdG9yLCBjaGlsZFNlbGVjdG9yKSB7XHJcblx0XHRcdGlmICgkKCcjJyArIGlucHV0SWQpLmlzKCc6dmlzaWJsZScpKSB7XHJcblx0XHRcdFx0dmFyIHNlYXJjaFRleHQgPSBvc2pzKCcjJyArIGlucHV0SWQpXHJcblx0XHRcdFx0XHQudmFsKClcclxuXHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRcdHZhciBzZWFyY2hDb3VudGVyID0gMDtcclxuXHRcdFx0XHR2YXIgc2VsZWNpb24gPSBvc2pzKHNlbGVjdG9yKTtcclxuXHJcblx0XHRcdFx0c2VsZWNpb24ucmVtb3ZlQ2xhc3MoJ3NlYXJjaE5vdEZvdW5kJyk7XHJcblx0XHRcdFx0c2VsZWNpb24ucmVtb3ZlQ2xhc3MoJ3NlYXJjaEZvdW5kJyk7XHJcblx0XHRcdFx0c2VsZWNpb24udW5oaWdobGlnaHQoKTtcclxuXHJcblx0XHRcdFx0aWYgKGNoaWxkU2VsZWN0b3IpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnRUb1NlYXJjaCA9IG9zanMoY2hpbGRTZWxlY3Rvcik7XHJcblx0XHRcdFx0XHRlbGVtZW50VG9TZWFyY2gudW5oaWdobGlnaHQoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChzZWFyY2hUZXh0Lmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjaW9uLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRleHRUb0NvbXBhcmUgPSBjaGlsZFNlbGVjdG9yXHJcblx0XHRcdFx0XHRcdFx0PyAkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5maW5kKGNoaWxkU2VsZWN0b3IpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KClcclxuXHRcdFx0XHRcdFx0XHQ6IHRoaXMuaW5uZXJUZXh0O1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdHRleHRUb0NvbXBhcmVcclxuXHRcdFx0XHRcdFx0XHRcdC50cmltKClcclxuXHRcdFx0XHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHQuaW5kZXhPZihzZWFyY2hUZXh0KSA+IC0xXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdG9zanModGhpcykuYWRkQ2xhc3MoJ3NlYXJjaEZvdW5kJyk7XHJcblx0XHRcdFx0XHRcdFx0c2VhcmNoQ291bnRlcisrO1xyXG5cdFx0XHRcdFx0XHRcdG9zanModGhpcykuaGlnaGxpZ2h0KHNlYXJjaFRleHQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG9zanModGhpcykuYWRkQ2xhc3MoJ3NlYXJjaE5vdEZvdW5kJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBTZWFyY2hDbGllbnRTaWRlKGNvbmZpZykpO1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuU2VhcmNoQ2xpZW50U2lkZSA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IFNlY3Rpb25FeHBhbmRhYmxlICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGZ1bmN0aW9uIFNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tKCkge1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdC8vIE9iamVjdCB0byBzYXZlIHN0YXRzXHJcblx0XHR2YXIgcHJldmlld3N0YXQgPSBbXTtcclxuXHJcblx0XHQvLyBzZXQgY2xpY2sgZXZlbnRzXHJcblx0XHRmdW5jdGlvbiBjbGlja0V2ZW50cyhvYikge1xyXG5cdFx0XHQvLyBzdG9yZSBxdWVyeXMgaW4gYSBzaW5nbGUgdmFyXHJcblx0XHRcdHZhciBTZWN0aW9uID0gJChvYikucGFyZW50KCk7XHJcblx0XHRcdHZhciBTZWN0aW9uQ29udGVudCA9IFNlY3Rpb24uY2hpbGRyZW4oJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50Jyk7XHJcblxyXG5cdFx0XHQvLyBnZXQgaWRcclxuXHRcdFx0dmFyIGlkID0gU2VjdGlvbi5hdHRyKCdpZCcpO1xyXG5cclxuXHRcdFx0dmFyIHRlbXBIZWlnaHQgPSAwO1xyXG5cclxuXHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXHJcblx0XHRcdGlmIChTZWN0aW9uLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0LCBkdXJpbmcgdGhpcyBwcm9jZXNzLCB0cmFuc2l0aW9ucyBhcmUgZGlzYWJsZWRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5hZGRDbGFzcygnbm9UcmFuc2l0aW9uJyk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KFNlY3Rpb25Db250ZW50LmhlaWdodCgpKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudFswXS5vZmZzZXRIZWlnaHQ7IC8vIGhhY2sgdG8gZm9yY2UgYSByZXBhaW50XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQucmVtb3ZlQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xyXG5cclxuXHRcdFx0XHQvLyBDb2xsYXBzZSBjb250ZW50XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0Ly8gUmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXHJcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xyXG5cdFx0XHRcdHRlbXBIZWlnaHQgPSBTZWN0aW9uQ29udGVudC5oZWlnaHQoKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KHRlbXBIZWlnaHQpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdC8vIHJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxyXG5cdFx0XHRcdFNlY3Rpb24uYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGlmICgkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTgnKSB8fCAkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTknKSkge1xyXG5cdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XHJcblx0XHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBhamF4IHJlZnJlcyBmdW5jdGlvblxyXG5cdFx0dGhhdC5hamF4UmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20nKS5vZmYoKTtcclxuXHJcblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXHJcblx0XHRcdCQoXHJcblx0XHRcdFx0Jy5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gaW5wdXQsIC5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gc2VsZWN0LCAuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIGEnXHJcblx0XHRcdCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBhZGQgbmV3IGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y2xpY2tFdmVudHModGhpcyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBpZiBuZXcgU2VjdGlvbkV4cGFuZGFibGUgdGhlbiBhZGQgdG8gcHJldmlld3N0YXQgYXJyYXlcclxuXHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxyXG5cdFx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdC8vIGlmIG9wZW5cclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gYWRkIHJvd1xyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9IHtcclxuXHRcdFx0XHRcdFx0Y2xpZW50OiBzdGF0LFxyXG5cdFx0XHRcdFx0XHRzZXJ2ZXI6IHN0YXQsXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY3VyZW50IHN0YXRlIChhamF4IHN0YXRlIHggaW5pdGlhbCBzdGF0ZSlcclxuXHRcdFx0XHR2YXIgY3VyU3RhdGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgc3RhcnQgZXhwYW5kYWJsZVxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRjdXJTdGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBjaGVjayBpZiBhamF4ICE9IGluaXRpYWwgc2VydmVyXHJcblx0XHRcdFx0aWYgKGN1clN0YXRlICE9IHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ3NlcnZlciddKSB7XHJcblx0XHRcdFx0XHQvLyBjdXJzdGF0ZVxyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPSBjdXJTdGF0ZTtcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ3NlcnZlciddID0gY3VyU3RhdGU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxyXG5cdFx0XHRcdFx0aWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID09IGZhbHNlICYmICQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5jaGlsZHJlbignLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQnKVxyXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID09IHRydWUgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBzZXQgZXZlbnRzXHJcblx0XHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnMgdG8gY3JlYXRlIGFycmF5IHN0YXRcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxyXG5cdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdC8vIGlmIG9wZW5cclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0c3RhdCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhZGQgcm93XHJcblx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9IHtcclxuXHRcdFx0XHRcdGNsaWVudDogc3RhdCxcclxuXHRcdFx0XHRcdHNlcnZlcjogc3RhdCxcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQkKHRoaXMpLmhhc0NsYXNzKCdIaWRlV2hlbkVtcHR5JykgJiZcclxuXHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50JylcclxuXHRcdFx0XHRcdFx0LnRleHQoKS5sZW5ndGggPT09IDBcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuaGlkZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gaGFjayB0byBkaXNwbGF5IGEgbWVzc2FnZSB3aGVuIFNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tIGhhcyBubyBjaGlsZCBpdGVtc1xyXG5cdFx0XHRcdHZhciBpc0VtcHR5ID0gdHJ1ZTtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQgZGl2LCAuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCBzcGFuJylcclxuXHRcdFx0XHRcdC5ub3QoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50LS1lbXB0eScpXHJcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCQodGhpcykudGV4dCgpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRpc0VtcHR5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoIWlzRW1wdHkpIHtcclxuXHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50LS1lbXB0eScpXHJcblx0XHRcdFx0XHRcdC5jc3Moe1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgJGV4cGFuZGFibGVJbnN0YW5jZSA9ICQodGhpcyk7XHJcblx0XHRcdFx0dmFyICR0b2dnbGVyID0gJCh0aGlzKS5maW5kKCc+IC5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVyJyk7XHJcblx0XHRcdFx0aWYgKCR0b2dnbGVyLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdFx0dmFyICR0b2dnbGVyU3RhdGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHNob3ddJykuZGF0YSgnbGFiZWxzaG93JykpO1xyXG5cdFx0XHRcdFx0JHRvZ2dsZXIub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHRcdFx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRcdCR0b2dnbGVyU3RhdGUgPSAhJHRvZ2dsZXJTdGF0ZTtcclxuXHRcdFx0XHRcdFx0aWYgKCR0b2dnbGVyU3RhdGUpIHtcclxuXHRcdFx0XHRcdFx0XHQkZXhwYW5kYWJsZUluc3RhbmNlLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkJykuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbGhpZGVdJykuZGF0YSgnbGFiZWxoaWRlJykpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdCRleHBhbmRhYmxlSW5zdGFuY2UuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQnKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBhZGQgY2xpY2sgZXZlbnRzXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20nKVxyXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXHJcblx0XHRcdCQoXHJcblx0XHRcdFx0Jy5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gaW5wdXQsIC5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gc2VsZWN0LCAuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIGEnXHJcblx0XHRcdCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBldmVudCBhamF4XHJcblx0XHRcdG9zQWpheEJhY2tlbmQgJiYgb3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCh0aGF0LmFqYXhSZWZyZXNoKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGUgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBleHBhbmRhYmxlID0gbmV3IFNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tKCk7XHJcblxyXG5cdFx0ZXhwYW5kYWJsZS5pbml0KCk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlNlY3Rpb25FeHBhbmRhYmxlID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0ZnVuY3Rpb24gU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUoKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdFx0Ly8gT2JqZWN0IHRvIHNhdmUgc3RhdHNcclxuXHRcdHZhciBwcmV2aWV3c3RhdCA9IFtdO1xyXG5cclxuXHRcdC8vIHNldCBjbGljayBldmVudHNcclxuXHRcdGZ1bmN0aW9uIGNsaWNrRXZlbnRzKG9iKSB7XHJcblx0XHRcdC8vIHN0b3JlIHF1ZXJ5cyBpbiBhIHNpbmdsZSB2YXJcclxuXHRcdFx0dmFyIFNlY3Rpb24gPSAkKG9iKS5wYXJlbnQoKTtcclxuXHRcdFx0dmFyIFNlY3Rpb25Db250ZW50ID0gU2VjdGlvbi5jaGlsZHJlbignLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2NvbnRlbnQnKTtcclxuXHJcblx0XHRcdC8vIGdldCBpZFxyXG5cdFx0XHR2YXIgaWQgPSBTZWN0aW9uLmF0dHIoJ2lkJyk7XHJcblxyXG5cdFx0XHR2YXIgdGVtcEhlaWdodCA9IDA7XHJcblxyXG5cdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcclxuXHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHQsIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRyYW5zaXRpb25zIGFyZSBkaXNhYmxlZFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCkpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XHJcblxyXG5cdFx0XHRcdC8vIENvbGxhcHNlIGNvbnRlbnRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0U2VjdGlvbi5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHQvLyBSZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XHJcblx0XHRcdFx0Ly8gdGVtcEhlaWdodCA9IFNlY3Rpb25Db250ZW50LmhlaWdodCgpO1xyXG5cdFx0XHRcdC8vIFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcclxuXHRcdFx0XHQvLyBTZWN0aW9uQ29udGVudC5oZWlnaHQodGVtcEhlaWdodCk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXHJcblx0XHRcdFx0U2VjdGlvbi5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFqYXggcmVmcmVzIGZ1bmN0aW9uXHJcblx0XHR0aGF0LmFqYXhSZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIHJlbW92ZSBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXInKS5vZmYoKTtcclxuXHJcblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXHJcblx0XHRcdCQoXHJcblx0XHRcdFx0Jy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIGlucHV0LCAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBzZWxlY3QsIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIGEnXHJcblx0XHRcdCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBhZGQgbmV3IGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gaWYgbmV3IFNlY3Rpb25FeHBhbmRhYmxlIHRoZW4gYWRkIHRvIHByZXZpZXdzdGF0IGFycmF5XHJcblx0XHRcdFx0aWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcclxuXHRcdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHQvLyBpZiBvcGVuXHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGFkZCByb3dcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7IGNsaWVudDogc3RhdCwgc2VydmVyOiBzdGF0IH07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBjdXJlbnQgc3RhdGUgKGFqYXggc3RhdGUgeCBpbml0aWFsIHN0YXRlKVxyXG5cdFx0XHRcdHZhciBjdXJTdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQvLyBjaGVjayBpZiBzdGFydCBleHBhbmRhYmxlXHJcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdGN1clN0YXRlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGNoZWNrIGlmIGFqYXggIT0gaW5pdGlhbCBzZXJ2ZXJcclxuXHRcdFx0XHRpZiAoY3VyU3RhdGUgIT0gcHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10pIHtcclxuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9IGN1clN0YXRlO1xyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10gPSBjdXJTdGF0ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXHJcblx0XHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gZmFsc2UgJiYgJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfY29udGVudCcpXHJcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gdHJ1ZSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHNldCBldmVudHNcclxuXHRcdHRoYXQuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9ucyB0byBjcmVhdGUgYXJyYXkgc3RhdFxyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XHJcblx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgb3BlblxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFkZCByb3dcclxuXHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0geyBjbGllbnQ6IHN0YXQsIHNlcnZlcjogc3RhdCB9O1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXInKVxyXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXHJcblx0XHRcdCQoXHJcblx0XHRcdFx0Jy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIGlucHV0LCAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBzZWxlY3QsIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIGEnXHJcblx0XHRcdCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBldmVudCBhamF4XHJcblx0XHRcdG9zQWpheEJhY2tlbmQgJiYgb3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCh0aGF0LmFqYXhSZWZyZXNoKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjb25zdCBzZXRPcGVuQ2xvc2VDbGFzcyA9IGlkID0+IHtcclxuXHRcdGlkLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoaWQucGFyZW50KCkuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuZmluZCgnLkhlYWRlckljb24nKVxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5IZWFkZXJJY29uJylcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY2xvc2VkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5IZWFkZXJJY29uJylcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnY2xvc2VkJyk7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5IZWFkZXJJY29uJylcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnb3BlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjcmVhdGUgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBleHBhbmRhYmxlID0gbmV3IFNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlKCk7XHJcblxyXG5cdFx0ZXhwYW5kYWJsZS5pbml0KCk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdFx0c2V0T3BlbkNsb3NlQ2xhc3MsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBTZWxlY3RTeXN0ZW0gKi9cblNhcHBoaXJlV2lkZ2V0cy5TZWxlY3RTeXN0ZW0gPSBjb25maWcgPT4ge1xuXHQkKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBXaWRnZXRJZCA9IGNvbmZpZy5XaWRnZXRJZDsgLy9Db21ibyBCb3ggSWQgdG8gYmUgdXNlZC5cblx0XHR2YXIgQ2xhc3MgPSBjb25maWcuQ2xhc3M7IC8vQWxsIENvbWJvIGJveGVzIHdpdGggdGhpcyBjbGFzcyB3aWxsIGJlIGJlIHRyYW5zZm9ybWVkLlxuXHRcdHZhciBOb1Jlc3VsdHNUZXh0ID0gY29uZmlnLk5vUmVzdWx0c1RleHQ7IC8vVGV4dCB0byBkaXNwbGF5IHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHMuXG5cdFx0dmFyIGlucHV0VHlwZSA9IGNvbmZpZy5JbnB1VHlwZTsgLy9PcHRpb25zOiBGSWx0ZXJzLCBEcm9wZG93biwgU2VsZWN0MlxuXHRcdHZhciBQcm9tcHQgPSBjb25maWcuUHJvbXB0OyAvL1Byb21wdCBpbiBzZWFyY2hcblx0XHR2YXIgU2VsZWN0MlR5cGUgPSBjb25maWcuU2VsZWN0VHlwZTsgLy8gVHlwZSBvZiBzZWxlY3QyIGNvbmZpZ3VyYXRpb25cblx0XHR2YXIgSGFzU2VhcmNoID0gY29uZmlnLkhhc1NlYXJjaDsgLy8gaGFzIHNlYXJjaFxuXHRcdHZhciBPblNlbGVjdGluZ0pTID0gY29uZmlnLk9uU2VsZWN0aW5nSlM7XG5cdFx0dmFyIE9uVW5TZWxlY3RpbmdKUyA9IGNvbmZpZy5PblVuU2VsZWN0aW5nSlM7XG5cdFx0dmFyIE1heGltdW1MZW5ndGggPSBjb25maWcuTWF4aW11bUxlbmd0aDtcblx0XHR2YXIgU2VsZWN0ZWRWYWx1ZSA9IGNvbmZpZy5TZWxlY3RlZFZhbHVlO1xuXHRcdHZhciBhbGxvd0NsZWFyID0gY29uZmlnLmFsbG93Q2xlYXI7XG5cdFx0Ly8gIFNlbGVjdDIgQWpheCBDb25maWd1cmF0aW9uXG5cdFx0dmFyIEFqYXhVUkwgPSBjb25maWcuQWpheFVSTDtcblx0XHR2YXIgQWpheERlbGF5ID0gY29uZmlnLkFqYXhEZWxheTtcblx0XHR2YXIgUGFnaW5hdGlvblNpemUgPSBjb25maWcuUGFnaW5hdGlvblNpemU7XG5cdFx0dmFyIE1pbmltdW1JbnB1dExlbmdodCA9IGNvbmZpZy5NaW5pbXVtSW5wdXRMZW5naHQ7XG5cdFx0dmFyIFNlYXJjaFRlcm0gPSBjb25maWcuU2VhcmNoVGVybTtcblx0XHR2YXIgU2VhcmNoRXh0cmFQYXJhbTEgPSBjb25maWcuU2VhcmNoRXh0cmFQYXJhbTE7XG5cdFx0dmFyIFBhZ2VUZXJtID0gY29uZmlnLlBhZ2VUZXJtO1xuXHRcdHZhciBBbW91bnRQYWdlID0gY29uZmlnLlBhZ2VBbW91bnQ7XG5cdFx0dmFyIGlzTXVsdGlwbGUgPSBjb25maWcuaXNNdWx0aXBsZTtcblx0XHR2YXIgU2VsZWN0Mk9wdGlvbnMgPSB7fTtcblx0XHR2YXIgJFdpZGdldElkZW50aWZpZXI7XG5cblx0XHRpZiAoY29uZmlnLmxvY2FsZSA9PT0gJ0FSJyB8fCBjb25maWcubG9jYWxlID09PSAnRkEnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kaXIgPSAncnRsJztcblx0XHR9XG5cdFx0XG5cdFx0U2VsZWN0Mk9wdGlvbnMudGhlbWUgPSAnZGVmYXVsdCBTZWxlY3RTeXN0ZW0nO1xuXG5cdFx0Y29uc29sZS5sb2coXCItLS0gXCIgKyBTZWxlY3QyVHlwZSArIFwiIC0tLVwiKTtcblx0XHQvKiAgXG4gICAgICAgICAgQ2hhbmdlIHNlbGVjdDIgc2VhcmNoIGRpc3BsYXkgXG4gICAgICAgICAgICAgIC1NdWx0aXBsZSBTZWxlY3QyIHNlYXJjaCBVSSBsaWtlIFNpbmdsZSBTZWxlY3QyXG4gICAgICAqL1xuXHRcdCQuZm4uc2VsZWN0Mi5hbWQuZGVmaW5lKFxuXHRcdFx0J1NlYXJjaExpa2VTaW5nbGUnLFxuXHRcdFx0W1xuXHRcdFx0XHQnc2VsZWN0Mi91dGlscycsXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duJyxcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24vYXR0YWNoQm9keScsXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL2F0dGFjaENvbnRhaW5lcicsXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL3NlYXJjaCcsXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyxcblx0XHRcdF0sXG5cdFx0XHRmdW5jdGlvbihVdGlscywgRHJvcGRvd24sIEF0dGFjaEJvZHksIEF0dGFjaENvbnRhaW5lciwgU2VhcmNoLCBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCkge1xuXHRcdFx0XHRsZXQgZHJvcGRvd25TZWFyY2ggPSBVdGlscy5EZWNvcmF0ZShEcm9wZG93biwgU2VhcmNoKTtcblx0XHRcdFx0ZHJvcGRvd25TZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciAkcmVuZGVyZWQgPSBEcm9wZG93bi5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG5cdFx0XHRcdFx0Ly8gQWRkIGFiaWxpdHkgZm9yIGEgcGxhY2Vob2xkZXIgaW4gdGhlIHNlYXJjaCBib3hcblx0XHRcdFx0XHRsZXQgcGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdwbGFjZWhvbGRlckZvclNlYXJjaCcpIHx8ICcnO1xuXHRcdFx0XHRcdHZhciAkc2VhcmNoID0gJChcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1kcm9wZG93blwiPicgK1xuXHRcdFx0XHRcdFx0XHQnPGlucHV0IGNsYXNzPVwic2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCInICtcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXIgK1xuXHRcdFx0XHRcdFx0XHQnXCIgdHlwZT1cInNlYXJjaFwiJyArXG5cdFx0XHRcdFx0XHRcdCcgdGFiaW5kZXg9XCItMVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIicgK1xuXHRcdFx0XHRcdFx0XHQnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJ0ZXh0Ym94XCIgLz4nICtcblx0XHRcdFx0XHRcdFx0Jzwvc3Bhbj4nXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XG5cdFx0XHRcdFx0dGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xuXHRcdFx0XHRcdCRzZWFyY2guYWRkQ2xhc3MoJ011bHRpcGxlU2VsZWN0Jyk7XG5cblx0XHRcdFx0XHQkcmVuZGVyZWQucHJlcGVuZCgkc2VhcmNoKTtcblx0XHRcdFx0XHQkc2VhcmNoLnBhcmVudCgpLmFkZENsYXNzKCdNdWx0aXBsZVNlbGVjdCcpO1xuXHRcdFx0XHRcdHJldHVybiAkcmVuZGVyZWQ7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gRGVjb3JhdGUgdGhlIGRyb3Bkb3duK3NlYXJjaCB3aXRoIHRoZSBjb250YWluZXJzXG5cdFx0XHRcdGxldCBhZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoZHJvcGRvd25TZWFyY2gsIEF0dGFjaENvbnRhaW5lcik7XG5cdFx0XHRcdGFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShhZGFwdGVyLCBBdHRhY2hCb2R5KTtcblxuXHRcdFx0XHRyZXR1cm4gYWRhcHRlcjtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0LyoqXG5cdFx0ICogRGVmYXVsdCBDb25maWd1cmF0aW9uIG5lZWRlZCB0byBhc3NvY2lhdGUgdGhlIHdpZGdldCB0byB0aGUgc2VsZWN0MiBwbHVnaW5cblx0XHQgKi9cblx0XHRpZiAoV2lkZ2V0SWQgPT09ICcnICYmIENsYXNzICE9ICcnKSB7XG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllciA9ICQoJy4nICsgQ2xhc3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllciA9ICQoJyMnICsgV2lkZ2V0SWQpO1xuXHRcdH1cblx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdzZWxlY3QtaGlkZSAnICsgaW5wdXRUeXBlO1xuXG5cdFx0Ly8gIFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duUGFyZW50PSAkKCcjJytQYXJlbnREaXYpO1xuXG5cdFx0dmFyIGZvcm1hdFJlc3VsdCA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuXHRcdFx0dmFyICRzZWxlY3RlZE9wdGlvbnNWYWx1ZSA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJzpzZWxlY3RlZCcpO1xuXHRcdFx0dmFyIHNlbGVjdGVkT3B0aW9ucyA9ICRzZWxlY3RlZE9wdGlvbnNWYWx1ZS5sZW5ndGg7XG5cdFx0XHR2YXIgdG90YWxPcHRpb25zID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uJykubGVuZ3RoO1xuXHRcdFx0dmFyIHNlbGVjdEFsbE9wdCA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbjpmaXJzdC1jaGlsZDpzZWxlY3RlZCcpLmxlbmd0aDtcblx0XHRcdHZhciBhY3RpdmVWYWx1ZXMgPSAnJztcblx0XHRcdHZhciBhbGxPcHRFeGNlcHRBbGwgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCc6c2VsZWN0ZWQ6bm90KFwiLlNlbGVjdGVkQWxsXCIpJykubGVuZ3RoO1xuXHRcdFx0dmFyICRhbGxPcHRFeGNlcHRBbGxPYmogPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCc6c2VsZWN0ZWQ6bm90KFwiLlNlbGVjdGVkQWxsXCIpJyk7XG5cblx0XHRcdGlmIChzZWxlY3RlZE9wdGlvbnMgPT09IHRvdGFsT3B0aW9ucykge1xuXHRcdFx0XHRpZiAodG90YWxPcHRpb25zIC0gMSA+IDMpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ0FsbCBTZWxlY3RlZCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGFsbE9wdEV4Y2VwdEFsbE9iai5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzICsgJyAnICsgJCh0aGlzKVswXS5pbm5lclRleHQ7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzLnJlcGxhY2UoLyxcXHMqJC8sICcnKTtcblx0XHRcdFx0XHRyZXR1cm4gYWN0aXZlVmFsdWVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdG90YWxvcHQgPSB0b3RhbE9wdGlvbnMgLSAxO1xuXHRcdFx0XHRpZiAoc2VsZWN0ZWRPcHRpb25zID4gMykge1xuXHRcdFx0XHRcdHJldHVybiBzZWxlY3RlZE9wdGlvbnMgKyAnIG9mICcgKyB0b3RhbG9wdCArICcgc2VsZWN0ZWQnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChzZWxlY3RlZE9wdGlvbnMgPiAwKSB7XG5cdFx0XHRcdFx0XHQkc2VsZWN0ZWRPcHRpb25zVmFsdWUuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzICsgJyAnICsgJCh0aGlzKVswXS5pbm5lclRleHQgKyAnLCAnO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRhY3RpdmVWYWx1ZXMgPSBhY3RpdmVWYWx1ZXMucmVwbGFjZSgvLFxccyokLywgJycpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFjdGl2ZVZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdTZWxlY3QgYW4gb3B0aW9uJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKE5vUmVzdWx0c1RleHQgIT0gJycpIHtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmZvcm1hdE5vTWF0Y2hlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gTm9SZXN1bHRzVGV4dDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKGlucHV0VHlwZSAhPSAnJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9IGlucHV0VHlwZTtcblx0XHR9XG5cblx0XHRpZiAoYWxsb3dDbGVhciA9PT0gJ1RydWUnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5hbGxvd0NsZWFyID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoTWF4aW11bUxlbmd0aCAhPSAnJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMubWF4aW11bUlucHV0TGVuZ3RoID0gTWF4aW11bUxlbmd0aDtcblx0XHR9XG5cblx0XHRpZiAoUHJvbXB0ICE9ICcnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5wbGFjZWhvbGRlciA9IFByb21wdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMucGxhY2Vob2xkZXIgPSB7XG5cdFx0XHRcdGlkOiAnLTEnLCAvLyB0aGUgdmFsdWUgb2YgdGhlIG9wdGlvblxuXHRcdFx0XHR0ZXh0OiAnU2VsZWN0IGFuIG9wdGlvbicsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzMnKSB7XG5cdFx0XHQvLyBTZWxlY3QyIEFqYXhcblx0XHRcdFNlbGVjdDJPcHRpb25zID0ge307XG5cblx0XHRcdGlmIChjb25maWcubG9jYWxlID09PSAnQVInIHx8IGNvbmZpZy5sb2NhbGUgPT09ICdGQScpIHtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLmFsbG93Q2xlYXIgPSBmYWxzZTtcblxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGVtcGxhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbihyZXBvKSB7XG5cdFx0XHRcdGlmICghcmVwby5lbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIFByb21wdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXBvLmZ1bGxfbmFtZSB8fCByZXBvLnRleHQ7XG5cdFx0XHR9O1xuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50ZW1wbGF0ZVJlc3VsdCA9IGZ1bmN0aW9uKHJlcG8pIHtcblx0XHRcdFx0aWYgKHJlcG8ubG9hZGluZykge1xuXHRcdFx0XHRcdHJldHVybiByZXBvLnRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIG1hcmt1cCA9ICc8ZGl2IGNsYXNzPVwiXCJDbGVhcmZpeFwiXCI+JyArICc8ZGl2IGNsYXNzPVwiXCJUaGVtZUdyaWRfV2lkdGgxMlwiXCI+JyArIHJlcG8udGV4dCArICc8L2Rpdj4nO1xuXHRcdFx0XHRpZiAocmVwby5kZXNjcmlwdGlvbikge1xuXHRcdFx0XHRcdG1hcmt1cCArPSAnPGRpdiBjbGFzcz1cIlwiT1NBdXRvTWFyZ2luVG9wXCJcIj4nICsgcmVwby5kZXNjcmlwdGlvbiArICc8L2Rpdj4nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1hcmt1cCArPSAnPC9kaXY+Jztcblx0XHRcdFx0cmV0dXJuIG1hcmt1cDtcblx0XHRcdH07XG5cblx0XHRcdChTZWxlY3QyT3B0aW9ucy5hamF4ID0ge1xuXHRcdFx0XHR1cmw6IEFqYXhVUkwsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdGRlbGF5OiBBamF4RGVsYXksXG5cdFx0XHRcdGRhdGE6IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0XHRcdHZhciBTZWxlY3QyQWpheE9wdCA9IHt9O1xuXHRcdFx0XHRcdHZhciBTcGxpdFBhcmFtZXRlciA9IFNlYXJjaEV4dHJhUGFyYW0xLnNwbGl0KCcsJyk7XG5cdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHQuU2VhcmNoUGFyYW1ldGVyID0gcGFyYW1zLnRlcm07XG5cdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHQuUGFnZSA9IHBhcmFtcy5wYWdlIHx8IDE7XG5cdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHQuUGFnZUFtb3VudCA9IEFtb3VudFBhZ2U7XG5cblx0XHRcdFx0XHRTcGxpdFBhcmFtZXRlci5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdFx0XHR2YXIgc3BsaXRUZXh0ID0gZWwuc3BsaXQoJzonKTtcblx0XHRcdFx0XHRcdFNlbGVjdDJBamF4T3B0W3NwbGl0VGV4dFswXV0gPSBzcGxpdFRleHRbMV07XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gU2VsZWN0MkFqYXhPcHQ7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbihkYXRhLCBwYXJhbXMpIHtcblx0XHRcdFx0XHRwYXJhbXMucGFnZSA9IHBhcmFtcy5wYWdlIHx8IDE7XG5cblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0cmVzdWx0czogZGF0YS5pdGVtcyxcblx0XHRcdFx0XHRcdHBhZ2luYXRpb246IHtcblx0XHRcdFx0XHRcdFx0bW9yZTogcGFyYW1zLnBhZ2UgKiBQYWdpbmF0aW9uU2l6ZSA8IGRhdGEudG90YWxfY291bnQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNhY2hlOiB0cnVlLFxuXHRcdFx0fSksXG5cdFx0XHRcdChTZWxlY3QyT3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPSBNaW5pbXVtSW5wdXRMZW5naHQpO1xuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5lc2NhcGVNYXJrdXAgPSBmdW5jdGlvbihtYXJrdXApIHtcblx0XHRcdFx0cmV0dXJuIG1hcmt1cDtcblx0XHRcdH07XG5cblx0XHRcdGlmIChjb25maWcuaXNNdWx0aXBsZSkge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5tdWx0aXBsZSA9IHRydWU7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ1NlbGVjdDJBamF4IE11bHRpcGxlJztcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICdTZWxlY3QyQWpheCBNdWx0aXBsZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5tdWx0aXBsZSA9IGZhbHNlO1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdTZWxlY3QyQWpheCc7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAnU2VsZWN0MkFqYXgnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoU2VsZWN0ZWRWYWx1ZSAhPT0gJycpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShTZWxlY3RlZFZhbHVlKTtcblx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBuZXcgT3B0aW9uKGRhdGEuVmFsdWUsIGRhdGEuSWQsIHRydWUsIHRydWUpO1xuXG5cdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuYXBwZW5kKG9wdGlvbikudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tcG9uZW50IFNlbGVjdFN5c3RlbSAoJHtXaWRnZXRJZH0pOiBTZWxlY3RlZFZhbHVlIG11c3QgYmUgYSB2YWxpZCBKU09OIWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gMDtcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSBjb25maWcuSGFzVGFncztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNsb3NlT25zZWxlY3QgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzInKSB7XG5cdFx0XHQvL1NlbGVjdDIgd2l0aCBDaGVja0JveFxuXG5cdFx0XHR2YXIgaXNBbGxTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0aWYgKCRXaWRnZXRJZGVudGlmaWVyWzBdLm9wdGlvbnMubGVuZ3RoID09PSAkV2lkZ2V0SWRlbnRpZmllclswXS5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdGlzQWxsU2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoV2lkZ2V0SWQgIT0gJycpIHtcblx0XHRcdFx0b3B0aW9uID0gbmV3IE9wdGlvbignU2VsZWN0IEFsbCcsICdBbGwnLCB0cnVlLCBpc0FsbFNlbGVjdGVkKTtcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIucHJlcGVuZChvcHRpb24pO1xuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb246Zmlyc3QtY2hpbGQnKS5hZGRDbGFzcygnU2VsZWN0ZWRBbGwnKTtcblx0XHRcdH1cblx0XHRcdFNlbGVjdDJPcHRpb25zLm11bHRpcGxlID0gdHJ1ZTtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNsb3NlT25TZWxlY3QgPSBmYWxzZTtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmFsbG93SHRtbCA9IGZhbHNlO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGFncyA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoSGFzU2VhcmNoID09PSAnVHJ1ZScpIHtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gJC5mbi5zZWxlY3QyLmFtZC5yZXF1aXJlKCdTZWFyY2hMaWtlU2luZ2xlJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IC0xO1xuXHRcdFx0fVxuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdNdWx0aXBsZVNlbGVjdCc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ011bHRpcGxlU2VsZWN0Jztcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRlbXBsYXRlU2VsZWN0aW9uID0gZm9ybWF0UmVzdWx0O1xuXHRcdH1cblxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzYnKSB7XG5cdFx0XHQvLyBTZWxlY3QyIEh0bWxPcHRpb25zXG5cdFx0XHRTZWxlY3QyT3B0aW9ucyA9IHt9O1xuXHRcdFx0aWYgKGNvbmZpZy5sb2NhbGUgPT09ICdBUicgfHwgY29uZmlnLmxvY2FsZSA9PT0gJ0ZBJykge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5kaXIgPSAncnRsJztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGRhdGFIdG1sT3B0aW9uID0gW107XG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0dmFyIG9wdGlvbk9iamVjdCA9IHtcblx0XHRcdFx0XHRpZDogJCh0aGlzKS52YWwoKSxcblx0XHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcblx0XHRcdFx0XHRodG1sOiAkKHRoaXMpLnRleHQoKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0ZGF0YUh0bWxPcHRpb24ucHVzaChvcHRpb25PYmplY3QpO1xuXHRcdFx0fSk7XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ2N1c3RvbVNlbGVjdCc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ2Ryb3Bkb3duQ3VzdG9tJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRhdGEgPSBkYXRhSHRtbE9wdGlvbjtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmVzY2FwZU1hcmt1cCA9IGZ1bmN0aW9uKG1hcmt1cCkge1xuXHRcdFx0XHRyZXR1cm4gbWFya3VwO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKFNlbGVjdGVkVmFsdWUgIT0gJycpIHtcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKFNlbGVjdGVkVmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKCcnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICcxJykge1xuXHRcdFx0Ly8gU2VsZWN0MiBUYWdDdXN0b21cblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSB0cnVlO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAndGFnQ3VzdG9tJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAndGFnQ3VzdG9tJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLlRva2VuU2VwYXJhdG9zID0gWycsJywgJyAnXTtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNyZWF0ZVNlYXJjaENob2ljZSA9IGZ1bmN0aW9uKHRlcm0sIGRhdGEpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCQoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dC5sb2NhbGVDb21wYXJlKHRlcm0pID09PSAwO1xuXHRcdFx0XHRcdH0pLmxlbmd0aCA9PT0gMFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0aWQ6IHRlcm0sXG5cdFx0XHRcdFx0XHR0ZXh0OiB0ZXJtLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnNScpIHtcblx0XHRcdC8vIFNlbGVjdDIgVGFnTXVsdGlwbGVcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSB0cnVlO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAndGFnU3lzdGVtJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAndGFnU3lzdGVtJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNyZWF0ZVRhZyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0XHR2YXIgdGVybSA9ICQudHJpbShwYXJhbXMudGVybSk7XG5cdFx0XHRcdGlmICh0ZXJtID09PSAnJykge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWQ6ICcjJyArIHRlcm0sXG5cdFx0XHRcdFx0dGV4dDogdGVybSxcblx0XHRcdFx0XHRuZXdUYWc6IHRydWUsIC8vIGFkZCBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKEhhc1NlYXJjaCA9PT0gJ0ZhbHNlJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSAtMTtcblx0XHR9XG5cblx0XHRpZiAoT25VblNlbGVjdGluZ0pTICE9ICcnIHx8IE9uU2VsZWN0aW5nSlMgIT0gJycpIHtcblx0XHRcdCRXaWRnZXRJZGVudGlmaWVyXG5cdFx0XHRcdC5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKVxuXHRcdFx0XHQub24oJ3NlbGVjdDI6dW5zZWxlY3RpbmcnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5kYXRhKCd1bnNlbGVjdGluZycsIHRydWUpO1xuXHRcdFx0XHRcdE9uVW5TZWxlY3RpbmdKUztcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdzZWxlY3Q6c2VsZWN0aW5nJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdE9uU2VsZWN0aW5nSlM7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignc2VsZWN0Om9wZW5pbmcnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgndW5zZWxlY3RpbmcnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVEYXRhKCd1bnNlbGVjdGluZycpO1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdzZWxlY3Q6b3BlbicsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ3NlbGVjdDI6Y2xvc2UnLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzInKSB7XG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xuXHRcdFx0XHR2YXIgaWR3aWRnZXQgPSAnIycgKyBXaWRnZXRJZDtcblxuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5vbignc2VsZWN0MjpzZWxlY3QnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0VW5zZWxlY3RlZElkID0gZS5wYXJhbXMuZGF0YS5pZDtcblx0XHRcdFx0XHRpZiAoVW5zZWxlY3RlZElkID09PSAnQWxsJykge1xuXHRcdFx0XHRcdFx0dmFyIHNlbGVjdGVkSXRlbXMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBhbGxPcHRpb25zID0gJChpZHdpZGdldCArICcgb3B0aW9uJyk7XG5cdFx0XHRcdFx0XHRhbGxPcHRpb25zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MignZGVzdHJveScpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKHNlbGVjdGVkSXRlbXMpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdvcGVuJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBzZWxlY3RlZE9wdGlvbnMgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR2YXIgdG90YWxPcHRpb25zID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uJykubGVuZ3RoO1xuXHRcdFx0XHRcdFx0aWYgKHNlbGVjdGVkT3B0aW9ucyA9PT0gdG90YWxPcHRpb25zIC0gMSAmJiAkKGlkd2lkZ2V0ICsgJyA+ICBvcHRpb246c2VsZWN0ZWQ6Zmlyc3QtY2hpbGQnKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHNlbGVjdGVkSXRlbXMgPSBbXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFsbE9wdGlvbnMgPSAkKGlkd2lkZ2V0ICsgJyBvcHRpb24nKTtcblx0XHRcdFx0XHRcdFx0YWxsT3B0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcblx0XHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKHNlbGVjdGVkSXRlbXMpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcblx0XHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIub24oJ3NlbGVjdDI6dW5zZWxlY3QnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0VW5zZWxlY3RlZElkID0gZS5wYXJhbXMuZGF0YS5pZDtcblx0XHRcdFx0XHRpZiAoVW5zZWxlY3RlZElkID09PSAnQWxsJykge1xuXHRcdFx0XHRcdFx0JChpZHdpZGdldCArICcgPiBvcHRpb24nKS5yZW1vdmVBdHRyKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MignZGVzdHJveScpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdvcGVuJyk7XG5cdFx0XHRcdFx0XHQkKGlkd2lkZ2V0KVxuXHRcdFx0XHRcdFx0XHQudmFsKCcnKVxuXHRcdFx0XHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdFx0XHQvLyQoaWR3aWRnZXQgKycgPiBvcHRpb24nKS5hdHRyKCdzZWxlY3RlZCcsIFwic2VsZWN0ZWRcIik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoaWR3aWRnZXQgKyAnID4gb3B0aW9uOmZpcnN0LWNoaWxkJykucmVtb3ZlQXR0cignc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICc0Jykge1xuXHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHR2YXIgaWR3aWRnZXQgPSAnIycgKyBXaWRnZXRJZDtcblxuXHRcdFx0JFdpZGdldElkZW50aWZpZXIub24oJ3NlbGVjdDI6c2VsZWN0JywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZihlLnRhcmdldC5zZWxlY3RlZEluZGV4ICE9PSAwKXtcblx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5wYXJlbnQoKS5hZGRDbGFzcygnU2VsZWN0U3lzdGVtRmlsdGVyLVNlbGVjdGVkJyk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdTZWxlY3RTeXN0ZW1GaWx0ZXItU2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaGlmdENvbnRhaW5lciAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0bGV0IHNoaWZ0VGltZWxpbmVSZXNpemVUaW1lcjtcclxuXHRsZXQgJHNoaWZ0Q29udGFpbmVySWQgPSAkKCk7XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IHNoaWZ0Q29udGFpbmVySWQgPT4ge1xyXG5cdFx0Ly8gJCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHJcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUgJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcblx0XHQkc2hpZnRDb250YWluZXJJZCA9ICQoc2hpZnRDb250YWluZXJJZCk7XHJcblxyXG5cdFx0aGFzU2Nyb2xsQmFyKCk7XHJcblx0XHRoYW5kbGVTaGlmdFRhYmxlKCk7XHJcblxyXG5cdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0Ly8gXHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUgJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHQvLyB9LCAxNTAwKTtcclxuXHJcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX19hcnJvdycpXHJcblx0XHRcdC5vZmYoJ21vdXNlZG93bicpXHJcblx0XHRcdC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJlZHJhd1NoaWZ0VGltZWxpbmUoKTtcclxuXHRcdFx0XHR9LCAxNTAwKTtcclxuXHRcdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU2hpZnRUYWJsZSA9ICgpID0+IHtcclxuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG5cdFx0XHR2YXIgJGVsRmxhZyA9ICQodGhpcylcclxuXHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHQuZmluZCgnLkZsYWdMaW5lJyk7XHJcblx0XHRcdHZhciAkZWxGbGFnVGltZSA9ICQodGhpcylcclxuXHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHQuZmluZCgnLkZsYWdMaW5lX3RpbWUnKTtcclxuXHRcdFx0dmFyICRjb2x1bW5GbGFnID0gJGVsRmxhZy5kYXRhKCdjb2x1bW4nKTtcclxuXHRcdFx0dmFyICRtaW51dGVzRmxhZyA9ICRlbEZsYWcuZGF0YSgnbWludXRlcycpO1xyXG5cdFx0XHR2YXIgJHNsb3RzID0gJCh0aGlzKVxyXG5cdFx0XHRcdC5jbG9zZXN0KCcuU2hpZnRDb250YWluZXInKVxyXG5cdFx0XHRcdC5maW5kKCcuU2hpZnRDb250YWluZXJfaGVhZGVyJylcclxuXHRcdFx0XHQuZmluZCgnLlNoaWZ0Q2VsbENvbnRlbnQnKTtcclxuXHRcdFx0dmFyICRzbG90V2lkdGggPSBNYXRoLnJvdW5kKCRzbG90cy5lcSgwKS53aWR0aCgpKTtcclxuXHRcdFx0dmFyIG1pbnV0ZXNQb3NpdGlvbiA9ICgkbWludXRlc0ZsYWcgKiAkc2xvdFdpZHRoKSAvIDYwO1xyXG5cclxuXHRcdFx0Ly8gaGFuZGxlIGN1cnJlbnQgdGltZSBmbG9nIGhvcml6b250YWwgcG9zaXRpb25pbmdcclxuXHRcdFx0dmFyIHNsb3RzUG9zaXRpb24gPSBbXTtcclxuXHRcdFx0JHNsb3RzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XHJcblx0XHRcdFx0c2xvdHNQb3NpdGlvbi5wdXNoKCQodGhpcykucG9zaXRpb24oKS5sZWZ0KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCRlbEZsYWcuY3NzKCdsZWZ0Jywgc2xvdHNQb3NpdGlvblskY29sdW1uRmxhZyAtIDFdICsgbWludXRlc1Bvc2l0aW9uKTtcclxuXHRcdFx0JGVsRmxhZy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdFx0aWYgKCRjb2x1bW5GbGFnID09PSAkc2xvdHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0JGVsRmxhZ1RpbWUuY3NzKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiAnMXB4JyxcclxuXHRcdFx0XHRcdGxlZnQ6ICdhdXRvJyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaGFuZGxlIGNlbGxzIHRoYXQgbWlnaHQgc3BhbiBvdmVyIHNldmVyYWwgc2xvdHNcclxuXHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdC5maW5kKCcuU2hpZnRDYXJkJylcclxuXHRcdFx0XHQuZWFjaChmdW5jdGlvbihpbmRleCwgZWxSb3cpIHtcclxuXHRcdFx0XHRcdHZhciByb3dIYXNTcGFubmVkQ2VsbCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0JChlbFJvdylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TaGlmdENlbGxDb250ZW50JylcclxuXHRcdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsQ2VsbCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBjb2xzcGFuID0gJChlbENlbGwpLmRhdGEoJ2NvbHNwYW4nKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoY29sc3BhbiA9PT0gc2xvdHNQb3NpdGlvbi5sZW5ndGggfHwgcm93SGFzU3Bhbm5lZENlbGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQoZWxDZWxsKS5jc3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmxleDogJzEgMSBhdXRvJyxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY29sc3BhbiA+IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJvd0hhc1NwYW5uZWRDZWxsID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdCQoZWxDZWxsKS5jc3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmxleDogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogKyhzbG90c1Bvc2l0aW9uW2NvbHNwYW5dIC0gc2xvdHNQb3NpdGlvblswXSkgKyAncHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGhhbmRsZSBob3Jpem9udGFsIHNjcm9sbCBiZWhhdmlvclxyXG5cdFx0XHRpZiAoZWwuc2Nyb2xsV2lkdGggPiBlbC5jbGllbnRXaWR0aCkge1xyXG5cdFx0XHRcdCQoZWwpLndpZHRoKGVsLnNjcm9sbFdpZHRoKTtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuY2xvc2VzdCgnLlNoaWZ0Q29udGFpbmVyJylcclxuXHRcdFx0XHRcdC5maW5kKCcuU2hpZnRDb250YWluZXJfaGVhZGVyJylcclxuXHRcdFx0XHRcdC53aWR0aChlbC5zY3JvbGxXaWR0aCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChlbCkud2lkdGgoJ2F1dG8nKTtcclxuXHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHQuY2xvc2VzdCgnLlNoaWZ0Q29udGFpbmVyJylcclxuXHRcdFx0XHRcdC5maW5kKCcuU2hpZnRDb250YWluZXJfaGVhZGVyJylcclxuXHRcdFx0XHRcdC53aWR0aCgnYXV0bycpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYXNTY3JvbGxCYXIgPSAoKSA9PiB7XHJcblx0XHR2YXIgJFNjcm9sbGFibGVEaXYgPSAkc2hpZnRDb250YWluZXJJZC5maW5kKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lcicpO1xyXG5cdFx0aWYgKCRzaGlmdENvbnRhaW5lcklkLmZpbmQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRpZiAoJFNjcm9sbGFibGVEaXYuZ2V0KDApLnNjcm9sbEhlaWdodCA+ICRTY3JvbGxhYmxlRGl2LmhlaWdodCgpKSB7XHJcblx0XHRcdFx0dmFyICRsYXN0Q2VsbCA9ICRzaGlmdENvbnRhaW5lcklkLmZpbmQoJy5Jc1RpbWVyOmxhc3QtY2hpbGQnKTtcclxuXHRcdFx0XHQkbGFzdENlbGwuY3NzKCdwYWRkaW5nLXJpZ2h0JywgJzdweCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVkcmF3U2hpZnRUaW1lbGluZSA9ICgpID0+IHtcclxuXHRcdGNsZWFyVGltZW91dChzaGlmdFRpbWVsaW5lUmVzaXplVGltZXIpO1xyXG5cdFx0c2hpZnRUaW1lbGluZVJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0aGFzU2Nyb2xsQmFyKCk7XHJcblx0XHRcdGhhbmRsZVNoaWZ0VGFibGUoKTtcclxuXHRcdH0sIDQwMCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hlY2tTY3JvbGwgPSAoKSA9PiB7XHJcblx0XHR2YXIgaENvbnRlbnQgPSAkKCcuQ29udGVudCcpLmhlaWdodCgpO1xyXG5cdFx0dmFyIGhXaW5kb3cgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcblxyXG5cdFx0aWYgKGhDb250ZW50ID4gaFdpbmRvdykgcmVkcmF3U2hpZnRUaW1lbGluZSgpO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lciA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHRcdGNoZWNrU2Nyb2xsLFxyXG5cdFx0cmVkcmF3U2hpZnRUaW1lbGluZSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XHJcblxyXG4kKHdpbmRvdylcclxuXHQub2ZmKCdyZXNpemUuR2VuZXJpY0dhbGxlcnknKVxyXG5cdC5vbigncmVzaXplLkdlbmVyaWNHYWxsZXJ5JywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcblx0XHRTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIucmVkcmF3U2hpZnRUaW1lbGluZSgpO1xyXG5cclxuXHRcdG9zQWpheEJhY2tlbmQgJiYgb3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIucmVkcmF3U2hpZnRUaW1lbGluZSk7XHJcblxyXG5cdFx0c2V0VGltZW91dChTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIuY2hlY2tTY3JvbGwsIDEwMDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdH0sIDE1MDApO1xyXG5cdH0pO1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0aWYgKCEhJCgnLlNoaWZ0Q29udGFpbmVyJykubGVuZ3RoKSB7XHJcblx0XHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIucmVkcmF3U2hpZnRUaW1lbGluZSgpO1xyXG5cdFx0fSwgNDAwKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5jaGVja1Njcm9sbCwgNTAwKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHR9LCA2MDApO1xyXG5cclxuXHRcdCQoJy5uYXZpZ2F0aW9uLWNvbnRyb2wtaXRlbScpXHJcblx0XHRcdC5vZmYoJ2NsaWNrJylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHRcdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Ly9WZXJpZnkgdGhlIHNjcm9sbCBpZiB0b29sdGlwIG9wZW5lZFxyXG5cdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXInKS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKCcudG9vbHRpcHN0ZXItYmFzZScpLmlzKCc6dmlzaWJsZScpKSB7XHJcblx0XHRcdFx0JCgnLnRvb2x0aXBzdGVyLWJhc2UnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLnJlZHJhd1NoaWZ0VGltZWxpbmUoKTtcclxuXHRcdFx0fSwgNDAwKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLmNoZWNrU2Nyb2xsLCA1MDApO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdFx0fSwgNjAwKTtcclxuXHJcblx0XHRcdC8vIFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IFNoaWZ0VGFibGUgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGUgPSB3aWRnZXRJZCA9PiB7XHJcblx0JChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGNvbnN0ICRzaGlmdFRhYmxlID0gJChgIyR7d2lkZ2V0SWR9YCk7XHJcblx0XHRcdGNvbnN0ICRoZWFkZXJDZWxsTGlzdCA9ICRzaGlmdFRhYmxlLmZpbmQoJy5TaGlmdFRhYmxlX19IZWFkZXJMYWJlbHMgLlNoaWZ0VGFibGVDZWxsJyk7XHJcblx0XHRcdGNvbnN0ICRob3VyTGluZSA9ICRzaGlmdFRhYmxlLmZpbmQoJy5Ib3VyTGluZScpO1xyXG5cclxuXHRcdFx0Y29uc3QgY29sdW1uTGluZSA9ICRob3VyTGluZS5kYXRhKCdjb2x1bW4nKTtcclxuXHRcdFx0Y29uc3QgbWludXRlc0xpbmUgPSAkaG91ckxpbmUuZGF0YSgnbWludXRlcycpO1xyXG5cclxuXHRcdFx0Y29uc3QgY2VsbFdpZHRoID0gJGhlYWRlckNlbGxMaXN0LmVxKDApLndpZHRoKCk7XHJcblx0XHRcdGNvbnN0IG1pbnV0ZXNQb3NpdGlvbiA9IChjZWxsV2lkdGggLyA2MCkgKiBtaW51dGVzTGluZTtcclxuXHJcblx0XHRcdC8vIEhhbmRsZSBjdXJyZW50IGhvdXIgbGluZSBob3Jpem9udGFsIHBvc2l0aW9uaW5nXHJcblx0XHRcdGNvbnN0IGNlbGxQb3NpdGlvbiA9IFtdO1xyXG5cclxuXHRcdFx0JGhlYWRlckNlbGxMaXN0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XHJcblx0XHRcdFx0Y2VsbFBvc2l0aW9uLnB1c2goJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRob3VyTGluZS5jc3MoJ2xlZnQnLCBjZWxsUG9zaXRpb25bY29sdW1uTGluZSAtIDFdICsgbWludXRlc1Bvc2l0aW9uKTtcclxuXHRcdFx0JGhvdXJMaW5lLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcblx0XHR9LCA1MDApO1xyXG5cdH0pO1xyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgU2hpZnRUYWJsZUNhcmQgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkID0gd2lkZ2V0SWQgPT4ge1xyXG5cdGNvbnN0ICRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcclxuXHRjb25zdCAkYWN0aW9ucyA9ICRjb21wb25lbnQuZmluZCgnLk1vcmVBY3Rpb25zJyk7XHJcblx0Y29uc3QgaGFzQWN0aW9ucyA9ICRhY3Rpb25zLmxlbmd0aCA+IDA7XHJcblxyXG5cdGlmIChoYXNBY3Rpb25zKSB7XHJcblx0XHQkYWN0aW9ucy5vbignY2xpY2snLCBlID0+IHtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdCQoJy5TaGlmdFRhYmxlQ2FyZCcpLnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZC0tc2VsZWN0ZWQnKTtcclxuXHRcdFx0JGNvbXBvbmVudC5hZGRDbGFzcygnU2hpZnRUYWJsZUNhcmQtLXNlbGVjdGVkJyk7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBvbkNsaWNrT3V0c2lkZSA9IGUgPT4ge1xyXG5cdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcblxyXG5cdFx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygkY29tcG9uZW50KSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjb21wb25lbnQpLmlzKCRjb21wb25lbnQpKSB7XHJcblx0XHRcdFx0JGNvbXBvbmVudC5yZW1vdmVDbGFzcygnU2hpZnRUYWJsZUNhcmQtLXNlbGVjdGVkJyk7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcbn07XHJcbiIsIlNhcHBoaXJlV2lkZ2V0cy5TaGlmdFRhYmxlQ2FyZFByb2dyZXNzID0gY29uZmlnID0+IHtcblx0Y29uc3QgREVGQVVMVF9QQURESU5HID0gMDtcblx0Y29uc3QgREVGQVVMVF9DQVJEX0hFSUdIVCA9IDU2O1xuXG5cdGNvbnN0IHNldFRhYmxlQ2FyZFByb2dyZXNzID0gKCkgPT4ge1xuXHRcdGNvbnN0IGNhcmRQcm9ncmVzSUQgPSBjb25maWcud2lkZ2V0SWQ7XG5cdFx0Y29uc3Qgc3RhcnRDb2x1bW4gPSBjb25maWcuc3RhcnRDb2x1bW47XG5cdFx0Y29uc3QgZW5kQ29sdW1uID0gY29uZmlnLmVuZENvbHVtbjtcblx0XHRjb25zdCBpbml0aWFsTWludXRlcyA9IGNvbmZpZy5pbml0aWFsTWludXRlcztcblx0XHRjb25zdCBiZWdpbnNJbmNvbXBsZXRlID0gY29uZmlnLmJlZ2luc0luY29tcGxldGU7XG5cdFx0Y29uc3QgZW5kc0luY29tcGxldGUgPSBjb25maWcuZW5kc0luY29tcGxldGU7XG5cblx0XHRjb25zdCAkY2FyZFByb2dyZXNzID0gJCgnIycgKyBjYXJkUHJvZ3Jlc0lEKTtcblx0XHRjb25zdCAkc2hpZnRUYWJsZSA9ICRjYXJkUHJvZ3Jlc3MuY2xvc2VzdCgnLlNoaWZ0VGFibGUnKTtcblx0XHRjb25zdCAkdGFibGVDZWxsTGlzdCA9ICRzaGlmdFRhYmxlLmZpbmQoJy5TaGlmdFRhYmxlX19Db250ZW50IC5TaGlmdFRhYmxlQ2VsbCcpO1xuXHRcdGNvbnN0ICR0YWJsZVJvd0NvbnRlbnQgPSAkY2FyZFByb2dyZXNzLmNsb3Nlc3QoJy5TaGlmdFRhYmxlUm93X19Db250ZW50Jyk7XG5cdFx0Y29uc3QgJHRhYmxlQ2FyZCA9ICR0YWJsZVJvd0NvbnRlbnQuZmluZCgnLlNoaWZ0VGFibGVDYXJkJyk7XG5cdFx0Y29uc3QgJGNhcmRQcm9ncmVzc0xpc3QgPSAkdGFibGVSb3dDb250ZW50LmZpbmQoJy5TaGlmdFRhYmxlQ2FyZFByb2dyZXNzJyk7XG5cdFx0Y29uc3QgJHByb2dyZXNzQmFyTGlzdCA9ICRjYXJkUHJvZ3Jlc3MuZmluZCgnLlByb2dyZXNzQmFyV3JhcCcpO1xuXHRcdGNvbnN0ICRhY3Rpb25zID0gJGNhcmRQcm9ncmVzcy5maW5kKCcuTW9yZUFjdGlvbnMnKTtcblxuXHRcdGNvbnN0IGNhcmRzVG90YWwgPSAkdGFibGVDYXJkLmxlbmd0aDtcblx0XHRjb25zdCB0aW1lU2xvdFdpZHRoID0gJHRhYmxlQ2VsbExpc3RbMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cdFx0Y29uc3QgY29sRmlsbCA9IHBhcnNlSW50KGVuZENvbHVtbikgLSBwYXJzZUludChzdGFydENvbHVtbikgPiAwID8gcGFyc2VJbnQoZW5kQ29sdW1uKSAtIHBhcnNlSW50KHN0YXJ0Q29sdW1uKSArIDEgOiAxOy8vY2hhbmdlZCB0byBpbmNyZW1lbnQgcGx1cyAxIGFnYWluLCBuZWVkcyB0byBiZSByZXZpZXdlZCB3aGVuIGluZnVzaW9ucyBzdGFydCBhdCB0aW1lIHdpdGggbWludXRlcyAobGlrZSA1OjMwcG0pXG5cdFx0Y29uc3QgbWludXRlVmFsdWVXaWR0aCA9IHRpbWVTbG90V2lkdGggLyA2MDtcblx0XHRjb25zdCBoYXNBY3Rpb25zID0gJGFjdGlvbnMubGVuZ3RoID4gMDtcblxuXHRcdGxldCB0b3RhbExlZnQgPSBiZWdpbnNJbmNvbXBsZXRlID8gMCA6IChpbml0aWFsTWludXRlcyAqIG1pbnV0ZVZhbHVlV2lkdGgpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYXJzZUludChzdGFydENvbHVtbik7IGkrKykge1xuXHRcdFx0dG90YWxMZWZ0ICs9ICR0YWJsZUNlbGxMaXN0W2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdH1cblxuXHRcdGxldCByb3VuZFdpZHRoID0gTWF0aC5yb3VuZCgodGltZVNsb3RXaWR0aCArIE51bWJlci5FUFNJTE9OKSAqIDEwMCkgLyAxMDA7XG5cdFx0Y29uc3QgcGFkZGluZ09mZnNldCA9IERFRkFVTFRfUEFERElORyAqIDI7XG5cdFx0Y29uc3QgbmV3V2lkdGggPSBwYXJzZUZsb2F0KChjb2xGaWxsICogcm91bmRXaWR0aCAtIHBhZGRpbmdPZmZzZXQpIC0gKGJlZ2luc0luY29tcGxldGUgPyAwIDogKGVuZHNJbmNvbXBsZXRlID8gKGluaXRpYWxNaW51dGVzICogbWludXRlVmFsdWVXaWR0aCkgOiAwKSkpO1xuXHRcdGNvbnN0IGRpcmVjdGlvbiA9ICQoJy5QYWdlJykuaGFzQ2xhc3MoJ0FSJykgfHwgJCgnLlBhZ2UnKS5oYXNDbGFzcygnRkEnKSA/ICdyaWdodCcgOiAnbGVmdCc7XG5cblx0XHQkY2FyZFByb2dyZXNzLmNzcygnd2lkdGgnLCBgJHtuZXdXaWR0aH1weGApO1xuXHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCdtYXgtd2lkdGgnLCAndW5zZXQnKTtcblx0XHQkY2FyZFByb2dyZXNzLmNzcyhkaXJlY3Rpb24sIGAkeyh0b3RhbExlZnQgKz0gREVGQVVMVF9QQURESU5HKX1weGApO1xuXG5cdFx0aWYgKGNhcmRzVG90YWwgPiAwKSB7XG5cdFx0XHRsZXQgY291bnQgPSAwO1xuXG5cdFx0XHQkdGFibGVDYXJkLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0Y29uc3QgaXNPdmVybGFwZWQgPSBjaGVja0Zvck92ZXJsYXAoJGNhcmRQcm9ncmVzc1swXSwgJHRoaXNbMF0pO1xuXG5cdFx0XHRcdGlmIChpc092ZXJsYXBlZCA9PT0gdHJ1ZSAmJiBjb3VudCA8ICRjYXJkUHJvZ3Jlc3NMaXN0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCd0b3AnLCAkdGhpc1swXS5vZmZzZXRUb3AgKyAkY2FyZFByb2dyZXNzLmhlaWdodCgpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvdW50ID0gY291bnQrKztcblx0XHRcdH0pO1xuXG5cdFx0XHQkY2FyZFByb2dyZXNzTGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdFx0Y29uc3QgaGVscGVyID0gaGVscGVyT2JqKCR0aGlzLCAkY2FyZFByb2dyZXNzLCAkY2FyZFByb2dyZXNzTGlzdCk7XG5cblx0XHRcdFx0aWYgKGhlbHBlci5pc092ZXJsYXBlZCkge1xuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCd0b3AnLCAkdGhpc1swXS5vZmZzZXRUb3AgKyAxMzApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCd0b3AnLCAkdGFibGVSb3dDb250ZW50LmhlaWdodCgpIC0gREVGQVVMVF9QQURESU5HKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IG9mZnNldCA9IDQgKyBERUZBVUxUX0NBUkRfSEVJR0hUICsgREVGQVVMVF9QQURESU5HICogMjtcblxuXHRcdFx0JHRhYmxlUm93Q29udGVudC5oZWlnaHQoJGNhcmRQcm9ncmVzc0xpc3QubGFzdCgpLnBvc2l0aW9uKCkudG9wICsgb2Zmc2V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGNhcmRQcm9ncmVzc0xpc3QuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdGNvbnN0IGhlbHBlciA9IGhlbHBlck9iaigkdGhpcywgJGNhcmRQcm9ncmVzcywgJGNhcmRQcm9ncmVzc0xpc3QpO1xuXG5cdFx0XHRcdGlmIChoZWxwZXIuaXNPdmVybGFwZWQpIHtcblx0XHRcdFx0XHRjb25zdCBvZmZzZXQgPSBERUZBVUxUX0NBUkRfSEVJR0hUICsgREVGQVVMVF9QQURESU5HICogMjtcblxuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MuY3NzKCd0b3AnLCAkY2FyZFByb2dyZXNzWzBdLm9mZnNldFRvcCArIG9mZnNldCArICdweCcpO1xuXHRcdFx0XHRcdGhlbHBlci4kc2hpZnRDYXJkLmhlaWdodChoZWxwZXIuJHNoaWZ0Q2FyZC5oZWlnaHQoKSArICR0aGlzWzBdLm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0aWYgKHRpbWVTbG90V2lkdGggIT09ICR0YWJsZUNlbGxMaXN0WzFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSB7XG5cdFx0XHRcdHNldFRhYmxlQ2FyZFByb2dyZXNzKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fSwgNTAwKTtcblxuXHRcdGlmIChoYXNBY3Rpb25zKSB7XG5cdFx0XHQkYWN0aW9ucy5vbignY2xpY2snLCBlID0+IHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0XHQkY2FyZFByb2dyZXNzLmFkZENsYXNzKCdTaGlmdFRhYmxlQ2FyZFByb2dyZXNzLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBvbkNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuXHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdFx0aWYgKCFlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJGNhcmRQcm9ncmVzcykgJiYgISR0YXJnZXQucGFyZW50cygkY2FyZFByb2dyZXNzKS5pcygkY2FyZFByb2dyZXNzKSkge1xuXHRcdFx0XHRcdCRjYXJkUHJvZ3Jlc3MucmVtb3ZlQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MtLXNlbGVjdGVkJyk7XG5cblx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyokcHJvZ3Jlc3NCYXJMaXN0LmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGNvbnN0IGJlZ2luc2xvdCA9ICQodGhpcykuZGF0YSgnYmVnaW5zbG90Jyk7XG5cdFx0XHRjb25zdCBiZWdpbm1pbnV0ZSA9ICQodGhpcykuZGF0YSgnYmVnaW5taW51dGUnKTtcblx0XHRcdGNvbnN0IGVuZHNsb3QgPSAkKHRoaXMpLmRhdGEoJ2VuZHNsb3QnKTtcblx0XHRcdGNvbnN0IGVuZG1pbnV0ZSA9ICQodGhpcykuZGF0YSgnZW5kbWludXRlJyk7XG5cdFx0XHRjb25zdCBhY3Rpb25zV2lkdGggPSA1NjtcblxuXHRcdFx0Y29uc3QgcHJvZ3Jlc3NCYXJNaW51dGVzID0gKGVuZHNsb3QgLSBiZWdpbnNsb3QpICogNjAgKyBlbmRtaW51dGUgLSBiZWdpbm1pbnV0ZTtcblx0XHRcdGNvbnN0IHByb2dyZXNzZW5kV2l0aFBlciA9IHByb2dyZXNzQmFyTWludXRlcyAqIG1pbnV0ZVZhbHVlV2lkdGg7XG5cblx0XHRcdGNvbnN0ICRwcm9ncmVzc1RvdGFsID0gJCh0aGlzKS5maW5kKCcuUHJvZ3Jlc3NCYXJfX2FuaW1hdGlvbicpO1xuXG5cdFx0XHQvLyQodGhpcykuY3NzKCdsZWZ0JywgKChiZWdpbnNsb3QgLSAxKSAqIDYwICsgYmVnaW5taW51dGUpICogbWludXRlVmFsdWVXaWR0aCArICdweCcpO1xuXHRcdFx0JHByb2dyZXNzVG90YWwuY3NzKCd3aWR0aCcsIHByb2dyZXNzZW5kV2l0aFBlciAtIGFjdGlvbnNXaWR0aCArICdweCcpO1xuXHRcdH0pOyovXG5cdH07XG5cblx0Y29uc3QgY2hlY2tGb3JPdmVybGFwID0gKGVsMSwgZWwyKSA9PiB7XG5cdFx0Y29uc3QgYm91bmRzMSA9IGVsMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCBib3VuZHMyID0gZWwyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0Y29uc3QgZmlyc3RJc3RMZWZ0bW9zdCA9IGJvdW5kczEubGVmdCA8PSBib3VuZHMyLmxlZnQ7XG5cdFx0Y29uc3QgbGVmdGVzdCA9IGZpcnN0SXN0TGVmdG1vc3QgPyBib3VuZHMxIDogYm91bmRzMjtcblx0XHRjb25zdCByaWdodGVzdCA9IGZpcnN0SXN0TGVmdG1vc3QgPyBib3VuZHMyIDogYm91bmRzMTtcblxuXHRcdC8vIFJlcGxhY2UgPiB0byB0byA+PSBpZiBib3JkZXIgb3ZlcmxhcCBzaG91bGQgY291bnRcblx0XHRpZiAobGVmdGVzdC5yaWdodCA+IHJpZ2h0ZXN0LmxlZnQpIHtcblx0XHRcdGNvbnN0IGZpcnN0SXNUb3Btb3N0ID0gYm91bmRzMS50b3AgPD0gYm91bmRzMi50b3A7XG5cdFx0XHRjb25zdCB0b3Blc3QgPSBmaXJzdElzVG9wbW9zdCA/IGJvdW5kczEgOiBib3VuZHMyO1xuXHRcdFx0Y29uc3QgYm90dG9tZXN0ID0gZmlyc3RJc1RvcG1vc3QgPyBib3VuZHMyIDogYm91bmRzMTtcblxuXHRcdFx0Ly8gUmVwbGFjZSA+IHRvID49IGlmIGJvcmRlciBzaG91bGQgY291bnRcblx0XHRcdHJldHVybiB0b3Blc3QuYm90dG9tID4gYm90dG9tZXN0LnRvcDtcblx0XHR9IGVsc2UgcmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdGNvbnN0IGhlbHBlck9iaiA9ICgkdGhpcywgJGNhcmRQcm9ncmVzcywgJGNhcmRQcm9ncmVzc0xpc3QpID0+IHtcblx0XHRjb25zdCAkc2hpZnRDYXJkID0gJHRoaXMuY2xvc2VzdCgnLlNoaWZ0VGFibGVSb3dfX0NvbnRlbnQnKTtcblx0XHRsZXQgaXNPdmVybGFwZWQgPSBjaGVja0Zvck92ZXJsYXAoJGNhcmRQcm9ncmVzc1swXSwgJHRoaXNbMF0pO1xuXHRcdGNvbnN0IGNyZWF0ZWRJZCA9ICRjYXJkUHJvZ3Jlc3MuYXR0cignaWQnKTtcblx0XHRjb25zdCBsb29wZWRJZCA9ICR0aGlzLmF0dHIoJ2lkJyk7XG5cdFx0Y29uc3QgJGZpcnN0U2xvdENyZWF0ZWQgPSAkY2FyZFByb2dyZXNzTGlzdFswXTtcblxuXHRcdGlzT3ZlcmxhcGVkID0gaXNPdmVybGFwZWQgPT09IHRydWUgJiYgY3JlYXRlZElkICE9IGxvb3BlZElkICYmIGNyZWF0ZWRJZCAhPSAkZmlyc3RTbG90Q3JlYXRlZC5pZDtcblxuXHRcdHJldHVybiB7ICRzaGlmdENhcmQsIGNyZWF0ZWRJZCwgbG9vcGVkSWQsICRmaXJzdFNsb3RDcmVhdGVkLCBpc092ZXJsYXBlZCB9O1xuXHR9O1xuXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdHNldFRhYmxlQ2FyZFByb2dyZXNzKGNvbmZpZyk7XG5cdH0pO1xuXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQod2luZG93W2NvbmZpZy53aWRnZXRJZF0ucmVzaXplZEZpbmlzaGVkKTtcblx0XHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdLnJlc2l6ZWRGaW5pc2hlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNldFRhYmxlQ2FyZFByb2dyZXNzKGNvbmZpZyk7XG5cdFx0XHR9LCAyNTApO1xuXHRcdH1cblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IFNoaWZ0VGFibGVDYXJkSG92ZXIgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkSG92ZXIgPSB3aWRnZXRJZCA9PiB7XHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCAkY2FyZCA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cdFx0Y29uc3QgJGNhcmRDb250ZW50ID0gJGNhcmQuZmluZCgnLlNoaWZ0VGFibGVDYXJkSG92ZXJfX0NvbnRlbnQnKTtcclxuXHJcblx0XHQkY2FyZENvbnRlbnQub24oJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHQkY2FyZC5hZGRDbGFzcygnU2hpZnRUYWJsZUNhcmRIb3Zlci0tc2VsZWN0ZWQnKTtcclxuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2xpY2tPdXRzaWRlID0gZSA9PiB7XHJcblx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHJcblx0XHRcdGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCRjYXJkKSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjYXJkKS5pcygkY2FyZCkpIHtcclxuXHRcdFx0XHQkY2FyZC5yZW1vdmVDbGFzcygnU2hpZnRUYWJsZUNhcmRIb3Zlci0tc2VsZWN0ZWQnKTtcclxuXHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0pO1xyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgU2lkZU1lbnVTdHJ1Y3R1cmUgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y2xhc3MgU2lkZU1lbnUge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcclxuXHRcdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLm9uQ29tcG9uZW50SW5pdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldE1haW5NZW51V2lkdGgoKSB7XHJcblx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHRcdFx0XHRjb25zdCAkc2lkZUJhcklmcmFtZSA9ICQoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXIubm90RXhwYW5kYWJsZScpO1xyXG5cclxuXHRcdFx0XHRpZiAoJHNpZGVCYXJJZnJhbWUubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRjb25zdCAkbWFpbk1lbnUgPSAkKCcuTGF5b3V0QmFzZS1NYWluTWVudScpO1xyXG5cdFx0XHRcdFx0JG1haW5NZW51LmNzcyh7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnY2FsYygxMDAlIC0gMjYycHgpJyxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0b3BlbkNsb3NlTWVudSh0b09wZW4pIHtcclxuXHRcdFx0aWYgKHRvT3Blbikge1xyXG5cdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5hZGRDbGFzcygnU2lkZU1lbnUtLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0JCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhcicpLmNzcyh7XHJcblx0XHRcdFx0XHR6SW5kZXg6IDAsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LnJlbW92ZUNsYXNzKCdTaWRlTWVudS0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHQkKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyJykuY3NzKHtcclxuXHRcdFx0XHRcdHpJbmRleDogNzAsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3dDbGljaygkY29tcG9uZW50KSB7XHJcblx0XHRcdCQod2luZG93KVxyXG5cdFx0XHRcdC5vZmYoJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJylcclxuXHRcdFx0XHQub24oJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgaXNNZW51SXRlbSA9IGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQgJiYgJChldmVudC50YXJnZXQub2Zmc2V0UGFyZW50KS5oYXNDbGFzcygnTWVudUl0ZW0nKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIWlzTWVudUl0ZW0pIHtcclxuXHRcdFx0XHRcdFx0JGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHQkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zIC5zaG93JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHJcblx0XHRcdFx0XHRcdCQod2luZG93KS5vZmYoJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xyXG5cdFx0XHR0aGlzLnNldE1haW5NZW51V2lkdGgoKTtcclxuXHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcclxuXHRcdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX1RyaWdnZXInKTtcclxuXHRcdFx0dGhpcy4kc2hpZWxkID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fU2hpZWxkJyk7XHJcblx0XHRcdHRoaXMuJGNsb3NlQnV0dG9uID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUNsb3NlJyk7XHJcblx0XHRcdHRoaXMuJHRhYkl0ZW0gPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJJdGVtcyAuTWVudUl0ZW0nKTtcclxuXHRcdFx0dGhpcy4kbWVudUl0ZW0gPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtX19JdGVtVGl0bGUnKTtcclxuXHRcdFx0dGhpcy4kc3ViSXRlbSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW1fc3ViSXRlbXMnKTtcclxuXHRcdFx0dGhpcy4kZGVwYXJ0bWVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX1RhYnMgLkRlcGFydG1lbnROYW1lJyk7XHJcblxyXG5cdFx0XHQvL3RoaXMuJHRyaWdnZXIuaGlkZSgpO1xyXG5cdFx0XHR0aGlzLiRkZXBhcnRtZW50LmhpZGUoKTtcclxuXHJcblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lciA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuaWZyYW1lQ29udGFpbmVyJyk7XHJcblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsZHMtcmluZyBPSVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+Jyk7XHJcblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lci5maW5kKCdpZnJhbWUnKS5sb2FkKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLiRpZnJhbWVDb250YWluZXIuZmluZCgnLmxkcy1yaW5nJykuZmFkZU91dCgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIXRoaXMuJGNvbXBvbmVudC5oYXNDbGFzcygnU2lkZU1lbnUtLXRhYnNUaGVtZScpKSB7XHJcblx0XHRcdFx0XHQvL3RoaXMuJHRyaWdnZXIuc2hvdygpO1xyXG5cdFx0XHRcdFx0dGhpcy4kZGVwYXJ0bWVudC5zaG93KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJHRyaWdnZXIub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VNZW51KHRydWUpKTtcclxuXHRcdFx0dGhpcy4kc2hpZWxkLm9uKCdjbGljaycsICgpID0+IHRoaXMub3BlbkNsb3NlTWVudShmYWxzZSkpO1xyXG5cdFx0XHR0aGlzLiRjbG9zZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wZW5DbG9zZU1lbnUoZmFsc2UpKTtcclxuXHJcblx0XHRcdHRoaXMuJHRhYkl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0XHRcdGNvbnN0ICRsaW5rID0gJHRhcmdldC5maW5kKCcuTWVudUl0ZW1fbGFiZWwgYScpO1xyXG5cclxuXHRcdFx0XHRpZiAoJGxpbmsubGVuZ3RoKSAkbGluay5nZXQoMCkuY2xpY2soKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLiRtZW51SXRlbS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcblx0XHRcdFx0Y29uc3QgaXNJY29uID0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ljb24gaWNvbi1jaGFuZ2Vkb3duJztcclxuXHRcdFx0XHRpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmICFpc0ljb24pIHJldHVybjtcclxuXHJcblx0XHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCk7XHJcblx0XHRcdFx0Y29uc3QgJHN1Ykl0ZW1zID0gJHRhcmdldC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKTtcclxuXHRcdFx0XHRjb25zdCAkbGluayA9ICR0YXJnZXQuZmluZCgnLk1lbnVJdGVtX2xhYmVsIGEnKTtcclxuXHJcblx0XHRcdFx0aWYgKCRsaW5rLmxlbmd0aCkgJGxpbmsuZ2V0KDApLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0JHRhcmdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkc3ViSXRlbXMucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kY29tcG9uZW50XHJcblx0XHRcdFx0XHRcdC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuYWN0aXZlJylcclxuXHRcdFx0XHRcdFx0Lm5vdCgkdGFyZ2V0KVxyXG5cdFx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuJGNvbXBvbmVudFxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLnNob3cnKVxyXG5cdFx0XHRcdFx0XHQubm90KCR0YXJnZXQpXHJcblx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdCR0YXJnZXQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JHN1Ykl0ZW1zLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuJGNvbXBvbmVudC5oYXNDbGFzcygnU2lkZU1lbnUtLXRhYnNUaGVtZScpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMud2luZG93Q2xpY2sodGhpcy4kY29tcG9uZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy4kc3ViSXRlbS5vbignY2xpY2snLCBldmVudCA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSk7XHJcblxyXG5cdFx0XHR0aGlzLiRjb21wb25lbnRcclxuXHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19UYWJJdGVtcyA+IGRpdjplbXB0eScpXHJcblx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0LmhpZGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc2l6ZVRhYnMgPSAoJGNvbXBvbmVudCwgJG1lbnVUYWJzLCBpc1JlY3Vyc2l2ZSkgPT4ge1xyXG5cdFx0Y29uc3QgJG1lbnVUcmlnZ2VyID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX1RyaWdnZXInKTtcclxuXHRcdGNvbnN0IGhlYWRlcldpZHRoID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0hlYWRlcicpLm91dGVyV2lkdGgoKTtcclxuXHRcdGNvbnN0ICRtZW51SXRlbXMgPSAkbWVudVRhYnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKTtcclxuXHRcdGNvbnN0IHRhYnNXaWR0aCA9ICRtZW51SXRlbXMubGVuZ3RoID8gJG1lbnVJdGVtcy5vdXRlcldpZHRoKCkgOiAkbWVudVRhYnMub3V0ZXJXaWR0aCgpO1xyXG5cclxuXHRcdGNvbnN0IGZpeGVkVmFsdWUgPSAkKHdpbmRvdy5wYXJlbnQpLndpZHRoKCkgPCAxMDI0ID8gMTgwIDogMTk2O1xyXG5cdFx0bGV0IGhhc0l0ZW1Ub1JlbW92ZSA9IHRydWU7XHJcblxyXG5cdFx0aWYgKHRhYnNXaWR0aCA+IDAgJiYgdGFic1dpZHRoICsgZml4ZWRWYWx1ZSA+IGhlYWRlcldpZHRoICYmIGhhc0l0ZW1Ub1JlbW92ZSkge1xyXG5cdFx0XHRjb25zdCAkbW9yZU9wdGlvbnMgPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fQ29udGVudCcpO1xyXG5cdFx0XHRjb25zdCAkbGFzdEl0ZW0gPSAkbWVudVRhYnNcclxuXHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtJylcclxuXHRcdFx0XHQubGFzdCgpXHJcblx0XHRcdFx0LmRldGFjaCgpO1xyXG5cclxuXHRcdFx0aWYgKCEkbW9yZU9wdGlvbnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHQkKCc8ZGl2IGNsYXNzPVwiU2lkZU1lbnVfX01lbnVJdGVtc1wiPjwvZGl2PicpLmFwcGVuZFRvKCRtb3JlT3B0aW9ucyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0ICRtZW51SXRlbXMgPSAkbW9yZU9wdGlvbnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKTtcclxuXHRcdFx0JGxhc3RJdGVtLnByZXBlbmRUbygkbWVudUl0ZW1zKTtcclxuXHJcblx0XHRcdCRtZW51VHJpZ2dlci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cclxuXHRcdFx0aGFzSXRlbVRvUmVtb3ZlID0gISEkbGFzdEl0ZW0ubGVuZ3RoO1xyXG5cclxuXHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMsICEhJGxhc3RJdGVtLmxlbmd0aCk7XHJcblx0XHR9IGVsc2UgaWYgKCFpc1JlY3Vyc2l2ZSkge1xyXG5cdFx0XHRjb25zdCAkbWVudUl0ZW1zID0gJG1lbnVUYWJzLmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJyk7XHJcblx0XHRcdGxldCAkZmlyc3RJdGVtID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0NvbnRlbnQgLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtJykuZmlyc3QoKTtcclxuXHJcblx0XHRcdGNvbnN0IG5ld0xpbmtXaWR0aCA9IDE0MCAqIDEuMTYgKyAxNjsgLy8gRm9udC1zaXplICsgcGFkZGluZyBiZXR3ZWVuIGl0ZW1zIChnYXApXHJcblx0XHRcdGNvbnN0IG5ld0l0ZW1zV2lkdGggPSBuZXdMaW5rV2lkdGggKyAkbWVudUl0ZW1zLm91dGVyV2lkdGgoKTtcclxuXHJcblx0XHRcdGlmIChuZXdJdGVtc1dpZHRoICsgZml4ZWRWYWx1ZSA8IGhlYWRlcldpZHRoKSB7XHJcblx0XHRcdFx0JGZpcnN0SXRlbSA9ICRmaXJzdEl0ZW0uZGV0YWNoKCk7XHJcblx0XHRcdFx0JGZpcnN0SXRlbS5hcHBlbmRUbygkbWVudVRhYnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKSk7XHJcblxyXG5cdFx0XHRcdGlmICgkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fQ29udGVudCAuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW0nKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHJlc2l6ZVRhYnMoJGNvbXBvbmVudCwgJG1lbnVUYWJzKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JG1lbnVUcmlnZ2VyLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRUYWJzVGhlbWUgPSAoKSA9PiB7XHJcblx0XHQkKHRvcC5kb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5TaWRlTWVudScsIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQpLmFkZENsYXNzKCdTaWRlTWVudS0tdGFic1RoZW1lJyk7XHJcblxyXG5cdFx0XHRjb25zdCAkY29tcG9uZW50ID0gJCgnLlNpZGVNZW51Jywgd2luZG93LnBhcmVudC5kb2N1bWVudCk7XHJcblx0XHRcdGNvbnN0ICRtZW51VGFicyA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJzJyk7XHJcblxyXG5cdFx0XHQkbWVudVRhYnMuZmluZCgnPiBkaXY6ZW1wdHknKS5oaWRlKCk7XHJcblxyXG5cdFx0XHRjb25zdCAkaXRlbXMgPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJykuZGV0YWNoKCk7XHJcblx0XHRcdCRpdGVtcy5hcHBlbmRUbygkbWVudVRhYnMpO1xyXG5cclxuXHRcdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMsIHRydWUpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQod2luZG93LnBhcmVudCkucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cucmVzaXplZEZpbmlzaGVkKTtcclxuXHRcdFx0XHR3aW5kb3cucmVzaXplZEZpbmlzaGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJlc2l6ZVRhYnMoJGNvbXBvbmVudCwgJG1lbnVUYWJzKTtcclxuXHRcdFx0XHR9LCAyNTApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2lkZU1lbnUoY29uZmlnKSk7XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TaWRlTWVudSA9IHsgY3JlYXRlLCBzZXRUYWJzVGhlbWUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBJU2lkZWJhciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2lkZWJhcihjb25maWcpO1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TaWRlYmFyLndpZGdldElkID0gY29uZmlnLndpZGdldElkO1xuXHR9O1xuXG5cdHZhciBjbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2lkZWJhci53aWRnZXRJZF0uY2xvc2UoKTtcblx0fTtcblxuXHR2YXIgU2lkZWJhciA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5pc0V4cGFuZGFibGUgPSBjb25maWcuaXNFeHBhbmRhYmxlO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiRzaWRlYmFyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhcicpO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1tZW51Jyk7XG5cdFx0dGhpcy4kc2lkZWJhck1lbnVJdGVtID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TaWRlYmFyTWVudUl0ZW0nKTtcblx0XHR0aGlzLiRzaWRlYmFyU2hpZWxkID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1zaGllbGQnKTtcblx0XHR0aGlzLiRzaWRlYmFyQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSVNpZGViYXItY29udGVudCcpO1xuXHRcdHRoaXMuc2hvd0xhc3RWaWV3ZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJz4gZGl2JykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdQSCcpICYmICQodGhpcykudGV4dCgpID09PSAnJykge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XG5cdFx0aWYgKCF0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0dGhpcy5vcGVuTWVudUl0ZW0oMCk7XG5cdFx0fVxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLiRzaG93TGFzdFZpZXdlZCk7XG5cblx0XHRcdGlmICghY29uZmlnLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0XHQkKGAuJHtjb25maWcuc2VsZWN0ZWRUYWJ9YCkuY2xpY2soKTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93LnBhcmVudC4kKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyIC5sZHMtcmluZycpLmZhZGVPdXQoKTtcblxuXHRcdFx0aWYgKCF0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0XHQkKCdpbnB1dFt0eXBlPVwidGV4dFwiXTp2aXNpYmxlJylcblx0XHRcdFx0XHQuZXEoMClcblx0XHRcdFx0XHQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCQod2luZG93KS51bmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LiQoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXIgLmxkcy1yaW5nJykuZmFkZU91dCgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNpZGViYXIucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kc2lkZWJhck1lbnUub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRjb25zb2xlLmxvZyhldnQpO1xuXG5cdFx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRpZiAoIV90aGlzLiRzaWRlYmFyLmhhc0NsYXNzKCdvcGVuJykpIHtcblx0XHRcdFx0X3RoaXMub3Blbk1lbnVJdGVtKDApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51SXRlbS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxlY3RlZFBvc2l0aW9uID0gJCh0aGlzKS5pbmRleCgpO1xuXHRcdFx0X3RoaXMub3Blbk1lbnVJdGVtKHNlbGVjdGVkUG9zaXRpb24pO1xuXHRcdH0pO1xuXHRcdHRoaXMuJHNpZGViYXJTaGllbGQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy5jbG9zZSgpO1xuXHRcdH0pO1xuXHRcdHRoaXMuJHNpZGViYXIub24oJ2NsaWNrJywgJy5TZWFyY2hTaWRlQmFyRmllbGRzIC5CdXR0b25Hcm91cF9idXR0b246Zmlyc3QtY2hpbGQnLCBmdW5jdGlvbigpIHtcblx0XHRcdF90aGlzLiRzaWRlYmFyXG5cdFx0XHRcdC5maW5kKCcuRmllbGRzU2xpZGVyJylcblx0XHRcdFx0LmFkZENsYXNzKCdUYWIxJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdUYWIyJyk7XG5cdFx0XHRfdGhpcy5zZXRGaWVsZEZvY3VzKF90aGlzLiRzaWRlYmFyQ29udGVudC5maW5kKCcuVGV4dElucHV0OnZpc2libGUnKS5lcSgwKSk7XG5cdFx0fSk7XG5cdFx0dGhpcy4kc2lkZWJhci5vbignY2xpY2snLCAnLlNlYXJjaFNpZGVCYXJGaWVsZHMgLkJ1dHRvbkdyb3VwX2J1dHRvbjpsYXN0LWNoaWxkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy4kc2lkZWJhclxuXHRcdFx0XHQuZmluZCgnLkZpZWxkc1NsaWRlcicpXG5cdFx0XHRcdC5hZGRDbGFzcygnVGFiMicpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnVGFiMScpO1xuXHRcdFx0X3RoaXMuc2V0RmllbGRGb2N1cyhfdGhpcy4kc2lkZWJhckNvbnRlbnQuZmluZCgnLlRleHRJbnB1dDp2aXNpYmxlJykuZXEoMCkpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4kc2lkZWJhci5vbignY2xpY2snLCAnLnNob3ctbGFzdC12aWV3ZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdF90aGlzLnNob3dMYXN0Vmlld2VkID0gIV90aGlzLnNob3dMYXN0Vmlld2VkO1xuXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSVNpZGViYXInKS5kYXRhc2V0LnNob3dsYXN0dmlld2VkID0gX3RoaXMuc2hvd0xhc3RWaWV3ZWQ7XG5cblx0XHRcdHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhci5ub3RFeHBhbmRhYmxlJykuZGF0YXNldC5zaG93bGFzdHZpZXdlZCA9XG5cdFx0XHRcdF90aGlzLnNob3dMYXN0Vmlld2VkO1xuXG5cdFx0XHRpZiAoX3RoaXMuc2hvd0xhc3RWaWV3ZWQpIHtcblx0XHRcdFx0d2luZG93LnBhcmVudC5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyLm5vdEV4cGFuZGFibGUnKS5zdHlsZS53aWR0aCA9ICcxMDAlJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2lkZWJhci5wcm90b3R5cGUub3Blbk1lbnVJdGVtID0gZnVuY3Rpb24oc2VsZWN0ZWRQb3NpdGlvbikge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHR0aGlzLiRzaWRlYmFyXG5cdFx0XHQuZmluZCgnLlNpZGViYXJNZW51SXRlbScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHQuZXEoc2VsZWN0ZWRQb3NpdGlvbilcblx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHR0aGlzLiRzaWRlYmFyXG5cdFx0XHQuZmluZCgnLklTaWRlYmFyLWNvbnRlbnQgPiAuSVNpZGViYXItY29udGVudC1wYW5lbCcpXG5cdFx0XHQuaGlkZSgpXG5cdFx0XHQuZXEoc2VsZWN0ZWRQb3NpdGlvbilcblx0XHRcdC5zaG93KCk7XG5cblx0XHR0aGlzLiRzaWRlYmFyLmFkZENsYXNzKCdvcGVuJyk7XG5cblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLiRzaWRlYmFyKTtcblxuXHRcdGlmICh3aW5kb3cucGFyZW50Lmxlbmd0aCAmJiB0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLklTaWRlYmFyJykuZGF0YXNldC5zaG93bGFzdHZpZXdlZCA9ICd0cnVlJztcblx0XHRcdHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uub3BlblNpZGViYXJJZnJhbWUoMCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJy5UZXh0SW5wdXQ6dmlzaWJsZScpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuc2V0RmllbGRGb2N1cyh0aGlzLiRzaWRlYmFyQ29udGVudC5maW5kKCcuVGV4dElucHV0OnZpc2libGUnKS5lcSgwKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHdpbmRvdy5wYXJlbnQuJCgnLnNlbGVjdDItY29udGFpbmVyLS1vcGVuJykubGVuZ3RoKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LiQoJy5zZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJykuc2VsZWN0MignY2xvc2UnKTtcblx0XHR9XG5cdH07XG5cblx0U2lkZWJhci5wcm90b3R5cGUuc2V0RmllbGRGb2N1cyA9IGZ1bmN0aW9uKCRpbnB1dCkge1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlucHV0LmNsaWNrKCkuc2VsZWN0KCk7XG5cdFx0fSwgMjUwKTtcblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHRjb25zb2xlLmxvZygnc2lkZWJhciBjbG9zZScpO1xuXG5cdFx0aWYgKHdpbmRvdy5wYXJlbnQubGVuZ3RoKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LlNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLmNsb3NlU2lkZWJhcklmcmFtZSgwKTtcblx0XHRcdF90aGlzLnNob3dMYXN0Vmlld2VkID0gZmFsc2U7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSVNpZGViYXInKS5kYXRhc2V0LnNob3dsYXN0dmlld2VkID0gX3RoaXMuc2hvd0xhc3RWaWV3ZWQ7XG5cdFx0XHR3aW5kb3cucGFyZW50LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXInKS5kYXRhc2V0LnNob3dsYXN0dmlld2VkID0gX3RoaXMuc2hvd0xhc3RWaWV3ZWQ7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0dGhpcy4kc2lkZWJhci5yZW1vdmVDbGFzcygnb3BlbicpO1xuXHRcdFx0dGhpcy4kc2lkZWJhci5maW5kKCcuU2lkZWJhck1lbnVJdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0dGhpcy4kc2lkZWJhci5maW5kKCcuSVNpZGViYXItY29udGVudCA+IC5JU2lkZWJhci1jb250ZW50LXBhbmVsJykuaGlkZSgpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2lkZWJhciA9IHtcblx0XHRjcmVhdGU6IGNyZWF0ZSxcblx0XHRjbG9zZTogY2xvc2UsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCJTYXBwaGlyZVdpZGdldHMuU21hbGxCb3hTZWxlY3RhYmxlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcclxuXHJcblx0aWYgKGNvbmZpZy5zZWxlY3RPbkNsaWNrKSB7XHJcblx0XHQkY29tcG9uZW50LmNsaWNrKCgpID0+IHtcclxuXHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuU21hbGxCb3hMaXN0IC5TbWFsbEJveFNlbGVjdGFibGUnKS5ub3QoJGNvbXBvbmVudCk7XHJcblxyXG5cdFx0XHQkbGlzdC5yZW1vdmVDbGFzcygnU21hbGxCb3hTZWxlY3RhYmxlLS1zZWxlY3RlZCcpO1xyXG5cdFx0XHQkY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdTbWFsbEJveFNlbGVjdGFibGUtLXNlbGVjdGVkJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBTcGlubmVySG9yaXpvbnRhbCAqL1xyXG5TYXBwaGlyZVdpZGdldHMuU3Bpbm5lckhvcml6b250YWwgPSB7XHJcblx0Y3JlYXRlOiBjb25maWcgPT4ge1xyXG5cdFx0Y29uc3QgJGlucHV0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSBpbnB1dGApO1xyXG5cdFx0Y29uc3QgJHBsdXMgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IGEuUGx1c2ApO1xyXG5cdFx0Y29uc3QgJG1pbnVzID0gJChgIyR7Y29uZmlnLndpZGdldElkfSBhLk1pbnVzYCk7XHJcblxyXG5cdFx0bGV0IHZhbCA9ICRpbnB1dC52YWwoKTtcclxuXHJcblx0XHRpZiAodmFsIDw9ICtjb25maWcubWluVmFsdWUpIHtcclxuXHRcdFx0JG1pbnVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbCA+PSArY29uZmlnLm1heFZhbHVlKSB7XHJcblx0XHRcdCRwbHVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JGlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFsID0gTWF0aC5hYnMocGFyc2VJbnQodGhpcy52YWx1ZSwgMTApIHx8ICtjb25maWcubWluVmFsdWUpO1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsID4gK2NvbmZpZy5tYXhWYWx1ZSA/ICtjb25maWcubWF4VmFsdWUgOiB2YWwgPCArY29uZmlnLm1pblZhbHVlID8gK2NvbmZpZy5taW5WYWx1ZSA6IHZhbDtcclxuXHJcblx0XHRcdGlmICh2YWwgPD0gK2NvbmZpZy5taW5WYWx1ZSkgJG1pbnVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdGVsc2UgJG1pbnVzLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblxyXG5cdFx0XHRpZiAodmFsID49ICtjb25maWcubWF4VmFsdWUpICRwbHVzLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdGVsc2UgJHBsdXMucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0aW5jcmVtZW50OiBmdW5jdGlvbihlbGVtZW50SWQsIG1pblZhbHVlLCBtYXhWYWx1ZSwgdHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHR2YXIgX2VsZW1lbnQgPSAkKGVsZW1lbnRJZClcclxuXHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nKVxyXG5cdFx0XHQuZmlyc3QoKTtcclxuXHRcdGlmIChfZWxlbWVudC52YWwoKSA9PSB1bmRlZmluZWQgfHwgX2VsZW1lbnQudmFsKCkgPT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkpKSB7XHJcblx0XHRcdF9lbGVtZW50LnZhbChtaW5WYWx1ZSk7XHJcblx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpIHtcclxuXHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpIDwgbWF4VmFsdWUpIHtcclxuXHRcdFx0XHRfZWxlbWVudC52YWwocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgKyAxKTtcclxuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0JChlbGVtZW50SWQpXHJcblx0XHRcdFx0XHQuZmluZCgnYS5NaW51cycpXHJcblx0XHRcdFx0XHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgPj0gbWF4VmFsdWUpIHtcclxuXHRcdFx0XHQkKGVsZW1lbnRJZClcclxuXHRcdFx0XHRcdC5maW5kKCdhLlBsdXMnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGRlY3JlbWVudDogZnVuY3Rpb24oZWxlbWVudElkLCBtaW5WYWx1ZSwgdHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHR2YXIgX2VsZW1lbnQgPSAkKGVsZW1lbnRJZClcclxuXHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nKVxyXG5cdFx0XHQuZmlyc3QoKTtcclxuXHRcdGlmIChfZWxlbWVudC52YWwoKSA9PSB1bmRlZmluZWQgfHwgX2VsZW1lbnQudmFsKCkgPT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkpKSB7XHJcblx0XHRcdF9lbGVtZW50LnZhbChtaW5WYWx1ZSk7XHJcblx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpIHtcclxuXHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpID4gbWluVmFsdWUpIHtcclxuXHRcdFx0XHRfZWxlbWVudC52YWwocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgLSAxKTtcclxuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0JChlbGVtZW50SWQpXHJcblx0XHRcdFx0XHQuZmluZCgnYS5QbHVzJylcclxuXHRcdFx0XHRcdC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA8PSBtaW5WYWx1ZSkge1xyXG5cdFx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdFx0LmZpbmQoJ2EuTWludXMnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgU3Bpbm5lclZlcnRpY2FsICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zdCAkbWludXNWZXJ0aWNhbCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKS5maW5kKCcuTWludXNWZXJ0aWNhbCcpO1xyXG5cdFx0XHRjb25zdCAkaW5wdXRTcGlubmVyID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuU3Bpbm5lcklucHV0VmVydGljYWwgaW5wdXRgKTtcclxuXHJcblx0XHRcdCRpbnB1dFNwaW5uZXIub24oJ2JsdXIga2V5dXAgaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRJbnB1dFZhbHVlID0gJGlucHV0U3Bpbm5lci52YWwoKTtcclxuXHJcblx0XHRcdFx0aWYgKGNvbmZpZy5udW1iZXJMaXN0ICYmIGV2ZW50LnR5cGUgPT09ICdibHVyJykge1xyXG5cdFx0XHRcdFx0Y29uc3QgaW5wdXRWYWx1ZUludCA9IHBhcnNlSW50KGN1cnJlbnRJbnB1dFZhbHVlKTtcclxuXHRcdFx0XHRcdGNvbnN0IGFycmF5VG9TcGluID0gY29uZmlnLm51bWJlckxpc3Q7XHJcblx0XHRcdFx0XHRjb25zdCAkZXJyb3JNZXNzYWdlID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuU3Bpbm5lckVycm9yTWVzc2FnZWApO1xyXG5cclxuXHRcdFx0XHRcdCRlcnJvck1lc3NhZ2UuY3NzKCdkaXNwbGF5JywgYXJyYXlUb1NwaW4uaW5kZXhPZihpbnB1dFZhbHVlSW50KSA9PT0gLTEgPyAnYmxvY2snIDogJ25vbmUnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChjdXJyZW50SW5wdXRWYWx1ZSA8IGNvbmZpZy5taW5WYWx1ZSkgJG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xyXG5cdFx0XHRcdGVsc2UgJG1pbnVzVmVydGljYWwucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICgkaW5wdXRTcGlubmVyLnZhbCgpIDw9IGNvbmZpZy5taW5WYWx1ZSkge1xyXG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNvbmZpZy5udW1iZXJMaXN0ICYmICRpbnB1dFNwaW5uZXIudmFsKCkgPT09ICcnKSB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnROdW1iZXIgPSAwO1xyXG5cdFx0XHRcdGNvbnN0IGFycmF5VG9TcGluID0gY29uZmlnLm51bWJlckxpc3Quc3BsaXQoJywnKTtcclxuXHJcblx0XHRcdFx0JGlucHV0U3Bpbm5lci52YWwoYXJyYXlUb1NwaW5bY3VycmVudE51bWJlcl0pO1xyXG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNvbmZpZy5pc0N1cnNvck9uRm9jdXMpIHtcclxuXHRcdFx0XHQkKCdib2R5Jykub24oJ2ZvY3VzJywgYCMke2NvbmZpZy5pbnB1dElEfSBpbnB1dGAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuZm9jdXMoKTtcclxuXHRcdFx0XHRcdFx0dmFyIHZhbCA9IHRoYXQudmFsdWU7XHJcblx0XHRcdFx0XHRcdHRoYXQudmFsdWUgPSAnJztcclxuXHRcdFx0XHRcdFx0dGhhdC52YWx1ZSA9IHZhbDtcclxuXHRcdFx0XHRcdH0sIDEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY29uZmlnLmlzSW5wdXRFbXB0eSkge1xyXG5cdFx0XHRcdCRpbnB1dFNwaW5uZXIuYXR0cigndmFsdWUnLCAnJyk7XHJcblx0XHRcdFx0JG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBpbmNyZW1lbnQgPSAoZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQsIGxpc3RUb3NwaW4gPSBbXSkgPT4ge1xyXG5cdFx0Y29uc3QgJHNwaW5uZXIgPSAkKGVsZW1lbnRJZCk7XHJcblx0XHRsZXQgJGlucHV0ID0gJHNwaW5uZXIuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKS5maXJzdCgpO1xyXG5cclxuXHRcdHZhciBmb3JjZUludGVnZXIgPSAkKGVsZW1lbnRJZCkuZGF0YSgnZm9yY2VpbnRlZ2VyJykgPT09ICdUcnVlJyA/IHRydWUgOiBmYWxzZTtcclxuXHRcdHZhciBjdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSk7XHJcblx0XHR2YXIgaW5jcmVtZW50VW5pdCA9IDE7XHJcblx0XHR2YXIgaXNEZWNpbWFscyA9IGN1cnJlbnRWYWx1ZSAlIDEgIT0gMDtcclxuXHRcdHZhciBhcnJheXRvc3BpbiA9IGxpc3RUb3NwaW47XHJcblxyXG5cdFx0Y29uc3QgJG1pbnVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLk1pbnVzVmVydGljYWwnKTtcclxuXHRcdGNvbnN0ICRwbHVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLlBsdXNWZXJ0aWNhbCcpO1xyXG5cclxuXHRcdCRtaW51c1ZlcnRpY2FsLnJlbW92ZUNsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHJcblx0XHRpZiAoYXJyYXl0b3NwaW4ubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBjdXJyZW50UG9zaXRpb24gPSBhcnJheXRvc3Bpbi5pbmRleE9mKHBhcnNlSW50KCRpbnB1dC52YWwoKSkpO1xyXG5cdFx0XHR2YXIgbWF4aW11bVRvU3BpbiA9IGFycmF5dG9zcGluLmxhc3RJbmRleE9mKGFycmF5dG9zcGluLnNsaWNlKC0xKVswXSk7XHJcblxyXG5cdFx0XHQkcGx1c1ZlcnRpY2FsLnJlbW92ZUNsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHJcblx0XHRcdGlmIChtYXhpbXVtVG9TcGluIC0gMSA9PT0gY3VycmVudFBvc2l0aW9uKSB7XHJcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgMTtcclxuXHRcdFx0XHQkaW5wdXQudmFsKGFycmF5dG9zcGluW2N1cnJlbnRQb3NpdGlvbl0pO1xyXG5cclxuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSAkaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0aWYgKHRyaWdnZXJPbklucHV0KSAkaW5wdXQudHJpZ2dlcignaW5wdXQnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChtYXhpbXVtVG9TcGluID09PSBjdXJyZW50UG9zaXRpb24pIHtcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gJSBtYXhpbXVtVG9TcGluO1xyXG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bY3VycmVudFBvc2l0aW9uXSk7XHJcblxyXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPSAoY3VycmVudFBvc2l0aW9uICsgMSkgJSBtYXhpbXVtVG9TcGluO1xyXG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bY3VycmVudFBvc2l0aW9uXSk7XHJcblxyXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gbWF4aW11bVRvU3BpbikgJHBsdXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XHJcblx0XHRcdGlmIChjdXJyZW50UG9zaXRpb24gPT09IDApICRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHJcblx0XHRcdCRzcGlubmVyLmZpbmQoJy5TcGlubmVyRXJyb3JNZXNzYWdlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkgPCBtaW5WYWx1ZSkge1xyXG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5yZW1vdmVDbGFzcygnRGlzYWJsZWRTcGluJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghZm9yY2VJbnRlZ2VyICYmIGlzRGVjaW1hbHMpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSB1bmRlZmluZWQgfHwgY3VycmVudFZhbHVlID09PSAnJyB8fCBpc05hTihwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkpKSB7XHJcblx0XHRcdFx0JGlucHV0LnZhbChtaW5WYWx1ZSk7XHJcblxyXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpIDwgbWF4VmFsdWUpIHtcclxuXHRcdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT09IDAgJiYgIWZvcmNlSW50ZWdlcikgaW5jcmVtZW50VW5pdCA9IHBhcnNlRmxvYXQoMC4xKTtcclxuXHJcblx0XHRcdFx0XHQkaW5wdXQudmFsKHBhcnNlRmxvYXQoKGN1cnJlbnRWYWx1ZSArIGluY3JlbWVudFVuaXQpLnRvRml4ZWQoMSkpKTtcclxuXHJcblx0XHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XHJcblxyXG5cdFx0XHRcdFx0JG1pbnVzVmVydGljYWwucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHBsdXNWZXJ0aWNhbC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2hlY2tEaXNhYmxlZFN0YXR1cyhlbGVtZW50SWQsIHBhcnNlRmxvYXQoJGlucHV0LnZhbCgpKSwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWNyZW1lbnQgPSAoZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQsIGxpc3RUb3NwaW4gPSBbXSkgPT4ge1xyXG5cdFx0Y29uc3QgJHNwaW5uZXIgPSAkKGVsZW1lbnRJZCk7XHJcblx0XHRjb25zdCAkaW5wdXQgPSAkc3Bpbm5lci5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXScpLmZpcnN0KCk7XHJcblxyXG5cdFx0bGV0IGZvcmNlSW50ZWdlciA9ICQoZWxlbWVudElkKS5kYXRhKCdmb3JjZWludGVnZXInKSA9PT0gJ1RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0bGV0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQoJGlucHV0LnZhbCgpKTtcclxuXHRcdGxldCBpbmNyZW1lbnRVbml0ID0gMTtcclxuXHRcdGxldCBpc0RlY2ltYWxzID0gY3VycmVudFZhbHVlICUgMSAhPSAwO1xyXG5cdFx0bGV0IGFycmF5dG9zcGluID0gbGlzdFRvc3BpbjtcclxuXHJcblx0XHRjb25zdCAkbWludXNWZXJ0aWNhbCA9ICQoZWxlbWVudElkKS5maW5kKCcuTWludXNWZXJ0aWNhbCcpO1xyXG5cdFx0Y29uc3QgJHBsdXNWZXJ0aWNhbCA9ICQoZWxlbWVudElkKS5maW5kKCcuUGx1c1ZlcnRpY2FsJyk7XHJcblxyXG5cdFx0aWYgKGFycmF5dG9zcGluLmxlbmd0aCkge1xyXG5cdFx0XHRsZXQgY3VycmVudFBvc2l0aW9uID0gYXJyYXl0b3NwaW4uaW5kZXhPZihwYXJzZUludCgkaW5wdXQudmFsKCkpKTtcclxuXHRcdFx0bGV0IG1heGltdW1Ub1NwaW4gPSBhcnJheXRvc3Bpbi5sYXN0SW5kZXhPZihhcnJheXRvc3Bpbi5zbGljZSgtMSlbMF0pO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQb3NpdGlvbiA9PSAwKSB7XHJcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpblttYXhpbXVtVG9TcGluXSk7XHJcblxyXG5cdFx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpICRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRpZiAodHJpZ2dlck9uSW5wdXQpICRpbnB1dC50cmlnZ2VyKCdpbnB1dCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA9IChjdXJyZW50UG9zaXRpb24gLSAxKSAlIG1heGltdW1Ub1NwaW47XHJcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpbltjdXJyZW50UG9zaXRpb25dKTtcclxuXHJcblx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkc3Bpbm5lci5maW5kKCcuU3Bpbm5lckVycm9yTWVzc2FnZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoIWZvcmNlSW50ZWdlciAmJiBpc0RlY2ltYWxzKSBpbmNyZW1lbnRVbml0ID0gcGFyc2VGbG9hdCgwLjEpO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRWYWx1ZSA9PT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpKSkge1xyXG5cdFx0XHRcdCRpbnB1dC52YWwobWluVmFsdWUpO1xyXG5cclxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSA+IG1pblZhbHVlKSB7XHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSAxICYmICFmb3JjZUludGVnZXIpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XHJcblxyXG5cdFx0XHRcdFx0JGlucHV0LnZhbChwYXJzZUZsb2F0KChjdXJyZW50VmFsdWUgLSBpbmNyZW1lbnRVbml0KS50b0ZpeGVkKDEpKSk7XHJcblxyXG5cdFx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xyXG5cclxuXHRcdFx0XHRcdCRwbHVzVmVydGljYWwucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JG1pbnVzVmVydGljYWwuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNoZWNrRGlzYWJsZWRTdGF0dXMoZWxlbWVudElkLCBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSksIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdHJpZ2dlckV2ZW50cyA9IChpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCkgPT4ge1xyXG5cdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkgaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRpZiAodHJpZ2dlck9uSW5wdXQpIGlucHV0LnRyaWdnZXIoJ2lucHV0Jyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hlY2tEaXNhYmxlZFN0YXR1cyA9IChlbGVtZW50SWQsIHZhbHVlVG9DaGVjaywgbWluVmFsdWUsIG1heFZhbHVlKSA9PiB7XHJcblx0XHRpZiAodmFsdWVUb0NoZWNrIDw9IG1pblZhbHVlKSB7XHJcblx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdC5maW5kKCdhLk1pbnVzVmVydGljYWwnKVxyXG5cdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JChlbGVtZW50SWQpXHJcblx0XHRcdFx0LmZpbmQoJ2EuTWludXNWZXJ0aWNhbCcpXHJcblx0XHRcdFx0LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblx0XHR9XHJcblx0XHRpZiAodmFsdWVUb0NoZWNrID49IG1heFZhbHVlKSB7XHJcblx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdC5maW5kKCdhLlBsdXNWZXJ0aWNhbCcpXHJcblx0XHRcdFx0LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKGVsZW1lbnRJZClcclxuXHRcdFx0XHQuZmluZCgnYS5QbHVzVmVydGljYWwnKVxyXG5cdFx0XHRcdC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TcGlubmVyVmVydGljYWwgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRpbmNyZW1lbnQsXHJcblx0XHRkZWNyZW1lbnQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgU3BsaXRCdXR0b24gKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IFNwbGl0QnV0dG9uKGNvbmZpZyk7XHJcblx0fTtcclxuXHJcblx0dmFyIFNwbGl0QnV0dG9uID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIHRoaXMuY29uZmlnLndpZGdldElkKTtcclxuXHRcdHRoaXMuJGJ1dHRvbiA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYnV0dG9uJyk7XHJcblx0XHR0aGlzLiRidXR0b25MaW5rID0gdGhpcy4kYnV0dG9uLmZpbmQoJz4gYScpO1xyXG5cdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tdHJpZ2dlcicpO1xyXG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYWN0aW9ucycpO1xyXG5cdFx0aWYgKCEhdGhpcy4kYWN0aW9ucy50ZXh0KCkpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJz4gLlNwbGl0QnV0dG9uJykuYWRkQ2xhc3MoJ2hhc1RyaWdnZXInKTtcclxuXHRcdFx0dGhpcy5idWlsZEFjdGlvbnNUcmlnZ2VyKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U3BsaXRCdXR0b24ucHJvdG90eXBlLmJ1aWxkQWN0aW9uc1RyaWdnZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR2YXIgY2xhc3NMaXN0ID0gdGhpcy4kYnV0dG9uTGlua1swXS5jbGFzc0xpc3QudmFsdWU7XHJcblx0XHR0aGlzLiR0cmlnZ2VyLmFkZENsYXNzKGNsYXNzTGlzdCk7XHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBpbnNpZGUgYSBkb2N1bWVudCByZWFkeSBkdWUgdG8gc2FwcGhpcmUgcG9wdXAgYmluZGVkIGV2ZW50c1xyXG5cdFx0XHRpZiAoIV90aGlzLiR0cmlnZ2VyLmhhc0NsYXNzKCd0b29sdGlwc3RlcmVkJykpIHtcclxuXHRcdFx0XHRfdGhpcy4kdHJpZ2dlci50b29sdGlwc3Rlcih7XHJcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICQoJzxzZWN0aW9uLz4nKS5hcHBlbmQoX3RoaXMuJGFjdGlvbnMuY2xvbmUodHJ1ZSkpLFxyXG5cdFx0XHRcdFx0dHJpZ2dlcjogX3RoaXMuY29uZmlnLnRyaWdnZXJFdmVudCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBfdGhpcy5jb25maWcucG9zaXRpb24sXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogX3RoaXMuY29uZmlnLm1heFdpZHRoLFxyXG5cdFx0XHRcdFx0dGhlbWU6ICd0b29sdGlwc3Rlci1zcGxpdGJ1dHRvbiBQYWRkaW5nLScgKyBfdGhpcy5jb25maWcucGFkZGluZyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRfdGhpcy4kYWN0aW9ucy5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlNwbGl0QnV0dG9uID0ge1xyXG5cdFx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCJ2YXIgbWlsaXNlY29uZHBhc3NlZCA9IDA7XHJcbnZhciBzdG9wdGltZXIgPSB0cnVlO1xyXG52YXIgbXlUaW1vdXQgID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIG9uS2V5ZG93bkZ1bmN0aW9uKCkge1xyXG4gICAgbWlsaXNlY29uZHBhc3NlZCA9IDA7XHJcbiAgXHJcbiAgICBzdG9wdGltZXI9dHJ1ZTtcclxuICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgbXlUaW1vdXQgPSBudWxsO1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gb25LZXlVcEZ1bmN0aW9uKGVsZW1lbnRUb0NsaWNrKSB7XHJcbiAgc3RvcHRpbWVyID0gZmFsc2U7XHJcbiAgXHJcbiAgaWYobWlsaXNlY29uZHBhc3NlZCA9PSAwICYmIG15VGltb3V0PT1udWxsKXtcclxuICAgICAgbXlUaW1vdXQgPSBzZXRJbnRlcnZhbChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIG1pbGlzZWNvbmRwYXNzZWQrPTEwMDtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBpZiAobWlsaXNlY29uZHBhc3NlZCA+PSA0MDAgJiYgc3RvcHRpbWVyPT1mYWxzZSkge1xyXG4gICAgICAgICAgICBtaWxpc2Vjb25kcGFzc2VkID0gMDtcclxuICAgICAgICAgICAgc3RvcHRpbWVyPXRydWU7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0NsaWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBpZihzdG9wdGltZXI9PXRydWUpe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15VGltb3V0KTtcclxuICAgICAgICAgICAgbXlUaW1vdXQgPSBudWxsO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufTtcclxuXHJcbmlmKHR5cGVvZihzc2RDb21wb25lbnQpID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgIHNzZENvbXBvbmVudCA9IHtcclxuICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgbnVtYmVyT2ZBY3RpdmU6IDAsXHJcbiAgICAgICAgaXNSVEw6IGZhbHNlLFxyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICB0b0Rlc3Ryb3k6IGZhbHNlLFxyXG4gICAgICAgIG9uQmx1ckRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc3NkQ29tcG9uZW50LmlkICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9ICQoJyMnICsgc3NkQ29tcG9uZW50LmlkKTtcclxuICAgICAgICAgICAgICAgIHZhciBfd3JhcHBlciA9ICQoJ1tkYXRhLXNzZC1wbGFjZWhvbGRlcj0nICsgc3NkQ29tcG9uZW50LmlkICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGlmIChzc2RDb21wb25lbnQudG9EZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3dyYXBwZXIuZmluZCgnLlNTRExpc3RSZWZyZXNoSGFuZGxlcicpLmZpbmQoJ2EudG8tZGVzdHJveScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3dyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnW2RhdGEtc3NkLXBsYWNlaG9sZGVyPScgKyBzc2RDb21wb25lbnQuaWQgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50V2lkZ2V0KSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50V2lkZ2V0ID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmNoaWxkcmVuKCdkaXYuU1NELVdyYXBwZXI6bm90KC5TZWxlY3RlZCknKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjsgLy9JZiB0aGlzIFNTRC1XcmFwcGVyIGlzIGFscmVhZHkgU2VsZWN0ZWQsIHJldHVybi5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5ibHVyKCk7IC8vQmx1cnMgdGhlIG90aGVyIGZvY3VzZWQgU1NEJ3MuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUrKztcclxuICAgICAgICAgICAgaWYoIV9zc2RDb21wb25lbnRXaWRnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ1NTRFBvcHVwJykpe1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5pc1JUTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHdpbmRvdykud2lkdGgoKSAtICQodGhpcykub3V0ZXJXaWR0aCgpIC0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5TU0QtQmFyJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5TU0QtTGlzdCcpLmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCcuU1NELUJhcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuU1NELUxpc3QnKS5hdHRyKCdjdXJyZW50LWZvY3VzJywgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdTU0RQb3B1cCcpKXtcclxuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnRXaWRnZXQuY2xvc2VzdCgnZm9ybScpLmFwcGVuZChfc3NkQ29tcG9uZW50V2lkZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50V2lkZ2V0LmFkZENsYXNzKCdQb3NpdGlvbmVkJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICwgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJsdXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZighc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlBvc2l0aW9uZWQuU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF93cmFwcGVyLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtc3NkLXBsYWNlaG9sZGVyJykpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZCgkKHRoaXMpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfd3JhcHBlci5yZW1vdmVDbGFzcygnUG9zaXRpb25lZCcpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogJydcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ1NlYXJjaGluZyBGaXhlZCBLZXlib2FyZE5hdicpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1CYXInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5TU0QtQmFyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYnNDbGVhcih0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICwgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZS0tO1xyXG4gICAgICAgICAgICAkKFwiLlNTRF9MaXN0UmVjb3JkcyBzcGFuLCAuU1NEX0xpc3RMaW5lLlNob3dNb3JlLCAuU1NEX0RlbGV0ZU9uQmx1clwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCFzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vSWYgdGhlcmUncyBubyBTU0QgYWN0aXZlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcmVzaXplIGl0LlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIF9zc2RXcmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnRXaWRnZXQgPSAkKCcjJyArIF9zc2RXcmFwcGVyLmF0dHIoJ2RhdGEtc3NkLXBsYWNlaG9sZGVyJykpWzBdO1xyXG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9IF9zc2RXcmFwcGVyLmNoaWxkcmVuKCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChfc3NkQ29tcG9uZW50V2lkZ2V0KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0vKixcclxuICAgICAgICAgICAgICAgICAgICAndG9wJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3NkQ29tcG9uZW50LmlzUlRMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdyaWdodCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh3aW5kb3cpLndpZHRoKCkgLSAkKF9zc2RDb21wb25lbnRXaWRnZXQpLm91dGVyV2lkdGgoKSAtIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgIH0pLmNoaWxkcmVuKCcuU1NELUJhcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmNsb3Nlc3QoJy5TU0QtQ29tcG9uZW50JykuaW5uZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YWJTZWxlY3Q6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCwgc3NkQmFyLCBzZWxlY3RlZFRhYiwgaXNJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfc2VsZWN0ZWRUYWIgPSAkKHNlbGVjdGVkVGFiKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuZm9jdXMoc3NkQ29tcG9uZW50V2lkZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIV9zZWxlY3RlZFRhYi5pcygnLlNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC50YWJzQ2xlYXIoc3NkQmFyKTtcclxuICAgICAgICAgICAgICAgIF9zZWxlY3RlZFRhYi5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzU2VsZWN0ZWRUYWIoc3NkQmFyLGlzSW5wdXRFdmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1c1NlbGVjdGVkVGFiOiBmdW5jdGlvbihzc2RCYXIsaXNJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFNlbGVjdGVkIHRhYiBpcyB0aGUgU2VhcmNoIGlucHV0P1xyXG4gICAgICAgICAgICBpZihzc2RCYXIuY2hpbGRyZW4oJy5TZWFyY2hJbnB1dC1Db250YWluZXIuU2VsZWN0ZWQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50VG9DbGljayA9IHNzZEJhci5zaWJsaW5ncygnLlNTRExpc3RSZWZyZXNoSGFuZGxlcicpLmZpbmQoJ2E6bm90KC50by1kZXN0cm95KScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpc0lucHV0RXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXBGdW5jdGlvbihlbGVtZW50VG9DbGljayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb0NsaWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLklucHV0UGxhY2Vob2xkZXIgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KDpmb2N1cyknKS5maXJzdCgpLnNlbGVjdCgpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNlbGVjdGVkIHRhYiBpcyB0aGUgU2hvcnQgbGlzdD9cclxuICAgICAgICAgICAgaWYoc3NkQmFyLmNoaWxkcmVuKCcuU2hvcnRMaXN0U2VsZWN0b3ItQ29udGFpbmVyLlNlbGVjdGVkJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLlNob3J0TGlzdFNlbGVjdG9yLUNvbnRhaW5lciA+IGEnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIE1ldGhvZCBiZWluZyBjYWxsZWQgYnkgdXNlciBhY3Rpb24ganNfc3NkQ29tcG9uZW50X2ZvY3VzQ3VycmVudFJvd1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZvY3VzQ3VycmVudFJvdzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RMaXN0ID0gX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUxpc3QnKTtcclxuICAgICAgICAgICAgdmFyIF9jdXJyZW50Rm9jdXMgPSBfc3NkTGlzdC5hdHRyKCdjdXJyZW50LWZvY3VzJyk7XHJcblxyXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpO1xyXG4gICAgICAgICAgICBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bnRoLWNoaWxkKCcgKyBfY3VycmVudEZvY3VzICsgJyknKS5hZGRDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYnNDbGVhcjogZnVuY3Rpb24oc3NkQmFyKSB7XHJcbiAgICAgICAgICAgICQoc3NkQmFyKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoSWNvbjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYlNlbGVjdChldmVudC5kYXRhLnNzZENvbXBvbmVudFdpZGdldCwgZXZlbnQuZGF0YS5zc2RCYXIsICQoZXZlbnQuZGF0YS5zc2RCYXIpLmNoaWxkcmVuKCcuU2VhcmNoSW5wdXQtQ29udGFpbmVyJyksZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBAbmFtZSBpbnB1dEV2ZW50XHJcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlucHV0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfaW5wdXRDb250YWluZXIgPSAkKGV2ZW50LmRhdGEuaW5wdXQpLmNsb3Nlc3QoJy5TZWFyY2hJbnB1dC1Db250YWluZXInKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC50YWJTZWxlY3QoZXZlbnQuZGF0YS5zc2RDb21wb25lbnRXaWRnZXQsIGV2ZW50LmRhdGEuc3NkQmFyLCBfaW5wdXRDb250YWluZXIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigkKGV2ZW50LmRhdGEuaW5wdXQpLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBfaW5wdXRDb250YWluZXIuY2xvc2VzdCgnLlNTRC1Db21wb25lbnQnKS5yZW1vdmVDbGFzcygnU2VhcmNoaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfaW5wdXRDb250YWluZXIuY2xvc2VzdCgnLlNTRC1Db21wb25lbnQnKS5hZGRDbGFzcygnU2VhcmNoaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleWRvd25FdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICBvbktleWRvd25GdW5jdGlvbigpOyAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5Ym9hcmRIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJTaGlmdFwiIHx8IGV2ZW50LmtleSA9PSBcIkNvbnRyb2xcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RMaXN0ID0gX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUxpc3QnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkVudGVyXCIgJiYgX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIlRhYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd1VwXCIgfHwgZXZlbnQua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuYXR0cignY3VycmVudC1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9zZWxlY3RlZEVsZW1lbnQgPSAkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoX2N1cnJlbnRGb2N1cyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOm50aC1jaGlsZCgnICsgX2N1cnJlbnRGb2N1cyArICcpJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQuYWRkQ2xhc3MoJ0tleWJvYXJkTmF2JylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoX3NlbGVjdGVkRWxlbWVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQuaXMoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudC5yZW1vdmVDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJykucHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfc2VsZWN0ZWRFbGVtZW50LmlzKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gJChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc2VsZWN0ZWRFbGVtZW50LnJlbW92ZUNsYXNzKCdmb2N1cycpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoICYmIF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOmZpcnN0LWNoaWxkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudC5hZGRDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzU2VsZWN0ZWRUYWIoX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUJhcicpLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFfc2VsZWN0ZWRFbGVtZW50LmZpbmQoJy5TU0RfTGlzdExpbmUuRGlzYWJsZWQnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQuZmluZCgnLkV4cGFuZENvbnRyb2wgPiBhJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RMaXN0LmZpbmQoJ2EuT3RoZXJDb250cm9sTGluaycpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCBfY3VycmVudEZvY3VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5jbGVhcktleWJvYXJkTmF2U3RhdHVzKF9zc2RDb21wb25lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJLZXlib2FyZE5hdlN0YXR1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJChzc2RDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB2YXIgX3NzZExpc3QgPSBfc3NkQ29tcG9uZW50LmZpbmQoJy5TU0QtTGlzdCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0tleWJvYXJkTmF2Jyk7XHJcbiAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCAwKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ3NwYW4uU1NEX0xpc3RSZWNvcmRzID4gc3Bhbi5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLkV4cGFuZENvbnRyb2wgPiBhJykuYmx1cigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYoTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSA8PSAxMDI0KXtcclxuICAgICAgICAgICAgICAgIGlmKF9zc2RDb21wb25lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gJChcIi50b29sYmFyLXdyYXBwZXIuRml4ZWRcIikub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLlNTRC1XcmFwcGVyLlNlbGVjdGVkID4gLlNTRC1Db21wb25lbnQuRml4ZWQgPiAuU1NELUJhcicpLmNzcygndG9wJywgJChcIi50b29sYmFyLXdyYXBwZXIuRml4ZWRcIikub3V0ZXJIZWlnaHQoKSArICdweCcpOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvKk5vdCBNb2JpbGUgYXBwbHkgZml4ZWQgYmVoYXZpb3VyKi9cclxuICAgICAgICAgICAgICAgIGlmKF9zc2RDb21wb25lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gKCQoJy5Ub3BQYXRpZW50SGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKCcuSGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKFwiLnRvb2xiYXItd3JhcHBlclwiKS5vdXRlckhlaWdodCgpKyAkKCcuQ1RUQVNMZXZlbEFzc2Vzc21lbnRNYWluQ29udGFpbmVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLlNTRC1XcmFwcGVyLlNlbGVjdGVkID4gLlNTRC1Db21wb25lbnQuRml4ZWQgPiAuU1NELUJhcicpLmNzcygndG9wJywoJCgnLlRvcFBhdGllbnRIZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoJy5IZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoXCIudG9vbGJhci13cmFwcGVyXCIpLm91dGVySGVpZ2h0KCkgKyAkKCcuQ1RUQVNMZXZlbEFzc2Vzc21lbnRNYWluQ29udGFpbmVyJykub3V0ZXJIZWlnaHQodHJ1ZSkpICsgJ3B4Jyk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgX3NzZENvbXBvbmVudC5hZGRDbGFzcygnRml4ZWQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKF9pbnB1dElkKSB7IC8qIFVzZWQgdG8gZGVzdHJveSBhIHNwZWNpZmljIHNzZCBjb21wb25lbnQgYnkgcmVjZWl2ZSB0aGUgaW5wdXQgaWRlbnRpZmllciBhcyBwYXJhbWV0ZXIgYW5kIGRldGVybWluZSB0aGUgd3JhcHBlciB0byByZW1vdmUuICovXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXNzZC1wbGFjZWhvbGRlcj0nICsgc3NkQ29tcG9uZW50LmlkICsgJ10nKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCxfdG9EZXN0cm95KSB7XHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5sZW5ndGgrKztcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlID0gMDtcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlzUlRMID0gJCgnaHRtbCcpLmlzKCcucnRsJyk7XHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC50b0Rlc3Ryb3kgPSBfdG9EZXN0cm95O1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNzZENvbXBvbmVudFdpZGdldCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlkID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnRXaWRnZXQgPSAkKHNzZENvbXBvbmVudFdpZGdldCk7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gX3NzZENvbXBvbmVudFdpZGdldC5maW5kKCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgICAgICB2YXIgX3NzZEJhciA9IF9zc2RDb21wb25lbnQuY2hpbGRyZW4oJy5TU0QtQmFyJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zZWFyY2hJY29uID0gX3NzZEJhci5maW5kKCcuU2VhcmNoSWNvbicpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIHZhciBfaW5wdXQgPSBfc3NkQmFyLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9jbGVhckNvbnRyb2wgPSBfc3NkQmFyLmZpbmQoJy5DbGVhckNvbnRyb2wnKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX3NlYXJjaEljb24ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcclxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhclxyXG4gICAgICAgICAgICB9LCBzc2RDb21wb25lbnQuc2VhcmNoSWNvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfc3NkQmFyLmNoaWxkcmVuKCdkaXYnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50V2lkZ2V0OiBfc3NkQ29tcG9uZW50V2lkZ2V0LFxyXG4gICAgICAgICAgICAgICAgc3NkQmFyOiBfc3NkQmFyXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQudGFiU2VsZWN0KGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50V2lkZ2V0LCBldmVudC5kYXRhLnNzZEJhciwgdGhpcyxmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX2NsZWFyQ29udHJvbC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3kpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX2lucHV0Lm9mZigna2V5dXAnKS5vbigna2V5dXAnLCB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnRXaWRnZXQ6IF9zc2RDb21wb25lbnRXaWRnZXQsXHJcbiAgICAgICAgICAgICAgICBzc2RCYXI6IF9zc2RCYXIsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogX2lucHV0XHJcbiAgICAgICAgICAgIH0sIHNzZENvbXBvbmVudC5pbnB1dEV2ZW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF9pbnB1dC5vZmYoJ2tleWRvd24nKS5vbigna2V5ZG93bicsIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcclxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhcixcclxuICAgICAgICAgICAgICAgIGlucHV0OiBfaW5wdXRcclxuICAgICAgICAgICAgfSwgc3NkQ29tcG9uZW50LmtleWRvd25FdmVudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKF9zc2RDb21wb25lbnQpLm9mZignY2xpY2snKS5vbignY2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQ6IF9zc2RDb21wb25lbnRcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5jbGVhcktleWJvYXJkTmF2U3RhdHVzKGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBzc2RDb21wb25lbnQucmVzaXplKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZighJChldmVudC50YXJnZXQpLmlzKCc6dmlzaWJsZScpKSB7IC8qIENsaWNrcyBvbiBoaWRkZW4gZWxlbWVudHMgYXJlIGRpc21pc3NlZC4gKi9cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgZSA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFlLmxlbmd0aCkgeyAvLyBVc2VyIGNsaWNrZWQgb3V0c2lkZSB0aGUgU1NELUNvbXBvbmVudD9cclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBcIjI3XCIpIHsgLy8gVXNlciBoaXQgRXNjYXBlXHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQub25CbHVyRGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkFycm93VXBcIiB8fCBldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHsgLy8gSWYgdGhlcmUncyBhbiBTU0QgY29tcG9uZW50IGFjdGl2ZSwgZ28gZm9yIEtleWJvYXJkIGhhbmRsZXJcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmtleWJvYXJkSGFuZGxlcihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUgPiAwKSB7IC8vIElmIHRoZXJlJ3MgYW4gU1NEIGNvbXBvbmVudCBhY3RpdmUsIGdvIGZvciBzY3JvbGwgaGFuZGxlclxyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQuc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IFNTRExpc3RMaW5lICovXHJcblNhcHBoaXJlV2lkZ2V0cy5TU0RMaXN0TGluZSA9IHtcclxuXHR0b2dnbGU6IChsaW5lSWQsIGxpbmVIYW5kbGVyID0gJycpID0+IHtcclxuXHRcdHZhciBfbGluZSA9ICQobGluZUlkKS5pcygnLlNTRF9MaXN0TGluZScpXHJcblx0XHRcdD8gJChsaW5lSWQpXHJcblx0XHRcdDogJChsaW5lSWQpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5TU0RfTGlzdExpbmUnKVxyXG5cdFx0XHRcdFx0LmZpcnN0KCk7XHJcblxyXG5cdFx0aWYgKCFfbGluZS5sZW5ndGgpIHJldHVybjtcclxuXHJcblx0XHR2YXIgX2V4cGFuZENvbnRyb2wgPSAkKCcuZXhwYW5kLWNvbnRyb2wtY3VzdG9tLXdpZHRoJyk7XHJcblxyXG5cdFx0aWYgKF9leHBhbmRDb250cm9sLmxlbmd0aCAhPSAwKSB7XHJcblx0XHRcdF9leHBhbmRDb250cm9sLnJlbW92ZUNsYXNzKCdleHBhbmQtY29udHJvbC1jdXN0b20td2lkdGgnKTtcclxuXHRcdFx0X2V4cGFuZENvbnRyb2wuY3NzKCd3aWR0aCcsICcnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIV9saW5lLmlzKCcuQWN0aXZlJykpIHtcclxuXHRcdFx0dmFyIF9saW5lSGVhZGVyID0gX2xpbmVcclxuXHRcdFx0XHQuY2xvc2VzdCgnZGl2LlNlbGVjdGFibGVMaXN0LCAuU2VsZWN0YWJsZUxpc3QtTGlzdFJlY29yZHMnKVxyXG5cdFx0XHRcdC5maW5kKCdkaXYuU2VsZWN0YWJsZUxpc3QtTGluZS5BY3RpdmUnKVxyXG5cdFx0XHRcdC5ub3QoX2xpbmUpO1xyXG5cclxuXHRcdFx0X2xpbmVIZWFkZXIuZmluZCgnYVtoaWRlLWFjdGlvbl0nKS5jbGljaygpO1xyXG5cdFx0XHRfbGluZUhlYWRlclxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnQWN0aXZlJylcclxuXHRcdFx0XHQuY2hpbGRyZW4oJ3NwYW4nKVxyXG5cdFx0XHRcdC5oaWRlKDIwMCk7XHJcblx0XHRcdF9saW5lLmFkZENsYXNzKCdBY3RpdmUnKTtcclxuXHJcblx0XHRcdGlmICgkKGxpbmVIYW5kbGVyKS5sZW5ndGgpIHtcclxuXHRcdFx0XHQkKGxpbmVIYW5kbGVyKS5jbGljaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRfbGluZS5yZW1vdmVDbGFzcygnQWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IFRhYmxlRm9ybSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBhZGRFbXB0eUxpbmUgPSBjb25maWcgPT4ge1xyXG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdFx0JGxpc3QuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiVGFibGVGb3JtQ29sdW1uX19FbXB0eUl0ZW1cIj48L2Rpdj4nKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW1vdmVFbXB0eUxpbmUgPSBjb25maWcgPT4ge1xyXG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdFx0JGxpc3QuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0LmZpbmQoJz4gLlRhYmxlRm9ybUNvbHVtbl9fRW1wdHlJdGVtOmZpcnN0JylcclxuXHRcdFx0XHQucmVtb3ZlKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNvbXBvbmVudFJlbG9hZCA9IHdpZGdldElkID0+IHtcclxuXHRcdGNvbnN0ICR0YWJsZSA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cdFx0Y29uc3QgJGVkaXRpbmcgPSAkdGFibGUuZmluZCgnLlRhYmxlRm9ybUNvbHVtbi0tZWRpdE1vZGUnKTtcclxuXHJcblx0XHRpZiAoJGVkaXRpbmcubGVuZ3RoKSB7XHJcblx0XHRcdCR0YWJsZS5hZGRDbGFzcygnVGFibGVGb3JtLS1zY3JvbGxEaXNhYmxlZCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHRhYmxlLnJlbW92ZUNsYXNzKCdUYWJsZUZvcm0tLXNjcm9sbERpc2FibGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlRhYmxlRm9ybSA9IHsgYWRkRW1wdHlMaW5lLCBvbkNvbXBvbmVudFJlbG9hZCwgcmVtb3ZlRW1wdHlMaW5lIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgVGFic0V4dGVuZGVkICovXHJcblNhcHBoaXJlV2lkZ2V0cy5UYWJzRXh0ZW5kZWQgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0ICRjb21wb25lbnQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IC5UYWJzX0V4dGVuZGVkYCk7XHJcblx0XHRjb25zdCAkdGFiSGVhZGVyID0gJGNvbXBvbmVudC5maW5kKCcuVGFic19oZWFkZXInKTtcclxuXHRcdGNvbnN0ICR0YWJDb250YWluZXIgPSAkY29tcG9uZW50LmZpbmQoJy5UYWJzQ29udGFpbmVyJyk7XHJcblx0XHRjb25zdCAkdGFicyA9ICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiJyk7XHJcblx0XHRjb25zdCAkdGFic0VuYWJsZWQgPSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYjpub3QoLmRpc2FibGVkKScpO1xyXG5cdFx0Y29uc3QgJHRhYnNJbnB1dCA9ICRjb21wb25lbnQuZmluZCgnLlRhYnNfSW5wdXQgaW5wdXQnKTtcclxuXHRcdHZhciAkY2FsY3VsYXRlZFRhYnM7XHJcblxyXG5cdFx0aWYoY29uZmlnLnVzZUxhc3RUYWJBc0FjdGlvbnMpIHtcclxuXHRcdFx0JGNhbGN1bGF0ZWRUYWJzID0gJHRhYnMuc2xpY2UoMCwtMSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkY2FsY3VsYXRlZFRhYnMgPSAkdGFicztcclxuXHRcdH1cclxuXHRcdCRjYWxjdWxhdGVkVGFicy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS50ZXh0KCkgPT09ICcnKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHRhYnNFbmFibGVkLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkdGFiQ29udGFpbmVyLmF0dHIoJ2FjdGl2ZXRhYicsICQodGhpcykuYXR0cigndmFsdWUnKSk7XHJcblxyXG5cdFx0XHQkdGFic0lucHV0LnZhbCgkKHRoaXMpLmF0dHIoJ3ZhbHVlJykpO1xyXG5cdFx0XHQkdGFic0lucHV0LmNoYW5nZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHRhYnNFbmFibGVkLm9mZignbW91c2Vkb3duJykub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHR2YXIgJHRhYnNFeHRlbmRlZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLlRhYnNfRXh0ZW5kZWQnKTtcclxuXHRcdFx0JHRhYnNFeHRlbmRlZC5yZW1vdmVDbGFzcygnaXNDbG9zZWQnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJy5UYWJzX0V4dGVuZGVkLkhpZGVBY3RpdmVPbkNsaWNrIC5UYWJzX2hlYWRlcicpXHJcblx0XHRcdC5vZmYoJ21vdXNlZG93bicpXHJcblx0XHRcdC5vbignbW91c2Vkb3duJywgJy5UYWJzX190YWIuYWN0aXZlJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0dmFyICR0YWJzRXh0ZW5kZWQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5UYWJzX0V4dGVuZGVkJyk7XHJcblx0XHRcdFx0dmFyICR0YWJzQm9keSA9ICR0YWJzRXh0ZW5kZWQuZmluZCgnLlRhYnNfYm9keScpO1xyXG5cclxuXHRcdFx0XHRpZiAoJHRhYnNCb2R5Lmhhc0NsYXNzKCdUYWJzX2JvZHktLWNsb3NlZCcpKSB7XHJcblx0XHRcdFx0XHQkdGFic0JvZHkucmVtb3ZlQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XHJcblx0XHRcdFx0XHQkdGFic0V4dGVuZGVkLnJlbW92ZUNsYXNzKCdpc0Nsb3NlZCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGFic0JvZHkuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XHJcblx0XHRcdFx0XHQkdGFic0V4dGVuZGVkLmFkZENsYXNzKCdpc0Nsb3NlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0JHRhYkhlYWRlci5maW5kKCcuVGFic19FeHRlbmRlZC0tZGlzYWJsZWQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG5cdFx0XHQkKGVsKVxyXG5cdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdC5jc3MoJ2N1cnNvcicsICdkZWZhdWx0JylcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JGNvbXBvbmVudC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG5cdFx0XHRpZiAoJChlbCkuaGFzQ2xhc3MoJ1RhYnNfRXh0ZW5kZWQtLWNsb3NlZG9uc3RhcnQnKSkge1xyXG5cdFx0XHRcdCQoZWwpXHJcblx0XHRcdFx0XHQuZmluZCgnLlRhYnNfYm9keScpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XHJcblx0XHRcdFx0JChlbCkuYWRkQ2xhc3MoJ2lzQ2xvc2VkJyk7XHJcblx0XHRcdFx0JChlbCkucmVtb3ZlQ2xhc3MoJ1RhYnNfRXh0ZW5kZWQtLWNsb3NlZG9uc3RhcnQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JChlbClcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsICcuVGFic19FeHRlbmRlZC0tY2xvc2UnLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0XHRcdCQoZXZ0LnRhcmdldClcclxuXHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5UYWJzX2JvZHknKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoIWNvbmZpZy50YWIxRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9MV0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdGlmICghY29uZmlnLnRhYjJFbmFibGVkKSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYlt2YWx1ZT0yXScpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0aWYgKCFjb25maWcudGFiM0VuYWJsZWQpICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiW3ZhbHVlPTNdJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRpZiAoIWNvbmZpZy50YWI0RW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9NF0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdGlmICghY29uZmlnLnRhYjVFbmFibGVkKSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYlt2YWx1ZT01XScpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdH0pO1xyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgVGFidWxhckxpc3QgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBhbGxUYWJ1bGFyTGlzdHMgPSBbXTtcclxuXHJcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0d2luZG93W2NvbmZpZy50YWJ1bGFyTGlzdElkXSA9IG5ldyBUYWJ1bGFyTGlzdChjb25maWcpO1xyXG5cdFx0YWxsVGFidWxhckxpc3RzLnB1c2god2luZG93W2NvbmZpZy50YWJ1bGFyTGlzdElkXSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBhbGxUYWJ1bGFyTGlzdHMgPSBTYXBwaGlyZVdpZGdldHMuVGFidWxhckxpc3QuYWxsKCk7XHJcblx0XHRcdGFsbFRhYnVsYXJMaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGkpIHtcclxuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVRhYnVsYXJMaXN0Q29sdW1ucygpO1xyXG5cdFx0XHRcdGVsZW1lbnQuaGFuZGxlUmVzcG9uc2l2ZUNsYXNzZXMoMjAwKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS50YWJ1bGFybGlzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgYWxsVGFidWxhckxpc3RzID0gU2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJMaXN0LmFsbCgpO1xyXG5cdFx0XHRhbGxUYWJ1bGFyTGlzdHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5oYW5kbGVSZXNwb25zaXZlQ2xhc3NlcygyMDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHZhciBUYWJ1bGFyTGlzdCA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0dGhpcy50YWJ1bGFyTGlzdFJlc2l6ZVRpbWVyID0gMDtcclxuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLnRhYnVsYXJMaXN0SWQpO1xyXG5cdFx0dGhpcy4kd2lkZ2V0TGlzdCA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5UYWJ1bGFyTGlzdCcpO1xyXG5cdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdycpLmVhY2goZnVuY3Rpb24oaSwgcm93KSB7XHJcblx0XHRcdF90aGlzLmNvbHVtbnNDb3VudCA9IDA7XHJcblx0XHRcdCQocm93KVxyXG5cdFx0XHRcdC5maW5kKCcuVGFidWxhckxpc3RSb3ctdmFsdWVzIC5UYWJ1bGFyTGlzdFJvdy1pdGVtJylcclxuXHRcdFx0XHQuZWFjaChmdW5jdGlvbihpLCBlbCkge1xyXG5cdFx0XHRcdFx0JChlbCkuYWRkQ2xhc3MoJ1RhYnVsYXJMaXN0Q29sdW1uJyArIChpICsgMSkpO1xyXG5cdFx0XHRcdFx0X3RoaXMuY29sdW1uc0NvdW50Kys7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdGlmICghIWNvbmZpZy5icmVha09uKSB7XHJcblx0XHRcdHRoaXMuYnJlYWtPbk9yZGVyID0gcGFyc2VJbnQoY29uZmlnLmJyZWFrT24pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5icmVha09uT3JkZXIgPSAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5oYW5kbGVUYWJ1bGFyTGlzdENvbHVtbnMoKTtcclxuXHR9O1xyXG5cclxuXHRUYWJ1bGFyTGlzdC5wcm90b3R5cGUuaGFuZGxlVGFidWxhckxpc3RDb2x1bW5zID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodGhpcy5jb25maWcuY29sdW1uc1dpZHRoID09PSAnQXV0bycpIHtcclxuXHRcdFx0aWYgKHRoaXMuJHdpZGdldExpc3Qud2lkdGgoKSA+IDEpIHtcclxuXHRcdFx0XHRmb3IgKGkgPSAxOyBpIDw9IHRoaXMuY29sdW1uc0NvdW50OyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBtYXhXaWR0aENvbnRlbnQgPSBNYXRoLm1heC5hcHBseShcclxuXHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0dGhpcy4kd2lkZ2V0XHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5UYWJ1bGFyTGlzdENvbHVtbicgKyBpKVxyXG5cdFx0XHRcdFx0XHRcdC5tYXAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0LmdldCgpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdENvbHVtbicgKyBpKS53aWR0aChtYXhXaWR0aENvbnRlbnQpO1xyXG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdENvbHVtbicgKyBpKS5jc3MoJ29wYWNpdHknLCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICghIXRoaXMuY29uZmlnLnByb3BlcnR5TWluV2lkdGgpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1wcm9wZXJ0eScpLmNzcygnbWluLXdpZHRoJywgY29udmVydEluQ1NTVmFsdWUodGhpcy5jb25maWcucHJvcGVydHlNaW5XaWR0aCkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhdGhpcy5jb25maWcucHJvcGVydHlNYXhXaWR0aCkge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Um93LXByb3BlcnR5JykuY3NzKCdtYXgtd2lkdGgnLCBjb252ZXJ0SW5DU1NWYWx1ZSh0aGlzLmNvbmZpZy5wcm9wZXJ0eU1heFdpZHRoKSk7XHJcblx0XHR9XHJcblx0XHRpZiAoISF0aGlzLmNvbmZpZy5hY3Rpb25zTWluV2lkdGgpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1hY3Rpb25zJykuY3NzKCdtaW4td2lkdGgnLCBjb252ZXJ0SW5DU1NWYWx1ZSh0aGlzLmNvbmZpZy5hY3Rpb25zTWluV2lkdGgpKTtcclxuXHRcdH1cclxuXHRcdGlmICghIXRoaXMuY29uZmlnLmFjdGlvbnNNYXhXaWR0aCkge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Um93LWFjdGlvbnMnKS5jc3MoJ21heC13aWR0aCcsIGNvbnZlcnRJbkNTU1ZhbHVlKHRoaXMuY29uZmlnLmFjdGlvbnNNYXhXaWR0aCkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFRhYnVsYXJMaXN0LnByb3RvdHlwZS5oYW5kbGVSZXNwb25zaXZlQ2xhc3NlcyA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGFidWxhckxpc3RSZXNpemVUaW1lcik7XHJcblx0XHR0aGlzLnRhYnVsYXJMaXN0UmVzaXplVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0X3RoaXMuJHdpZGdldExpc3QucmVtb3ZlQ2xhc3MoZnVuY3Rpb24oaW5kZXgsIGNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdHJldHVybiAoY2xhc3NOYW1lLm1hdGNoKC8oXnxcXHMpc2NyZWVuLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5yZW1vdmVDbGFzcygnaXNCcmVha2luZycpO1xyXG5cclxuXHRcdFx0dmFyIHdpZGdldFdpZHRoID0gX3RoaXMuJHdpZGdldExpc3Qub3V0ZXJXaWR0aCh0cnVlKTtcclxuXHRcdFx0aWYgKHdpZGdldFdpZHRoID09PSAwKSB7XHJcblx0XHRcdFx0d2lkZ2V0V2lkdGggPSBfdGhpcy4kd2lkZ2V0TGlzdFxyXG5cdFx0XHRcdFx0LnBhcmVudHMoJzp2aXNpYmxlJylcclxuXHRcdFx0XHRcdC5lcSgwKVxyXG5cdFx0XHRcdFx0Lm91dGVyV2lkdGgodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh3aWRnZXRXaWR0aCA+PSAxOTAwKSB7XHJcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1EZXNrdG9wSEQnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDYpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDE2MDApIHtcclxuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3BCaWcnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDUpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDEzNjYpIHtcclxuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3AnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDQpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDEwMjQpIHtcclxuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3BTbWFsbCcpO1xyXG5cdFx0XHRcdGlmIChfdGhpcy5icmVha09uT3JkZXIgPj0gMykge1xyXG5cdFx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAod2lkZ2V0V2lkdGggPj0gNDIwKSB7XHJcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1UYWJsZXQnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDIpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdzY3JlZW4tUGhvbmUnKTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDEpIHtcclxuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LCB0aW1lb3V0KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuVGFidWxhckxpc3QgPSB7XHJcblx0XHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRcdGFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBhbGxUYWJ1bGFyTGlzdHM7XHJcblx0XHR9LFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRJbkNTU1ZhbHVlKHZhbHVlX2luKSB7XHJcblx0dmFyIHJldHVybmVkO1xyXG5cdGlmICh2YWx1ZV9pbi5pbmNsdWRlcygncHgnKSB8fCB2YWx1ZV9pbi5pbmNsdWRlcygnJScpKSB7XHJcblx0XHRyZXR1cm5lZCA9IHZhbHVlX2luO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm5lZCA9IHZhbHVlX2luICsgJ3B4JztcclxuXHR9XHJcblx0cmV0dXJuIHJldHVybmVkO1xyXG59XHJcbiIsIi8qIENvbXBvbmVudCBUYWJ1bGFyU2Nyb2xsICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuVGFidWxhclNjcm9sbCcpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcclxuXHRcdFx0XHRzZXR1cFRhYnVsYXJTY3JvbGwoJChlbCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmXHJcblx0XHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQoJy5UYWJ1bGFyU2Nyb2xsJykuZWFjaChmdW5jdGlvbihpLCBlbCkge1xyXG5cdFx0XHRcdFx0XHRzZXR1cFRhYnVsYXJTY3JvbGwoJChlbCkpO1xyXG5cdFx0XHRcdFx0XHRyZXNpemVSb3dzKCQoZWwpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUudGFidWxhcnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuVGFidWxhclNjcm9sbCcpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcclxuXHRcdFx0XHR2YXIgJGNlbnRlclRhYmxlID0gJChlbCkuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyLXRhYmxlJyk7XHJcblx0XHRcdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xyXG5cdFx0XHRcdCQoZWwpXHJcblx0XHRcdFx0XHQuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyIC5Ub3BTY3JvbGxEcmFnZ2VyJylcclxuXHRcdFx0XHRcdC53aWR0aCh0YWJsZVdpZHRoKTtcclxuXHRcdFx0XHRpZiAoJGNlbnRlclRhYmxlWzBdLnNjcm9sbFdpZHRoID4gJGNlbnRlclRhYmxlLndpZHRoKCkpIHtcclxuXHRcdFx0XHRcdCQoZWwpXHJcblx0XHRcdFx0XHRcdC5maW5kKCcuVG9wU2Nyb2xsV3JhcHBlcicpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKGVsKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXR1cFRhYnVsYXJTY3JvbGwgPSBmdW5jdGlvbigkdGFidWxhclNjcm9sbCkge1xyXG5cdFx0dmFyICR0b3BTY3JvbGxXcmFwcGVyID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKTtcclxuXHRcdHZhciAkY2VudGVyVGFibGUgPSAkdGFidWxhclNjcm9sbC5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXItdGFibGUnKTtcclxuXHRcdCR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5Ub3BTY3JvbGxXcmFwcGVyJykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkY2VudGVyVGFibGUuc2Nyb2xsTGVmdCgkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCkpO1xyXG5cdFx0fSk7XHJcblx0XHQkY2VudGVyVGFibGUuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCRjZW50ZXJUYWJsZS5zY3JvbGxMZWZ0KCkpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyBzaW1pbGFyIHRvIFJlc2l6ZVxyXG5cdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xyXG5cdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyIC5Ub3BTY3JvbGxEcmFnZ2VyJykud2lkdGgodGFibGVXaWR0aCk7XHJcblx0XHRpZiAoJGNlbnRlclRhYmxlWzBdLnNjcm9sbFdpZHRoID4gJGNlbnRlclRhYmxlLndpZHRoKCkpIHtcclxuXHRcdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVzaXplUm93cyA9IGZ1bmN0aW9uKCR0YWJ1bGFyU2Nyb2xsKSB7XHJcblx0XHRsZXQgYXJycmF5SGVpZ2h0ID0gW107XHJcblx0XHRjb25zdCAkdGFibGVDZW50ZXIgPSAkdGFidWxhclNjcm9sbC5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXItdGFibGUgdGFibGUgdGJvZHknKTtcclxuXHRcdGNvbnN0ICR0YWJsZVJpZ2h0ID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtcmlnaHQgLkxpc3RSZWNvcmRzJyk7XHJcblx0XHRjb25zdCAkdGFibGVMZWZ0ID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtbGVmdCAuTGlzdFJlY29yZHMnKTtcclxuXHJcblx0XHRhcnJyYXlIZWlnaHQgPSAkdGFibGVDZW50ZXJcclxuXHRcdFx0LmNoaWxkcmVuKCd0cicpXHJcblx0XHRcdC5tYXAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5nZXQoKTtcclxuXHJcblx0XHQkdGFibGVSaWdodC5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0JCh0aGlzKS5jc3MoJ2hlaWdodCcsIGFycnJheUhlaWdodFtpbmRleF0gKyAncHgnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCR0YWJsZUxlZnQuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdCQodGhpcykuY3NzKCdoZWlnaHQnLCBhcnJyYXlIZWlnaHRbaW5kZXhdICsgJ3B4Jyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuVGFidWxhclNjcm9sbCA9IHsgY3JlYXRlIH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogVGltZWxpbmUgSGVscGVycyAqL1xyXG5TYXBwaGlyZVdpZGdldHMuVGltZWxpbmVDb3VudGVySXRlbXMgPSBmdW5jdGlvbih0aXRsZUl0ZW1JRCwgbGFiZWwpIHtcclxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0ICRzZWN0aW9uID0gJChgIyR7dGl0bGVJdGVtSUR9YCkucGFyZW50cygnLlRpbWVsaW5lSXRlbVNlY3Rpb24nKTtcclxuXHRcdGNvbnN0ICR0aXRsZSA9ICRzZWN0aW9uLmZpbmQoJy5UaW1lbGluZUl0ZW1IZWFkZXIgYScpO1xyXG5cdFx0Y29uc3QgJGl0ZW1zID0gJHNlY3Rpb24uZmluZCgnLlRpbWVsaW5lSXRlbScpO1xyXG5cclxuXHRcdCR0aXRsZS5hcHBlbmQoJChgPGRpdiBjbGFzcz0nQ29sb3JHcmV5VGV4dCBUZXh0TGFyZ2UgVGV4dFJlZ3VsYXInPiAoJHskaXRlbXMubGVuZ3RofSk8L2Rpdj5gKSk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5TYXBwaGlyZVdpZGdldHMuU2Nyb2xsVG9FdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCkge1xyXG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLnNjcm9sbFRvRWxlbWVudCgkKGAjJHtlbGVtZW50SWR9OmZpcnN0YCwgd2luZG93LnRvcC5kb2N1bWVudCksIDUyKTtcclxufTtcclxuXHJcblNhcHBoaXJlV2lkZ2V0cy5MaW5lVGltZWxpbmVDb21wb25lbnQgPSBmdW5jdGlvbih3aWRnZXRJZCwgaGFzQ29udGVudCwgaXNFeHBhbmRhYmxlKSB7XHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XHJcblxyXG5cdFx0aWYgKGhhc0NvbnRlbnQgJiYgaXNFeHBhbmRhYmxlKSB7XHJcblx0XHRcdGNvbnN0ICRleHBhbmRhYmxlTGluayA9ICRjb21wb25lbnQuZmluZCgnLkxpbmVUaW1lTGluZV9fSGVhZGVyJyk7XHJcblx0XHRcdGNvbnN0ICRhY3Rpb25zID0gJGNvbXBvbmVudC5maW5kKCcuTGluZVRpbWVMaW5lX19BY3Rpb25zJyk7XHJcblxyXG5cdFx0XHQkZXhwYW5kYWJsZUxpbmsuY2xpY2soKCkgPT4ge1xyXG5cdFx0XHRcdCRjb21wb25lbnQudG9nZ2xlQ2xhc3MoJ0xpbmVUaW1lTGluZS0tZXhwYW5kZWQnKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRhY3Rpb25zLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcblNhcHBoaXJlV2lkZ2V0cy5UaW1lbGluZVBhZ2VFdmVudHMgPSBmdW5jdGlvbihzaG93TW9yZVRpbWVsaW5lTGluaykge1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh3aW5kb3cpXHJcblx0XHRcdC5vZmYoJ3Njcm9sbC5UaW1lbGluZScpXHJcblx0XHRcdC5vbignc2Nyb2xsLlRpbWVsaW5lJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZID09PSAwKSB7XHJcblx0XHRcdFx0XHRjb25zdCAkaXRlbSA9ICQoJy5UaW1lbGluZUFuY2hvcicpLmZpcnN0KCk7XHJcblx0XHRcdFx0XHRjb25zdCAkbGlzdCA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdFx0XHRcdFx0c2VsZWN0SXRlbSgkaXRlbS5hdHRyKCdpZCcpKTtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cuc2Nyb2xsRmluaXNoZWQpO1xyXG5cclxuXHRcdFx0XHRcdCRsaXN0LnNjcm9sbFRvcCgwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHdpbmRvdy5zY3JvbGxGaW5pc2hlZCk7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgaWQgPSAwO1xyXG5cclxuXHRcdFx0XHRcdFx0JCgnLlRpbWVsaW5lQW5jaG9yJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAxOTAgPj0gJCh0aGlzKS5vZmZzZXQoKS50b3ApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChpbmRleCA9PSAkKCcuVGltZWxpbmVBbmNob3InKS5sZW5ndGggLSAxKSBzZWxlY3RJdGVtKGlkKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0SXRlbShpZCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93Lmxhc3RJdGVtSUQgPSBpZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICgkKGRvY3VtZW50KS5oZWlnaHQoKSAtICQodGhpcykuaGVpZ2h0KCkgLSAxNTAgPCAkKHRoaXMpLnNjcm9sbFRvcCgpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQkKGAjJHtzaG93TW9yZVRpbWVsaW5lTGlua31gKS5jbGljaygpO1xyXG5cdFx0XHRcdFx0XHRcdCQoJy5UaW1lbGluZVBhZ2VfX1JpZ2h0IC5UaW1lbGluZVBhZ2VfX0xvYWRpbmdNb3JlJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbExpc3RQb3NpdGlvbiA9ICRsaXN0LnNjcm9sbFRvcCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y2hlY2tFbmRPZlBhZ2UoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0aW5maW5pdGVTY3JvbGxMaXN0KHNob3dNb3JlVGltZWxpbmVMaW5rKTtcclxuXHR9KTtcclxufTtcclxuXHJcblNhcHBoaXJlV2lkZ2V0cy5UaW1lbGluZVJlc3RvcmVFdmVudHMgPSBmdW5jdGlvbihzaG93TW9yZVRpbWVsaW5lTGluaykge1xyXG5cdCQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJykuc2Nyb2xsVG9wKHdpbmRvdy5zY3JvbGxMaXN0UG9zaXRpb24pO1xyXG5cdCQoJy5UaW1lbGluZVBhZ2VfX0xvYWRpbmdNb3JlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcblx0d2luZG93LmFscmVhZHlDbGlja2VkID0gZmFsc2U7XHJcblxyXG5cdGluZmluaXRlU2Nyb2xsTGlzdChzaG93TW9yZVRpbWVsaW5lTGluayk7XHJcblxyXG5cdGlmICh3aW5kb3cubGFzdEl0ZW1JRCkgc2VsZWN0SXRlbSh3aW5kb3cubGFzdEl0ZW1JRCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RJdGVtKGlkLCBzY3JvbGxUbykge1xyXG5cdGNvbnN0ICRuYXZJdGVtID0gJChgW2RhdGEtaXRlbT1ldmVudC0ke2lkfV0gLlRpbWVsaW5lSXRlbWApO1xyXG5cclxuXHQkKCcuVGltZWxpbmVJdGVtLlRpbWVsaW5lSXRlbS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ1RpbWVsaW5lSXRlbS0tYWN0aXZlJyk7XHJcblx0JG5hdkl0ZW0uYWRkQ2xhc3MoJ1RpbWVsaW5lSXRlbS0tYWN0aXZlJyk7XHJcblxyXG5cdGlmIChzY3JvbGxUbyAmJiAkbmF2SXRlbS5sZW5ndGgpIHNjcm9sbFRvVmlldygkbmF2SXRlbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvVmlldyhlbGVtZW50KSB7XHJcblx0Y29uc3QgJHBhcmVudERpdiA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdCRwYXJlbnREaXYuc2Nyb2xsVG9wKFxyXG5cdFx0JHBhcmVudERpdi5zY3JvbGxUb3AoKSArIGVsZW1lbnQucG9zaXRpb24oKS50b3AgLSAkcGFyZW50RGl2LmhlaWdodCgpIC8gMiArIGVsZW1lbnQuaGVpZ2h0KCkgLyAyXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZmluaXRlU2Nyb2xsTGlzdChzaG93TW9yZU5hdkxpbmssIG5hbWUpIHtcclxuXHRjb25zdCAkbGlzdCA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XHJcblxyXG5cdCRsaXN0Lm9mZignbW91c2V3aGVlbC5UaW1lbGluZU5hdicpLm9uKCdtb3VzZXdoZWVsLlRpbWVsaW5lTmF2JywgZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBsaXN0SGVpZ2h0ID0gJGxpc3QuaGVpZ2h0KCk7XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSAkbGlzdC5zY3JvbGxUb3AoKTtcclxuXHRcdGNvbnN0IHNjcm9sbEhlaWdodCA9ICRsaXN0LnByb3AoJ3Njcm9sbEhlaWdodCcpO1xyXG5cclxuXHRcdGlmIChsaXN0SGVpZ2h0ICsgc2Nyb2xsVG9wICsgMTAwID4gc2Nyb2xsSGVpZ2h0ICYmIHNjcm9sbFRvcCA+IDAgJiYgIXdpbmRvdy5hbHJlYWR5Q2xpY2tlZCkge1xyXG5cdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnNjcm9sbExpc3RGaW5pc2hlZCk7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxMaXN0RmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoYCMke3Nob3dNb3JlTmF2TGlua31gKS5jbGljaygpO1xyXG5cclxuXHRcdFx0XHQkKCcuVGltZWxpbmVQYWdlX19Mb2FkaW5nTW9yZScpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxMaXN0UG9zaXRpb24gPSAkbGlzdC5zY3JvbGxUb3AoKTtcclxuXHRcdFx0XHR3aW5kb3cuYWxyZWFkeUNsaWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0VuZE9mUGFnZSgpIHtcclxuXHRpZiAod2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnBhZ2VZT2Zmc2V0ID49IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0KSB7XHJcblx0XHRjb25zdCAkaXRlbSA9ICQoJy5UaW1lbGluZUFuY2hvcicpLmxhc3QoKTtcclxuXHRcdHdpbmRvdy5sYXN0SXRlbUlEID0gJGl0ZW0uYXR0cignaWQnKTtcclxuXHR9XHJcbn1cclxuIiwiLyogQ29tcG9uZW50IFRyaWdnZXJJZnJhbWVUb29sdGlwICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgJGVsZW1lbnRJZCA9ICQoJyMnICsgY29uZmlnLmVsZW1lbnRJZCk7XG5cblx0XHRjb25maWcubWluSGVpZ2h0ID0gY29uZmlnLm1pbkhlaWdodCArIDMyO1xuXG5cdFx0JGVsZW1lbnRJZC5hZGRDbGFzcygndG9vbHRpcCcpO1xuXG5cdFx0aWYgKGNvbmZpZy50cmlnZ2VySWQgPT09ICdjbGljaycpICRlbGVtZW50SWQuYWRkQ2xhc3MoJ3Rvb2x0aXBzdGVyZWQtLXBvaW50ZXInKTtcblxuXHRcdGNvbnN0IHdpZGdldE5vdGlmeURpdiA9ICQuZmluZCgnW2RhdGEtaWZyYW1ldG9vbHRpcHRyaWdnZXJpZD1cIicgKyBjb25maWcuZWxlbWVudElkICsgJ1wiXScpO1xuXHRcdGxldCB3aWRnZXROb3RpZnlJZCA9ICcnO1xuXG5cdFx0aWYgKHdpZGdldE5vdGlmeURpdi5sZW5ndGggPT09IDEpIHtcblx0XHRcdHdpZGdldE5vdGlmeUlkID0gJCh3aWRnZXROb3RpZnlEaXYpLmRhdGEoJ2lmcmFtZXRvb2x0aXBub3RpZnlpZCcpO1xuXHRcdH1cblxuXHRcdCRlbGVtZW50SWQudG9vbHRpcHN0ZXIoe1xuXHRcdFx0Y29udGVudEFzSFRNTDogdHJ1ZSxcblx0XHRcdHRoZW1lOiBjb25maWcudGhlbWUsXG5cdFx0XHRpbnRlcmFjdGl2ZTogdHJ1ZSxcblx0XHRcdHBvc2l0aW9uOiBjb25maWcucG9zaXRpb25JZCxcblx0XHRcdHRyaWdnZXI6IGNvbmZpZy50cmlnZ2VySWQsXG5cdFx0XHRtaW5XaWR0aDogY29uZmlnLm1pbldpZHRoLFxuXHRcdFx0bWF4V2lkdGg6IGNvbmZpZy5tYXhXaWR0aCxcblx0XHRcdHppbmRleDogY29uZmlnLnppbmRleCxcblx0XHRcdG9ubHlPbmU6IHRydWUsXG5cdFx0XHRjb250ZW50OiBgPGlmcmFtZSBpZD1cInRvb2x0aXBzdGVyLWZyYW1lXCIgZGF0YS11aT1cImlmcmFtZS10b29sdGlwXCIgc3JjPVwiJHtjb25maWcuVVJMfVwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7IG1pbi1oZWlnaHQ6JHtjb25maWcubWluSGVpZ2h0fXB4O1wiIGRhdGEtaWZyYW1ldG9vbHRpcHRyaWdnZXJpZD1cIiR7Y29uZmlnLmVsZW1lbnRJZH1cIiBpZnJhbWV0b29sdGlwbm90aWZ5aWQ9XCIke3dpZGdldE5vdGlmeUlkfVwiPjwvaWZyYW1lPmAsXG5cdFx0XHRmdW5jdGlvblJlYWR5OiBmdW5jdGlvbihpbnN0YW5jZSwgaGVscGVyKSB7XG5cdFx0XHRcdCQoaGVscGVyKS5jc3MoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KTtcblxuXHRcdFx0XHRpZiAoY29uZmlnLm5vUGFkZGluZykgJCgnLnRvb2x0aXBzdGVyLWNvbnRlbnQnKS5hZGRDbGFzcygndG9vbHRpcHN0ZXItLW5vUGFkZGluZycpO1xuXHRcdFx0XHRpZiAoY29uZmlnLmN1c3RvbUNsYXNzKSAkKCcudG9vbHRpcHN0ZXItYmFzZScpLmFkZENsYXNzKGNvbmZpZy5jdXN0b21DbGFzcyk7XG5cblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCcudG9vbHRpcHN0ZXItYmFzZScpLmNzcyh7XG5cdFx0XHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdFx0XHRtaW5IZWlnaHQ6IGNvbmZpZy5taW5IZWlnaHQgPiAwID8gY29uZmlnLm1pbkhlaWdodCA6ICdhdXRvJyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgNTAwKTtcblxuXHRcdFx0XHQkKCcudG9vbHRpcHN0ZXItY29udGVudCcpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJUb29sdGlwc3RlckxvYWRpbmdcIj48ZGl2IGNsYXNzPVwibGRzLXJpbmdcIj48ZGl2PjwvZGl2PjwvZGl2PicpO1xuXG5cdFx0XHRcdGNvbnN0IGlzTGVmdE9yUmlnaHQgPSBjb25maWcucG9zaXRpb25JZCA9PT0gJ2xlZnQnIHx8IGNvbmZpZy5wb3NpdGlvbklkID09PSAncmlnaHQnO1xuXG5cdFx0XHRcdC8vIFNldCBhIGZpeGVkIGhlaWdodCBpbiBvcmRlciB0byBrZWVwIHRoZSBhcnJvdyBpbiB0aGUgc2FtZSBwb3NpdGlvblxuXHRcdFx0XHRpZiAoaXNMZWZ0T3JSaWdodCkge1xuXHRcdFx0XHRcdHNldEZpeEhlaWdodCgpO1xuXG5cdFx0XHRcdFx0JCh3aW5kb3cpXG5cdFx0XHRcdFx0XHQub2ZmKCdzY3JvbGwuVG9vbHRpcCcpXG5cdFx0XHRcdFx0XHQub24oJ3Njcm9sbC5Ub29sdGlwJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEZpeEhlaWdodCgpO1xuXHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbkFmdGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh3aW5kb3cpLm9mZignc2Nyb2xsLlRvb2x0aXAnKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgc2V0Rml4SGVpZ2h0ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRhcnJvdyA9ICQoJy50b29sdGlwc3Rlci1hcnJvdycpO1xuXG5cdFx0JGFycm93LmhlaWdodCgkYXJyb3cuaGVpZ2h0KCkpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5UcmlnZ2VySWZyYW1lVG9vbHRpcCA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgVHJ1bmNhdGVkQ29udGVudCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnID0ge30pIHtcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJGFsbFRydW5jYXRlZCA9ICQoW10pO1xyXG5cdFx0XHR2YXIgcm9vdFNlbGVjdG9yID0gYCMke2NvbmZpZy53aWRnZXRJZH1gO1xyXG5cdFx0XHR2YXIgb3BlbmVyU2VsZWN0b3IgPSAnLlRydW5jYXRlZENvbnRlbnQtLWFsbCc7XHJcblx0XHRcdHZhciBib2R5U2VsZWN0b3IgPSAnLlRydW5jYXRlZENvbnRlbnQtLWJvZHknO1xyXG5cclxuXHRcdFx0JChyb290U2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICRlbCA9ICQodGhpcyk7XHJcblx0XHRcdFx0JGFsbFRydW5jYXRlZCA9ICRhbGxUcnVuY2F0ZWQuYWRkKCRlbCk7XHJcblx0XHRcdFx0dmFyICRlbEJvZHkgPSAkZWwuZmluZChib2R5U2VsZWN0b3IpO1xyXG5cdFx0XHRcdHZhciBtYXhMaW5lcyA9ICRlbC5kYXRhKCdtYXhsaW5lcycpO1xyXG5cdFx0XHRcdHZhciBsaW5lSGVpZ2h0ID0gd2luZG93XHJcblx0XHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZSgkZWwuZmluZCgnPiBkaXYnKVswXSlcclxuXHRcdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKCdsaW5lLWhlaWdodCcpXHJcblx0XHRcdFx0XHQucmVwbGFjZSgncHgnLCAnJyk7XHJcblx0XHRcdFx0dmFyIGxpbmVDb3VudCA9IE1hdGguY2VpbCgkZWwuaGVpZ2h0KCkgLyBsaW5lSGVpZ2h0KTtcclxuXHRcdFx0XHRpZiAobGluZUNvdW50ID4gbWF4TGluZXMpIHtcclxuXHRcdFx0XHRcdCRlbEJvZHkuY3NzKHtcclxuXHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBsaW5lSGVpZ2h0ICogbWF4TGluZXMgKyAncHgnLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR2YXIgc2VudGVuY2UgPSAkZWwuZGF0YSgnYWRkaXRpb25hbCcpLnJlcGxhY2UoJ3tufScsIGxpbmVDb3VudCAtIG1heExpbmVzKTtcclxuXHRcdFx0XHRcdCRlbC5hcHBlbmQoJzxwIGNsYXNzPVwiJyArIG9wZW5lclNlbGVjdG9yLnJlcGxhY2UoJy4nLCAnJykgKyAnXCI+JyArIHNlbnRlbmNlICsgJzwvcD4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JChyb290U2VsZWN0b3IpLm9uKCdjbGljaycsIG9wZW5lclNlbGVjdG9yLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgZWwgPSAkKHRoaXMpLmNsb3Nlc3Qocm9vdFNlbGVjdG9yKTtcclxuXHRcdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudChlbCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0b3BlblRydW5jYXRlZENvbnRlbnQgPSBmdW5jdGlvbihlbCkge1xyXG5cdFx0XHRcdCQoZWwpXHJcblx0XHRcdFx0XHQuZmluZChib2R5U2VsZWN0b3IpXHJcblx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJ25vbmUnKTtcclxuXHRcdFx0XHQkKGVsKVxyXG5cdFx0XHRcdFx0LmZpbmQob3BlbmVyU2VsZWN0b3IpXHJcblx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50ICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQuaWQgPT09ICd0b29sdGlwc3Rlci1mcmFtZScpIHtcclxuXHRcdFx0XHQkKHJvb3RTZWxlY3Rvcikub2ZmKCdjbGljaycsIG9wZW5lclNlbGVjdG9yKTtcclxuXHRcdFx0XHQkKG9wZW5lclNlbGVjdG9yKS5hZGRDbGFzcygnaW4tdG9vbHRpcCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuVHJ1bmNhdGVkQ29udGVudCA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHRcdG9wZW46IGZ1bmN0aW9uKGVsKSB7XHJcblx0XHRcdG9wZW5UcnVuY2F0ZWRDb250ZW50KGVsKTtcclxuXHRcdH0sXHJcblx0XHRvcGVuQWxsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0JGFsbFRydW5jYXRlZC5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdG9wZW5UcnVuY2F0ZWRDb250ZW50KCQodGhpcykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCJTYXBwaGlyZVdpZGdldHMuQ2xpbmljaWFuV29ya0FyZWEgPSBmdW5jdGlvbihjb250YWluZXJJRCkge1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9ICQoYCMke2NvbnRhaW5lcklEfWApO1xyXG5cdFx0Y29uc3QgJHRvZ2dsZXIgPSAkY29udGFpbmVyLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVyJyk7XHJcblxyXG5cdFx0aWYgKCR0b2dnbGVyLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRsZXQgJHRvZ2dsZXJTdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XHJcblxyXG5cdFx0XHQkdG9nZ2xlci5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRidXR0b25DbGljaygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHRvZ2dsZXJTdGF0ZSA9ICEkdG9nZ2xlclN0YXRlO1xyXG5cclxuXHRcdFx0XHRpZiAoJHRvZ2dsZXJTdGF0ZSkge1xyXG5cdFx0XHRcdFx0JGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLnNob3coKTtcclxuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbGhpZGVdJykuZGF0YSgnbGFiZWxoaWRlJykpO1xyXG5cclxuXHRcdFx0XHRcdCR0b2dnbGVyLmhpZGUoKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCAkY2FuY2VsQnV0dG9uID0gJCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQgLkJ1dHRvbkNhbmNlbFNlYXJjaCcpO1xyXG5cdFx0XHRcdFx0JGNhbmNlbEJ1dHRvbi5jbGljaygoKSA9PiBidXR0b25DbGljaygpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLmhpZGUoKTtcclxuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHNob3ddJykuZGF0YSgnbGFiZWxzaG93JykpO1xyXG5cclxuXHRcdFx0XHRcdCR0b2dnbGVyLnNob3coKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCAkY2FuY2VsQnV0dG9uID0gJCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQgLkJ1dHRvbkNhbmNlbFNlYXJjaCcpO1xyXG5cdFx0XHRcdFx0JGNhbmNlbEJ1dHRvbi5vZmYoJ2NsaWNrJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG4iLCJTYXBwaGlyZVdpZGdldHMuUVJDb2RlU2Nhbm5lciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRIdG1sNVFyY29kZS5nZXRDYW1lcmFzKClcclxuXHRcdC50aGVuKGRldmljZXMgPT4ge1xyXG5cdFx0XHRpZiAoZGV2aWNlcyAmJiBkZXZpY2VzLmxlbmd0aCkgc3RhcnRDYW1lcmEoZGV2aWNlc1swXS5pZCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdC8vIEFwcCBkb2Vzbid0IGhhdmUgYWNjZXNzIHRvIHRoZSBjYW1lcmEuLi5cclxuXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0ICRjaGVja2JveCA9ICQoJy5BY2Nlc3NDb2RlT3B0aW9uJyk7XHJcblxyXG5cdFx0XHRcdCRjaGVja2JveC5hdHRyKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHQkKCcuTGF5b3V0U2NhbkNvZGUnKS5hZGRDbGFzcygnTGF5b3V0U2NhbkNvZGUtLW1vZGVPbmx5Q29kZScpO1xyXG5cclxuXHRcdFx0XHQkKCcuTGF5b3V0U2NhbkNvZGVfX1NwbGFzaCcpLmZhZGVPdXQoNTAwKTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBzdGFydENhbWVyYShjYW1lcmFJRCkge1xyXG5cdFx0Y29uc3QgaHRtbDVRckNvZGUgPSBuZXcgSHRtbDVRcmNvZGUoJ3FycmVhZGVyJyk7XHJcblx0XHRjb25zdCBjb25maWcgPSB7IGZwczogNSwgcXJib3g6IDI1MCB9O1xyXG5cclxuXHRcdGNvbnN0IHN1Y2Nlc3NDYWxsYmFjayA9IHJlc3BvbnNlID0+IHtcclxuXHRcdFx0aWYgKCQoJy5Nb2RlQWNjZXNzQ29kZScpLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0JCgnLlNjYW5PdmVybGF5JykuYWRkQ2xhc3MoJ1NjYW5PdmVybGF5LS1jb3JyZWN0Q29kZScpO1xyXG5cclxuXHRcdFx0T3NOb3RpZnlXaWRnZXQob3B0aW9ucy53aWRnZXRGYWtlTm90aWZ5SWQsIHJlc3BvbnNlKTtcclxuXHJcblx0XHRcdC8vc2V0VGltZW91dCgoKSA9PiBodG1sNVFyQ29kZS5zdG9wKCksIDEwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBlcnJvckNhbGxiYWNrID0gcmVzcG9uc2UgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aHRtbDVRckNvZGVcclxuXHRcdFx0LnN0YXJ0KHsgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50JyB9LCBjb25maWcsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaylcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4gJCgnLkxheW91dFNjYW5Db2RlX19TcGxhc2gnKS5mYWRlT3V0KDUwMCksIDUwMCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRsZXQgaXNQb3J0cmFpdCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXM7XHJcblx0bGV0IGlzT3JpZW50YXJpb25DaGFuZ2VkID0gZmFsc2U7XHJcblxyXG5cdCQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0aWYgKCQoJy5Nb2RlQWNjZXNzQ29kZScpLmxlbmd0aCkge1xyXG5cdFx0XHRpc09yaWVudGFyaW9uQ2hhbmdlZCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXM7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Jc09yaWVudGFyaW9uQ2hhbmdlZCA9ICEoaXNQb3J0cmFpdCBeIGlzT3JpZW50YXJpb25DaGFuZ2VkKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5TYXBwaGlyZVdpZGdldHMuT25Nb2RlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0JCgnLlNjYW5PdmVybGF5JykucmVtb3ZlQ2xhc3MoJ1NjYW5PdmVybGF5LS1jb3JyZWN0Q29kZScpO1xyXG5cdCQoJy5TY2FuT3ZlcmxheScpLnJlbW92ZUNsYXNzKCdTY2FuT3ZlcmxheS0taW5jb3JyZWN0Q29kZScpO1xyXG5cclxuXHRpZiAoU2FwcGhpcmVXaWRnZXRzLklzT3JpZW50YXJpb25DaGFuZ2VkICYmICEkKCcuTW9kZUFjY2Vzc0NvZGUnKS5sZW5ndGgpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9XHJcbn07XHJcblxyXG5TYXBwaGlyZVdpZGdldHMuR29OZXh0SW5wdXQgPSBmdW5jdGlvbihjdXJyZW50SW5wdXQsIG5leHRJbnB1dENsYXNzKSB7XHJcblx0Y29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC5jaGFyQ29kZTtcclxuXHRjb25zdCBpc051bWJlciA9ICFpc05hTihldmVudC5rZXkpICYmICFpc05hTihwYXJzZUZsb2F0KGV2ZW50LmtleSkpO1xyXG5cclxuXHRjb25zdCAkY3VyciA9ICQoY3VycmVudElucHV0KTtcclxuXHRjb25zdCAkbmV4dCA9ICQoYC4ke25leHRJbnB1dENsYXNzfWApO1xyXG5cdGNvbnN0ICRwcmV2ID0gJGN1cnIucHJldkFsbCgnaW5wdXQnKS5maXJzdCgpO1xyXG5cclxuXHRpZiAoa2V5ID09PSA4IHx8IGtleSA9PT0gNDYpIHtcclxuXHRcdCRwcmV2LmZvY3VzKCk7XHJcblx0XHQkY3Vyci5yZW1vdmVDbGFzcygnQ29sb3JBbHBoYUJvcmRlcicpO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmIChpc051bWJlcikge1xyXG5cdFx0JG5leHQuZm9jdXMoKTtcclxuXHRcdCRjdXJyLmFkZENsYXNzKCdDb2xvckFscGhhQm9yZGVyJyk7XHJcblx0XHQkKCcuVmFsaWRhdGVJbnB1dEJ1dHRvbicpLmNsaWNrKCk7XHJcblx0fSBlbHNlIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn07XHJcbiIsIihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcuUmVtb3RlQXBwb2ludG1lbnQnKTtcclxuXHRcdGNvbnN0ICRoZWFkZXIgPSAkd2lkZ2V0LmZpbmQoJy5SZW1vdGVBcHBvaW50bWVudF9fSGVhZGVyJyk7XHJcblx0XHRjb25zdCAkbWluaW1pemUgPSAkaGVhZGVyLmZpbmQoJy5NaW5pbWl6ZScpO1xyXG5cdFx0Y29uc3QgJHNtYWxsU2l6ZSA9ICRoZWFkZXIuZmluZCgnLlNtYWxsJyk7XHJcblx0XHRjb25zdCAkbWVkaXVtU2l6ZSA9ICRoZWFkZXIuZmluZCgnLk1lZGl1bScpO1xyXG5cdFx0Y29uc3QgJGZ1bGxTY3JlZW4gPSAkaGVhZGVyLmZpbmQoJy5GdWxsU2NyZWVuJyk7XHJcblx0XHRjb25zdCAkcmVzdG9yZVdpbmRvdyA9ICR3aWRnZXQuZmluZCgnLlJlbW90ZUFwcG9pbnRtZW50X19SZXN0b3JlV2luZG93Jyk7XHJcblxyXG5cdFx0bGV0IGlzUHJldmlvdXNTbWFsbCA9ICRzbWFsbFNpemUuaXMoJzp2aXNpYmxlJyk7XHJcblxyXG5cdFx0JG1pbmltaXplLmNsaWNrKCgpID0+IHtcclxuXHRcdFx0aXNQcmV2aW91c1NtYWxsID0gJG1lZGl1bVNpemUuaXMoJzp2aXNpYmxlJyk7XHJcblxyXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKHsgZGlzYWJsZWQ6IHRydWUgfSk7XHJcblxyXG5cdFx0XHQkd2lkZ2V0LmFkZENsYXNzKCdSZW1vdGVBcHBvaW50bWVudC0tbWluaW1pemVkJyk7XHJcblx0XHRcdCRtaW5pbWl6ZS5oaWRlKCk7XHJcblx0XHRcdCRtZWRpdW1TaXplLnNob3coKTtcclxuXHJcblx0XHRcdCR3aWRnZXQuYW5pbWF0ZShtaW5pbWl6ZWRQb3NpdGlvbigkaGVhZGVyLmhlaWdodCgpKSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkc21hbGxTaXplLmNsaWNrKCgpID0+IHtcclxuXHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLW1pbmltaXplZCcpO1xyXG5cdFx0XHQkbWluaW1pemUuc2hvdygpO1xyXG5cdFx0XHQkc21hbGxTaXplLmhpZGUoKTtcclxuXHRcdFx0JG1lZGl1bVNpemUuc2hvdygpO1xyXG5cclxuXHRcdFx0JHdpZGdldC5hbmltYXRlKHtcclxuXHRcdFx0XHR0b3A6ICc1MCUnLFxyXG5cdFx0XHRcdHJpZ2h0OiAnNTAlJyxcclxuXHRcdFx0XHRsZWZ0OiAnNTAlJyxcclxuXHRcdFx0XHR3aWR0aDogJzI4MHB4JyxcclxuXHRcdFx0XHRoZWlnaHQ6ICczODBweCcsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JG1lZGl1bVNpemUuY2xpY2soKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpc0NhbGxTdGFydGVkID0gJHdpZGdldC5oYXNDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLWNhbGxTdGFydGVkJyk7XHJcblxyXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKCdlbmFibGUnKTtcclxuXHJcblx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1taW5pbWl6ZWQnKTtcclxuXHRcdFx0JG1pbmltaXplLnNob3coKTtcclxuXHRcdFx0JG1lZGl1bVNpemUuaGlkZSgpO1xyXG5cdFx0XHRpZiAoaXNDYWxsU3RhcnRlZCkgJHNtYWxsU2l6ZS5zaG93KCk7XHJcblxyXG5cdFx0XHQkd2lkZ2V0LmFuaW1hdGUoe1xyXG5cdFx0XHRcdHRvcDogJzUwJScsXHJcblx0XHRcdFx0cmlnaHQ6ICc1MCUnLFxyXG5cdFx0XHRcdGxlZnQ6ICc1MCUnLFxyXG5cdFx0XHRcdHdpZHRoOiBpc0NhbGxTdGFydGVkID8gJzQ1dncnIDogJzQ1MHB4JyxcclxuXHRcdFx0XHRoZWlnaHQ6IGlzQ2FsbFN0YXJ0ZWQgPyAnNDV2aCcgOiAnMjYwcHgnLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRmdWxsU2NyZWVuLmNsaWNrKCgpID0+IHtcclxuXHRcdFx0Y29uc3QgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlJlbW90ZUFwcG9pbnRtZW50IGlmcmFtZScpO1xyXG5cclxuXHRcdFx0aWYgKGlmcmFtZS5yZXF1ZXN0RnVsbHNjcmVlbikge1xyXG5cdFx0XHRcdGlmcmFtZS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG5cdFx0XHRcdGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkcmVzdG9yZVdpbmRvdy5jbGljaygoKSA9PiB7XHJcblx0XHRcdGlmIChpc1ByZXZpb3VzU21hbGwpICRzbWFsbFNpemUuY2xpY2soKTtcclxuXHRcdFx0ZWxzZSAkbWVkaXVtU2l6ZS5jbGljaygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCR3aWRnZXQuZHJhZ2dhYmxlKHtcclxuXHRcdFx0XHRjb250YWlubWVudDogJ3dpbmRvdycsXHJcblx0XHRcdFx0aGFuZGxlOiAkaGVhZGVyLFxyXG5cdFx0XHRcdHNjcm9sbDogZmFsc2UsXHJcblx0XHRcdFx0c25hcDogdHJ1ZSxcclxuXHRcdFx0XHRpZnJhbWVGaXg6IHRydWUsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZmFrZUFqYXhSZWZyZXNoKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjaGVja0lmcmFtZUxvYWRlZCgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG1pbmltaXplZFBvc2l0aW9uID0gKGhlYWRlckhlaWdodCA9IDQ4KSA9PiB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0b3A6ICQod2luZG93KS5oZWlnaHQoKSAtIGhlYWRlckhlaWdodCAtIDE2LFxyXG5cdFx0XHRyaWdodDogJzc2cHgnLFxyXG5cdFx0XHRsZWZ0OiAkKHdpbmRvdykud2lkdGgoKSAtIDI4MCAtIDYwIC0gMTYsXHJcblx0XHRcdHdpZHRoOiAnMjc1cHgnLFxyXG5cdFx0XHRoZWlnaHQ6ICc0OHB4JyxcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVzaXplV2hlbkpvaW4gPSAoKSA9PiB7XHJcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XHJcblx0XHRjb25zdCAkc21hbGxTaXplID0gJHdpZGdldC5maW5kKCcuU21hbGwnKTtcclxuXHJcblx0XHQkc21hbGxTaXplLnNob3coKTtcclxuXHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1jYWxsU3RhcnRlZCcpO1xyXG5cclxuXHRcdCR3aWRnZXQuY3NzKHtcclxuXHRcdFx0aGVpZ2h0OiAnNDV2aCcsXHJcblx0XHRcdHdpZHRoOiAnNDV2dycsXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBjZW50ZXJQeCA9ICgkKHdpbmRvdy50b3ApLndpZHRoKCkgLSAkd2lkZ2V0LndpZHRoKCkpIC8gMjtcclxuXHJcblx0XHQkd2lkZ2V0LmNzcyh7XHJcblx0XHRcdGluc2V0OiBgMjMwcHggYXV0byBhdXRvICR7Y2VudGVyUHh9cHhgLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHRpbWVvdXQ7XHJcblxyXG5cdFx0ZnVuY3Rpb24gd2FybmluZyhlKSB7XHJcblx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIEhhY2sgdG8ga2VlcCB0aGUgY3VycmVudCB0YWIgc2VsZWN0ZWQgaWYgdXNlciBkb2Vzbid0IGdvIHRvIGFub3RoZXIgcGFnZVxyXG5cdFx0XHRcdGNvbnN0IGlmcmFtZUNvbnRlbnRzID0gd2luZG93LnRvcC4kKCcuTWFpbkNvbnRlbnQgPiBpZnJhbWUnKS5jb250ZW50cygpO1xyXG5cdFx0XHRcdGNvbnN0IHRhYkl0ZW1zID0gaWZyYW1lQ29udGVudHMuZmluZCgnLlRhYldyYXBwZXInKTtcclxuXHJcblx0XHRcdFx0dGFiSXRlbXMucmVtb3ZlQ2xhc3MoJ0FjdGl2ZScpO1xyXG5cdFx0XHRcdHRhYkl0ZW1zLmZpcnN0KCkuYWRkQ2xhc3MoJ0FjdGl2ZScpO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHRcdHJldHVybiAoZS5yZXR1cm5WYWx1ZSA9ICdZb3UgYXJlIGxlYXZpbmcgdGhlIHBhZ2UnKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBub1RpbWVvdXQoKSB7XHJcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gd2FybmluZztcclxuXHRcdHdpbmRvdy50b3AudW5sb2FkID0gbm9UaW1lb3V0O1xyXG5cclxuXHRcdC8qd2luZG93LnRvcC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5yZXR1cm5WYWx1ZSA9ICcxMjMnO1xyXG5cdFx0fSk7Ki9cclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XHJcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XHJcblx0XHRjb25zdCAkc21hbGxTaXplID0gJHdpZGdldC5maW5kKCcuU21hbGwnKTtcclxuXHRcdGNvbnN0ICRtZWRpdW1TaXplID0gJHdpZGdldC5maW5kKCcuTWVkaXVtJyk7XHJcblxyXG5cdFx0JHNtYWxsU2l6ZS5oaWRlKCk7XHJcblx0XHQkbWVkaXVtU2l6ZS5oaWRlKCk7XHJcblx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdSZW1vdGVBcHBvaW50bWVudC0tY2FsbFN0YXJ0ZWQnKTtcclxuXHJcblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XHJcblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gbnVsbDtcclxuXHJcblx0XHQkKCcuUmVtb3RlQXBwb2ludG1lbnQnKS5jc3Moe1xyXG5cdFx0XHRkaXNwbGF5OiAnaW5pdGlhbCcsXHJcblx0XHRcdHJpZ2h0OiAnMjIlJyxcclxuXHRcdFx0dG9wOiAnMzAlJyxcclxuXHRcdFx0aGVpZ2h0OiAnMjYwcHgnLFxyXG5cdFx0XHR3aWR0aDogJzQ1MHB4JyxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldE1vZGFsTWluaW1pemVkID0gKCkgPT4ge1xyXG5cdFx0Ly8gVG8gdXNlIG9ubHkgaW5zaWRlIFNhcHBoaXJlIGlGcmFtZSBwYWdlc1xyXG5cdFx0Y29uc3QgJG1vZGFsUmVtb3RlQXBwdCA9IHdpbmRvdy50b3AuJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XHJcblxyXG5cdFx0aWYgKCRtb2RhbFJlbW90ZUFwcHQubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0ICRtaW5pbWl6ZU1vZGFsID0gJG1vZGFsUmVtb3RlQXBwdC5maW5kKCcuTWluaW1pemUnKTtcclxuXHRcdFx0JG1pbmltaXplTW9kYWwuY2xpY2soKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBjaGVja0lmcmFtZUxvYWRlZCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ1NhcHBoaXJlRnJhbWUnKVswXTtcclxuXHRcdGNvbnN0IGlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcblxyXG5cdFx0aWYgKGlmcmFtZURvYy5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpIHtcclxuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2V0SW5pdGlhbFN0YXRlKCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LnNldFRpbWVvdXQoY2hlY2tJZnJhbWVMb2FkZWQsIDEwMCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0Q2FsbFN0YXJ0ZWQgPSAoKSA9PiB7fTtcclxuXHJcblx0Y29uc3QgZmFrZUFqYXhSZWZyZXNoID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgJGlmcmFtZSA9ICQoJy5TYXBwaGlyZUZyYW1lJyk7XHJcblxyXG5cdFx0JGlmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkaWZyYW1lWzBdLmNvbnRlbnRXaW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0JCgnLkZlZWRiYWNrX0FqYXhXYWl0Jykuc2hvdygpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JCgnLkZlZWRiYWNrX0FqYXhXYWl0JykuaGlkZSgpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3Blbk1vZGFsTGVhdmVDb250ZXh0ID0gdXJsID0+IHtcclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5SZW1vdGVBcHBvaW50bWVudC5sZWF2ZVVSTCA9IHVybDtcclxuXHJcblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XHJcblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gbnVsbDtcclxuXHJcblx0XHQkKCcuT3Blbk1vZGFsTGVhdmVDb250ZXh0JykuY2xpY2soKTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRyZXNpemVXaGVuSm9pbixcclxuXHRcdHNldENhbGxTdGFydGVkLFxyXG5cdFx0c2V0SW5pdGlhbFN0YXRlLFxyXG5cdFx0ZmFrZUFqYXhSZWZyZXNoLFxyXG5cdFx0c2V0TW9kYWxNaW5pbWl6ZWQsXHJcblx0XHRvcGVuTW9kYWxMZWF2ZUNvbnRleHQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8vU2FwcGhpcmVXaWRnZXRzID0gd2luZG93LlNhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgfHwge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==