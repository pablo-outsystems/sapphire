/*! dev.app.js || Version: 5.1.128013 || Generated: Thu Jan 20 2022 13:00:15 GMT+0000 (Western European Standard Time) */
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
/******/ 	var hotCurrentHash = "5b219ddf921cd0d5de25";
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
	"./05-components/layout/layout-base.js": "./src/components/05-components/layout/layout-base.js",
	"./05-components/layout/layout-blank.js": "./src/components/05-components/layout/layout-blank.js",
	"./05-components/layout/layout-emergency.js": "./src/components/05-components/layout/layout-emergency.js",
	"./05-components/layout/layout-popup.js": "./src/components/05-components/layout/layout-popup.js",
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

			$(document).ready(function() {
				$('.CollapsibleSidePanel:visible').addClass('MultiMarginTopSmall');
				$('.CollapsibleSidePanel:visible:first').addClass('MultiMarginTopLarge');
			});
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
			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY HH:MM');

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

			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY');

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

		this.$input.on('blur', function(evt) {
			_this.sendNotification();
		});
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
						this.$model && this.$model.val(this.picker.startDate.format(this.config.systemDateFormat));
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

		if (v > -1) {
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
				if (sameOrigin) innerDoc.body.style.height = 'auto';
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
							var ScaleValue = ButtonScaleSelected.querySelectorAll('.active')[0].innerText;
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
	const DEFAULT_PADDING = 8;
	const DEFAULT_CARD_HEIGHT = 56;

	const setTableCardProgress = () => {
		const cardProgresID = config.widgetId;
		const startColumn = config.startColumn;
		const endColumn = config.endColumn;

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
		const colFill = parseInt(endColumn) - parseInt(startColumn) + 1;
		const minuteValueWidth = timeSlotWidth / 60;
		const hasActions = $actions.length > 0;

		let totalLeft = 0;

		for (let i = 1; i < parseInt(startColumn); i++) {
			totalLeft += $tableCellList[i].getBoundingClientRect().width;
		}

		let roundWidth = Math.round((timeSlotWidth + Number.EPSILON) * 100) / 100;
		const paddingOffset = DEFAULT_PADDING * 2;
		const newWidth = colFill * roundWidth - paddingOffset;
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
		if (window.parent.length && this.isExpandable) {
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
		if (window.parent.length) {
			window.parent.SapphireWidgets.LayoutBase.closeSidebarIframe(0);
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

		$tabs.each(function() {
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
				if (config.customClass) $('.tooltipster-content').addClass(config.customClass);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cyBzeW5jIFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wMC1zZXR0aW5ncy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJsYW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1lbWVyZ2VuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LXBvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2FjdGlvbnMtbWVudS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2J1dHRvbi1saW5rL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY2FyZC1jaGFydHMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb2xsYXBzaWJsZS1zaWRlLXBhbmVsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY29tcC1saW5lL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY291bnRyeS1waG9uZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGEtdGFibGVzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZGF0ZXRpbWUtcmFuZ2UtcGlja2VyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJhZy1kcm9wL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcGRvd24tY2F0ZWdvcmllcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3B6b25lL2Ryb3B6b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2V4cGFuZGFibGUtbGluay9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Z1bGxzY3JlZW4tdGFicy13cmFwcGVyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1jYXJkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1nYWxsZXJ5L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1ncmlkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG9yaXpvbnRhbC10b29sYmFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG91ci1waWNrZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC1sYXNhL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1jbGVhci9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtbGlzdC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtYWRkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1kZXRhaWxzLWV4cGFuZC1ib3gvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xvY2F0aW9uLWJveC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21haW4taW50ZXJhY3RpdmUtY2FyZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21lbnUtYmFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbXVsdGlwbGUtc2VsZWN0aW9uLWJ1dHRvbi9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvbW9kYWwtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQtbm90aWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BvcHVwLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2FwcGhpcmUtcGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwtc3RydWN0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wcmVzY3JpcHRpb24tY2FyZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1leHBhbmRhYmxlL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtaGVhZGVyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcG9wdXAvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1yYWRpby1idXR0b24vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvc2NhbGUtbWFpbi1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3RvZ2dsZS1pdGVtLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoLWFuZC1zZWxlY3Qvc2VsZWN0LXNzZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zc2Qtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaGFibGUtY2xpZW50LXNpZGUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtY3VzdG9tL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWluc2lkZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlbGVjdC1zeXN0ZW0vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC1jb250YWluZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUhvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGUtbWVudS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGViYXIvc2lkZWJhci1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc21hbGwtYm94LXNlbGVjdGFibGUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLWhvcml6b250YWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLXZlcnRpY2FsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3BsaXQtYnV0dG9uL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWNvbXBvbmVudC1ibG9jay9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1saXN0LWxpbmUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJsZS1mb3JtL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFicy1leHRlbmRlZC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItbGlzdC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItc2Nyb2xsL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGltZWxpbmUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cmlnZ2VyLWlmcmFtZS10b29sdGlwL3RyaWdnZXItaWZyYW1lLXRvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdHJ1bmNhdGVkLWNvbnRlbnQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9jbGluaWNpYW5Xb3JrQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9lU2lnbmF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL3JlbW90ZUFwcG9pbnRtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguc2Nzcz8zY2Y1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEdBQUc7O1FBRUg7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0I7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGNBQWMsNEJBQTRCO1FBQzFDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTs7UUFFSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0EsZUFBZSw0QkFBNEI7UUFDM0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQix1Q0FBdUM7UUFDeEQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQix1Q0FBdUM7UUFDeEQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsc0JBQXNCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBLFFBQVE7UUFDUjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxVQUFVO1FBQ1Y7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsY0FBYyx3Q0FBd0M7UUFDdEQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxTQUFTO1FBQ1Q7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxRQUFRO1FBQ1I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBLEtBQUs7UUFDTDs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGVBQWU7UUFDZjtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBLHNDQUFzQyx1QkFBdUI7OztRQUc3RDtRQUNBOzs7Ozs7Ozs7Ozs7QUN2MUJBLG1CQUFPLENBQUMsNERBQXlCOztBQUVqQztBQUNBO0FBQ0EsV0FBVyw2REFBOEM7Ozs7Ozs7Ozs7OztBQ0p6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RDs7Ozs7Ozs7Ozs7QUNwR0E7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN0TkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMVNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3pERDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBLCtCQUErQjtBQUMvQixDQUFDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1DQUFtQyxtQ0FBbUM7QUFDdEUsK0JBQStCLG1DQUFtQzs7QUFFbEU7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixTQUFTOztBQUVuQztBQUNBLDJCQUEyQixTQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHlDQUF5QztBQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7QUM5SEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUN6U0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLFdBQVc7QUFDWDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFVBQVU7QUFDVjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDekhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbURBQW1ELElBQUksc0JBQXNCO0FBQzdFO0FBQ0EsK0RBQStELFFBQVEsR0FBRyxTQUFTO0FBQ25GLGdEQUFnRCxJQUFJLG9GQUFvRjs7QUFFeEk7QUFDQTtBQUNBLG9EQUFvRCxlQUFlO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxrREFBa0QsZUFBZTtBQUNqRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGLG9GQUFvRjtBQUNwRixrRkFBa0Y7QUFDbEYsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRCxLQUFLO0FBQ0wsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTs7QUFFSiwrRUFBK0UsdUJBQXVCOztBQUV0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM3Y0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9NRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QyxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMzS0Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQiwyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUM3QixzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDN2FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdB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O0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBOztBQUVBLDZCQUE2QjtBQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7QUNsTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3Qjs7QUFFQTs7QUFFQTtBQUNB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QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3RORDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7Ozs7QUFJVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0I7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiw4STs7O0FBR0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaVI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7OztBQzFmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCLENBQUM7Ozs7Ozs7Ozs7OztBQzlCRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FB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QUcsRUFBRTtBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOU5EOzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJkZXYuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiNWIyMTlkZGY5MjFjZDBkNWRlMjVcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdHN3aXRjaCAoaG90U3RhdHVzKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcbiBcdFx0XHRcdFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuIFx0XHRcdFx0XHRcdChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPVxuIFx0XHRcdFx0XHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2gsIGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0dmFyIGNodW5rSWQgPSBcImFwcFwiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gXHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpIHtcbiBcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHQhbW9kdWxlIHx8XG4gXHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbiBcdFx0XHRcdClcbiBcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuIFx0XHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbiBcdFx0XHRcdCFpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRwYXJlbnRzOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5wYXJlbnRzLnNsaWNlKCksXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGlmIChob3RVcGRhdGVOZXdIYXNoICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVuZGVmaW5lZDtcbiBcdFx0fVxuIFx0XHRob3RVcGRhdGUgPSB1bmRlZmluZWQ7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IGl0ZW0ucGFyZW50cztcbiBcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24obGlzdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiBcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRyZXR1cm4gbGlzdDtcbiBcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoIWhvdFVwZGF0ZSkgaG90VXBkYXRlID0ge307XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZSk7XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuIFx0XHRcdHJldHVybiB0cnVlO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBtb2R1bGVJZCkpXG4gXHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvYXBwLmpzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwicmVxdWlyZSgnLi9jb21wb25lbnRzL2luZGV4LnNjc3MnKTtcblxuLy9JbXBvcnQgYWxsIEpTIGZpbGVzXG5jb25zdCByZXF1aXJlQWxsID0gciA9PiByLmtleXMoKS5mb3JFYWNoKHIpO1xucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4vY29tcG9uZW50cycsIHRydWUsIC9cXC5qcyQvKSk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vMDAtc2V0dGluZ3MvY29uZmlnLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wMC1zZXR0aW5ncy9jb25maWcuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1iYXNlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtYmFzZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJsYW5rLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtYmxhbmsuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1lbWVyZ2VuY3kuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1lbWVyZ2VuY3kuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1wb3B1cC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LXBvcHVwLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9hY3Rpb25zLW1lbnUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvYWN0aW9ucy1tZW51L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2J1dHRvbi1saW5rL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2J1dHRvbi1saW5rL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NhcmQtY2hhcnRzL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NhcmQtY2hhcnRzL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbGxhcHNpYmxlLXNpZGUtcGFuZWwvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY29sbGFwc2libGUtc2lkZS1wYW5lbC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9jb21wLWxpbmUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY29tcC1saW5lL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvdW50cnktcGhvbmUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvY291bnRyeS1waG9uZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9kYXRhLXRhYmxlcy9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kYXRhLXRhYmxlcy9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9kYXRldGltZS1yYW5nZS1waWNrZXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZGF0ZXRpbWUtcmFuZ2UtcGlja2VyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RyYWctZHJvcC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kcmFnLWRyb3Avc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZHJvcGRvd24tY2F0ZWdvcmllcy9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kcm9wZG93bi1jYXRlZ29yaWVzL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3B6b25lL2Ryb3B6b25lLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kcm9wem9uZS9kcm9wem9uZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZXhwYW5kYWJsZS1saW5rL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2V4cGFuZGFibGUtbGluay9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9mdWxsc2NyZWVuLXRhYnMtd3JhcHBlci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9mdWxsc2NyZWVuLXRhYnMtd3JhcHBlci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWNhcmQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1jYXJkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtZ2FsbGVyeS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdhbGxlcnkvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1ncmlkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtZ3JpZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3Jpem9udGFsLXRvb2xiYXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaG9yaXpvbnRhbC10b29sYmFyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2hvdXItcGlja2VyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2hvdXItcGlja2VyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LWxhc2Evc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtbGFzYS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWNsZWFyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtY2xlYXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1saXN0L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtbGlzdC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWFkZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWFkZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWRldGFpbHMtZXhwYW5kLWJveC9zY3JpcHQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xpbmUtZGV0YWlscy1leHBhbmQtYm94L3NjcmlwdC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbG9jYXRpb24tYm94L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xvY2F0aW9uLWJveC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9tYWluLWludGVyYWN0aXZlLWNhcmQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbWFpbi1pbnRlcmFjdGl2ZS1jYXJkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L21lbnUtYmFyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21lbnUtYmFyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L211bHRpcGxlLXNlbGVjdGlvbi1idXR0b24vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbXVsdGlwbGUtc2VsZWN0aW9uLWJ1dHRvbi9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcGFuZWwuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wYW5lbC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBvcHVwLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcG9wdXAuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL21vZGFsLXBvcHVwLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9tb2RhbC1wb3B1cC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQtbm90aWZ5LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC1ub3RpZnkuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcG9wdXAtbWVudS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcG9wdXAtbWVudS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2FwcGhpcmUtcGFuZWwuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3NhcHBoaXJlLXBhbmVsLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwtc3RydWN0dXJlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwtc3RydWN0dXJlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWNhcmQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWNhcmQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWV4cGFuZGFibGUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWV4cGFuZGFibGUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtaGVhZGVyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLWhlYWRlci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1wb3B1cC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1wb3B1cC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1yYWRpby1idXR0b24vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcmFkaW8tYnV0dG9uL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy9zY2FsZS1tYWluLXN0cnVjdHVyZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3NjYWxlLW1haW4tc3RydWN0dXJlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvdG9nZ2xlLWl0ZW0tY29udHJvbC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3RvZ2dsZS1pdGVtLWNvbnRyb2wuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NlbGVjdC1zc2QuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NlbGVjdC1zc2QuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NzZC1zZWFyY2guanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NzZC1zZWFyY2guanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaGFibGUtY2xpZW50LXNpZGUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoYWJsZS1jbGllbnQtc2lkZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtY3VzdG9tL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1jdXN0b20vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWluc2lkZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtaW5zaWRlL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlbGVjdC1zeXN0ZW0vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VsZWN0LXN5c3RlbS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC1jb250YWluZXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtY29udGFpbmVyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlQ2FyZC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmRQcm9ncmVzcy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmRQcm9ncmVzcy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUhvdmVyLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlSG92ZXIuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGUtbWVudS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaWRlLW1lbnUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2lkZWJhci9zaWRlYmFyLXN0cnVjdHVyZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZWJhci9zaWRlYmFyLXN0cnVjdHVyZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc21hbGwtYm94LXNlbGVjdGFibGUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc21hbGwtYm94LXNlbGVjdGFibGUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3Bpbm5lci1ob3Jpem9udGFsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItaG9yaXpvbnRhbC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLXZlcnRpY2FsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItdmVydGljYWwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3BsaXQtYnV0dG9uL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwbGl0LWJ1dHRvbi9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtY29tcG9uZW50LWJsb2NrL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1jb21wb25lbnQtYmxvY2svc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWxpc3QtbGluZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtbGlzdC1saW5lL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYmxlLWZvcm0vc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFibGUtZm9ybS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJzLWV4dGVuZGVkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnMtZXh0ZW5kZWQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1saXN0L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItbGlzdC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJ1bGFyLXNjcm9sbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJ1bGFyLXNjcm9sbC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90aW1lbGluZS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90aW1lbGluZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90cmlnZ2VyLWlmcmFtZS10b29sdGlwL3RyaWdnZXItaWZyYW1lLXRvb2x0aXAuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RyaWdnZXItaWZyYW1lLXRvb2x0aXAvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdHJ1bmNhdGVkLWNvbnRlbnQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdHJ1bmNhdGVkLWNvbnRlbnQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDgtcGFnZXMvY2xpbmljaWFuV29ya0FyZWEuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2NsaW5pY2lhbldvcmtBcmVhLmpzXCIsXG5cdFwiLi8wOC1wYWdlcy9lU2lnbmF0dXJlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9lU2lnbmF0dXJlLmpzXCIsXG5cdFwiLi8wOC1wYWdlcy9yZW1vdGVBcHBvaW50bWVudC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDgtcGFnZXMvcmVtb3RlQXBwb2ludG1lbnQuanNcIixcblx0XCIuL2dsb2JhbHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzL2dsb2JhbHMuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmpzJFwiOyIsIlNhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgPSB3aW5kb3cuU2FwcGhpcmVXaWRnZXRzIHx8IHt9O1xuIiwiLyogQ29tcG9uZW50IExheW91dEJhc2UgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IExheW91dEJhc2UoY29uZmlnKTtcclxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkID0gY29uZmlnLndpZGdldElkO1xyXG5cdH07XHJcblxyXG5cdHZhciBvcGVuU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XHJcblx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uud2lkZ2V0SWRdLm9wZW5TaWRlYmFySWZyYW1lKGR1cmF0aW9uKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgY2xvc2VTaWRlYmFySWZyYW1lID0gZnVuY3Rpb24oZHVyYXRpb24pIHtcclxuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuTGF5b3V0QmFzZS53aWRnZXRJZF0uY2xvc2VTaWRlYmFySWZyYW1lKGR1cmF0aW9uKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgc2Nyb2xsVG9FbGVtZW50ID0gZnVuY3Rpb24oJGVsZW1lbnQsIG9mZnNldCA9IDApIHtcclxuXHRcdHZhciAkdGFyZ2V0RWxlbWVudCA9ICRlbGVtZW50O1xyXG5cclxuXHRcdGlmICghISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHR2YXIgc2Nyb2xsVG9PZmZzZXRJbnRlcnZhbDtcclxuXHJcblx0XHRcdHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAod2luZG93W1NhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLndpZGdldElkXS5nZXRUaHJlc2hvbGRzKCkuc2Vjb25kYXJ5VGhyZXNob2xkID4gMCkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzY3JvbGxUb09mZnNldEludGVydmFsKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgdGFyZ2V0RWxlbWVudE9mZnNldFRvcCA9ICR0YXJnZXRFbGVtZW50Lm9mZnNldCgpLnRvcDtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBpc0ZpeGVkID0gJCgnLkxheW91dEJhc2Utc2Vjb25kYXJ5JykuaGFzQ2xhc3MoJ2lzRml4ZWQnKTtcclxuXHRcdFx0XHRcdGNvbnN0IGlzRW1lcmdlbmN5ID0gISEkKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKS50ZXh0KCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnLlNhcHBoaXJlSGVhZGVyJykuaGVpZ2h0KCk7XHJcblx0XHRcdFx0XHRjb25zdCBzZWNvbmRhcnlIZWlnaHQgPSAkKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnknKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHRcdFx0Y29uc3QgZW1lcmdlbmN5SGVpZ2h0ID0gaXNFbWVyZ2VuY3kgPyAkKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKS5oZWlnaHQoKSA6IDA7XHJcblxyXG5cdFx0XHRcdFx0Ly9jb25zdCBzZWNvbmRhcnlGaXhlZCA9IGlzRml4ZWQgPyBzZWNvbmRhcnlIZWlnaHQgOiBzZWNvbmRhcnlIZWlnaHQgLSAyNjtcclxuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnRPZmZzZXRUb3AgPSB0YXJnZXRFbGVtZW50T2Zmc2V0VG9wIC0gKGhlYWRlckhlaWdodCArIHNlY29uZGFyeUhlaWdodCArIGVtZXJnZW5jeUhlaWdodCk7XHJcblxyXG5cdFx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLnNjcm9sbFRvcCh0YXJnZXRFbGVtZW50T2Zmc2V0VG9wIC0gMTYpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMjUwKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgTGF5b3V0QmFzZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHRoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyID0gMDtcclxuXHRcdHRoaXMuaGFzSGVhZGVyID0gY29uZmlnLmhhc0hlYWRlcjtcclxuXHRcdHRoaXMuaXNFeHBhbmRhYmxlID0gY29uZmlnLmlzRXhwYW5kYWJsZTtcclxuXHRcdHRoaXMuaXNUb3BXaW5kb3cgPSB3aW5kb3cudG9wID09PSB3aW5kb3cuc2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcclxuXHRcdHRoaXMuJHdyYXBwZXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtV3JhcHBlcicpO1xyXG5cdFx0dGhpcy4kc3BhY2VyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXNwYWNlcicpO1xyXG5cdFx0dGhpcy4kbWFpbk1lbnUgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtTWFpbk1lbnUnKTtcclxuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1oZWFkZXInKTtcclxuXHRcdHRoaXMuJGhlYWRlckJvZHkgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWJvZHknKTtcclxuXHRcdHRoaXMuJHByaW1hcnlNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXByaW1hcnktbWVudScpO1xyXG5cdFx0dGhpcy4kZW1lcmdlbmN5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLWVtZXJnZW5jeScpO1xyXG5cdFx0dGhpcy4kc2Vjb25kYXJ5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXNlY29uZGFyeScpO1xyXG5cdFx0dGhpcy4kc2Vjb25kYXJ5TWVudSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnktbWVudScpO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyJyk7XHJcblx0XHR0aGlzLiRoZWFkZXJBZGRpdGlvbmFsQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWRkaXRpb25hbC1jb250ZW50Jyk7XHJcblx0XHR0aGlzLiR0b3BmaXhlZENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtdG9wZml4ZWRjb250ZW50Jyk7XHJcblx0XHR0aGlzLiRib3R0b21maXhlZENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtYm90dG9tZml4ZWRjb250ZW50Jyk7XHJcblx0XHR0aGlzLiRtYWluQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1NYWluQ29udGVudCcpO1xyXG5cdFx0dGhpcy5leHRyYVBhZGRpbmdFbWVyZ2VuY3kgPSAwO1xyXG5cdFx0dGhpcy5leHRyYVBhZGRpbmdTZWNvbmRhcnkgPSAwO1xyXG5cdFx0dGhpcy5zZXR1cFdpbmRvd0V2ZW50cygpO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsZHMtcmluZyAxXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ0xheW91dEJhc2UnKTtcclxuXHRcdFx0aWYgKF90aGlzLmlzVG9wV2luZG93KSB7XHJcblx0XHRcdFx0JCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5jbGljaygpO1xyXG5cdFx0XHQkKHdpbmRvdykuc2Nyb2xsKCk7XHJcblxyXG5cdFx0XHRfdGhpcy4kaWZyYW1lU2lkZWJhci5maW5kKCcubGRzLXJpbmcnKS5mYWRlT3V0KCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5zZXR1cFdpbmRvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHZhciBjdXJzb3JQb3NpdG9uID0gMDtcclxuXHJcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfdGhpcy51cGRhdGVUaHJlc2hvbGRzKCk7XHJcblx0XHRcdF90aGlzLmhhbmRsZU9wdGlvbmFsQ29udGFpbmVycygpO1xyXG5cdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRUb3BQYWRkaW5nKCk7XHJcblx0XHRcdF90aGlzLmhhbmRsZUxheW91dEJvdHRvbVBhZGRpbmcoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBuZXdQb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoX3RoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyKTtcclxuXHRcdFx0X3RoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0X3RoaXMudXBkYXRlVGhyZXNob2xkcygpO1xyXG5cdFx0XHRcdF90aGlzLmhhbmRsZU9wdGlvbmFsQ29udGFpbmVycygpO1xyXG5cdFx0XHRcdF90aGlzLmhhbmRsZUxheW91dFRvcFBhZGRpbmcoKTtcclxuXHRcdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRCb3R0b21QYWRkaW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuaGFuZGxlTWFuYWdlUXVldWVDYXJkKGN1cnNvclBvc2l0b24sIG5ld1Bvc2l0aW9uKTtcclxuXHRcdFx0XHRjdXJzb3JQb3NpdG9uID0gbmV3UG9zaXRpb247XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5oYW5kbGVPcHRpb25hbENvbnRhaW5lcnMgPSBmdW5jdGlvbigpIHtcclxuXHRcdC8qY29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0Y29uc3QgaXNFbWVyZ2VuY3kgPSAhISQoJy5MYXlvdXRCYXNlLWVtZXJnZW5jeScpLnRleHQoKTsqL1xyXG5cdH07XHJcblxyXG5cdExheW91dEJhc2UucHJvdG90eXBlLmhhbmRsZUxheW91dFRvcFBhZGRpbmcgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBwYWRkaW5nVG9wID0gdGhpcy5jb250ZW50VGhyZXNob2xkICsgdGhpcy5leHRyYVBhZGRpbmdFbWVyZ2VuY3kgKyB0aGlzLmV4dHJhUGFkZGluZ1NlY29uZGFyeTtcclxuXHRcdHRoaXMuJHNwYWNlci5zdG9wKCkuYW5pbWF0ZShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlaWdodDogcGFkZGluZ1RvcCxcclxuXHRcdFx0fSxcclxuXHRcdFx0MCxcclxuXHRcdFx0J2xpbmVhcidcclxuXHRcdCk7XHJcblx0XHRpZiAodGhpcy4kdG9wZml4ZWRDb250ZW50Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLiR0b3BmaXhlZENvbnRlbnQuY3NzKHtcclxuXHRcdFx0XHR3aWR0aDogJCgnLkxheW91dEJhc2UtTWFpbkNvbnRlbnQnKS53aWR0aCgpLFxyXG5cdFx0XHRcdHRvcDogdGhpcy50b3BmaXhlZENvbnRlbnRUaHJlc2hvbGQgKyAncHgnLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5oYW5kbGVMYXlvdXRCb3R0b21QYWRkaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodGhpcy4kYm90dG9tZml4ZWRDb250ZW50Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRpZiAoJCgnYm9keScpWzBdLnNjcm9sbEhlaWdodCA+ICQoJ2JvZHknKS5oZWlnaHQoKSkge1xyXG5cdFx0XHRcdHZhciBib3R0b21GaXhlZEhlaWdodCA9IHRoaXMuJGJvdHRvbWZpeGVkQ29udGVudC5vdXRlckhlaWdodCh0cnVlKTtcclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLmFkZENsYXNzKCdoYXNGaXhlZEJvdHRvbScpLmNzcygncGFkZGluZy1ib3R0b20nLCBib3R0b21GaXhlZEhlaWdodCArICdweCcpO1xyXG5cdFx0XHRcdHRoaXMuJGJvdHRvbWZpeGVkQ29udGVudC5jc3Moe1xyXG5cdFx0XHRcdFx0d2lkdGg6ICQoJy5MYXlvdXRCYXNlLU1haW5Db250ZW50Jykub3V0ZXJXaWR0aCh0cnVlKSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLnJlbW92ZUNsYXNzKCdoYXNGaXhlZEJvdHRvbScpLmNzcygncGFkZGluZy1ib3R0b20nLCAnJyk7XHJcblx0XHRcdFx0dGhpcy4kYm90dG9tZml4ZWRDb250ZW50LmNzcyh7XHJcblx0XHRcdFx0XHR3aWR0aDogJycsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS51cGRhdGVUaHJlc2hvbGRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbWFpbk1lbnVIZWlnaHQgPSB0aGlzLiRtYWluTWVudS5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0dmFyIGhlYWRlckJvZHlIZWlnaHQgPSB0aGlzLiRoZWFkZXJCb2R5Lm91dGVySGVpZ2h0KHRydWUpIHx8IHRoaXMuJGhlYWRlci5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0dmFyIHRvcGZpeGVkQ29udGVudEhlaWdodCA9IHRoaXMuJHRvcGZpeGVkQ29udGVudC5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xyXG5cdFx0dmFyIHByaW1hcnlNZW51SGVpZ2h0ID0gdGhpcy4kcHJpbWFyeU1lbnUub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdHZhciBlbWVyZ2VuY3lIZWlnaHQgPSB0aGlzLiRlbWVyZ2VuY3kub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcclxuXHRcdHRoaXMudG9wZml4ZWRDb250ZW50VGhyZXNob2xkID0gbWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0O1xyXG5cdFx0dGhpcy5jb250ZW50VGhyZXNob2xkID0gbWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0ICsgdG9wZml4ZWRDb250ZW50SGVpZ2h0O1xyXG5cdFx0dGhpcy5lbWVyZ2VuY3lUaHJlc2hvbGQgPSBtYWluTWVudUhlaWdodCArIGhlYWRlckJvZHlIZWlnaHQgKyB0b3BmaXhlZENvbnRlbnRIZWlnaHQgKyBwcmltYXJ5TWVudUhlaWdodDtcclxuXHRcdHRoaXMuc2Vjb25kYXJ5VGhyZXNob2xkID1cclxuXHRcdFx0bWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0ICsgdG9wZml4ZWRDb250ZW50SGVpZ2h0ICsgcHJpbWFyeU1lbnVIZWlnaHQgKyBlbWVyZ2VuY3lIZWlnaHQ7XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuZ2V0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dG9wZml4ZWRDb250ZW50VGhyZXNob2xkOiB0aGlzLnRvcGZpeGVkQ29udGVudFRocmVzaG9sZCxcclxuXHRcdFx0Y29udGVudFRocmVzaG9sZDogdGhpcy5jb250ZW50VGhyZXNob2xkLFxyXG5cdFx0XHRlbWVyZ2VuY3lUaHJlc2hvbGQ6IHRoaXMuZW1lcmdlbmN5VGhyZXNob2xkLFxyXG5cdFx0XHRzZWNvbmRhcnlUaHJlc2hvbGQ6IHRoaXMuc2Vjb25kYXJ5VGhyZXNob2xkLFxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5vcGVuU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uX2luKSB7XHJcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbl9pbiA+PSAwID8gZHVyYXRpb25faW4gOiAxMDA7XHJcblx0XHR0aGlzLiRpZnJhbWVTaWRlYmFyLmFuaW1hdGUoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvblxyXG5cdFx0KTtcclxuXHRcdCQoJ2JvZHknKVxyXG5cdFx0XHQuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpXHJcblx0XHRcdC5jbGljaygpO1xyXG5cdH07XHJcblxyXG5cdExheW91dEJhc2UucHJvdG90eXBlLmNsb3NlU2lkZWJhcklmcmFtZSA9IGZ1bmN0aW9uKGR1cmF0aW9uX2luKSB7XHJcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbl9pbiA+PSAwID8gZHVyYXRpb25faW4gOiAxMDA7XHJcblx0XHR2YXIgdGFyZ2V0V2lkdGggPSB0aGlzLmlzRXhwYW5kYWJsZSA/IDQwIDogMjYyO1xyXG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhci5hbmltYXRlKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2lkdGg6IHRhcmdldFdpZHRoLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvblxyXG5cdFx0KTtcclxuXHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XHJcblx0fTtcclxuXHJcblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuaGFuZGxlTWFuYWdlUXVldWVDYXJkID0gZnVuY3Rpb24oY3Vyc29yUG9zaXRvbiwgbmV3UG9zaXRpb24pIHtcclxuXHRcdGNvbnN0ICRtYW5hZ2VRdWV1ZSA9ICQoJy5NYW5hZ2VRdWV1ZUNvbnRhaW5lcicpO1xyXG5cclxuXHRcdGlmICgkbWFuYWdlUXVldWUubGVuZ3RoKSB7XHJcblx0XHRcdGlmIChuZXdQb3NpdGlvbiA+IGN1cnNvclBvc2l0b24pIHtcclxuXHRcdFx0XHQkbWFuYWdlUXVldWUuYWRkQ2xhc3MoJ01hbmFnZVF1ZXVlQ29udGFpbmVyLS1jbG9zZWQnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChuZXdQb3NpdGlvbiA8IGN1cnNvclBvc2l0b24pIHtcclxuXHRcdFx0XHQkbWFuYWdlUXVldWUucmVtb3ZlQ2xhc3MoJ01hbmFnZVF1ZXVlQ29udGFpbmVyLS1jbG9zZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdFx0Y2xvc2VTaWRlYmFySWZyYW1lLFxyXG5cdFx0b3BlblNpZGViYXJJZnJhbWUsXHJcblx0XHRzY3JvbGxUb0VsZW1lbnQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgTGF5b3V0QmxhbmsgKi9cbiQoZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuXHRcdGlmICghISQodGhpcy5mcmFtZUVsZW1lbnQpLmNsb3Nlc3QoJy5NYWluSW50ZXJhY3RpdmVDYXJkJykubGVuZ3RoKSB7XG5cdFx0XHQkKCcuTGF5b3V0QmxhbmsuUGFnZScpLmFkZENsYXNzKCdNYWluSW50ZXJhY3RpdmVDYXJkJyk7XG5cdFx0fVxuXHR9XG59KTsiLCIoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IEZvcndhcmRQYXRpZW50Q29tcG9uZW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRhbGxPcHRpb25zID0gJCgnLkZvcndhcmRMb2NhdGlvbnNDb250ZW50Jyk7XG5cdFx0Y29uc3QgJG11bHRpcGxlID0gJCgnLkZvcndhcmRMb2NhdGlvbnNEaXYnKTtcblx0XHRjb25zdCAkc2luZ2xlID0gJCgnLlNpbmdsZUxvY2F0aW9uJyk7XG5cblx0XHQkKCdib2R5JykubW91c2V1cChmdW5jdGlvbihlKSB7XG5cdFx0XHRjb25zdCBub3RDbGlja0luQWxsT3B0aW9ucyA9ICEkYWxsT3B0aW9ucy5pcyhlLnRhcmdldCkgJiYgJGFsbE9wdGlvbnMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XG5cdFx0XHRjb25zdCBub3RDbGlja0luTXVsdGlwbGUgPSAhJG11bHRpcGxlLmlzKGUudGFyZ2V0KSAmJiAkbXVsdGlwbGUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XG5cdFx0XHRjb25zdCBub3RDbGlja0luU2luZ2xlID0gISRzaW5nbGUuaXMoZS50YXJnZXQpICYmICRzaW5nbGUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XG5cdFx0XHRjb25zdCBpc09wZW4gPSAkbXVsdGlwbGUuaXMoJzp2aXNpYmxlJyk7XG5cblx0XHRcdGlmIChub3RDbGlja0luQWxsT3B0aW9ucyAmJiBub3RDbGlja0luTXVsdGlwbGUgJiYgbm90Q2xpY2tJblNpbmdsZSAmJiBpc09wZW4pIHtcblx0XHRcdFx0JG11bHRpcGxlLmNsaWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkxheW91dEVtZXJnZW5jeSA9IHtcblx0XHRGb3J3YXJkUGF0aWVudENvbXBvbmVudCxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBMYXlvdXRQb3B1cCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XHJcblx0dmFyIHBvcHVwV2lkdGg7XHJcblx0dmFyIHBvcHVwTWluV2lkdGg7XHJcblx0dmFyIHBvcHVwSGVpZ2h0O1xyXG5cdHZhciBwb3B1cE1pbkhlaWdodDtcclxuXHR2YXIgcG9wdXBNYXhIZWlnaHQ7XHJcblx0dmFyIHBvcHVwV2lkdGhQZXJjZW50YWdlO1xyXG5cdHZhciBsYXlvdXRQb3B1cFJlc2l6ZVRpbWVyO1xyXG5cclxuXHR2YXIgJHBvcHVwID0gJCgnLkxheW91dFBvcHVwJyk7XHJcblx0dmFyICRvc1BvcHVwID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtUG9wdXAub3MtaW50ZXJuYWwtdWktZGlhbG9nJyk7XHJcblx0dmFyICRvc1BvcHVwQ29udGVudCA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Lm9zLWludGVybmFsLXVpLXdpZGdldC1jb250ZW50Jyk7XHJcblx0dmFyICRvdmVybGF5ID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtdWktd2lkZ2V0LW92ZXJsYXknKTtcclxuXHR2YXIgcG9wdXBTaXplO1xyXG5cdHZhciBwYWRkaW5nQm9keTtcclxuXHJcblx0Y29uc3QgQk9EWV9QQURESU5HX1RPUF9CT1RUT00gPSAzMjtcclxuXHJcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0cG9wdXBTaXplID0gU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5Qb3B1cFNpemU7XHJcblx0XHRwYWRkaW5nQm9keSA9IGNvbmZpZy5ub0NvbnRlbnRQYWRkaW5nID8gMCA6IEJPRFlfUEFERElOR19UT1BfQk9UVE9NO1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnTGF5b3V0UG9wdXAnKTsgLy8gYmVjYXVzZSBkYXRldGltZXJhbmdlcGlja2VyIGlzIGF0dGFjaGVkIHRvIGJvZHlcclxuXHJcblx0XHRcdGlmIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzVG91Y2gpIHtcclxuXHRcdFx0XHQkcG9wdXAuYWRkQ2xhc3MoJ2lzVG91Y2gnKTtcclxuXHRcdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2lzVG91Y2gnKTsgLy8gYmVjYXVzZSBzZWxlY3QyIGlzIGF0dGFjaGVkIHRvIGJvZHlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XHJcblx0XHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24obXV0YXRpb24sIGluZGV4KSB7XHJcblx0XHRcdFx0XHQvLyBBdm9pZCB0byByZWRyYXcgdGhlIGRpYWxvZyBpZiBpdCBpcyBvbmUgdGhlIGZvbGxvd2luZyBwb3B1cHNcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlBvcHVwc1RvQXZvaWRNdXRhdGlvbnMgJiZcclxuXHRcdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlBvcHVwc1RvQXZvaWRNdXRhdGlvbnMuc29tZShlID0+ICQoYC4ke2V9YCkubGVuZ3RoKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZWRyYXdEaWFsb2dXaW5kb3coKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuXHRcdFx0XHRjaGlsZExpc3Q6IHRydWUsXHJcblx0XHRcdFx0c3VidHJlZTogdHJ1ZSxcclxuXHRcdFx0XHRhdHRyaWJ1dGVzOiBmYWxzZSxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCdib2R5JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcy5mcmFtZUVsZW1lbnQpLmNzcyh7XHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJlc2l6ZURpYWxvZygpO1xyXG5cdFx0XHRcdHJlc2l6ZUNvbnRlbnQoKTtcclxuXHRcdFx0XHQkKCdib2R5JykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0fSwgMTUwKTtcclxuXHJcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLnJlZHJhd0RpYWxvZ1dpbmRvdyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdy5wYXJlbnQpXHJcblx0XHRcdC5vZmYoJ3Jlc2l6ZS5MYXlvdXRQb3B1cCcpXHJcblx0XHRcdC5vbigncmVzaXplLkxheW91dFBvcHVwJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmVkcmF3RGlhbG9nV2luZG93KCk7XHJcblx0XHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlZHJhd0RpYWxvZ1dpbmRvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KGxheW91dFBvcHVwUmVzaXplVGltZXIpO1xyXG5cdFx0bGF5b3V0UG9wdXBSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlc2l6ZURpYWxvZygpO1xyXG5cdFx0XHRyZXNpemVDb250ZW50KCk7XHJcblx0XHRcdCQoJ2JvZHknKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0fSwgMzAwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZXNpemVEaWFsb2cgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmhhc0Nsb3NlKSB7XHJcblx0XHRcdHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy10aXRsZWJhcicpLnNob3coKTtcclxuXHJcblx0XHRcdGlmICh3aW5kb3cudG9wLl9pZnJhbWVQb3B1cCAhPSB1bmRlZmluZWQgfHwgZmFsc2UpIHtcclxuXHRcdFx0XHRjb25zdCAkY2xvc2VCdXR0b24gPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXItY2xvc2UnKTtcclxuXHJcblx0XHRcdFx0JGNsb3NlQnV0dG9uLnJlbW92ZUF0dHIoJ2hyZWYnKTtcclxuXHRcdFx0XHQkY2xvc2VCdXR0b24ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsICgpID0+IHdpbmRvdy50b3AuX2lmcmFtZVBvcHVwLlNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwLmNsb3NlKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHdpbmRvdy50b3AuJCgnYm9keScpLmhhc0NsYXNzKCdMYXlvdXRCYXNlJykpIHtcclxuXHRcdFx0d2luZG93LnRvcC4kKCdib2R5JykuY3NzKHtcclxuXHRcdFx0XHRvdmVyZmxvd1k6ICdoaWRkZW4nLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQkb3ZlcmxheS53aWR0aCgnMTAwJScpO1xyXG5cclxuXHRcdGNhbGNXaWR0aFBlcmNlbnRhZ2UocG9wdXBTaXplLCAkb3NQb3B1cENvbnRlbnQpO1xyXG5cclxuXHRcdCRvc1BvcHVwLmNzcyh7XHJcblx0XHRcdGxlZnQ6ICd1bnNldCcsXHJcblx0XHRcdHRvcDogJ3Vuc2V0JyxcclxuXHRcdFx0aGVpZ2h0OiAnYXV0bycsXHJcblx0XHRcdG1pbldpZHRoOiBwb3B1cE1pbldpZHRoICsgJ3B4JyxcclxuXHRcdFx0d2lkdGg6IHBvcHVwV2lkdGggKyAncHgnLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVzaXplQ29udGVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyICRib2R5ID0gJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50Jyk7XHJcblx0XHR2YXIgY29udGVudFNjcm9sbFRvcCA9ICRib2R5LnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdGlmIChwb3B1cFNpemUgPT09ICdTbWFsbCcgJiYgJCgnLmRhdGVyYW5nZXBpY2tlcjp2aXNpYmxlJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQvLyBza2lwIHRoZSByZXNldCBvZiAuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRib2R5LmNzcyh7XHJcblx0XHRcdFx0aGVpZ2h0OiAnYXV0bycsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBib2R5Q29udGVudCA9IHBhZGRpbmdCb2R5XHJcblx0XHRcdD8gJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JylbMF0uc2Nyb2xsSGVpZ2h0XHJcblx0XHRcdDogJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JykuaGVpZ2h0KCk7XHJcblxyXG5cdFx0dmFyIGhlYWRlckhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9faGVhZGVyJykuaW5uZXJIZWlnaHQoKSB8fCAwO1xyXG5cdFx0dmFyIGludHJvSGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19pbnRybycpLmlubmVySGVpZ2h0KCkgfHwgMDtcclxuXHRcdHZhciBib2R5SGVpZ2h0ID0gYm9keUNvbnRlbnQgfHwgMDtcclxuXHRcdHZhciBmb290ZXJIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2Zvb3RlcicpLmlubmVySGVpZ2h0KCkgfHwgMDtcclxuXHRcdHZhciBjb250ZW50SGVpZ2h0ID0gaGVhZGVySGVpZ2h0ICsgaW50cm9IZWlnaHQgKyBib2R5SGVpZ2h0ICsgZm9vdGVySGVpZ2h0ICsgcGFkZGluZ0JvZHk7XHJcblx0XHR2YXIgZGlhbG9nSGVpZ2h0ID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtUG9wdXAub3MtaW50ZXJuYWwtdWktZGlhbG9nJykub3V0ZXJIZWlnaHQoKTtcclxuXHRcdGNvbnN0IHdpbmRvd0hlaWdodCA9ICQod2luZG93LnBhcmVudCkuaGVpZ2h0KCk7XHJcblxyXG5cdFx0aWYgKHBvcHVwU2l6ZSA9PT0gJ1NtYWxsJykge1xyXG5cdFx0XHR2YXIgcGFyZW50SGVpZ2h0ID0gJCh3aW5kb3cucGFyZW50KS5oZWlnaHQoKTtcclxuXHJcblx0XHRcdGlmIChjb250ZW50SGVpZ2h0ID4gcGFyZW50SGVpZ2h0KSB7XHJcblx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodChwYXJlbnRIZWlnaHQgLSA3MCk7XHJcblx0XHRcdFx0JGJvZHkuaGVpZ2h0KCRvc1BvcHVwQ29udGVudC5oZWlnaHQoKSAtIHBhZGRpbmdCb2R5KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KGNvbnRlbnRIZWlnaHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoY29udGVudEhlaWdodCA8IGRpYWxvZ0hlaWdodCAmJiBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzRml4ZWRIZWlnaHQpIHtcclxuXHRcdFx0XHR2YXIgZm9yY2VkQm9keUhlaWdodCA9IGRpYWxvZ0hlaWdodCAtIGhlYWRlckhlaWdodCAtIGludHJvSGVpZ2h0IC0gZm9vdGVySGVpZ2h0IC0gcGFkZGluZ0JvZHk7XHJcblx0XHRcdFx0JGJvZHkuaGVpZ2h0KGZvcmNlZEJvZHlIZWlnaHQpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRlbnRIZWlnaHQgPCBkaWFsb2dIZWlnaHQpIHtcclxuXHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KGNvbnRlbnRIZWlnaHQpO1xyXG5cdFx0XHRcdGlmIChjb250ZW50SGVpZ2h0IDwgcG9wdXBNaW5IZWlnaHQpIHtcclxuXHRcdFx0XHRcdHZhciBkaWZlcmVuY2UgPSBwb3B1cE1pbkhlaWdodCAtIGNvbnRlbnRIZWlnaHQ7XHJcblx0XHRcdFx0XHQkYm9keS5oZWlnaHQoYm9keUhlaWdodCArIGRpZmVyZW5jZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRlbnRIZWlnaHQgPj0gZGlhbG9nSGVpZ2h0ICYmIFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNGaXhlZEhlaWdodCkge1xyXG5cdFx0XHRcdHZhciBmb3JjZWRCb2R5SGVpZ2h0ID0gZGlhbG9nSGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gaW50cm9IZWlnaHQgLSBmb290ZXJIZWlnaHQgLSBwYWRkaW5nQm9keTtcclxuXHRcdFx0XHQkYm9keS5oZWlnaHQoZm9yY2VkQm9keUhlaWdodCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoY29udGVudEhlaWdodCA+PSBkaWFsb2dIZWlnaHQpIHtcclxuXHRcdFx0XHRpZiAoY29udGVudEhlaWdodCA+IHBvcHVwTWF4SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KHBvcHVwTWF4SGVpZ2h0KTtcclxuXHRcdFx0XHRcdHZhciBmb3JjZWRCb2R5SGVpZ2h0ID0gcG9wdXBNYXhIZWlnaHQgLSBoZWFkZXJIZWlnaHQgLSBpbnRyb0hlaWdodCAtIGZvb3RlckhlaWdodCAtIHBhZGRpbmdCb2R5O1xyXG5cdFx0XHRcdFx0JGJvZHkuaGVpZ2h0KGZvcmNlZEJvZHlIZWlnaHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KGNvbnRlbnRIZWlnaHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1VuZXhwZWN0ZWQgY29tYmluYXRpb24uLi4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEhhbmRsZSB3aGVuIERhdGVUaW1lUmFuZ2VQaWNrZXIgaXMgb3BlbmVkXHJcblx0XHR2YXIgZGF0ZVJhbmdlUGlja2VyID0gJCgnLmRhdGVyYW5nZXBpY2tlcjp2aXNpYmxlJyk7XHJcblx0XHRpZiAoZGF0ZVJhbmdlUGlja2VyLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRpZiAoZGF0ZVJhbmdlUGlja2VyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IGRpYWxvZ0hlaWdodCkge1xyXG5cdFx0XHRcdHZhciBkaWZmZXJlbmNlID0gZGF0ZVJhbmdlUGlja2VyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIGRpYWxvZ0hlaWdodDtcclxuXHRcdFx0XHR2YXIgYm9keUhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuXHRcdFx0XHQkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKS5oZWlnaHQoYm9keUhlaWdodCArIGRpZmZlcmVuY2UgKyBwYWRkaW5nQm9keSk7XHJcblx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodCgkKCdib2R5JylbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0Y29uc3QgcG9wdXBUb3RhbEhlaWdodCA9ICRvc1BvcHVwQ29udGVudC5oZWlnaHQoKTtcclxuXHRcdFx0XHRjb25zdCBuZXdDb250ZW50SGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19ib2R5Jykub3V0ZXJIZWlnaHQodHJ1ZSkgKyBoZWFkZXJIZWlnaHQgKyBpbnRyb0hlaWdodCArIGZvb3RlckhlaWdodDtcclxuXHJcblx0XHRcdFx0aWYgKHdpbmRvd0hlaWdodCA8IDcyMCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgY29vcmRzID0gZGF0ZVJhbmdlUGlja2VyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0dmFyIHBvaW50ID0gd2luZG93LnBhcmVudC5zY3JvbGxZICsgY29vcmRzLnRvcCAtIGNvb3Jkcy5oZWlnaHQ7XHJcblx0XHRcdFx0XHRkYXRlUmFuZ2VQaWNrZXIuYWRkQ2xhc3MoJ2Ryb3AtdXAnKS5jc3MoJ3RvcCcsIHBvaW50KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHdpbmRvd0hlaWdodCA8IDk4MCAmJiBuZXdDb250ZW50SGVpZ2h0ID4gcG9wdXBUb3RhbEhlaWdodCkge1xyXG5cdFx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmNzcyh7XHJcblx0XHRcdFx0XHRcdG1heEhlaWdodDogbmV3Q29udGVudEhlaWdodCArICdweCcsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQkYm9keS5zY3JvbGxUb3AoY29udGVudFNjcm9sbFRvcCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaW5jcmVhc2VIZWlnaHQgPSBmdW5jdGlvbihkaWZlcmVuY2UpIHtcclxuXHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoJG9zUG9wdXBDb250ZW50LmhlaWdodCgpICsgZGlmZXJlbmNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzY3JvbGxUb0VsZW1lbnQgPSBmdW5jdGlvbigkZWxlbWVudCkge1xyXG5cdFx0dmFyICR0YXJnZXRFbGVtZW50ID0gJGVsZW1lbnQ7XHJcblx0XHRpZiAoISEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWw7XHJcblx0XHRcdHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWwpO1xyXG5cdFx0XHRcdHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2hlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XHJcblx0XHRcdFx0dmFyIGludHJvSGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19pbnRybycpLm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRCb2R5U2Nyb2xsID0gJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JylbMF0uc2Nyb2xsVG9wIHx8IDA7XHJcblx0XHRcdFx0dmFyIHRhcmdldEVsZW1lbnRPZmZzZXRUb3AgPSAkdGFyZ2V0RWxlbWVudC5vZmZzZXQoKS50b3AgLSBoZWFkZXJIZWlnaHQgLSBpbnRyb0hlaWdodCArIGN1cnJlbnRCb2R5U2Nyb2xsIC0gMjA7XHJcblx0XHRcdFx0JCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50Jykuc2Nyb2xsVG9wKHRhcmdldEVsZW1lbnRPZmZzZXRUb3ApO1xyXG5cdFx0XHR9LCAyNTApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNhbGNXaWR0aFBlcmNlbnRhZ2UgPSAoKSA9PiB7XHJcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdy5wYXJlbnQpLmhlaWdodCgpO1xyXG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdy5wYXJlbnQpLndpZHRoKCk7XHJcblxyXG5cdFx0aWYgKHBvcHVwU2l6ZSA9PT0gJ1NtYWxsJykge1xyXG5cdFx0XHRsZXQgcGVyY2VudGFnZSA9IDAuMzM7XHJcblxyXG5cdFx0XHRpZiAod2luZG93V2lkdGggPD0gMTAyNCkgcGVyY2VudGFnZSA9IDAuNTtcclxuXHRcdFx0ZWxzZSBpZiAod2luZG93V2lkdGggPiAxMDI0ICYmIHdpbmRvd1dpZHRoIDw9IDE0NDApIHBlcmNlbnRhZ2UgPSAwLjQ7XHJcblxyXG5cdFx0XHRwb3B1cFdpZHRoID0gcGFyc2VJbnQod2luZG93V2lkdGggKiBwZXJjZW50YWdlKTtcclxuXHRcdFx0cG9wdXBNaW5XaWR0aCA9IDQwMDtcclxuXHRcdH0gZWxzZSBpZiAocG9wdXBTaXplID09PSAnTWVkaXVtJykge1xyXG5cdFx0XHRpZiAod2luZG93V2lkdGggPD0gMTAyNCkgcG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjg7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHN3aXRjaCAoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5Qb3B1cFdpZHRoKSB7XHJcblx0XHRcdFx0XHRjYXNlICdYU21hbGwnOlxyXG5cdFx0XHRcdFx0XHRwb3B1cE1pbldpZHRoID0gMjAwO1xyXG5cdFx0XHRcdFx0XHRwb3B1cFdpZHRoUGVyY2VudGFnZSA9IDAuMjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdTbWFsbCc6XHJcblx0XHRcdFx0XHRcdHBvcHVwTWluV2lkdGggPSAzMDA7XHJcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC4zO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ01lZGl1bSc6XHJcblx0XHRcdFx0XHRcdHBvcHVwTWluV2lkdGggPSA3MDA7XHJcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC42O1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHBvcHVwTWluV2lkdGggPSA3MDA7XHJcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC43O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzVG91Y2ggPyAwLjggOiBwb3B1cFdpZHRoUGVyY2VudGFnZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cG9wdXBXaWR0aCA9IHBhcnNlSW50KHdpbmRvd1dpZHRoICogcG9wdXBXaWR0aFBlcmNlbnRhZ2UpO1xyXG5cdFx0XHRwb3B1cE1pbkhlaWdodCA9IDEwMDtcclxuXHRcdFx0cG9wdXBNYXhIZWlnaHQgPSBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzVG91Y2hcclxuXHRcdFx0XHQ/IHBhcnNlSW50KHdpbmRvd0hlaWdodCAqIDAuOSlcclxuXHRcdFx0XHQ6IHBhcnNlSW50KHdpbmRvd0hlaWdodCAqIDAuNyk7XHJcblxyXG5cdFx0XHRpZiAoU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc0ZpeGVkSGVpZ2h0KSBwb3B1cEhlaWdodCA9IHBvcHVwTWF4SGVpZ2h0O1xyXG5cdFx0XHRlbHNlIHBvcHVwSGVpZ2h0ID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtUG9wdXAub3MtaW50ZXJuYWwtdWktZGlhbG9nJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0XHRcdCRvc1BvcHVwQ29udGVudC5jc3Moe1xyXG5cdFx0XHRcdG1heEhlaWdodDogcG9wdXBNYXhIZWlnaHQgKyAncHgnLFxyXG5cdFx0XHRcdG1pbkhlaWdodDogcG9wdXBNaW5IZWlnaHQgKyAncHgnLFxyXG5cdFx0XHRcdGhlaWdodDogcG9wdXBIZWlnaHQgKyAncHgnLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAocG9wdXBTaXplID09PSAnTGFyZ2UnKSB7XHJcblx0XHRcdHBvcHVwTWluV2lkdGggPSBwYXJzZUludCh3aW5kb3dXaWR0aCAqIDAuOCk7XHJcblx0XHRcdHBvcHVwTWF4SGVpZ2h0ID0gcGFyc2VJbnQod2luZG93SGVpZ2h0ICogMC45KTtcclxuXHRcdH0gZWxzZSBpZiAocG9wdXBTaXplID09PSAnRml4ZWQnKSB7XHJcblx0XHRcdHBvcHVwV2lkdGggPSBTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQb3B1cC5wb3B1cFdpZHRoO1xyXG5cdFx0XHRwb3B1cE1pbldpZHRoID0gU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAucG9wdXBXaWR0aDtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0XHRyZXNpemVEaWFsb2csXHJcblx0XHRyZXNpemVDb250ZW50LFxyXG5cdFx0aW5jcmVhc2VIZWlnaHQsXHJcblx0XHRyZWRyYXdEaWFsb2dXaW5kb3csXHJcblx0XHRzY3JvbGxUb0VsZW1lbnQsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG5cclxuJCh3aW5kb3cpLnVubG9hZChmdW5jdGlvbigpIHtcclxuXHRpZiAoISEkKCcuTGF5b3V0UG9wdXAnKS5sZW5ndGgpIHtcclxuXHRcdHdpbmRvdy50b3AuJCgnYm9keScpLmNzcyh7XHJcblx0XHRcdG92ZXJmbG93WTogJ3Njcm9sbCcsXHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG4iLCIvKiBDb21wb25lbnQgQWN0aW9uc01lbnUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyICR0cmlnZ2VyRWxlbWVudCA9ICQoJyMnICsgY29uZmlnLnRyaWdnZXJFbGVtZW50KTtcblx0XHR2YXIgJGNvbnRlbnRFbGVtZW50ID0gJCgnIycgKyBjb25maWcuY29udGVudEVsZW1lbnQpO1xuXG5cdFx0aWYgKCRjb250ZW50RWxlbWVudC50ZXh0KCkubGVuZ3RoIDwgMSkge1xuXHRcdFx0JHRyaWdnZXJFbGVtZW50LmhpZGUoKTtcblx0XHR9XG5cblx0XHQkKGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gaW5zaWRlIGEgZG9jdW1lbnQgcmVhZHkgZHVlIHRvIHNhcHBoaXJlIHBvcHVwIGJpbmRlZCBldmVudHNcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG5cdFx0XHRcdGlmIChjb25maWcubG9jYWxlID09PSAnQVInKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjb25maWcucG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAnbGVmdCc7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ3JpZ2h0Jztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdib3R0b20tbGVmdCc6XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ2JvdHRvbS1yaWdodCc7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnYm90dG9tLXJpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAnYm90dG9tLWxlZnQnO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3RvcC1sZWZ0Jzpcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAndG9wLXJpZ2h0Jztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICd0b3AtcmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICd0b3AtbGVmdCc7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQkdHJpZ2dlckVsZW1lbnQudG9vbHRpcHN0ZXIoe1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICQoJzxzZWN0aW9uLz4nKS5hcHBlbmQoJGNvbnRlbnRFbGVtZW50LmNsb25lKHRydWUsIHRydWUpKSxcblx0XHRcdFx0XHR0cmlnZ2VyOiBjb25maWcudHJpZ2dlckV2ZW50LFxuXHRcdFx0XHRcdHBvc2l0aW9uOiBwb3NpdGlvbixcblx0XHRcdFx0XHRtYXhXaWR0aDogY29uZmlnLm1heFdpZHRoLFxuXHRcdFx0XHRcdHRoZW1lOlxuXHRcdFx0XHRcdFx0J3Rvb2x0aXBzdGVyLWxvY2F0aW9uLS0nICtcblx0XHRcdFx0XHRcdGNvbmZpZy5sb2NhdGlvbiArXG5cdFx0XHRcdFx0XHQnIEFjdGlvbnNNZW51LXRvb2x0aXAgUGFkZGluZy0tJyArXG5cdFx0XHRcdFx0XHRjb25maWcucGFkZGluZyArXG5cdFx0XHRcdFx0XHQnIEJvcmRlci0tJyArXG5cdFx0XHRcdFx0XHRjb25maWcuYm9yZGVyLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JGNvbnRlbnRFbGVtZW50LnJlbW92ZSgpO1xuXHRcdFx0fSwgNTAwKTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuQWN0aW9uc01lbnUgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgQnV0dG9uTGluayAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuQnV0dG9uQ2xpY2tgKTtcblxuXHRcdFx0JHdpZGdldC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjb25zdCBfdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdFx0aWYgKF90YXJnZXQuY2xvc2VzdCgnLkJ1dHRvbkNsaWNrLmNsaWNrJykubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHQkKCcuQnV0dG9uQ2xpY2suY2xpY2snKS5yZW1vdmVDbGFzcygnY2xpY2snKTtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuQnV0dG9uTGluayA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBDYXJkQ2hhcnRzICovXG5TYXBwaGlyZVdpZGdldHMuQ2FyZENoYXJ0c1BvcHVwID0gKCkgPT4ge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHR3aW5kb3dbJ0NhcmRDaGFydHNTY3JvbGwnXSA9IHt9O1xuXHRcdGNvbnN0IGlzSW5zaWRlSWZyYW1lID0gd2luZG93LmZyYW1lRWxlbWVudCAhPSB1bmRlZmluZWQgfHwgZmFsc2U7XG5cblx0XHRsZXQgJGNvbXBvbmVudCA9ICQoJy5DYXJkQ2hhcnRzJyk7XG5cdFx0bGV0ICRoZWFkZXIgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19IZWFkZXInKTtcblx0XHRsZXQgJGNvbnRlbnQgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19Db250ZW50Jyk7XG5cdFx0bGV0ICRwcm9wZXJ0aWVzID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fUHJvcGVydGllcycpO1xuXHRcdGxldCAkaGVhZGVyRGl2ID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fSGVhZGVyQ2hhcnQgPiBkaXYnKTtcblx0XHRsZXQgJGZha2VDb2x1bW5zID0gJCgnLkZha2VDb2x1bW5zJyk7XG5cdFx0bGV0ICRib2R5Q29udGVudCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keScpO1xuXG5cdFx0aWYgKGlzSW5zaWRlSWZyYW1lICYmICEkZmFrZUNvbHVtbnMubGVuZ3RoKSB7XG5cdFx0XHQkaGVhZGVyRGl2LmFwcGVuZChgPGRpdiBjbGFzcz0nRmFrZUNvbHVtbnMnPjwvZGl2PmApO1xuXHRcdH1cblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0JGZha2VDb2x1bW5zID0gJCgnLkZha2VDb2x1bW5zJyk7XG5cblx0XHRcdCRjb250ZW50Lm9uKCdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3dbJ0NhcmRDaGFydHNTY3JvbGwnXS5zY3JvbGxGaW5pc2hlZCk7XG5cdFx0XHRcdHdpbmRvd1snQ2FyZENoYXJ0c1Njcm9sbCddLnNjcm9sbEZpbmlzaGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoJGNvbnRlbnQuc2Nyb2xsVG9wKCkgPiAwKSAkaGVhZGVyLmFkZENsYXNzKCdTaGFkb3dNZWRpdW0nKTtcblx0XHRcdFx0XHRlbHNlICRoZWFkZXIucmVtb3ZlQ2xhc3MoJ1NoYWRvd01lZGl1bScpO1xuXHRcdFx0XHR9LCA1MCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0JGNvbXBvbmVudCA9ICQoJy5DYXJkQ2hhcnRzJyk7XG5cdFx0XHQkaGVhZGVyID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fSGVhZGVyJyk7XG5cdFx0XHQkY29udGVudCA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0NvbnRlbnQnKTtcblx0XHRcdCRwcm9wZXJ0aWVzID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fUHJvcGVydGllcycpO1xuXHRcdFx0JGZha2VDb2x1bW5zID0gJCgnLkZha2VDb2x1bW5zJyk7XG5cdFx0XHQkYm9keUNvbnRlbnQgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHknKTtcblxuXHRcdFx0bGV0IGhlYWRlclRpdGxlSGVpZ2h0ID0gNjM7XG5cdFx0XHRjb25zdCBoZWFkZXJQcm9wZXJ0aWVzSGVpZ2h0ID0gNTY7XG5cblx0XHRcdGNvbnN0ICRjaGFydHMgPSAkY29udGVudC5maW5kKCcuQ2FyZENoYXJ0c19fQ2hhcnRzIC5PU0NoYXJ0Jyk7XG5cblx0XHRcdCRjaGFydHMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgJGNoYXJ0ID0gJCh0aGlzKTtcblxuXHRcdFx0XHRjb25zdCBuZXdXaWR0aCA9ICRjb250ZW50LndpZHRoKCkgLSAkcHJvcGVydGllcy53aWR0aCgpICsgNDA7XG5cdFx0XHRcdCRjaGFydC5oaWdoY2hhcnRzKCkuc2V0U2l6ZShuZXdXaWR0aCwgJGNoYXJ0LmhlaWdodCgpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0Y29uc3QgdGltZW91dEhlaWdodCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRoZWFkZXJUaXRsZSA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0hlYWRlclRpdGxlJyk7XG5cblx0XHRcdFx0XHRoZWFkZXJUaXRsZUhlaWdodCA9ICRoZWFkZXJUaXRsZS5sZW5ndGggPyAkaGVhZGVyVGl0bGUub3V0ZXJIZWlnaHQoKSA6IGhlYWRlclRpdGxlSGVpZ2h0IC0gNjtcblxuXHRcdFx0XHRcdGNvbnN0IG5ld0hlaWdodCA9ICQod2luZG93LmZyYW1lRWxlbWVudCkuaGVpZ2h0KCkgLSBoZWFkZXJUaXRsZUhlaWdodDtcblxuXHRcdFx0XHRcdCRmYWtlQ29sdW1ucy5jc3MoJ2hlaWdodCcsIGAke25ld0hlaWdodCArIGhlYWRlclByb3BlcnRpZXNIZWlnaHR9cHhgKTtcblx0XHRcdFx0XHQkY29udGVudC5jc3MoJ2hlaWdodCcsIGAke25ld0hlaWdodCAtIGhlYWRlclByb3BlcnRpZXNIZWlnaHR9cHhgKTtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0SGVpZ2h0KTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIFNlZSBNdXRhdGlvbk9ic2VydmVyIChMYXlvdXRQb3B1cClcblx0XHRTYXBwaGlyZVdpZGdldHMuUG9wdXBzVG9Bdm9pZE11dGF0aW9ucyA9IFsnQ2hhcnRzUG9wdXAnXTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IENvbGxhcHNpYmxlU2lkZVBhbmVsICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y2xhc3MgQ29sbGFwc2libGVTaWRlUGFuZWwge1xuXHRcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLm9uQ29tcG9uZW50SW5pdCgpO1xuXHRcdH1cblxuXHRcdG9wZW5DbG9zZVNpZGVQYW5lbCh0b09wZW4pIHtcblx0XHRcdGlmICh0b09wZW4pIHtcblx0XHRcdFx0dGhpcy4kY29udGVudC5jc3MoJ2Rpc3BsYXknLCAnZ3JpZCcpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5hZGRDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLW9wZW4nKTtcblx0XHRcdFx0fSwgNTApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LnJlbW92ZUNsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbC0tb3BlbicpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fQ29udGVudCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRcdH0sIDM1MCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xuXHRcdFx0dGhpcy4kY29tcG9uZW50ID0gJChgIyR7dGhpcy5vcHRpb25zLndpZGdldElkfWApO1xuXHRcdFx0dGhpcy4kaGVhZGVyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fSGVhZGVyJyk7XG5cdFx0XHR0aGlzLiRjb250ZW50ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fQ29udGVudCcpO1xuXHRcdFx0dGhpcy4kY291bnRlcjEgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19UaXRsZSBzcGFuLkNvdW50ZXInKTtcblx0XHRcdHRoaXMuJGNvdW50ZXIyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxUaXRsZSBzcGFuLkNvdW50ZXInKTtcblx0XHRcdHRoaXMuJHBhbmVsQ29udGVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsQ29udGVudCcpO1xuXHRcdFx0dGhpcy4kY2xvc2UgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbEhlYWRlciAuaWNvbicpO1xuXHRcdFx0dGhpcy4kY2xvc2VFdmVudExpbmsgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbEhlYWRlciAuUGFuZWxDbG9zZUJ1dHRvbicpO1xuXG5cdFx0XHR0aGlzLiRoZWFkZXIub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VTaWRlUGFuZWwodHJ1ZSkpO1xuXHRcdFx0dGhpcy4kY2xvc2Uub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9wZW5DbG9zZVNpZGVQYW5lbChmYWxzZSk7XG5cblx0XHRcdFx0dGhpcy4kY2xvc2VFdmVudExpbmsuY2xpY2soKTtcblxuXHRcdFx0XHRpZiAoJCgnLlBhbmVsQ29udGVudEVtcHR5JykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbGxhcHNpYmxlU2lkZVBhbmVsLmNsb3NlKHRoaXMub3B0aW9ucy53aWRnZXRJZCwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmlzQXV0b0NvdW50ZXIpIHtcblx0XHRcdFx0Y2FsY3VsYXRlQ291bnRlcih0aGlzLiRwYW5lbENvbnRlbnQsIHRoaXMuJGNvdW50ZXIxLCB0aGlzLiRjb3VudGVyMik7XG5cblx0XHRcdFx0dGhpcy4kY291bnRlcjEucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuXHRcdFx0XHR0aGlzLiRjb3VudGVyMi5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhc0VtcHR5TWVzc2FnZSA9IHRoaXMuJHBhbmVsQ29udGVudC5maW5kKCcuQ29sbGFwc2libGVFbXB0eU1lc3NhZ2UnKTtcblx0XHRcdGNvbnN0IGNvbnRlbnRUb1ZlcmlmeSA9IGhhc0VtcHR5TWVzc2FnZS5sZW5ndGggPyB0aGlzLiRwYW5lbENvbnRlbnQuZmluZCgnPjpmaXJzdC1jaGlsZCcpIDogdGhpcy4kcGFuZWxDb250ZW50O1xuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmhpZGVXaGVuRW1wdHkgJiYgIWNvbnRlbnRUb1ZlcmlmeS50ZXh0KCkpIHtcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbDp2aXNpYmxlJykuYWRkQ2xhc3MoJ011bHRpTWFyZ2luVG9wU21hbGwnKTtcblx0XHRcdFx0JCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsOnZpc2libGU6Zmlyc3QnKS5hZGRDbGFzcygnTXVsdGlNYXJnaW5Ub3BMYXJnZScpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgY2FsY3VsYXRlQ291bnRlciA9IChwYW5lbENvbnRlbnQsIGNvdW50ZXIxLCBjb3VudGVyMikgPT4ge1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0Y29uc3QgY291bnRlcnMgPSBwYW5lbENvbnRlbnQuZmluZCgnLkV4YXBhbmRhYmxlUGxhY2Vob2xkZXIuQ291bnRlcicpO1xuXG5cdFx0Y291bnRlcnMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHRvdGFsICs9ICskKHRoaXMpLnRleHQoKTtcblx0XHR9KTtcblxuXHRcdGNvdW50ZXIxLnRleHQodG90YWwpO1xuXHRcdGNvdW50ZXIyLnRleHQodG90YWwpO1xuXG5cdFx0aWYgKHRvdGFsID09PSAwKSBjb3VudGVyMi5hZGRDbGFzcygnQ29sb3JMaWdodEdyZXlCRycpO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZUNvdW50ZXIgPSAod2lkZ2V0SWQsIGNvdW50ZXIpID0+IHtcblx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHR0aGlzLmNvdW50ZXIxID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fVGl0bGUgc3Bhbi5Db3VudGVyJyk7XG5cdFx0dGhpcy5jb3VudGVyMiA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsVGl0bGUgc3Bhbi5Db3VudGVyJyk7XG5cblx0XHR0aGlzLmNvdW50ZXIxLnRleHQoY291bnRlcik7XG5cdFx0dGhpcy5jb3VudGVyMi50ZXh0KGNvdW50ZXIpO1xuXG5cdFx0aWYgKCtjb3VudGVyID09PSAwKSB0aGlzLmNvdW50ZXIyLmFkZENsYXNzKCdDb2xvckxpZ2h0R3JleUJHJyk7XG5cdH07XG5cblx0Y29uc3QgY2xvc2UgPSAod2lkZ2V0SWQsIGhpZGVIZWFkZXIsIHVwZGF0ZUNvdW50ZXIpID0+IHtcblx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblxuXHRcdGlmICghdGhpcy4kY29tcG9uZW50Lmhhc0NsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbCcpKSB7XG5cdFx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKS5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWwnKTtcblx0XHR9XG5cblx0XHRpZiAoaGlkZUhlYWRlcikge1xuXHRcdFx0dGhpcy4kY29tcG9uZW50LmFkZENsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbC0taGVhZGVySGlkZGVuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kY29tcG9uZW50LnJlbW92ZUNsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbC0tb3BlbicpO1xuXG5cdFx0JCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsOnZpc2libGUnKS5yZW1vdmVDbGFzcygnTXVsdGlNYXJnaW5Ub3BTbWFsbCcpO1xuXHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbDp2aXNpYmxlOmZpcnN0JykucmVtb3ZlQ2xhc3MoJ011bHRpTWFyZ2luVG9wTGFyZ2UnKTtcblx0fTtcblxuXHRjb25zdCBjaGVja0VtcHR5ID0gd2lkZ2V0SWQgPT4ge1xuXHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApLmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbCcpO1xuXHRcdHRoaXMuJHBhbmVsQ29udGVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsQ29udGVudCcpO1xuXHRcdHRoaXMuJGNvdW50ZXIxID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fVGl0bGUgc3Bhbi5Db3VudGVyJyk7XG5cdFx0dGhpcy4kY291bnRlcjIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbFRpdGxlIHNwYW4uQ291bnRlcicpO1xuXHRcdHRoaXMuJGVtcHR5TWVzc2FnZSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVFbXB0eU1lc3NhZ2UnKTtcblxuXHRcdHRoaXMuJGVtcHR5TWVzc2FnZS5zaG93KCk7XG5cblx0XHRjYWxjdWxhdGVDb3VudGVyKHRoaXMuJHBhbmVsQ29udGVudCwgdGhpcy4kY291bnRlcjEsIHRoaXMuJGNvdW50ZXIyKTtcblx0fTtcblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IENvbGxhcHNpYmxlU2lkZVBhbmVsKGNvbmZpZykpO1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5Db2xsYXBzaWJsZVNpZGVQYW5lbCA9IHsgY3JlYXRlLCBjbG9zZSwgdXBkYXRlQ291bnRlciwgY2hlY2tFbXB0eSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgQ29tcExpbmUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRmdW5jdGlvbiBTZWN0aW9uQ29tcGxpbmUoKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0Ly8gT2JqZWN0IHRvIHNhdmUgc3RhdHNcblx0XHR2YXIgcHJldmlld3N0YXQgPSBbXTtcblxuXHRcdC8vIHNldCBjbGljayBldmVudHNcblx0XHRmdW5jdGlvbiBjbGlja0V2ZW50cyhvYikge1xuXHRcdFx0Ly8gc3RvcmUgcXVlcnlzIGluIGEgc2luZ2xlIHZhclxuXHRcdFx0dmFyIGhvbGRlciA9ICQob2IpLmNsb3Nlc3QoJy5Db21wTGluZScpO1xuXHRcdFx0dmFyIFNlY3Rpb24gPSAkKG9iKS5jbG9zZXN0KCcuQ29tcExpbmVFeHBhbmRhYmxlJyk7XG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuQ29tcExpbmVfRXhwYW5kJyk7XG5cblx0XHRcdC8vIGdldCBpZFxuXHRcdFx0dmFyIGlkID0gaG9sZGVyLmF0dHIoJ2lkJyk7XG5cblx0XHRcdHZhciB0ZW1wSGVpZ2h0ID0gMDtcblxuXHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXG5cdFx0XHRpZiAoU2VjdGlvbi5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHQsIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRyYW5zaXRpb25zIGFyZSBkaXNhYmxlZFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5hZGRDbGFzcygnbm9UcmFuc2l0aW9uJyk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodChTZWN0aW9uQ29udGVudC5oZWlnaHQoKSk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQucmVtb3ZlQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXG5cdFx0XHRcdC8vIENvbGxhcHNlIGNvbnRlbnRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xuXHRcdFx0XHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKGhvbGRlci5oYXNDbGFzcygnbm90UmVuZGVySW50ZXJhY3Rpb25zJykpIHtcblx0XHRcdFx0XHRob2xkZXIuZmluZCgnLkNvbXBMaW5lLXRvZ2dsZS1pbnRlcmFjdGlvbnMnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRcdHRlbXBIZWlnaHQgPSBTZWN0aW9uQ29udGVudC5oZWlnaHQoKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQodGVtcEhlaWdodCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXG5cdFx0XHRcdFNlY3Rpb24uYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSB0cnVlO1xuXG5cdFx0XHRcdGlmICgkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTgnKSB8fCAkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTknKSkge1xuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGhvbGRlci5oYXNDbGFzcygnbm90UmVuZGVySW50ZXJhY3Rpb25zJykpIHtcblx0XHRcdFx0XHRob2xkZXIuZmluZCgnLkNvbXBMaW5lLXRvZ2dsZS1pbnRlcmFjdGlvbnMnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gYWpheCByZWZyZXMgZnVuY3Rpb25cblx0XHR0aGF0LmFqYXhSZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXG5cdFx0XHQkKCcuQ29tcExpbmVfaGVhZExpbmUnKS5vZmYoKTtcblxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cblx0XHRcdCQoJy5Db21wTGluZV9oZWFkTGluZSBpbnB1dCwgLkNvbXBMaW5lX2hlYWRMaW5lIHNlbGVjdCwgLkNvbXBMaW5lX2hlYWRMaW5lIGEnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgbmV3IGNsaWNrIGV2ZW50c1xuXHRcdFx0JCgnLkNvbXBMaW5lX19leHBhbmRJY29uJykudW5iaW5kKCdjbGljaycpO1xuXHRcdFx0JCgnLkNvbXBMaW5lX19leHBhbmRJY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMucGFyZW50RWxlbWVudCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcblx0XHRcdCQoJy5Db21wTGluZUV4cGFuZGFibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBpZiBuZXcgU2VjdGlvbkV4cGFuZGFibGUgdGhlbiBhZGQgdG8gcHJldmlld3N0YXQgYXJyYXlcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRdID09IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcblx0XHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xuXHRcdFx0XHRcdC8vIGlmIG9wZW5cblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0c3RhdCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFkZCByb3dcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXG5cdFx0XHRcdFx0XSA9IHtcblx0XHRcdFx0XHRcdGNsaWVudDogc3RhdCxcblx0XHRcdFx0XHRcdHNlcnZlcjogc3RhdCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY3VyZW50IHN0YXRlIChhamF4IHN0YXRlIHggaW5pdGlhbCBzdGF0ZSlcblx0XHRcdFx0dmFyIGN1clN0YXRlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gY2hlY2sgaWYgc3RhcnQgZXhwYW5kYWJsZVxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdGN1clN0YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNoZWNrIGlmIGFqYXggIT0gaW5pdGlhbCBzZXJ2ZXJcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGN1clN0YXRlICE9XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF1bJ3NlcnZlciddXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF1bJ2NsaWVudCddID0gY3VyU3RhdGU7XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF1bJ3NlcnZlciddID0gY3VyU3RhdGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdFx0XVsnY2xpZW50J10gPT0gZmFsc2UgJiZcblx0XHRcdFx0XHRcdCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJylcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jaGlsZHJlbignLkNvbXBMaW5lX0V4cGFuZCcpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoMCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRcdF1bJ2NsaWVudCddID09IHRydWUgJiZcblx0XHRcdFx0XHRcdCEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vIHNldCBldmVudHNcblx0XHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zIHRvIGNyZWF0ZSBhcnJheSBzdGF0XG5cdFx0XHQkKCcuQ29tcExpbmVFeHBhbmRhYmxlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcblx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBpZiBvcGVuXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0c3RhdCA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBhZGQgcm93XG5cdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XSA9IHtcblx0XHRcdFx0XHRjbGllbnQ6IHN0YXQsXG5cdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGFkZCBjbGljayBldmVudHNcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLnVuYmluZCgnY2xpY2snKTtcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzLnBhcmVudEVsZW1lbnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXG5cdFx0XHQkKCcuQ29tcExpbmVfaGVhZExpbmUgaW5wdXQsIC5Db21wTGluZV9oZWFkTGluZSBzZWxlY3QsIC5Db21wTGluZV9oZWFkTGluZSBhJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gcmVtb3ZlIHVuZWNlc3NhcnkgYmVoYXZpb3JzXG5cblx0XHRcdC8vIGV2ZW50IGFqYXhcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QodGhhdC5hamF4UmVmcmVzaCk7XG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcblx0XHRjb25zdCBleHBhbmRhYmxlID0gbmV3IFNlY3Rpb25Db21wbGluZSgpO1xuXG5cdFx0ZXhwYW5kYWJsZS5pbml0KCk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkNvbXBMaW5lID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IENvdW50cnlQaG9uZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XG5cdFx0Y29uc3QgYWRkaXRpb25hbFZhbGlkYXRpb25zID0gY29uZmlnLmFkZGl0aW9uYWxWYWxpZGF0aW9ucztcblxuXHRcdGNvbnN0IGNvdW50cnlQaG9uZUlucHV0ID0gd2luZG93LmludGxUZWxJbnB1dCgkZWxlbWVudCwge1xuXHRcdFx0aW5pdGlhbENvdW50cnk6IGNvbmZpZy5pbml0aWFsQ291bnRyeSxcblx0XHRcdHByZWZlcnJlZENvdW50cmllczogY29uZmlnLnByZWZlcnJlZENvdW50cmllcyxcblx0XHRcdHNlcGFyYXRlRGlhbENvZGU6IGNvbmZpZy5zZXBhcmF0ZURpYWxDb2RlLFxuXHRcdFx0bmF0aW9uYWxNb2RlOiBjb25maWcubmF0aW9uYWxNb2RlLFxuXHRcdFx0YXV0b1BsYWNlaG9sZGVyOiBjb25maWcuYXV0b1BsYWNlaG9sZGVyID8gJ3BvbGl0ZScgOiBmYWxzZSxcblx0XHRcdGZvcm1hdE9uRGlzcGxheTogZmFsc2UsXG5cdFx0XHR1dGlsc1NjcmlwdDogJy9WM19QYXQvanMvdXRpbHMuanMnLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgJGlucHV0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXG5cdFx0JGlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmICgkaW5wdXQudmFsKCkgPT09ICcrJyB8fCAkaW5wdXQudmFsKCkgPT09ICcnKSB7XG5cdFx0XHRcdGNvdW50cnlQaG9uZUlucHV0LnNldENvdW50cnkoY29uZmlnLmluaXRpYWxDb3VudHJ5KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRpbnB1dC5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZENvdW50cnkgPSBjb3VudHJ5UGhvbmVJbnB1dC5nZXRTZWxlY3RlZENvdW50cnlEYXRhKCk7XG5cdFx0XHRjb25zdCBmaWx0ZXIgPSBhZGRpdGlvbmFsVmFsaWRhdGlvbnMuZmluZChpID0+IGkuQ291bnRyeVBob25lVmFsaWRhdGlvbnMuQ291bnRyeUNvZGUgPT09IHNlbGVjdGVkQ291bnRyeS5pc28yKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gJGlucHV0LnZhbCgpLnRyaW0oKTtcblxuXHRcdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xuXG5cdFx0XHRpZiAoZmlsdGVyKSB7XG5cdFx0XHRcdGNvbnN0IHdpdGhvdUNvZGUgPSB2YWx1ZS5yZXBsYWNlKGArJHtzZWxlY3RlZENvdW50cnkuZGlhbENvZGV9YCwgJycpO1xuXG5cdFx0XHRcdGlzVmFsaWQgPSB3aXRob3VDb2RlLnRyaW0oKS5sZW5ndGggKyAxIDw9IGZpbHRlci5Db3VudHJ5UGhvbmVWYWxpZGF0aW9ucy5QaG9uZUxlbmd0aDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHZhbHVlID09PSBgKyR7c2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfWApIHtcblx0XHRcdFx0JGlucHV0LnZhbChgKyR7c2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfSBgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aXNWYWxpZCAmJlxuXHRcdFx0XHQoZS5tZXRhS2V5IHx8IC8vIGNtZC9jdHJsXG5cdFx0XHRcdGUud2hpY2ggPD0gMCB8fCAvLyBhcnJvdyBrZXlzXG5cdFx0XHRcdGUud2hpY2ggPT0gOCB8fCAvLyBkZWxldGUga2V5XG5cdFx0XHRcdFx0KCF2YWx1ZS5sZW5ndGggJiYgZS5rZXkgPT09ICcrJykgfHxcblx0XHRcdFx0XHQvWzAtOV0vLnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKSkpXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0JGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY291bnRyeWNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0b25DaGFuZ2VDb3VudHJ5KCk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBvbkNoYW5nZUNvdW50cnkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCAkc2VsZWN0ZWRDb3VudHJ5SW5wdXQgPSAkKGAjJHtjb25maWcuc2VsZWN0ZWRDb3VudHJ5SW5wdXR9YCk7XG5cdFx0XHRjb25zdCBzZWxlY3RlZENvdW50cnkgPSBjb3VudHJ5UGhvbmVJbnB1dC5nZXRTZWxlY3RlZENvdW50cnlEYXRhKCk7XG5cblx0XHRcdCRzZWxlY3RlZENvdW50cnlJbnB1dC52YWwoc2VsZWN0ZWRDb3VudHJ5LmlzbzIpO1xuXHRcdFx0JHNlbGVjdGVkQ291bnRyeUlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdH07XG5cblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdG9uQ2hhbmdlQ291bnRyeSgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5Db3VudHJ5UGhvbmUgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cdGNsYXNzIERhdGFUYWJsZXMge1xuXHRcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHR0aGlzLiR3aWRnZXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XG5cdFx0XHR0aGlzLiR0YWJsZSA9IHRoaXMuJHdpZGdldC5maW5kKCd0YWJsZScpO1xuXHRcdFx0dGhpcy4kdGFibGUuYWRkQ2xhc3MoJ2NlbGwtYm9yZGVyIGNvbXBhY3QnKTtcblx0XHRcdHRoaXMub25Jbml0KCk7XG5cdFx0fVxuXG5cdFx0b25Jbml0KCkge1xuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xuXHRcdFx0XHQuLi50aGlzLmNvbmZpZyxcblx0XHRcdFx0Zml4ZWRDb2x1bW5zOiB0cnVlLFxuXHRcdFx0XHRpbmZvOiBmYWxzZSxcblx0XHRcdFx0b3JkZXJpbmc6IGZhbHNlLFxuXHRcdFx0XHRwYWdpbmc6IGZhbHNlLFxuXHRcdFx0XHRzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcblx0XHRcdFx0c2Nyb2xsWDogdHJ1ZSxcblx0XHRcdFx0c2VhcmNoaW5nOiBmYWxzZSxcblx0XHRcdH07XG5cblx0XHRcdCQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLiR0YWJsZS5EYXRhVGFibGUodGhpcy5vcHRpb25zKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgRGF0YVRhYmxlcyhjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuRGF0YVRhYmxlcyA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KSgpO1xuIiwiLyogQ29tcG9uZW50IERhdGVUaW1lUmFuZ2VQaWNrZXIgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBhbGxEYXRlVGltZVJhbmdlUGlja2VycyA9IFtdO1xyXG5cclxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChhbGxEYXRlVGltZVJhbmdlUGlja2Vyc1tpXS5jb25maWcud2lkZ2V0SWQgPT09IGNvbmZpZy53aWRnZXRJZCkge1xyXG5cdFx0XHRcdGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgRGF0ZVRpbWVSYW5nZVBpY2tlcihjb25maWcpO1xyXG5cdFx0YWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnMucHVzaCh3aW5kb3dbY29uZmlnLndpZGdldElkXSk7XHJcblx0fTtcclxuXHJcblx0dmFyIERhdGVUaW1lUmFuZ2VQaWNrZXIgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0dGhpcy5jdXJyZW50TG9jYWxlID0gY29uZmlnLmN1cnJlbnRMb2NhbGU7XHJcblxyXG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xyXG5cdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdEYXRlVGltZVJhbmdlUGlja2VyJyk7XHJcblx0XHR0aGlzLiRjbGVhciA9IHRoaXMuJHdpZGdldC5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jbGVhcicpO1xyXG5cdFx0dGhpcy4kbGFiZWwgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItbGFiZWwnKTtcclxuXHJcblx0XHR0aGlzLmlzRW1wdHlIb3VyID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdhdHRhY2hlZElucHV0Jyk7XHJcblx0XHRcdHRoaXMuJG1vZGVsID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLXBsYWNlaG9sZGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XHJcblx0XHRcdHRoaXMuJG1vZGVsLmF0dHIoJ3RhYkluZGV4JywgLTEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGlucHV0ID0gJCgnIycgKyBjb25maWcuaW5wdXRJZCk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmNvbmZpZy5hbGxvd3NUeXBpbmcpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQucHJvcCgncmVhZG9ubHknLCB0cnVlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50TG9jYWxlID09PSAnQVInKSB7XHJcblx0XHRcdG1vbWVudC5sb2NhbGUoJ2FyLWt3Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG9wdGlvbnMgPSB7fTtcclxuXHRcdG9wdGlvbnMuc3RhcnREYXRlID0gY29uZmlnLnN0YXJ0RGF0ZTtcclxuXHRcdG9wdGlvbnMuc2luZ2xlRGF0ZVBpY2tlciA9IGNvbmZpZy5zaW5nbGVEYXRlUGlja2VyO1xyXG5cdFx0b3B0aW9ucy5hdXRvQXBwbHkgPSBjb25maWcuYXV0b0FwcGx5O1xyXG5cdFx0b3B0aW9ucy5hdXRvVXBkYXRlSW5wdXQgPSBjb25maWcuYXV0b1VwZGF0ZUlucHV0O1xyXG5cdFx0b3B0aW9ucy50aW1lUGlja2VyID0gY29uZmlnLnRpbWVQaWNrZXI7XHJcblx0XHRvcHRpb25zLnRpbWVQaWNrZXIyNEhvdXIgPSBjb25maWcudGltZVBpY2tlcjI0SG91cjtcclxuXHRcdG9wdGlvbnMudGltZVBpY2tlckluY3JlbWVudCA9IGNvbmZpZy50aW1lUGlja2VySW5jcmVtZW50O1xyXG5cdFx0b3B0aW9ucy5zaG93RHJvcGRvd25zID0gY29uZmlnLmhhc0Ryb3Bkb3duczsgLy8gTW9udGgvWWVhciBQaWNrZXJcclxuXHRcdG9wdGlvbnMuZHJvcHMgPSBjb25maWcuZHJvcHM7XHJcblx0XHRvcHRpb25zLm9wZW5zID0gY29uZmlnLmN1cnJlbnRMb2NhbGUgPT09ICdBUicgJiYgY29uZmlnLm9wZW5zICE9ICdjZW50ZXInID8gJ2xlZnQnIDogY29uZmlnLm9wZW5zO1xyXG5cclxuXHRcdHZhciBzdHJpbmdDb25uZWN0aW9uID0gJ1ssIGF0XSc7XHJcblxyXG5cdFx0aWYgKGNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdGlmICghdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkgdGhpcy4kaW5wdXQucHJvcCgncGxhY2Vob2xkZXInLCAnREQtTU0tWVlZWSBISDpNTScpO1xyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMudGltZVBpY2tlcjI0SG91cikge1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdElucHV0ID0gYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW1gO1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdExhYmVsID0gdGhpcy5jb25maWcuaGFzWWVhcldoZW5UZXh0XHJcblx0XHRcdFx0XHQ/ICdEIE1NTSBZWVlZJyArIHN0cmluZ0Nvbm5lY3Rpb24gKyAnIEhIOm1tJ1xyXG5cdFx0XHRcdFx0OiAnRCBNTU0nICsgc3RyaW5nQ29ubmVjdGlvbiArICcgSEg6bW0nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdElucHV0ID0gYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gaGg6bW0gQWA7XHJcblx0XHRcdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNZZWFyV2hlblRleHRcclxuXHRcdFx0XHRcdD8gJ0QgTU1NIFlZWVknICsgc3RyaW5nQ29ubmVjdGlvbiArICcgaGg6bW0gQSdcclxuXHRcdFx0XHRcdDogJ0QgTU1NJyArIHN0cmluZ0Nvbm5lY3Rpb24gKyAnIGhoOm1tIEEnO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ29ubHlEYXRlJyk7XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHRoaXMuJGlucHV0LnByb3AoJ3BsYWNlaG9sZGVyJywgJ0RELU1NLVlZWVknKTtcclxuXHJcblx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdElucHV0ID0gdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdDtcclxuXHRcdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNZZWFyV2hlblRleHQgPyAnRCBNTU0gWVlZWScgOiAnRCBNTU0nO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdyYW5nZURhdGVzJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNXZWVrRGF5TmFtZVdoZW5UZXh0XHJcblx0XHRcdD8gJ2RkZFssIF0nICsgdGhpcy5jb25maWcuZm9ybWF0TGFiZWxcclxuXHRcdFx0OiB0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbDtcclxuXHJcblx0XHRvcHRpb25zLmxvY2FsZSA9IHtcclxuXHRcdFx0ZGlyZWN0aW9uOiBjb25maWcuY3VycmVudExvY2FsZSA9PT0gJ0FSJyA/ICdydGwnIDogJ2x0cicsXHJcblx0XHRcdGZvcm1hdDogdGhpcy5jb25maWcuZm9ybWF0SW5wdXQsXHJcblx0XHRcdGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcclxuXHRcdFx0YXBwbHlMYWJlbDogJ0FwcGx5JyxcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ3RleHRUcmlnZ2VyJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbnVsbGREYXRlcyA9IFsnMDEtMDEtMTkwMCAwMDowMDowMCcsICcxOTAwLTAxLTAxIDAwOjAwOjAwJ107XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5lbmREYXRlICYmICFudWxsZERhdGVzLnNvbWUoaSA9PiBpID09PSBjb25maWcuZW5kRGF0ZSkpIHtcclxuXHRcdFx0b3B0aW9ucy5lbmREYXRlID0gY29uZmlnLmVuZERhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5tYXhEYXRlICYmICFudWxsZERhdGVzLnNvbWUoaSA9PiBpID09PSBjb25maWcubWF4RGF0ZSkpIHtcclxuXHRcdFx0b3B0aW9ucy5tYXhEYXRlID0gY29uZmlnLm1heERhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5taW5EYXRlICYmICFudWxsZERhdGVzLnNvbWUoaSA9PiBpID09PSBjb25maWcubWluRGF0ZSkpIHtcclxuXHRcdFx0b3B0aW9ucy5taW5EYXRlID0gY29uZmlnLm1pbkRhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5EaXNhYmxlZFdlZWtEYXlzKSB7XHJcblx0XHRcdHZhciBkaXNhYmxlZFdlZWtEYXlzID0gY29uZmlnLkRpc2FibGVkV2Vla0RheXMuc3BsaXQoJywnKTtcclxuXHRcdFx0b3B0aW9ucy5pc0ludmFsaWREYXRlID0gZnVuY3Rpb24oZGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBkaXNhYmxlZFdlZWtEYXlzLmluY2x1ZGVzKFxyXG5cdFx0XHRcdFx0bW9tZW50KGRhdGUpXHJcblx0XHRcdFx0XHRcdC5kYXkoKVxyXG5cdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5kYXRlcmFuZ2VwaWNrZXIob3B0aW9ucywgZnVuY3Rpb24oc3RhcnREYXRlLCBlbmREYXRlLCBsYWJlbCkge1xyXG5cdFx0XHQvLyBhZnRlciBhIHNlbGVjdGlvbiBpcyBtYWRlXHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdGxldCBmb3JtYXQgPSAnJztcclxuXHJcblx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHRmb3JtYXQgPSBgJHtfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW1gO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIpIF90aGlzLiRtb2RlbC52YWwoc3RhcnREYXRlLmZvcm1hdChmb3JtYXQpKTtcclxuXHRcdFx0XHRcdGVsc2UgX3RoaXMuJG1vZGVsLnZhbChzdGFydERhdGUuZm9ybWF0KF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBzdGFydCwgZW5kO1xyXG5cclxuXHRcdFx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0XHRzdGFydCA9IHN0YXJ0RGF0ZS5mb3JtYXQoZm9ybWF0KTtcclxuXHRcdFx0XHRcdFx0ZW5kID0gZW5kRGF0ZS5mb3JtYXQoZm9ybWF0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHN0YXJ0ID0gc3RhcnREYXRlLmZvcm1hdChfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCk7XHJcblx0XHRcdFx0XHRcdGVuZCA9IGVuZERhdGUuZm9ybWF0KF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRfdGhpcy4kbW9kZWwudmFsKGAke3N0YXJ0fSAgwrcgICR7ZW5kfWApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0X3RoaXMuJG1vZGVsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBpbml0aWFsVmFsdWUgPSBfdGhpcy4kaW5wdXQudmFsKCk7XHJcblx0XHRcdGNvbnN0IGFsbG93c01NWVkgPSBfdGhpcy5jb25maWcuYWxsb3dzVHlwaW5nICYmIF90aGlzLmNvbmZpZy5hbGxvd3NUeXBlTU1ZWSAmJiBfdGhpcy5jb25maWcuc2luZ2xlRGF0ZVBpY2tlcjtcclxuXHJcblx0XHRcdGlmIChhbGxvd3NNTVlZICYmIGluaXRpYWxWYWx1ZS5sZW5ndGggPT09IDQpIHtcclxuXHRcdFx0XHRfdGhpcy5waWNrZXIuc2V0U3RhcnREYXRlKG1vbWVudChgMDEke2luaXRpYWxWYWx1ZX1gLCAnRERNTVlZJykpO1xyXG5cclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0XHRcdGxldCBmb3JtYXQgPSAnJztcclxuXHJcblx0XHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIpIGZvcm1hdCA9IGAke190aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbWA7XHJcblx0XHRcdFx0XHRlbHNlIGZvcm1hdCA9IF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0O1xyXG5cclxuXHRcdFx0XHRcdF90aGlzLiRtb2RlbC52YWwoX3RoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoZm9ybWF0KSk7XHJcblx0XHRcdFx0XHRfdGhpcy4kbW9kZWwudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBub3cgd2UgaGF2ZSBhIHByb3BlciBpbnN0YW5jZVxyXG5cdFx0dGhpcy5waWNrZXIgPSB0aGlzLiRpbnB1dC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKTtcclxuXHJcblx0XHR0aGlzLiRjYWxlbmRhciA9ICQodGhpcy5waWNrZXIuY29udGFpbmVyKTtcclxuXHJcblx0XHRpZiAoISF0aGlzLmNvbmZpZy5jc3NDbGFzcykge1xyXG5cdFx0XHR0aGlzLiRjYWxlbmRhci5hZGRDbGFzcyh0aGlzLmNvbmZpZy5jc3NDbGFzcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kdGltZUhvbGRlciA9IHRoaXMuJGNhbGVuZGFyLmZpbmQoJy5jYWxlbmRhci10aW1lJyk7XHJcblx0XHR0aGlzLiRidXR0b25zSG9sZGVyID0gdGhpcy4kY2FsZW5kYXIuZmluZCgnLmRycC1idXR0b25zJyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF1dG9BcHBseSkge1xyXG5cdFx0XHR0aGlzLiRidXR0b25zSG9sZGVyLmhpZGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLmlzRW1wdHlTdGFydERhdGUpIHtcclxuXHRcdFx0dGhpcy5jbGVhcihmYWxzZSk7XHJcblx0XHR9IGVsc2UgaWYgKGNvbmZpZy5pc0VtcHR5U3RhcnRIb3VyKSB7XHJcblx0XHRcdHRoaXMuaXNFbXB0eUhvdXIgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5lbmFibGVkKSB7XHJcblx0XHRcdHRoaXMubmF0aXZlRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMuY3VzdG9tRXZlbnRzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLiRjbGVhci5oaWRlKCk7XHJcblx0XHRcdHRoaXMuJGlucHV0Lm9mZignY2xpY2sgZm9jdXMga2V5ZG93biBrZXl1cCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdHRoaXMuaGFuZGxlQ3VzdG9tVmFsaWRhdGlvbigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmhhbmRsZUN1c3RvbVZhbGlkYXRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIFRPIERPXHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUubmF0aXZlRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ3Nob3dDYWxlbmRhci5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuaGFzR29Ub2RheSkge1xyXG5cdFx0XHRcdF90aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LmZpbmQoJy5jYWxlbmRhci10YWJsZSB0aGVhZCB0cicpXHJcblx0XHRcdFx0XHQuZXEoMClcclxuXHRcdFx0XHRcdC5hZnRlcihcclxuXHRcdFx0XHRcdFx0Jzx0cj48dGQgY29sc3Bhbj1cIjdcIiBjbGFzcz1cIkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItZ290b2RheVwiPicgK1xyXG5cdFx0XHRcdFx0XHRcdF90aGlzLmNvbmZpZy5nb1RvZGF5TGFiZWwgK1xyXG5cdFx0XHRcdFx0XHRcdCc8L3RkPjwvdHI+J1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLmRyb3BzID09PSAndXAnKSB7XHJcblx0XHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuY3NzKCd0b3AnLCBfdGhpcy4kY2FsZW5kYXIub2Zmc2V0KCkudG9wIC0gMjQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRfdGhpcy5oYW5kbGVWaWV3cG9ydFBvc2l0aW9uKCk7XHJcblxyXG5cdFx0XHRpZiAoIV90aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdFx0JCgnLmRycC1zZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRsZXQgdGV4dCA9ICQodGhpcykudGV4dCgpO1xyXG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvLS9naSwgJ8K3Jyk7XHJcblxyXG5cdFx0XHRcdFx0JCh0aGlzKS50ZXh0KHRleHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignc2hvdy5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlciAmJiBfdGhpcy5jb25maWcuaGFzQ2xlYXJIb3VyKSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5jYWxlbmRhci10aW1lJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXJcIj48L3NwYW4+Jyk7XHJcblx0XHRcdFx0aWYgKF90aGlzLmlzRW1wdHlIb3VyKSB7XHJcblx0XHRcdFx0XHRfdGhpcy4kdGltZUhvbGRlci5jc3MoJ29wYWNpdHknLCAwLjUpO1xyXG5cdFx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF90aGlzLiR0aW1lSG9sZGVyLmNzcygnb3BhY2l0eScsIDEpO1xyXG5cdFx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdF90aGlzLmhhbmRsZVZpZXdwb3J0UG9zaXRpb24oKTtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLkRhdGVUaW1lUmFuZ2VQaWNrZXIub3BlbmVkV2lkZ2V0SWQgPSBfdGhpcy5jb25maWcud2lkZ2V0SWQ7XHJcblxyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmNzc0NsYXNzID09PSAnQ2FsZW5kYXJQb3B1cCcgJiYgd2luZG93LmZyYW1lRWxlbWVudCkge1xyXG5cdFx0XHRcdGNvbnN0IG9sZEJvZHlIZWlnaHQgPSAkKCdib2R5JylbMF0uc2Nyb2xsSGVpZ2h0ICsgODtcclxuXHRcdFx0XHRjb25zdCBjYWxlbmRhclNhZmVIZWlnaHQgPSBfdGhpcy4kY2FsZW5kYXIub3V0ZXJIZWlnaHQoKSArIDMyO1xyXG5cclxuXHRcdFx0XHRjb25zdCBuZXdIZWlnaHQgPSBvbGRCb2R5SGVpZ2h0ID4gY2FsZW5kYXJTYWZlSGVpZ2h0ID8gb2xkQm9keUhlaWdodCA6IGNhbGVuZGFyU2FmZUhlaWdodDtcclxuXHJcblx0XHRcdFx0JCgnPGRpdiBjbGFzcz1cIkNhbGVuZGFyUG9wdXBfX092ZXJsYXlcIj48L2Rpdj4nKS5pbnNlcnRBZnRlcihfdGhpcy4kY2FsZW5kYXIpO1xyXG5cclxuXHRcdFx0XHQkKHdpbmRvdy5mcmFtZUVsZW1lbnQpLmFuaW1hdGUoeyBtaW5IZWlnaHQ6IG5ld0hlaWdodCB9KTtcclxuXHRcdFx0XHQkKCdib2R5JykuYW5pbWF0ZSh7IG1pbkhlaWdodDogbmV3SGVpZ2h0IH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignaGlkZS5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicpLnJlbW92ZSgpO1xyXG5cdFx0XHRfdGhpcy51cGRhdGVQYXJlbnRJZnJhbWUoKTtcclxuXHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuY3NzQ2xhc3MgPT09ICdDYWxlbmRhclBvcHVwJyAmJiB3aW5kb3cuZnJhbWVFbGVtZW50KSB7XHJcblx0XHRcdFx0JCh3aW5kb3cuZnJhbWVFbGVtZW50KS5jc3MoeyBtaW5IZWlnaHQ6ICd1bnNldCcgfSk7XHJcblx0XHRcdFx0JCgnYm9keScpLmNzcyh7IG1pbkhlaWdodDogJ3Vuc2V0JyB9KTtcclxuXHJcblx0XHRcdFx0JCgnLkNhbGVuZGFyUG9wdXBfX092ZXJsYXknKS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ2NhbmNlbC5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ291dHNpZGVDbGljay5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ3RpbWVjaGFuZ2VkLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0X3RoaXMuaXNFbXB0eUhvdXIgPSBmYWxzZTtcclxuXHRcdFx0X3RoaXMuJHRpbWVIb2xkZXIuY3NzKCdvcGFjaXR5JywgMSk7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuaGFzQ2xlYXJIb3VyKSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5jYWxlbmRhci10aW1lJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXJcIj48L3NwYW4+Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5hdXRvQXBwbHkpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2xlYXIucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0X3RoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdFx0XHRfdGhpcy5zZW5kTm90aWZpY2F0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdjbGlja0RhdGUuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmF1dG9BcHBseSkge1xyXG5cdFx0XHRcdF90aGlzLiRjbGVhci5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ2FwcGx5LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0X3RoaXMuJGNsZWFyLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRfdGhpcy5zZW5kTm90aWZpY2F0aW9uKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5jdXN0b21FdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR0aGlzLiRsYWJlbC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0X3RoaXMucGlja2VyLnRvZ2dsZSgpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLiRjbGVhci5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0X3RoaXMuY2xlYXIoKTtcclxuXHRcdFx0X3RoaXMucGlja2VyLmhpZGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy4kY2FsZW5kYXIub24oJ2NsaWNrJywgJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcjI0SG91cikge1xyXG5cdFx0XHRcdF90aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LmZpbmQoJy5ob3Vyc2VsZWN0JylcclxuXHRcdFx0XHRcdC52YWwoJzAnKVxyXG5cdFx0XHRcdFx0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF90aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LmZpbmQoJy5ob3Vyc2VsZWN0JylcclxuXHRcdFx0XHRcdC52YWwoJzEyJylcclxuXHRcdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHQuZmluZCgnLm1pbnV0ZXNlbGVjdCcpXHJcblx0XHRcdFx0LnZhbCgnMCcpXHJcblx0XHRcdFx0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHQuZmluZCgnLmFtcG1zZWxlY3QnKVxyXG5cdFx0XHRcdC52YWwoJ0FNJylcclxuXHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdF90aGlzLmlzRW1wdHlIb3VyID0gdHJ1ZTtcclxuXHRcdFx0X3RoaXMuJHRpbWVIb2xkZXIuY3NzKCdvcGFjaXR5JywgMC41KTtcclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuJGNhbGVuZGFyLm9uKCdjbGljaycsICcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1nb3RvZGF5JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdF90aGlzLnBpY2tlci5zZXRTdGFydERhdGUobW9tZW50KCkpO1xyXG5cdFx0XHRfdGhpcy5waWNrZXIuc2V0RW5kRGF0ZShtb21lbnQoKSk7XHJcblxyXG5cdFx0XHRfdGhpcy5waWNrZXIuaGlkZSgpO1xyXG5cclxuXHRcdFx0aWYgKCFfdGhpcy5jb25maWcuYXV0b1VwZGF0ZUlucHV0IHx8IF90aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlciB8fCBfdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdF90aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuJG1vZGVsICYmIF90aGlzLiRtb2RlbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X3RoaXMuc2VuZE5vdGlmaWNhdGlvbigpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0Ly8gTm90aGluZ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRfdGhpcy51cGRhdGVQYXJlbnRJZnJhbWUoKTtcclxuXHRcdFx0XHR9LCA1MCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdibHVyJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLnVwZGF0ZUxhYmVsaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbGFiZWxNYXNrID0gdGhpcy5jb25maWcuZm9ybWF0TGFiZWw7XHJcblx0XHR2YXIgaW5wdXRNYXNrID0gdGhpcy5jb25maWcuZm9ybWF0SW5wdXQ7XHJcblxyXG5cdFx0aWYgKG1vbWVudCh0aGlzLnBpY2tlci5zdGFydERhdGUpLmlzU2FtZShtb21lbnQoKSwgJ2RheScpKSB7XHJcblx0XHRcdGlmIChsYWJlbE1hc2suaW5jbHVkZXMoJ0QgTU1NIFlZWVknKSkge1xyXG5cdFx0XHRcdGxhYmVsTWFzayA9IGxhYmVsTWFzay5yZXBsYWNlKCdEIE1NTSBZWVlZJywgJ1tUb2RheSxdIEQgTU1NIFlZWVknKTtcclxuXHRcdFx0fSBlbHNlIGlmIChsYWJlbE1hc2suaW5jbHVkZXMoJ0QgTU1NJykpIHtcclxuXHRcdFx0XHRsYWJlbE1hc2sgPSBsYWJlbE1hc2sucmVwbGFjZSgnRCBNTU0nLCAnW1RvZGF5XScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pc0VtcHR5SG91cikge1xyXG5cdFx0XHRsYWJlbE1hc2sgPSBsYWJlbE1hc2sucmVwbGFjZSgnaGg6bW0gQScsICdbLS06LS1dJykucmVwbGFjZSgnSEg6bW0nLCAnWy0tOi0tXScpO1xyXG5cdFx0XHRpbnB1dE1hc2sgPSBpbnB1dE1hc2sucmVwbGFjZSgnaGg6bW0gQScsICdbLS06LS1dJykucmVwbGFjZSgnSEg6bW0nLCAnWy0tOi0tXScpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuY29uZmlnLmhhc1RleHRUcmlnZ2VyKSB7XHJcblx0XHRcdFx0dGhpcy4kbGFiZWwuaHRtbCh0aGlzLmNvbmZpZy5wcmVmaXhUZXh0VHJpZ2dlciArIHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQobGFiZWxNYXNrKSk7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBbMDA6MDA6MDBdYCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IFswMDowMDowMF1gKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHRcdHRoaXMuJGxhYmVsLmh0bWwodGhpcy5jb25maWcucHJlZml4VGV4dFRyaWdnZXIgKyB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGxhYmVsTWFzaykpO1xyXG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGlucHV0TWFzaykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jb25maWcuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChpbnB1dE1hc2spKTtcclxuXHRcdFx0XHRcdFx0dGhpcy4kbW9kZWwgJiYgdGhpcy4kbW9kZWwudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc3Qgc3RhcnREYXRlID0gdGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChpbnB1dE1hc2spO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBlbmREYXRlID0gdGhpcy5waWNrZXIuZW5kRGF0ZS5mb3JtYXQoaW5wdXRNYXNrKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuJGlucHV0LnZhbChgJHtzdGFydERhdGV9ICDCtyAgJHtlbmREYXRlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jb25maWcuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bGV0IHN0YXJ0RGF0ZSA9IHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuZm9ybWF0SW5wdXQpO1xyXG5cdFx0XHRcdFx0XHRsZXQgZW5kRGF0ZSA9IHRoaXMucGlja2VyLmVuZERhdGUuZm9ybWF0KHRoaXMuY29uZmlnLmZvcm1hdElucHV0KTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuJGlucHV0LnZhbChgJHtzdGFydERhdGV9ICDCtyAgJHtlbmREYXRlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmhhbmRsZVZpZXdwb3J0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0d2luZG93LmZyYW1lRWxlbWVudCAmJlxyXG5cdFx0XHQoJCh3aW5kb3cuZnJhbWVFbGVtZW50LnBhcmVudEVsZW1lbnQpLmhhc0NsYXNzKCd0b29sdGlwc3Rlci1jb250ZW50JykgfHxcclxuXHRcdFx0XHQkKHdpbmRvdy5mcmFtZUVsZW1lbnQucGFyZW50RWxlbWVudCkuaGFzQ2xhc3MoJ29zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50JykpXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5pc0luVmlld3BvcnQoKSkge1xyXG5cdFx0XHR2YXIgY29vcmRzID0gdGhpcy4kY2FsZW5kYXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdGlmICh0aGlzLiRjYWxlbmRhci5oYXNDbGFzcygnZHJvcC11cCcpICYmIHRoaXMuJGNhbGVuZGFyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IDApIHtcclxuXHRcdFx0XHR2YXIgcG9pbnQgPSB3aW5kb3cuc2Nyb2xsWSArIGNvb3Jkcy5ib3R0b20gKyB0aGlzLiRpbnB1dC5oZWlnaHQoKSArIDc7XHJcblx0XHRcdFx0dGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnZHJvcC11cCcpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3AtZG93bicpXHJcblx0XHRcdFx0XHQuY3NzKCd0b3AnLCBwb2ludCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0IXRoaXMuJGNhbGVuZGFyLmhhc0NsYXNzKCdkcm9wLXVwJykgJiZcclxuXHRcdFx0XHR0aGlzLiRjYWxlbmRhclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHZhciBwb2ludCA9IHdpbmRvdy5zY3JvbGxZICsgY29vcmRzLnRvcCAtIGNvb3Jkcy5oZWlnaHQgLSB0aGlzLiRpbnB1dC5oZWlnaHQoKSAtIDc7XHJcblx0XHRcdFx0dGhpcy4kY2FsZW5kYXIuYWRkQ2xhc3MoJ2Ryb3AtdXAnKS5jc3MoJ3RvcCcsIHBvaW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGJvdW5kaW5nID0gdGhpcy4kY2FsZW5kYXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRib3VuZGluZy50b3AgPj0gMCAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCArIDUgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArIDUpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oc2VuZE5vdGlmaWNhdGlvbikge1xyXG5cdFx0dGhpcy5waWNrZXIuc2V0U3RhcnREYXRlKG1vbWVudCgpKTtcclxuXHRcdHRoaXMucGlja2VyLnNldEVuZERhdGUobW9tZW50KCkpO1xyXG5cdFx0dGhpcy5pc0VtcHR5SG91ciA9IGZhbHNlO1xyXG5cdFx0dGhpcy4kY2xlYXIuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRpZiAodGhpcy5jb25maWcuaGFzVGV4dFRyaWdnZXIpIHtcclxuXHRcdFx0dGhpcy4kbGFiZWwuaHRtbCgnLS0gLS0gLS0nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJGlucHV0LnZhbCgnJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2VuZE5vdGlmaWNhdGlvbiB8fCBzZW5kTm90aWZpY2F0aW9uID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLnNlbmROb3RpZmljYXRpb24oZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMucGlja2VyLnNob3coKTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnBpY2tlci5oaWRlKCk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnBpY2tlci5jbGlja0NhbmNlbCgpO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLnNlbmROb3RpZmljYXRpb24gPSBmdW5jdGlvbihzZW5kRGF0ZSkge1xyXG5cdFx0aWYgKHRoaXMuJHdpZGdldC5oYXNDbGFzcygnYXR0YWNoZWRJbnB1dCcpKSB7XHJcblx0XHRcdHRoaXMuJGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZW5kRGF0ZSB8fCBzZW5kRGF0ZSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0aWYgKHRoaXMuaXNFbXB0eUhvdXIpIHtcclxuXHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdHRoaXMuY29uZmlnLmRhdGVUaW1lUmFuZ2VQaWNrZXJGYWtlTm90aWZ5SWQsXHJcblx0XHRcdFx0XHR0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IFswMDowMDowMF1gKSArICd8JyArIHRoaXMuaXNFbXB0eUhvdXJcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcclxuXHRcdFx0XHRcdFx0dGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCxcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbTpzc2ApICsgJ3wnICsgdGhpcy5pc0VtcHR5SG91clxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoXHJcblx0XHRcdFx0XHRcdHRoaXMuY29uZmlnLmRhdGVUaW1lUmFuZ2VQaWNrZXJGYWtlTm90aWZ5SWQsXHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCkgKyAnfCcgKyB0aGlzLmlzRW1wdHlIb3VyXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0T3NOb3RpZnlXaWRnZXQodGhpcy5jb25maWcuZGF0ZVRpbWVSYW5nZVBpY2tlckZha2VOb3RpZnlJZCwgJ251bGx8dHJ1ZScpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLnVwZGF0ZVBhcmVudElmcmFtZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiBTYXBwaGlyZVdpZGdldHMuUmVzaXplUGFyZW50SWZyYW1lID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuUmVzaXplUGFyZW50SWZyYW1lLnJlc2l6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCQoJy5QYWdlLkxheW91dFBvcHVwJykubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5yZWRyYXdEaWFsb2dXaW5kb3coKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuRGF0ZVRpbWVSYW5nZVBpY2tlciA9IHtcclxuXHRcdGNyZWF0ZTogY3JlYXRlLFxyXG5cdFx0YWxsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzO1xyXG5cdFx0fSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBEcmFnRHJvcEFyZWEgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGRyYWdEcm9wQXJlYVdpZGdldDtcblxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy5kcmFnRHJvcEFyZWFJZF0gPSBuZXcgRHJhZ0Ryb3BBcmVhKGNvbmZpZyk7XG5cdFx0ZHJhZ0Ryb3BBcmVhV2lkZ2V0ID0gd2luZG93W2NvbmZpZy5kcmFnRHJvcEFyZWFJZF07XG5cblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoU2FwcGhpcmVXaWRnZXRzLkRyYWdEcm9wQXJlYS5yZWZyZXNoRHJhZ0Ryb3ApO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciByZWZyZXNoRHJhZ0Ryb3AgPSBmdW5jdGlvbigpIHtcblx0XHR0cnkge1xuXHRcdFx0ZHJhZ0Ryb3BBcmVhV2lkZ2V0LnNldHVwRHJhZ2dhYmxlKCk7XG5cdFx0XHRkcmFnRHJvcEFyZWFXaWRnZXQuc2V0dXBEcm9wcGFibGUoKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBEcmFnRHJvcEFyZWEgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdHRoaXMuJGFyZWEgPSAkKCcjJyArIGNvbmZpZy5kcmFnRHJvcEFyZWFJZCk7XG5cdFx0dGhpcy4kYXJlYS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR0aGlzLnNraW4gPSBjb25maWcuc2tpbjtcblx0XHR0aGlzLmZha2VOb3RpZnlXaWRnZXRJZCA9IGNvbmZpZy5mYWtlTm90aWZ5V2lkZ2V0SWQ7XG5cdFx0dGhpcy5zZXR1cERyb3BwYWJsZSgpO1xuXHRcdGlmIChjb25maWcuc29ydGFibGUpIHtcblx0XHRcdHRoaXMuc2V0dXBTb3J0YWJsZSgpO1xuXHRcdH1cblx0XHR0aGlzLnNldHVwRHJhZ2dhYmxlKCk7XG5cdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcblx0XHR0aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcm9wcGFibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuaGFuZGxlRHJvcHBhYmxlKCQodGhpcykpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdERyYWdEcm9wQXJlYS5wcm90b3R5cGUuc2V0dXBEcmFnZ2FibGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdFx0dGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlJykuZHJhZ2dhYmxlKHtcblx0XHRcdGRpc2FibGVkOiB0aGlzLmNvbmZpZy5kaXNhYmxlZCxcblx0XHRcdGNvbnRhaW5tZW50OiB0aGlzLiRhcmVhLFxuXHRcdFx0c2NvcGU6IHRoaXMuY29uZmlnLmRyYWdEcm9wQXJlYUlkLFxuXHRcdFx0ZGVsYXk6IDAsXG5cdFx0XHRzY3JvbGw6IHRydWUsXG5cdFx0XHRyZXZlcnQ6ICdpbnZhbGlkJyxcblx0XHRcdHJldmVydER1cmF0aW9uOiAwLFxuXHRcdFx0Y29ubmVjdFRvU29ydGFibGU6ICcuRHJhZ0Ryb3AtZHJvcHBhYmxlJyxcblx0XHRcdHN0b3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuXHRcdFx0XHRpZiAodWkuaGVscGVyLmhhc0NsYXNzKCd1aS1kcmFnZ2FibGUtZHJhZ2dpbmcnKSkge1xuXHRcdFx0XHRcdGNvbnN0ICR0YXJnZXQgPSBfdGhpcy4kYXJlYS5maW5kKCcudWktZHJvcHBhYmxlLnVpLXNvcnRhYmxlJyk7XG5cblx0XHRcdFx0XHRpZiAoX3RoaXMuc2tpbiA9PT0gJ1RlYW1zJykge1xuXHRcdFx0XHRcdFx0Ly8kKHVpLmhlbHBlcikuaGlkZSgpO1xuXHRcdFx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoJHRhcmdldC5kYXRhKCdmYWtlbm90aWZ5JyksIHVpLmhlbHBlci5kYXRhKCdpdGVtdHlwZScpICsgJ3wnICsgdWkuaGVscGVyLmRhdGEoJ2l0ZW1pZCcpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoXG5cdFx0XHRcdFx0XHRcdCR0YXJnZXQuZGF0YSgnZmFrZW5vdGlmeScpLFxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXBsYWNlaG9sZGVyJykuaW5kZXgoKSArICd8JyArIHVpLmhlbHBlci5kYXRhKCdpdGVtaWQnKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0RHJhZ0Ryb3BBcmVhLnByb3RvdHlwZS5zZXR1cERyb3BwYWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJvcHBhYmxlJykuZHJvcHBhYmxlKHtcblx0XHRcdGhvdmVyQ2xhc3M6ICdob3ZlcmVkJyxcblx0XHRcdGFkZENsYXNzZXM6IHRydWUsXG5cdFx0XHRkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG5cdFx0XHRzY29wZTogdGhpcy5jb25maWcuZHJhZ0Ryb3BBcmVhSWQsXG5cdFx0XHR0b2xlcmFuY2U6ICdwb2ludGVyJyxcblx0XHRcdGRyb3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuXHRcdFx0XHRpZiAoX3RoaXMuc2tpbiA9PT0gJ1RlYW1zJykge1xuXHRcdFx0XHRcdCQodWkuZHJhZ2dhYmxlKS5oaWRlKCk7XG5cdFx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoXG5cdFx0XHRcdFx0XHQkKGV2ZW50LnRhcmdldCkuZGF0YSgnZmFrZW5vdGlmeScpLFxuXHRcdFx0XHRcdFx0dWkuZHJhZ2dhYmxlLmRhdGEoJ2l0ZW10eXBlJykgKyAnfCcgKyB1aS5kcmFnZ2FibGUuZGF0YSgnaXRlbWlkJylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxuXHRcdFx0XHRcdFx0JChldmVudC50YXJnZXQpLmRhdGEoJ2Zha2Vub3RpZnknKSxcblx0XHRcdFx0XHRcdF90aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcmFnZ2FibGUtcGxhY2Vob2xkZXInKS5pbmRleCgpICsgJ3wnICsgdWkuZHJhZ2dhYmxlLmRhdGEoJ2l0ZW1pZCcpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLnNldHVwU29ydGFibGUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLiRhcmVhLmZpbmQoJy5EcmFnRHJvcC1kcm9wcGFibGUnKS5zb3J0YWJsZSh7XG5cdFx0XHRkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG5cdFx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcblx0XHRcdGNvbnRhaW5tZW50OiB0aGlzLiRhcmVhLFxuXHRcdFx0dG9sZXJhbmNlOiAncG9pbnRlcicsXG5cdFx0XHRyZXZlcnQ6IDIwMCxcblx0XHRcdGl0ZW1zOiAnLkRyYWdEcm9wLWRyb3BwYWJsZS1pdGVtcyAuRHJhZ0Ryb3AtZHJhZ2dhYmxlJyxcblx0XHRcdHBsYWNlaG9sZGVyOiAnRHJhZ0Ryb3AtZHJhZ2dhYmxlLXBsYWNlaG9sZGVyJyxcblx0XHR9KTtcblx0fTtcblxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kYXJlYS5vbignY2xpY2snLCAnLkRyYWdEcm9wLWRyYWdnYWJsZSBpbnB1dCcsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRjb25zdCAkY2hlY2tib3ggPSAkKGV2dC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdGNvbnN0ICRkcm9wcGFibGUgPSAkY2hlY2tib3guY2xvc2VzdCgnLkRyYWdEcm9wLWRyb3BwYWJsZScpO1xuXHRcdFx0Y29uc3QgJGRyYWdnYWJsZSA9ICRjaGVja2JveC5jbG9zZXN0KCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlJyk7XG5cdFx0XHRjb25zdCAkYWN0aW9uID0gJGRyYWdnYWJsZS5maW5kKCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXNlbGVjdC1hY3Rpb24gYScpO1xuXG5cdFx0XHQkYWN0aW9uLnRyaWdnZXIoJ2NsaWNrJyk7XG5cblx0XHRcdGlmICgkZHJvcHBhYmxlLmhhc0NsYXNzKCdhbGxvd011bHRpcGxlJykpIHtcblx0XHRcdFx0aWYgKCRjaGVja2JveC5wcm9wKCdjaGVja2VkJykpIHtcblx0XHRcdFx0XHQvLyRjaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXHRcdFx0XHRcdCRkcmFnZ2FibGUuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8kY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHRcdFx0XHRcdCRkcmFnZ2FibGUucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL190aGlzLmhhbmRsZURyb3BwYWJsZSgkZHJvcHBhYmxlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuJGFyZWEub24oJ2NsaWNrJywgJy5EcmFnRHJvcC1kcmFnZ2FibGUtc2VsZWN0LWFjdGlvbiBhJywgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0RHJhZ0Ryb3BBcmVhLnByb3RvdHlwZS5oYW5kbGVEcm9wcGFibGUgPSBmdW5jdGlvbigkZHJvcHBhYmxlKSB7XG5cdFx0aWYgKCRkcm9wcGFibGUuaGFzQ2xhc3MoJ2FsbG93TXVsdGlwbGUnKSkge1xuXHRcdFx0dmFyICRhY3Rpb25zID0gJGRyb3BwYWJsZS5maW5kKCcuRHJhZ0Ryb3AtZHJvcHBhYmxlLWludHJvJyk7XG5cdFx0XHR2YXIgY2hrU2VsZWN0ZWQgPSAkZHJvcHBhYmxlLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJykubGVuZ3RoO1xuXHRcdFx0aWYgKGNoa1NlbGVjdGVkID4gMCkge1xuXHRcdFx0XHQkYWN0aW9ucy5maW5kKCdhLCBidXR0b24nKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRhY3Rpb25zLmZpbmQoJ2EsIGJ1dHRvbicpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRkcm9wcGFibGUuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkRyYWdEcm9wQXJlYSA9IHtcblx0XHRjcmVhdGU6IGNyZWF0ZSxcblx0XHRyZWZyZXNoRHJhZ0Ryb3A6IHJlZnJlc2hEcmFnRHJvcCxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBEcm9wZG93bkNhdGVnb3JpZXMgKi9cbihmdW5jdGlvbiAoJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0ZnVuY3Rpb24gb3B0R3JvdXBTZXRWYWx1ZShzZWxlY3RJZCwgaW5wdXRCb3hJZCwgYnV0dG9uSWQpIHtcblx0XHR2YXIgdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdElkKS52YWx1ZTtcblx0XHQkKCcjJyArIGlucHV0Qm94SWQpLnZhbCh2KTtcblx0XHQkKCcjJyArIHNlbGVjdElkICsgJyBvcHRpb25bc2VsZWN0ZWRdJykucmVtb3ZlQXR0cignc2VsZWN0ZWQnKTtcblxuXHRcdGlmICh2ID4gLTEpIHtcblx0XHRcdCQoJyMnICsgc2VsZWN0SWQgKyAnIG9wdGlvblt2YWx1ZT1cIicgKyB2ICsgJ1wiXScpLmF0dHIoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG5cdFx0fVxuXG5cdFx0JCgnIycgKyBidXR0b25JZCkuY2xpY2soKTtcblx0XHQkKCcjczJpZF8nICsgc2VsZWN0SWQpLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci1hY3RpdmUnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIE9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAoYSwgYikge1xuXHRcdHZhciBfZSA9ICQoJyMnICsgYS5jb250cm9sdG92YWxpZGF0ZSk7XG5cdFx0dmFyIGlzVmFsaWQgPSBfZS5maW5kKCdvcHRpb25bc2VsZWN0ZWRdJykubGVuZ3RoO1xuXHRcdHZhciBoYXNTaWJsaW5nX01hbmRhdG9yeVNlbGVjdDIgPSBfZS5wcmV2KCdkaXYuc2VsZWN0Mi1jb250YWluZXIuTWFuZGF0b3J5JykubGVuZ3RoO1xuXG5cdFx0aWYgKGhhc1NpYmxpbmdfTWFuZGF0b3J5U2VsZWN0Mikge1xuXHRcdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdFx0X2UucHJldignZGl2LnNlbGVjdDItY29udGFpbmVyLk1hbmRhdG9yeScpLnJlbW92ZUNsYXNzKCdOb3RfVmFsaWQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9lLnByZXYoJ2Rpdi5zZWxlY3QyLWNvbnRhaW5lci5NYW5kYXRvcnknKS5hZGRDbGFzcygnTm90X1ZhbGlkJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlzVmFsaWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRPcHRHcm91cFZhbGlkYXRvcihvcHRHcm91cEVsZW1lbnRJZCkge1xuXHRcdE9zUGFnZV9WYWxpZGF0b3JzLnB1c2goe1xuXHRcdFx0Y29udHJvbHRvdmFsaWRhdGU6IG9wdEdyb3VwRWxlbWVudElkLFxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdGVycm9ybWVzc2FnZTogJ1JlcXVpcmVkIGZpZWxkIScsXG5cdFx0XHRldmFsdWF0aW9uZnVuY3Rpb246ICdTYXBwaGlyZVdpZGdldHMuRHJvcGRvd25DYXRlZ29yaWVzLk9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAnLFxuXHRcdFx0aW5pdGlhbHZhbHVlOiAnJyxcblx0XHRcdGlzdmFsaWQ6IHRydWUsXG5cdFx0fSk7XG5cdH1cblxuXHRTYXBwaGlyZVdpZGdldHMuRHJvcGRvd25DYXRlZ29yaWVzID0ge1xuXHRcdG9wdEdyb3VwU2V0VmFsdWUsXG5cdFx0T3NDdXN0b21WYWxpZGF0b3JPcHRHcm91cCxcblx0XHRhZGRPcHRHcm91cFZhbGlkYXRvcixcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpOyIsIi8qIENvbXBvbmVudCBEcm9wem9uZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR3aW5kb3cuRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG5cblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdGJpbmRFdmVudHMoY29uZmlnKTtcblxuXHRcdFx0Y29uc3QgbXlEcm9wem9uZSA9IG5ldyB3aW5kb3cuRHJvcHpvbmUoY29uZmlnLmhpZGRlbklucHV0Q29udGFpbmVyLCB7XG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0IHByZXZGaWxlO1xuXG5cdFx0XHRcdFx0Y29uc3QgZmlsZXNMaXN0ID0gY29uZmlnLmZpbGVzTGlzdCA/IGNvbmZpZy5maWxlc0xpc3Quc3BsaXQoJywnKSA6IFtdO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIGZpbGVzTGlzdCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgbW9ja0ZpbGUgPSB7IG5hbWU6IGl0ZW0sIHNpemU6IDEyMzQ1Njc4IH07XG5cblx0XHRcdFx0XHRcdHRoaXMuZW1pdCgnYWRkZWRmaWxlJywgbW9ja0ZpbGUpO1xuXHRcdFx0XHRcdFx0dGhpcy5lbWl0KCdjb21wbGV0ZScsIG1vY2tGaWxlKTtcblx0XHRcdFx0XHRcdHRoaXMuZmlsZXMucHVzaChtb2NrRmlsZSk7XG5cblx0XHRcdFx0XHRcdCQoYCR7Y29uZmlnLmhpZGRlbklucHV0Q29udGFpbmVyfSAuZHotZmlsZW5hbWVgKS5hdHRyKCd0aXRsZScsIGl0ZW0pO1xuXG5cdFx0XHRcdFx0XHRwcmV2RmlsZSA9IG1vY2tGaWxlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgrY29uZmlnLm1heEZpbGVzID09PSAxICYmIGNvbmZpZy5pc1JlcGxhY2VQcmV2aW91cykge1xuXHRcdFx0XHRcdFx0dGhpcy5vbignYWRkZWRmaWxlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChwcmV2RmlsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVGaWxlKHByZXZGaWxlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJG5vdGlmeUlucHV0ID0gJChgIyR7Y29uZmlnLm5vdGlmeUlucHV0SWR9YCk7XG5cblx0XHRcdFx0XHR0aGlzLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZmlsZSwgcmVzcG9uc2VUZXh0KSB7XG5cdFx0XHRcdFx0XHRwcmV2RmlsZSA9IGZpbGU7XG5cblx0XHRcdFx0XHRcdCQoYCMke2NvbmZpZy5ub3RpZnlJbnB1dElkfSAuZHotZmlsZW5hbWVgKS5hdHRyKCd0aXRsZScsIGZpbGUubmFtZSk7XG5cdFx0XHRcdFx0XHQkbm90aWZ5SW5wdXQudmFsKHJlc3BvbnNlVGV4dCk7XG5cdFx0XHRcdFx0XHQkbm90aWZ5SW5wdXQuY2hhbmdlKCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR0aGlzLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGZpbGUsIHJlc3BvbnNlVGV4dCkge1xuXHRcdFx0XHRcdFx0cHJldkZpbGUgPSBmaWxlO1xuXG5cdFx0XHRcdFx0XHQkbm90aWZ5SW5wdXQudmFsKHJlc3BvbnNlVGV4dCk7XG5cdFx0XHRcdFx0XHQkbm90aWZ5SW5wdXQuY2hhbmdlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0JChgIyR7Y29uZmlnLndpZGdldElkfSAuVXBsb2FkTWVzc2FnZUNsYXNzYCkub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0JChgIyR7Y29uZmlnLndpZGdldElkfSAuZHotY2xpY2thYmxlYCkuY2xpY2soKTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuRHJvcHpvbmUgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IEV4cGFuZGFibGVMaW5rICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IHdpZGdldElEID0+IHtcclxuXHRcdGNvbnN0ICRlbGVtZW50V3JhcHBlciA9ICQoYCMke3dpZGdldElEfWApO1xyXG5cclxuXHRcdGlmICgkZWxlbWVudFdyYXBwZXIucGFyZW50KCcuRXhwYW5kYWJsZUxpc3QnKS5oYXNDbGFzcygnSGlkZVdoZW5FbXB0eScpKSB7XHJcblx0XHRcdGNvbnN0IHRleHQgPSAkZWxlbWVudFdyYXBwZXIuZmluZCgnLkV4cGFuZGFibGVMaW5rX19Db250ZW50JykudGV4dCgpO1xyXG5cclxuXHRcdFx0aWYgKHRleHQubGVuZ3RoID09PSAwKSAkZWxlbWVudFdyYXBwZXIucGFyZW50KCcuRXhwYW5kYWJsZUxpc3QnKS5oaWRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0YmluZEV2ZW50cyh3aWRnZXRJRCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYmluZEV2ZW50cyA9IHdpZGdldElEID0+IHtcclxuXHRcdCQoYCMke3dpZGdldElEfSAuRXhwYW5kYWJsZUxpbmtfX0hlYWRlcmApLmNsaWNrKCgpID0+IG9wZW5DbG9zZShgIyR7d2lkZ2V0SUR9YCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wZW5DbG9zZSA9IGVsZW1lbnRJRCA9PiB7XHJcblx0XHQvLyBXaGVuIHRoZSBleHBhbmRhYmxlcyBhcmUgaW5zaWRlIGEgY29udGFpbmVyIHdpdGggY2xhc3MgRXhwYW5kYWJsZUxpbmtHcm91cCwgd2lsbCBhY3QgbGlrZSBhIGV4cGFuZGFibGUgZ3JvdXBcclxuXHRcdGNvbnN0ICRsaW5rR3JvdXAgPSAkKGVsZW1lbnRJRCkuY2xvc2VzdCgnLkV4cGFuZGFibGVMaW5rR3JvdXAnKTtcclxuXHJcblx0XHRpZiAoJGxpbmtHcm91cC5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgJGV4cGFuZGFibGVzID0gJGxpbmtHcm91cC5maW5kKCcuRXhwYW5kYWJsZUxpbmstLWV4cGFuZGVkJykubm90KGVsZW1lbnRJRCk7XHJcblxyXG5cdFx0XHQkZXhwYW5kYWJsZXMucmVtb3ZlQ2xhc3MoJ0V4cGFuZGFibGVMaW5rLS1leHBhbmRlZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoZWxlbWVudElEKS50b2dnbGVDbGFzcygnRXhwYW5kYWJsZUxpbmstLWV4cGFuZGVkJyk7XHJcblxyXG5cdFx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5SZXNpemVQYXJlbnRJZnJhbWUpIHtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLlJlc2l6ZVBhcmVudElmcmFtZS5yZXNpemUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuRXhwYW5kYWJsZUxpbmsgPSB7IGNyZWF0ZSB9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IEZ1bGxTY3JlZW5UYWJzV3JhcHBlciAqL1xuU2FwcGhpcmVXaWRnZXRzLkZ1bGxTY3JlZW5UYWJzV3JhcHBlciA9ICgpID0+IHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLlRhYldyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0ICR3cmFwcGVyID0gJCh0aGlzKS5jbG9zZXN0KCcuRnVsbFNjcmVlblRhYnNXcmFwcGVyX19UYWJzJyk7XG5cdFx0XHQkd3JhcHBlci5maW5kKCcqJykucmVtb3ZlQ2xhc3MoJ0FjdGl2ZScpO1xuXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdBY3RpdmUnKTtcblx0XHR9KTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IFBlcnNvbkNhcmQgKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHR2YXIgUGVyc29uQ2FyZEV2ZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0JCgnLklzRXhwYW5kYWJsZSAuUGVyc29uQ2FyZF9faGVhZGVyTGVmdEluZm8sIC5Jc0V4cGFuZGFibGUgLlBlcnNvbkNhcmRfX2NvbnRlbnQnKVxuXHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkaGVhZGVyID0gJCh0aGlzKS5jbG9zZXN0KCcuUGVyc29uQ2FyZF9oZWFkZXInKTtcblx0XHRcdFx0Y29uc3QgJG9uQ2FyZE9wZW5MaW5rID0gJGhlYWRlci5maW5kKCcuUGVyc29uQ2FyZF9fT25DYXJkT3BlbkxpbmsnKTtcblx0XHRcdFx0Y29uc3QgJG9uQ2FyZENsb3NlTGluayA9ICRoZWFkZXIuZmluZCgnLlBlcnNvbkNhcmRfX09uQ2FyZENsb3NlQ2xpY2snKTtcblx0XHRcdFx0Y29uc3QgJGNvbnRlbnQgPSAkaGVhZGVyLm5leHQoKTtcblxuXHRcdFx0XHRjb25zdCAkY2FyZCA9ICQodGhpcykuY2xvc2VzdCgnLlBlcnNvbkNhcmQnKTtcblxuXHRcdFx0XHQkY29udGVudC5yZW1vdmVDbGFzcygnSXNFeHBhbmRlZCcpO1xuXG5cdFx0XHRcdGlmICgkY2FyZC5oYXNDbGFzcygnSXNPcGVuJykpIHtcblx0XHRcdFx0XHQkb25DYXJkQ2xvc2VMaW5rLnRyaWdnZXJIYW5kbGVyKCdjbGljaycpO1xuXHRcdFx0XHRcdCRjYXJkLnJlbW92ZUNsYXNzKCdJc09wZW4nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkb25DYXJkT3BlbkxpbmsudHJpZ2dlckhhbmRsZXIoJ2NsaWNrJyk7XG5cblx0XHRcdFx0XHQkY29udGVudC5hZGRDbGFzcygnSXNFeHBhbmRlZCcpO1xuXG5cdFx0XHRcdFx0JGNhcmQuYWRkQ2xhc3MoJ0lzT3BlbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblxuXHQkKCcuU3RvcFByb3BhZ2F0aW9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fSk7XG5cblx0UGVyc29uQ2FyZEV2ZW50KCk7XG5cblx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChQZXJzb25DYXJkRXZlbnQpO1xufSk7XG4iLCIvKiBDb21wb25lbnQgR2VuZXJpY0dhbGxlcnkgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IEdlbmVyaWNHYWxsZXJ5KGNvbmZpZyk7XG5cdH07XG5cblx0dmFyIEdlbmVyaWNHYWxsZXJ5ID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyB0aGlzLmNvbmZpZy53aWRnZXRJZCkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0dGhpcy5lcXVhbEhlaWdodCA9IHRoaXMuY29uZmlnLmVxdWFsSGVpZ2h0O1xuXHRcdGlmIChcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCc+IC5HZW5lcmljR2FsbGVyeS1jb250ZW50ID4gc3BhbicpLmxlbmd0aCA9PT0gMSAmJlxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5HZW5lcmljR2FsbGVyeS1jb250ZW50ID4gc3BhbicpLmhhc0NsYXNzKCdMaXN0UmVjb3JkcycpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLiRnYWxsZXJ5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJz4gLkdlbmVyaWNHYWxsZXJ5LWNvbnRlbnQgPiBzcGFuLkxpc3RSZWNvcmRzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGdhbGxlcnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuR2VuZXJpY0dhbGxlcnktY29udGVudCcpO1xuXHRcdH1cblxuXHRcdGxldCB0ZW1wbGF0ZUNvbHVtbiA9ICdyZXBlYXQoJyArIHRoaXMuY29uZmlnLmNvbHVtblNpemluZyArICcsIG1pbm1heCgnICsgdGhpcy5jb25maWcuY29sdW1uTWluV2lkdGggKyAnLCAxZnIpKSc7XG5cblx0XHRpZiAodGhpcy5jb25maWcubWF4SXRlbXNSb3cgPiAwKSB7XG5cdFx0XHR0ZW1wbGF0ZUNvbHVtbiA9IGByZXBlYXQoJHt0aGlzLmNvbmZpZy5jb2x1bW5TaXppbmd9LCBtaW5tYXgobWF4KCR7dGhpcy5jb25maWcuY29sdW1uTWluV2lkdGh9LCAoMTAwJSAtICgke3RoaXMuY29uZmlnLm1heEl0ZW1zUm93fSAtIDEpICogJHt0aGlzLmNvbmZpZy5nYXBDb2x1bW59cHgpIC8gJHt0aGlzLmNvbmZpZy5tYXhJdGVtc1Jvd30pLCAxZnIpKWA7XG5cdFx0fVxuXG5cdFx0dGhpcy4kZ2FsbGVyeS5jc3Moe1xuXHRcdFx0ZGlzcGxheTogJ2dyaWQnLFxuXHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczogdGVtcGxhdGVDb2x1bW4sXG5cdFx0fSk7XG5cblx0XHR0aGlzLiRnYWxsZXJ5SXRlbXMgPSB0aGlzLiRnYWxsZXJ5LmNoaWxkcmVuKCk7XG5cdFx0dGhpcy4kZ2FsbGVyeUl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ0dlbmVyaWNHYWxsZXJ5LWl0ZW0nKSkge1xuXHRcdFx0XHQkKHRoaXMpLndyYXAoJzxkaXYgY2xhc3M9XCJHZW5lcmljR2FsbGVyeS1pdGVtXCI+PC9kaXY+Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkdlbmVyaWNHYWxsZXJ5ID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IEdlbmVyaWNHcmlkICovXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgYWxsR2VuZXJpY0dyaWRzID0gW107XG5cblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBHZW5lcmljR3JpZChjb25maWcpO1xuXHRcdGFsbEdlbmVyaWNHcmlkcy5wdXNoKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKTtcblx0fTtcblxuXHR2YXIgR2VuZXJpY0dyaWQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNvbmZpZyk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkdlbmVyaWNHcmlkID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHR9O1xuXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7IiwiLyogQ29tcG9uZW50IEhvcml6b250YWxUb29sYmFyICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XHJcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IGluaXQoJHdpZGdldCwgY29uZmlnKSk7XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5pc0Fycm93TmF2aWdhdGlvbikge1xyXG5cdFx0XHQkKHdpbmRvdykubG9hZCgoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgJGl0ZW1XcmFwcGVyID0gJHdpZGdldC5maW5kKCcuTWVudUl0ZW1XcmFwcGVyLkFjdGl2ZScpO1xyXG5cdFx0XHRcdGlmICgkaXRlbVdyYXBwZXIubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHQkaXRlbVdyYXBwZXJbMF0uc2Nyb2xsSW50b1ZpZXcoe1xyXG5cdFx0XHRcdFx0XHRiZWhhdmlvcjogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0XHRibG9jazogJ2VuZCcsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGluaXQgPSAoJHdpZGdldCwgY29uZmlnKSA9PiB7XHJcblx0XHRpZiAoY29uZmlnLmlzQXJyb3dOYXZpZ2F0aW9uKSB7XHJcblx0XHRcdGhhbmRsZUFycm93cygkd2lkZ2V0KTtcclxuXHJcblx0XHRcdGNvbnN0ICR0b29sYmFySXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcycpO1xyXG5cdFx0XHRjb25zdCAkbGlzdEl0ZW1zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLkxpc3RSZWNvcmRzJyk7XHJcblx0XHRcdGNvbnN0ICRidG5SaWdodCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX3JpZ2h0QnRuJyk7XHJcblx0XHRcdGNvbnN0ICRidG5MZWZ0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fbGVmdEJ0bicpO1xyXG5cclxuXHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGwoKCkgPT4gaGFuZGxlQXJyb3dzKCR3aWRnZXQpKTtcclxuXHJcblx0XHRcdCRidG5SaWdodC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHRcdHZhciBtYXhTY3JvbGxsID0gJGxpc3RJdGVtcy53aWR0aCgpIC0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xyXG5cdFx0XHRcdHZhciBzaWRlV2lkdGggPSBtYXhTY3JvbGxsIC0gNTA7XHJcblx0XHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KGN1cnJlbnRTY3JvbGwgKyA1MCk7XHJcblxyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsID09IHNpZGVXaWR0aCkgJGJ0blJpZ2h0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsICE9IDUwKSAkYnRuTGVmdC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkYnRuTGVmdC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHRcdHZhciBtYXhTY3JvbGxsID0gJGxpc3RJdGVtcy53aWR0aCgpIC0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xyXG5cdFx0XHRcdHZhciBzaWRlV2lkdGggPSBtYXhTY3JvbGxsIC0gNTA7XHJcblx0XHRcdFx0JHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KGN1cnJlbnRTY3JvbGwgLSA1MCk7XHJcblxyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsICE9IHNpZGVXaWR0aCkgJGJ0blJpZ2h0LnJlbW92ZUNsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsID09IDUwKSAkYnRuTGVmdC5hZGRDbGFzcygnRGlzYWJsZWQnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS50b29sYmFyJywgKCkgPT4gaGFuZGxlQXJyb3dzKCR3aWRnZXQpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhhbmRsZVJlc2l6ZSgkd2lkZ2V0KTtcclxuXHRcdFx0YmluZEV2ZW50c0NsaWNrKCR3aWRnZXQpO1xyXG5cclxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUudG9vbGJhcicsICgpID0+IGhhbmRsZVJlc2l6ZSgkd2lkZ2V0KSk7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignVG9vbGJhckZpeGVkJywgKCkgPT4gaGFuZGxlUmVzaXplKCR3aWRnZXQpLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aGFuZGxlQXJyb3dzID0gJHdpZGdldCA9PiB7XHJcblx0XHRjb25zdCAkdG9vbGJhckl0ZW1zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMnKTtcclxuXHRcdGNvbnN0ICRsaXN0SXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuTGlzdFJlY29yZHMnKTtcclxuXHRcdGNvbnN0ICRidG5SaWdodCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX3JpZ2h0QnRuJyk7XHJcblx0XHRjb25zdCAkYnRuTGVmdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX2xlZnRCdG4nKTtcclxuXHJcblx0XHRsZXQgY3VycmVudFNjcm9sbCA9ICR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0bGV0IG1lbnVXaWR0aCA9ICRsaXN0SXRlbXMud2lkdGgoKTtcclxuXHRcdGxldCBleHRlcm5hbFdpZHRoID0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xyXG5cdFx0dmFyIG1heFNjcm9sbGwgPSBtZW51V2lkdGggLSBleHRlcm5hbFdpZHRoO1xyXG5cclxuXHRcdGlmIChleHRlcm5hbFdpZHRoID4gbWVudVdpZHRoKSB7XHJcblx0XHRcdCRidG5MZWZ0LmhpZGUoKTtcclxuXHRcdFx0JGJ0blJpZ2h0LmhpZGUoKTtcclxuXHJcblx0XHRcdCR3aWRnZXQuZmluZCgnLlRvb2xiYXJfY29udGFpbmVyJykuYWRkQ2xhc3MoJ1Rvb2xiYXJfY29udGFpbmVyLS1ub2Fycm93cycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGJ0bkxlZnQuc2hvdygpO1xyXG5cdFx0XHQkYnRuUmlnaHQuc2hvdygpO1xyXG5cclxuXHRcdFx0JHdpZGdldC5maW5kKCcuVG9vbGJhcl9jb250YWluZXInKS5yZW1vdmVDbGFzcygnVG9vbGJhcl9jb250YWluZXItLW5vYXJyb3dzJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGN1cnJlbnRTY3JvbGwgPT09IDApICRidG5MZWZ0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xyXG5cdFx0ZWxzZSAkYnRuTGVmdC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcclxuXHJcblx0XHRpZiAoY3VycmVudFNjcm9sbCA+PSBtYXhTY3JvbGxsKSAkYnRuUmlnaHQuYWRkQ2xhc3MoJ0Rpc2FibGVkJyk7XHJcblx0XHRlbHNlICRidG5SaWdodC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcclxuXHR9O1xyXG5cclxuXHRoYW5kbGVSZXNpemUgPSAkd2lkZ2V0ID0+IHtcclxuXHRcdGxldCBpdGVtc1RvdGFsID0gMDtcclxuXHRcdGxldCBoYXNJdGVtc0hpZGRlbiA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0ICRsaXN0SXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuTGlzdFJlY29yZHMnKTtcclxuXHRcdCRsaXN0SXRlbXMuZmluZCgnPiBhW3VpXScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblxyXG5cdFx0Y29uc3QgbWVudVdpZHRoID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMnKS5vdXRlcldpZHRoKHRydWUpO1xyXG5cclxuXHRcdCRsaXN0SXRlbXMuZmluZCgnYVt1aV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpdGVtc1RvdGFsICs9IHBhcnNlSW50KCQodGhpcykub3V0ZXJXaWR0aCh0cnVlKSwgMTApO1xyXG5cclxuXHRcdFx0aWYgKGl0ZW1zVG90YWwgKyA5MCA8IG1lbnVXaWR0aCkge1xyXG5cdFx0XHRcdCQodGhpcykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aGFzSXRlbXNIaWRkZW4gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChoYXNJdGVtc0hpZGRlbiAmJiAhJGxpc3RJdGVtcy5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKS5sZW5ndGgpIHtcclxuXHRcdFx0JHdpZGdldFxyXG5cdFx0XHRcdC5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKVxyXG5cdFx0XHRcdC5jbG9uZSgpXHJcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXHJcblx0XHRcdFx0LmFwcGVuZFRvKCRsaXN0SXRlbXMpO1xyXG5cclxuXHRcdFx0aGFzSXRlbXNIaWRkZW4gPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCAkb3B0aW9uc0xpc3QgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuVG9vbGJhcl9fTW9yZU9wdGlvbnNMaXN0Jyk7XHJcblxyXG5cdFx0JGxpc3RJdGVtcy5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKS5jc3MoJ2Rpc3BsYXknLCAkb3B0aW9uc0xpc3QubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJyk7XHJcblxyXG5cdFx0Y29uc3QgJGhpZGRlbkl0ZW1zID0gJGxpc3RJdGVtcy5maW5kKCc+IGFbdWldJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJCh0aGlzKS5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkb3B0aW9uc0xpc3QuZW1wdHkoKTtcclxuXHJcblx0XHRjb25zdCBoYXNOb3RpZmljYXRpb25IaWRkZW4gPSAkaGlkZGVuSXRlbXMuZmluZCgnLk1lbnVJdGVtV3JhcHBlcl9CYWRnZTpub3QoOmVtcHR5KScpLmxlbmd0aCAhPT0gMDtcclxuXHRcdGNvbnN0ICR0cmlnZ2VyID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLlRvb2xiYXJfX01vcmVPcHRpb25zSWNvbicpO1xyXG5cclxuXHRcdGlmIChoYXNOb3RpZmljYXRpb25IaWRkZW4pICR0cmlnZ2VyLmFkZENsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9uc0ljb24tLW5vdGlmaWNhdGlvbicpO1xyXG5cdFx0ZWxzZSAkdHJpZ2dlci5yZW1vdmVDbGFzcygnVG9vbGJhcl9fTW9yZU9wdGlvbnNJY29uLS1ub3RpZmljYXRpb24nKTtcclxuXHJcblx0XHQkaGlkZGVuSXRlbXNcclxuXHRcdFx0LmNsb25lKClcclxuXHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXHJcblx0XHRcdC5hcHBlbmRUbygkb3B0aW9uc0xpc3QpO1xyXG5cdH07XHJcblxyXG5cdGJpbmRFdmVudHNDbGljayA9ICR3aWRnZXQgPT4ge1xyXG5cdFx0Y29uc3QgJG1vcmVPcHRpb25zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLlRvb2xiYXJfX01vcmVPcHRpb25zJyk7XHJcblx0XHRjb25zdCAkdHJpZ2dlciA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5Ub29sYmFyX19Nb3JlT3B0aW9uc0ljb24nKTtcclxuXHRcdGNvbnN0ICRvcHRpb25zTGlzdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX01vcmVPcHRpb25zTGlzdCcpO1xyXG5cclxuXHRcdCR0cmlnZ2VyLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRcdFx0JG1vcmVPcHRpb25zLnRvZ2dsZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9ucy0tb3BlbicpO1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRvcHRpb25zTGlzdC5vbignbW91c2V3aGVlbCcsIGV2ZW50ID0+IHtcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCdib2R5Jykub24oJ21vdXNldXAnLCBldmVudCA9PiB7XHJcblx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkucGFyZW50cygpO1xyXG5cclxuXHRcdFx0aWYgKCEkdGFyZ2V0LmFuZFNlbGYoKS5pcygkbW9yZU9wdGlvbnMpKSB7XHJcblx0XHRcdFx0JG1vcmVPcHRpb25zLnJlbW92ZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9ucy0tb3BlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuSG9yaXpvbnRhbFRvb2xiYXIgPSB7XHJcblx0XHRjcmVhdGUsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBIb3VyUGlja2VyICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y2xhc3MgSG91clBpY2tlciB7XG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHQvLyBPcHRpb25zIHVzZWQgYnkgalF1ZXJ5IFRpbWVycGlja2VyIChFeHRlcm5hbCBMaWIpXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdH07XG5cblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Ib3VyUGlja2VyLmFsbEludGFuY2VzLnB1c2goY29uZmlnLndpZGdldElkKTtcblxuXHRcdFx0dGhpcy5vbkNvbXBvbmVudEluaXQoKTtcblx0XHR9XG5cblx0XHRpc0NvbXBvbmVudFZhbGlkKCkge1xuXHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcblx0XHRcdGxldCBtZXNzYWdlID0gYENvbXBvbmVudCBIb3VyUGlja2VyICgke3RoaXMub3B0aW9ucy53aWRnZXRJZH0pOmA7XG5cdFx0XHRsZXQgZXJyb3JzID0gJyc7XG5cblx0XHRcdGlmICh0aGlzLiRtb2RlbC5sZW5ndGggJiYgdGhpcy4kbW9kZWwubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRlcnJvcnMgPSBgJHtlcnJvcnN9IC0gTmVlZHMgb25lIC0gYW5kIGp1c3Qgb25lIC0gSW5wdXQgZWxlbWVudC5gO1xuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMuJG1vZGVsLmxlbmd0aCAmJiB0aGlzLiRjb21wb25lbnQuZmluZCgnLkhvdXJQaWNrZXJfX1BsYWNlaG9sZGVyIGlucHV0JykubGVuZ3RoKSB7XG5cdFx0XHRcdGVycm9ycyA9IGAke2Vycm9yc31cXG4gLSBUaGUgSW5wdXQgZWxlbWVudCBtdXN0IGJlIG9mIHR5cGUgVGV4dC5gO1xuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXZhbGlkKSBjb25zb2xlLmVycm9yKGAke21lc3NhZ2V9ICR7ZXJyb3JzfWApO1xuXG5cdFx0XHRyZXR1cm4gdmFsaWQ7XG5cdFx0fVxuXG5cdFx0c2V0Q29tcG9uZW50UG9zaXRpb24oKSB7XG5cdFx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLnVpLXRpbWVwaWNrZXItY29udGFpbmVyJyk7XG5cdFx0XHRjb25zdCBsYWJlbExlZnQgPSB0aGlzLiRsYWJlbC5vZmZzZXQoKS5sZWZ0O1xuXHRcdFx0Y29uc3QgbGFiZWxXaWR0aCA9IHRoaXMuJGxhYmVsLndpZHRoKCk7XG5cdFx0XHRjb25zdCBsYWJlbE91dGVyV2lkdGggPSB0aGlzLiRsYWJlbC5vdXRlcldpZHRoKCk7XG5cdFx0XHRjb25zdCB3aWRnZXRPdXRlcldpZHRoID0gJHdpZGdldC5vdXRlcldpZHRoKCk7XG5cdFx0XHRjb25zdCB3aWRnZXRNaW5XaWR0aCA9ICskd2lkZ2V0LmNzcygnbWluLXdpZHRoJykucmVwbGFjZSgncHgnLCAnJyk7XG5cdFx0XHRjb25zdCBpc091dHNpZGVXaW5kb3cgPVxuXHRcdFx0XHRsYWJlbExlZnQgKyBsYWJlbE91dGVyV2lkdGggPiAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpICsgJCh3aW5kb3cpLndpZHRoKCkgLSB3aWRnZXRPdXRlcldpZHRoO1xuXG5cdFx0XHQkd2lkZ2V0LmNzcyh7XG5cdFx0XHRcdGxlZnQ6ICgpID0+IHtcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSBsYWJlbExlZnQgLSAod2lkZ2V0TWluV2lkdGggLSBsYWJlbFdpZHRoKSAvIDI7XG5cblx0XHRcdFx0XHRpZiAoaXNPdXRzaWRlV2luZG93KSB2YWx1ZSA9IGxhYmVsTGVmdCArIGxhYmVsV2lkdGggLSB3aWRnZXRPdXRlcldpZHRoO1xuXHRcdFx0XHRcdGVsc2UgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSBsYWJlbExlZnQ7XG5cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzZXRFbGVtZW50Q2xhc3Moc2VsZWN0b3IsIGNsYXNzTmFtZSkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZSA/ICQoc2VsZWN0b3IpLmFkZENsYXNzKGNsYXNzTmFtZSkgOiBmYWxzZTtcblx0XHR9XG5cblx0XHRkZWZpbmVUaW1lRm9ybWF0KCkge1xuXHRcdFx0bGV0IGZvcm1hdCA9IFtdO1xuXHRcdFx0bGV0IGFtUG0gPSAnJztcblxuXHRcdFx0Zm9ybWF0LnB1c2godGhpcy5vcHRpb25zLmlzMjRoRm9ybWF0ID8gJ0hIJyA6ICdoaCcpO1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5zaG93TWludXRlcykgZm9ybWF0LnB1c2goJ21tJyk7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnNob3dTZWNvbmRzKSBmb3JtYXQucHVzaCgnc3MnKTtcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmlzMjRoRm9ybWF0KSBhbVBtID0gJyBwJztcblxuXHRcdFx0cmV0dXJuIGAke2Zvcm1hdC5qb2luKCc6Jyl9JHthbVBtfWA7XG5cdFx0fVxuXG5cdFx0Y29udmVydFRpbWUxMnRvMjQodmFsdWUpIHtcblx0XHRcdGNvbnN0IFt0aW1lLCBtb2RpZmllcl0gPSB2YWx1ZS5zcGxpdCgnICcpO1xuXHRcdFx0bGV0IFtob3VycywgbWludXRlcyA9ICcwMCcsIHNlY29uZHMgPSAnMDAnXSA9IHRpbWUuc3BsaXQoJzonKTtcblxuXHRcdFx0aWYgKGhvdXJzID09PSAnMTInKSBob3VycyA9ICcwMCc7XG5cdFx0XHRpZiAobW9kaWZpZXIgPT09ICdQTScpIGhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKSArIDEyO1xuXG5cdFx0XHRyZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG5cdFx0fVxuXG5cdFx0Y29udmVydFRpbWVGb3JtYXRUb01hc2sodmFsdWUgPSAnJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoL1thLXpBLVpdKy9nLCAnLS0nKTtcblx0XHR9XG5cblx0XHRvbkNoYW5nZUV2ZW50KHZhbHVlID0gJycpIHtcblx0XHRcdGxldCBtb2RlbCA9ICcwMS0wMS0xOTAwIDAwOjAwOjAwJzsgLy9pLmUuIG51bGxcblx0XHRcdGxldCBsYWJlbCA9IHRoaXMuY29udmVydFRpbWVGb3JtYXRUb01hc2sodGhpcy5vcHRpb25zLnRpbWVGb3JtYXQpO1xuXG5cdFx0XHRpZiAodmFsdWUgJiYgISF2YWx1ZS50cmltKCkpIHtcblx0XHRcdFx0Ly8gVGhpcyBjb25kaXRpb24gaXMgY29ycmVjdCwgbW9kZWwgYWx3YXlzIHVzZXMgdGhlIDI0aCBmb3JtYXRcblx0XHRcdFx0bW9kZWwgPSB0aGlzLm9wdGlvbnMuaXMyNGhGb3JtYXQgPyB2YWx1ZSA6IHRoaXMuY29udmVydFRpbWUxMnRvMjQodmFsdWUpO1xuXHRcdFx0XHRsYWJlbCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmlzTm90aWZ5RW5hYmxlZCkgT3NOb3RpZnlXaWRnZXQodGhpcy5vcHRpb25zLmhvdXJQaWNrZXJGYWtlTm90aWZ5SWQsIG1vZGVsKTtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuaXNUZXh0VHJpZ2dlcmFibGUpIHRoaXMuJGxhYmVsLnRleHQobGFiZWwpO1xuXG5cdFx0XHR0aGlzLiRtb2RlbC52YWwobW9kZWwpO1xuXHRcdFx0dGhpcy4kbW9kZWwuY2hhbmdlKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRvbkNvbXBvbmVudEluaXQoKSB7XG5cdFx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt0aGlzLm9wdGlvbnMud2lkZ2V0SWR9YCk7XG5cdFx0XHR0aGlzLiRtb2RlbCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuSG91clBpY2tlcl9fUGxhY2Vob2xkZXIgaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Ib3VyUGlja2VyX19EaXNwbGF5ZWQgLkhvdXJQaWNrZXJfX0lucHV0VmFsdWUnKTtcblx0XHRcdHRoaXMuJGVsZW1lbnQgPSB0aGlzLiRpbnB1dDtcblxuXHRcdFx0dGhpcy5vcHRpb25zLnRpbWVGb3JtYXQgPSB0aGlzLmRlZmluZVRpbWVGb3JtYXQoKTtcblxuXHRcdFx0aWYgKCF0aGlzLmlzQ29tcG9uZW50VmFsaWQoKSkgcmV0dXJuO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0ICRjb250YWluZXIgPSB0aGlzLiRjb21wb25lbnQ7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc1RleHRUcmlnZ2VyYWJsZSkge1xuXHRcdFx0XHRcdCRjb250YWluZXIuYWRkQ2xhc3MoJ0hvdXJQaWNrZXItLXRleHRUcmlnZ2VyJyk7XG5cblx0XHRcdFx0XHR0aGlzLiRsYWJlbCA9ICRjb250YWluZXIuZmluZCgnLkhvdXJQaWNrZXJfX0Rpc3BsYXllZCAuSG91clBpY2tlcl9fTGFiZWxWYWx1ZScpO1xuXHRcdFx0XHRcdHRoaXMuJGVsZW1lbnQgPSB0aGlzLiRsYWJlbDtcblxuXHRcdFx0XHRcdHRoaXMuJGxhYmVsLnRleHQodGhpcy5jb252ZXJ0VGltZUZvcm1hdFRvTWFzayh0aGlzLm9wdGlvbnMudGltZUZvcm1hdCkpO1xuXG5cdFx0XHRcdFx0dGhpcy4kbGFiZWwub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy4kbGFiZWwudGltZXBpY2tlcigpLm9wZW4oKTtcblxuXHRcdFx0XHRcdFx0dGhpcy5zZXRDb21wb25lbnRQb3NpdGlvbigpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc0NsZWFyYWJsZSkge1xuXHRcdFx0XHRcdHRoaXMuJGJ1dHRvbkNsZWFyID0gJGNvbnRhaW5lci5maW5kKCcuSG91clBpY2tlcl9fRGlzcGxheWVkIC5Ib3VyUGlja2VyX19CdXR0b25DbGVhcicpO1xuXG5cdFx0XHRcdFx0dGhpcy4kYnV0dG9uQ2xlYXIub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKCcnKTtcblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2VFdmVudCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy4kZWxlbWVudC50aW1lcGlja2VyKHtcblx0XHRcdFx0XHQuLi50aGlzLm9wdGlvbnMsXG5cdFx0XHRcdFx0Y2hhbmdlOiB0aW1lID0+IHRoaXMub25DaGFuZ2VFdmVudCh0aW1lID8gJCgpLnRpbWVwaWNrZXIuZm9ybWF0VGltZSh0aGlzLm9wdGlvbnMudGltZUZvcm1hdCwgdGltZSkgOiBudWxsKSxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5zZXRFbGVtZW50Q2xhc3MoJy51aS10aW1lcGlja2VyLWNvbnRhaW5lcicsIHRoaXMub3B0aW9ucy5jdXJyZW50TG9jYWxlID09PSAnQVInID8gJ3J0bCcgOiAnbHRyJyk7XG5cblx0XHRcdFx0dGhpcy4kaW5wdXQucHJvcCgncmVhZG9ubHknLCAhdGhpcy5vcHRpb25zLmlzVHlwZUVuYWJsZWQpO1xuXHRcdFx0XHR0aGlzLiRpbnB1dC5wcm9wKCdwbGFjZWhvbGRlcicsIHRoaXMub3B0aW9ucy50aW1lRm9ybWF0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IEhvdXJQaWNrZXIoY29uZmlnKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuSG91clBpY2tlciA9IHtcblx0XHRjcmVhdGUsXG5cdFx0YWxsSW50YW5jZXM6IFtdLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgSW5wdXRMQVNBICovXG4oZnVuY3Rpb24oKSB7XG5cdHZhciBzZXR1cElucHV0ID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0JCgnYm9keScpLm9mZignY2xpY2snLCAnIycgKyBjb25maWcubGFiZWxJZCk7XG5cdFx0JCgnYm9keScpLm9mZignYmx1ciBjaGFuZ2UgaW5wdXQnLCAnIycgKyBjb25maWcuaW5wdXRJZCk7XG5cblx0XHQkKCcjJyArIGNvbmZpZy5pbnB1dElkKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblxuXHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLmhpZGUoKTtcblx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKS5zaG93KCk7XG5cblx0XHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuaGFuZGxlUHJvbXB0KGNvbmZpZyk7XG5cblx0XHQkKCdib2R5Jykub24oJ2NsaWNrJywgJyMnICsgY29uZmlnLmxhYmVsSWQsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkuaGlkZSgpO1xuXHRcdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuc2hvdygpO1xuXHRcdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuZm9jdXMoKTtcblx0XHR9KTtcblxuXHRcdCQoJ2JvZHknKS5vbignYmx1cicsICcjJyArIGNvbmZpZy5pbnB1dElkLCBmdW5jdGlvbigpIHtcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5oYW5kbGVQcm9tcHQoY29uZmlnKTtcblx0XHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLmhpZGUoKTtcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLnNob3coKTtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuaGFuZGxlUHJvbXB0KGNvbmZpZyk7XG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5hcHBseU1hcmtpbmcoeyB0YXJnZXQ6IGNvbmZpZy5sYWJlbElkIH0pO1xuXHRcdFx0fSwgMjUwKTtcblx0XHR9KTtcblxuXHRcdCQoJ2JvZHknKS5vbignY2hhbmdlIGlucHV0JywgJyMnICsgY29uZmlnLmlucHV0SWQsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkudGV4dCgkKCcjJyArIGNvbmZpZy5pbnB1dElkKS52YWwoKSk7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmFwcGx5TWFya2luZyh7IHRhcmdldDogJ3BhZ2UnIH0pO1xuXHRcdFx0fSwgMjUwKTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgaGFuZGxlUHJvbXB0ID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0aWYgKCEkKCcjJyArIGNvbmZpZy5pbnB1dElkKS52YWwoKS5sZW5ndGgpIHtcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpXG5cdFx0XHRcdC50ZXh0KCQoJyMnICsgY29uZmlnLmlucHV0SWQpLnByb3AoJ3BsYWNlaG9sZGVyJykpXG5cdFx0XHRcdC5jc3MoJ2NvbG9yJywgJyM5OTknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZClcblx0XHRcdFx0LnRleHQoJCgnIycgKyBjb25maWcuaW5wdXRJZCkudmFsKCkpXG5cdFx0XHRcdC5jc3MoJ2NvbG9yJywgJycpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgPSBTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgPSBTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgfHwge307XG5cdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5zZXR1cElucHV0ID0gc2V0dXBJbnB1dDtcblx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmhhbmRsZVByb21wdCA9IGhhbmRsZVByb21wdDtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XHJcblx0Y2xhc3MgSW5wdXRXaXRoQ2xlYXIge1xyXG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XHJcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XHJcblx0XHRcdHRoaXMuJGNsZWFyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhDbGVhci1jbGVhcicpO1xyXG5cdFx0XHR0aGlzLiRub3RpZnlMaW5rID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhDbGVhci1ub3RpZnktbGluaycpO1xyXG5cdFx0XHR0aGlzLiR3aWRnZXRTaGllbGQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aENsZWFyLS1zaGllbGQnKTtcclxuXHRcdFx0dGhpcy5vbkluaXQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRvbkluaXQoKSB7XHJcblx0XHRcdHRoaXMuJGlucHV0Lm9uKCdrZXl1cCcsIGUgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLiRpbnB1dC52YWwoKSAhPT0gJycpIHRoaXMuJGNsZWFyLnNob3coKTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuJGNsZWFyLnNob3coKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLiRpbnB1dC5vbignYmx1cicsICgpID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy4kaW5wdXQudmFsKCkgPT09ICcnKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICgkKCcuZGF0ZXJhbmdlcGlja2VyOnZpc2libGUnKS5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRub3RpZnlMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuJGNsZWFyLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoJycpO1xyXG5cdFx0XHRcdHRoaXMuJGNsZWFyLmhpZGUoKTtcclxuXHRcdFx0XHR0aGlzLiRub3RpZnlMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZiAodGhpcy5jb25maWcuaGFzU2hpZWxkKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0U2hpZWxkLmhpZGUoKTtcclxuXHRcdFx0XHR9LCB0aGlzLmNvbmZpZy5zaGllbGRUaW1lb3V0KTtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcuc2hpZWxkVGltZW91dCA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMuJHdpZGdldFNoaWVsZC5vbignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGNsZWFyLmhpZGUoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBJbnB1dFdpdGhDbGVhcihjb25maWcpKTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLklucHV0V2l0aENsZWFyID0ge1xyXG5cdFx0Y3JlYXRlLFxyXG5cdH07XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcblx0Y2xhc3MgSW5wdXRXaXRoTGlzdCB7XG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdHRoaXMuJHdpZGdldCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKTtcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XG5cdFx0XHR0aGlzLiRsaXN0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19MaXN0Jyk7XG5cblx0XHRcdHRoaXMuJGlucHV0LnZhbCgnJyk7XG5cblx0XHRcdHRoaXMub25Jbml0KCk7XG5cdFx0fVxuXG5cdFx0b25Jbml0KCkge1xuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2tleXVwJywgZSA9PiB7XG5cdFx0XHRcdC8vIEdldHRpbmcgZWxlbWVudHMgYWdhaW4gaW4gb3JkZXIgdG8gd29yayB3aGVuIHRoaXMgY29tcG9uZW50IGlzIGNsb25lZCAoZS5nLiB3aGVuIHVzaW5nIGluc2lkZSBBY3Rpb25zTWVudSlcblx0XHRcdFx0dGhpcy4kd2lkZ2V0ID0gJChgIyR7dGhpcy5jb25maWcud2lkZ2V0SWR9YCk7XG5cdFx0XHRcdGNvbnN0ICRpbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlXScpO1xuXHRcdFx0XHRjb25zdCAkbGlzdCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoTGlzdF9fTGlzdCcpO1xuXHRcdFx0XHR0aGlzLiRoaWRkZW5JbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoTGlzdF9fSGlkZGVuSW5wdXQgaW5wdXQnKTtcblxuXHRcdFx0XHRpZiAoJGlucHV0LnZhbCgpLnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdFx0XHQkbGlzdC5lbXB0eSgpO1xuXG5cdFx0XHRcdFx0JGxpc3QuYXBwZW5kKGA8ZGl2PjxiPkNyZWF0ZTo8L2I+ICR7JGlucHV0LnZhbCgpfTwvZGl2PmApO1xuXG5cdFx0XHRcdFx0aWYgKCEkbGlzdC5pcygnOnZpc2libGUnKSkgJGxpc3Quc2hvdygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRsaXN0LmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJGxpc3Qub24oJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdGNvbnN0ICRsaW5rTm90aWZ5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0LW5vdGlmeS1saW5rJyk7XG5cdFx0XHRcdGNvbnN0ICRsaXN0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19MaXN0Jyk7XG5cdFx0XHRcdGNvbnN0ICRpbnB1dCA9IHRoaXMuJHdpZGdldC5maW5kKCdpbnB1dFt0eXBlXScpO1xuXG5cdFx0XHRcdHRoaXMuJGhpZGRlbklucHV0LnZhbCgkaW5wdXQudmFsKCkpO1xuXHRcdFx0XHR0aGlzLiRoaWRkZW5JbnB1dC5jaGFuZ2UoKTtcblxuXHRcdFx0XHQkbGlua05vdGlmeS5jbGljaygpO1xuXHRcdFx0XHQkbGlzdC5oaWRlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IElucHV0V2l0aExpc3QoY29uZmlnKSk7XG5cblx0U2FwcGhpcmVXaWRnZXRzLklucHV0V2l0aExpc3QgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoKTtcbiIsIi8qIENvbXBvbmVudCBMaW5lQWRkICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRXaWR0aChjb25maWcud2lkZ2V0SWQpO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLkxpbmVBZGQud2lkZ2V0SWQgPSBjb25maWcud2lkZ2V0SWQ7XG5cblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoKCkgPT4gc2V0V2lkdGgoY29uZmlnLndpZGdldElkKSk7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZS5MaW5lQWRkJywgKCkgPT4gc2V0V2lkdGgoY29uZmlnLndpZGdldElkKSk7XG5cdH07XG5cblx0Y29uc3Qgc2V0V2lkdGggPSBmdW5jdGlvbih3aWRnZXRJZCkge1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3QgJHdpZGdldCA9ICQoYCMke3dpZGdldElkIHx8IFNhcHBoaXJlV2lkZ2V0cy5MaW5lQWRkLndpZGdldElkfWApO1xuXHRcdFx0Y29uc3Qgd2lkdGhzID0gW107XG5cblx0XHRcdGZvciAoaSA9IDE7IGkgPCA4OyBpKyspIHtcblx0XHRcdFx0bGV0IG1heFdpZHRoQ29udGVudCA9IE1hdGgubWF4LmFwcGx5KFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0JHdpZGdldFxuXHRcdFx0XHRcdFx0LmZpbmQoJy5sYWNvbCcgKyBpKVxuXHRcdFx0XHRcdFx0Lm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICQodGhpcykud2lkdGgoKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuZ2V0KClcblx0XHRcdFx0KTtcblxuXHRcdFx0XHR3aWR0aHMucHVzaChtYXhXaWR0aENvbnRlbnQpO1xuXHRcdFx0XHQkd2lkZ2V0LmZpbmQoJy5sYWNvbCcgKyBpKS53aWR0aChtYXhXaWR0aENvbnRlbnQpO1xuXHRcdFx0fVxuXHRcdH0sIDEwMCk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkxpbmVBZGQgPSB7IGNyZWF0ZSwgc2V0V2lkdGggfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IExpbmVEZXRhaWxzRXhwYW5kQm94ICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgaW5pdCA9IGNvbmZpZyA9PiB7XG5cdFx0JChgIyR7Y29uZmlnLndpZGdldElkfSArIC5MaW5lRGV0YWlsc0V4cGFuZEJveF9hY3Rpb25gKS5jbGljayhldmVudCA9PiB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gJChkb2N1bWVudCkucmVhZHkoKCkgPT4gaW5pdChjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTGluZURldGFpbHNFeHBhbmRCb3ggPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgTG9jYXRpb25Cb3ggKi9cblNhcHBoaXJlV2lkZ2V0cy5Mb2NhdGlvbkJveCA9IGZ1bmN0aW9uKHdpZGdldElkKSB7XG5cdGNvbnN0ICRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblxuXHRpZiAoJGNvbXBvbmVudC5oYXNDbGFzcygnT24nKSkge1xuXHRcdCQoJy5EaXNhYmxlUm9vbScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnT2ZmJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdPbicpO1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KCcuUm9vbUJveCcpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdG9wYWNpdHk6ICcxJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdCRjb21wb25lbnRcblx0XHRcdC5hZGRDbGFzcygnT24nKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdPZmYnKVxuXHRcdFx0LnBhcmVudCgnLlJvb21Cb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdG9wYWNpdHk6ICcxJyxcblx0XHRcdH0pXG5cdFx0XHQuYWRkQ2xhc3MoJ1NlbGVjdGVkJyk7XG5cblx0XHQkKCcuRGlzYWJsZVJvb206bm90KCMnICsgd2lkZ2V0SWQgKyAnKScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdPZmYnKTtcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ09uJyk7XG5cdFx0fSk7XG5cblx0XHQkKCcuRGlzYWJsZVJvb20uT2ZmJylcblx0XHRcdC5wYXJlbnQoJy5Sb29tQm94Jylcblx0XHRcdC5jc3Moe1xuXHRcdFx0XHRvcGFjaXR5OiAnMC41MCcsXG5cdFx0XHR9KVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xuXHR9XG59O1xuIiwiLyogQ29tcG9uZW50IE1haW5JbnRlcmFjdGl2ZUNhcmQgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gW107XG5cdHZhciBkZWZhdWx0RHVyYXRpb24gPSAzMDA7XG5cblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhbGxNYWluSW50ZXJhY3RpdmVDYXJkc1tpXS5jb25maWcud2lkZ2V0SWQgPT09IGNvbmZpZy53aWRnZXRJZCkge1xuXHRcdFx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IE1haW5JbnRlcmFjdGl2ZUNhcmQoY29uZmlnKTtcblx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5wdXNoKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdKTtcblxuXHRcdGlmICghISFTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkICYmICEhb3NBamF4QmFja2VuZCkge1xuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWxsKCk7XG5cdFx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCA9IHRydWU7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBNYWluSW50ZXJhY3RpdmVDYXJkID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLmlzTG9ja2VkT25DbG9zZSA9IGZhbHNlO1xuXHRcdHRoaXMuaXNPcGVuID0gY29uZmlnLmlzT3Blbjtcblx0XHR0aGlzLmlzRW5hYmxlZCA9IGNvbmZpZy5pc0VuYWJsZWQ7XG5cdFx0dGhpcy5pc1NlbGVjdGFibGUgPSBjb25maWcuaXNTZWxlY3RhYmxlO1xuXHRcdHRoaXMuYWxsb3dPcGVuaW5nID0gY29uZmlnLmFsbG93T3BlbmluZztcblx0XHR0aGlzLmFsbG93TXVsdGlwbGVPcGVuID0gY29uZmlnLmFsbG93TXVsdGlwbGVPcGVuO1xuXHRcdHRoaXMuZW1pdE5vdGlmeU9uT3BlbiA9IGNvbmZpZy5lbWl0Tm90aWZ5T25PcGVuO1xuXHRcdHRoaXMuaGlkZUFjdGlvbnNPbk9wZW4gPSBjb25maWcuaGlkZUFjdGlvbnNPbk9wZW47XG5cdFx0dGhpcy5oaWRlQ2FwdGlvbk9uT3BlbiA9IGNvbmZpZy5oaWRlQ2FwdGlvbk9uT3Blbjtcblx0XHR0aGlzLmhpZGVUaXRsZU9uT3BlbiA9IGNvbmZpZy5oaWRlVGl0bGVPbk9wZW47XG5cdFx0dGhpcy5oaWRlU3ViVGl0bGVPbk9wZW4gPSBjb25maWcuaGlkZVN1YlRpdGxlT25PcGVuO1xuXHRcdHRoaXMuaGVhZGVySGVpZ2h0V2hlbk9wZW4gPSBjb25maWcuaGVhZGVySGVpZ2h0V2hlbk9wZW47XG5cdFx0dGhpcy5NYWluSW50ZXJhY3RpdmVDYXJkRmFrZU5vdGlmeUlkID0gY29uZmlnLm1haW5JbnRlcmFjdGl2ZUNhcmRGYWtlTm90aWZ5SWQ7XG5cblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0dGhpcy4kd2lkZ2V0LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdHRoaXMuJGNhcmQgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCcpO1xuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyJyk7XG5cdFx0dGhpcy4kaGVhZGVyVGV4dCA9IHRoaXMuJGhlYWRlci5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdGV4dCcpO1xuXHRcdHRoaXMuJGV4cGFuZEljb24gPSB0aGlzLiRoZWFkZXIuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtZXhwYW5kLWljb24nKTtcblx0XHR0aGlzLiRib2R5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiBkaXYgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1ib2R5Jyk7XG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLWFjdGlvbnMnXG5cdFx0KTtcblx0XHR0aGlzLiRjYXB0aW9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdGV4dC1jYXB0aW9uJ1xuXHRcdCk7XG5cdFx0dGhpcy4kdGl0bGUgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LXRpdGxlJ1xuXHRcdCk7XG5cdFx0dGhpcy4kc3ViVGl0bGUgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LXN1YnRpdGxlJ1xuXHRcdCk7XG5cdFx0dGhpcy4kc2VsZWN0VHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItc2VsZWN0YWJsZSA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci1zZWxlY3RhYmxlLXRyaWdnZXInXG5cdFx0KTtcblx0XHR0aGlzLiRzZWxlY3RQbGFjZWhvbGRlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXNlbGVjdGFibGUtcGxhY2Vob2xkZXInXG5cdFx0KTtcblx0XHR0aGlzLiR0cmlnZ2VyUGxhY2Vob2xkZXIgPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXRyaWdnZXJBY3Rpb24tcGxhY2Vob2xkZXInXG5cdFx0KTtcblxuXHRcdGlmICh0aGlzLiR0cmlnZ2VyUGxhY2Vob2xkZXIuZmluZCgnYScpLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJHRyaWdnZXJQbGFjZWhvbGRlci5maW5kKCdhJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR0aGlzLm9wZW4oZmFsc2UsIC0xKTtcblx0XHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2ZvcmNlT3BlbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3ModGhpcy5oZWFkZXJIZWlnaHRXaGVuT3BlbiArICdIZWFkZXInKTtcblxuXHRcdGlmICh0aGlzLmFsbG93T3BlbmluZykge1xuXHRcdFx0dGhpcy4kY2FyZC5hZGRDbGFzcygnYWxsb3dPcGVuaW5nJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcblxuXHRcdHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xuXHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24obXV0YXRpb24sIGluZGV4KSB7XG5cdFx0XHRcdF90aGlzLmhhbmRsZUhlYWRlcldpdGhBYnNvbHV0ZUJ1dHRvbnMoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcud2lkZ2V0SWQpLCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlczogZmFsc2UsXG5cdFx0fSk7XG5cdH07XG5cblx0TWFpbkludGVyYWN0aXZlQ2FyZC5wcm90b3R5cGUuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0aWYgKCEhdGhpcy4kYm9keS5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zJykubGVuZ3RoICYmIHRoaXMuaXNPcGVuKSB7XG5cdFx0XHR2YXIgYWJzb2x1dGVBY3Rpb25zV2lkdGggPSBNYXRoLm1heC5hcHBseShcblx0XHRcdFx0TWF0aCxcblx0XHRcdFx0dGhpcy4kYm9keVxuXHRcdFx0XHRcdC5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zJylcblx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXQoKVxuXHRcdFx0KTtcblx0XHRcdHZhciBoZWFkZXJNYXhXaWR0aCA9IHRoaXMuJGhlYWRlci53aWR0aCgpIC0gYWJzb2x1dGVBY3Rpb25zV2lkdGg7XG5cdFx0XHRpZiAoaGVhZGVyTWF4V2lkdGggPiAxMCkge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXJUZXh0LmNzcyh7XG5cdFx0XHRcdFx0bWF4V2lkdGg6IGhlYWRlck1heFdpZHRoICsgJ3B4Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRib2R5XG5cdFx0XHRcdC5maW5kKCc+IGRpdiAuTWFpbkludGVyYWN0aXZlQ2FyZC1hYnNvbHV0ZS1hY3Rpb25zIC5NYWluSW50ZXJhY3RpdmVDYXJkLS1jbG9zZScpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kaGVhZGVyXG5cdFx0XHQuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLW9wZW46bm90KFtkaXNhYmxlZF0pJylcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0X3RoaXMub3Blbih0cnVlKTtcblx0XHRcdH0pO1xuXHRcdHRoaXMuJGhlYWRlclxuXHRcdFx0LmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLS1jbG9zZScpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0XHR9KTtcblx0XHRpZiAodGhpcy5hbGxvd09wZW5pbmcpIHtcblx0XHRcdGNvbnN0IGNsaWNrQWN0aW9uID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdGlmICgkKGV2dC50YXJnZXQpLmhhc0NsYXNzKCdCdXR0b24nKSkge1xuXHRcdFx0XHRcdC8vIHRoZSB1c2VyIGNsaWNrZWQgb24gYSBCdXR0b24gaW5zaWRlIHRoZSBoZWFkZXIsIG5vdGhpbmcgdG8gZG8gaGVyZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChfdGhpcy5pc09wZW4pIHtcblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0X3RoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5sZW5ndGggPT09IDEgJiZcblx0XHRcdFx0XHRcdFx0IV90aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuaGFzQ2xhc3MoJ2NrZV93eXNpd3lnX2ZyYW1lJylcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHQvLyBkbyBub3QgY2xvc2Ugd2hlbiBhbmQgaWZyYW1lIGV4aXN0c1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFjdGlvbnMuZmluZCgnYScpLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFjdGlvbnMuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLWNsb3NlJykubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdC8vIGRvIG5vdCBjbG9zZSB3aGVuIHRoZSBjYXJkIGhhcyBhY3Rpb25zXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5jbG9zZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5vcGVuKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy4kaGVhZGVyVGV4dC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjbGlja0FjdGlvbihlKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kZXhwYW5kSWNvbi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjbGlja0FjdGlvbihlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAodGhpcy5pc1NlbGVjdGFibGUpIHtcblx0XHRcdHRoaXMuJHNlbGVjdFRyaWdnZXIub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKF90aGlzLiRzZWxlY3RQbGFjZWhvbGRlci5maW5kKCdhJykubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0X3RoaXMuJHNlbGVjdFBsYWNlaG9sZGVyLmZpbmQoJ2EnKS5jbGljaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignWW91IG5lZWQgMSBsaW5rIGluIHRoaXMgcGxhY2Vob2xkZXIuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oc2VuZE5vdGlmeSwgZHVyYXRpb24pIHtcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBkZWZhdWx0RHVyYXRpb247XG5cdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xuXHRcdHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2lzT3BlbicpO1xuXHRcdGlmICh0aGlzLmhpZGVBY3Rpb25zT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRhY3Rpb25zLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhpZGVUaXRsZU9uT3Blbikge1xuXHRcdFx0dGhpcy4kdGl0bGUuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVN1YlRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRzdWJUaXRsZS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlQ2FwdGlvbk9uT3Blbikge1xuXHRcdFx0dGhpcy4kY2FwdGlvbi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5lbWl0Tm90aWZ5T25PcGVuKSB7XG5cdFx0XHRpZiAoc2VuZE5vdGlmeSkge1xuXHRcdFx0XHRPc05vdGlmeVdpZGdldCh0aGlzLk1haW5JbnRlcmFjdGl2ZUNhcmRGYWtlTm90aWZ5SWQsICdvcGVuJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy4kdHJpZ2dlcikge1xuXHRcdFx0dGhpcy4kdHJpZ2dlci5jbGljaygpO1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0XHR0aGlzLiRib2R5LnNsaWRlRG93bihkdXJhdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRib2R5LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmhhc0NsYXNzKCdja2Vfd3lzaXd5Z19mcmFtZScpKSB7XG5cdFx0XHR2YXIgaWZyYW1lQ29udGVudHMgPSB0aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuY29udGVudHMoKTtcblx0XHRcdGlmcmFtZUNvbnRlbnRzLmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLWlmcmFtZS1hY3Rpb25zJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5hbGxvd011bHRpcGxlT3Blbikge1xuXHRcdFx0YWxsTWFpbkludGVyYWN0aXZlQ2FyZHMuZm9yRWFjaChpdGVtID0+IChpdGVtICE9PSB0aGlzICYmIGl0ZW0uYWxsb3dPcGVuaW5nID8gaXRlbS5jbG9zZShkdXJhdGlvbikgOiBudWxsKSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oZHVyYXRpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgZGVmYXVsdER1cmF0aW9uO1xuXHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cdFx0dGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XG5cdFx0aWYgKHRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5sZW5ndGggPT09IDEgJiYgIXRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5oYXNDbGFzcygnY2tlX3d5c2l3eWdfZnJhbWUnKSkge1xuXHRcdFx0dGhpcy4kd2lkZ2V0XG5cdFx0XHRcdC5maW5kKCdpZnJhbWUnKVxuXHRcdFx0XHQuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtaWZyYW1lLWFjdGlvbnMnKVxuXHRcdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdH1cblx0XHR0aGlzLiRib2R5LnNsaWRlVXAoZHVyYXRpb24sIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHNlbGYuJGNhcmQuaGFzQ2xhc3MoJ2ZvcmNlT3BlbicpKSB7XG5cdFx0XHRcdHNlbGYuJGNhcmQucmVtb3ZlQ2xhc3MoJ2ZvcmNlT3BlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmhpZGVBY3Rpb25zT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRhY3Rpb25zLnNob3coKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiR0aXRsZS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVN1YlRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRzdWJUaXRsZS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZUNhcHRpb25Pbk9wZW4pIHtcblx0XHRcdHRoaXMuJGNhcHRpb24uY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuJGhlYWRlci53aWR0aCgpIC0gdGhpcy4kYWN0aW9ucy53aWR0aCgpID4gMTApIHtcblx0XHRcdHRoaXMuJGhlYWRlclRleHQuY3NzKHtcblx0XHRcdFx0bWF4V2lkdGg6IHRoaXMuJGhlYWRlci53aWR0aCgpIC0gdGhpcy4kYWN0aW9ucy53aWR0aCgpICsgJ3B4Jyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5pc09wZW47XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0YWxsOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBhbGxNYWluSW50ZXJhY3RpdmVDYXJkcztcblx0XHR9LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0aWYgKCEhJCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQnKS5sZW5ndGgpIHtcblx0XHRpZiAoISEhU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCkge1xuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzID0gU2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWxsKCk7XG5cdFx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1haW5JbnRlcmFjdGl2ZUNhcmQuYWZ0ZXJBamF4UmVxdWVzdEJpbmRlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hbGwoKTtcblx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdH0pO1xuXHR9LCAxMDAwKTtcbn0pO1xuIiwiLyogQ29tcG9uZW50IE1lbnVCYXIgKi9cblNhcHBoaXJlV2lkZ2V0cy5NZW51QmFyID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdCQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyICRtZW51V2lkZ2V0ID0gJCgnIycgKyBjb25maWcubWVudVdpZGdldCk7XG5cblx0XHR2YXIgbWVudVJlc2lkZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXZXaWR0aCA9IDA7XG5cdFx0XHR2YXIgYXZhaWxhYmVFc3BhY2UgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtJykud2lkdGgoKTtcblxuXHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfaXRlbSAuTWVudUl0ZW0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRuYXZXaWR0aCArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKG5hdldpZHRoID4gYXZhaWxhYmVFc3BhY2UpIHtcblx0XHRcdFx0dmFyIGxhc3RJdGVtID0gJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfaXRlbSAuTWVudUl0ZW0nKS5sYXN0KCk7XG5cdFx0XHRcdGxhc3RJdGVtLmF0dHIoJ2RhdGEtd2lkdGgnLCBsYXN0SXRlbS5vdXRlcldpZHRoKHRydWUpKTtcblx0XHRcdFx0bGFzdEl0ZW0ucHJlcGVuZFRvKCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lcicpKTtcblx0XHRcdFx0bWVudVJlc2lkZXIoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBmaXJzdE1vcmVFbGVtZW50ID0gJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfX2V4dHJhQ29udGFpbmVyIC5NZW51SXRlbScpLmZpcnN0KCk7XG5cdFx0XHRcdGlmIChuYXZXaWR0aCArIGZpcnN0TW9yZUVsZW1lbnQuZGF0YSgnd2lkdGgnKSA8IGF2YWlsYWJlRXNwYWNlKSB7XG5cdFx0XHRcdFx0Zmlyc3RNb3JlRWxlbWVudC5pbnNlcnRBZnRlcigkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtIC5NZW51SXRlbScpLmxhc3QoKSk7XG5cdFx0XHRcdFx0bWVudVJlc2lkZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoISRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lcicpLmlzKCc6ZW1wdHknKSkge1xuXHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0nKS5hZGRDbGFzcygnc2hvdycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfZXh0cmFJdGVtJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnVJdGVtJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCEkKHRoaXMpXG5cdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0Lmhhc0NsYXNzKCdNZW51YmFyX19leHRyYUNvbnRhaW5lcicpXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlSW5kaWNhdG9yJykpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuYWN0aXZlSW5kaWNhdG9yJykuYWRkQ2xhc3MoJ3NoYWRvdycpO1xuXHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKVxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZUluZGljYXRvcicpKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKVxuXHRcdFx0XHRcdC50b2dnbGVDbGFzcygnc2hvdycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfZXh0cmFJdGVtIC5pY29uJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXIgJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm1vdXNldXAoZSA9PiB7XG5cdFx0XHR2YXIgJG1lbnUgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudUl0ZW0uYWN0aXZlJyk7XG5cdFx0XHR2YXIgJG1vcmVPcHRpb25zID0gJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfZXh0cmFJdGVtJyk7XG5cblx0XHRcdC8vIGlmIHRoZSB0YXJnZXQgb2YgdGhlIGNsaWNrIGlzbid0IHRoZSBtZW51IG9yIGEgZGVzY2VuZGFudCBvZiB0aGUgbWVudVxuXHRcdFx0aWYgKCRtZW51Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0aWYgKCEkbWVudS5pcyhlLnRhcmdldCkgJiYgJG1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHQkbWVudS5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdFx0XHRcdCQoJy5hY3RpdmVJbmRpY2F0b3InKS5yZW1vdmVDbGFzcygnc2hhZG93Jyk7XG5cdFx0XHRcdFx0JG1lbnVXaWRnZXQuZmluZCgnLk1lbnVJdGVtLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoISRtb3JlT3B0aW9ucy5pcyhlLnRhcmdldCkgJiYgJG1vcmVPcHRpb25zLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdCRtb3JlT3B0aW9ucy5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXInKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdFx0XHQkKCcuYWN0aXZlSW5kaWNhdG9yJykucmVtb3ZlQ2xhc3MoJ3NoYWRvdycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bWVudVJlc2lkZXIoKTtcblx0XHR9KTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IE11bHRpcGxlU2VsZWN0aW9uQnV0dG9uICovXG5TYXBwaGlyZVdpZGdldHMuTXVsdGlwbGVTZWxlY3Rpb25CdXR0b24gPSBmdW5jdGlvbihXcmFwcGVySWQpIHtcblx0Y29uc3QgJHdpZGdldCA9ICQoV3JhcHBlcklkKTtcblx0Y29uc3QgJGNvbnRyb2wgPSAkd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG5cdGlmICgkKFdyYXBwZXJJZCArICcgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuaXMoJzpkaXNhYmxlZCcpKSB7XG5cdFx0JHdpZGdldC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0fSBlbHNlIHtcblx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXHR9XG5cblx0aWYgKCQoV3JhcHBlcklkICsgJyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5pcygnOmNoZWNrZWQnKSkge1xuXHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9IGVsc2Uge1xuXHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9XG5cblx0JHdpZGdldC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG5cblx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkgJHBhcmVudC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0ZWxzZSAkcGFyZW50LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0fSk7XG5cblx0JHdpZGdldC5maW5kKCcuTXVsdGlwbGVTZWxlY3Rpb25CdXR0b24tbGFiZWwnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkY29udHJvbFswXS5jbGljaygpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkY29udHJvbC5pcygnOmNoZWNrZWQnKSkgJHdpZGdldC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRlbHNlICR3aWRnZXQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH0sIDEwKTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IENvbmZpcm1hdGlvblBhbmVsM09wdGlvbnMgQ29uZmlybWF0aW9uUGFuZWwgc2FtZSBqYXZhc2NyaXB0IGNvZGUqL1xuXG5TYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUGFuZWwgPSB7XG5cdGlzQW55UGFuZWxPcGVuZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ1BhbmVsT3BlbmVkJykgJiYgJCgnLlBhbmVsQ29udGFpbmVyOnZpc2libGUnKS5sZW5ndGg7XG5cdH0sXG5cblx0dG9nZ2xlUGFuZWw6IGZ1bmN0aW9uKFBhbmVsSWQpIHtcblx0XHRpZiAoIU9zVmFsaWRhdG9yT25TdWJtaXQoKSkgcmV0dXJuO1xuXG5cdFx0aWYgKCFTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUGFuZWwuaXNBbnlQYW5lbE9wZW5lZCgpKSB7XG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XG5cdFx0XHQkKCcjJyArIFBhbmVsSWQpLmZhZGVJbigxNDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcjJyArIFBhbmVsSWQpXG5cdFx0XHRcdFx0LmZpbmQoJy5QYW5lbENvbnRhaW5lcicpXG5cdFx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XG5cdFx0XHR9LCAxMDApO1xuXG5cdFx0XHRpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQuc2V0TW9kYWxNaW5pbWl6ZWQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VQYW5lbDogZnVuY3Rpb24oUGFuZWxJZCkge1xuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnUGFuZWxPcGVuZWQnKTtcblx0XHQkKCcjJyArIFBhbmVsSWQpLmZhZGVPdXQoMTQwKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcjJyArIFBhbmVsSWQpXG5cdFx0XHRcdC5maW5kKCcuUGFuZWxDb250YWluZXInKVxuXHRcdFx0XHQuc2xpZGVVcCgxNTApO1xuXHRcdH0sIDEwMCk7XG5cdH0sXG5cblx0c2V0UGFuZWxCZWhhdmlvcjogZnVuY3Rpb24oKSB7XG5cdFx0JCgnLlBhbmVsW2NvbmZpcm1hdGlvbi1wYW5lbC10cmlnZ2VyLWVsZW1lbnRpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRoaXNfcGFuZWwgPSAkKHRoaXMpO1xuXHRcdFx0JCgnIycgKyB0aGlzX3BhbmVsLmF0dHIoJ2NvbmZpcm1hdGlvbi1wYW5lbC10cmlnZ2VyLWVsZW1lbnRpZCcpICsgJycpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC50b2dnbGVQYW5lbCh0aGlzX3BhbmVsLmF0dHIoJ2lkJykpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0U2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBhbmVsLnNldFBhbmVsQmVoYXZpb3IoKTtcblx0aWYgKG9zQWpheEJhY2tlbmQuRXZlbnRIYW5kbGVycy5BZnRlckFqYXhSZXF1ZXN0LnRvU3RyaW5nKCkuaW5kZXhPZignc2V0UGFuZWxCZWhhdmlvcicpID09IC0xKSB7XG5cdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUGFuZWwuc2V0UGFuZWxCZWhhdmlvcik7XG5cdH1cbn0pO1xuIiwiLyogQ29tcG9uZW50IENvbmZpcm1hdGlvblBvcHVwICovXG52YXIgX2lzSW5JZnJhbWUgPSB3aW5kb3cuZnJhbWVFbGVtZW50ICE9IHVuZGVmaW5lZCB8fCBmYWxzZTtcblNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cCA9IHtcblx0aXNBbnlDb25maXJtYXRpb25PcGVuZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy50b3AuJCgnYm9keScpLmhhc0NsYXNzKCdjb25maXJtYXRpb24tb3BlbmVkJykgJiYgd2luZG93LnRvcC4kKCcuY29uZmlybS1jb250YWluZXI6dmlzaWJsZScpLmxlbmd0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnY29uZmlybWF0aW9uLW9wZW5lZCcpICYmICQoJy5jb25maXJtLWNvbnRhaW5lcjp2aXNpYmxlJykubGVuZ3RoO1xuXHRcdH1cblx0fSxcblxuXHR0b2dnbGVDb25maXJtOiBmdW5jdGlvbihfaWQsIF9xdWVzdGlvbiwgX21lc3NhZ2UsIF9ub3RpZnlJZCwgX0hhc05vdGlmeU9uQ2FuY2VsKSB7XG5cdFx0aWYgKCFPc1ZhbGlkYXRvck9uU3VibWl0KCkpIHJldHVybjtcblxuXHRcdGlmICghdGhpcy5pc0FueUNvbmZpcm1hdGlvbk9wZW5lZCgpKSB7XG5cdFx0XHR2YXIgX2JvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHR2YXIgX2JvZHlKUyA9IGRvY3VtZW50LmJvZHk7XG5cdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0X2JvZHkgPSB3aW5kb3cudG9wLiQoJ2JvZHknKTtcblx0XHRcdFx0X2JvZHlKUyA9IHdpbmRvdy50b3AuZG9jdW1lbnQuYm9keTtcblx0XHRcdH1cblxuXHRcdFx0X2JvZHkuYWRkQ2xhc3MoJ2NvbmZpcm1hdGlvbi1vcGVuZWQnKTtcblxuXHRcdFx0dmFyIF9jb25maXJtSWQgPSAnY29uZmlybV8nICsgX2lkO1xuXG5cdFx0XHR2YXIgX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgX2NvbmZpcm1JZCk7XG5cdFx0XHRfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybSBjb25maXJtLXdiJyk7XG5cdFx0XHRfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29uZmlybS10cmlnZ2VyLWVsZW1lbnRpZCcsIF9pZCk7XG5cblx0XHRcdHZhciBfYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2JhY2tncm91bmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLWJhY2tncm91bmQgY29uZmlybS13YicpO1xuXHRcdFx0X2JhY2tncm91bmQuc2V0QXR0cmlidXRlKCdpZCcsICdiZ18nICsgX2NvbmZpcm1JZCk7XG5cdFx0XHRfY29udGFpbmVyLmFwcGVuZENoaWxkKF9iYWNrZ3JvdW5kKTtcblxuXHRcdFx0dmFyIF9jb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29uZmlybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tY29udGFpbmVyIGNvbmZpcm0td2InKTtcblx0XHRcdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2NvbmZpcm0pO1xuXG5cdFx0XHR2YXIgX2NvbmZpcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2NvbmZpcm1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tdGl0bGUnKTtcblx0XHRcdHZhciBfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShfcXVlc3Rpb24pO1xuXHRcdFx0X2NvbmZpcm1UaXRsZS5hcHBlbmRDaGlsZChfdGl0bGUpO1xuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1UaXRsZSk7XG5cblx0XHRcdHZhciBfY29uZmlybU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2NvbmZpcm1Nc2cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLW1lc3NhZ2UnKTtcblxuXHRcdFx0X2NvbmZpcm1Nc2cuaW5uZXJIVE1MID0gX21lc3NhZ2U7IC8qIFNldCBIVE1MIHRvIHJlbmRlciB0aGUgbWVzc2FnZSBIVE1MIHRhZ3MsIHNpbWlsYXIgdG8gdGhlIEVzY2FwZSBDb250ZW50IHNldCBhcyBOby4gKi9cblx0XHRcdF9jb25maXJtLmFwcGVuZENoaWxkKF9jb25maXJtTXNnKTtcblxuXHRcdFx0dmFyIF9jb25maXJtQWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0X2NvbmZpcm1BY3Rpb25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybS1hY3Rpb25zJyk7XG5cdFx0XHRfY29uZmlybS5hcHBlbmRDaGlsZChfY29uZmlybUFjdGlvbnMpO1xuXG5cdFx0XHR2YXIgX25vQnRuTG5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpO1xuXHRcdFx0X25vQnRuTG5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnQnV0dG9uIFRoaXJkIE11bHRpTWFyZ2luUmlnaHQxMCcpO1xuXHRcdFx0X25vQnRuTG5rLnNldEF0dHJpYnV0ZSgnY2FuY2VsLWJ1dHRvbicsICdjYW5jZWwtYnV0dG9uJyk7XG5cdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKCd1aScsICdDb25maXJtTm8xJyk7XG5cdFx0XHRpZiAoX0hhc05vdGlmeU9uQ2FuY2VsID09ICdUcnVlJykge1xuXHRcdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdFx0J2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJyArXG5cdFx0XHRcdFx0XHRcdCdpZnJhbWVfJyArXG5cdFx0XHRcdFx0XHRcdF9pZCArXG5cdFx0XHRcdFx0XHRcdCdcIikuY29udGVudFdpbmRvdy5Pc05vdGlmeVdpZGdldChcIicgK1xuXHRcdFx0XHRcdFx0XHRfbm90aWZ5SWQgK1xuXHRcdFx0XHRcdFx0XHQnXCIsXCJDQU5DRUxcIik7IFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgK1xuXHRcdFx0XHRcdFx0XHRfY29uZmlybUlkICtcblx0XHRcdFx0XHRcdFx0J1wiKTsnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdFx0J09zTm90aWZ5V2lkZ2V0KFwiJyArXG5cdFx0XHRcdFx0XHRcdF9ub3RpZnlJZCArXG5cdFx0XHRcdFx0XHRcdCdcIixcIkNBTkNFTFwiKTsgU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArXG5cdFx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xuXHRcdFx0XHRcdFx0XHQnXCIpOydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdFx0J1NhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgKyBfY29uZmlybUlkICsgJ1wiKTsnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdFx0J1NhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgKyBfY29uZmlybUlkICsgJ1wiKTsnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX25vQnRuID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ05vJyk7XG5cdFx0XHRfbm9CdG5MbmsuYXBwZW5kQ2hpbGQoX25vQnRuKTtcblx0XHRcdF9jb25maXJtQWN0aW9ucy5hcHBlbmRDaGlsZChfbm9CdG5MbmspO1xuXG5cdFx0XHR2YXIgX3llc0J0bkxuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0EnKTtcblx0XHRcdF95ZXNCdG5Mbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdCdXR0b24gU2V0QXNWYWxpZCBJc19EZWZhdWx0Jyk7XG5cdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZSgnY2FuY2VsLWJ1dHRvbicsICcnKTtcblx0XHRcdF95ZXNCdG5Mbmsuc2V0QXR0cmlidXRlKCd1aScsICdDb25maXJtWWVzMScpO1xuXG5cdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdCdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIicgK1xuXHRcdFx0XHRcdFx0J2lmcmFtZV8nICtcblx0XHRcdFx0XHRcdF9pZCArXG5cdFx0XHRcdFx0XHQnXCIpLmNvbnRlbnRXaW5kb3cuT3NOb3RpZnlXaWRnZXQoXCInICtcblx0XHRcdFx0XHRcdF9ub3RpZnlJZCArXG5cdFx0XHRcdFx0XHQnXCIsXCJPS1wiKTsgU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArXG5cdFx0XHRcdFx0XHRfY29uZmlybUlkICtcblx0XHRcdFx0XHRcdCdcIik7J1xuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0J29uY2xpY2snLFxuXHRcdFx0XHRcdCdPc05vdGlmeVdpZGdldChcIicgK1xuXHRcdFx0XHRcdFx0X25vdGlmeUlkICtcblx0XHRcdFx0XHRcdCdcIixcIk9LXCIpOyBTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICtcblx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xuXHRcdFx0XHRcdFx0J1wiKTsnXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX3llc0J0biA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdZZXMnKTtcblx0XHRcdF95ZXNCdG5MbmsuYXBwZW5kQ2hpbGQoX3llc0J0bik7XG5cdFx0XHRfY29uZmlybUFjdGlvbnMuYXBwZW5kQ2hpbGQoX3llc0J0bkxuayk7XG5cblx0XHRcdF9jb25maXJtLmFwcGVuZENoaWxkKF9jb25maXJtQWN0aW9ucyk7XG5cblx0XHRcdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2NvbmZpcm0pO1xuXG5cdFx0XHRfYm9keUpTLmFwcGVuZENoaWxkKF9jb250YWluZXIpO1xuXG5cdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0d2luZG93LnRvcC4kKCcjYmdfJyArIF9jb25maXJtSWQpLmZhZGVJbigxNDApO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHdpbmRvdy50b3Bcblx0XHRcdFx0XHRcdC4kKCcjJyArIF9jb25maXJtSWQpXG5cdFx0XHRcdFx0XHQuZmluZCgnLmNvbmZpcm0tY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xuXHRcdFx0XHRcdHdpbmRvdy50b3AuJCgnIycgKyBfY29uZmlybUlkICsgJyBbY2FuY2VsLWJ1dHRvbl0nKS5mb2N1cygpO1xuXHRcdFx0XHR9LCAxMDApO1xuXG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5SZW1vdGVBcHBvaW50bWVudC5zZXRNb2RhbE1pbmltaXplZCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnI2JnXycgKyBfY29uZmlybUlkKS5mYWRlSW4oMTQwKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCcjJyArIF9jb25maXJtSWQpXG5cdFx0XHRcdFx0XHQuZmluZCgnLmNvbmZpcm0tY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xuXHRcdFx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZCArICcgW2NhbmNlbC1idXR0b25dJykuZm9jdXMoKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Y2xvc2VDb25maXJtUG9wdXA6IGZ1bmN0aW9uKF9jb25maXJtSWQpIHtcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2NvbmZpcm1hdGlvbi1vcGVuZWQnKTtcblx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xuXHRcdCQoJyNiZ18nICsgX2NvbmZpcm1JZCkuZmFkZU91dCgxNDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZClcblx0XHRcdFx0LmZpbmQoJy5jb25maXJtLWNvbnRhaW5lcicpXG5cdFx0XHRcdC5zbGlkZVVwKDE1MCk7XG5cdFx0XHQkKCcjJyArIF9jb25maXJtSWQpLnJlbW92ZSgpO1xuXHRcdH0sIDEwMCk7XG5cdH0sXG5cblx0Y3JlYXRlOiBmdW5jdGlvbihfaWQsIF9xdWVzdGlvbiwgX21lc3NhZ2UsIF9ub3RpZnlJZCwgX0hhc05vdGlmeU9uQ2FuY2VsKSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcjJyArIF9pZClcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLnRvZ2dsZUNvbmZpcm0oX2lkLCBfcXVlc3Rpb24sIF9tZXNzYWdlLCBfbm90aWZ5SWQsIF9IYXNOb3RpZnlPbkNhbmNlbCk7XG5cdFx0XHRcdFx0aWYgKF9pc0luSWZyYW1lKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cuZnJhbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVudS1pZCcsIF9pZCk7XG5cdFx0XHRcdFx0XHR3aW5kb3cuZnJhbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnaWZyYW1lXycgKyBfaWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxufTtcbiIsIi8qIENvbXBvbmVudCBNb2RhbFBvcHVwICovXG5cbnZhciBfaXNJbklmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gdW5kZWZpbmVkIHx8IGZhbHNlO1xuXG5TYXBwaGlyZVdpZGdldHMuTW9kYWxQb3B1cCA9IHtcblx0Y3JlYXRlOiBmdW5jdGlvbih3aWRnZXRJZCkge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gVXNlIHRoaXMgY29kZSB0byBhcHBlbmQgdGhlIGNvbXBvbmVudCB0byB0aGUgcm9vdCBib2R5XG5cdFx0XHQvLyB3aW5kb3cuZnJhbWVFbGVtZW50ICYmICQod2luZG93LmZyYW1lRWxlbWVudCkuY2xvc2VzdCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtYm9keScpLmxlbmd0aCA+IDBcblx0XHRcdGlmIChmYWxzZSkge1xuXHRcdFx0XHRjb25zdCAkcGFyZW50Qm9keSA9IHBhcmVudC4kKCdib2R5Jyk7XG5cdFx0XHRcdGxldCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cblx0XHRcdFx0aWYgKCRwYXJlbnRCb2R5LmZpbmQoJHdpZGdldCkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0JHBhcmVudEJvZHkuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JHdpZGdldFxuXHRcdFx0XHRcdFx0XHQud3JhcCgnPGRpdi8+Jylcblx0XHRcdFx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdFx0XHRcdC5kZXRhY2goKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkd2lkZ2V0ID0gcGFyZW50LiQoYCMke3dpZGdldElkfWApO1xuXHRcdFx0XHRjb25zdCAkYnRuQ2xvc2UgPSAkd2lkZ2V0LmZpbmQoJy5tb2RhbFBvcHVwX2Nsb3NlJyk7XG5cblx0XHRcdFx0JGJ0bkNsb3NlLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcblx0XHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdzaG93Y2xvc2UnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cdFx0XHRcdGNvbnN0ICRidG5DbG9zZSA9ICR3aWRnZXQuZmluZCgnLm1vZGFsUG9wdXBfY2xvc2UnKTtcblxuXHRcdFx0XHRpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHRcdGNvbnN0ICRtb2RhbFJlbW90ZUFwcHQgPSB3aW5kb3cudG9wLiQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xuXG5cdFx0XHRcdFx0aWYgKCRtb2RhbFJlbW90ZUFwcHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbWluaW1pemVNb2RhbCA9ICRtb2RhbFJlbW90ZUFwcHQuZmluZCgnLk1pbmltaXplJyk7XG5cdFx0XHRcdFx0XHQkbWluaW1pemVNb2RhbC5jbGljaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCRidG5DbG9zZS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdPcGVuJyk7XG5cdFx0XHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnc2hvd2Nsb3NlJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxufTtcbiIsIi8qIENvbXBvbmVudCBQYW5lbEJ5SUROb3RpZnkgKi9cclxudmFyIHBhbmVsTm90aWZ5V2lkZ2V0O1xyXG5TYXBwaGlyZVdpZGdldHMuUGFuZWxCeUlkTm90aWZ5ID0ge1xyXG5cdGlzQW55UGFuZWxPcGVuZWREZXByZWNhdGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XHJcblx0fSxcclxuXHR0b2dnbGVQYW5lbEJ5Tm90aWZ5OiBmdW5jdGlvbihJZCkge1xyXG5cdFx0aWYgKCFpc0FueVBhbmVsT3BlbmVkRGVwcmVjYXRlZCgpKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHRcdFx0JCgnIycgKyBJZClcclxuXHRcdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXHJcblx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWwnKVxyXG5cdFx0XHRcdC5mYWRlSW4oMTQwKTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKGp1c3REcmFnZ2VkID09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHQkKCcuUGFuZWxDb250YWluZXInKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdtYXJnaW4tbGVmdCcsIHBhbmVsTWFyZ2luTGVmdClcclxuXHRcdFx0XHRcdFx0LmNzcygnbGVmdCcsIHBhbmVsTGVmdClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKHBhbmVsQXJyb3dDbGFzcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnIycgKyBJZClcclxuXHRcdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcclxuXHRcdFx0XHRcdC5wYXJlbnQoKVxyXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWwnKVxyXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWxDb250YWluZXInKVxyXG5cdFx0XHRcdFx0LnNsaWRlRG93bigxNTApO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcclxuXHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0LmZhZGVPdXQoMTQwKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHRcdFx0LnBhcmVudCgpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpXHJcblx0XHRcdFx0XHQuc2xpZGVVcCgxNTApO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dG9nZ2xlUGFuZWxOb3RpZnlCeUlkOiBmdW5jdGlvbihJZCkge1xyXG5cdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xyXG5cdFx0JCgnIycgKyBJZClcclxuXHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHQucGFyZW50KClcclxuXHRcdFx0LmNoaWxkcmVuKCcuUGFuZWwnKVxyXG5cdFx0XHQuZmFkZVRvZ2dsZSgxNDApO1xyXG5cclxuXHRcdHBhbmVsTm90aWZ5V2lkZ2V0ID0gJCgnIycgKyBJZClcclxuXHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHQuYXR0cignTm90aWZ5SWQnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjJyArIElkKVxyXG5cdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcclxuXHRcdFx0XHQucGFyZW50KClcclxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXHJcblx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWxDb250YWluZXInKVxyXG5cdFx0XHRcdC5zbGlkZVRvZ2dsZSgxNTApO1xyXG5cdFx0fSwgMTAwKTtcclxuXHR9LFxyXG59O1xyXG4iLCIvKiBDb21wb25lbnQgUGFuZWxCeUlEICovXHJcblNhcHBoaXJlV2lkZ2V0cy5QYW5lbEJ5SWQgPSB7XHJcblx0aXNBbnlQYW5lbE9wZW5lZERlcHJlY2F0ZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHR9LFxyXG5cclxuXHR0b2dnbGVCdXR0b246IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRjb25zdCAkdG9nZ2xlQnV0dG9uID0gJChgIyR7aWR9YCkucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpLmxlbmd0aFxyXG5cdFx0XHQ/ICQoYCMke2lkfWApLnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxyXG5cdFx0XHQ6ICQoYCMke2lkfWApO1xyXG5cclxuXHRcdCR0b2dnbGVCdXR0b24uY2xpY2soKTtcclxuXHR9LFxyXG5cclxuXHR0b2dnbGVQYW5lbEJ5SWQ6IGZ1bmN0aW9uKElkKSB7XHJcblx0XHRjb25zdCAkdG9nZ2xlQnV0dG9uID0gJChgIyR7SWR9YCkucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpO1xyXG5cdFx0Y29uc3QgJHBhbmVsID0gJHRvZ2dsZUJ1dHRvbi5wYXJlbnQoKS5jaGlsZHJlbignLlBhbmVsJyk7XHJcblx0XHRjb25zdCAkcGFuZWxDb250YWluZXIgPSAkcGFuZWwuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpO1xyXG5cdFx0Y29uc3QgJHBhbmVsQmFja2dyb3VuZCA9ICRwYW5lbC5jaGlsZHJlbignLlBhbmVsQmFja2dyb3VuZCcpO1xyXG5cclxuXHRcdGlmICghdGhpcy5pc0FueVBhbmVsT3BlbmVkRGVwcmVjYXRlZCgpKSB7XHJcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHRcdFx0JCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdoaWRkZW4nKTtcclxuXHJcblx0XHRcdCRwYW5lbC5zaG93KCk7XHJcblx0XHRcdCRwYW5lbENvbnRhaW5lci5zbGlkZURvd24oMjAwKTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBqdXN0RHJhZ2dlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdGlmIChqdXN0RHJhZ2dlZCA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHQkKCcuUGFuZWxCeUlkTmV3X1BhbmVsQ29udGFpbmVyJylcclxuXHRcdFx0XHRcdFx0XHQuY3NzKCdtYXJnaW4tbGVmdCcsIHBhbmVsTWFyZ2luTGVmdClcclxuXHRcdFx0XHRcdFx0XHQuY3NzKCdsZWZ0JywgcGFuZWxMZWZ0KVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhwYW5lbEFycm93Q2xhc3MpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCRwYW5lbEJhY2tncm91bmQuZmFkZUluKDgwKTtcclxuXHJcblx0XHRcdFx0JHRvZ2dsZUJ1dHRvbi5jbGljaygpO1xyXG5cdFx0XHR9LCA1MCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkcGFuZWxDb250YWluZXIuc2xpZGVVcCgyMDApO1xyXG5cclxuXHRcdFx0JHBhbmVsQmFja2dyb3VuZC5mYWRlT3V0KDgwLCAoKSA9PiB7XHJcblx0XHRcdFx0JHRvZ2dsZUJ1dHRvbi5jbGljaygpO1xyXG5cclxuXHRcdFx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xyXG5cdFx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnUGFuZWxPcGVuZWQnKTtcclxuXHJcblx0XHRcdFx0JHBhbmVsLmhpZGUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IFBvcFVwTWVudSAqL1xyXG5TYXBwaGlyZVdpZGdldHMuUG9wVXBNZW51ID0ge1xyXG5cdG1lbnVQb3NpdGlvbjogZnVuY3Rpb24oaWQsIENvbnRleHQsIExvY2FsZSkge1xyXG5cdFx0LyogSGlkZSBhbnkgb3RoZXIgbWVudXMgb24gcGFnZSBhbmQgc2V0IGJ1dHRvbiBhcyBjb2xsYXBzZWQuICovXHJcblx0XHQkKCcucG9wdXAtbWVudTp2aXNpYmxlJykuaGlkZSgpO1xyXG5cclxuXHRcdC8vdmFyIF90aGlzID0gJCh0aGlzKTtcclxuXHRcdHZhciBfdGhpcyA9ICQoJyMnICsgaWQpO1xyXG5cdFx0dmFyIFh4ID0gMDtcclxuXHRcdHZhciBZeSA9IDA7XHJcblx0XHR2YXIgV3cgPSAwO1xyXG5cdFx0dmFyIEhoID0gMDtcclxuXHJcblx0XHQvL190aGlzLmNoaWxkcmVuKCcuYnV0dG9uLWV4cGFuZDp2aXNpYmxlJykuaGlkZSgpO1xyXG5cclxuXHRcdC8qIEdldCB0aGUgbWVudSBlbGVtZW50LiAqL1xyXG5cdFx0dmFyIF9lbCA9IF90aGlzLm5leHQoJy5wb3B1cC1tZW51Jyk7XHJcblxyXG5cdFx0LyogRGlzcGxheSB0aGUgbWVudS4gKi9cclxuXHRcdF9lbC5zaG93KCk7XHJcblxyXG5cdFx0LyogU2V0IGJ1dHRvbiBjb2xsYXBzZS4gKi9cclxuXHRcdF90aGlzLmNoaWxkcmVuKCcuYnV0dG9uLWNvbGxhcHNlJykuc2hvdygpO1xyXG5cclxuXHRcdC8qIEdldCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgYnV0dG9uLiAqL1xyXG5cdFx0YnV0dG9uSGggPSBfdGhpcy5vdXRlckhlaWdodCgpO1xyXG5cdFx0YnV0dG9uV3cgPSBfdGhpcy5vdXRlcldpZHRoKCk7XHJcblxyXG5cdFx0dmFyIGJ1dHRvblkgPSBfdGhpcy5wb3NpdGlvbigpLnRvcCArIGJ1dHRvbkhoICsgMTA7XHJcblx0XHR2YXIgYnV0dG9uWCA9IF90aGlzLm9mZnNldCgpLmxlZnQ7XHJcblx0XHQvL3ZhciBidXR0b25YID0gX3RoaXMucG9zaXRpb24oKS5sZWZ0O1xyXG5cclxuXHRcdC8qIEdldCB0aGUgZGlzdGFuY2Ugb2YgbWVudSBidXR0b24gYW5kIHRoZSBwYXJlbnQgZWxlbWVudCAqL1xyXG5cdFx0dmFyIHBvcHVwUGFyZW50WHggPSBfdGhpcy5vZmZzZXQoKS5sZWZ0IC0gX3RoaXMucG9zaXRpb24oKS5sZWZ0O1xyXG5cclxuXHRcdHZhciBwb3B1cFh4ID0gX2VsLm9mZnNldCgpLmxlZnQ7XHJcblx0XHR2YXIgcG9wdXBXdyA9IF9lbC5vdXRlcldpZHRoKCk7XHJcblxyXG5cdFx0WHggPSBNYXRoLmFicyhidXR0b25YIC0gJCgnYm9keScpLnNjcm9sbExlZnQoKSAtIHBvcHVwUGFyZW50WHgpO1xyXG5cdFx0WXkgPSBNYXRoLmFicyhidXR0b25IaCAtIGJ1dHRvblkgLSAkKCdib2R5Jykuc2Nyb2xsVG9wKCkpO1xyXG5cclxuXHRcdGlmIChMb2NhbGUgIT0gJ0FSJykge1xyXG5cdFx0XHQvKiBDaGVjayBpZiBjbGlja2VkIHBvc2l0aW9uIHBsdXMgdGhlIHBvcHVwIHdpZHRoIGV4Y2VlZCB0aGUgd2luZG93IHdpZHRoLiAqL1xyXG5cdFx0XHRpZiAoYnV0dG9uWCArIHBvcHVwV3cgLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpID4gJChDb250ZXh0KS53aWR0aCgpKSB7XHJcblx0XHRcdFx0WHggPSBidXR0b25YIC0gcG9wdXBXdyAtICQoJ2JvZHknKS5zY3JvbGxMZWZ0KCkgLSBwb3B1cFBhcmVudFh4ICsgYnV0dG9uV3c7XHJcblx0XHRcdFx0Ly9YeCA9ICgkKHdpbmRvdykud2lkdGgoKSAtIHBvcHVwV3cpIC0gJCgnYm9keScpLnNjcm9sbExlZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qIFNldCBtZW51IHBvc2l0aW9uLiAqL1xyXG5cdFx0X2VsLmNzcyh7XHJcblx0XHRcdGxlZnQ6IFh4ICsgJ3B4JyxcclxuXHRcdFx0dG9wOiBidXR0b25ZICsgJ3B4JyxcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qIFJlZnJlc2ggdmFsdWUgKi9cclxuXHRcdHBvcHVwWHggPSBfZWwub2Zmc2V0KCkubGVmdDtcclxuXHJcblx0XHR2YXIgX2JhbGxvb25FbCA9IF9lbC5jaGlsZHJlbignLnBvcHVwLW1lbnUtYmFsbG9vbicpO1xyXG5cclxuXHRcdHZhciBfYmFsbG9vblh4ID0gX2JhbGxvb25FbC5vZmZzZXQoKS5sZWZ0O1xyXG5cdFx0dmFyIF9iYWxsb29uV3cgPSBfYmFsbG9vbkVsLm91dGVyV2lkdGgoKTtcclxuXHRcdHZhciBfYmFsbG9vblBvc1h4ID0gTWF0aC5hYnMoYnV0dG9uWCAtIFh4IC0gcG9wdXBQYXJlbnRYeCk7XHJcblxyXG5cdFx0LyogSXMgdGhlIGJhbGxvb24gaWNvbiBwb3NpdGlvbmVkIG91dCBvZiB0aGUgcG9wdXAgbWVudT8gKi9cclxuXHRcdGlmIChfYmFsbG9vblBvc1h4ICsgWHggKyBfYmFsbG9vbld3ID4gWHggKyBwb3B1cFd3KSB7XHJcblx0XHRcdF9iYWxsb29uUG9zWHggPSBfYmFsbG9vblBvc1h4IC0gX2JhbGxvb25XdztcclxuXHRcdH1cclxuXHJcblx0XHQvKiBTZXQgcG9zaXRpb24gb2YgdGhlIGJhbGxvb24gZWZmZWN0LiAqL1xyXG5cdFx0X2JhbGxvb25FbC5jc3MoJ2xlZnQnLCBfYmFsbG9vblBvc1h4ICsgJ3B4Jyk7XHJcblx0fSxcclxuXHRtZW51RXZlbnRzOiBmdW5jdGlvbihDb250ZXh0LCBMb2NhbGUpIHtcclxuXHRcdCQoJy5wb3B1cC1idXR0b24nKVxyXG5cdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Qb3BVcE1lbnUubWVudVBvc2l0aW9uKGlkLCBDb250ZXh0LCBMb2NhbGUpO1xyXG5cclxuXHRcdFx0XHQvKmUuc3RvcFByb3BhZ2F0aW9uKCk7Ki9cclxuXHJcblx0XHRcdFx0LyogUHJldmVudCBsaW5rIHN1Ym1pc3Npb24gKi9cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdC8qIHYgKioqIEhpZGUgcG9wdXAgd2hlbiBjbGljayBvdXRzaWRlICoqKiB2ICovXHJcblx0XHRmdW5jdGlvbiBQTUNsaWNrT3V0c2lkZShldmVudCkge1xyXG5cdFx0XHRpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpKSB7XHJcblx0XHRcdFx0dmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcclxuXHRcdFx0XHQvKmlmICgodGFyZ2V0LnBhcmVudHMoKS5pbmRleCgkKCdhW3NhcHBoaXJlaG9zcGl0YWxdLCAuSG9zcGl0YWxQb3BVcCcpKSA9PSAtMSkpIHt9Ki9cclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQhJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXHJcblx0XHRcdFx0XHRcdCcucG9wdXAtYnV0dG9uLCAucG9wdXAtbWVudSwgLm9zLWludGVybmFsLXVpLWF1dG9jb21wbGV0ZSwgLm9zLWludGVybmFsLXVpLW1lbnUtaXRlbSwgLm9zLWludGVybmFsLXVpLWNvcm5lci1hbGwsIHVpLWF1dG9jb21wbGV0ZS1pdGVtJ1xyXG5cdFx0XHRcdFx0KS5sZW5ndGhcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdCQoJy5wb3B1cC1tZW51OnZpc2libGUnKS5oaWRlKCk7XHJcblx0XHRcdFx0XHQkKCcuYnV0dG9uLWNvbGxhcHNlOnZpc2libGUnKS5oaWRlKCk7XHJcblx0XHRcdFx0XHQvLyQoJy5idXR0b24tZXhwYW5kJykuc2hvdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfUE1Jc0RyYWcgPSBmYWxzZTtcclxuXHRcdHZhciBfUE1Jc0NsaWNrID0gZmFsc2U7XHJcblx0XHQkKGRvY3VtZW50KS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF9QTUlzRHJhZyA9IGZhbHNlO1xyXG5cdFx0XHRfUE1Jc0NsaWNrID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdFx0JChkb2N1bWVudCkub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdF9QTUlzRHJhZyA9IHRydWU7XHJcblx0XHR9KTtcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFBNQ2xpY2tPdXRzaWRlKGV2ZW50KTtcclxuXHRcdFx0X1BNSXNEcmFnID0gZmFsc2U7XHJcblx0XHRcdF9QTUlzQ2xpY2sgPSBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdFx0JChkb2N1bWVudCkub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0aWYgKCFfUE1Jc0RyYWcgJiYgX1BNSXNDbGljaykge1xyXG5cdFx0XHRcdFBNQ2xpY2tPdXRzaWRlKGV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRfUE1Jc0RyYWcgPSBmYWxzZTtcclxuXHRcdFx0X1BNSXNDbGljayA9IGZhbHNlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnLmJ1dHRvbi1jb2xsYXBzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdCQoJ2JvZHknKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9KTtcclxuXHRcdC8qIF4gKioqIEhpZGUgcG9wdXAgd2hlbiBjbGljayBvdXRzaWRlICoqKiBeICovXHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlUGFuZWwgKi9cblNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsID0ge1xuXHRjaGVja09wZW5QYW5lbDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnU2FwcGhpcmVQYW5lbE9wZW4nKSAmJiAkKCcuU2FwcGhpcmVQYW5lbF9Db250YWluZXI6dmlzaWJsZScpLmxlbmd0aDtcblx0fSxcblxuXHR0b2dnbGVTYXBwaGlyZVBhbmVsOiBmdW5jdGlvbihQYW5lbElkKSB7XG5cdFx0aWYgKCFPc1ZhbGlkYXRvck9uU3VibWl0KCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIVNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBhbmVsLmNoZWNrT3BlblBhbmVsKCkpIHtcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnU2FwcGhpcmVQYW5lbE9wZW4nKTtcblx0XHRcdCQoJyMnICsgUGFuZWxJZCkuZmFkZUluKDE0MCk7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJyMnICsgUGFuZWxJZClcblx0XHRcdFx0XHQuZmluZCgnLlNhcHBoaXJlUGFuZWxfQ29udGFpbmVyJylcblx0XHRcdFx0XHQuc2xpZGVUb2dnbGUoMTUwKTtcblx0XHRcdH0sIDEwMCk7XG5cdFx0fVxuXHR9LFxuXG5cdGNsb3NlU2FwcGhpcmVQYW5lbDogZnVuY3Rpb24oUGFuZWxJZCkge1xuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnU2FwcGhpcmVQYW5lbE9wZW4nKTtcblx0XHQkKCcjJyArIFBhbmVsSWQpLmZhZGVPdXQoMTQwKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcjJyArIFBhbmVsSWQpXG5cdFx0XHRcdC5maW5kKCcuU2FwcGhpcmVQYW5lbF9Db250YWluZXInKVxuXHRcdFx0XHQuc2xpZGVVcCgxNTApO1xuXHRcdH0sIDEwMCk7XG5cdH0sXG5cblx0c2V0UGFuZWxCZWhhdmlvcjogZnVuY3Rpb24oKSB7XG5cdFx0JCgnLlBhbmVsW3BhbmVsLXRyaWdnZXItZWxlbWVudGlkXScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGhpc19wYW5lbCA9ICQodGhpcyk7XG5cdFx0XHQkKCcjJyArIHRoaXNfcGFuZWwuYXR0cigncGFuZWwtdHJpZ2dlci1lbGVtZW50aWQnKSArICcnKVxuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQYW5lbC50b2dnbGVTYXBwaGlyZVBhbmVsKHRoaXNfcGFuZWwuYXR0cignaWQnKSk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQYW5lbC5zZXRQYW5lbEJlaGF2aW9yKCk7XG5cblx0aWYgKG9zQWpheEJhY2tlbmQuRXZlbnRIYW5kbGVycy5BZnRlckFqYXhSZXF1ZXN0LnRvU3RyaW5nKCkuaW5kZXhPZignc2V0UGFuZWxCZWhhdmlvcicpID09IC0xKSB7XG5cdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQYW5lbC5zZXRQYW5lbEJlaGF2aW9yKTtcblx0fVxufSk7XG4iLCJyZXF1aXJlKCcuL2NvbmZpcm1hdGlvbi1wYW5lbCcpO1xyXG5yZXF1aXJlKCcuL21vZGFsLXBvcHVwJyk7XHJcbnJlcXVpcmUoJy4vcGFuZWwtYnktaWQnKTtcclxucmVxdWlyZSgnLi9wb3B1cC1tZW51Jyk7XHJcbnJlcXVpcmUoJy4vc2FwcGhpcmUtcGFuZWwnKTtcclxuIiwiLyogQ29tcG9uZW50IFBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCkuZmluZCgnLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlJyk7XG5cdFx0Y29uc3QgJGxpc3RRdWV1ZVdyYXBwZXIgPSAkd2lkZ2V0LmZpbmQoJy5QYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZV9fTGlzdFF1ZXVlcycpO1xuXHRcdGNvbnN0ICRkcm9wZG93biA9ICRsaXN0UXVldWVXcmFwcGVyLmZpbmQoJy5JbmxpbmVEcm9wZG93bl9sYWJlbCcpO1xuXG5cdFx0JGxpc3RRdWV1ZVdyYXBwZXIub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKCEkZHJvcGRvd24ubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0JHdpZGdldC50b2dnbGVDbGFzcygnUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUtLWFjdGl2ZScpO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5vbignY2xpY2suUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUnLCAoKSA9PiB7XG5cdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ1BhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlLS1hY3RpdmUnKTtcblx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdjbGljay5QYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZScpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFBhdGllbnRDYWxsQ2FuY2VsICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0Y29uc3QgJGNvdW50ZG93biA9ICR3aWRnZXQuZmluZCgnW3VpPWRhdGEtY291bnRlcl0nKTtcblx0XHRsZXQgJGNhbGxCdXR0b24gPSAkd2lkZ2V0LmZpbmQoJ1t1aT1kYXRhLWJ1dHRvbi1jYWxsXScpO1xuXHRcdGxldCAkY2FuY2VsQnV0dG9uID0gJHdpZGdldC5maW5kKCdbdWk9ZGF0YS1idXR0b24tY2FuY2VsXScpO1xuXHRcdGNvbnN0ICRvdGhlckNvbnRlbnQgPSAkd2lkZ2V0LmZpbmQoJy5QYXRpZW50Q2FsbENhbmNlbF9fT3RoZXInKTtcblxuXHRcdGxldCBpbnRlcnZhbDtcblx0XHRsZXQgdGltZUNvdW50ZXI7XG5cblx0XHRjb25zdCBjYWxsUGF0aWVudCA9IGZ1bmN0aW9uKCR3aWRnZXQpIHtcblx0XHRcdHRvZ2dsZUNhbGxpbmdTdGF0ZSgpO1xuXG5cdFx0XHRpZiAoY29uZmlnLnNob3dDb3VudGRvd24pICRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbGluZ0luICsgJyAnICsgY29uZmlnLnRpbWVUb0NhbmNlbCk7XG5cdFx0XHRlbHNlICRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbGluZ0luKTtcblxuXHRcdFx0c3RhcnRDb3VudGVyKCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHRvZ2dsZUNhbGxpbmdTdGF0ZSA9ICgpID0+IHtcblx0XHRcdCR3aWRnZXQudG9nZ2xlQ2xhc3MoJ0NhbGxpbmdQYXRpZW50Jyk7XG5cdFx0XHQkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxQYXRpZW50KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc2V0SW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuXHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnQ2FsbGluZ1BhdGllbnQnKTtcblx0XHRcdCRjYWxsQnV0dG9uLnNob3coKTtcblx0XHRcdCRvdGhlckNvbnRlbnQuc2hvdygpO1xuXHRcdH07XG5cblx0XHRjb25zdCBzdGFydENvdW50ZXIgPSAoKSA9PiB7XG5cdFx0XHR0aW1lQ291bnRlciA9IGNvbmZpZy50aW1lVG9DYW5jZWw7XG5cdFx0XHRpbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh1cGRhdGVDb3VudGVyLCAxMDAwKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgdXBkYXRlQ291bnRlciA9ICgpID0+IHtcblx0XHRcdHRpbWVDb3VudGVyLS07XG5cblx0XHRcdGlmICh0aW1lQ291bnRlciA9PT0gMCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoY29uZmlnLnBhdGllbnRDYWxsRmFrZU5vdGlmeUlkLCAnJyk7XG5cblx0XHRcdFx0c2V0SW5pdGlhbFN0YXRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcuc2hvd0NvdW50ZG93bikgJGNvdW50ZG93bi50ZXh0KGNvbmZpZy50eHRDYWxsaW5nSW4gKyAnICcgKyB0aW1lQ291bnRlcik7XG5cdFx0XHRlbHNlICRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbGluZ0luKTtcblx0XHR9O1xuXG5cdFx0aWYgKGNvbmZpZy5zdGFydENvdW50aW5nKSBjYWxsUGF0aWVudCgkd2lkZ2V0KTtcblxuXHRcdCRjYWxsQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmICgkd2lkZ2V0Lmhhc0NsYXNzKCdDYWxsaW5nUGF0aWVudCcpKSByZXR1cm47XG5cblx0XHRcdGNhbGxQYXRpZW50KCR3aWRnZXQpO1xuXG5cdFx0XHQkY2FsbEJ1dHRvbi5oaWRlKCk7XG5cdFx0XHQkb3RoZXJDb250ZW50LmhpZGUoKTtcblx0XHR9KTtcblxuXHRcdCRjYW5jZWxCdXR0b24ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0dGltZUNvdW50ZXIgPSBjb25maWcudGltZVRvQ2FuY2VsO1xuXHRcdFx0JGNvdW50ZG93bi50ZXh0KHRpbWVDb3VudGVyKTtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG5cdFx0XHR0b2dnbGVDYWxsaW5nU3RhdGUoKTtcblxuXHRcdFx0JGNhbGxCdXR0b24uc2hvdygpO1xuXHRcdFx0JG90aGVyQ29udGVudC5zaG93KCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlBhdGllbnRDYWxsQ2FuY2VsID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBQcmVzY3JpcHRpb25DYXJkICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuUHJlc2NyaXB0aW9uQ2FyZGApO1xuXG5cdFx0aWYgKGNvbmZpZy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdGNvbnN0ICRleHBhbmRMaW5rID0gJGNvbXBvbmVudC5maW5kKCcuUHJlc2NyaXB0aW9uQ2FyZF9fRXhwYW5kSWNvbicpO1xuXG5cdFx0XHQkZXhwYW5kTGluay5jbGljaygoKSA9PiB7XG5cdFx0XHRcdCRjb21wb25lbnQudG9nZ2xlQ2xhc3MoJ1ByZXNjcmlwdGlvbkNhcmQtLWV4cGFuZGVkJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlByZXNjcmlwdGlvbkNhcmQgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgUHJlc2NyaXB0aW9uRXhwYW5kYWJsZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IFByZXNjcmlwdGlvbkV4cGFuZGFibGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRjb25zdCB3aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcblx0XHRjb25zdCBwcmV2aWV3c3RhdCA9IFtdO1xuXG5cdFx0Y29uc3QgJGVsZW1lbnRXcmFwcGVyID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXG5cdFx0Y29uc3QgY2xpY2tFdmVudHMgPSBvYiA9PiB7XG5cdFx0XHRpZiAoJChvYikuaGFzQ2xhc3MoJ1ByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyX19MaW5rc0RpdicpKSB7XG5cdFx0XHRcdHZhciBTZWN0aW9uID0gJChvYilcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQucGFyZW50KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpLnBhcmVudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9jb250ZW50Jyk7XG5cblx0XHRcdC8vIGdldCBpZFxuXHRcdFx0dmFyIGlkID0gU2VjdGlvbi5hdHRyKCdpZCcpO1xuXG5cdFx0XHR2YXIgdGVtcEhlaWdodCA9IDA7XG5cblx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxuXHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0LCBkdXJpbmcgdGhpcyBwcm9jZXNzLCB0cmFuc2l0aW9ucyBhcmUgZGlzYWJsZWRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuYWRkQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCkpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudFswXS5vZmZzZXRIZWlnaHQ7IC8vIGhhY2sgdG8gZm9yY2UgYSByZXBhaW50XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LnJlbW92ZUNsYXNzKCdub1RyYW5zaXRpb24nKTtcblxuXHRcdFx0XHQvLyBDb2xsYXBzZSBjb250ZW50XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcblx0XHRcdFx0U2VjdGlvbi5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xuXHRcdFx0XHR0ZW1wSGVpZ2h0ID0gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KHRlbXBIZWlnaHQpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxuXHRcdFx0XHRTZWN0aW9uLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dGhpcy5pbml0ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgJGhlYWRlciA9ICRlbGVtZW50V3JhcHBlci5maW5kKCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXInKTtcblx0XHRcdGNvbnN0ICRsaW5rcyA9ICRoZWFkZXIuZmluZCgnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyX19MaW5rc0RpdicpO1xuXG5cdFx0XHQvLyBDcmVhdGUgYXJyYXkgc3RhdFxuXHRcdFx0JCgnLlNlY3Rpb25QcmVzY3JpcHRpb25FeHBhbmRhYmxlQXJlYScpLmVhY2goKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzdGF0ID0gJGhlYWRlci5oYXNDbGFzcygnZXhwYW5kZWQnKSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFx0cHJldmlld3N0YXRbd2lkZ2V0SWRdID0geyBjbGllbnQ6IHN0YXQsIHNlcnZlcjogc3RhdCB9O1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICgkaGVhZGVyLmhhc0NsYXNzKCdOb3RFeHBhbmRhYmxlJykpIHtcblx0XHRcdFx0JGhlYWRlci5vbignY2xpY2snLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5cdFx0XHR9IGVsc2UgaWYgKCRoZWFkZXIuaGFzQ2xhc3MoJ2lzTGlua0VwYW5kYWJsZUNsaWNrJykpIHtcblx0XHRcdFx0JGxpbmtzLm9uKCdjbGljaycsIGUgPT4gY2xpY2tFdmVudHMoJGxpbmtzKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkaGVhZGVyLm9uKCdjbGljaycsIGUgPT4gY2xpY2tFdmVudHMoJGhlYWRlcikpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50cyA9XG5cdFx0XHRcdCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgaW5wdXQsIC5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBzZWxlY3QsIC5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBhJztcblx0XHRcdCQoZWxlbWVudHMpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdG9zQWpheEJhY2tlbmQgJiYgb3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChhamF4UmVmcmVzaCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGFqYXhSZWZyZXNoID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdC8vIHJlbW92ZSBjbGljayBldmVudHNcblx0XHRcdC8vJCgnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyJykub2ZmKCk7XG5cblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXG5cdFx0XHQkKFxuXHRcdFx0XHQnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIGlucHV0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgc2VsZWN0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgYSdcblx0XHRcdCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcblx0XHRcdCQoJy5TZWN0aW9uUHJlc2NyaXB0aW9uRXhwYW5kYWJsZUFyZWEnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBpZiBuZXcgU2VjdGlvbkV4cGFuZGFibGUgdGhlbiBhZGQgdG8gcHJldmlld3N0YXQgYXJyYXlcblx0XHRcdFx0aWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XG5cdFx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcblx0XHRcdFx0XHQvLyBpZiBvcGVuXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhZGQgcm93XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9IHsgY2xpZW50OiBzdGF0LCBzZXJ2ZXI6IHN0YXQgfTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGN1cmVudCBzdGF0ZSAoYWpheCBzdGF0ZSB4IGluaXRpYWwgc3RhdGUpXG5cdFx0XHRcdHZhciBjdXJTdGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIGNoZWNrIGlmIHN0YXJ0IGV4cGFuZGFibGVcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRjdXJTdGF0ZSA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjaGVjayBpZiBhamF4ICE9IGluaXRpYWwgc2VydmVyXG5cdFx0XHRcdGlmIChjdXJTdGF0ZSAhPSBwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSkge1xuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPSBjdXJTdGF0ZTtcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSA9IGN1clN0YXRlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxuXHRcdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSBmYWxzZSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2NvbnRlbnQnKVxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KDApO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gdHJ1ZSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHRjb25zdCBleHBhbmRhYmxlID0gbmV3IFByZXNjcmlwdGlvbkV4cGFuZGFibGUoY29uZmlnKTtcblxuXHRcdGV4cGFuZGFibGUuaW5pdCgpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlSGVhZGVyICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBTYXBwaGlyZUhlYWRlcihjb25maWcpO1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcblx0fTtcblxuXHR2YXIgaGFuZGxlRGVtb2dyYXBoaWNzID0gZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZF0uaGFuZGxlRGVtb2dyYXBoaWNzKCk7XG5cdH07XG5cblx0dmFyIFNhcHBoaXJlSGVhZGVyID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLmlzQ29uZmlkZW50aWFsID0gY29uZmlnLmlzQ29uZmlkZW50aWFsO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiR3aWRnZXQuY3NzKHtcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0fSk7XG5cdFx0dGhpcy4kaGVhZGVyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlcicpO1xuXHRcdHRoaXMuJG5hdmlnYXRpb24gPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLW5hdmlnYXRpb24nKTtcblx0XHR0aGlzLiRpZGVudGlmaWNhdGlvbiA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItaWRlbnRpZmljYXRpb24nKTtcblx0XHR0aGlzLiRkZW1vZ3JhcGhpYyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItZGVtb2dyYXBoaWNzJyk7XG5cdFx0dGhpcy4kaW5mb3JtYXRpb24gPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWluZm9ybWF0aW9uJyk7XG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWN0aW9ucycpO1xuXHRcdHRoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1hZGRpdGlvbmFsLXRyaWdnZXInKTtcblx0XHR0aGlzLiRhZGRpdGlvbmFsQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWRkaXRpb25hbC1jb250ZW50Jyk7XG5cblx0XHR0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XG5cblx0XHRpZiAodGhpcy4kaW5mb3JtYXRpb24udGV4dCgpID09PSAnJykge1xuXHRcdFx0dGhpcy4kaW5mb3JtYXRpb24uaGlkZSgpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuZ2V0Q29uZmlnID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnO1xuXHR9O1xuXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy5oYW5kbGVEZW1vZ3JhcGhpY3MoKTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuYXR0YWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRhZGRpdGlvbmFsVHJpZ2dlci5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChfdGhpcy4kaGVhZGVyLmhhc0NsYXNzKCdpc09wZW4nKSkge1xuXHRcdFx0XHRfdGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCdpc09wZW4nKTtcblx0XHRcdFx0Ly8kKCcuTGF5b3V0QmFzZS1oZWFkZXInKS5jc3MoJ3otaW5kZXgnLCAyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF90aGlzLiRoZWFkZXIuYWRkQ2xhc3MoJ2lzT3BlbicpO1xuXHRcdFx0XHQvLyQoJy5MYXlvdXRCYXNlLWhlYWRlcicpLmNzcygnei1pbmRleCcsIDMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5oYW5kbGVEZW1vZ3JhcGhpY3MgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMuZmluZCgnLkRlbW9ncmFwaGljLWl0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG5cdFx0dGhpcy4kYWRkaXRpb25hbFRyaWdnZXIuaGlkZSgpO1xuXHRcdHRoaXMuJGFkZGl0aW9uYWxDb250ZW50LmVtcHR5KCk7XG5cblx0XHRjb25zdCBkZW1vZ3JhcGhpY1dpZHRoID0gdGhpcy4kZGVtb2dyYXBoaWMub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRsZXQgaXRlbXNUb3RhbCA9IDA7XG5cblx0XHRjb25zdCBjb21wb25lbnRXaWR0aCA9IHRoaXMuJHdpZGdldC5vdXRlcldpZHRoKHRydWUpO1xuXHRcdGNvbnN0IG5hdmlnYXRpb25XaWR0aCA9IHRoaXMuJG5hdmlnYXRpb24ud2lkdGgoKTtcblx0XHRjb25zdCBpZGVudGlmaWNhdGlvbldpZHRoID0gdGhpcy4kaWRlbnRpZmljYXRpb24ud2lkdGgoKTtcblx0XHRjb25zdCBkZW1vZ3JhcGhpY3NXaWR0aCA9IHRoaXMuJGRlbW9ncmFwaGljLndpZHRoKCk7XG5cdFx0Y29uc3QgaW5mb3JtYXRpb25XaWR0aCA9IHRoaXMuJGluZm9ybWF0aW9uLndpZHRoKCk7XG5cdFx0Y29uc3QgYWN0aW9uc1dpZHRoID0gdGhpcy4kYWN0aW9ucy53aWR0aCgpO1xuXG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMuZmluZCgnLkRlbW9ncmFwaGljLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpdGVtc1RvdGFsICs9IHBhcnNlSW50KCQodGhpcykub3V0ZXJXaWR0aCh0cnVlKSwgMTApO1xuXG5cdFx0XHQvLyA2NCAtPiBtYXJnaW5zIGFuZCA5OSAtPiBNb3JlIEluZm8gYnV0dG9uXG5cdFx0XHRpZiAoaXRlbXNUb3RhbCArIDY0ICsgMTEwIDwgZGVtb2dyYXBoaWNXaWR0aCkge1xuXHRcdFx0XHQkKHRoaXMpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuY2xvbmUoKVxuXHRcdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcblx0XHRcdFx0XHQuYXBwZW5kVG8oX3RoaXMuJGFkZGl0aW9uYWxDb250ZW50KTtcblx0XHRcdFx0X3RoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyLnNob3coKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLiRhZGRpdGlvbmFsQ29udGVudC5maW5kKCcuRGVtb2dyYXBoaWMtaXRlbScpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCdpc09wZW4nKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLnNob3dBZGRpdGlvbmFsID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5hZGRDbGFzcygnaXNPcGVuJyk7XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmhpZGVBZGRpdGlvbmFsID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHRcdGhhbmRsZURlbW9ncmFwaGljczogaGFuZGxlRGVtb2dyYXBoaWNzLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0aWYgKCEhU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyLndpZGdldElkKSB7XG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZF0uaGFuZGxlRGVtb2dyYXBoaWNzKCk7XG5cdH1cblx0aWYgKCEhJCgnLlNhcHBoaXJlSGVhZGVyLWRlbW9ncmFwaGljcycpLmxlbmd0aCkge1xuXHRcdG9zQWpheEJhY2tlbmQgJiZcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIud2lkZ2V0SWRdLmhhbmRsZURlbW9ncmFwaGljcygpO1xuXHRcdFx0fSk7XG5cdH1cbn0pO1xuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlUG9wdXAgKi9cbnZhciBSaWNoV2lkZ2V0c19Qb3B1cF9FZGl0b3Jfbm90aWZ5V2lkZ2V0O1xuXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Ly8gQ2hlY2sgaWYgdGhlIHdpZGdldCBpcyBsb2FkZWQgaW5zaWRlIGFuIGlGcmFtZVxuXHRsZXQgaXNJbnNpZGVJZnJhbWUgPSB3aW5kb3cuZnJhbWVFbGVtZW50ICE9IHVuZGVmaW5lZCB8fCBmYWxzZTtcblxuXHQvLyBDb25zdGFudHNcblx0Y29uc3QgUE9QVVBfSU5JVElBTF9XSURUSCA9IDMwMDtcblx0Y29uc3QgUE9QVVBfSU5JVElBTF9IRUlHSFQgPSAxMDA7XG5cdGNvbnN0IFBPUFVQX1dJTkRPV19JTkRFWCA9IDQwMTA7XG5cdGNvbnN0IFBPUFVQX0NMT1NJTkdfVEFHID0gJ2Nsb3NpbmcnO1xuXHRjb25zdCBQT1BVUF9DTE9TSU5HX1ZBTFVFID0gJ3RydWUnO1xuXG5cdGxldCBQT1BVUF9OT1RJRllfV0lER0VUO1xuXHRsZXQgUE9QVVBfUEFSRU5UX1VSTDtcblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xuXHRcdGlmIChjb25maWcuaWdub3JlSWZyYW1lKSBpc0luc2lkZUlmcmFtZSA9IGZhbHNlO1xuXG5cdFx0JCgpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcblx0XHRcdGNvbnN0IF9pZCA9IGNvbmZpZy5saW5rSWQ7XG5cdFx0XHRjb25zdCBsaW5rUXVlcnkgPSBgIyR7Y29uZmlnLmxpbmtJZH1gO1xuXHRcdFx0bGV0IGxpbmtXaWRnZXQ7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxpbmtXaWRnZXQgPSAkKGxpbmtRdWVyeSkuZ2V0KDApO1xuXHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0aWYgKHR5cGVvZiBsaW5rV2lkZ2V0ID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdC8vQ2FzZSB0aGUgd2lkZ2V0IGlzIGluZXhpc3RlbnQgb3IgaW52aXNpYmxlLCBpdCB3aWxsIHNob3cgbm8gZXJyb3JzLlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdFBPUFVQX1BBUkVOVF9VUkwgPSBjb25maWcucGFyZW50VXJsO1xuXG5cdFx0XHRjb25zdCBsaW5rUmVzdWx0ID0gZ2V0TGlua0hSRUYobGlua1dpZGdldCk7XG5cdFx0XHRjb25zdCBsaW5rSHJlZiA9IGxpbmtSZXN1bHRbMF07XG5cdFx0XHRjb25zdCBpc0FCdXR0b24gPSBsaW5rUmVzdWx0WzFdO1xuXG5cdFx0XHRpZiAodHlwZW9mIGxpbmtIcmVmID09ICd1bmRlZmluZWQnIHx8IGxpbmtIcmVmID09ICcnIHx8IGxpbmtIcmVmID09ICcjJyB8fCBsaW5rSHJlZi5pbmRleE9mKCdqYXZhc2NyaXB0OicpID09IDApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR3aW5kb3cuT3NIYW5kbGVFeGNlcHRpb24oXG5cdFx0XHRcdFx0XHRuZXcgRXJyb3IoJ1BvcHVwIGxpbmsgaWQgbXVzdCBiZSB0aGUgaWQgb2YgYSBMaW5rIG9yIEJ1dHRvbiBXaWRnZXQgd2l0aCBNZXRob2QgTmF2aWdhdGUuJyksXG5cdFx0XHRcdFx0XHRvdXRzeXN0ZW1zLm9zRXJyb3JDb2Rlcy5TeXN0ZW1KYXZhc2NyaXB0RXJyb3IsXG5cdFx0XHRcdFx0XHQnUG9wdXBfRWRpdG9yJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgdGhlIGV4aXN0aW5nIG9uLWNsaWNrIGV2ZW50XG5cdFx0XHRpZiAoaXNBQnV0dG9uKSB7XG5cdFx0XHRcdGxpbmtXaWRnZXQuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdCdvbmNsaWNrJyxcblx0XHRcdFx0XHRsaW5rV2lkZ2V0XG5cdFx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKCdvbmNsaWNrJylcblx0XHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnd2luZG93LmxvY2F0aW9uLmhyZWY9JywgJ3JldHVybiBmYWxzZTt3aW5kb3cubG9jYXRpb24uaHJlZj0nKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgY29uZmlybWF0aW9uIG1lc3NhZ2UsIHN0b3JlIGluIGFuIGF0dHJpYnV0ZSB0aGUgcmVzdWx0XG5cdFx0XHRpZiAobGlua1dpZGdldC5nZXRBdHRyaWJ1dGUoJ29uY2xpY2snKSAhPSBudWxsKSB7XG5cdFx0XHRcdGxpbmtXaWRnZXQuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdCdvbmNsaWNrJyxcblx0XHRcdFx0XHRsaW5rV2lkZ2V0XG5cdFx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKCdvbmNsaWNrJylcblx0XHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0J2lmKCByZXQgIT0gdHJ1ZSApJyxcblx0XHRcdFx0XHRcdFx0XCIkKCdcIiArIGxpbmtRdWVyeSArIFwiJykuZ2V0KDApLnNldEF0dHJpYnV0ZSgnY29uZmlybWVkJywgcmV0KTsgaWYoIHJldCAhPSB0cnVlIClcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHQvLyBUaGUgY2xpY2tIYW5kbGVyIGV2ZW50IGlzIHJlZ2lzdGVyZWQgaW4gb3NqcyBhbmQgJCBmb3IgY29tcGF0aWJpbGxpdHkgcmVhc29ucywgdGhleSBtdXN0IG5vdCBydW4gYm90aCBmb3IgdGhlIHNhbWUgY2xpY2suXG5cdFx0XHRcdC8vIFZhcmlhYmxlIGlzIHNldCB0byBmYWxzZSBpbiByZXNpemUgZnVuY3Rpb24uXG5cdFx0XHRcdGlmICgkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycpID09IHRydWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnLCB0cnVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBjbGlja2VkIGxpbmsgaXMgZGlzYWJsZWRcblx0XHRcdFx0aWYgKGxpbmtXaWRnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9IG51bGwpIHtcblx0XHRcdFx0XHR2YXIgbGlua0Rpc2FibGVkID0gbGlua1dpZGdldFxuXHRcdFx0XHRcdFx0LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRcdFx0aWYgKGxpbmtEaXNhYmxlZCA9PSAnZGlzYWJsZWQnIHx8IGxpbmtEaXNhYmxlZC5pbmRleE9mKCd0cnVlJykgIT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobGlua1dpZGdldC5nZXRBdHRyaWJ1dGUoJ2NvbmZpcm1lZCcpID09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKE9zSXNJRSgpKSBvc0ZvY3VzQmFja2VuZC5DbGVhckZvY3VzZWRFbGVtZW50KCk7XG5cblx0XHRcdFx0bGV0IHBvcHVwRGl2O1xuXHRcdFx0XHRsZXQgcGxlYXNlV2FpdERpdjtcblxuXHRcdFx0XHRjb25zdCB3YWl0VGV4dCA9IGA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMzZweDtcIj4ke2NvbmZpZy5sb2FkaW5nTWVzc2FnZX08L2Rpdj5gO1xuXHRcdFx0XHRjb25zdCBpbWdIVE1MID0gJzxkaXYgY2xhc3M9XCJsZHMtcmluZ1wiPjxkaXY+PC9kaXY+PC9kaXY+Jztcblx0XHRcdFx0Y29uc3QgbG9hZGluZ0VsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIkxheW91dFBvcHVwLWxvYWRpbmdcIj4ke2ltZ0hUTUx9ICR7d2FpdFRleHR9PC9kaXY+YDtcblx0XHRcdFx0Y29uc3QgaUZyYW1lRWxlbWVudCA9IGA8aWZyYW1lIGlkPVwiaWZyYW1lXyR7X2lkfVwiIHdpZHRoPVwiMTAwJVwiIHNjcm9sbGluZz1cIm5vXCIgaGVpZ2h0PVwiMTAwJVwiIGZyYW1lYm9yZGVyPVwiMFwiIHNyYz1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIi8+YDtcblxuXHRcdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0XHRsZXQgX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0XHRcdF9kaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IG5vbmU7Jyk7XG5cdFx0XHRcdFx0X2Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dpbmRvd18nICsgX2lkKTtcblx0XHRcdFx0XHR3aW5kb3cudG9wLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoX2Rpdik7XG5cblx0XHRcdFx0XHRwb3B1cERpdiA9IHdpbmRvdy50b3AuJCgnI3dpbmRvd18nICsgX2lkKTtcblx0XHRcdFx0XHRwb3B1cERpdi5hcHBlbmQoaUZyYW1lRWxlbWVudCk7XG5cblx0XHRcdFx0XHRwbGVhc2VXYWl0RGl2ID0gcG9wdXBEaXYucHJlcGVuZChsb2FkaW5nRWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cG9wdXBEaXYgPSAkKFwiPGRpdiBzdHlsZT0ndGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBub25lOyc+PC9kaXY+XCIpLmFwcGVuZFRvKCdib2R5Jyk7XG5cdFx0XHRcdFx0cG9wdXBEaXYuYXBwZW5kKGlGcmFtZUVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0cGxlYXNlV2FpdERpdiA9IHBvcHVwRGl2LnByZXBlbmQobG9hZGluZ0VsZW1lbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgbG9hZFRhcmdldFBhZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy50b3AuUE9QVVBfTk9USUZZX1dJREdFVCA9IGNvbmZpZy5ub3RpZnlJZDtcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgaWZyYW1lIG9iamVjdCBvbiB0aGUgZG9jdW1lbnQgcGFyZW50XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wLl9pZnJhbWVQb3B1cCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQuY29udGVudFdpbmRvdztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0d2luZG93LnRvcC5faWZyYW1lUG9wdXAgPSB3aW5kb3c7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0UE9QVVBfTk9USUZZX1dJREdFVCA9IGNvbmZpZy5ub3RpZnlJZDtcblx0XHRcdFx0XHRSaWNoV2lkZ2V0c19Qb3B1cF9FZGl0b3Jfbm90aWZ5V2lkZ2V0ID0gY29uZmlnLm5vdGlmeUlkO1xuXHRcdFx0XHRcdHdpbmRvdy50b3AuX2lmcmFtZVBvcHVwLlJpY2hXaWRnZXRzX1BvcHVwX0VkaXRvcl9ub3RpZnlXaWRnZXQgPSBjb25maWcubm90aWZ5SWQ7XG5cblx0XHRcdFx0XHQvLyBMb2FkIHRhcmdldCBwYWdlXG5cdFx0XHRcdFx0Y29uc3Qgb2hyZWYgPSBnZXRMaW5rSFJFRihsaW5rV2lkZ2V0KVswXTtcblx0XHRcdFx0XHRjb25zdCByaHJlZiA9IG9ocmVmLnJlcGxhY2UoLyhcXD98JilfPS4qPygmfCQpLywgJyQxXz0nICsgK25ldyBEYXRlKCkubm93ICsgJyQyJyk7XG5cdFx0XHRcdFx0Y29uc3QgeGhyZWYgPSByaHJlZiArIChyaHJlZiA9PSBvaHJlZiA/IChyaHJlZi5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JykgKyAnXz0nICsgK25ldyBEYXRlKCkgOiAnJyk7XG5cblx0XHRcdFx0XHRwb3B1cERpdi5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCB4aHJlZik7XG5cblx0XHRcdFx0XHQoZnVuY3Rpb24ocG9wdXBEaXYpIHtcblx0XHRcdFx0XHRcdHBvcHVwRGl2LmZpbmQoJ2lmcmFtZScpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEFmdGVyIGxvYWRpbmcgdHJ5IHRvIHJlc2l6ZVxuXHRcdFx0XHRcdFx0XHRyZXNpemUocG9wdXBEaXYsIF9pZCwgY29uZmlnLnNldFdpZHRoLCBjb25maWcuc2V0SGVpZ2h0LCB0cnVlLCBldmVudCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KShwb3B1cERpdik7XG5cblx0XHRcdFx0XHRwb3B1cERpdiA9IG51bGw7XG5cdFx0XHRcdFx0cGxlYXNlV2FpdERpdiA9IG51bGw7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0b3BlblBvcHVwKHBvcHVwRGl2LCBwbGVhc2VXYWl0RGl2LCBsb2FkVGFyZ2V0UGFnZSwgZXZlbnQsIGNvbmZpZyk7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblxuXHRcdFx0JChsaW5rUXVlcnkpLmNsaWNrKGNsaWNrSGFuZGxlcik7XG5cblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwLnBvcHVwV2lkdGggPSBjb25maWcuc2V0V2lkdGggfHwgUE9QVVBfSU5JVElBTF9XSURUSDtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZXNpemUgPSAoZGl2VG9Qb3B1cCwgX2lkLCBzZXRXaWR0aCwgc2V0SGVpZ2h0LCByZWNlbnRlciwgZXZlbnQpID0+IHtcblx0XHQvLyBDb2RlIHRvIHN1cHBvcnQgb2xkIHJlc2l6ZSBtZXRob2QgUG9wdXBfV2luZG93X3Jlc2l6ZShzZXRXaWR0aCwgc2V0SGVpZ2h0LCByZWNlbnRlcilcblx0XHRpZiAodHlwZW9mIHJlY2VudGVyID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZWNlbnRlciA9IHNldEhlaWdodDtcblx0XHRcdHNldEhlaWdodCA9IHNldFdpZHRoO1xuXHRcdFx0c2V0V2lkdGggPSBkaXZUb1BvcHVwO1xuXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0ZGl2VG9Qb3B1cCA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkaXZUb1BvcHVwID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVzaXplIG11c3QgYmFpbCBvdXQgaW1tZWRpYXRlbHkgaWYgdGhlIHBvcHVwIGlzIG1hcmtlZCBhcyBjbG9zaW5nLCBhbmQgbm90IHN0YXJ0IHRoZSBhbmltYXRpb24uXG5cdFx0aWYgKCQuZGF0YShkaXZUb1BvcHVwLmdldCgwKSwgUE9QVVBfQ0xPU0lOR19UQUcpID09IFBPUFVQX0NMT1NJTkdfVkFMVUUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRsZXQgZG9jdW1lbnRTZXJ2ZXI7XG5cdFx0bGV0IGZyYW1lT2JqID0gZGl2VG9Qb3B1cC5maW5kKCdpZnJhbWUnKVswXTtcblxuXHRcdGlmICh0eXBlb2YgZnJhbWVPYmogPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGZyYW1lT2JqID0gd2luZG93LnRvcC4kKCcjaWZyYW1lXycgKyBfaWQpWzBdO1xuXHRcdH1cblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0ZG9jdW1lbnRTZXJ2ZXIgPSB3aW5kb3cudG9wLmRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKGh0dHBzPzpcXC9cXC9bXlxcL10qKS4qLywgJyQxJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50U2VydmVyID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oaHR0cHM/OlxcL1xcL1teXFwvXSopLiovLCAnJDEnKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGZyYW1lT2JqICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zdCBmcmFtZVNlcnZlciA9IGZyYW1lT2JqLnNyYy5yZXBsYWNlKC8oaHR0cHM/OlxcL1xcL1teXFwvXSopLiovLCAnJDEnKTtcblx0XHRcdGNvbnN0IHNhbWVPcmlnaW4gPSBmcmFtZVNlcnZlci50b0xvd2VyQ2FzZSgpID09IGRvY3VtZW50U2VydmVyLnRvTG93ZXJDYXNlKCkgfHwgZnJhbWVTZXJ2ZXIuaW5kZXhPZignaHR0cCcpICE9IDA7XG5cblx0XHRcdGlmICghc2FtZU9yaWdpbiAmJiAoc2V0V2lkdGggPT0gLTEgfHwgc2V0SGVpZ2h0ID09IC0xKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0EgUG9wdXAgd2l0aCBhIHNjcmVlbiBmcm9tIGEgZGlmZmVyZW50IHNlcnZlciAob3IgaHR0cHMpIG5lZWRzIGV4cGxpY2ljdCB3aWR0aCwgaGVpZ2h0IHNldC4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNhbWVPcmlnaW4pIHtcblx0XHRcdFx0aWYgKGZyYW1lT2JqLmNvbnRlbnREb2N1bWVudCAhPT0gbnVsbCB8fCBmcmFtZU9iai5jb250ZW50V2luZG93ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyRG9jID0gZnJhbWVPYmouY29udGVudERvY3VtZW50ID8gZnJhbWVPYmouY29udGVudERvY3VtZW50IDogZnJhbWVPYmouY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHRcdFx0XHRpZiAoaW5uZXJEb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCA9PSAwKVxuXHRcdFx0XHRcdFx0Ly8gU3RyYW5nZWx5IHRoaXMgZXZlbnQgaXMgYWxzbyB0cmlnZ2VyZWQgb24gY2xvc2Vcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgb2xkSGVpZ2h0O1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdG9sZEhlaWdodCA9IHdpbmRvdy50b3Bcblx0XHRcdFx0XHQuJChkaXZUb1BvcHVwKVxuXHRcdFx0XHRcdC5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKVxuXHRcdFx0XHRcdC5vdXRlckhlaWdodCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2xkSGVpZ2h0ID0gJChkaXZUb1BvcHVwKVxuXHRcdFx0XHRcdC5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKVxuXHRcdFx0XHRcdC5vdXRlckhlaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgd2lkdGggPSBzZXRXaWR0aCA9PSAtMSA/ICQoaW5uZXJEb2MpLndpZHRoKCkgOiBzZXRXaWR0aDtcblx0XHRcdGxldCBoZWlnaHQgPSBzZXRIZWlnaHQgPT0gLTEgPyAkKGlubmVyRG9jKS5oZWlnaHQoKSA6IHNldEhlaWdodDtcblxuXHRcdFx0dmFyIHRpdGxlSGVpZ2h0O1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdHRpdGxlSGVpZ2h0ID0gd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyJykuaGVpZ2h0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aXRsZUhlaWdodCA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXInKS5oZWlnaHQoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVmVyaWZ5IGlmIHRoZSBwYXJlbnQgd2luZG93IHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgcG9wLXVwIHdpbmRvdywgaWYgc28gc2V0IHRoZSByZXNwb25zaXZlIGNsYXNzIG9uIHRoZSBpZnJhbWUgYm9keSAoZm9yIHJlc3BvbnNpdmUgdGhlbWVzKVxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgd2lkdGgpIHtcblx0XHRcdFx0Ly8gb25seSBzZXQgdGhlIGNsYXNzIGlmIHRoZSBvcmlnaW4gaXMgdGhlIHNhbWVcblx0XHRcdFx0aWYgKHNhbWVPcmlnaW4pIHtcblx0XHRcdFx0XHQkKGlubmVyRG9jKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2JvZHknKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdSZXNwb25zaXZlJyk7XG5cdFx0XHRcdFx0d2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwOyAvLyAxMHB4IFwicGFkZGluZ1wiIGVmZmVjdCwgdG8ga2VlcCB0aGUgcG9wdXAgbG9vayBhbmQgZmVlbCBvbiB0b3Agb2YgY29udGVudFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpeCBpc3N1ZXMgd2l0aCBzY3JvbGxiYXJzXG5cdFx0XHRpZiAoc2V0SGVpZ2h0ID09IC0xKSB7XG5cdFx0XHRcdC8vIElFNyBuZWVkcyBhIGxpdHRsZSBtb3JlIHNwYWNlIHRvIHJlbW92ZSB0aGUgc2Nyb2xsYmFyc1xuXHRcdFx0XHRpZiAoJC5icm93c2VyLm1zaWUpIGhlaWdodCA9IGhlaWdodCArIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvL3doZW4gZXhwbGljaXRseSBzZXR0aW5nIHRoZSBoZWlnaHRcblx0XHRcdFx0aWYgKHNhbWVPcmlnaW4pIGlubmVyRG9jLmJvZHkuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0d2luZG93LnRvcC4kKGRpdlRvUG9wdXApLmhlaWdodChoZWlnaHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JChkaXZUb1BvcHVwKS5oZWlnaHQoaGVpZ2h0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly9IaWRlIEVDVFxuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy50b3Bcblx0XHRcdFx0XHQuJChpbm5lckRvYylcblx0XHRcdFx0XHQuZmluZCgnLkVDVF9GZWVkYmFja0NvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0dmFyIGRpdlBvcHVwT3V0ZXJXaW5kb3cgPSB3aW5kb3cudG9wLiQoZGl2VG9Qb3B1cCkucGFyZW50cygnLm9zLWludGVybmFsLVBvcHVwJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKGlubmVyRG9jKVxuXHRcdFx0XHRcdC5maW5kKCcuRUNUX0ZlZWRiYWNrQ29udGFpbmVyJylcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR2YXIgZGl2UG9wdXBPdXRlcldpbmRvdyA9ICQoZGl2VG9Qb3B1cCkucGFyZW50cygnLm9zLWludGVybmFsLVBvcHVwJyk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBhbmltYXRlRmluYWwgPSB7fTtcblxuXHRcdFx0aWYgKHNldEhlaWdodCA9PSAtMSkge1xuXHRcdFx0XHR2YXIgb2xkVG9wID0gcGFyc2VJbnQoZGl2UG9wdXBPdXRlcldpbmRvdy5jc3MoJ3RvcCcpKTtcblx0XHRcdFx0aWYgKHJlY2VudGVyKSBhbmltYXRlRmluYWwudG9wID0gTWF0aC5tYXgoMjAsIG9sZFRvcCArIChvbGRIZWlnaHQgLSAoaGVpZ2h0ICsgdGl0bGVIZWlnaHQpKSAvIDIpO1xuXHRcdFx0XHRhbmltYXRlRmluYWwuaGVpZ2h0ID0gaGVpZ2h0ICsgdGl0bGVIZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZXRXaWR0aCA9PSAtMSkge1xuXHRcdFx0XHR2YXIgb2xkTGVmdCA9IHBhcnNlSW50KGRpdlBvcHVwT3V0ZXJXaW5kb3cuY3NzKCdsZWZ0JykpO1xuXHRcdFx0XHRpZiAocmVjZW50ZXIpIGFuaW1hdGVGaW5hbC5sZWZ0ID0gb2xkTGVmdCArIChkaXZQb3B1cE91dGVyV2luZG93LndpZHRoKCkgLSB3aWR0aCkgLyAyO1xuXHRcdFx0XHRhbmltYXRlRmluYWwud2lkdGggPSB3aWR0aDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRkaXZQb3B1cE91dGVyV2luZG93LndpZHRoKCkgPT0gYW5pbWF0ZUZpbmFsLndpZHRoICYmXG5cdFx0XHRcdGRpdlBvcHVwT3V0ZXJXaW5kb3cuaGVpZ2h0KCkgPT0gYW5pbWF0ZUZpbmFsLmhlaWdodCAtICgkLmJyb3dzZXIubXNpZSA/IDEgOiAwKVxuXHRcdFx0KSB7XG5cdFx0XHRcdCQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudD4uTGF5b3V0UG9wdXAtbG9hZGluZycpLmhpZGUoKTtcblx0XHRcdFx0JChkaXZUb1BvcHVwKS5oZWlnaHQoaGVpZ2h0IC0gKCQuYnJvd3Nlci5tc2llID8gMSA6IDApKTsgLy8gcmVzdG9yZSBzaXplXG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyBub3RoaW5nIHRvIGRvLi4uXG5cdFx0XHR9XG5cblx0XHRcdC8vIGhpZGUgY29udGVudCBpbiBmaXJzdCByZXNpemUgLSByZWFkanVzdG1lbnRzIHdpbGwgbm90IGZsaWNrclxuXHRcdFx0aWYgKGRpdlBvcHVwT3V0ZXJXaW5kb3cud2lkdGgoKSA9PSBQT1BVUF9JTklUSUFMX1dJRFRIICYmIGRpdlBvcHVwT3V0ZXJXaW5kb3cuaGVpZ2h0KCkgPT0gUE9QVVBfSU5JVElBTF9IRUlHSFQpIHtcblx0XHRcdFx0JChmcmFtZU9iaikuaGVpZ2h0KDApO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb25BbmltYXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRcdFx0d2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlLW5vLXRpdGxlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wXG5cdFx0XHRcdFx0XHRcdC4kKGRpdlRvUG9wdXApXG5cdFx0XHRcdFx0XHRcdC5maW5kKCdpZnJhbWUnKVxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KCcxMDAlJylcblx0XHRcdFx0XHRcdFx0LndpZHRoKGFuaW1hdGVGaW5hbC53aWR0aCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXItY2xvc2Utbm8tdGl0bGUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHRcdFx0XHRcdCQoZGl2VG9Qb3B1cClcblx0XHRcdFx0XHRcdFx0LmZpbmQoJ2lmcmFtZScpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoJzEwMCUnKVxuXHRcdFx0XHRcdFx0XHQud2lkdGgoYW5pbWF0ZUZpbmFsLndpZHRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDEzKTtcblx0XHRcdH07XG5cblx0XHRcdHZhciBkaXZQbGVhc2VXYWl0O1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdGRpdlBsZWFzZVdhaXQgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudD4uTGF5b3V0UG9wdXAtbG9hZGluZycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGl2UGxlYXNlV2FpdCA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudD4uTGF5b3V0UG9wdXAtbG9hZGluZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXZQbGVhc2VXYWl0LmhpZGUoKTtcblxuXHRcdFx0aWYgKHNldEhlaWdodCA9PSAtMSB8fCBzZXRXaWR0aCA9PSAtMSkge1xuXHRcdFx0XHRkaXZQb3B1cE91dGVyV2luZG93LmFuaW1hdGUoYW5pbWF0ZUZpbmFsLCB7XG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMCxcblx0XHRcdFx0XHRjb21wbGV0ZTogb25BbmltYXRpb25Db21wbGV0ZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRpbm5lckRvYyA9IG51bGw7XG5cdFx0XHRkaXZQb3B1cE91dGVyV2luZG93ID0gbnVsbDtcblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cudG9wLiQuZGF0YShldmVudC50YXJnZXQsICdvcy1pbnRlcm5hbC1wcm9jZXNzaW5nJywgZmFsc2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2xvc2UgPSAoKSA9PiB7XG5cdFx0bGV0IHBvcHVwVG9DbG9zZTtcblx0XHRsZXQgcG9wdXBDb250YWluZXI7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdHBvcHVwVG9DbG9zZSA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHRwb3B1cENvbnRhaW5lciA9IHdpbmRvdy50b3AuJCgnLlNhcHBoaXJlUG9wdXAnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXBUb0Nsb3NlID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHRwb3B1cENvbnRhaW5lciA9ICQoJy5TYXBwaGlyZVBvcHVwJyk7XG5cdFx0fVxuXG5cdFx0cG9wdXBUb0Nsb3NlLmRhdGEoUE9QVVBfQ0xPU0lOR19UQUcsIFBPUFVQX0NMT1NJTkdfVkFMVUUpO1xuXG5cdFx0Ly9zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdGlmIChwb3B1cFRvQ2xvc2UubGVuZ3RoKSBwb3B1cFRvQ2xvc2UuZGlhbG9nKCdjbG9zZScpO1xuXG5cdFx0cG9wdXBUb0Nsb3NlLnJlbW92ZSgpO1xuXHRcdHBvcHVwQ29udGFpbmVyLnJlbW92ZSgpO1xuXHRcdC8vfSwgMCk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TGlua0hSRUYgPSB3aWRnZXQgPT4ge1xuXHRcdGxldCBsaW5rSHJlZjtcblx0XHRsZXQgaXNBQnV0dG9uID0gZmFsc2U7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly9DaGVja3MgaWYgdGhlIGlkIGlzIGZyb20gYSBsaW5rIG9yIG5vdFxuXHRcdFx0bGlua0hyZWYgPSAkKHdpZGdldCkuYXR0cignaHJlZicpO1xuXG5cdFx0XHQvL1Rlc3RzIGZvciB2aXNpYmlsaXR5L2V4aXN0ZW5jZVxuXHRcdFx0aWYgKHR5cGVvZiBsaW5rSHJlZiA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRjb25zdCBvbkNsaWNrID0gd2lkZ2V0LmdldEF0dHJpYnV0ZSgnb25jbGljaycpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2Ygb25DbGljayAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGlzQUJ1dHRvbiA9IHRydWU7XG5cblx0XHRcdFx0XHRpZiAob25DbGljayAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRsZXQgaHJlZk1hdGNoO1xuXG5cdFx0XHRcdFx0XHRpZiAoKGhyZWZNYXRjaCA9IG9uQ2xpY2sudG9TdHJpbmcoKS5tYXRjaCgvaHJlZj0nKFteJ10qKScvKSkgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRsaW5rSHJlZiA9IGhyZWZNYXRjaFsxXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0cmV0dXJuIFtsaW5rSHJlZiwgaXNBQnV0dG9uXTtcblx0fTtcblxuXHRjb25zdCBvcGVuUG9wdXAgPSAoZGl2VG9Qb3B1cCwgZGl2UGxlYXNlV2FpdCwgbG9hZFRhcmdldFBhZ2UsIGV2ZW50LCBjb25maWcpID0+IHtcblx0XHQvLyBEZXN0cm95IGFueSBwcmV2aW91cyBkaWFsb2dcblx0XHRjbG9zZShudWxsKTtcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0Y29uc3QgJGpQYXJlbnQgPSB3aW5kb3cudG9wLiQ7XG5cdFx0XHQkalBhcmVudCgnLm9zLWludGVybmFsLVBvcHVwJykucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYW55IGNsb3NlIGlzIHBlbmRpbmcsIHNjaGVkdWxlIHRvIGV4ZWN1dGUgaXRzZWxmIGFzeW5jaHJvbm91c2x5IGV4aXRcblx0XHQvLyBJZiBubyBjbG9zZSBpcyBwZW5kaW5nLCBjb250aW51ZSB3aXRoIG9wZW4gb3BlcmF0aW9uXG5cdFx0bGV0IGNsb3NpbmdQb3B1cHM7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIGNsb3NpbmdQb3B1cHMgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXHRcdGVsc2UgY2xvc2luZ1BvcHVwcyA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjbG9zaW5nUG9wdXBzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoJC5kYXRhKGNsb3NpbmdQb3B1cHMuZ2V0KGkpLCBQT1BVUF9DTE9TSU5HX1RBRykgPT0gUE9QVVBfQ0xPU0lOR19WQUxVRSkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG9wZW5Qb3B1cChkaXZUb1BvcHVwLCBkaXZQbGVhc2VXYWl0LCBsb2FkVGFyZ2V0UGFnZSwgZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHRcdH0sIDEzKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IF9kaWFsb2c7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRwb3B1cENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1NhcHBoaXJlUG9wdXAnKTtcblxuXHRcdFx0d2luZG93LnRvcC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcblxuXHRcdFx0X2RpYWxvZyA9IHdpbmRvdy50b3AuJChkaXZUb1BvcHVwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnPGRpdiBjbGFzcz1cIlNhcHBoaXJlUG9wdXBcIj48L2Rpdj4nKS5hcHBlbmRUbygnYm9keScpO1xuXG5cdFx0XHRfZGlhbG9nID0gJChkaXZUb1BvcHVwKTtcblx0XHR9XG5cblx0XHQkKGRpdlBsZWFzZVdhaXQpLnNob3coKTtcblxuXHRcdGlmICgkKCcuSVNpZGViYXInKS5sZW5ndGgpIHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uub3BlblNpZGViYXJJZnJhbWUoMCk7XG5cblx0XHRfZGlhbG9nLnNob3coKS5kaWFsb2coe1xuXHRcdFx0YXBwZW5kVG86ICcuU2FwcGhpcmVQb3B1cCcsXG5cdFx0XHRkaWFsb2dDbGFzczogJ29zLWludGVybmFsLVBvcHVwJyxcblx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHRhdXRvUmVzaXplOiBmYWxzZSxcblx0XHRcdGNsb3NlT25Fc2NhcGU6ICFjb25maWcuaGlkZUNsb3NlQnV0dG9uLFxuXHRcdFx0YmdpZnJhbWU6IHRydWUsXG5cdFx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHRcdFx0YXV0b09wZW46IHRydWUsXG5cdFx0XHR0aXRsZTogY29uZmlnLnNldFRpdGxlLFxuXHRcdFx0bW9kYWw6ICEoY29uZmlnLnVzZU1vZGFsID09PSBmYWxzZSksXG5cdFx0XHRoZWlnaHQ6IGNvbmZpZy5zZXRIZWlnaHQgPT0gLTEgPyBQT1BVUF9JTklUSUFMX0hFSUdIVCA6IGNvbmZpZy5zZXRIZWlnaHQsXG5cdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXG5cdFx0XHR3aWR0aDogY29uZmlnLnNldFdpZHRoID09IC0xID8gUE9QVVBfSU5JVElBTF9XSURUSCA6IGNvbmZpZy5zZXRXaWR0aCxcblx0XHRcdHpJbmRleDogUE9QVVBfV0lORE9XX0lOREVYLFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBJZiB0aGUgcG9wdXAgaXMgY2xvc2VkIGJlZm9yZSBpdCBpcyByZXNpemVkIChFU0MpIHdlIG5lZWQgdG8gc2V0IHRoZSBwcm9jZXNzaW5nIGV2ZW50IHRvIGZhbHNlLlxuXHRcdFx0XHQkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycsIGZhbHNlKTtcblxuXHRcdFx0XHRfZGlhbG9nLmZpbmQoJ2lmcmFtZScpLnVuYmluZCgnbG9hZCcpO1xuXHRcdFx0XHRfZGlhbG9nLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsICdhYm91dDpibGFuaycpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X2RpYWxvZy5maW5kKCdpZnJhbWUnKS5lbXB0eSgpO1xuXHRcdFx0XHRcdF9kaWFsb2cuZW1wdHkoKTtcblx0XHRcdFx0fSwgMTMpO1xuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdF9kaWFsb2cuZmluZCgnaWZyYW1lJykuaGVpZ2h0KDApO1xuXHRcdF9kaWFsb2cucGFyZW50cygnLm9zLWludGVybmFsLXVpLWRpYWxvZycpLmRyb3BTaGFkb3coKTtcblxuXHRcdGlmIChjb25maWcuQ3NzQ2xhc3NlcyAhPT0gJyAnKSB7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZycpLmFkZENsYXNzKGNvbmZpZy5Dc3NDbGFzc2VzKTtcblx0XHRcdGVsc2UgJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZycpLmFkZENsYXNzKGNvbmZpZy5Dc3NDbGFzc2VzKTtcblx0XHR9XG5cblx0XHRsb2FkVGFyZ2V0UGFnZSgpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwID0geyBjcmVhdGUsIGNsb3NlLCByZXNpemUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlUmFkaW9CdXR0b24gKi9cblNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVJhZGlvQnV0dG9uID0gd2lkZ2V0SWQgPT4ge1xuXHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cdGNvbnN0ICRpbnB1dCA9ICR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG5cdGNvbnN0ICRsYWJlbCA9ICR3aWRnZXQuZmluZCgnLkJ1dHRvblJhZGlvSW5wX3JhZGlvVGV4dCcpO1xuXHRjb25zdCBuYW1lID0gJGlucHV0LnByb3AoJ25hbWUnKTtcblxuXHRjb25zdCBhZGRSZW1vdmVDbGFzcyA9ICgkZWwsIHRvQWRkKSA9PiB7XG5cdFx0aWYgKHRvQWRkKSAkZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdGVsc2UgJGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0fTtcblxuXHRjb25zdCBpc0NoZWNrZWQgPSAkZWwgPT4ge1xuXHRcdGlmICgkZWwuaXMoJzpjaGVja2VkJykpIGFkZFJlbW92ZUNsYXNzKCR3aWRnZXQsIHRydWUpO1xuXHRcdGVsc2UgYWRkUmVtb3ZlQ2xhc3MoJHdpZGdldCwgZmFsc2UpO1xuXHR9O1xuXG5cdCRpbnB1dC5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtuYW1lfVwiXWApLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRhZGRSZW1vdmVDbGFzcygkKHRoaXMpLmNsb3Nlc3QoJy5CdXR0b25SYWRpb0lucCcpLCAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKTtcblx0XHR9KTtcblx0fSk7XG5cblx0JGlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRpc0NoZWNrZWQoJCh0aGlzKSk7XG5cdH0pO1xuXG5cdCRsYWJlbC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkY2xvc2VzdEVsZW1lbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5CdXR0b25SYWRpb0lucCcpO1xuXG5cdFx0aWYgKCRjbG9zZXN0RWxlbWVudC5oYXNDbGFzcygnZGlzYWJsZWQnKSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0JGlucHV0WzBdLmNsaWNrKCk7XG5cdFx0Ly9pc0NoZWNrZWQoJGlucHV0KTtcblx0fSk7XG5cblx0aXNDaGVja2VkKCRpbnB1dCk7XG59O1xuIiwiLyogQ29tcG9uZW50IFNjYWxlTWFpblN0cnVjdHVyZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXR1cFNjYWxlKCk7XG5cdFx0XHRiaW5kQ2xpY2tzKCk7XG5cblx0XHRcdG9zQWpheEJhY2tlbmQgJiZcblx0XHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YmluZENsaWNrcygpO1xuXHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRTY2FsZUNvdW50ID0gY29uZiA9PiB7XG5cdFx0JChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBDYXJkU2NhbGUgPSBjb25mLklzQ2FyZFNjYWxlO1xuXHRcdFx0dmFyIFJ1bGVyU2NhbGUgPSBjb25mLklzUnVsZXJTY2FsZTtcblx0XHRcdHZhciBNdWx0aXBsZVNjYWxlID0gY29uZi5Jc011bHRpcGxlU2NhbGU7XG5cdFx0XHR2YXIgJHRvdGFsUGxhY2UgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX2Zvb3RlclJlc3VsdCcpO1xuXHRcdFx0dmFyIHRvdGFsQ2FyZFNjYWxlID0gMDtcblx0XHRcdHZhciB0b3RhbE11bHRpcGxlU2NhbGUgPSAwO1xuXHRcdFx0dmFyIHRvdGFsUnVsZXJTY2FsZSA9IDA7XG5cblx0XHRcdHZhciBTY2FsZVR5cGVDYXJkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0b3RhbFNlbGVjdGVkID0gJCgnLlNjYWxlTGlzdC5DYXJkU2NhbGUnKS5maW5kKCcuU2NhbGVDYXJkLmFjdGl2ZScpLmxlbmd0aDtcblx0XHRcdFx0dmFyIHRvdGFsTnVtYmVyID0gMDtcblx0XHRcdFx0JChcIi5TY2FsZUxpc3QuQ2FyZFNjYWxlOm5vdCgnLmlzVGl0bGUnKVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmZpbmQoJy5TY2FsZUNhcmQnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHR0b3RhbE51bWJlciArPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHRvdGFsTnVtYmVyID09PSB0b3RhbFNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0dmFyIHRvdGFsID0gW107XG5cdFx0XHRcdFx0dmFyIGlucHV0VmFsdWUgPSAnJztcblx0XHRcdFx0XHR2YXIgJHNjYWxlUm93ID0gJCgnLlNjYWxlTGlzdC5DYXJkU2NhbGU6bm90KC5pc1RpdGxlKScpO1xuXHRcdFx0XHRcdCRzY2FsZVJvdy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aW5wdXRWYWx1ZSA9ICQodGhpcylcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TY2FsZUNhcmQuYWN0aXZlJylcblx0XHRcdFx0XHRcdFx0LmRhdGEoJ3ZhbHVlJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2NhbGVMaXN0X2lucHV0VmFsdWUgaW5wdXQnKVxuXHRcdFx0XHRcdFx0XHQudmFsKGlucHV0VmFsdWUpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0JCgnLlNjYWxlTGlzdC5DYXJkU2NhbGUgLlNjYWxlQ2FyZC5hY3RpdmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dG90YWwucHVzaCgkKHRoaXMpLmRhdGEoJ3ZhbHVlJykpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHZhciBmaW5hbFRvdGFsID0gZXZhbCh0b3RhbC5qb2luKCcrJykpO1xuXHRcdFx0XHRcdHJldHVybiBmaW5hbFRvdGFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgU2NhbGVUeXBlUnVsZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGFjdGl2ZVJ1bGVyVmFsdWUgPSAnJztcblx0XHRcdFx0dmFyICRhY3RpdmVSdWxlciA9ICQoJy5SdWxlclNjYWxlX251bWJlci5hY3RpdmUnKTtcblx0XHRcdFx0aWYgKCRhY3RpdmVSdWxlci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dmFyIGFjdGl2ZVJ1bGVyVmFsdWUgPSAkKCcuUnVsZXJTY2FsZV9udW1iZXIuYWN0aXZlJylcblx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuUnVsZXJTY2FsZScpXG5cdFx0XHRcdFx0XHQuZGF0YSgpLnZhbHVlO1xuXHRcdFx0XHRcdCQoJy5TY2FsZUxpc3QuUnVsZXInKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TY2FsZUxpc3RfaW5wdXRWYWx1ZSBpbnB1dCcpXG5cdFx0XHRcdFx0XHQudmFsKGFjdGl2ZVJ1bGVyVmFsdWUpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGFjdGl2ZVJ1bGVyVmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGFjdGl2ZVJ1bGVyVmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgU2NhbGVUeXBlTXVsdGlwbGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIG51bWJlcm9mQ29scyA9ICQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZScpXG5cdFx0XHRcdFx0LmZpcnN0KClcblx0XHRcdFx0XHQuZmluZCgnLkJ1dHRvbkdyb3VwU2NhbGUnKS5sZW5ndGg7XG5cdFx0XHRcdHZhciBudW1iZXJvZlJvd3MgPSAkKCcuQnV0dG9uR3JvdXBTY2FsZScpLmNsb3Nlc3QoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpub3QoLmlzVGl0bGUpOm5vdCguaXNTdWJ0b3RhbCknKVxuXHRcdFx0XHRcdC5sZW5ndGg7XG5cdFx0XHRcdHZhciB0b3RhbCA9IFtdO1xuXHRcdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRcdHZhciBqID0gMDtcblx0XHRcdFx0dmFyIGNvdW50QWN0aXZlID0gMDtcblx0XHRcdFx0dmFyIGNvdW50YWxsQWN0aXZlQ29scyA9IDA7XG5cdFx0XHRcdHZhciB0b3RhbE9mSXRlbXMgPSBudW1iZXJvZkNvbHMgKiBudW1iZXJvZlJvd3M7XG5cdFx0XHRcdHZhciB0b3RhbFNjb3JlID0gW107XG5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG51bWJlcm9mQ29sczsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG51bWJlcm9mUm93czsgaisrKSB7XG5cdFx0XHRcdFx0XHR2YXIgU2NhbGVMaXN0U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHRcdFx0XHQnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlOm5vdCguaXNUaXRsZSk6bm90KC5pc1N1YnRvdGFsKSdcblx0XHRcdFx0XHRcdClbal07XG5cdFx0XHRcdFx0XHR2YXIgQnV0dG9uU2NhbGVTZWxlY3RlZCA9IFNjYWxlTGlzdFNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJylbaV07XG5cblx0XHRcdFx0XHRcdGlmIChCdXR0b25TY2FsZVNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cF9idXR0b24uYWN0aXZlJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgU2NhbGVWYWx1ZSA9IEJ1dHRvblNjYWxlU2VsZWN0ZWQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpWzBdLmlubmVyVGV4dDtcblx0XHRcdFx0XHRcdFx0dG90YWwucHVzaChwYXJzZUludChTY2FsZVZhbHVlKSk7XG5cdFx0XHRcdFx0XHRcdHRvdGFsU2NvcmUucHVzaChwYXJzZUludChTY2FsZVZhbHVlKSk7XG5cdFx0XHRcdFx0XHRcdGNvdW50QWN0aXZlID0gY291bnRBY3RpdmUgKyAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoJCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzU3VidG90YWwnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRpZiAoY291bnRBY3RpdmUgPT09IG51bWJlcm9mUm93cykge1xuXHRcdFx0XHRcdFx0XHR2YXIgc3ViVG90YWwgPSBldmFsKHRvdGFsLmpvaW4oJysnKSk7XG5cdFx0XHRcdFx0XHRcdHZhciBzdWJ0b3RhbFNjYWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzU3VidG90YWwgLkJ1dHRvbkdyb3VwU2NhbGUnKVtpXTtcblx0XHRcdFx0XHRcdFx0c3VidG90YWxTY2FsZS5pbm5lclRleHQgPSBzdWJUb3RhbDtcblx0XHRcdFx0XHRcdFx0Y291bnRhbGxBY3RpdmVDb2xzID0gY291bnRhbGxBY3RpdmVDb2xzICsgMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y291bnRBY3RpdmUgPSAwO1xuXHRcdFx0XHRcdHRvdGFsID0gW107XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwX2J1dHRvbi5hY3RpdmUnKS5sZW5ndGggPT09IHRvdGFsT2ZJdGVtcykge1xuXHRcdFx0XHRcdHZhciBpID0gMDtcblx0XHRcdFx0XHR2YXIgaiA9IDA7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG51bWJlcm9mUm93czsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgU2NhbGVMaXN0Um93ID0gJCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlOm5vdCguaXNUaXRsZSk6bm90KC5pc1N1YnR0b3RhbCknKVtpXTtcblx0XHRcdFx0XHRcdHZhciAkU2NhbGVMaXN0SW5wdXQgPSAkKFNjYWxlTGlzdFJvdykuZmluZCgnLlNjYWxlTGlzdF9pbnB1dFZhbHVlIGlucHV0Jyk7XG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVzU2VsZWN0ZWQgPSAnJztcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1iZXJvZkNvbHM7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgQWN0aXZlQnV0dG9uID0gJChTY2FsZUxpc3RSb3cpLmZpbmQoJy5CdXR0b25Hcm91cF9idXR0b24uYWN0aXZlJylbal07XG5cdFx0XHRcdFx0XHRcdHZhciBBY3RpdmVWYWx1ZSA9IEFjdGl2ZUJ1dHRvbi5pbm5lclRleHQ7XG5cdFx0XHRcdFx0XHRcdC8vdmFsdWVzU2VsZWN0ZWQ9dmFsdWVzU2VsZWN0ZWQrJywnK0FjdGl2ZVZhbHVlO1xuXHRcdFx0XHRcdFx0XHRpZiAoaiA9PT0gbnVtYmVyb2ZDb2xzIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlc1NlbGVjdGVkICs9IEFjdGl2ZVZhbHVlO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlc1NlbGVjdGVkICs9IEFjdGl2ZVZhbHVlICsgJywnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQkU2NhbGVMaXN0SW5wdXQudmFsKHZhbHVlc1NlbGVjdGVkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGdldFRvdGFsID0gZXZhbCh0b3RhbFNjb3JlLmpvaW4oJysnKSk7XG5cdFx0XHRcdFx0cmV0dXJuIGdldFRvdGFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBUb3RhbENhbGMgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGlzRW1wdHkgPSBmYWxzZTtcblxuXHRcdFx0XHRpZiAoQ2FyZFNjYWxlID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0dG90YWxDYXJkU2NhbGUgPSBTY2FsZVR5cGVDYXJkKCk7XG5cdFx0XHRcdFx0aXNFbXB0eSA9IHRvdGFsQ2FyZFNjYWxlID09PSAnJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChSdWxlclNjYWxlID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0dG90YWxSdWxlclNjYWxlID0gU2NhbGVUeXBlUnVsZXIoKTtcblx0XHRcdFx0XHRpc0VtcHR5ID0gdG90YWxSdWxlclNjYWxlID09PSAnJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChNdWx0aXBsZVNjYWxlID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0dG90YWxNdWx0aXBsZVNjYWxlID0gU2NhbGVUeXBlTXVsdGlwbGUoKTtcblx0XHRcdFx0XHRpc0VtcHR5ID0gdG90YWxNdWx0aXBsZVNjYWxlID09PSAnJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0ICRmb290ZXJSZXN1bHQgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX2Zvb3RlclJlc3VsdCcpO1xuXHRcdFx0XHRjb25zdCAkdG90YWxTY29yZSA9ICQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfdG90YWxTY29yZScpO1xuXHRcdFx0XHRjb25zdCAkc2NvcmVMYWJlbCA9ICQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfZm9vdGVyUmVzdWx0IC5Ub3RhbExhYmVsJyk7XG5cblx0XHRcdFx0aWYgKGlzRW1wdHkpIHtcblx0XHRcdFx0XHQkdG90YWxTY29yZS50ZXh0KCctLS0nKTtcblx0XHRcdFx0XHQkc2NvcmVMYWJlbC50ZXh0KCctJyk7XG5cblx0XHRcdFx0XHQkZm9vdGVyUmVzdWx0LnJlbW92ZUNsYXNzKCdDb2xvclpldGFCRycpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFpc05hTih0b3RhbE11bHRpcGxlU2NhbGUpICYmICFpc05hTih0b3RhbENhcmRTY2FsZSkgJiYgIWlzTmFOKHRvdGFsUnVsZXJTY2FsZSkpIHtcblx0XHRcdFx0XHRjb25zdCB0b3RhbEFic29sdXRlU2NvcmUgPSB0b3RhbENhcmRTY2FsZSArIHRvdGFsTXVsdGlwbGVTY2FsZSArIHRvdGFsUnVsZXJTY2FsZTtcblx0XHRcdFx0XHRjb25zdCB0b3RhbEFic29sdXRlTGFiZWwgPSB0b3RhbEFic29sdXRlU2NvcmUgPiAxMSA/ICdIaWdoJyA6ICdMb3cnO1xuXG5cdFx0XHRcdFx0JHRvdGFsU2NvcmUudGV4dCh0b3RhbEFic29sdXRlTGFiZWwpO1xuXHRcdFx0XHRcdCRzY29yZUxhYmVsLnRleHQodG90YWxBYnNvbHV0ZVNjb3JlKTtcblxuXHRcdFx0XHRcdCRmb290ZXJSZXN1bHQuYWRkQ2xhc3MoJ0NvbG9yWmV0YUJHJyk7XG5cblx0XHRcdFx0XHRjb25zdCAkaGlkZGVuTGluayA9ICQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfaGlkZGluZ0xpbmsgYScpO1xuXG5cdFx0XHRcdFx0aWYgKCRoaWRkZW5MaW5rLmxlbmd0aCA+IDApICRoaWRkZW5MaW5rLmNsaWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGlmIChDYXJkU2NhbGUgPT09IHRydWUpIHtcblx0XHRcdFx0JCgnLlNjYWxlQ2FyZCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuXHRcdFx0XHRcdFx0JHBhcmVudFNjYWxlQ2FyZCA9ICQodGhpcykuY2xvc2VzdCgnLlNjYWxlTGlzdC5DYXJkU2NhbGUnKTtcblx0XHRcdFx0XHRcdCRwYXJlbnRTY2FsZUNhcmQuZmluZCgnLlNjYWxlQ2FyZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0VG90YWxDYWxjKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0VG90YWxDYWxjKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChSdWxlclNjYWxlID09PSB0cnVlKSB7XG5cdFx0XHRcdCQoJy5SdWxlclNjYWxlJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZmluZCgnLnZpZXdtb2RlJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHR2YXIgJHJ1bGVyU2NhbGVMaXN0ID0gJCh0aGlzKS5jbG9zZXN0KCcuU2NhbGVMaXN0LlJ1bGVyJyk7XG5cdFx0XHRcdFx0XHQkcnVsZXJTY2FsZUxpc3QuZmluZCgnLlJ1bGVyU2NhbGVfbnVtYmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlJ1bGVyU2NhbGVfbnVtYmVyJylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdFRvdGFsQ2FsYygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFRvdGFsQ2FsYygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoTXVsdGlwbGVTY2FsZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR2YXIgY291bnRlcjtcblx0XHRcdFx0dmFyIFNjYWxlTGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzVGl0bGUnKTtcblx0XHRcdFx0dmFyIFNjYWxlTGlzdFN1YlRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzU3VidG90YWwnKTtcblx0XHRcdFx0dmFyIFNjYWxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpub3QoLmlzVGl0bGUpOm5vdCguaXNTdWJ0b3RhbCknKTtcblxuXHRcdFx0XHQkKCcuQnV0dG9uR3JvdXBTY2FsZScpXG5cdFx0XHRcdFx0LmNsb3Nlc3QoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpudGgtY2hpbGQoMm4pJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ0V2ZW5MaW5lJyk7XG5cdFx0XHRcdHZhciBudW1iZXJPZkdyb3VwU2NhbGUgPSBTY2FsZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKS5sZW5ndGg7XG5cblx0XHRcdFx0JCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzU3VidG90YWwgLkJ1dHRvbkdyb3VwU2NhbGUnKS50ZXh0KDApO1xuXHRcdFx0XHQvLyBDaGVjayBpZiBNdWx0aXBsZSBTY2FsZSBUaXRsZSBleGlzdHMgdGhlbiBhZGp1c3QgdGl0bGUgd2lkdGhcblx0XHRcdFx0aWYgKCQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1RpdGxlJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGZvciAoY291bnRlciA9IDA7IGNvdW50ZXIgPCBudW1iZXJPZkdyb3VwU2NhbGU7IGNvdW50ZXIrKykge1xuXHRcdFx0XHRcdFx0dmFyIFNjYWxlTGlzdFdpZHRoID0gU2NhbGVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJylbY291bnRlcl0ub2Zmc2V0V2lkdGg7XG5cdFx0XHRcdFx0XHRTY2FsZUxpc3RUaXRsZS5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBTY2FsZScpW2NvdW50ZXJdLnN0eWxlLndpZHRoID0gU2NhbGVMaXN0V2lkdGggKyAncHgnO1xuXHRcdFx0XHRcdFx0U2NhbGVMaXN0U3ViVG90YWwucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVtjb3VudGVyXS5zdHlsZS53aWR0aCA9IFNjYWxlTGlzdFdpZHRoICsgJ3B4Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkKCcuQnV0dG9uR3JvdXBfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0VG90YWxDYWxjKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRUb3RhbENhbGMoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRzZXR1cFNjYWxlID0gKCkgPT4ge1xuXHRcdHZhciBJc0NhcmRTY2FsZTtcblx0XHR2YXIgSXNSdWxlclNjYWxlO1xuXHRcdHZhciBJc011bHRpcGxlU2NhbGU7XG5cblx0XHQkKCcuU2NhbGVDYXJkJykubGVuZ3RoID4gMCA/IChJc0NhcmRTY2FsZSA9IHRydWUpIDogKElzQ2FyZFNjYWxlID0gZmFsc2UpO1xuXHRcdCQoJy5CdXR0b25Hcm91cFNjYWxlJykubGVuZ3RoID4gMCA/IChJc011bHRpcGxlU2NhbGUgPSB0cnVlKSA6IChJc011bHRpcGxlU2NhbGUgPSBmYWxzZSk7XG5cdFx0JCgnLlJ1bGVyU2NhbGUnKS5sZW5ndGggPiAwID8gKElzUnVsZXJTY2FsZSA9IHRydWUpIDogKElzUnVsZXJTY2FsZSA9IGZhbHNlKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRTY2FsZUNvdW50KHtcblx0XHRcdFx0SXNDYXJkU2NhbGU6IElzQ2FyZFNjYWxlLFxuXHRcdFx0XHRJc1J1bGVyU2NhbGU6IElzUnVsZXJTY2FsZSxcblx0XHRcdFx0SXNNdWx0aXBsZVNjYWxlOiBJc011bHRpcGxlU2NhbGUsXG5cdFx0XHR9KTtcblx0XHR9LCA1MDApO1xuXG5cdFx0aWYgKCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfb3B0aW9ucyAuVG9nZ2xlSXRlbUNvbnRyb2wnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfdG90YWxTY29yZScpLnRleHQoJy0tLScpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlc2V0U2NhbGVzID0gKCkgPT4ge1xuXHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfY29udGVudCcpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfdG90YWxTY29yZScpLnRleHQoJy0tLScpO1xuXHRcdFx0c2V0dXBTY2FsZSgpO1xuXHRcdH0sIDYwMCk7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfY29udGVudCcpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0fSwgMTAwMCk7XG5cdH07XG5cblx0YmluZENsaWNrcyA9ICgpID0+IHtcblx0XHRpZiAoJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCAnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlJylcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5Ub2dnbGVJdGVtQ29udHJvbCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJlc2V0U2NhbGVzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICgkKCcuTmF2aWdhdGlvbl9jb250cm9sJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLk5hdmlnYXRpb25fcmlnaHQnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCEkKHRoaXMpXG5cdFx0XHRcdFx0XHQuZmluZCgnYScpWzBdXG5cdFx0XHRcdFx0XHQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlc2V0U2NhbGVzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQkKCcuTmF2aWdhdGlvbl9sZWZ0JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhJCh0aGlzKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2EnKVswXVxuXHRcdFx0XHRcdFx0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXNldFNjYWxlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNjYWxlTWFpblN0cnVjdHVyZSA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBUb2dnbGVJdGVtQ29udHJvbCAqL1xuU2FwcGhpcmVXaWRnZXRzLlRvZ2dsZUl0ZW1Db250cm9sID0gKCkgPT4ge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wgaW5wdXRbdHlwZT1cInJhZGlvXCJdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JCgnLlRvZ2dsZUl0ZW1Db250cm9sJylcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnLlRvZ2dsZUl0ZW1Db250cm9sJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXG5cdFx0XHRcdFx0Lm5vdCgnOmNoZWNrZWQnKVxuXHRcdFx0XHRcdC5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcblx0XHRcdFx0XHQuY2xpY2soKTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuXHRcdFx0XHRcdFx0LmlzKCc6Y2hlY2tlZCcpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdG9zQWpheEJhY2tlbmQgJiZcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpXG5cdFx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXG5cdFx0XHRcdFx0XHRcdFx0LmlzKCc6Y2hlY2tlZCcpXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9KTtcbn07XG4iLCJ2YXIgU2VhcmNoU2VsZWN0RGVmaW5lID0gKHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgPSB3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lIHx8IHt9KTtcblxuU2FwcGhpcmVXaWRnZXRzLlNlbGVjdFNTRCA9IGZ1bmN0aW9uIFNTRFNlbGVjdFNldHVwKGNvbmZpZykge1xuXHQkKGZ1bmN0aW9uKCkge1xuXHRcdHZhciAkU1NEc2VsZWN0SWQgPSAkKCcjJyArIGNvbmZpZy5TU0RTZWxlY3RJZCk7XG5cdFx0dmFyIGlzTXVsdGlwbGUgPSBjb25maWcuaXNNdWx0aXBsZTtcblxuXHRcdHZhciAkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xuXHRcdHZhciAkQ29tcG9uZW50U1NEaW5wdXQgPSAkQ29tcG9uZW50U1NELmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0Jyk7XG5cdFx0dmFyIENvbXBvbmVudGlucHV0bGVuZ3RoID0gJENvbXBvbmVudFNTRGlucHV0LnZhbCgpLmxlbmd0aDtcblxuXHRcdGlmIChDb21wb25lbnRpbnB1dGxlbmd0aCA+IDApIHtcblx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX2NvbnRlbnRUaXRsZScpLmhpZ2hsaWdodCgkQ29tcG9uZW50U1NEaW5wdXQudmFsKCksIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0U0Qtc2VhcmNoZWQtdGVybScsXG5cdFx0XHRcdGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuXHRcdFx0XHR3b3Jkc09ubHk6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dmFyICRmYXZvcml0ZXNTZWFyY2hJbnB1dCA9ICRDb21wb25lbnRTU0QuZmluZCgnLlNlYXJjaFNEX2ZpbHRlcmZhdm9yaXRlcyBpbnB1dCcpO1xuXG5cdFx0aWYgKCRmYXZvcml0ZXNTZWFyY2hJbnB1dC5sZW5ndGgpIHtcblx0XHRcdHZhciBmYXZvcml0ZXNTZWFyY2hMZW5ndGggPSAkZmF2b3JpdGVzU2VhcmNoSW5wdXQudmFsKCkubGVuZ3RoO1xuXG5cdFx0XHRpZiAoY29uZmlnLkhhc0Zhdm9yaXRlID09PSAnVHJ1ZScgJiYgZmF2b3JpdGVzU2VhcmNoTGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19jb250ZW50VGl0bGUnKS5oaWdobGlnaHQoJGZhdm9yaXRlc1NlYXJjaElucHV0LnZhbCgpLCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0U0Qtc2VhcmNoZWQtdGVybScsXG5cdFx0XHRcdFx0Y2FzZVNlbnNpdGl2ZTogZmFsc2UsXG5cdFx0XHRcdFx0d29yZHNPbmx5OiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIE9wZW5Db25maXJtUG9wdXAgPSBmdW5jdGlvbigkU1NEc2VsZWN0SWQpIHtcblx0XHRcdCRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XG5cdFx0XHQkUG9wdXBJRCA9ICRDb21wb25lbnRTU0Quc2libGluZ3MoJy5TU0RQb3B1cFdyYXBwZXInKTtcblxuXHRcdFx0JFBvcHVwSUQuZmFkZUluKCdmYXN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRDb21wb25lbnRTU0QuYWRkQ2xhc3MoJ0RvbnRfQ2xvc2UnKTtcblx0XHRcdFx0JFBvcHVwSURcblx0XHRcdFx0XHQuZmluZCgnLlNTRHBvcHVwT2snKVxuXHRcdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkUG9wdXBJRC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX3N0YXJUcmlnZ2VyID4gYScpLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoJENvbXBvbmVudFNTRC5yZW1vdmVDbGFzcygnRG9udF9DbG9zZScpLCA1MDApO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JFBvcHVwSURcblx0XHRcdFx0XHQuZmluZCgnLlNTRHBvcHVwQ2FuY2VsJylcblx0XHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JFBvcHVwSUQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCRDb21wb25lbnRTU0QucmVtb3ZlQ2xhc3MoJ0RvbnRfQ2xvc2UnKSwgNTAwKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBTU0RDaGVja0JveFNlbGVjdCA9IGZ1bmN0aW9uKCR3aWRnZXRJZCkge1xuXHRcdFx0dmFyIGNoZWNrQm94Q291bnQgPSAwO1xuXHRcdFx0aWYgKGlzTXVsdGlwbGUgPT09ICdUcnVlJykge1xuXHRcdFx0XHRjaGVja0JveENvdW50ID0gJHdpZGdldElkXG5cdFx0XHRcdFx0LmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKVxuXHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKS5sZW5ndGg7XG5cblx0XHRcdFx0JGFsbExpc3RjYXJkID0gJHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRF9jb250ZW50Jyk7XG5cblx0XHRcdFx0aWYgKGNoZWNrQm94Q291bnQgPiAwKSB7XG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKS5hZGRDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdFx0XHQkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNEX2NvbnRlbnQgLlNlbGVjdFNEJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9jb250ZW50V3JhcHBlcicpXG5cdFx0XHRcdFx0XHRcdC5vZmYoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpXG5cdFx0XHRcdFx0XHRcdC5vZmYoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKS5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdFx0XHQkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNEX2NvbnRlbnQgLlNlbGVjdFNEICcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfY29udGVudFdyYXBwZXInKVxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0XHRcdC5maW5kKCcuTGluZUFjdGlvbkxJTksgPiBhJylcblx0XHRcdFx0XHRcdFx0XHRcdC5jbGljaygpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9hY3Rpb25MaW5rJylcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0XHQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpXG5cdFx0XHRcdFx0XHRcdFx0XHQuY2xpY2soKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKGlzTXVsdGlwbGUgPT09ICdUcnVlJykge1xuXHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fbXVsdGlwbGUgPiBpbnB1dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRTU0RDaGVja0JveFNlbGVjdCgkU1NEc2VsZWN0SWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fc3RhckxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoISRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0QgLlNlbGVjdFNEX19zdGFyV3JhcHBlcicpLmhhc0NsYXNzKCdzdGFyRGlzYWJsZWQnKSkge1xuXHRcdFx0XHRpZiAoJFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRCAuU2VsZWN0U0RfX3N0YXJXcmFwcGVyJykuaGFzQ2xhc3MoJ3N0YXJTZWxlY3RlZCcpKSB7XG5cdFx0XHRcdFx0T3BlbkNvbmZpcm1Qb3B1cCgkU1NEc2VsZWN0SWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX3N0YXJUcmlnZ2VyID4gYScpLmNsaWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfY29udGVudFdyYXBwZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHQkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xuXHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5MaW5lQWN0aW9uTElOSyA+IGEnKS5jbGljaygpO1xuXHRcdFx0aWYgKCEkQ29tcG9uZW50U1NELmhhc0NsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpKSB7XG5cdFx0XHRcdFNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2gucmV0dXJuVG9TZWFyY2goJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpKTtcblx0XHRcdFx0U2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaC5jbG9zZVNTRCgkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJykpO1xuXHRcdFx0fVxuXG5cdFx0XHQkQ29tcG9uZW50U1NEaW5wdXQudmFsKCcnKTtcblx0XHR9KTtcblxuXHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdCRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XG5cdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpLmNsaWNrKCk7XG5cdFx0XHRpZiAoISRDb21wb25lbnRTU0QuaGFzQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJykpIHtcblx0XHRcdFx0U2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaC5yZXR1cm5Ub1NlYXJjaCgkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJykpO1xuXHRcdFx0XHRTZWFyY2hTZWxlY3REZWZpbmUuU1NEU2VhcmNoLmNsb3NlU1NEKCRTU0RzZWxlY3RJZC5jbG9zZXN0KCcuU2VhcmNoU0QnKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcbiIsInZhciBTZWFyY2hTZWxlY3REZWZpbmUgPSAod2luZG93LlNlYXJjaFNlbGVjdERlZmluZSA9IHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgfHwge30pO1xuXG5TYXBwaGlyZVdpZGdldHMuU1NEU2VhcmNoID0gZnVuY3Rpb24gU1NEc2VhcmNoU2V0dXAoY29uZmlnKSB7XG5cdCQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyICRTU0R3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy5TU0RXaWRnZXRJZCk7IC8vIFNTRENvbXBvbmVudCBtYXAgbm90IHVzZWQgYWdhaW5cblx0XHR2YXIgJFNTRENvbXBvbmVudCA9ICRTU0R3aWRnZXQuZmluZCgnLlNlYXJjaFNEJyk7IC8vIFNTRFNlYXJjaCBDb21wb25lbnQgaWQgZm9yIHVzZSBpbiB0aGUgZnVuY3Rpb24gYW5kIG1hbmlwdWxhdGUgY2xhc3Nlc1xuXHRcdHZhciAkU1NEQ29tcG9uZW50Q29udGVudCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnQnKTsgLy8gU1NEY29tcG9uZW50IGNvbnRlbnRcblx0XHR2YXIgaGFzQ2xvbmUgPSBjb25maWcuSGFzQ2xvbmU7IC8vIEhhc0Nsb25lIHZhcmlhYmxlIGlucHV0IHBhcmFtZXRlciB2YWx1ZVxuXHRcdHZhciBoYXNGYXZvcml0ZSA9IGNvbmZpZy5IYXNGYXZvcml0ZTsgLy8gSGFzRmF2b3JpdGUgdmFyaWFibGUgaW5wdXQgcGFyYW1ldGVyIHZhbHVlXG5cdFx0dmFyIHNob3dDbG9uZXMgPSBjb25maWcuU2hvd0Nsb25lczsgLy8gU2hvd0Nsb25lcyB2YXJpYWJsZSBpbnB1dCBwYXJhbWV0ZXIgdmFsdWVcblx0XHR2YXIgbGV0dGVyTGltaXQgPSBjb25maWcuTGltaXRMZXR0ZXI7IC8vIE51bWJlciBvZiBsZXR0ZXIgdG8gZW50ZXIgYmVmb3JlIHRyaWdnZXIgdGhlIHNlYXJjaCBhY3Rpb25cblx0XHR2YXIgaGFzU2hpZWxkID0gY29uZmlnLkhhc1NoaWVsZDtcblx0XHR2YXIgc2hpZWxkVGltZW91dCA9IGNvbmZpZy5TaGllbGRUaW1lb3V0O1xuXHRcdHZhciBpbnB1dExlbmd0aCA9IGNvbmZpZy5TZWFyY2hJbnB1dExlbmd0aDtcblx0XHR2YXIgJHdpZGdldFNoaWVsZCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNELS1zaGllbGQnKTtcblx0XHR2YXIgc2VhcmNoVHJpZ2dlclRpbWVyO1xuXHRcdGNvbnN0ICRTU0RDbGVhckJ1dHRvbiA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fcmVtb3ZlJyk7XG5cdFx0Y29uc3QgJFNTRElucHV0RWxlbWVudCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKTtcblxuXHRcdCRTU0RJbnB1dEVsZW1lbnQuYXR0cignbWF4TGVuZ3RoJywgaW5wdXRMZW5ndGgpO1xuXG5cdFx0dmFyIGV4ZWN1dGVTZWFyY2ggPSBmdW5jdGlvbigpIHtcblx0XHRcdGNsZWFyVGltZW91dChzZWFyY2hUcmlnZ2VyVGltZXIpO1xuXHRcdFx0c2VhcmNoVHJpZ2dlclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0VHJpZ2dlclNlYXJjaCgkU1NEQ29tcG9uZW50KTtcblx0XHRcdH0sIDcwMCk7XG5cdFx0fTtcblxuXHRcdGlmIChoYXNTaGllbGQpIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd2lkZ2V0U2hpZWxkLmhpZGUoKTtcblx0XHRcdH0sIHNoaWVsZFRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdC8qICBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG5cdFx0ICogICBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG5cdFx0ICogICBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcblx0XHQgKiAgIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG5cdFx0ICovXG5cdFx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdFx0XHR2YXIgdGltZW91dDtcblx0XHRcdHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXM7XG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0XHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHQvKioqKlxuXHRcdCAqICAgUmVzZXQgU2VhcmNoIFVJIHRvIHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0ICovXG5cdFx0dmFyIHJlc2V0VUkgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuc2hvdygpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2VhcmNoX2Zhdm9yaXRlTGluaycpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Zhdm9yaXRlJykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlQWN0aW9ucycpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZVJlbW92ZScpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5oaWRlKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyIC5TZWFyY2hTRF9fcmV0dXJuJykuaGlkZSgpO1xuXG5cdFx0XHRpZiAoJFNTRElucHV0RWxlbWVudC52YWwoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fcmVtb3ZlJykuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93RmF2b3JpdGUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dDbG9uZScpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqXG5cdFx0ICogIEdvIHRvIEZhdm9yaXRlcyBVSVxuXHRcdCAqICAtLSAgcmVzdCBTU0Rjb21wb25lbnRcblx0XHQgKiAgLS0gIHNob3cgRmF2b3JpdGUgZmVhdHVyZXNcblx0XHQgKiAgLS0gIHJlbW92ZSBjbGFzcyBzaG93Q2xvbmUgaWYgY29tcG9uZW50IGhhdmUgdGhhdCBjbGFzc1xuXHRcdCAqICAtLSAgYWRkIGNsYXNzIHNob3dGYXZvcml0ZSB0byBoYXZlIGNvbXBvbmVudCBjb250cm9sXG5cdFx0ICogIC0tICBhZGRDbGFzcyBPcGVuIHdpdGggc2xpZGVcblx0XHQgKi9cblx0XHR2YXIgZ29Ub0Zhdm9yaXRlcyA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdHJlc2V0VUkoJFNTRENvbXBvbmVudCk7XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoJycpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19yZXR1cm4nKS5oaWRlKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuaGlkZSgpO1xuXG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnc2hvd0Nsb25lJykpIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnc2hvd0Nsb25lJyk7XG5cdFx0XHR9XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsgJykuc2hvdygpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlUmVtb3ZlICcpLnNob3coKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZUFjdGlvbnMnKS5zaG93KCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdzaG93RmF2b3JpdGUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlbGVjdFNELmhhc0Zhdm9yaXRlID4gYScpLmZvY3VzKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdPcGVuJyk7XG5cblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKioqKioqKioqKioqKlxuXHRcdCAqXG5cdFx0ICogIEdvIHRvIENsb25lIFVJXG5cdFx0ICogIC0tICByZW1vdmUgY2xhc3MgT3BlblxuXHRcdCAqICAtLSBBZGQgU2hvd0Nsb25lIGNsYXNzXG5cdFx0ICogIC0tIFNsaWRlRG93biBlZmZlY3QgYW5kIGFkZCBPcGVuIENsYXNzXG5cdFx0ICovXG5cdFx0dmFyIGdvVG9DbG9uZSA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoJycpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXG5cdFx0XHRpZiAoISRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dDbG9uZScpKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ3Nob3dDbG9uZScpO1xuXHRcdFx0fVxuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnT3BlbicpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqIFJldHVybiB0byBzZWFyY2ggZnJvbSBmYXZvcml0ZSBvciBjbG9uZVxuXHRcdCAqL1xuXHRcdHZhciByZXR1cm5Ub1NlYXJjaCA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc2V0VUkoJFNTRENvbXBvbmVudCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93Q2xvbmUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dGYXZvcml0ZScpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2lucHV0V3JhcHBlciAuU2VhcmNoU0RfX3JldHVybicpLmhpZGUoKTtcblxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ2hhc0Nsb25lJykpIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnaGFzQ2xvbmUnKTtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2Nsb25lV3JhcHBlcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnaGFzRmF2b3JpdGUnKSkge1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdoYXNGYXZvcml0ZScpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuc2hvdygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgU1NEQ2xlYXIgY2xvc2VzIFNTRFNlYXJjaCBjb250YWluZXJcblx0XHQgKiAgIGFuZCBjbGVhciBzc2QgZmlsdGVyIGlucHV0XG5cdFx0ICovXG5cdFx0dmFyIHNzZENsZWFyID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLnZhbCgnJyk7XG5cdFx0fTtcblxuXHRcdC8qXG5cdFx0ICogICBDbG9zZVNTRCBjbG9zZXMgU1NEU2VhcmNoIGNvbnRhaW5lclxuXHRcdCAqICAgbXVzdCByZW1vdmUgaGlnaHRsaWdodFNlbGVjdGlvbiBkb25lIGJ5IGtleWJvYXJkIG5hdmlnYXRpb25cblx0XHQgKi9cblx0XHR2YXIgY2xvc2VTU0QgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdPcGVuJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50Q29udGVudC5zbGlkZVVwKCcyNTAnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJy5zZWxlY3RlZCcpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgQWRkIE9wZW4gY2xhc3MgdG8gU1NEQ29tcG9uZW50XG5cdFx0ICogICBpZiBTU0RDb21wb25lbnQgaGFzIGNsYXNzIE9wZW4gdGhlbiBmb2N1c1xuXHRcdCAqICAgbWFrZXMgb3BlbiBlZmZlY3QsIGNoZWNrIHRoZSBjaGFyYWN0ZXJzIGluc2lkZSB0aGUgaW5wdXQgdG8gZmlsdGVyXG5cdFx0ICovXG5cdFx0dmFyIHNzZEZvY3VzID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcblx0XHRcdFx0Ly8gbG9hZGluZyBzaG93IGhpZGUgbGlzdFxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLmhpZGUoKTtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRcdGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZSBhJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuaGlkZSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCcuc2hvd0Nsb25lJyk7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJy5zaG93RmF2b3JpdGUnKTtcblxuXHRcdFx0XHRpZiAoISRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ09wZW4nKSkge1xuXHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaExpbmtJbnB1dCBhJykuY2xpY2soKTtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdPcGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIFdoZW4gY2xpY2tpbmcgY2xpY2tpbmcgb3V0c2lkZSB0aGUgY29tcG9uZW50XG5cdFx0ICogICB0aGUgU1NEIG11c3QgY2xvc2UgYW5kIHJldHVybiB0byBpbml0aWFsIHN0YXRlXG5cdFx0ICovXG5cdFx0dmFyIENsaWNrT3V0ID0gZnVuY3Rpb24oZSwgJFNTRENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50LmlzKGUudGFyZ2V0KSAmJiAkU1NEQ29tcG9uZW50LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgVHJpZ2dlcnMgdGhlIGxpbmsgdG8gaW5pdGlhbGl6ZVxuXHRcdCAqICAgdGhlIGRhdGFiYXNlIHNlYXJjaCBiYXNlZCBvbiBjdXJyZW50IGxlbmd0aCBvZiB0aGUgc3RyaW5nIGluc2VydGVkIG9uIHRoZSBpbnB1dFxuXHRcdCAqL1xuXHRcdHZhciBUcmlnZ2VyU2VhcmNoID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0dmFyIGN1cnJlbnRXb3JkID0gJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLnZhbCgpO1xuXHRcdFx0dmFyIGN1cnJlbnRDb3VudCA9IGN1cnJlbnRXb3JkLmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50Q291bnQgPj0gbGV0dGVyTGltaXQgfHwgY3VycmVudENvdW50ID09PSAwKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaExpbmtJbnB1dCA+IGEnKS5jbGljaygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgUmVtb3ZlcyBhbGwgZmF2b3JpdGUgY2hlY2tlZCBib3hlc1xuXHRcdCAqICAgYW5kIGVuZHMgTXVsdGlwbGVTZWxlY3Rcblx0XHQgKi9cblx0XHR2YXIgTXVsdGlVbmNoZWNrID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0JGNoZWNrQm94ZXMgPSAkU1NEQ29tcG9uZW50LnBhcmVudCgpLmZpbmQoJy5TZWxlY3RTRF9fbXVsdGlwbGUgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XG5cblx0XHRcdCRTU0RDb21wb25lbnRcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcblx0XHRcdFx0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIEtleUJvYXJkIGV2ZW50cyB1cCBkb3duIGFuZCBlbnRlciBpZiBub3QgZmlsdGVyXG5cdFx0ICovXG5cdFx0dmFyIGtleWJvYXJkRXZlbnRzID0gZnVuY3Rpb24oZSwgJFNTRENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ09wZW4nKSkge1xuXHRcdFx0XHR2YXIgY3VycmVudFNlbGVjdGVkID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3Bhbi5zZWxlY3RlZCcpOyAvLyBDdXJyZW50IHNlbGVjdGFibGUgaXRlbVxuXHRcdFx0XHR2YXIgJGZpcnN0U2VsZWN0ID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3BhbjpmaXJzdC1jaGlsZCcpOyAvLyBGaXJzdCBzZWxlY3RhYmxlIGl0ZW1cblx0XHRcdFx0dmFyICRsYXN0U2VsZWN0ID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3BhbjpsYXN0LWNoaWxkJyk7IC8vIExhc3Qgc2VsZWN0YWJsZSBpdGVtXG5cdFx0XHRcdHZhciBjb3VudFNlbGVjdGVkID0gY3VycmVudFNlbGVjdGVkLmxlbmd0aDsgLy8gTnVtYmVyIG9mIHNlbGVjdGVkIGl0ZW1cblxuXHRcdFx0XHRpZiAoZS53aGljaCA9PSAzOCkge1xuXHRcdFx0XHRcdC8vIGlmIGtleSBwcmVzc2VkIGlzIHVwIGFycm93XG5cdFx0XHRcdFx0aWYgKGNvdW50U2VsZWN0ZWQgPT09IDApIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9ICRsYXN0U2VsZWN0O1xuXHRcdFx0XHRcdFx0JGxhc3RTZWxlY3QuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZC5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHRcdG5leHQgPSBjdXJyZW50U2VsZWN0ZWQucHJldigpO1xuXG5cdFx0XHRcdFx0XHRpZiAobmV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9IG5leHQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0ZWQubGFzdCgpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlLndoaWNoID09IDQwKSB7XG5cdFx0XHRcdFx0Ly8gaWYga2V5IHByZXNzZWQgaXMgZG93biBhcnJvd1xuXHRcdFx0XHRcdGlmIChjb3VudFNlbGVjdGVkID09PSAwKSB7XG5cdFx0XHRcdFx0XHQkZmlyc3RTZWxlY3QuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG5leHQgPSBjdXJyZW50U2VsZWN0ZWQubmV4dCgpO1xuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXG5cdFx0XHRcdFx0XHRpZiAobmV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9IG5leHQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0ZWQuZXEoMCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGUud2hpY2ggPT0gMTMpIHtcblx0XHRcdFx0XHQvLyBpZiBrZXkgcHJlc3NlZCBpcyBlbnRlclxuXHRcdFx0XHRcdGlmIChjb3VudFNlbGVjdGVkID4gMCkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkLmZpbmQoJy5TZWxlY3RTRCAuU2VsZWN0U0RfYWN0aW9uTGluaycpLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRzc2RDbGVhcigkU1NEQ29tcG9uZW50KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJ1NlYXJjaFNEX19faW5wdXQgaW5wdXQnKS5pcygnOmFjdGl2ZScpICYmIGNvdW50U2VsZWN0ZWQgPT09IDApIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRleGVjdXRlU2VhcmNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIFRoZSBmaXJzdCBzdGVwIGlzIHRvIHJlc2V0IHRoZSBzZWV0aW5ncyB0byBkZWZhdWx0XG5cdFx0ICovXG5cdFx0cmVzZXRVSSgkU1NEQ29tcG9uZW50KTtcblxuXHRcdC8qXG5cdFx0ICogIFJlbW92ZSBhdXRvQ29tcGxldGUgZnJvbSBzZWFyY2ggaW5wdXRcblx0XHQgKi9cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuYXR0cignYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuXG5cdFx0Lypcblx0XHQgKiAgIElmIFNTRCBoYXMgQ2xvbmUgYW5kIHRoZSBjbG9uZSBsaXN0IGlzIHZpc2libGVcblx0XHQgKiAgIG9uY2xpY2sgXCJDbG9uZSBwcmV2aW91cyBtZWRpY2F0aW9uXCIgdGhlblxuXHRcdCAqICAgcmVtb3ZlIE9wZW4gYW5kIHNob3cgaXRlbXMgdG8gY2xvbmUgbGlzdFxuXHRcdCAqL1xuXHRcdGlmIChoYXNDbG9uZSA9PT0gJ1RydWUnKSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdoYXNDbG9uZScpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2Nsb25lV3JhcHBlcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0Zhdm9yaXRlID09PSAnVHJ1ZScpIHtcblx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ2hhc0Zhdm9yaXRlJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuc2hvdygpO1xuXHRcdH1cblxuXHRcdGlmICgoaGFzQ2xvbmUgPT09ICdUcnVlJykgJiAoc2hvd0Nsb25lcyA9PT0gJ1RydWUnKSkge1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfY2xvbmVXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ09wZW4nKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZVJlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XG5cdFx0XHRyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KTtcblx0XHRcdGRlYm91bmNlKFRyaWdnZXJTZWFyY2goJFNTRENvbXBvbmVudCksIDU1MCk7XG5cdFx0XHRkZWJvdW5jZSgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuZm9jdXMoKSwgNTYwKTtcblx0XHR9KTtcblxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGdvVG9DbG9uZSgkU1NEQ29tcG9uZW50KTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Nsb25lID4gYScpLmNsaWNrKCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnc2hvd0Nsb25lJykpIHtcblx0XHRcdFx0cmV0dXJuVG9TZWFyY2goJFNTRENvbXBvbmVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVBY3Rpb25zQ2FuY2VsJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRNdWx0aVVuY2hlY2soJFNTRENvbXBvbmVudCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuZm9jdXMoZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWJvdW5jZShzc2RGb2N1cygkU1NEQ29tcG9uZW50KSwgNjAwKTtcblx0XHR9KTtcblxuXHRcdCQoJ2JvZHknKS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcblx0XHRcdENsaWNrT3V0KGUsICRTU0RDb21wb25lbnQpO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0ICogICBLZXlCb2FyZCBldmVudHMgb24ga2V5IHByZXNzXG5cdFx0ICovXG5cdFx0JFNTRENvbXBvbmVudFxuXHRcdFx0LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0Jylcblx0XHRcdC5hZGQoJFNTRENvbXBvbmVudC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpKVxuXHRcdFx0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKCFlLndoaWNoICE9IDEzKSB7XG5cdFx0XHRcdFx0a2V5Ym9hcmRFdmVudHMoZSwgJFNTRENvbXBvbmVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJFNTRElucHV0RWxlbWVudC52YWwoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdFx0JFNTRENsZWFyQnV0dG9uLmFuaW1hdGUoeyBvcGFjaXR5OiAnaGlkZScgfSwgMzAwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkU1NEQ2xlYXJCdXR0b24uYW5pbWF0ZSh7IG9wYWNpdHk6ICdzaG93JyB9LCAzMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdC8qXG5cdFx0ICogICBQcmV2ZW50IGZvcm0gc3VibWlzc2lvbiBvbiBlbnRlcixcblx0XHQgKiAgIGluc3RlYWQgZ28gdG8ga2V5Ym9hcmQgZXZlbnRzIHRvIHRyaWdnZXJcblx0XHQgKiAgIHRoZSBzZWxlY3Rpb25cblx0XHQgKi9cblx0XHQkKCRTU0RDb21wb25lbnQpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0aWYgKGUud2hpY2ggPT0gMTMpIHtcblx0XHRcdFx0a2V5Ym9hcmRFdmVudHMoZSwgJFNTRENvbXBvbmVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX3JlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XG5cdFx0XHRkZWJvdW5jZShyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KSwgNjAwKTtcblx0XHR9KTtcblxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdHNzZENsZWFyKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0Z29Ub0Zhdm9yaXRlcygkU1NEQ29tcG9uZW50KTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Zhdm9yaXRlID4gYScpLmNsaWNrKCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVBY3Rpb25zQWRkID4gYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVib3VuY2UoVHJpZ2dlclNlYXJjaCgkU1NEQ29tcG9uZW50KSwgMjAwKTtcblx0XHRcdGRlYm91bmNlKHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpLCAzNTApO1xuXHRcdH0pO1xuXG5cdFx0Lypcblx0XHQgKiAgIE9uIEFqYXggUmVxdWVzdCBoaWRlIGxvYWRpbmcgZGl2IGlmIHRoZSBTU0QgaXMgb3BlbiB0aGVuIHNob3cgdGhlXG5cdFx0ICogICBMaXN0UmVjb3Jkc1xuXHRcdCAqL1xuXHRcdG9zQWpheEJhY2tlbmQgJiZcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICgkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fbG9hZGluZycpLmhpZGUoKTtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50Q29udGVudC5zbGlkZURvd24oJzEwMDAnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0Jykuc2hvdygpO1xuXHRcdFx0XHRcdFx0aWYgKCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlIGEnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdCQoJ2Zvcm0nKS5hcHBlbmQoJzxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cInNzZElucHV0XCIgb25jbGljaz1cInJldHVybiBmYWxzZTtcIiAgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgLz4nKTtcblxuXHRcdHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUuU1NEU2VhcmNoID0ge1xuXHRcdFx0cmV0dXJuVG9TZWFyY2g6IHJldHVyblRvU2VhcmNoLFxuXHRcdFx0cmVzZXRVSTogcmVzZXRVSSxcblx0XHRcdGNsb3NlU1NEOiBjbG9zZVNTRCxcblx0XHRcdHNzZEZvY3VzOiBzc2RGb2N1cyxcblx0XHRcdFRyaWdnZXJTZWFyY2g6IFRyaWdnZXJTZWFyY2gsXG5cdFx0XHRzc2RDbGVhcjogc3NkQ2xlYXIsXG5cdFx0fTtcblx0fSk7XG59O1xuLy8gQWRkZWQgdG8gY2xvc2UgdGhlIHNlbGVjdCBsaXN0IGlmIHdlIGNsaWNrIHRoZSBwcmVzY3JpcHRpb24gSWZyYW1lO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBldmVudCA9PiB7XG5cdHZhciByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblx0cm9vdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnY2xpY2snLFxuXHRcdGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lW3NyYyo9J1ByZXNjcmlwdGlvbnNfQ1cnXVwiKSAmJlxuXHRcdFx0XHRkb2N1bWVudFxuXHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lW3NyYyo9J1ByZXNjcmlwdGlvbnNfQ1cnXVwiKVxuXHRcdFx0XHRcdC5jb250ZW50V2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNlYXJjaFNEJykuY2xhc3NMaXN0LnJlbW92ZSgnT3BlbicpO1xuXHRcdFx0XHRcdFx0dmFyIGFsbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNlYXJjaFNEX19faW5wdXQnKS5jaGlsZHJlbjtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBpbiBhbGxJbnB1dCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYWxsSW5wdXRbZWxlbWVudF0udmFsdWUgIT0gdW5kZWZpbmVkID8gKGFsbElucHV0W2VsZW1lbnRdLnZhbHVlID0gJycpIDogbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHR9LFxuXHRcdHRydWVcblx0KTtcbn0pO1xuIiwiLyogQ29tcG9uZW50IFNlYXJjaENsaWVudFNpZGUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjbGFzcyBTZWFyY2hDbGllbnRTaWRlIHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5vbkNvbXBvbmVudEluaXQoKTtcblxuXHRcdFx0JCh3aW5kb3cpLmxvYWQoKCkgPT4ge1xuXHRcdFx0XHRvc0FqYXhCYWNrZW5kICYmXG5cdFx0XHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0JCgnIycgKyB0aGlzLm9wdGlvbnMuaW5wdXRJZCkudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xuXHRcdFx0JCgnIycgKyB0aGlzLm9wdGlvbnMuaW5wdXRJZCkub24oJ2NoYW5nZSBrZXlkb3duIHBhc3RlIGlucHV0JywgZSA9PiB7XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoQ2xpZW50U2lkZShcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucy5pbnB1dElkLFxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLnNlYXJjaGFibGVFbGVtZW50U2VsZWN0b3IsXG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuc2VhcmNoYWJsZUNoaWxkU2VsZWN0b3Jcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzZWFyY2hDbGllbnRTaWRlKGlucHV0SWQsIHNlbGVjdG9yLCBjaGlsZFNlbGVjdG9yKSB7XG5cdFx0XHRpZiAoJCgnIycgKyBpbnB1dElkKS5pcygnOnZpc2libGUnKSkge1xuXHRcdFx0XHR2YXIgc2VhcmNoVGV4dCA9IG9zanMoJyMnICsgaW5wdXRJZClcblx0XHRcdFx0XHQudmFsKClcblx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0dmFyIHNlYXJjaENvdW50ZXIgPSAwO1xuXHRcdFx0XHR2YXIgc2VsZWNpb24gPSBvc2pzKHNlbGVjdG9yKTtcblxuXHRcdFx0XHRzZWxlY2lvbi5yZW1vdmVDbGFzcygnc2VhcmNoTm90Rm91bmQnKTtcblx0XHRcdFx0c2VsZWNpb24ucmVtb3ZlQ2xhc3MoJ3NlYXJjaEZvdW5kJyk7XG5cdFx0XHRcdHNlbGVjaW9uLnVuaGlnaGxpZ2h0KCk7XG5cblx0XHRcdFx0aWYgKGNoaWxkU2VsZWN0b3IpIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50VG9TZWFyY2ggPSBvc2pzKGNoaWxkU2VsZWN0b3IpO1xuXHRcdFx0XHRcdGVsZW1lbnRUb1NlYXJjaC51bmhpZ2hsaWdodCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNlYXJjaFRleHQubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHNlbGVjaW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ZXh0VG9Db21wYXJlID0gY2hpbGRTZWxlY3RvclxuXHRcdFx0XHRcdFx0XHQ/ICQodGhpcylcblx0XHRcdFx0XHRcdFx0XHRcdC5maW5kKGNoaWxkU2VsZWN0b3IpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCgpXG5cdFx0XHRcdFx0XHRcdDogdGhpcy5pbm5lclRleHQ7XG5cblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0dGV4dFRvQ29tcGFyZVxuXHRcdFx0XHRcdFx0XHRcdC50cmltKClcblx0XHRcdFx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdFx0XHRcdC5pbmRleE9mKHNlYXJjaFRleHQpID4gLTFcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRvc2pzKHRoaXMpLmFkZENsYXNzKCdzZWFyY2hGb3VuZCcpO1xuXHRcdFx0XHRcdFx0XHRzZWFyY2hDb3VudGVyKys7XG5cdFx0XHRcdFx0XHRcdG9zanModGhpcykuaGlnaGxpZ2h0KHNlYXJjaFRleHQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0b3Nqcyh0aGlzKS5hZGRDbGFzcygnc2VhcmNoTm90Rm91bmQnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2VhcmNoQ2xpZW50U2lkZShjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2VhcmNoQ2xpZW50U2lkZSA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBTZWN0aW9uRXhwYW5kYWJsZSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRmdW5jdGlvbiBTZWN0aW9uRXhwYW5kYWJsZUN1c3RvbSgpIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQvLyBPYmplY3QgdG8gc2F2ZSBzdGF0c1xyXG5cdFx0dmFyIHByZXZpZXdzdGF0ID0gW107XHJcblxyXG5cdFx0Ly8gc2V0IGNsaWNrIGV2ZW50c1xyXG5cdFx0ZnVuY3Rpb24gY2xpY2tFdmVudHMob2IpIHtcclxuXHRcdFx0Ly8gc3RvcmUgcXVlcnlzIGluIGEgc2luZ2xlIHZhclxyXG5cdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpLnBhcmVudCgpO1xyXG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCcpO1xyXG5cclxuXHRcdFx0Ly8gZ2V0IGlkXHJcblx0XHRcdHZhciBpZCA9IFNlY3Rpb24uYXR0cignaWQnKTtcclxuXHJcblx0XHRcdHZhciB0ZW1wSGVpZ2h0ID0gMDtcclxuXHJcblx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxyXG5cdFx0XHRpZiAoU2VjdGlvbi5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodCwgZHVyaW5nIHRoaXMgcHJvY2VzcywgdHJhbnNpdGlvbnMgYXJlIGRpc2FibGVkXHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuYWRkQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodChTZWN0aW9uQ29udGVudC5oZWlnaHQoKSk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnRbMF0ub2Zmc2V0SGVpZ2h0OyAvLyBoYWNrIHRvIGZvcmNlIGEgcmVwYWludFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LnJlbW92ZUNsYXNzKCdub1RyYW5zaXRpb24nKTtcclxuXHJcblx0XHRcdFx0Ly8gQ29sbGFwc2UgY29udGVudFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcclxuXHRcdFx0XHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdC8vIFJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxyXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcclxuXHRcdFx0XHR0ZW1wSGVpZ2h0ID0gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCh0ZW1wSGVpZ2h0KTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcclxuXHRcdFx0XHRTZWN0aW9uLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRpZiAoJCgnLlBhZ2UnKS5oYXNDbGFzcygnaWU4JykgfHwgJCgnLlBhZ2UnKS5oYXNDbGFzcygnaWU5JykpIHtcclxuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xyXG5cdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWpheCByZWZyZXMgZnVuY3Rpb25cclxuXHRcdHRoYXQuYWpheFJlZnJlc2ggPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gcmVtb3ZlIGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tJykub2ZmKCk7XHJcblxyXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxyXG5cdFx0XHQkKFxyXG5cdFx0XHRcdCcuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIGlucHV0LCAuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIHNlbGVjdCwgLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBhJ1xyXG5cdFx0XHQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIG5ldyBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gaWYgbmV3IFNlY3Rpb25FeHBhbmRhYmxlIHRoZW4gYWRkIHRvIHByZXZpZXdzdGF0IGFycmF5XHJcblx0XHRcdFx0aWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcclxuXHRcdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHQvLyBpZiBvcGVuXHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIGFkZCByb3dcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7XHJcblx0XHRcdFx0XHRcdGNsaWVudDogc3RhdCxcclxuXHRcdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGN1cmVudCBzdGF0ZSAoYWpheCBzdGF0ZSB4IGluaXRpYWwgc3RhdGUpXHJcblx0XHRcdFx0dmFyIGN1clN0YXRlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdC8vIGNoZWNrIGlmIHN0YXJ0IGV4cGFuZGFibGVcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0Y3VyU3RhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgYWpheCAhPSBpbml0aWFsIHNlcnZlclxyXG5cdFx0XHRcdGlmIChjdXJTdGF0ZSAhPSBwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSkge1xyXG5cdFx0XHRcdFx0Ly8gY3Vyc3RhdGVcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID0gY3VyU3RhdGU7XHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSA9IGN1clN0YXRlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcclxuXHRcdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSBmYWxzZSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuY2hpbGRyZW4oJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50JylcclxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSB0cnVlICYmICEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gc2V0IGV2ZW50c1xyXG5cdFx0dGhhdC5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zIHRvIGNyZWF0ZSBhcnJheSBzdGF0XHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcclxuXHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQvLyBpZiBvcGVuXHJcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIHJvd1xyXG5cdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7XHJcblx0XHRcdFx0XHRjbGllbnQ6IHN0YXQsXHJcblx0XHRcdFx0XHRzZXJ2ZXI6IHN0YXQsXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0JCh0aGlzKS5oYXNDbGFzcygnSGlkZVdoZW5FbXB0eScpICYmXHJcblx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdC5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCcpXHJcblx0XHRcdFx0XHRcdC50ZXh0KCkubGVuZ3RoID09PSAwXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmhpZGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGhhY2sgdG8gZGlzcGxheSBhIG1lc3NhZ2Ugd2hlbiBTZWN0aW9uRXhwYW5kYWJsZUN1c3RvbSBoYXMgbm8gY2hpbGQgaXRlbXNcclxuXHRcdFx0XHR2YXIgaXNFbXB0eSA9IHRydWU7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50IGRpdiwgLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQgc3BhbicpXHJcblx0XHRcdFx0XHQubm90KCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudC0tZW1wdHknKVxyXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGlmICgkKHRoaXMpLnRleHQoKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0aXNFbXB0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKCFpc0VtcHR5KSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdC5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudC0tZW1wdHknKVxyXG5cdFx0XHRcdFx0XHQuY3NzKHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyICRleHBhbmRhYmxlSW5zdGFuY2UgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdHZhciAkdG9nZ2xlciA9ICQodGhpcykuZmluZCgnPiAuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlcicpO1xyXG5cdFx0XHRcdGlmICgkdG9nZ2xlci5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRcdHZhciAkdG9nZ2xlclN0YXRlID0gZmFsc2U7XHJcblx0XHRcdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxzaG93XScpLmRhdGEoJ2xhYmVsc2hvdycpKTtcclxuXHRcdFx0XHRcdCR0b2dnbGVyLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0XHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHQkdG9nZ2xlclN0YXRlID0gISR0b2dnbGVyU3RhdGU7XHJcblx0XHRcdFx0XHRcdGlmICgkdG9nZ2xlclN0YXRlKSB7XHJcblx0XHRcdFx0XHRcdFx0JGV4cGFuZGFibGVJbnN0YW5jZS5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxoaWRlXScpLmRhdGEoJ2xhYmVsaGlkZScpKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQkZXhwYW5kYWJsZUluc3RhbmNlLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkJykuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHNob3ddJykuZGF0YSgnbGFiZWxzaG93JykpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIGNsaWNrIGV2ZW50c1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tJylcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y2xpY2tFdmVudHModGhpcyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxyXG5cdFx0XHQkKFxyXG5cdFx0XHRcdCcuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIGlucHV0LCAuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIHNlbGVjdCwgLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBhJ1xyXG5cdFx0XHQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gZXZlbnQgYWpheFxyXG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmIG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QodGhhdC5hamF4UmVmcmVzaCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY3JlYXRlID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgZXhwYW5kYWJsZSA9IG5ldyBTZWN0aW9uRXhwYW5kYWJsZUN1c3RvbSgpO1xyXG5cclxuXHRcdGV4cGFuZGFibGUuaW5pdCgpO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TZWN0aW9uRXhwYW5kYWJsZSA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHR9O1xyXG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcclxuIiwiLyogQ29tcG9uZW50IFNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdGZ1bmN0aW9uIFNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlKCkge1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdC8vIE9iamVjdCB0byBzYXZlIHN0YXRzXHJcblx0XHR2YXIgcHJldmlld3N0YXQgPSBbXTtcclxuXHJcblx0XHQvLyBzZXQgY2xpY2sgZXZlbnRzXHJcblx0XHRmdW5jdGlvbiBjbGlja0V2ZW50cyhvYikge1xyXG5cdFx0XHQvLyBzdG9yZSBxdWVyeXMgaW4gYSBzaW5nbGUgdmFyXHJcblx0XHRcdHZhciBTZWN0aW9uID0gJChvYikucGFyZW50KCk7XHJcblx0XHRcdHZhciBTZWN0aW9uQ29udGVudCA9IFNlY3Rpb24uY2hpbGRyZW4oJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9jb250ZW50Jyk7XHJcblxyXG5cdFx0XHQvLyBnZXQgaWRcclxuXHRcdFx0dmFyIGlkID0gU2VjdGlvbi5hdHRyKCdpZCcpO1xyXG5cclxuXHRcdFx0dmFyIHRlbXBIZWlnaHQgPSAwO1xyXG5cclxuXHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXHJcblx0XHRcdGlmIChTZWN0aW9uLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0LCBkdXJpbmcgdGhpcyBwcm9jZXNzLCB0cmFuc2l0aW9ucyBhcmUgZGlzYWJsZWRcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5hZGRDbGFzcygnbm9UcmFuc2l0aW9uJyk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KFNlY3Rpb25Db250ZW50LmhlaWdodCgpKTtcclxuXHRcdFx0XHRTZWN0aW9uQ29udGVudFswXS5vZmZzZXRIZWlnaHQ7IC8vIGhhY2sgdG8gZm9yY2UgYSByZXBhaW50XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQucmVtb3ZlQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xyXG5cclxuXHRcdFx0XHQvLyBDb2xsYXBzZSBjb250ZW50XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xyXG5cdFx0XHRcdFNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0Ly8gUmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXHJcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodFxyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xyXG5cdFx0XHRcdC8vIHRlbXBIZWlnaHQgPSBTZWN0aW9uQ29udGVudC5oZWlnaHQoKTtcclxuXHRcdFx0XHQvLyBTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0Ly8gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KHRlbXBIZWlnaHQpO1xyXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdC8vIHJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxyXG5cdFx0XHRcdFNlY3Rpb24uYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBhamF4IHJlZnJlcyBmdW5jdGlvblxyXG5cdFx0dGhhdC5hamF4UmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyJykub2ZmKCk7XHJcblxyXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxyXG5cdFx0XHQkKFxyXG5cdFx0XHRcdCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBpbnB1dCwgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgc2VsZWN0LCAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBhJ1xyXG5cdFx0XHQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gYWRkIG5ldyBjbGljayBldmVudHNcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9uc1xyXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGlmIG5ldyBTZWN0aW9uRXhwYW5kYWJsZSB0aGVuIGFkZCB0byBwcmV2aWV3c3RhdCBhcnJheVxyXG5cdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID09IG51bGwpIHtcclxuXHRcdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XHJcblx0XHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Ly8gaWYgb3BlblxyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0c3RhdCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBhZGQgcm93XHJcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0geyBjbGllbnQ6IHN0YXQsIHNlcnZlcjogc3RhdCB9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY3VyZW50IHN0YXRlIChhamF4IHN0YXRlIHggaW5pdGlhbCBzdGF0ZSlcclxuXHRcdFx0XHR2YXIgY3VyU3RhdGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gY2hlY2sgaWYgc3RhcnQgZXhwYW5kYWJsZVxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0XHRjdXJTdGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBjaGVjayBpZiBhamF4ICE9IGluaXRpYWwgc2VydmVyXHJcblx0XHRcdFx0aWYgKGN1clN0YXRlICE9IHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ3NlcnZlciddKSB7XHJcblx0XHRcdFx0XHQvLyBjdXJzdGF0ZVxyXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPSBjdXJTdGF0ZTtcclxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ3NlcnZlciddID0gY3VyU3RhdGU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxyXG5cdFx0XHRcdFx0aWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID09IGZhbHNlICYmICQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5jaGlsZHJlbignLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2NvbnRlbnQnKVxyXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoMCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID09IHRydWUgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBzZXQgZXZlbnRzXHJcblx0XHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnMgdG8gY3JlYXRlIGFycmF5IHN0YXRcclxuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxyXG5cdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdC8vIGlmIG9wZW5cclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0XHRcdFx0c3RhdCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhZGQgcm93XHJcblx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9IHsgY2xpZW50OiBzdGF0LCBzZXJ2ZXI6IHN0YXQgfTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBhZGQgY2xpY2sgZXZlbnRzXHJcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyJylcclxuXHRcdFx0XHQub2ZmKCdjbGljaycpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y2xpY2tFdmVudHModGhpcyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxyXG5cdFx0XHQkKFxyXG5cdFx0XHRcdCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBpbnB1dCwgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgc2VsZWN0LCAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBhJ1xyXG5cdFx0XHQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gZXZlbnQgYWpheFxyXG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmIG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QodGhhdC5hamF4UmVmcmVzaCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2V0T3BlbkNsb3NlQ2xhc3MgPSBpZCA9PiB7XHJcblx0XHRpZC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGlkLnBhcmVudCgpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0LmZpbmQoJy5IZWFkZXJJY29uJylcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5maW5kKCcuSGVhZGVySWNvbicpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Nsb3NlZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5maW5kKCcuSGVhZGVySWNvbicpXHJcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG5cdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdC5maW5kKCcuSGVhZGVySWNvbicpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ29wZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgZXhwYW5kYWJsZSA9IG5ldyBTZWN0aW9uRXhwYW5kYWJsZUluc2lkZSgpO1xyXG5cclxuXHRcdGV4cGFuZGFibGUuaW5pdCgpO1xyXG5cdH07XHJcblxyXG5cdFNhcHBoaXJlV2lkZ2V0cy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSA9IHtcclxuXHRcdGNyZWF0ZSxcclxuXHRcdHNldE9wZW5DbG9zZUNsYXNzLFxyXG5cdH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgU2VsZWN0U3lzdGVtICovXHJcblNhcHBoaXJlV2lkZ2V0cy5TZWxlY3RTeXN0ZW0gPSBjb25maWcgPT4ge1xyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgV2lkZ2V0SWQgPSBjb25maWcuV2lkZ2V0SWQ7IC8vQ29tYm8gQm94IElkIHRvIGJlIHVzZWQuXHJcblx0XHR2YXIgQ2xhc3MgPSBjb25maWcuQ2xhc3M7IC8vQWxsIENvbWJvIGJveGVzIHdpdGggdGhpcyBjbGFzcyB3aWxsIGJlIGJlIHRyYW5zZm9ybWVkLlxyXG5cdFx0dmFyIE5vUmVzdWx0c1RleHQgPSBjb25maWcuTm9SZXN1bHRzVGV4dDsgLy9UZXh0IHRvIGRpc3BsYXkgd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0cy5cclxuXHRcdHZhciBpbnB1dFR5cGUgPSBjb25maWcuSW5wdVR5cGU7IC8vT3B0aW9uczogRklsdGVycywgRHJvcGRvd24sIFNlbGVjdDJcclxuXHRcdHZhciBQcm9tcHQgPSBjb25maWcuUHJvbXB0OyAvL1Byb21wdCBpbiBzZWFyY2hcclxuXHRcdHZhciBTZWxlY3QyVHlwZSA9IGNvbmZpZy5TZWxlY3RUeXBlOyAvLyBUeXBlIG9mIHNlbGVjdDIgY29uZmlndXJhdGlvblxyXG5cdFx0dmFyIEhhc1NlYXJjaCA9IGNvbmZpZy5IYXNTZWFyY2g7IC8vIGhhcyBzZWFyY2hcclxuXHRcdHZhciBPblNlbGVjdGluZ0pTID0gY29uZmlnLk9uU2VsZWN0aW5nSlM7XHJcblx0XHR2YXIgT25VblNlbGVjdGluZ0pTID0gY29uZmlnLk9uVW5TZWxlY3RpbmdKUztcclxuXHRcdHZhciBNYXhpbXVtTGVuZ3RoID0gY29uZmlnLk1heGltdW1MZW5ndGg7XHJcblx0XHR2YXIgU2VsZWN0ZWRWYWx1ZSA9IGNvbmZpZy5TZWxlY3RlZFZhbHVlO1xyXG5cdFx0dmFyIGFsbG93Q2xlYXIgPSBjb25maWcuYWxsb3dDbGVhcjtcclxuXHRcdC8vICBTZWxlY3QyIEFqYXggQ29uZmlndXJhdGlvblxyXG5cdFx0dmFyIEFqYXhVUkwgPSBjb25maWcuQWpheFVSTDtcclxuXHRcdHZhciBBamF4RGVsYXkgPSBjb25maWcuQWpheERlbGF5O1xyXG5cdFx0dmFyIFBhZ2luYXRpb25TaXplID0gY29uZmlnLlBhZ2luYXRpb25TaXplO1xyXG5cdFx0dmFyIE1pbmltdW1JbnB1dExlbmdodCA9IGNvbmZpZy5NaW5pbXVtSW5wdXRMZW5naHQ7XHJcblx0XHR2YXIgU2VhcmNoVGVybSA9IGNvbmZpZy5TZWFyY2hUZXJtO1xyXG5cdFx0dmFyIFNlYXJjaEV4dHJhUGFyYW0xID0gY29uZmlnLlNlYXJjaEV4dHJhUGFyYW0xO1xyXG5cdFx0dmFyIFBhZ2VUZXJtID0gY29uZmlnLlBhZ2VUZXJtO1xyXG5cdFx0dmFyIEFtb3VudFBhZ2UgPSBjb25maWcuUGFnZUFtb3VudDtcclxuXHRcdHZhciBpc011bHRpcGxlID0gY29uZmlnLmlzTXVsdGlwbGU7XHJcblx0XHR2YXIgU2VsZWN0Mk9wdGlvbnMgPSB7fTtcclxuXHRcdHZhciAkV2lkZ2V0SWRlbnRpZmllcjtcclxuXHJcblx0XHRpZiAoY29uZmlnLmxvY2FsZSA9PT0gJ0FSJyB8fCBjb25maWcubG9jYWxlID09PSAnRkEnKSB7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRpciA9ICdydGwnO1xyXG5cdFx0fVxyXG5cclxuXHRcdFNlbGVjdDJPcHRpb25zLnRoZW1lID0gJ2RlZmF1bHQgU2VsZWN0U3lzdGVtJztcclxuXHJcblx0XHQvKiAgXHJcbiAgICAgICAgICBDaGFuZ2Ugc2VsZWN0MiBzZWFyY2ggZGlzcGxheSBcclxuICAgICAgICAgICAgICAtTXVsdGlwbGUgU2VsZWN0MiBzZWFyY2ggVUkgbGlrZSBTaW5nbGUgU2VsZWN0MlxyXG4gICAgICAqL1xyXG5cdFx0JC5mbi5zZWxlY3QyLmFtZC5kZWZpbmUoXHJcblx0XHRcdCdTZWFyY2hMaWtlU2luZ2xlJyxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCdzZWxlY3QyL3V0aWxzJyxcclxuXHRcdFx0XHQnc2VsZWN0Mi9kcm9wZG93bicsXHJcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24vYXR0YWNoQm9keScsXHJcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24vYXR0YWNoQ29udGFpbmVyJyxcclxuXHRcdFx0XHQnc2VsZWN0Mi9kcm9wZG93bi9zZWFyY2gnLFxyXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyxcclxuXHRcdFx0XSxcclxuXHRcdFx0ZnVuY3Rpb24oVXRpbHMsIERyb3Bkb3duLCBBdHRhY2hCb2R5LCBBdHRhY2hDb250YWluZXIsIFNlYXJjaCwgbWluaW11bVJlc3VsdHNGb3JTZWFyY2gpIHtcclxuXHRcdFx0XHRsZXQgZHJvcGRvd25TZWFyY2ggPSBVdGlscy5EZWNvcmF0ZShEcm9wZG93biwgU2VhcmNoKTtcclxuXHRcdFx0XHRkcm9wZG93blNlYXJjaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR2YXIgJHJlbmRlcmVkID0gRHJvcGRvd24ucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xyXG5cdFx0XHRcdFx0Ly8gQWRkIGFiaWxpdHkgZm9yIGEgcGxhY2Vob2xkZXIgaW4gdGhlIHNlYXJjaCBib3hcclxuXHRcdFx0XHRcdGxldCBwbGFjZWhvbGRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ3BsYWNlaG9sZGVyRm9yU2VhcmNoJykgfHwgJyc7XHJcblx0XHRcdFx0XHR2YXIgJHNlYXJjaCA9ICQoXHJcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1kcm9wZG93blwiPicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiBwbGFjZWhvbGRlcj1cIicgK1xyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyICtcclxuXHRcdFx0XHRcdFx0XHQnXCIgdHlwZT1cInNlYXJjaFwiJyArXHJcblx0XHRcdFx0XHRcdFx0JyB0YWJpbmRleD1cIi0xXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiJyArXHJcblx0XHRcdFx0XHRcdFx0JyBzcGVsbGNoZWNrPVwiZmFsc2VcIiByb2xlPVwidGV4dGJveFwiIC8+JyArXHJcblx0XHRcdFx0XHRcdFx0Jzwvc3Bhbj4nXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XHJcblx0XHRcdFx0XHR0aGlzLiRzZWFyY2ggPSAkc2VhcmNoLmZpbmQoJ2lucHV0Jyk7XHJcblx0XHRcdFx0XHQkc2VhcmNoLmFkZENsYXNzKCdNdWx0aXBsZVNlbGVjdCcpO1xyXG5cclxuXHRcdFx0XHRcdCRyZW5kZXJlZC5wcmVwZW5kKCRzZWFyY2gpO1xyXG5cdFx0XHRcdFx0JHNlYXJjaC5wYXJlbnQoKS5hZGRDbGFzcygnTXVsdGlwbGVTZWxlY3QnKTtcclxuXHRcdFx0XHRcdHJldHVybiAkcmVuZGVyZWQ7XHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0Ly8gRGVjb3JhdGUgdGhlIGRyb3Bkb3duK3NlYXJjaCB3aXRoIHRoZSBjb250YWluZXJzXHJcblx0XHRcdFx0bGV0IGFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShkcm9wZG93blNlYXJjaCwgQXR0YWNoQ29udGFpbmVyKTtcclxuXHRcdFx0XHRhZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoYWRhcHRlciwgQXR0YWNoQm9keSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBhZGFwdGVyO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGVmYXVsdCBDb25maWd1cmF0aW9uIG5lZWRlZCB0byBhc3NvY2lhdGUgdGhlIHdpZGdldCB0byB0aGUgc2VsZWN0MiBwbHVnaW5cclxuXHRcdCAqL1xyXG5cdFx0aWYgKFdpZGdldElkID09PSAnJyAmJiBDbGFzcyAhPSAnJykge1xyXG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllciA9ICQoJy4nICsgQ2xhc3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JFdpZGdldElkZW50aWZpZXIgPSAkKCcjJyArIFdpZGdldElkKTtcclxuXHRcdH1cclxuXHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ3NlbGVjdC1oaWRlICcgKyBpbnB1dFR5cGU7XHJcblxyXG5cdFx0Ly8gIFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duUGFyZW50PSAkKCcjJytQYXJlbnREaXYpO1xyXG5cclxuXHRcdHZhciBmb3JtYXRSZXN1bHQgPSBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0dmFyICRzZWxlY3RlZE9wdGlvbnNWYWx1ZSA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJzpzZWxlY3RlZCcpO1xyXG5cdFx0XHR2YXIgc2VsZWN0ZWRPcHRpb25zID0gJHNlbGVjdGVkT3B0aW9uc1ZhbHVlLmxlbmd0aDtcclxuXHRcdFx0dmFyIHRvdGFsT3B0aW9ucyA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbicpLmxlbmd0aDtcclxuXHRcdFx0dmFyIHNlbGVjdEFsbE9wdCA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbjpmaXJzdC1jaGlsZDpzZWxlY3RlZCcpLmxlbmd0aDtcclxuXHRcdFx0dmFyIGFjdGl2ZVZhbHVlcyA9ICcnO1xyXG5cdFx0XHR2YXIgYWxsT3B0RXhjZXB0QWxsID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnOnNlbGVjdGVkOm5vdChcIi5TZWxlY3RlZEFsbFwiKScpLmxlbmd0aDtcclxuXHRcdFx0dmFyICRhbGxPcHRFeGNlcHRBbGxPYmogPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCc6c2VsZWN0ZWQ6bm90KFwiLlNlbGVjdGVkQWxsXCIpJyk7XHJcblxyXG5cdFx0XHRpZiAoc2VsZWN0ZWRPcHRpb25zID09PSB0b3RhbE9wdGlvbnMpIHtcclxuXHRcdFx0XHRpZiAodG90YWxPcHRpb25zIC0gMSA+IDMpIHtcclxuXHRcdFx0XHRcdHJldHVybiAnQWxsIFNlbGVjdGVkJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JGFsbE9wdEV4Y2VwdEFsbE9iai5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVWYWx1ZXMgPSBhY3RpdmVWYWx1ZXMgKyAnICcgKyAkKHRoaXMpWzBdLmlubmVyVGV4dDtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzLnJlcGxhY2UoLyxcXHMqJC8sICcnKTtcclxuXHRcdFx0XHRcdHJldHVybiBhY3RpdmVWYWx1ZXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciB0b3RhbG9wdCA9IHRvdGFsT3B0aW9ucyAtIDE7XHJcblx0XHRcdFx0aWYgKHNlbGVjdGVkT3B0aW9ucyA+IDMpIHtcclxuXHRcdFx0XHRcdHJldHVybiBzZWxlY3RlZE9wdGlvbnMgKyAnIG9mICcgKyB0b3RhbG9wdCArICcgc2VsZWN0ZWQnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRPcHRpb25zID4gMCkge1xyXG5cdFx0XHRcdFx0XHQkc2VsZWN0ZWRPcHRpb25zVmFsdWUuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmVWYWx1ZXMgPSBhY3RpdmVWYWx1ZXMgKyAnICcgKyAkKHRoaXMpWzBdLmlubmVyVGV4dCArICcsICc7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVWYWx1ZXMgPSBhY3RpdmVWYWx1ZXMucmVwbGFjZSgvLFxccyokLywgJycpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYWN0aXZlVmFsdWVzO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICdTZWxlY3QgYW4gb3B0aW9uJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKE5vUmVzdWx0c1RleHQgIT0gJycpIHtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZm9ybWF0Tm9NYXRjaGVzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIE5vUmVzdWx0c1RleHQ7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlucHV0VHlwZSAhPSAnJykge1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gaW5wdXRUeXBlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChhbGxvd0NsZWFyID09PSAnVHJ1ZScpIHtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuYWxsb3dDbGVhciA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1heGltdW1MZW5ndGggIT0gJycpIHtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMubWF4aW11bUlucHV0TGVuZ3RoID0gTWF4aW11bUxlbmd0aDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoUHJvbXB0ICE9ICcnKSB7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLnBsYWNlaG9sZGVyID0gUHJvbXB0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMucGxhY2Vob2xkZXIgPSB7XHJcblx0XHRcdFx0aWQ6ICctMScsIC8vIHRoZSB2YWx1ZSBvZiB0aGUgb3B0aW9uXHJcblx0XHRcdFx0dGV4dDogJ1NlbGVjdCBhbiBvcHRpb24nLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzMnKSB7XHJcblx0XHRcdC8vIFNlbGVjdDIgQWpheFxyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucyA9IHt9O1xyXG5cclxuXHRcdFx0aWYgKGNvbmZpZy5sb2NhbGUgPT09ICdBUicgfHwgY29uZmlnLmxvY2FsZSA9PT0gJ0ZBJykge1xyXG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRpciA9ICdydGwnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5hbGxvd0NsZWFyID0gZmFsc2U7XHJcblxyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50ZW1wbGF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKHJlcG8pIHtcclxuXHRcdFx0XHRpZiAoIXJlcG8uZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21wdDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXBvLmZ1bGxfbmFtZSB8fCByZXBvLnRleHQ7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50ZW1wbGF0ZVJlc3VsdCA9IGZ1bmN0aW9uKHJlcG8pIHtcclxuXHRcdFx0XHRpZiAocmVwby5sb2FkaW5nKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVwby50ZXh0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgbWFya3VwID0gJzxkaXYgY2xhc3M9XCJcIkNsZWFyZml4XCJcIj4nICsgJzxkaXYgY2xhc3M9XCJcIlRoZW1lR3JpZF9XaWR0aDEyXCJcIj4nICsgcmVwby50ZXh0ICsgJzwvZGl2Pic7XHJcblx0XHRcdFx0aWYgKHJlcG8uZGVzY3JpcHRpb24pIHtcclxuXHRcdFx0XHRcdG1hcmt1cCArPSAnPGRpdiBjbGFzcz1cIlwiT1NBdXRvTWFyZ2luVG9wXCJcIj4nICsgcmVwby5kZXNjcmlwdGlvbiArICc8L2Rpdj4nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtYXJrdXAgKz0gJzwvZGl2Pic7XHJcblx0XHRcdFx0cmV0dXJuIG1hcmt1cDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdChTZWxlY3QyT3B0aW9ucy5hamF4ID0ge1xyXG5cdFx0XHRcdHVybDogQWpheFVSTCxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdGRlbGF5OiBBamF4RGVsYXksXHJcblx0XHRcdFx0ZGF0YTogZnVuY3Rpb24ocGFyYW1zKSB7XHJcblx0XHRcdFx0XHR2YXIgU2VsZWN0MkFqYXhPcHQgPSB7fTtcclxuXHRcdFx0XHRcdHZhciBTcGxpdFBhcmFtZXRlciA9IFNlYXJjaEV4dHJhUGFyYW0xLnNwbGl0KCcsJyk7XHJcblx0XHRcdFx0XHRTZWxlY3QyQWpheE9wdC5TZWFyY2hQYXJhbWV0ZXIgPSBwYXJhbXMudGVybTtcclxuXHRcdFx0XHRcdFNlbGVjdDJBamF4T3B0LlBhZ2UgPSBwYXJhbXMucGFnZSB8fCAxO1xyXG5cdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHQuUGFnZUFtb3VudCA9IEFtb3VudFBhZ2U7XHJcblxyXG5cdFx0XHRcdFx0U3BsaXRQYXJhbWV0ZXIuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgc3BsaXRUZXh0ID0gZWwuc3BsaXQoJzonKTtcclxuXHRcdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHRbc3BsaXRUZXh0WzBdXSA9IHNwbGl0VGV4dFsxXTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBTZWxlY3QyQWpheE9wdDtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbihkYXRhLCBwYXJhbXMpIHtcclxuXHRcdFx0XHRcdHBhcmFtcy5wYWdlID0gcGFyYW1zLnBhZ2UgfHwgMTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHRzOiBkYXRhLml0ZW1zLFxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bW9yZTogcGFyYW1zLnBhZ2UgKiBQYWdpbmF0aW9uU2l6ZSA8IGRhdGEudG90YWxfY291bnQsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y2FjaGU6IHRydWUsXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRcdChTZWxlY3QyT3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPSBNaW5pbXVtSW5wdXRMZW5naHQpO1xyXG5cclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZXNjYXBlTWFya3VwID0gZnVuY3Rpb24obWFya3VwKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1hcmt1cDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmIChjb25maWcuaXNNdWx0aXBsZSkge1xyXG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLm11bHRpcGxlID0gdHJ1ZTtcclxuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdTZWxlY3QyQWpheCBNdWx0aXBsZSc7XHJcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICdTZWxlY3QyQWpheCBNdWx0aXBsZSc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMubXVsdGlwbGUgPSBmYWxzZTtcclxuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdTZWxlY3QyQWpheCc7XHJcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICdTZWxlY3QyQWpheCc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChTZWxlY3RlZFZhbHVlICE9PSAnJykge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShTZWxlY3RlZFZhbHVlKTtcclxuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbiA9IG5ldyBPcHRpb24oZGF0YS5WYWx1ZSwgZGF0YS5JZCwgdHJ1ZSwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuYXBwZW5kKG9wdGlvbikudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbXBvbmVudCBTZWxlY3RTeXN0ZW0gKCR7V2lkZ2V0SWR9KTogU2VsZWN0ZWRWYWx1ZSBtdXN0IGJlIGEgdmFsaWQgSlNPTiFgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gMDtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGFncyA9IGNvbmZpZy5IYXNUYWdzO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jbG9zZU9uc2VsZWN0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICcyJykge1xyXG5cdFx0XHQvL1NlbGVjdDIgd2l0aCBDaGVja0JveFxyXG5cclxuXHRcdFx0dmFyIGlzQWxsU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0aWYgKCRXaWRnZXRJZGVudGlmaWVyWzBdLm9wdGlvbnMubGVuZ3RoID09PSAkV2lkZ2V0SWRlbnRpZmllclswXS5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoKSB7XHJcblx0XHRcdFx0aXNBbGxTZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChXaWRnZXRJZCAhPSAnJykge1xyXG5cdFx0XHRcdG9wdGlvbiA9IG5ldyBPcHRpb24oJ1NlbGVjdCBBbGwnLCAnQWxsJywgdHJ1ZSwgaXNBbGxTZWxlY3RlZCk7XHJcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIucHJlcGVuZChvcHRpb24pO1xyXG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbjpmaXJzdC1jaGlsZCcpLmFkZENsYXNzKCdTZWxlY3RlZEFsbCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLm11bHRpcGxlID0gdHJ1ZTtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY2xvc2VPblNlbGVjdCA9IGZhbHNlO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5hbGxvd0h0bWwgPSBmYWxzZTtcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGFncyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYgKEhhc1NlYXJjaCA9PT0gJ1RydWUnKSB7XHJcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gJC5mbi5zZWxlY3QyLmFtZC5yZXF1aXJlKCdTZWFyY2hMaWtlU2luZ2xlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSAtMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAnTXVsdGlwbGVTZWxlY3QnO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ011bHRpcGxlU2VsZWN0JztcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGVtcGxhdGVTZWxlY3Rpb24gPSBmb3JtYXRSZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnNicpIHtcclxuXHRcdFx0Ly8gU2VsZWN0MiBIdG1sT3B0aW9uc1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucyA9IHt9O1xyXG5cdFx0XHRpZiAoY29uZmlnLmxvY2FsZSA9PT0gJ0FSJyB8fCBjb25maWcubG9jYWxlID09PSAnRkEnKSB7XHJcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZGlyID0gJ3J0bCc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBkYXRhSHRtbE9wdGlvbiA9IFtdO1xyXG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9uT2JqZWN0ID0ge1xyXG5cdFx0XHRcdFx0aWQ6ICQodGhpcykudmFsKCksXHJcblx0XHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcclxuXHRcdFx0XHRcdGh0bWw6ICQodGhpcykudGV4dCgpLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0ZGF0YUh0bWxPcHRpb24ucHVzaChvcHRpb25PYmplY3QpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ2N1c3RvbVNlbGVjdCc7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAnZHJvcGRvd25DdXN0b20nO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kYXRhID0gZGF0YUh0bWxPcHRpb247XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmVzY2FwZU1hcmt1cCA9IGZ1bmN0aW9uKG1hcmt1cCkge1xyXG5cdFx0XHRcdHJldHVybiBtYXJrdXA7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoU2VsZWN0ZWRWYWx1ZSAhPSAnJykge1xyXG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnZhbChTZWxlY3RlZFZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci52YWwoJycpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnMScpIHtcclxuXHRcdFx0Ly8gU2VsZWN0MiBUYWdDdXN0b21cclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGFncyA9IHRydWU7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ3RhZ0N1c3RvbSc7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAndGFnQ3VzdG9tJztcclxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuVG9rZW5TZXBhcmF0b3MgPSBbJywnLCAnICddO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jcmVhdGVTZWFyY2hDaG9pY2UgPSBmdW5jdGlvbih0ZXJtLCBkYXRhKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0JChkYXRhKS5maWx0ZXIoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnRleHQubG9jYWxlQ29tcGFyZSh0ZXJtKSA9PT0gMDtcclxuXHRcdFx0XHRcdH0pLmxlbmd0aCA9PT0gMFxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0aWQ6IHRlcm0sXHJcblx0XHRcdFx0XHRcdHRleHQ6IHRlcm0sXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICc1Jykge1xyXG5cdFx0XHQvLyBTZWxlY3QyIFRhZ011bHRpcGxlXHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSB0cnVlO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICd0YWdTeXN0ZW0nO1xyXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ3RhZ1N5c3RlbSc7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNyZWF0ZVRhZyA9IGZ1bmN0aW9uKHBhcmFtcykge1xyXG5cdFx0XHRcdHZhciB0ZXJtID0gJC50cmltKHBhcmFtcy50ZXJtKTtcclxuXHRcdFx0XHRpZiAodGVybSA9PT0gJycpIHtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0aWQ6ICcjJyArIHRlcm0sXHJcblx0XHRcdFx0XHR0ZXh0OiB0ZXJtLFxyXG5cdFx0XHRcdFx0bmV3VGFnOiB0cnVlLCAvLyBhZGQgYWRkaXRpb25hbCBwYXJhbWV0ZXJzXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoSGFzU2VhcmNoID09PSAnRmFsc2UnKSB7XHJcblx0XHRcdFNlbGVjdDJPcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE9uVW5TZWxlY3RpbmdKUyAhPSAnJyB8fCBPblNlbGVjdGluZ0pTICE9ICcnKSB7XHJcblx0XHRcdCRXaWRnZXRJZGVudGlmaWVyXHJcblx0XHRcdFx0LnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpXHJcblx0XHRcdFx0Lm9uKCdzZWxlY3QyOnVuc2VsZWN0aW5nJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5kYXRhKCd1bnNlbGVjdGluZycsIHRydWUpO1xyXG5cdFx0XHRcdFx0T25VblNlbGVjdGluZ0pTO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm9uKCdzZWxlY3Q6c2VsZWN0aW5nJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0T25TZWxlY3RpbmdKUztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5vbignc2VsZWN0Om9wZW5pbmcnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCd1bnNlbGVjdGluZycpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlRGF0YSgndW5zZWxlY3RpbmcnKTtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm9uKCdzZWxlY3Q6b3BlbicsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQub24oJ3NlbGVjdDI6Y2xvc2UnLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnMicpIHtcclxuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcclxuXHRcdFx0XHR2YXIgaWR3aWRnZXQgPSAnIycgKyBXaWRnZXRJZDtcclxuXHJcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIub24oJ3NlbGVjdDI6c2VsZWN0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0VW5zZWxlY3RlZElkID0gZS5wYXJhbXMuZGF0YS5pZDtcclxuXHRcdFx0XHRcdGlmIChVbnNlbGVjdGVkSWQgPT09ICdBbGwnKSB7XHJcblx0XHRcdFx0XHRcdHZhciBzZWxlY3RlZEl0ZW1zID0gW107XHJcblx0XHRcdFx0XHRcdHZhciBhbGxPcHRpb25zID0gJChpZHdpZGdldCArICcgb3B0aW9uJyk7XHJcblx0XHRcdFx0XHRcdGFsbE9wdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZEl0ZW1zLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdkZXN0cm95Jyk7XHJcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnZhbChzZWxlY3RlZEl0ZW1zKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XHJcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ29wZW4nKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBzZWxlY3RlZE9wdGlvbnMgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdHZhciB0b3RhbE9wdGlvbnMgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb24nKS5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdGlmIChzZWxlY3RlZE9wdGlvbnMgPT09IHRvdGFsT3B0aW9ucyAtIDEgJiYgJChpZHdpZGdldCArICcgPiAgb3B0aW9uOnNlbGVjdGVkOmZpcnN0LWNoaWxkJykubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHNlbGVjdGVkSXRlbXMgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgYWxsT3B0aW9ucyA9ICQoaWR3aWRnZXQgKyAnIG9wdGlvbicpO1xyXG5cdFx0XHRcdFx0XHRcdGFsbE9wdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdkZXN0cm95Jyk7XHJcblx0XHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKHNlbGVjdGVkSXRlbXMpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ29wZW4nKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5vbignc2VsZWN0Mjp1bnNlbGVjdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFVuc2VsZWN0ZWRJZCA9IGUucGFyYW1zLmRhdGEuaWQ7XHJcblx0XHRcdFx0XHRpZiAoVW5zZWxlY3RlZElkID09PSAnQWxsJykge1xyXG5cdFx0XHRcdFx0XHQkKGlkd2lkZ2V0ICsgJyA+IG9wdGlvbicpLnJlbW92ZUF0dHIoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcclxuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XHJcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ29wZW4nKTtcclxuXHRcdFx0XHRcdFx0JChpZHdpZGdldClcclxuXHRcdFx0XHRcdFx0XHQudmFsKCcnKVxyXG5cdFx0XHRcdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0Ly8kKGlkd2lkZ2V0ICsnID4gb3B0aW9uJykuYXR0cignc2VsZWN0ZWQnLCBcInNlbGVjdGVkXCIpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JChpZHdpZGdldCArICcgPiBvcHRpb246Zmlyc3QtY2hpbGQnKS5yZW1vdmVBdHRyKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcclxuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0Mignb3BlbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcbiIsIi8qIENvbXBvbmVudCBTaGlmdENvbnRhaW5lciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRsZXQgc2hpZnRUaW1lbGluZVJlc2l6ZVRpbWVyO1xuXHRsZXQgJHNoaWZ0Q29udGFpbmVySWQgPSAkKCk7XG5cblx0Y29uc3QgY3JlYXRlID0gc2hpZnRDb250YWluZXJJZCA9PiB7XG5cdFx0Ly8gJCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudSAnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG5cdFx0JHNoaWZ0Q29udGFpbmVySWQgPSAkKHNoaWZ0Q29udGFpbmVySWQpO1xuXG5cdFx0aGFzU2Nyb2xsQmFyKCk7XG5cdFx0aGFuZGxlU2hpZnRUYWJsZSgpO1xuXG5cdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHQvLyBcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudSAnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHQvLyB9LCAxNTAwKTtcblxuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfX2Fycm93Jylcblx0XHRcdC5vZmYoJ21vdXNlZG93bicpXG5cdFx0XHQub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJlZHJhd1NoaWZ0VGltZWxpbmUoKTtcblx0XHRcdFx0fSwgMTUwMCk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaGlmdFRhYmxlID0gKCkgPT4ge1xuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXHRcdFx0dmFyICRlbEZsYWcgPSAkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmluZCgnLkZsYWdMaW5lJyk7XG5cdFx0XHR2YXIgJGVsRmxhZ1RpbWUgPSAkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmluZCgnLkZsYWdMaW5lX3RpbWUnKTtcblx0XHRcdHZhciAkY29sdW1uRmxhZyA9ICRlbEZsYWcuZGF0YSgnY29sdW1uJyk7XG5cdFx0XHR2YXIgJG1pbnV0ZXNGbGFnID0gJGVsRmxhZy5kYXRhKCdtaW51dGVzJyk7XG5cdFx0XHR2YXIgJHNsb3RzID0gJCh0aGlzKVxuXHRcdFx0XHQuY2xvc2VzdCgnLlNoaWZ0Q29udGFpbmVyJylcblx0XHRcdFx0LmZpbmQoJy5TaGlmdENvbnRhaW5lcl9oZWFkZXInKVxuXHRcdFx0XHQuZmluZCgnLlNoaWZ0Q2VsbENvbnRlbnQnKTtcblx0XHRcdHZhciAkc2xvdFdpZHRoID0gTWF0aC5yb3VuZCgkc2xvdHMuZXEoMCkud2lkdGgoKSk7XG5cdFx0XHR2YXIgbWludXRlc1Bvc2l0aW9uID0gKCRtaW51dGVzRmxhZyAqICRzbG90V2lkdGgpIC8gNjA7XG5cblx0XHRcdC8vIGhhbmRsZSBjdXJyZW50IHRpbWUgZmxvZyBob3Jpem9udGFsIHBvc2l0aW9uaW5nXG5cdFx0XHR2YXIgc2xvdHNQb3NpdGlvbiA9IFtdO1xuXHRcdFx0JHNsb3RzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cdFx0XHRcdHNsb3RzUG9zaXRpb24ucHVzaCgkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCk7XG5cdFx0XHR9KTtcblx0XHRcdCRlbEZsYWcuY3NzKCdsZWZ0Jywgc2xvdHNQb3NpdGlvblskY29sdW1uRmxhZyAtIDFdICsgbWludXRlc1Bvc2l0aW9uKTtcblx0XHRcdCRlbEZsYWcuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHRpZiAoJGNvbHVtbkZsYWcgPT09ICRzbG90cy5sZW5ndGgpIHtcblx0XHRcdFx0JGVsRmxhZ1RpbWUuY3NzKHtcblx0XHRcdFx0XHRyaWdodDogJzFweCcsXG5cdFx0XHRcdFx0bGVmdDogJ2F1dG8nLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaGFuZGxlIGNlbGxzIHRoYXQgbWlnaHQgc3BhbiBvdmVyIHNldmVyYWwgc2xvdHNcblx0XHRcdCQodGhpcylcblx0XHRcdFx0LmZpbmQoJy5TaGlmdENhcmQnKVxuXHRcdFx0XHQuZWFjaChmdW5jdGlvbihpbmRleCwgZWxSb3cpIHtcblx0XHRcdFx0XHR2YXIgcm93SGFzU3Bhbm5lZENlbGwgPSBmYWxzZTtcblx0XHRcdFx0XHQkKGVsUm93KVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TaGlmdENlbGxDb250ZW50Jylcblx0XHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbENlbGwpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGNvbHNwYW4gPSAkKGVsQ2VsbCkuZGF0YSgnY29sc3BhbicpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY29sc3BhbiA9PT0gc2xvdHNQb3NpdGlvbi5sZW5ndGggfHwgcm93SGFzU3Bhbm5lZENlbGwpIHtcblx0XHRcdFx0XHRcdFx0XHQkKGVsQ2VsbCkuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmxleDogJzEgMSBhdXRvJyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjb2xzcGFuID4gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHJvd0hhc1NwYW5uZWRDZWxsID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHQkKGVsQ2VsbCkuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmxleDogJ25vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICsoc2xvdHNQb3NpdGlvbltjb2xzcGFuXSAtIHNsb3RzUG9zaXRpb25bMF0pICsgJ3B4Jyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBoYW5kbGUgaG9yaXpvbnRhbCBzY3JvbGwgYmVoYXZpb3Jcblx0XHRcdGlmIChlbC5zY3JvbGxXaWR0aCA+IGVsLmNsaWVudFdpZHRoKSB7XG5cdFx0XHRcdCQoZWwpLndpZHRoKGVsLnNjcm9sbFdpZHRoKTtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2hpZnRDb250YWluZXInKVxuXHRcdFx0XHRcdC5maW5kKCcuU2hpZnRDb250YWluZXJfaGVhZGVyJylcblx0XHRcdFx0XHQud2lkdGgoZWwuc2Nyb2xsV2lkdGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JChlbCkud2lkdGgoJ2F1dG8nKTtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2hpZnRDb250YWluZXInKVxuXHRcdFx0XHRcdC5maW5kKCcuU2hpZnRDb250YWluZXJfaGVhZGVyJylcblx0XHRcdFx0XHQud2lkdGgoJ2F1dG8nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYXNTY3JvbGxCYXIgPSAoKSA9PiB7XG5cdFx0dmFyICRTY3JvbGxhYmxlRGl2ID0gJHNoaWZ0Q29udGFpbmVySWQuZmluZCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXInKTtcblx0XHRpZiAoJHNoaWZ0Q29udGFpbmVySWQuZmluZCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXInKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAoJFNjcm9sbGFibGVEaXYuZ2V0KDApLnNjcm9sbEhlaWdodCA+ICRTY3JvbGxhYmxlRGl2LmhlaWdodCgpKSB7XG5cdFx0XHRcdHZhciAkbGFzdENlbGwgPSAkc2hpZnRDb250YWluZXJJZC5maW5kKCcuSXNUaW1lcjpsYXN0LWNoaWxkJyk7XG5cdFx0XHRcdCRsYXN0Q2VsbC5jc3MoJ3BhZGRpbmctcmlnaHQnLCAnN3B4Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHJlZHJhd1NoaWZ0VGltZWxpbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHNoaWZ0VGltZWxpbmVSZXNpemVUaW1lcik7XG5cdFx0c2hpZnRUaW1lbGluZVJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGhhc1Njcm9sbEJhcigpO1xuXHRcdFx0aGFuZGxlU2hpZnRUYWJsZSgpO1xuXHRcdH0sIDQwMCk7XG5cdH07XG5cblx0Y29uc3QgY2hlY2tTY3JvbGwgPSAoKSA9PiB7XG5cdFx0dmFyIGhDb250ZW50ID0gJCgnLkNvbnRlbnQnKS5oZWlnaHQoKTtcblx0XHR2YXIgaFdpbmRvdyA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuXHRcdGlmIChoQ29udGVudCA+IGhXaW5kb3cpIHJlZHJhd1NoaWZ0VGltZWxpbmUoKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdGNoZWNrU2Nyb2xsLFxuXHRcdHJlZHJhd1NoaWZ0VGltZWxpbmUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG5cbiQod2luZG93KVxuXHQub2ZmKCdyZXNpemUuR2VuZXJpY0dhbGxlcnknKVxuXHQub24oJ3Jlc2l6ZS5HZW5lcmljR2FsbGVyeScsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cblx0XHRvc0FqYXhCYWNrZW5kICYmIG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLnJlZHJhd1NoaWZ0VGltZWxpbmUpO1xuXG5cdFx0c2V0VGltZW91dChTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIuY2hlY2tTY3JvbGwsIDEwMDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSwgMTUwMCk7XG5cdH0pO1xuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0aWYgKCEhJCgnLlNoaWZ0Q29udGFpbmVyJykubGVuZ3RoKSB7XG5cdFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdFx0fSwgNDAwKTtcblxuXHRcdHNldFRpbWVvdXQoU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLmNoZWNrU2Nyb2xsLCA1MDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSwgNjAwKTtcblxuXHRcdCQoJy5uYXZpZ2F0aW9uLWNvbnRyb2wtaXRlbScpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHR9KTtcblxuXHRcdC8vVmVyaWZ5IHRoZSBzY3JvbGwgaWYgdG9vbHRpcCBvcGVuZWRcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lcicpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKCcudG9vbHRpcHN0ZXItYmFzZScpLmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHRcdCQoJy50b29sdGlwc3Rlci1iYXNlJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdFx0XHR9LCA0MDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5jaGVja1Njcm9sbCwgNTAwKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fSwgNjAwKTtcblxuXHRcdFx0Ly8gU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLnJlZHJhd1NoaWZ0VGltZWxpbmU7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIiwiLyogQ29tcG9uZW50IFNoaWZ0VGFibGUgKi9cblNhcHBoaXJlV2lkZ2V0cy5TaGlmdFRhYmxlID0gd2lkZ2V0SWQgPT4ge1xuXHQkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zdCAkc2hpZnRUYWJsZSA9ICQoYCMke3dpZGdldElkfWApO1xuXHRcdFx0Y29uc3QgJGhlYWRlckNlbGxMaXN0ID0gJHNoaWZ0VGFibGUuZmluZCgnLlNoaWZ0VGFibGVfX0hlYWRlckxhYmVscyAuU2hpZnRUYWJsZUNlbGwnKTtcblx0XHRcdGNvbnN0ICRob3VyTGluZSA9ICRzaGlmdFRhYmxlLmZpbmQoJy5Ib3VyTGluZScpO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5MaW5lID0gJGhvdXJMaW5lLmRhdGEoJ2NvbHVtbicpO1xuXHRcdFx0Y29uc3QgbWludXRlc0xpbmUgPSAkaG91ckxpbmUuZGF0YSgnbWludXRlcycpO1xuXG5cdFx0XHRjb25zdCBjZWxsV2lkdGggPSAkaGVhZGVyQ2VsbExpc3QuZXEoMCkud2lkdGgoKTtcblx0XHRcdGNvbnN0IG1pbnV0ZXNQb3NpdGlvbiA9IChjZWxsV2lkdGggLyA2MCkgKiBtaW51dGVzTGluZTtcblxuXHRcdFx0Ly8gSGFuZGxlIGN1cnJlbnQgaG91ciBsaW5lIGhvcml6b250YWwgcG9zaXRpb25pbmdcblx0XHRcdGNvbnN0IGNlbGxQb3NpdGlvbiA9IFtdO1xuXG5cdFx0XHQkaGVhZGVyQ2VsbExpc3QuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblx0XHRcdFx0Y2VsbFBvc2l0aW9uLnB1c2goJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCRob3VyTGluZS5jc3MoJ2xlZnQnLCBjZWxsUG9zaXRpb25bY29sdW1uTGluZSAtIDFdICsgbWludXRlc1Bvc2l0aW9uKTtcblx0XHRcdCRob3VyTGluZS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuXHRcdH0sIDUwMCk7XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaGlmdFRhYmxlQ2FyZCAqL1xuU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkID0gd2lkZ2V0SWQgPT4ge1xuXHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cdGNvbnN0ICRhY3Rpb25zID0gJGNvbXBvbmVudC5maW5kKCcuTW9yZUFjdGlvbnMnKTtcblx0Y29uc3QgaGFzQWN0aW9ucyA9ICRhY3Rpb25zLmxlbmd0aCA+IDA7XG5cblx0aWYgKGhhc0FjdGlvbnMpIHtcblx0XHQkYWN0aW9ucy5vbignY2xpY2snLCBlID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdCQoJy5TaGlmdFRhYmxlQ2FyZCcpLnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZC0tc2VsZWN0ZWQnKTtcblx0XHRcdCRjb21wb25lbnQuYWRkQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBvbkNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuXHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygkY29tcG9uZW50KSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjb21wb25lbnQpLmlzKCRjb21wb25lbnQpKSB7XG5cdFx0XHRcdCRjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuIiwiU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MgPSBjb25maWcgPT4ge1xuXHRjb25zdCBERUZBVUxUX1BBRERJTkcgPSA4O1xuXHRjb25zdCBERUZBVUxUX0NBUkRfSEVJR0hUID0gNTY7XG5cblx0Y29uc3Qgc2V0VGFibGVDYXJkUHJvZ3Jlc3MgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2FyZFByb2dyZXNJRCA9IGNvbmZpZy53aWRnZXRJZDtcblx0XHRjb25zdCBzdGFydENvbHVtbiA9IGNvbmZpZy5zdGFydENvbHVtbjtcblx0XHRjb25zdCBlbmRDb2x1bW4gPSBjb25maWcuZW5kQ29sdW1uO1xuXG5cdFx0Y29uc3QgJGNhcmRQcm9ncmVzcyA9ICQoJyMnICsgY2FyZFByb2dyZXNJRCk7XG5cdFx0Y29uc3QgJHNoaWZ0VGFibGUgPSAkY2FyZFByb2dyZXNzLmNsb3Nlc3QoJy5TaGlmdFRhYmxlJyk7XG5cdFx0Y29uc3QgJHRhYmxlQ2VsbExpc3QgPSAkc2hpZnRUYWJsZS5maW5kKCcuU2hpZnRUYWJsZV9fQ29udGVudCAuU2hpZnRUYWJsZUNlbGwnKTtcblx0XHRjb25zdCAkdGFibGVSb3dDb250ZW50ID0gJGNhcmRQcm9ncmVzcy5jbG9zZXN0KCcuU2hpZnRUYWJsZVJvd19fQ29udGVudCcpO1xuXHRcdGNvbnN0ICR0YWJsZUNhcmQgPSAkdGFibGVSb3dDb250ZW50LmZpbmQoJy5TaGlmdFRhYmxlQ2FyZCcpO1xuXHRcdGNvbnN0ICRjYXJkUHJvZ3Jlc3NMaXN0ID0gJHRhYmxlUm93Q29udGVudC5maW5kKCcuU2hpZnRUYWJsZUNhcmRQcm9ncmVzcycpO1xuXHRcdGNvbnN0ICRwcm9ncmVzc0Jhckxpc3QgPSAkY2FyZFByb2dyZXNzLmZpbmQoJy5Qcm9ncmVzc0JhcldyYXAnKTtcblx0XHRjb25zdCAkYWN0aW9ucyA9ICRjYXJkUHJvZ3Jlc3MuZmluZCgnLk1vcmVBY3Rpb25zJyk7XG5cblx0XHRjb25zdCBjYXJkc1RvdGFsID0gJHRhYmxlQ2FyZC5sZW5ndGg7XG5cdFx0Y29uc3QgdGltZVNsb3RXaWR0aCA9ICR0YWJsZUNlbGxMaXN0WzFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdGNvbnN0IGNvbEZpbGwgPSBwYXJzZUludChlbmRDb2x1bW4pIC0gcGFyc2VJbnQoc3RhcnRDb2x1bW4pICsgMTtcblx0XHRjb25zdCBtaW51dGVWYWx1ZVdpZHRoID0gdGltZVNsb3RXaWR0aCAvIDYwO1xuXHRcdGNvbnN0IGhhc0FjdGlvbnMgPSAkYWN0aW9ucy5sZW5ndGggPiAwO1xuXG5cdFx0bGV0IHRvdGFsTGVmdCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhcnNlSW50KHN0YXJ0Q29sdW1uKTsgaSsrKSB7XG5cdFx0XHR0b3RhbExlZnQgKz0gJHRhYmxlQ2VsbExpc3RbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cdFx0fVxuXG5cdFx0bGV0IHJvdW5kV2lkdGggPSBNYXRoLnJvdW5kKCh0aW1lU2xvdFdpZHRoICsgTnVtYmVyLkVQU0lMT04pICogMTAwKSAvIDEwMDtcblx0XHRjb25zdCBwYWRkaW5nT2Zmc2V0ID0gREVGQVVMVF9QQURESU5HICogMjtcblx0XHRjb25zdCBuZXdXaWR0aCA9IGNvbEZpbGwgKiByb3VuZFdpZHRoIC0gcGFkZGluZ09mZnNldDtcblx0XHRjb25zdCBkaXJlY3Rpb24gPSAkKCcuUGFnZScpLmhhc0NsYXNzKCdBUicpIHx8ICQoJy5QYWdlJykuaGFzQ2xhc3MoJ0ZBJykgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG5cdFx0JGNhcmRQcm9ncmVzcy5jc3MoJ3dpZHRoJywgYCR7bmV3V2lkdGh9cHhgKTtcblx0XHQkY2FyZFByb2dyZXNzLmNzcygnbWF4LXdpZHRoJywgJ3Vuc2V0Jyk7XG5cdFx0JGNhcmRQcm9ncmVzcy5jc3MoZGlyZWN0aW9uLCBgJHsodG90YWxMZWZ0ICs9IERFRkFVTFRfUEFERElORyl9cHhgKTtcblxuXHRcdGlmIChjYXJkc1RvdGFsID4gMCkge1xuXHRcdFx0bGV0IGNvdW50ID0gMDtcblxuXHRcdFx0JHRhYmxlQ2FyZC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRcdGNvbnN0IGlzT3ZlcmxhcGVkID0gY2hlY2tGb3JPdmVybGFwKCRjYXJkUHJvZ3Jlc3NbMF0sICR0aGlzWzBdKTtcblxuXHRcdFx0XHRpZiAoaXNPdmVybGFwZWQgPT09IHRydWUgJiYgY291bnQgPCAkY2FyZFByb2dyZXNzTGlzdC5sZW5ndGgpIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJHRoaXNbMF0ub2Zmc2V0VG9wICsgJGNhcmRQcm9ncmVzcy5oZWlnaHQoKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb3VudCA9IGNvdW50Kys7XG5cdFx0XHR9KTtcblxuXHRcdFx0JGNhcmRQcm9ncmVzc0xpc3QuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdGNvbnN0IGhlbHBlciA9IGhlbHBlck9iaigkdGhpcywgJGNhcmRQcm9ncmVzcywgJGNhcmRQcm9ncmVzc0xpc3QpO1xuXG5cdFx0XHRcdGlmIChoZWxwZXIuaXNPdmVybGFwZWQpIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJHRoaXNbMF0ub2Zmc2V0VG9wICsgMTMwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJHRhYmxlUm93Q29udGVudC5oZWlnaHQoKSAtIERFRkFVTFRfUEFERElORyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBvZmZzZXQgPSA0ICsgREVGQVVMVF9DQVJEX0hFSUdIVCArIERFRkFVTFRfUEFERElORyAqIDI7XG5cblx0XHRcdCR0YWJsZVJvd0NvbnRlbnQuaGVpZ2h0KCRjYXJkUHJvZ3Jlc3NMaXN0Lmxhc3QoKS5wb3NpdGlvbigpLnRvcCArIG9mZnNldCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRjYXJkUHJvZ3Jlc3NMaXN0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0XHRjb25zdCBoZWxwZXIgPSBoZWxwZXJPYmooJHRoaXMsICRjYXJkUHJvZ3Jlc3MsICRjYXJkUHJvZ3Jlc3NMaXN0KTtcblxuXHRcdFx0XHRpZiAoaGVscGVyLmlzT3ZlcmxhcGVkKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gREVGQVVMVF9DQVJEX0hFSUdIVCArIERFRkFVTFRfUEFERElORyAqIDI7XG5cblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJGNhcmRQcm9ncmVzc1swXS5vZmZzZXRUb3AgKyBvZmZzZXQgKyAncHgnKTtcblx0XHRcdFx0XHRoZWxwZXIuJHNoaWZ0Q2FyZC5oZWlnaHQoaGVscGVyLiRzaGlmdENhcmQuaGVpZ2h0KCkgKyAkdGhpc1swXS5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGlmICh0aW1lU2xvdFdpZHRoICE9PSAkdGFibGVDZWxsTGlzdFsxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkge1xuXHRcdFx0XHRzZXRUYWJsZUNhcmRQcm9ncmVzcyhjb25maWcpO1xuXHRcdFx0fVxuXHRcdH0sIDUwMCk7XG5cblx0XHRpZiAoaGFzQWN0aW9ucykge1xuXHRcdFx0JGFjdGlvbnMub24oJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0JGNhcmRQcm9ncmVzcy5hZGRDbGFzcygnU2hpZnRUYWJsZUNhcmRQcm9ncmVzcy0tc2VsZWN0ZWQnKTtcblxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3Qgb25DbGlja091dHNpZGUgPSBlID0+IHtcblx0XHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRcdGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCRjYXJkUHJvZ3Jlc3MpICYmICEkdGFyZ2V0LnBhcmVudHMoJGNhcmRQcm9ncmVzcykuaXMoJGNhcmRQcm9ncmVzcykpIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZFByb2dyZXNzLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qJHByb2dyZXNzQmFyTGlzdC5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRjb25zdCBiZWdpbnNsb3QgPSAkKHRoaXMpLmRhdGEoJ2JlZ2luc2xvdCcpO1xuXHRcdFx0Y29uc3QgYmVnaW5taW51dGUgPSAkKHRoaXMpLmRhdGEoJ2JlZ2lubWludXRlJyk7XG5cdFx0XHRjb25zdCBlbmRzbG90ID0gJCh0aGlzKS5kYXRhKCdlbmRzbG90Jyk7XG5cdFx0XHRjb25zdCBlbmRtaW51dGUgPSAkKHRoaXMpLmRhdGEoJ2VuZG1pbnV0ZScpO1xuXHRcdFx0Y29uc3QgYWN0aW9uc1dpZHRoID0gNTY7XG5cblx0XHRcdGNvbnN0IHByb2dyZXNzQmFyTWludXRlcyA9IChlbmRzbG90IC0gYmVnaW5zbG90KSAqIDYwICsgZW5kbWludXRlIC0gYmVnaW5taW51dGU7XG5cdFx0XHRjb25zdCBwcm9ncmVzc2VuZFdpdGhQZXIgPSBwcm9ncmVzc0Jhck1pbnV0ZXMgKiBtaW51dGVWYWx1ZVdpZHRoO1xuXG5cdFx0XHRjb25zdCAkcHJvZ3Jlc3NUb3RhbCA9ICQodGhpcykuZmluZCgnLlByb2dyZXNzQmFyX19hbmltYXRpb24nKTtcblxuXHRcdFx0Ly8kKHRoaXMpLmNzcygnbGVmdCcsICgoYmVnaW5zbG90IC0gMSkgKiA2MCArIGJlZ2lubWludXRlKSAqIG1pbnV0ZVZhbHVlV2lkdGggKyAncHgnKTtcblx0XHRcdCRwcm9ncmVzc1RvdGFsLmNzcygnd2lkdGgnLCBwcm9ncmVzc2VuZFdpdGhQZXIgLSBhY3Rpb25zV2lkdGggKyAncHgnKTtcblx0XHR9KTsqL1xuXHR9O1xuXG5cdGNvbnN0IGNoZWNrRm9yT3ZlcmxhcCA9IChlbDEsIGVsMikgPT4ge1xuXHRcdGNvbnN0IGJvdW5kczEgPSBlbDEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgYm91bmRzMiA9IGVsMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdGNvbnN0IGZpcnN0SXN0TGVmdG1vc3QgPSBib3VuZHMxLmxlZnQgPD0gYm91bmRzMi5sZWZ0O1xuXHRcdGNvbnN0IGxlZnRlc3QgPSBmaXJzdElzdExlZnRtb3N0ID8gYm91bmRzMSA6IGJvdW5kczI7XG5cdFx0Y29uc3QgcmlnaHRlc3QgPSBmaXJzdElzdExlZnRtb3N0ID8gYm91bmRzMiA6IGJvdW5kczE7XG5cblx0XHQvLyBSZXBsYWNlID4gdG8gdG8gPj0gaWYgYm9yZGVyIG92ZXJsYXAgc2hvdWxkIGNvdW50XG5cdFx0aWYgKGxlZnRlc3QucmlnaHQgPiByaWdodGVzdC5sZWZ0KSB7XG5cdFx0XHRjb25zdCBmaXJzdElzVG9wbW9zdCA9IGJvdW5kczEudG9wIDw9IGJvdW5kczIudG9wO1xuXHRcdFx0Y29uc3QgdG9wZXN0ID0gZmlyc3RJc1RvcG1vc3QgPyBib3VuZHMxIDogYm91bmRzMjtcblx0XHRcdGNvbnN0IGJvdHRvbWVzdCA9IGZpcnN0SXNUb3Btb3N0ID8gYm91bmRzMiA6IGJvdW5kczE7XG5cblx0XHRcdC8vIFJlcGxhY2UgPiB0byA+PSBpZiBib3JkZXIgc2hvdWxkIGNvdW50XG5cdFx0XHRyZXR1cm4gdG9wZXN0LmJvdHRvbSA+IGJvdHRvbWVzdC50b3A7XG5cdFx0fSBlbHNlIHJldHVybiBmYWxzZTtcblx0fTtcblxuXHRjb25zdCBoZWxwZXJPYmogPSAoJHRoaXMsICRjYXJkUHJvZ3Jlc3MsICRjYXJkUHJvZ3Jlc3NMaXN0KSA9PiB7XG5cdFx0Y29uc3QgJHNoaWZ0Q2FyZCA9ICR0aGlzLmNsb3Nlc3QoJy5TaGlmdFRhYmxlUm93X19Db250ZW50Jyk7XG5cdFx0bGV0IGlzT3ZlcmxhcGVkID0gY2hlY2tGb3JPdmVybGFwKCRjYXJkUHJvZ3Jlc3NbMF0sICR0aGlzWzBdKTtcblx0XHRjb25zdCBjcmVhdGVkSWQgPSAkY2FyZFByb2dyZXNzLmF0dHIoJ2lkJyk7XG5cdFx0Y29uc3QgbG9vcGVkSWQgPSAkdGhpcy5hdHRyKCdpZCcpO1xuXHRcdGNvbnN0ICRmaXJzdFNsb3RDcmVhdGVkID0gJGNhcmRQcm9ncmVzc0xpc3RbMF07XG5cblx0XHRpc092ZXJsYXBlZCA9IGlzT3ZlcmxhcGVkID09PSB0cnVlICYmIGNyZWF0ZWRJZCAhPSBsb29wZWRJZCAmJiBjcmVhdGVkSWQgIT0gJGZpcnN0U2xvdENyZWF0ZWQuaWQ7XG5cblx0XHRyZXR1cm4geyAkc2hpZnRDYXJkLCBjcmVhdGVkSWQsIGxvb3BlZElkLCAkZmlyc3RTbG90Q3JlYXRlZCwgaXNPdmVybGFwZWQgfTtcblx0fTtcblxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRzZXRUYWJsZUNhcmRQcm9ncmVzcyhjb25maWcpO1xuXHR9KTtcblxuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdGlmICh3aW5kb3dbY29uZmlnLndpZGdldElkXSkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHdpbmRvd1tjb25maWcud2lkZ2V0SWRdLnJlc2l6ZWRGaW5pc2hlZCk7XG5cdFx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXS5yZXNpemVkRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZXRUYWJsZUNhcmRQcm9ncmVzcyhjb25maWcpO1xuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaGlmdFRhYmxlQ2FyZEhvdmVyICovXG5TYXBwaGlyZVdpZGdldHMuU2hpZnRUYWJsZUNhcmRIb3ZlciA9IHdpZGdldElkID0+IHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJGNhcmQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHRjb25zdCAkY2FyZENvbnRlbnQgPSAkY2FyZC5maW5kKCcuU2hpZnRUYWJsZUNhcmRIb3Zlcl9fQ29udGVudCcpO1xuXG5cdFx0JGNhcmRDb250ZW50Lm9uKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0JGNhcmQuYWRkQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkSG92ZXItLXNlbGVjdGVkJyk7XG5cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IG9uQ2xpY2tPdXRzaWRlID0gZSA9PiB7XG5cdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCRjYXJkKSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjYXJkKS5pcygkY2FyZCkpIHtcblx0XHRcdFx0JGNhcmQucmVtb3ZlQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkSG92ZXItLXNlbGVjdGVkJyk7XG5cblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaWRlTWVudVN0cnVjdHVyZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNsYXNzIFNpZGVNZW51IHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5vbkNvbXBvbmVudEluaXQoKTtcblx0XHR9XG5cblx0XHRzZXRNYWluTWVudVdpZHRoKCkge1xuXHRcdFx0JChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXHRcdFx0XHRjb25zdCAkc2lkZUJhcklmcmFtZSA9ICQoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXIubm90RXhwYW5kYWJsZScpO1xuXG5cdFx0XHRcdGlmICgkc2lkZUJhcklmcmFtZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb25zdCAkbWFpbk1lbnUgPSAkKCcuTGF5b3V0QmFzZS1NYWluTWVudScpO1xuXHRcdFx0XHRcdCRtYWluTWVudS5jc3Moe1xuXHRcdFx0XHRcdFx0d2lkdGg6ICdjYWxjKDEwMCUgLSAyNjJweCknLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRvcGVuQ2xvc2VNZW51KHRvT3Blbikge1xuXHRcdFx0aWYgKHRvT3Blbikge1xuXHRcdFx0XHR0aGlzLiRjb21wb25lbnQuYWRkQ2xhc3MoJ1NpZGVNZW51LS1vcGVuJyk7XG5cblx0XHRcdFx0JCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhcicpLmNzcyh7XG5cdFx0XHRcdFx0ekluZGV4OiAwLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5yZW1vdmVDbGFzcygnU2lkZU1lbnUtLW9wZW4nKTtcblxuXHRcdFx0XHQkKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyJykuY3NzKHtcblx0XHRcdFx0XHR6SW5kZXg6IDcwLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR3aW5kb3dDbGljaygkY29tcG9uZW50KSB7XG5cdFx0XHQkKHdpbmRvdylcblx0XHRcdFx0Lm9mZignY2xpY2suU2lkZU1lbnVTdHJ1Y3R1cmUnKVxuXHRcdFx0XHQub24oJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGlzTWVudUl0ZW0gPSBldmVudC50YXJnZXQub2Zmc2V0UGFyZW50ICYmICQoZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudCkuaGFzQ2xhc3MoJ01lbnVJdGVtJyk7XG5cblx0XHRcdFx0XHRpZiAoIWlzTWVudUl0ZW0pIHtcblx0XHRcdFx0XHRcdCRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdCRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXG5cdFx0XHRcdFx0XHQkKHdpbmRvdykub2ZmKCdjbGljay5TaWRlTWVudVN0cnVjdHVyZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xuXHRcdFx0dGhpcy5zZXRNYWluTWVudVdpZHRoKCk7XG5cblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcblx0XHRcdHRoaXMuJHRyaWdnZXIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UcmlnZ2VyJyk7XG5cdFx0XHR0aGlzLiRzaGllbGQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19TaGllbGQnKTtcblx0XHRcdHRoaXMuJGNsb3NlQnV0dG9uID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUNsb3NlJyk7XG5cdFx0XHR0aGlzLiR0YWJJdGVtID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fVGFiSXRlbXMgLk1lbnVJdGVtJyk7XG5cdFx0XHR0aGlzLiRtZW51SXRlbSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW1fX0l0ZW1UaXRsZScpO1xuXHRcdFx0dGhpcy4kc3ViSXRlbSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW1fc3ViSXRlbXMnKTtcblx0XHRcdHRoaXMuJGRlcGFydG1lbnQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJzIC5EZXBhcnRtZW50TmFtZScpO1xuXG5cdFx0XHQvL3RoaXMuJHRyaWdnZXIuaGlkZSgpO1xuXHRcdFx0dGhpcy4kZGVwYXJ0bWVudC5oaWRlKCk7XG5cblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lciA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuaWZyYW1lQ29udGFpbmVyJyk7XG5cdFx0XHR0aGlzLiRpZnJhbWVDb250YWluZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibGRzLXJpbmcgT0lcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PicpO1xuXHRcdFx0dGhpcy4kaWZyYW1lQ29udGFpbmVyLmZpbmQoJ2lmcmFtZScpLmxvYWQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLiRpZnJhbWVDb250YWluZXIuZmluZCgnLmxkcy1yaW5nJykuZmFkZU91dCgpO1xuXG5cdFx0XHRcdGlmICghdGhpcy4kY29tcG9uZW50Lmhhc0NsYXNzKCdTaWRlTWVudS0tdGFic1RoZW1lJykpIHtcblx0XHRcdFx0XHQvL3RoaXMuJHRyaWdnZXIuc2hvdygpO1xuXHRcdFx0XHRcdHRoaXMuJGRlcGFydG1lbnQuc2hvdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kdHJpZ2dlci5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wZW5DbG9zZU1lbnUodHJ1ZSkpO1xuXHRcdFx0dGhpcy4kc2hpZWxkLm9uKCdjbGljaycsICgpID0+IHRoaXMub3BlbkNsb3NlTWVudShmYWxzZSkpO1xuXHRcdFx0dGhpcy4kY2xvc2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VNZW51KGZhbHNlKSk7XG5cblx0XHRcdHRoaXMuJHRhYkl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0Y29uc3QgJGxpbmsgPSAkdGFyZ2V0LmZpbmQoJy5NZW51SXRlbV9sYWJlbCBhJyk7XG5cblx0XHRcdFx0aWYgKCRsaW5rLmxlbmd0aCkgJGxpbmsuZ2V0KDApLmNsaWNrKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kbWVudUl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRjb25zdCBpc0ljb24gPSBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaWNvbiBpY29uLWNoYW5nZWRvd24nO1xuXHRcdFx0XHRpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmICFpc0ljb24pIHJldHVybjtcblxuXHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKTtcblx0XHRcdFx0Y29uc3QgJHN1Ykl0ZW1zID0gJHRhcmdldC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKTtcblx0XHRcdFx0Y29uc3QgJGxpbmsgPSAkdGFyZ2V0LmZpbmQoJy5NZW51SXRlbV9sYWJlbCBhJyk7XG5cblx0XHRcdFx0aWYgKCRsaW5rLmxlbmd0aCkgJGxpbmsuZ2V0KDApLmNsaWNrKCk7XG5cblx0XHRcdFx0aWYgKCR0YXJnZXQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdFx0JHRhcmdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JHN1Ykl0ZW1zLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy4kY29tcG9uZW50XG5cdFx0XHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLmFjdGl2ZScpXG5cdFx0XHRcdFx0XHQubm90KCR0YXJnZXQpXG5cdFx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHRcdFx0dGhpcy4kY29tcG9uZW50XG5cdFx0XHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLnNob3cnKVxuXHRcdFx0XHRcdFx0Lm5vdCgkdGFyZ2V0KVxuXHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cblx0XHRcdFx0XHQkdGFyZ2V0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkc3ViSXRlbXMudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLiRjb21wb25lbnQuaGFzQ2xhc3MoJ1NpZGVNZW51LS10YWJzVGhlbWUnKSkge1xuXHRcdFx0XHRcdFx0dGhpcy53aW5kb3dDbGljayh0aGlzLiRjb21wb25lbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHN1Ykl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpO1xuXG5cdFx0XHR0aGlzLiRjb21wb25lbnRcblx0XHRcdFx0LmZpbmQoJy5TaWRlTWVudV9fVGFiSXRlbXMgPiBkaXY6ZW1wdHknKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmhpZGUoKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCByZXNpemVUYWJzID0gKCRjb21wb25lbnQsICRtZW51VGFicywgaXNSZWN1cnNpdmUpID0+IHtcblx0XHRjb25zdCAkbWVudVRyaWdnZXIgPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fVHJpZ2dlcicpO1xuXHRcdGNvbnN0IGhlYWRlcldpZHRoID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0hlYWRlcicpLm91dGVyV2lkdGgoKTtcblx0XHRjb25zdCAkbWVudUl0ZW1zID0gJG1lbnVUYWJzLmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJyk7XG5cdFx0Y29uc3QgdGFic1dpZHRoID0gJG1lbnVJdGVtcy5sZW5ndGggPyAkbWVudUl0ZW1zLm91dGVyV2lkdGgoKSA6ICRtZW51VGFicy5vdXRlcldpZHRoKCk7XG5cblx0XHRjb25zdCBmaXhlZFZhbHVlID0gJCh3aW5kb3cucGFyZW50KS53aWR0aCgpIDwgMTAyNCA/IDE4MCA6IDE5Njtcblx0XHRsZXQgaGFzSXRlbVRvUmVtb3ZlID0gdHJ1ZTtcblxuXHRcdGlmICh0YWJzV2lkdGggPiAwICYmIHRhYnNXaWR0aCArIGZpeGVkVmFsdWUgPiBoZWFkZXJXaWR0aCAmJiBoYXNJdGVtVG9SZW1vdmUpIHtcblx0XHRcdGNvbnN0ICRtb3JlT3B0aW9ucyA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19Db250ZW50Jyk7XG5cdFx0XHRjb25zdCAkbGFzdEl0ZW0gPSAkbWVudVRhYnNcblx0XHRcdFx0LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zIC5NZW51SXRlbScpXG5cdFx0XHRcdC5sYXN0KClcblx0XHRcdFx0LmRldGFjaCgpO1xuXG5cdFx0XHRpZiAoISRtb3JlT3B0aW9ucy5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpLmxlbmd0aCkge1xuXHRcdFx0XHQkKCc8ZGl2IGNsYXNzPVwiU2lkZU1lbnVfX01lbnVJdGVtc1wiPjwvZGl2PicpLmFwcGVuZFRvKCRtb3JlT3B0aW9ucyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0ICRtZW51SXRlbXMgPSAkbW9yZU9wdGlvbnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKTtcblx0XHRcdCRsYXN0SXRlbS5wcmVwZW5kVG8oJG1lbnVJdGVtcyk7XG5cblx0XHRcdCRtZW51VHJpZ2dlci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXG5cdFx0XHRoYXNJdGVtVG9SZW1vdmUgPSAhISRsYXN0SXRlbS5sZW5ndGg7XG5cblx0XHRcdHJlc2l6ZVRhYnMoJGNvbXBvbmVudCwgJG1lbnVUYWJzLCAhISRsYXN0SXRlbS5sZW5ndGgpO1xuXHRcdH0gZWxzZSBpZiAoIWlzUmVjdXJzaXZlKSB7XG5cdFx0XHRjb25zdCAkbWVudUl0ZW1zID0gJG1lbnVUYWJzLmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJyk7XG5cdFx0XHRsZXQgJGZpcnN0SXRlbSA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19Db250ZW50IC5TaWRlTWVudV9fTWVudUl0ZW1zIC5NZW51SXRlbScpLmZpcnN0KCk7XG5cblx0XHRcdGNvbnN0IG5ld0xpbmtXaWR0aCA9IDE0MCAqIDEuMTYgKyAxNjsgLy8gRm9udC1zaXplICsgcGFkZGluZyBiZXR3ZWVuIGl0ZW1zIChnYXApXG5cdFx0XHRjb25zdCBuZXdJdGVtc1dpZHRoID0gbmV3TGlua1dpZHRoICsgJG1lbnVJdGVtcy5vdXRlcldpZHRoKCk7XG5cblx0XHRcdGlmIChuZXdJdGVtc1dpZHRoICsgZml4ZWRWYWx1ZSA8IGhlYWRlcldpZHRoKSB7XG5cdFx0XHRcdCRmaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmRldGFjaCgpO1xuXHRcdFx0XHQkZmlyc3RJdGVtLmFwcGVuZFRvKCRtZW51VGFicy5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpKTtcblxuXHRcdFx0XHRpZiAoJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0NvbnRlbnQgLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRtZW51VHJpZ2dlci5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3Qgc2V0VGFic1RoZW1lID0gKCkgPT4ge1xuXHRcdCQodG9wLmRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TaWRlTWVudScsIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQpLmFkZENsYXNzKCdTaWRlTWVudS0tdGFic1RoZW1lJyk7XG5cblx0XHRcdGNvbnN0ICRjb21wb25lbnQgPSAkKCcuU2lkZU1lbnUnLCB3aW5kb3cucGFyZW50LmRvY3VtZW50KTtcblx0XHRcdGNvbnN0ICRtZW51VGFicyA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJzJyk7XG5cblx0XHRcdCRtZW51VGFicy5maW5kKCc+IGRpdjplbXB0eScpLmhpZGUoKTtcblxuXHRcdFx0Y29uc3QgJGl0ZW1zID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpLmRldGFjaCgpO1xuXHRcdFx0JGl0ZW1zLmFwcGVuZFRvKCRtZW51VGFicyk7XG5cblx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNpemVUYWJzKCRjb21wb25lbnQsICRtZW51VGFicywgdHJ1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JCh3aW5kb3cucGFyZW50KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cucmVzaXplZEZpbmlzaGVkKTtcblx0XHRcdFx0d2luZG93LnJlc2l6ZWRGaW5pc2hlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMpO1xuXHRcdFx0XHR9LCAyNTApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBTaWRlTWVudShjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2lkZU1lbnUgPSB7IGNyZWF0ZSwgc2V0VGFic1RoZW1lIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBJU2lkZWJhciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2lkZWJhcihjb25maWcpO1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TaWRlYmFyLndpZGdldElkID0gY29uZmlnLndpZGdldElkO1xuXHR9O1xuXG5cdHZhciBjbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2lkZWJhci53aWRnZXRJZF0uY2xvc2UoKTtcblx0fTtcblxuXHR2YXIgU2lkZWJhciA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5pc0V4cGFuZGFibGUgPSBjb25maWcuaXNFeHBhbmRhYmxlO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiRzaWRlYmFyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhcicpO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1tZW51Jyk7XG5cdFx0dGhpcy4kc2lkZWJhck1lbnVJdGVtID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TaWRlYmFyTWVudUl0ZW0nKTtcblx0XHR0aGlzLiRzaWRlYmFyU2hpZWxkID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1zaGllbGQnKTtcblx0XHR0aGlzLiRzaWRlYmFyQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSVNpZGViYXItY29udGVudCcpO1xuXHRcdHRoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJz4gZGl2JykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdQSCcpICYmICQodGhpcykudGV4dCgpID09PSAnJykge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XG5cdFx0aWYgKCF0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0dGhpcy5vcGVuTWVudUl0ZW0oMCk7XG5cdFx0fVxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIWNvbmZpZy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdFx0JChgLiR7Y29uZmlnLnNlbGVjdGVkVGFifWApLmNsaWNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy5wYXJlbnQuJCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhciAubGRzLXJpbmcnKS5mYWRlT3V0KCk7XG5cblx0XHRcdGlmICghdGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdFx0JCgnaW5wdXRbdHlwZT1cInRleHRcIl06dmlzaWJsZScpXG5cdFx0XHRcdFx0LmVxKDApXG5cdFx0XHRcdFx0LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykudW5sb2FkKGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LnBhcmVudC4kKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyIC5sZHMtcmluZycpLmZhZGVPdXQoKTtcblx0XHR9KTtcblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5hdHRhY2hFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0aWYgKCFfdGhpcy4kc2lkZWJhci5oYXNDbGFzcygnb3BlbicpKSB7XG5cdFx0XHRcdF90aGlzLm9wZW5NZW51SXRlbSgwKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyTWVudUl0ZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZWN0ZWRQb3NpdGlvbiA9ICQodGhpcykuaW5kZXgoKTtcblx0XHRcdF90aGlzLm9wZW5NZW51SXRlbShzZWxlY3RlZFBvc2l0aW9uKTtcblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyU2hpZWxkLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyLm9uKCdjbGljaycsICcuU2VhcmNoU2lkZUJhckZpZWxkcyAuQnV0dG9uR3JvdXBfYnV0dG9uOmZpcnN0LWNoaWxkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy4kc2lkZWJhclxuXHRcdFx0XHQuZmluZCgnLkZpZWxkc1NsaWRlcicpXG5cdFx0XHRcdC5hZGRDbGFzcygnVGFiMScpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnVGFiMicpO1xuXHRcdFx0X3RoaXMuc2V0RmllbGRGb2N1cyhfdGhpcy4kc2lkZWJhckNvbnRlbnQuZmluZCgnLlRleHRJbnB1dDp2aXNpYmxlJykuZXEoMCkpO1xuXHRcdH0pO1xuXHRcdHRoaXMuJHNpZGViYXIub24oJ2NsaWNrJywgJy5TZWFyY2hTaWRlQmFyRmllbGRzIC5CdXR0b25Hcm91cF9idXR0b246bGFzdC1jaGlsZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuJHNpZGViYXJcblx0XHRcdFx0LmZpbmQoJy5GaWVsZHNTbGlkZXInKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1RhYjInKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ1RhYjEnKTtcblx0XHRcdF90aGlzLnNldEZpZWxkRm9jdXMoX3RoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJy5UZXh0SW5wdXQ6dmlzaWJsZScpLmVxKDApKTtcblx0XHR9KTtcblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5vcGVuTWVudUl0ZW0gPSBmdW5jdGlvbihzZWxlY3RlZFBvc2l0aW9uKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRzaWRlYmFyXG5cdFx0XHQuZmluZCgnLlNpZGViYXJNZW51SXRlbScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHQuZXEoc2VsZWN0ZWRQb3NpdGlvbilcblx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0dGhpcy4kc2lkZWJhclxuXHRcdFx0LmZpbmQoJy5JU2lkZWJhci1jb250ZW50ID4gLklTaWRlYmFyLWNvbnRlbnQtcGFuZWwnKVxuXHRcdFx0LmhpZGUoKVxuXHRcdFx0LmVxKHNlbGVjdGVkUG9zaXRpb24pXG5cdFx0XHQuc2hvdygpO1xuXHRcdHRoaXMuJHNpZGViYXIuYWRkQ2xhc3MoJ29wZW4nKTtcblx0XHRpZiAod2luZG93LnBhcmVudC5sZW5ndGggJiYgdGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uub3BlblNpZGViYXJJZnJhbWUoMCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLiRzaWRlYmFyQ29udGVudC5maW5kKCcuVGV4dElucHV0OnZpc2libGUnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnNldEZpZWxkRm9jdXModGhpcy4kc2lkZWJhckNvbnRlbnQuZmluZCgnLlRleHRJbnB1dDp2aXNpYmxlJykuZXEoMCkpO1xuXHRcdH1cblx0XHRpZiAod2luZG93LnBhcmVudC4kKCcuc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKS5sZW5ndGgpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuJCgnLnNlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKS5zZWxlY3QyKCdjbG9zZScpO1xuXHRcdH1cblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5zZXRGaWVsZEZvY3VzID0gZnVuY3Rpb24oJGlucHV0KSB7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQuY2xpY2soKS5zZWxlY3QoKTtcblx0XHR9LCAyNTApO1xuXHR9O1xuXG5cdFNpZGViYXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHRpZiAod2luZG93LnBhcmVudC5sZW5ndGgpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2UuY2xvc2VTaWRlYmFySWZyYW1lKDApO1xuXHRcdH1cblx0XHRpZiAodGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdHRoaXMuJHNpZGViYXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdHRoaXMuJHNpZGViYXIuZmluZCgnLlNpZGViYXJNZW51SXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuJHNpZGViYXIuZmluZCgnLklTaWRlYmFyLWNvbnRlbnQgPiAuSVNpZGViYXItY29udGVudC1wYW5lbCcpLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNpZGViYXIgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0Y2xvc2U6IGNsb3NlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiU2FwcGhpcmVXaWRnZXRzLlNtYWxsQm94U2VsZWN0YWJsZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXG5cdGlmIChjb25maWcuc2VsZWN0T25DbGljaykge1xuXHRcdCRjb21wb25lbnQuY2xpY2soKCkgPT4ge1xuXHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuU21hbGxCb3hMaXN0IC5TbWFsbEJveFNlbGVjdGFibGUnKS5ub3QoJGNvbXBvbmVudCk7XG5cblx0XHRcdCRsaXN0LnJlbW92ZUNsYXNzKCdTbWFsbEJveFNlbGVjdGFibGUtLXNlbGVjdGVkJyk7XG5cdFx0XHQkY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdTbWFsbEJveFNlbGVjdGFibGUtLXNlbGVjdGVkJyk7XG5cdFx0fSk7XG5cdH1cbn07XG4iLCIvKiBDb21wb25lbnQgU3Bpbm5lckhvcml6b250YWwgKi9cclxuU2FwcGhpcmVXaWRnZXRzLlNwaW5uZXJIb3Jpem9udGFsID0ge1xyXG5cdGNyZWF0ZTogY29uZmlnID0+IHtcclxuXHRcdGNvbnN0ICRpbnB1dCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gaW5wdXRgKTtcclxuXHRcdGNvbnN0ICRwbHVzID0gJChgIyR7Y29uZmlnLndpZGdldElkfSBhLlBsdXNgKTtcclxuXHRcdGNvbnN0ICRtaW51cyA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gYS5NaW51c2ApO1xyXG5cclxuXHRcdGxldCB2YWwgPSAkaW5wdXQudmFsKCk7XHJcblxyXG5cdFx0aWYgKHZhbCA8PSArY29uZmlnLm1pblZhbHVlKSB7XHJcblx0XHRcdCRtaW51cy5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0fSBlbHNlIGlmICh2YWwgPj0gK2NvbmZpZy5tYXhWYWx1ZSkge1xyXG5cdFx0XHQkcGx1cy5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRpbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhbCA9IE1hdGguYWJzKHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKSB8fCArY29uZmlnLm1pblZhbHVlKTtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbCA+ICtjb25maWcubWF4VmFsdWUgPyArY29uZmlnLm1heFZhbHVlIDogdmFsIDwgK2NvbmZpZy5taW5WYWx1ZSA/ICtjb25maWcubWluVmFsdWUgOiB2YWw7XHJcblxyXG5cdFx0XHRpZiAodmFsIDw9ICtjb25maWcubWluVmFsdWUpICRtaW51cy5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHRlbHNlICRtaW51cy5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cclxuXHRcdFx0aWYgKHZhbCA+PSArY29uZmlnLm1heFZhbHVlKSAkcGx1cy5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHRlbHNlICRwbHVzLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdGluY3JlbWVudDogZnVuY3Rpb24oZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSkge1xyXG5cdFx0dmFyIF9lbGVtZW50ID0gJChlbGVtZW50SWQpXHJcblx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuXHRcdFx0LmZpcnN0KCk7XHJcblx0XHRpZiAoX2VsZW1lbnQudmFsKCkgPT0gdW5kZWZpbmVkIHx8IF9lbGVtZW50LnZhbCgpID09ICcnIHx8IGlzTmFOKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpKSkge1xyXG5cdFx0XHRfZWxlbWVudC52YWwobWluVmFsdWUpO1xyXG5cdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA8IG1heFZhbHVlKSB7XHJcblx0XHRcdFx0X2VsZW1lbnQudmFsKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpICsgMSk7XHJcblx0XHRcdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkge1xyXG5cdFx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdFx0LmZpbmQoJ2EuTWludXMnKVxyXG5cdFx0XHRcdFx0LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpID49IG1heFZhbHVlKSB7XHJcblx0XHRcdFx0JChlbGVtZW50SWQpXHJcblx0XHRcdFx0XHQuZmluZCgnYS5QbHVzJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRkZWNyZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnRJZCwgbWluVmFsdWUsIHRyaWdnZXJPbkNoYW5nZSkge1xyXG5cdFx0dmFyIF9lbGVtZW50ID0gJChlbGVtZW50SWQpXHJcblx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuXHRcdFx0LmZpcnN0KCk7XHJcblx0XHRpZiAoX2VsZW1lbnQudmFsKCkgPT0gdW5kZWZpbmVkIHx8IF9lbGVtZW50LnZhbCgpID09ICcnIHx8IGlzTmFOKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpKSkge1xyXG5cdFx0XHRfZWxlbWVudC52YWwobWluVmFsdWUpO1xyXG5cdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XHJcblx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA+IG1pblZhbHVlKSB7XHJcblx0XHRcdFx0X2VsZW1lbnQudmFsKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpIC0gMSk7XHJcblx0XHRcdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkge1xyXG5cdFx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCQoZWxlbWVudElkKVxyXG5cdFx0XHRcdFx0LmZpbmQoJ2EuUGx1cycpXHJcblx0XHRcdFx0XHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkgPD0gbWluVmFsdWUpIHtcclxuXHRcdFx0XHQkKGVsZW1lbnRJZClcclxuXHRcdFx0XHRcdC5maW5kKCdhLk1pbnVzJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxufTtcclxuIiwiLyogQ29tcG9uZW50IFNwaW5uZXJWZXJ0aWNhbCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdGNvbnN0ICRtaW51c1ZlcnRpY2FsID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApLmZpbmQoJy5NaW51c1ZlcnRpY2FsJyk7XG5cdFx0XHRjb25zdCAkaW5wdXRTcGlubmVyID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuU3Bpbm5lcklucHV0VmVydGljYWwgaW5wdXRgKTtcblxuXHRcdFx0JGlucHV0U3Bpbm5lci5vbignYmx1ciBrZXl1cCBpbnB1dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRJbnB1dFZhbHVlID0gJGlucHV0U3Bpbm5lci52YWwoKTtcblxuXHRcdFx0XHRpZiAoY29uZmlnLm51bWJlckxpc3QgJiYgZXZlbnQudHlwZSA9PT0gJ2JsdXInKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5wdXRWYWx1ZUludCA9IHBhcnNlSW50KGN1cnJlbnRJbnB1dFZhbHVlKTtcblx0XHRcdFx0XHRjb25zdCBhcnJheVRvU3BpbiA9IGNvbmZpZy5udW1iZXJMaXN0O1xuXHRcdFx0XHRcdGNvbnN0ICRlcnJvck1lc3NhZ2UgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9IC5TcGlubmVyRXJyb3JNZXNzYWdlYCk7XG5cblx0XHRcdFx0XHQkZXJyb3JNZXNzYWdlLmNzcygnZGlzcGxheScsIGFycmF5VG9TcGluLmluZGV4T2YoaW5wdXRWYWx1ZUludCkgPT09IC0xID8gJ2Jsb2NrJyA6ICdub25lJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY3VycmVudElucHV0VmFsdWUgPCBjb25maWcubWluVmFsdWUpICRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdFx0ZWxzZSAkbWludXNWZXJ0aWNhbC5yZW1vdmVDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCRpbnB1dFNwaW5uZXIudmFsKCkgPD0gY29uZmlnLm1pblZhbHVlKSB7XG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZy5udW1iZXJMaXN0ICYmICRpbnB1dFNwaW5uZXIudmFsKCkgPT09ICcnKSB7XG5cdFx0XHRcdGxldCBjdXJyZW50TnVtYmVyID0gMDtcblx0XHRcdFx0Y29uc3QgYXJyYXlUb1NwaW4gPSBjb25maWcubnVtYmVyTGlzdC5zcGxpdCgnLCcpO1xuXG5cdFx0XHRcdCRpbnB1dFNwaW5uZXIudmFsKGFycmF5VG9TcGluW2N1cnJlbnROdW1iZXJdKTtcblx0XHRcdFx0JG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnLmlzQ3Vyc29yT25Gb2N1cykge1xuXHRcdFx0XHQkKCdib2R5Jykub24oJ2ZvY3VzJywgYCMke2NvbmZpZy5pbnB1dElEfSBpbnB1dGAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR0aGF0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHR2YXIgdmFsID0gdGhhdC52YWx1ZTtcblx0XHRcdFx0XHRcdHRoYXQudmFsdWUgPSAnJztcblx0XHRcdFx0XHRcdHRoYXQudmFsdWUgPSB2YWw7XG5cdFx0XHRcdFx0fSwgMSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnLmlzSW5wdXRFbXB0eSkge1xuXHRcdFx0XHQkaW5wdXRTcGlubmVyLmF0dHIoJ3ZhbHVlJywgJycpO1xuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaW5jcmVtZW50ID0gKGVsZW1lbnRJZCwgbWluVmFsdWUsIG1heFZhbHVlLCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0LCBsaXN0VG9zcGluID0gW10pID0+IHtcblx0XHRjb25zdCAkc3Bpbm5lciA9ICQoZWxlbWVudElkKTtcblx0XHRsZXQgJGlucHV0ID0gJHNwaW5uZXIuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKS5maXJzdCgpO1xuXG5cdFx0dmFyIGZvcmNlSW50ZWdlciA9ICQoZWxlbWVudElkKS5kYXRhKCdmb3JjZWludGVnZXInKSA9PT0gJ1RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHZhciBjdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSk7XG5cdFx0dmFyIGluY3JlbWVudFVuaXQgPSAxO1xuXHRcdHZhciBpc0RlY2ltYWxzID0gY3VycmVudFZhbHVlICUgMSAhPSAwO1xuXHRcdHZhciBhcnJheXRvc3BpbiA9IGxpc3RUb3NwaW47XG5cblx0XHRjb25zdCAkbWludXNWZXJ0aWNhbCA9ICQoZWxlbWVudElkKS5maW5kKCcuTWludXNWZXJ0aWNhbCcpO1xuXHRcdGNvbnN0ICRwbHVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLlBsdXNWZXJ0aWNhbCcpO1xuXG5cdFx0JG1pbnVzVmVydGljYWwucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXG5cdFx0aWYgKGFycmF5dG9zcGluLmxlbmd0aCkge1xuXHRcdFx0dmFyIGN1cnJlbnRQb3NpdGlvbiA9IGFycmF5dG9zcGluLmluZGV4T2YocGFyc2VJbnQoJGlucHV0LnZhbCgpKSk7XG5cdFx0XHR2YXIgbWF4aW11bVRvU3BpbiA9IGFycmF5dG9zcGluLmxhc3RJbmRleE9mKGFycmF5dG9zcGluLnNsaWNlKC0xKVswXSk7XG5cblx0XHRcdCRwbHVzVmVydGljYWwucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXG5cdFx0XHRpZiAobWF4aW11bVRvU3BpbiAtIDEgPT09IGN1cnJlbnRQb3NpdGlvbikge1xuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gKyAxO1xuXHRcdFx0XHQkaW5wdXQudmFsKGFycmF5dG9zcGluW2N1cnJlbnRQb3NpdGlvbl0pO1xuXG5cdFx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpICRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdFx0aWYgKHRyaWdnZXJPbklucHV0KSAkaW5wdXQudHJpZ2dlcignaW5wdXQnKTtcblx0XHRcdH0gZWxzZSBpZiAobWF4aW11bVRvU3BpbiA9PT0gY3VycmVudFBvc2l0aW9uKSB7XG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbiAlIG1heGltdW1Ub1NwaW47XG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bY3VycmVudFBvc2l0aW9uXSk7XG5cblx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID0gKGN1cnJlbnRQb3NpdGlvbiArIDEpICUgbWF4aW11bVRvU3Bpbjtcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpbltjdXJyZW50UG9zaXRpb25dKTtcblxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjdXJyZW50UG9zaXRpb24gPT09IG1heGltdW1Ub1NwaW4pICRwbHVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0aWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gMCkgJG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXG5cdFx0XHQkc3Bpbm5lci5maW5kKCcuU3Bpbm5lckVycm9yTWVzc2FnZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkgPCBtaW5WYWx1ZSkge1xuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5yZW1vdmVDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZm9yY2VJbnRlZ2VyICYmIGlzRGVjaW1hbHMpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XG5cblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50VmFsdWUgPT09ICcnIHx8IGlzTmFOKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSkpIHtcblx0XHRcdFx0JGlucHV0LnZhbChtaW5WYWx1ZSk7XG5cblx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSA8IG1heFZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PT0gMCAmJiAhZm9yY2VJbnRlZ2VyKSBpbmNyZW1lbnRVbml0ID0gcGFyc2VGbG9hdCgwLjEpO1xuXG5cdFx0XHRcdFx0JGlucHV0LnZhbChwYXJzZUZsb2F0KChjdXJyZW50VmFsdWUgKyBpbmNyZW1lbnRVbml0KS50b0ZpeGVkKDEpKSk7XG5cblx0XHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cblx0XHRcdFx0XHQkbWludXNWZXJ0aWNhbC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRwbHVzVmVydGljYWwuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjaGVja0Rpc2FibGVkU3RhdHVzKGVsZW1lbnRJZCwgcGFyc2VGbG9hdCgkaW5wdXQudmFsKCkpLCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBkZWNyZW1lbnQgPSAoZWxlbWVudElkLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQsIGxpc3RUb3NwaW4gPSBbXSkgPT4ge1xuXHRcdGNvbnN0ICRzcGlubmVyID0gJChlbGVtZW50SWQpO1xuXHRcdGNvbnN0ICRpbnB1dCA9ICRzcGlubmVyLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdJykuZmlyc3QoKTtcblxuXHRcdGxldCBmb3JjZUludGVnZXIgPSAkKGVsZW1lbnRJZCkuZGF0YSgnZm9yY2VpbnRlZ2VyJykgPT09ICdUcnVlJyA/IHRydWUgOiBmYWxzZTtcblx0XHRsZXQgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdCgkaW5wdXQudmFsKCkpO1xuXHRcdGxldCBpbmNyZW1lbnRVbml0ID0gMTtcblx0XHRsZXQgaXNEZWNpbWFscyA9IGN1cnJlbnRWYWx1ZSAlIDEgIT0gMDtcblx0XHRsZXQgYXJyYXl0b3NwaW4gPSBsaXN0VG9zcGluO1xuXG5cdFx0Y29uc3QgJG1pbnVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLk1pbnVzVmVydGljYWwnKTtcblx0XHRjb25zdCAkcGx1c1ZlcnRpY2FsID0gJChlbGVtZW50SWQpLmZpbmQoJy5QbHVzVmVydGljYWwnKTtcblxuXHRcdGlmIChhcnJheXRvc3Bpbi5sZW5ndGgpIHtcblx0XHRcdGxldCBjdXJyZW50UG9zaXRpb24gPSBhcnJheXRvc3Bpbi5pbmRleE9mKHBhcnNlSW50KCRpbnB1dC52YWwoKSkpO1xuXHRcdFx0bGV0IG1heGltdW1Ub1NwaW4gPSBhcnJheXRvc3Bpbi5sYXN0SW5kZXhPZihhcnJheXRvc3Bpbi5zbGljZSgtMSlbMF0pO1xuXG5cdFx0XHRpZiAoY3VycmVudFBvc2l0aW9uID09IDApIHtcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpblttYXhpbXVtVG9TcGluXSk7XG5cblx0XHRcdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkgJGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRpZiAodHJpZ2dlck9uSW5wdXQpICRpbnB1dC50cmlnZ2VyKCdpbnB1dCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID0gKGN1cnJlbnRQb3NpdGlvbiAtIDEpICUgbWF4aW11bVRvU3Bpbjtcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpbltjdXJyZW50UG9zaXRpb25dKTtcblxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cdFx0XHR9XG5cblx0XHRcdCRzcGlubmVyLmZpbmQoJy5TcGlubmVyRXJyb3JNZXNzYWdlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFmb3JjZUludGVnZXIgJiYgaXNEZWNpbWFscykgaW5jcmVtZW50VW5pdCA9IHBhcnNlRmxvYXQoMC4xKTtcblxuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRWYWx1ZSA9PT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpKSkge1xuXHRcdFx0XHQkaW5wdXQudmFsKG1pblZhbHVlKTtcblxuXHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpID4gbWluVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSAxICYmICFmb3JjZUludGVnZXIpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XG5cblx0XHRcdFx0XHQkaW5wdXQudmFsKHBhcnNlRmxvYXQoKGN1cnJlbnRWYWx1ZSAtIGluY3JlbWVudFVuaXQpLnRvRml4ZWQoMSkpKTtcblxuXHRcdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcblxuXHRcdFx0XHRcdCRwbHVzVmVydGljYWwucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkbWludXNWZXJ0aWNhbC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNoZWNrRGlzYWJsZWRTdGF0dXMoZWxlbWVudElkLCBwYXJzZUZsb2F0KCRpbnB1dC52YWwoKSksIG1pblZhbHVlLCBtYXhWYWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHRyaWdnZXJFdmVudHMgPSAoaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpID0+IHtcblx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSBpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRpZiAodHJpZ2dlck9uSW5wdXQpIGlucHV0LnRyaWdnZXIoJ2lucHV0Jyk7XG5cdH07XG5cblx0Y29uc3QgY2hlY2tEaXNhYmxlZFN0YXR1cyA9IChlbGVtZW50SWQsIHZhbHVlVG9DaGVjaywgbWluVmFsdWUsIG1heFZhbHVlKSA9PiB7XG5cdFx0aWYgKHZhbHVlVG9DaGVjayA8PSBtaW5WYWx1ZSkge1xuXHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdC5maW5kKCdhLk1pbnVzVmVydGljYWwnKVxuXHRcdFx0XHQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdC5maW5kKCdhLk1pbnVzVmVydGljYWwnKVxuXHRcdFx0XHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlVG9DaGVjayA+PSBtYXhWYWx1ZSkge1xuXHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdC5maW5kKCdhLlBsdXNWZXJ0aWNhbCcpXG5cdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKGVsZW1lbnRJZClcblx0XHRcdFx0LmZpbmQoJ2EuUGx1c1ZlcnRpY2FsJylcblx0XHRcdFx0LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TcGlubmVyVmVydGljYWwgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdGluY3JlbWVudCxcblx0XHRkZWNyZW1lbnQsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgU3BsaXRCdXR0b24gKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IFNwbGl0QnV0dG9uKGNvbmZpZyk7XHJcblx0fTtcclxuXHJcblx0dmFyIFNwbGl0QnV0dG9uID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIHRoaXMuY29uZmlnLndpZGdldElkKTtcclxuXHRcdHRoaXMuJGJ1dHRvbiA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYnV0dG9uJyk7XHJcblx0XHR0aGlzLiRidXR0b25MaW5rID0gdGhpcy4kYnV0dG9uLmZpbmQoJz4gYScpO1xyXG5cdFx0dGhpcy4kdHJpZ2dlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tdHJpZ2dlcicpO1xyXG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU3BsaXRCdXR0b24tYWN0aW9ucycpO1xyXG5cdFx0aWYgKCEhdGhpcy4kYWN0aW9ucy50ZXh0KCkpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJz4gLlNwbGl0QnV0dG9uJykuYWRkQ2xhc3MoJ2hhc1RyaWdnZXInKTtcclxuXHRcdFx0dGhpcy5idWlsZEFjdGlvbnNUcmlnZ2VyKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U3BsaXRCdXR0b24ucHJvdG90eXBlLmJ1aWxkQWN0aW9uc1RyaWdnZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR2YXIgY2xhc3NMaXN0ID0gdGhpcy4kYnV0dG9uTGlua1swXS5jbGFzc0xpc3QudmFsdWU7XHJcblx0XHR0aGlzLiR0cmlnZ2VyLmFkZENsYXNzKGNsYXNzTGlzdCk7XHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBpbnNpZGUgYSBkb2N1bWVudCByZWFkeSBkdWUgdG8gc2FwcGhpcmUgcG9wdXAgYmluZGVkIGV2ZW50c1xyXG5cdFx0XHRpZiAoIV90aGlzLiR0cmlnZ2VyLmhhc0NsYXNzKCd0b29sdGlwc3RlcmVkJykpIHtcclxuXHRcdFx0XHRfdGhpcy4kdHJpZ2dlci50b29sdGlwc3Rlcih7XHJcblx0XHRcdFx0XHRhcnJvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICQoJzxzZWN0aW9uLz4nKS5hcHBlbmQoX3RoaXMuJGFjdGlvbnMuY2xvbmUodHJ1ZSkpLFxyXG5cdFx0XHRcdFx0dHJpZ2dlcjogX3RoaXMuY29uZmlnLnRyaWdnZXJFdmVudCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBfdGhpcy5jb25maWcucG9zaXRpb24sXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogX3RoaXMuY29uZmlnLm1heFdpZHRoLFxyXG5cdFx0XHRcdFx0dGhlbWU6ICd0b29sdGlwc3Rlci1zcGxpdGJ1dHRvbiBQYWRkaW5nLScgKyBfdGhpcy5jb25maWcucGFkZGluZyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRfdGhpcy4kYWN0aW9ucy5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlNwbGl0QnV0dG9uID0ge1xyXG5cdFx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCJ2YXIgbWlsaXNlY29uZHBhc3NlZCA9IDA7XHJcbnZhciBzdG9wdGltZXIgPSB0cnVlO1xyXG52YXIgbXlUaW1vdXQgID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIG9uS2V5ZG93bkZ1bmN0aW9uKCkge1xyXG4gICAgbWlsaXNlY29uZHBhc3NlZCA9IDA7XHJcbiAgXHJcbiAgICBzdG9wdGltZXI9dHJ1ZTtcclxuICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgbXlUaW1vdXQgPSBudWxsO1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gb25LZXlVcEZ1bmN0aW9uKGVsZW1lbnRUb0NsaWNrKSB7XHJcbiAgc3RvcHRpbWVyID0gZmFsc2U7XHJcbiAgXHJcbiAgaWYobWlsaXNlY29uZHBhc3NlZCA9PSAwICYmIG15VGltb3V0PT1udWxsKXtcclxuICAgICAgbXlUaW1vdXQgPSBzZXRJbnRlcnZhbChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIG1pbGlzZWNvbmRwYXNzZWQrPTEwMDtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBpZiAobWlsaXNlY29uZHBhc3NlZCA+PSA0MDAgJiYgc3RvcHRpbWVyPT1mYWxzZSkge1xyXG4gICAgICAgICAgICBtaWxpc2Vjb25kcGFzc2VkID0gMDtcclxuICAgICAgICAgICAgc3RvcHRpbWVyPXRydWU7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0NsaWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xyXG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBpZihzdG9wdGltZXI9PXRydWUpe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15VGltb3V0KTtcclxuICAgICAgICAgICAgbXlUaW1vdXQgPSBudWxsO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufTtcclxuXHJcbmlmKHR5cGVvZihzc2RDb21wb25lbnQpID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgIHNzZENvbXBvbmVudCA9IHtcclxuICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgbnVtYmVyT2ZBY3RpdmU6IDAsXHJcbiAgICAgICAgaXNSVEw6IGZhbHNlLFxyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICB0b0Rlc3Ryb3k6IGZhbHNlLFxyXG4gICAgICAgIG9uQmx1ckRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc3NkQ29tcG9uZW50LmlkICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9ICQoJyMnICsgc3NkQ29tcG9uZW50LmlkKTtcclxuICAgICAgICAgICAgICAgIHZhciBfd3JhcHBlciA9ICQoJ1tkYXRhLXNzZC1wbGFjZWhvbGRlcj0nICsgc3NkQ29tcG9uZW50LmlkICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGlmIChzc2RDb21wb25lbnQudG9EZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3dyYXBwZXIuZmluZCgnLlNTRExpc3RSZWZyZXNoSGFuZGxlcicpLmZpbmQoJ2EudG8tZGVzdHJveScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3dyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnW2RhdGEtc3NkLXBsYWNlaG9sZGVyPScgKyBzc2RDb21wb25lbnQuaWQgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50V2lkZ2V0KSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50V2lkZ2V0ID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmNoaWxkcmVuKCdkaXYuU1NELVdyYXBwZXI6bm90KC5TZWxlY3RlZCknKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjsgLy9JZiB0aGlzIFNTRC1XcmFwcGVyIGlzIGFscmVhZHkgU2VsZWN0ZWQsIHJldHVybi5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5ibHVyKCk7IC8vQmx1cnMgdGhlIG90aGVyIGZvY3VzZWQgU1NEJ3MuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUrKztcclxuICAgICAgICAgICAgaWYoIV9zc2RDb21wb25lbnRXaWRnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ1NTRFBvcHVwJykpe1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5pc1JUTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHdpbmRvdykud2lkdGgoKSAtICQodGhpcykub3V0ZXJXaWR0aCgpIC0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5TU0QtQmFyJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5TU0QtTGlzdCcpLmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCcuU1NELUJhcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuU1NELUxpc3QnKS5hdHRyKCdjdXJyZW50LWZvY3VzJywgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdTU0RQb3B1cCcpKXtcclxuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnRXaWRnZXQuY2xvc2VzdCgnZm9ybScpLmFwcGVuZChfc3NkQ29tcG9uZW50V2lkZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50V2lkZ2V0LmFkZENsYXNzKCdQb3NpdGlvbmVkJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudFdpZGdldC5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICwgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJsdXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZighc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlBvc2l0aW9uZWQuU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF93cmFwcGVyLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtc3NkLXBsYWNlaG9sZGVyJykpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZCgkKHRoaXMpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfd3JhcHBlci5yZW1vdmVDbGFzcygnUG9zaXRpb25lZCcpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1Db21wb25lbnQnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogJydcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ1NlYXJjaGluZyBGaXhlZCBLZXlib2FyZE5hdicpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1CYXInKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5TU0QtQmFyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYnNDbGVhcih0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICwgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZS0tO1xyXG4gICAgICAgICAgICAkKFwiLlNTRF9MaXN0UmVjb3JkcyBzcGFuLCAuU1NEX0xpc3RMaW5lLlNob3dNb3JlLCAuU1NEX0RlbGV0ZU9uQmx1clwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCFzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vSWYgdGhlcmUncyBubyBTU0QgYWN0aXZlLCB0aGVyZSdzIG5vIG5lZWQgdG8gcmVzaXplIGl0LlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIF9zc2RXcmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnRXaWRnZXQgPSAkKCcjJyArIF9zc2RXcmFwcGVyLmF0dHIoJ2RhdGEtc3NkLXBsYWNlaG9sZGVyJykpWzBdO1xyXG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9IF9zc2RXcmFwcGVyLmNoaWxkcmVuKCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChfc3NkQ29tcG9uZW50V2lkZ2V0KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0vKixcclxuICAgICAgICAgICAgICAgICAgICAndG9wJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3NkQ29tcG9uZW50LmlzUlRMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdyaWdodCc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh3aW5kb3cpLndpZHRoKCkgLSAkKF9zc2RDb21wb25lbnRXaWRnZXQpLm91dGVyV2lkdGgoKSAtIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgIH0pLmNoaWxkcmVuKCcuU1NELUJhcicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmNsb3Nlc3QoJy5TU0QtQ29tcG9uZW50JykuaW5uZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YWJTZWxlY3Q6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCwgc3NkQmFyLCBzZWxlY3RlZFRhYiwgaXNJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfc2VsZWN0ZWRUYWIgPSAkKHNlbGVjdGVkVGFiKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuZm9jdXMoc3NkQ29tcG9uZW50V2lkZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIV9zZWxlY3RlZFRhYi5pcygnLlNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC50YWJzQ2xlYXIoc3NkQmFyKTtcclxuICAgICAgICAgICAgICAgIF9zZWxlY3RlZFRhYi5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzU2VsZWN0ZWRUYWIoc3NkQmFyLGlzSW5wdXRFdmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1c1NlbGVjdGVkVGFiOiBmdW5jdGlvbihzc2RCYXIsaXNJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFNlbGVjdGVkIHRhYiBpcyB0aGUgU2VhcmNoIGlucHV0P1xyXG4gICAgICAgICAgICBpZihzc2RCYXIuY2hpbGRyZW4oJy5TZWFyY2hJbnB1dC1Db250YWluZXIuU2VsZWN0ZWQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50VG9DbGljayA9IHNzZEJhci5zaWJsaW5ncygnLlNTRExpc3RSZWZyZXNoSGFuZGxlcicpLmZpbmQoJ2E6bm90KC50by1kZXN0cm95KScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpc0lucHV0RXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXBGdW5jdGlvbihlbGVtZW50VG9DbGljayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb0NsaWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLklucHV0UGxhY2Vob2xkZXIgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KDpmb2N1cyknKS5maXJzdCgpLnNlbGVjdCgpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNlbGVjdGVkIHRhYiBpcyB0aGUgU2hvcnQgbGlzdD9cclxuICAgICAgICAgICAgaWYoc3NkQmFyLmNoaWxkcmVuKCcuU2hvcnRMaXN0U2VsZWN0b3ItQ29udGFpbmVyLlNlbGVjdGVkJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLlNob3J0TGlzdFNlbGVjdG9yLUNvbnRhaW5lciA+IGEnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIE1ldGhvZCBiZWluZyBjYWxsZWQgYnkgdXNlciBhY3Rpb24ganNfc3NkQ29tcG9uZW50X2ZvY3VzQ3VycmVudFJvd1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZvY3VzQ3VycmVudFJvdzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RMaXN0ID0gX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUxpc3QnKTtcclxuICAgICAgICAgICAgdmFyIF9jdXJyZW50Rm9jdXMgPSBfc3NkTGlzdC5hdHRyKCdjdXJyZW50LWZvY3VzJyk7XHJcblxyXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpO1xyXG4gICAgICAgICAgICBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bnRoLWNoaWxkKCcgKyBfY3VycmVudEZvY3VzICsgJyknKS5hZGRDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYnNDbGVhcjogZnVuY3Rpb24oc3NkQmFyKSB7XHJcbiAgICAgICAgICAgICQoc3NkQmFyKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoSWNvbjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LnRhYlNlbGVjdChldmVudC5kYXRhLnNzZENvbXBvbmVudFdpZGdldCwgZXZlbnQuZGF0YS5zc2RCYXIsICQoZXZlbnQuZGF0YS5zc2RCYXIpLmNoaWxkcmVuKCcuU2VhcmNoSW5wdXQtQ29udGFpbmVyJyksZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBAbmFtZSBpbnB1dEV2ZW50XHJcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlucHV0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfaW5wdXRDb250YWluZXIgPSAkKGV2ZW50LmRhdGEuaW5wdXQpLmNsb3Nlc3QoJy5TZWFyY2hJbnB1dC1Db250YWluZXInKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC50YWJTZWxlY3QoZXZlbnQuZGF0YS5zc2RDb21wb25lbnRXaWRnZXQsIGV2ZW50LmRhdGEuc3NkQmFyLCBfaW5wdXRDb250YWluZXIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigkKGV2ZW50LmRhdGEuaW5wdXQpLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBfaW5wdXRDb250YWluZXIuY2xvc2VzdCgnLlNTRC1Db21wb25lbnQnKS5yZW1vdmVDbGFzcygnU2VhcmNoaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfaW5wdXRDb250YWluZXIuY2xvc2VzdCgnLlNTRC1Db21wb25lbnQnKS5hZGRDbGFzcygnU2VhcmNoaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleWRvd25FdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICBvbktleWRvd25GdW5jdGlvbigpOyAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5Ym9hcmRIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJTaGlmdFwiIHx8IGV2ZW50LmtleSA9PSBcIkNvbnRyb2xcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zc2RMaXN0ID0gX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUxpc3QnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkVudGVyXCIgJiYgX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIlRhYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd1VwXCIgfHwgZXZlbnQua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuYXR0cignY3VycmVudC1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9zZWxlY3RlZEVsZW1lbnQgPSAkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoX2N1cnJlbnRGb2N1cyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOm50aC1jaGlsZCgnICsgX2N1cnJlbnRGb2N1cyArICcpJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQuYWRkQ2xhc3MoJ0tleWJvYXJkTmF2JylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoX3NlbGVjdGVkRWxlbWVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQuaXMoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudC5yZW1vdmVDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJykucHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfc2VsZWN0ZWRFbGVtZW50LmlzKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gJChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc2VsZWN0ZWRFbGVtZW50LnJlbW92ZUNsYXNzKCdmb2N1cycpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoICYmIF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOmZpcnN0LWNoaWxkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudC5hZGRDbGFzcygnZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmZvY3VzU2VsZWN0ZWRUYWIoX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUJhcicpLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudEZvY3VzID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFfc2VsZWN0ZWRFbGVtZW50LmZpbmQoJy5TU0RfTGlzdExpbmUuRGlzYWJsZWQnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQuZmluZCgnLkV4cGFuZENvbnRyb2wgPiBhJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RMaXN0LmZpbmQoJ2EuT3RoZXJDb250cm9sTGluaycpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCBfY3VycmVudEZvY3VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5jbGVhcktleWJvYXJkTmF2U3RhdHVzKF9zc2RDb21wb25lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJLZXlib2FyZE5hdlN0YXR1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJChzc2RDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB2YXIgX3NzZExpc3QgPSBfc3NkQ29tcG9uZW50LmZpbmQoJy5TU0QtTGlzdCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0tleWJvYXJkTmF2Jyk7XHJcbiAgICAgICAgICAgIF9zc2RMaXN0LmF0dHIoJ2N1cnJlbnQtZm9jdXMnLCAwKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ3NwYW4uU1NEX0xpc3RSZWNvcmRzID4gc3Bhbi5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLkV4cGFuZENvbnRyb2wgPiBhJykuYmx1cigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYoTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSA8PSAxMDI0KXtcclxuICAgICAgICAgICAgICAgIGlmKF9zc2RDb21wb25lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gJChcIi50b29sYmFyLXdyYXBwZXIuRml4ZWRcIikub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLlNTRC1XcmFwcGVyLlNlbGVjdGVkID4gLlNTRC1Db21wb25lbnQuRml4ZWQgPiAuU1NELUJhcicpLmNzcygndG9wJywgJChcIi50b29sYmFyLXdyYXBwZXIuRml4ZWRcIikub3V0ZXJIZWlnaHQoKSArICdweCcpOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvKk5vdCBNb2JpbGUgYXBwbHkgZml4ZWQgYmVoYXZpb3VyKi9cclxuICAgICAgICAgICAgICAgIGlmKF9zc2RDb21wb25lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gKCQoJy5Ub3BQYXRpZW50SGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKCcuSGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKFwiLnRvb2xiYXItd3JhcHBlclwiKS5vdXRlckhlaWdodCgpKyAkKCcuQ1RUQVNMZXZlbEFzc2Vzc21lbnRNYWluQ29udGFpbmVyJykub3V0ZXJIZWlnaHQodHJ1ZSkgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ0ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLlNTRC1XcmFwcGVyLlNlbGVjdGVkID4gLlNTRC1Db21wb25lbnQuRml4ZWQgPiAuU1NELUJhcicpLmNzcygndG9wJywoJCgnLlRvcFBhdGllbnRIZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoJy5IZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSArICQoXCIudG9vbGJhci13cmFwcGVyXCIpLm91dGVySGVpZ2h0KCkgKyAkKCcuQ1RUQVNMZXZlbEFzc2Vzc21lbnRNYWluQ29udGFpbmVyJykub3V0ZXJIZWlnaHQodHJ1ZSkpICsgJ3B4Jyk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgX3NzZENvbXBvbmVudC5hZGRDbGFzcygnRml4ZWQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKF9pbnB1dElkKSB7IC8qIFVzZWQgdG8gZGVzdHJveSBhIHNwZWNpZmljIHNzZCBjb21wb25lbnQgYnkgcmVjZWl2ZSB0aGUgaW5wdXQgaWRlbnRpZmllciBhcyBwYXJhbWV0ZXIgYW5kIGRldGVybWluZSB0aGUgd3JhcHBlciB0byByZW1vdmUuICovXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXNzZC1wbGFjZWhvbGRlcj0nICsgc3NkQ29tcG9uZW50LmlkICsgJ10nKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCxfdG9EZXN0cm95KSB7XHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5sZW5ndGgrKztcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlID0gMDtcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlzUlRMID0gJCgnaHRtbCcpLmlzKCcucnRsJyk7XHJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC50b0Rlc3Ryb3kgPSBfdG9EZXN0cm95O1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNzZENvbXBvbmVudFdpZGdldCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlkID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnRXaWRnZXQgPSAkKHNzZENvbXBvbmVudFdpZGdldCk7XHJcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gX3NzZENvbXBvbmVudFdpZGdldC5maW5kKCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgICAgICB2YXIgX3NzZEJhciA9IF9zc2RDb21wb25lbnQuY2hpbGRyZW4oJy5TU0QtQmFyJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9zZWFyY2hJY29uID0gX3NzZEJhci5maW5kKCcuU2VhcmNoSWNvbicpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIHZhciBfaW5wdXQgPSBfc3NkQmFyLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgdmFyIF9jbGVhckNvbnRyb2wgPSBfc3NkQmFyLmZpbmQoJy5DbGVhckNvbnRyb2wnKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX3NlYXJjaEljb24ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcclxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhclxyXG4gICAgICAgICAgICB9LCBzc2RDb21wb25lbnQuc2VhcmNoSWNvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfc3NkQmFyLmNoaWxkcmVuKCdkaXYnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50V2lkZ2V0OiBfc3NkQ29tcG9uZW50V2lkZ2V0LFxyXG4gICAgICAgICAgICAgICAgc3NkQmFyOiBfc3NkQmFyXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQudGFiU2VsZWN0KGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50V2lkZ2V0LCBldmVudC5kYXRhLnNzZEJhciwgdGhpcyxmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX2NsZWFyQ29udHJvbC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3kpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX2lucHV0Lm9mZigna2V5dXAnKS5vbigna2V5dXAnLCB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnRXaWRnZXQ6IF9zc2RDb21wb25lbnRXaWRnZXQsXHJcbiAgICAgICAgICAgICAgICBzc2RCYXI6IF9zc2RCYXIsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogX2lucHV0XHJcbiAgICAgICAgICAgIH0sIHNzZENvbXBvbmVudC5pbnB1dEV2ZW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF9pbnB1dC5vZmYoJ2tleWRvd24nKS5vbigna2V5ZG93bicsIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcclxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhcixcclxuICAgICAgICAgICAgICAgIGlucHV0OiBfaW5wdXRcclxuICAgICAgICAgICAgfSwgc3NkQ29tcG9uZW50LmtleWRvd25FdmVudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKF9zc2RDb21wb25lbnQpLm9mZignY2xpY2snKS5vbignY2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQ6IF9zc2RDb21wb25lbnRcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5jbGVhcktleWJvYXJkTmF2U3RhdHVzKGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBzc2RDb21wb25lbnQucmVzaXplKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZighJChldmVudC50YXJnZXQpLmlzKCc6dmlzaWJsZScpKSB7IC8qIENsaWNrcyBvbiBoaWRkZW4gZWxlbWVudHMgYXJlIGRpc21pc3NlZC4gKi9cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgZSA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuU1NELUNvbXBvbmVudCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFlLmxlbmd0aCkgeyAvLyBVc2VyIGNsaWNrZWQgb3V0c2lkZSB0aGUgU1NELUNvbXBvbmVudD9cclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBcIjI3XCIpIHsgLy8gVXNlciBoaXQgRXNjYXBlXHJcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQub25CbHVyRGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkFycm93VXBcIiB8fCBldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmKHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSA+IDApIHsgLy8gSWYgdGhlcmUncyBhbiBTU0QgY29tcG9uZW50IGFjdGl2ZSwgZ28gZm9yIEtleWJvYXJkIGhhbmRsZXJcclxuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmtleWJvYXJkSGFuZGxlcihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUgPiAwKSB7IC8vIElmIHRoZXJlJ3MgYW4gU1NEIGNvbXBvbmVudCBhY3RpdmUsIGdvIGZvciBzY3JvbGwgaGFuZGxlclxyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQuc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiLyogQ29tcG9uZW50IFNTRExpc3RMaW5lICovXG5TYXBwaGlyZVdpZGdldHMuU1NETGlzdExpbmUgPSB7XG5cdHRvZ2dsZTogKGxpbmVJZCwgbGluZUhhbmRsZXIgPSAnJykgPT4ge1xuXHRcdHZhciBfbGluZSA9ICQobGluZUlkKS5pcygnLlNTRF9MaXN0TGluZScpXG5cdFx0XHQ/ICQobGluZUlkKVxuXHRcdFx0OiAkKGxpbmVJZClcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5TU0RfTGlzdExpbmUnKVxuXHRcdFx0XHRcdC5maXJzdCgpO1xuXG5cdFx0aWYgKCFfbGluZS5sZW5ndGgpIHJldHVybjtcblxuXHRcdHZhciBfZXhwYW5kQ29udHJvbCA9ICQoJy5leHBhbmQtY29udHJvbC1jdXN0b20td2lkdGgnKTtcblxuXHRcdGlmIChfZXhwYW5kQ29udHJvbC5sZW5ndGggIT0gMCkge1xuXHRcdFx0X2V4cGFuZENvbnRyb2wucmVtb3ZlQ2xhc3MoJ2V4cGFuZC1jb250cm9sLWN1c3RvbS13aWR0aCcpO1xuXHRcdFx0X2V4cGFuZENvbnRyb2wuY3NzKCd3aWR0aCcsICcnKTtcblx0XHR9XG5cblx0XHRpZiAoIV9saW5lLmlzKCcuQWN0aXZlJykpIHtcblx0XHRcdHZhciBfbGluZUhlYWRlciA9IF9saW5lXG5cdFx0XHRcdC5jbG9zZXN0KCdkaXYuU2VsZWN0YWJsZUxpc3QsIC5TZWxlY3RhYmxlTGlzdC1MaXN0UmVjb3JkcycpXG5cdFx0XHRcdC5maW5kKCdkaXYuU2VsZWN0YWJsZUxpc3QtTGluZS5BY3RpdmUnKVxuXHRcdFx0XHQubm90KF9saW5lKTtcblxuXHRcdFx0X2xpbmVIZWFkZXIuZmluZCgnYVtoaWRlLWFjdGlvbl0nKS5jbGljaygpO1xuXHRcdFx0X2xpbmVIZWFkZXJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdBY3RpdmUnKVxuXHRcdFx0XHQuY2hpbGRyZW4oJ3NwYW4nKVxuXHRcdFx0XHQuaGlkZSgyMDApO1xuXHRcdFx0X2xpbmUuYWRkQ2xhc3MoJ0FjdGl2ZScpO1xuXG5cdFx0XHRpZiAoJChsaW5lSGFuZGxlcikubGVuZ3RoKSB7XG5cdFx0XHRcdCQobGluZUhhbmRsZXIpLmNsaWNrKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9saW5lLnJlbW92ZUNsYXNzKCdBY3RpdmUnKTtcblx0XHR9XG5cdH0sXG59O1xuIiwiLyogQ29tcG9uZW50IFRhYmxlRm9ybSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGFkZEVtcHR5TGluZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XG5cblx0XHQkbGlzdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJUYWJsZUZvcm1Db2x1bW5fX0VtcHR5SXRlbVwiPjwvZGl2PicpO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZUVtcHR5TGluZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XG5cblx0XHQkbGlzdC5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5maW5kKCc+IC5UYWJsZUZvcm1Db2x1bW5fX0VtcHR5SXRlbTpmaXJzdCcpXG5cdFx0XHRcdC5yZW1vdmUoKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBvbkNvbXBvbmVudFJlbG9hZCA9IHdpZGdldElkID0+IHtcblx0XHRjb25zdCAkdGFibGUgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHRjb25zdCAkZWRpdGluZyA9ICR0YWJsZS5maW5kKCcuVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZScpO1xuXG5cdFx0aWYgKCRlZGl0aW5nLmxlbmd0aCkge1xuXHRcdFx0JHRhYmxlLmFkZENsYXNzKCdUYWJsZUZvcm0tLXNjcm9sbERpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0YWJsZS5yZW1vdmVDbGFzcygnVGFibGVGb3JtLS1zY3JvbGxEaXNhYmxlZCcpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuVGFibGVGb3JtID0geyBhZGRFbXB0eUxpbmUsIG9uQ29tcG9uZW50UmVsb2FkLCByZW1vdmVFbXB0eUxpbmUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFRhYnNFeHRlbmRlZCAqL1xuU2FwcGhpcmVXaWRnZXRzLlRhYnNFeHRlbmRlZCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuVGFic19FeHRlbmRlZGApO1xuXHRcdGNvbnN0ICR0YWJIZWFkZXIgPSAkY29tcG9uZW50LmZpbmQoJy5UYWJzX2hlYWRlcicpO1xuXHRcdGNvbnN0ICR0YWJDb250YWluZXIgPSAkY29tcG9uZW50LmZpbmQoJy5UYWJzQ29udGFpbmVyJyk7XG5cdFx0Y29uc3QgJHRhYnMgPSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYicpO1xuXHRcdGNvbnN0ICR0YWJzRW5hYmxlZCA9ICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiOm5vdCguZGlzYWJsZWQpJyk7XG5cdFx0Y29uc3QgJHRhYnNJbnB1dCA9ICRjb21wb25lbnQuZmluZCgnLlRhYnNfSW5wdXQgaW5wdXQnKTtcblxuXHRcdCR0YWJzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCh0aGlzKS50ZXh0KCkgPT09ICcnKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkdGFic0VuYWJsZWQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkdGFiQ29udGFpbmVyLmF0dHIoJ2FjdGl2ZXRhYicsICQodGhpcykuYXR0cigndmFsdWUnKSk7XG5cblx0XHRcdCR0YWJzSW5wdXQudmFsKCQodGhpcykuYXR0cigndmFsdWUnKSk7XG5cdFx0XHQkdGFic0lucHV0LmNoYW5nZSgpO1xuXHRcdH0pO1xuXG5cdFx0JHRhYnNFbmFibGVkLm9mZignbW91c2Vkb3duJykub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0dmFyICR0YWJzRXh0ZW5kZWQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5UYWJzX0V4dGVuZGVkJyk7XG5cdFx0XHQkdGFic0V4dGVuZGVkLnJlbW92ZUNsYXNzKCdpc0Nsb3NlZCcpO1xuXHRcdH0pO1xuXG5cdFx0JCgnLlRhYnNfRXh0ZW5kZWQuSGlkZUFjdGl2ZU9uQ2xpY2sgLlRhYnNfaGVhZGVyJylcblx0XHRcdC5vZmYoJ21vdXNlZG93bicpXG5cdFx0XHQub24oJ21vdXNlZG93bicsICcuVGFic19fdGFiLmFjdGl2ZScsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHR2YXIgJHRhYnNFeHRlbmRlZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLlRhYnNfRXh0ZW5kZWQnKTtcblx0XHRcdFx0dmFyICR0YWJzQm9keSA9ICR0YWJzRXh0ZW5kZWQuZmluZCgnLlRhYnNfYm9keScpO1xuXG5cdFx0XHRcdGlmICgkdGFic0JvZHkuaGFzQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJykpIHtcblx0XHRcdFx0XHQkdGFic0JvZHkucmVtb3ZlQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XG5cdFx0XHRcdFx0JHRhYnNFeHRlbmRlZC5yZW1vdmVDbGFzcygnaXNDbG9zZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkdGFic0JvZHkuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XG5cdFx0XHRcdFx0JHRhYnNFeHRlbmRlZC5hZGRDbGFzcygnaXNDbG9zZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHQkdGFiSGVhZGVyLmZpbmQoJy5UYWJzX0V4dGVuZGVkLS1kaXNhYmxlZCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cdFx0XHQkKGVsKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKVxuXHRcdFx0XHQub2ZmKCdjbGljaycpO1xuXHRcdH0pO1xuXG5cdFx0JGNvbXBvbmVudC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXHRcdFx0aWYgKCQoZWwpLmhhc0NsYXNzKCdUYWJzX0V4dGVuZGVkLS1jbG9zZWRvbnN0YXJ0JykpIHtcblx0XHRcdFx0JChlbClcblx0XHRcdFx0XHQuZmluZCgnLlRhYnNfYm9keScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdUYWJzX2JvZHktLWNsb3NlZCcpO1xuXHRcdFx0XHQkKGVsKS5hZGRDbGFzcygnaXNDbG9zZWQnKTtcblx0XHRcdFx0JChlbCkucmVtb3ZlQ2xhc3MoJ1RhYnNfRXh0ZW5kZWQtLWNsb3NlZG9uc3RhcnQnKTtcblx0XHRcdH1cblxuXHRcdFx0JChlbClcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5UYWJzX0V4dGVuZGVkLS1jbG9zZScsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRcdCQoZXZ0LnRhcmdldClcblx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuVGFic19ib2R5Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnVGFic19ib2R5LS1jbG9zZWQnKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRpZiAoIWNvbmZpZy50YWIxRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9MV0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWIyRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9Ml0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWIzRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9M10nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWI0RW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9NF0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWI1RW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9NV0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IFRhYnVsYXJMaXN0ICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBhbGxUYWJ1bGFyTGlzdHMgPSBbXTtcblxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy50YWJ1bGFyTGlzdElkXSA9IG5ldyBUYWJ1bGFyTGlzdChjb25maWcpO1xuXHRcdGFsbFRhYnVsYXJMaXN0cy5wdXNoKHdpbmRvd1tjb25maWcudGFidWxhckxpc3RJZF0pO1xuXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYWxsVGFidWxhckxpc3RzID0gU2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJMaXN0LmFsbCgpO1xuXHRcdFx0YWxsVGFidWxhckxpc3RzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVRhYnVsYXJMaXN0Q29sdW1ucygpO1xuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVJlc3BvbnNpdmVDbGFzc2VzKDIwMCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5vbigncmVzaXplLnRhYnVsYXJsaXN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYWxsVGFidWxhckxpc3RzID0gU2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJMaXN0LmFsbCgpO1xuXHRcdFx0YWxsVGFidWxhckxpc3RzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVJlc3BvbnNpdmVDbGFzc2VzKDIwMCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgVGFidWxhckxpc3QgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdHRoaXMudGFidWxhckxpc3RSZXNpemVUaW1lciA9IDA7XG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyBjb25maWcudGFidWxhckxpc3RJZCk7XG5cdFx0dGhpcy4kd2lkZ2V0TGlzdCA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5UYWJ1bGFyTGlzdCcpO1xuXHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3cnKS5lYWNoKGZ1bmN0aW9uKGksIHJvdykge1xuXHRcdFx0X3RoaXMuY29sdW1uc0NvdW50ID0gMDtcblx0XHRcdCQocm93KVxuXHRcdFx0XHQuZmluZCgnLlRhYnVsYXJMaXN0Um93LXZhbHVlcyAuVGFidWxhckxpc3RSb3ctaXRlbScpXG5cdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0XHRcdFx0JChlbCkuYWRkQ2xhc3MoJ1RhYnVsYXJMaXN0Q29sdW1uJyArIChpICsgMSkpO1xuXHRcdFx0XHRcdF90aGlzLmNvbHVtbnNDb3VudCsrO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoISFjb25maWcuYnJlYWtPbikge1xuXHRcdFx0dGhpcy5icmVha09uT3JkZXIgPSBwYXJzZUludChjb25maWcuYnJlYWtPbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYnJlYWtPbk9yZGVyID0gMDtcblx0XHR9XG5cdFx0dGhpcy5oYW5kbGVUYWJ1bGFyTGlzdENvbHVtbnMoKTtcblx0fTtcblxuXHRUYWJ1bGFyTGlzdC5wcm90b3R5cGUuaGFuZGxlVGFidWxhckxpc3RDb2x1bW5zID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuY29uZmlnLmNvbHVtbnNXaWR0aCA9PT0gJ0F1dG8nKSB7XG5cdFx0XHRpZiAodGhpcy4kd2lkZ2V0TGlzdC53aWR0aCgpID4gMSkge1xuXHRcdFx0XHRmb3IgKGkgPSAxOyBpIDw9IHRoaXMuY29sdW1uc0NvdW50OyBpKyspIHtcblx0XHRcdFx0XHR2YXIgbWF4V2lkdGhDb250ZW50ID0gTWF0aC5tYXguYXBwbHkoXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0dGhpcy4kd2lkZ2V0XG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuVGFidWxhckxpc3RDb2x1bW4nICsgaSlcblx0XHRcdFx0XHRcdFx0Lm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuZ2V0KClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RDb2x1bW4nICsgaSkud2lkdGgobWF4V2lkdGhDb250ZW50KTtcblx0XHRcdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Q29sdW1uJyArIGkpLmNzcygnb3BhY2l0eScsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghIXRoaXMuY29uZmlnLnByb3BlcnR5TWluV2lkdGgpIHtcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3ctcHJvcGVydHknKS5jc3MoJ21pbi13aWR0aCcsIGNvbnZlcnRJbkNTU1ZhbHVlKHRoaXMuY29uZmlnLnByb3BlcnR5TWluV2lkdGgpKTtcblx0XHR9XG5cdFx0aWYgKCEhdGhpcy5jb25maWcucHJvcGVydHlNYXhXaWR0aCkge1xuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1wcm9wZXJ0eScpLmNzcygnbWF4LXdpZHRoJywgY29udmVydEluQ1NTVmFsdWUodGhpcy5jb25maWcucHJvcGVydHlNYXhXaWR0aCkpO1xuXHRcdH1cblx0XHRpZiAoISF0aGlzLmNvbmZpZy5hY3Rpb25zTWluV2lkdGgpIHtcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3ctYWN0aW9ucycpLmNzcygnbWluLXdpZHRoJywgY29udmVydEluQ1NTVmFsdWUodGhpcy5jb25maWcuYWN0aW9uc01pbldpZHRoKSk7XG5cdFx0fVxuXHRcdGlmICghIXRoaXMuY29uZmlnLmFjdGlvbnNNYXhXaWR0aCkge1xuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1hY3Rpb25zJykuY3NzKCdtYXgtd2lkdGgnLCBjb252ZXJ0SW5DU1NWYWx1ZSh0aGlzLmNvbmZpZy5hY3Rpb25zTWF4V2lkdGgpKTtcblx0XHR9XG5cdH07XG5cblx0VGFidWxhckxpc3QucHJvdG90eXBlLmhhbmRsZVJlc3BvbnNpdmVDbGFzc2VzID0gZnVuY3Rpb24odGltZW91dCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRhYnVsYXJMaXN0UmVzaXplVGltZXIpO1xuXHRcdHRoaXMudGFidWxhckxpc3RSZXNpemVUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuJHdpZGdldExpc3QucmVtb3ZlQ2xhc3MoZnVuY3Rpb24oaW5kZXgsIGNsYXNzTmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvKF58XFxzKXNjcmVlbi1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X3RoaXMuJHdpZGdldExpc3QucmVtb3ZlQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcblxuXHRcdFx0dmFyIHdpZGdldFdpZHRoID0gX3RoaXMuJHdpZGdldExpc3Qub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdGlmICh3aWRnZXRXaWR0aCA9PT0gMCkge1xuXHRcdFx0XHR3aWRnZXRXaWR0aCA9IF90aGlzLiR3aWRnZXRMaXN0XG5cdFx0XHRcdFx0LnBhcmVudHMoJzp2aXNpYmxlJylcblx0XHRcdFx0XHQuZXEoMClcblx0XHRcdFx0XHQub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHdpZGdldFdpZHRoID49IDE5MDApIHtcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1EZXNrdG9wSEQnKTtcblx0XHRcdFx0aWYgKF90aGlzLmJyZWFrT25PcmRlciA+PSA2KSB7XG5cdFx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh3aWRnZXRXaWR0aCA+PSAxNjAwKSB7XG5cdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdzY3JlZW4tRGVza3RvcEJpZycpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDUpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDEzNjYpIHtcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1EZXNrdG9wJyk7XG5cdFx0XHRcdGlmIChfdGhpcy5icmVha09uT3JkZXIgPj0gNCkge1xuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAod2lkZ2V0V2lkdGggPj0gMTAyNCkge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3BTbWFsbCcpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDMpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDQyMCkge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLVRhYmxldCcpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDIpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLVBob25lJyk7XG5cdFx0XHRcdGlmIChfdGhpcy5icmVha09uT3JkZXIgPj0gMSkge1xuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCB0aW1lb3V0KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuVGFidWxhckxpc3QgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0YWxsOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBhbGxUYWJ1bGFyTGlzdHM7XG5cdFx0fSxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcblxuZnVuY3Rpb24gY29udmVydEluQ1NTVmFsdWUodmFsdWVfaW4pIHtcblx0dmFyIHJldHVybmVkO1xuXHRpZiAodmFsdWVfaW4uaW5jbHVkZXMoJ3B4JykgfHwgdmFsdWVfaW4uaW5jbHVkZXMoJyUnKSkge1xuXHRcdHJldHVybmVkID0gdmFsdWVfaW47XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuZWQgPSB2YWx1ZV9pbiArICdweCc7XG5cdH1cblx0cmV0dXJuIHJldHVybmVkO1xufVxuIiwiLyogQ29tcG9uZW50IFRhYnVsYXJTY3JvbGwgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuVGFidWxhclNjcm9sbCcpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcblx0XHRcdFx0c2V0dXBUYWJ1bGFyU2Nyb2xsKCQoZWwpKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmXG5cdFx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCgnLlRhYnVsYXJTY3JvbGwnKS5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0XHRcdFx0XHRzZXR1cFRhYnVsYXJTY3JvbGwoJChlbCkpO1xuXHRcdFx0XHRcdFx0cmVzaXplUm93cygkKGVsKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUudGFidWxhcnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnLlRhYnVsYXJTY3JvbGwnKS5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0XHRcdHZhciAkY2VudGVyVGFibGUgPSAkKGVsKS5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXItdGFibGUnKTtcblx0XHRcdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xuXHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdC5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXIgLlRvcFNjcm9sbERyYWdnZXInKVxuXHRcdFx0XHRcdC53aWR0aCh0YWJsZVdpZHRoKTtcblx0XHRcdFx0aWYgKCRjZW50ZXJUYWJsZVswXS5zY3JvbGxXaWR0aCA+ICRjZW50ZXJUYWJsZS53aWR0aCgpKSB7XG5cdFx0XHRcdFx0JChlbClcblx0XHRcdFx0XHRcdC5maW5kKCcuVG9wU2Nyb2xsV3JhcHBlcicpXG5cdFx0XHRcdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5Ub3BTY3JvbGxXcmFwcGVyJylcblx0XHRcdFx0XHRcdC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHNldHVwVGFidWxhclNjcm9sbCA9IGZ1bmN0aW9uKCR0YWJ1bGFyU2Nyb2xsKSB7XG5cdFx0dmFyICR0b3BTY3JvbGxXcmFwcGVyID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKTtcblx0XHR2YXIgJGNlbnRlclRhYmxlID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyLXRhYmxlJyk7XG5cdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHQkY2VudGVyVGFibGUuc2Nyb2xsTGVmdCgkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCkpO1xuXHRcdH0pO1xuXHRcdCRjZW50ZXJUYWJsZS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHQkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCRjZW50ZXJUYWJsZS5zY3JvbGxMZWZ0KCkpO1xuXHRcdH0pO1xuXHRcdC8vIHNpbWlsYXIgdG8gUmVzaXplXG5cdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xuXHRcdCR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWNlbnRlciAuVG9wU2Nyb2xsRHJhZ2dlcicpLndpZHRoKHRhYmxlV2lkdGgpO1xuXHRcdGlmICgkY2VudGVyVGFibGVbMF0uc2Nyb2xsV2lkdGggPiAkY2VudGVyVGFibGUud2lkdGgoKSkge1xuXHRcdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGFidWxhclNjcm9sbC5maW5kKCcuVG9wU2Nyb2xsV3JhcHBlcicpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVzaXplUm93cyA9IGZ1bmN0aW9uKCR0YWJ1bGFyU2Nyb2xsKSB7XG5cdFx0bGV0IGFycnJheUhlaWdodCA9IFtdO1xuXHRcdGNvbnN0ICR0YWJsZUNlbnRlciA9ICR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWNlbnRlci10YWJsZSB0YWJsZSB0Ym9keScpO1xuXHRcdGNvbnN0ICR0YWJsZVJpZ2h0ID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtcmlnaHQgLkxpc3RSZWNvcmRzJyk7XG5cdFx0Y29uc3QgJHRhYmxlTGVmdCA9ICR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWxlZnQgLkxpc3RSZWNvcmRzJyk7XG5cblx0XHRhcnJyYXlIZWlnaHQgPSAkdGFibGVDZW50ZXJcblx0XHRcdC5jaGlsZHJlbigndHInKVxuXHRcdFx0Lm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XG5cdFx0XHR9KVxuXHRcdFx0LmdldCgpO1xuXG5cdFx0JHRhYmxlUmlnaHQuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHQkKHRoaXMpLmNzcygnaGVpZ2h0JywgYXJycmF5SGVpZ2h0W2luZGV4XSArICdweCcpO1xuXHRcdH0pO1xuXG5cdFx0JHRhYmxlTGVmdC5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdCQodGhpcykuY3NzKCdoZWlnaHQnLCBhcnJyYXlIZWlnaHRbaW5kZXhdICsgJ3B4Jyk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJTY3JvbGwgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogVGltZWxpbmUgSGVscGVycyAqL1xuU2FwcGhpcmVXaWRnZXRzLlRpbWVsaW5lQ291bnRlckl0ZW1zID0gZnVuY3Rpb24odGl0bGVJdGVtSUQsIGxhYmVsKSB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0ICRzZWN0aW9uID0gJChgIyR7dGl0bGVJdGVtSUR9YCkucGFyZW50cygnLlRpbWVsaW5lSXRlbVNlY3Rpb24nKTtcblx0XHRjb25zdCAkdGl0bGUgPSAkc2VjdGlvbi5maW5kKCcuVGltZWxpbmVJdGVtSGVhZGVyIGEnKTtcblx0XHRjb25zdCAkaXRlbXMgPSAkc2VjdGlvbi5maW5kKCcuVGltZWxpbmVJdGVtJyk7XG5cblx0XHQkdGl0bGUuYXBwZW5kKCQoYDxkaXYgY2xhc3M9J0NvbG9yR3JleVRleHQgVGV4dExhcmdlIFRleHRSZWd1bGFyJz4gKCR7JGl0ZW1zLmxlbmd0aH0pPC9kaXY+YCkpO1xuXHR9KTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5TY3JvbGxUb0V2ZW50ID0gZnVuY3Rpb24oZWxlbWVudElkKSB7XG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLnNjcm9sbFRvRWxlbWVudCgkKGAjJHtlbGVtZW50SWR9OmZpcnN0YCwgd2luZG93LnRvcC5kb2N1bWVudCksIDUyKTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5MaW5lVGltZWxpbmVDb21wb25lbnQgPSBmdW5jdGlvbih3aWRnZXRJZCwgaGFzQ29udGVudCwgaXNFeHBhbmRhYmxlKSB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0ICRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblxuXHRcdGlmIChoYXNDb250ZW50ICYmIGlzRXhwYW5kYWJsZSkge1xuXHRcdFx0Y29uc3QgJGV4cGFuZGFibGVMaW5rID0gJGNvbXBvbmVudC5maW5kKCcuTGluZVRpbWVMaW5lX19IZWFkZXInKTtcblx0XHRcdGNvbnN0ICRhY3Rpb25zID0gJGNvbXBvbmVudC5maW5kKCcuTGluZVRpbWVMaW5lX19BY3Rpb25zJyk7XG5cblx0XHRcdCRleHBhbmRhYmxlTGluay5jbGljaygoKSA9PiB7XG5cdFx0XHRcdCRjb21wb25lbnQudG9nZ2xlQ2xhc3MoJ0xpbmVUaW1lTGluZS0tZXhwYW5kZWQnKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0JGFjdGlvbnMuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5UaW1lbGluZVBhZ2VFdmVudHMgPSBmdW5jdGlvbihzaG93TW9yZVRpbWVsaW5lTGluaykge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHQkKHdpbmRvdylcblx0XHRcdC5vZmYoJ3Njcm9sbC5UaW1lbGluZScpXG5cdFx0XHQub24oJ3Njcm9sbC5UaW1lbGluZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPT09IDApIHtcblx0XHRcdFx0XHRjb25zdCAkaXRlbSA9ICQoJy5UaW1lbGluZUFuY2hvcicpLmZpcnN0KCk7XG5cdFx0XHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpO1xuXG5cdFx0XHRcdFx0c2VsZWN0SXRlbSgkaXRlbS5hdHRyKCdpZCcpKTtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnNjcm9sbEZpbmlzaGVkKTtcblxuXHRcdFx0XHRcdCRsaXN0LnNjcm9sbFRvcCgwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnNjcm9sbEZpbmlzaGVkKTtcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bGV0IGlkID0gMDtcblxuXHRcdFx0XHRcdFx0JCgnLlRpbWVsaW5lQW5jaG9yJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgMTkwID49ICQodGhpcykub2Zmc2V0KCkudG9wKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoaW5kZXggPT0gJCgnLlRpbWVsaW5lQW5jaG9yJykubGVuZ3RoIC0gMSkgc2VsZWN0SXRlbShpZCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0SXRlbShpZCwgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubGFzdEl0ZW1JRCA9IGlkO1xuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0aWYgKCQoZG9jdW1lbnQpLmhlaWdodCgpIC0gJCh0aGlzKS5oZWlnaHQoKSAtIDE1MCA8ICQodGhpcykuc2Nyb2xsVG9wKCkpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpO1xuXG5cdFx0XHRcdFx0XHRcdCQoYCMke3Nob3dNb3JlVGltZWxpbmVMaW5rfWApLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdCQoJy5UaW1lbGluZVBhZ2VfX1JpZ2h0IC5UaW1lbGluZVBhZ2VfX0xvYWRpbmdNb3JlJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcblxuXHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsTGlzdFBvc2l0aW9uID0gJGxpc3Quc2Nyb2xsVG9wKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNoZWNrRW5kT2ZQYWdlKCk7XG5cdFx0XHR9KTtcblxuXHRcdGluZmluaXRlU2Nyb2xsTGlzdChzaG93TW9yZVRpbWVsaW5lTGluayk7XG5cdH0pO1xufTtcblxuU2FwcGhpcmVXaWRnZXRzLlRpbWVsaW5lUmVzdG9yZUV2ZW50cyA9IGZ1bmN0aW9uKHNob3dNb3JlVGltZWxpbmVMaW5rKSB7XG5cdCQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJykuc2Nyb2xsVG9wKHdpbmRvdy5zY3JvbGxMaXN0UG9zaXRpb24pO1xuXHQkKCcuVGltZWxpbmVQYWdlX19Mb2FkaW5nTW9yZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cblx0d2luZG93LmFscmVhZHlDbGlja2VkID0gZmFsc2U7XG5cblx0aW5maW5pdGVTY3JvbGxMaXN0KHNob3dNb3JlVGltZWxpbmVMaW5rKTtcblxuXHRpZiAod2luZG93Lmxhc3RJdGVtSUQpIHNlbGVjdEl0ZW0od2luZG93Lmxhc3RJdGVtSUQpO1xufTtcblxuZnVuY3Rpb24gc2VsZWN0SXRlbShpZCwgc2Nyb2xsVG8pIHtcblx0Y29uc3QgJG5hdkl0ZW0gPSAkKGBbZGF0YS1pdGVtPWV2ZW50LSR7aWR9XSAuVGltZWxpbmVJdGVtYCk7XG5cblx0JCgnLlRpbWVsaW5lSXRlbS5UaW1lbGluZUl0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdUaW1lbGluZUl0ZW0tLWFjdGl2ZScpO1xuXHQkbmF2SXRlbS5hZGRDbGFzcygnVGltZWxpbmVJdGVtLS1hY3RpdmUnKTtcblxuXHRpZiAoc2Nyb2xsVG8gJiYgJG5hdkl0ZW0ubGVuZ3RoKSBzY3JvbGxUb1ZpZXcoJG5hdkl0ZW0pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb1ZpZXcoZWxlbWVudCkge1xuXHRjb25zdCAkcGFyZW50RGl2ID0gJCgnLlRpbWVsaW5lUGFnZV9fTmF2aWdhdGlvbiAuTGlzdFJlY29yZHMnKTtcblxuXHQkcGFyZW50RGl2LnNjcm9sbFRvcChcblx0XHQkcGFyZW50RGl2LnNjcm9sbFRvcCgpICsgZWxlbWVudC5wb3NpdGlvbigpLnRvcCAtICRwYXJlbnREaXYuaGVpZ2h0KCkgLyAyICsgZWxlbWVudC5oZWlnaHQoKSAvIDJcblx0KTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaW5maW5pdGVTY3JvbGxMaXN0KHNob3dNb3JlTmF2TGluaywgbmFtZSkge1xuXHRjb25zdCAkbGlzdCA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XG5cblx0JGxpc3Qub2ZmKCdtb3VzZXdoZWVsLlRpbWVsaW5lTmF2Jykub24oJ21vdXNld2hlZWwuVGltZWxpbmVOYXYnLCBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBsaXN0SGVpZ2h0ID0gJGxpc3QuaGVpZ2h0KCk7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJGxpc3Quc2Nyb2xsVG9wKCk7XG5cdFx0Y29uc3Qgc2Nyb2xsSGVpZ2h0ID0gJGxpc3QucHJvcCgnc2Nyb2xsSGVpZ2h0Jyk7XG5cblx0XHRpZiAobGlzdEhlaWdodCArIHNjcm9sbFRvcCArIDEwMCA+IHNjcm9sbEhlaWdodCAmJiBzY3JvbGxUb3AgPiAwICYmICF3aW5kb3cuYWxyZWFkeUNsaWNrZWQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cuc2Nyb2xsTGlzdEZpbmlzaGVkKTtcblx0XHRcdHdpbmRvdy5zY3JvbGxMaXN0RmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKGAjJHtzaG93TW9yZU5hdkxpbmt9YCkuY2xpY2soKTtcblxuXHRcdFx0XHQkKCcuVGltZWxpbmVQYWdlX19Mb2FkaW5nTW9yZScpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cblx0XHRcdFx0d2luZG93LnNjcm9sbExpc3RQb3NpdGlvbiA9ICRsaXN0LnNjcm9sbFRvcCgpO1xuXHRcdFx0XHR3aW5kb3cuYWxyZWFkeUNsaWNrZWQgPSB0cnVlO1xuXHRcdFx0fSwgMTAwKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja0VuZE9mUGFnZSgpIHtcblx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldCA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCkge1xuXHRcdGNvbnN0ICRpdGVtID0gJCgnLlRpbWVsaW5lQW5jaG9yJykubGFzdCgpO1xuXHRcdHdpbmRvdy5sYXN0SXRlbUlEID0gJGl0ZW0uYXR0cignaWQnKTtcblx0fVxufVxuIiwiLyogQ29tcG9uZW50IFRyaWdnZXJJZnJhbWVUb29sdGlwICovXHJcbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgJGVsZW1lbnRJZCA9ICQoJyMnICsgY29uZmlnLmVsZW1lbnRJZCk7XHJcblxyXG5cdFx0JGVsZW1lbnRJZC5hZGRDbGFzcygndG9vbHRpcCcpO1xyXG5cclxuXHRcdGlmIChjb25maWcudHJpZ2dlcklkID09PSAnY2xpY2snKSAkZWxlbWVudElkLmFkZENsYXNzKCd0b29sdGlwc3RlcmVkLS1wb2ludGVyJyk7XHJcblxyXG5cdFx0Y29uc3Qgd2lkZ2V0Tm90aWZ5RGl2ID0gJC5maW5kKCdbZGF0YS1pZnJhbWV0b29sdGlwdHJpZ2dlcmlkPVwiJyArIGNvbmZpZy5lbGVtZW50SWQgKyAnXCJdJyk7XHJcblx0XHRsZXQgd2lkZ2V0Tm90aWZ5SWQgPSAnJztcclxuXHJcblx0XHRpZiAod2lkZ2V0Tm90aWZ5RGl2Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHR3aWRnZXROb3RpZnlJZCA9ICQod2lkZ2V0Tm90aWZ5RGl2KS5kYXRhKCdpZnJhbWV0b29sdGlwbm90aWZ5aWQnKTtcclxuXHRcdH1cclxuXHJcblx0XHQkZWxlbWVudElkLnRvb2x0aXBzdGVyKHtcclxuXHRcdFx0Y29udGVudEFzSFRNTDogdHJ1ZSxcclxuXHRcdFx0dGhlbWU6IGNvbmZpZy50aGVtZSxcclxuXHRcdFx0aW50ZXJhY3RpdmU6IHRydWUsXHJcblx0XHRcdHBvc2l0aW9uOiBjb25maWcucG9zaXRpb25JZCxcclxuXHRcdFx0dHJpZ2dlcjogY29uZmlnLnRyaWdnZXJJZCxcclxuXHRcdFx0bWluV2lkdGg6IGNvbmZpZy5taW5XaWR0aCxcclxuXHRcdFx0bWF4V2lkdGg6IGNvbmZpZy5tYXhXaWR0aCxcclxuXHRcdFx0emluZGV4OiBjb25maWcuemluZGV4LFxyXG5cdFx0XHRvbmx5T25lOiB0cnVlLFxyXG5cdFx0XHRjb250ZW50OiBgPGlmcmFtZSBpZD1cInRvb2x0aXBzdGVyLWZyYW1lXCIgZGF0YS11aT1cImlmcmFtZS10b29sdGlwXCIgc3JjPVwiJHtjb25maWcuVVJMfVwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7IG1pbi1oZWlnaHQ6JHtjb25maWcubWluSGVpZ2h0fXB4O1wiIGRhdGEtaWZyYW1ldG9vbHRpcHRyaWdnZXJpZD1cIiR7Y29uZmlnLmVsZW1lbnRJZH1cIiBpZnJhbWV0b29sdGlwbm90aWZ5aWQ9XCIke3dpZGdldE5vdGlmeUlkfVwiPjwvaWZyYW1lPmAsXHJcblx0XHRcdGZ1bmN0aW9uUmVhZHk6IGZ1bmN0aW9uKGluc3RhbmNlLCBoZWxwZXIpIHtcclxuXHRcdFx0XHQkKGhlbHBlcikuY3NzKHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSk7XHJcblxyXG5cdFx0XHRcdGlmIChjb25maWcubm9QYWRkaW5nKSAkKCcudG9vbHRpcHN0ZXItY29udGVudCcpLmFkZENsYXNzKCd0b29sdGlwc3Rlci0tbm9QYWRkaW5nJyk7XHJcblx0XHRcdFx0aWYgKGNvbmZpZy5jdXN0b21DbGFzcykgJCgnLnRvb2x0aXBzdGVyLWNvbnRlbnQnKS5hZGRDbGFzcyhjb25maWcuY3VzdG9tQ2xhc3MpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JCgnLnRvb2x0aXBzdGVyLWJhc2UnKS5jc3Moe1xyXG5cdFx0XHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXHJcblx0XHRcdFx0XHRcdG1pbkhlaWdodDogY29uZmlnLm1pbkhlaWdodCA+IDAgPyBjb25maWcubWluSGVpZ2h0IDogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgNTAwKTtcclxuXHJcblx0XHRcdFx0JCgnLnRvb2x0aXBzdGVyLWNvbnRlbnQnKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwiVG9vbHRpcHN0ZXJMb2FkaW5nXCI+PGRpdiBjbGFzcz1cImxkcy1yaW5nXCI+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgaXNMZWZ0T3JSaWdodCA9IGNvbmZpZy5wb3NpdGlvbklkID09PSAnbGVmdCcgfHwgY29uZmlnLnBvc2l0aW9uSWQgPT09ICdyaWdodCc7XHJcblxyXG5cdFx0XHRcdC8vIFNldCBhIGZpeGVkIGhlaWdodCBpbiBvcmRlciB0byBrZWVwIHRoZSBhcnJvdyBpbiB0aGUgc2FtZSBwb3NpdGlvblxyXG5cdFx0XHRcdGlmIChpc0xlZnRPclJpZ2h0KSB7XHJcblx0XHRcdFx0XHRzZXRGaXhIZWlnaHQoKTtcclxuXHJcblx0XHRcdFx0XHQkKHdpbmRvdylcclxuXHRcdFx0XHRcdFx0Lm9mZignc2Nyb2xsLlRvb2x0aXAnKVxyXG5cdFx0XHRcdFx0XHQub24oJ3Njcm9sbC5Ub29sdGlwJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRGaXhIZWlnaHQoKTtcclxuXHRcdFx0XHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uQWZ0ZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQod2luZG93KS5vZmYoJ3Njcm9sbC5Ub29sdGlwJyk7XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRGaXhIZWlnaHQgPSAoKSA9PiB7XHJcblx0XHRjb25zdCAkYXJyb3cgPSAkKCcudG9vbHRpcHN0ZXItYXJyb3cnKTtcclxuXHJcblx0XHQkYXJyb3cuaGVpZ2h0KCRhcnJvdy5oZWlnaHQoKSk7XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLlRyaWdnZXJJZnJhbWVUb29sdGlwID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgVHJ1bmNhdGVkQ29udGVudCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcgPSB7fSkge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyICRhbGxUcnVuY2F0ZWQgPSAkKFtdKTtcblx0XHRcdHZhciByb290U2VsZWN0b3IgPSBgIyR7Y29uZmlnLndpZGdldElkfWA7XG5cdFx0XHR2YXIgb3BlbmVyU2VsZWN0b3IgPSAnLlRydW5jYXRlZENvbnRlbnQtLWFsbCc7XG5cdFx0XHR2YXIgYm9keVNlbGVjdG9yID0gJy5UcnVuY2F0ZWRDb250ZW50LS1ib2R5JztcblxuXHRcdFx0JChyb290U2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciAkZWwgPSAkKHRoaXMpO1xuXHRcdFx0XHQkYWxsVHJ1bmNhdGVkID0gJGFsbFRydW5jYXRlZC5hZGQoJGVsKTtcblx0XHRcdFx0dmFyICRlbEJvZHkgPSAkZWwuZmluZChib2R5U2VsZWN0b3IpO1xuXHRcdFx0XHR2YXIgbWF4TGluZXMgPSAkZWwuZGF0YSgnbWF4bGluZXMnKTtcblx0XHRcdFx0dmFyIGxpbmVIZWlnaHQgPSB3aW5kb3dcblx0XHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZSgkZWwuZmluZCgnPiBkaXYnKVswXSlcblx0XHRcdFx0XHQuZ2V0UHJvcGVydHlWYWx1ZSgnbGluZS1oZWlnaHQnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdweCcsICcnKTtcblx0XHRcdFx0dmFyIGxpbmVDb3VudCA9IE1hdGguY2VpbCgkZWwuaGVpZ2h0KCkgLyBsaW5lSGVpZ2h0KTtcblx0XHRcdFx0aWYgKGxpbmVDb3VudCA+IG1heExpbmVzKSB7XG5cdFx0XHRcdFx0JGVsQm9keS5jc3Moe1xuXHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBsaW5lSGVpZ2h0ICogbWF4TGluZXMgKyAncHgnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHZhciBzZW50ZW5jZSA9ICRlbC5kYXRhKCdhZGRpdGlvbmFsJykucmVwbGFjZSgne259JywgbGluZUNvdW50IC0gbWF4TGluZXMpO1xuXHRcdFx0XHRcdCRlbC5hcHBlbmQoJzxwIGNsYXNzPVwiJyArIG9wZW5lclNlbGVjdG9yLnJlcGxhY2UoJy4nLCAnJykgKyAnXCI+JyArIHNlbnRlbmNlICsgJzwvcD4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdCQocm9vdFNlbGVjdG9yKS5vbignY2xpY2snLCBvcGVuZXJTZWxlY3RvciwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbCA9ICQodGhpcykuY2xvc2VzdChyb290U2VsZWN0b3IpO1xuXHRcdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudChlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0b3BlblRydW5jYXRlZENvbnRlbnQgPSBmdW5jdGlvbihlbCkge1xuXHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdC5maW5kKGJvZHlTZWxlY3Rvcilcblx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJ25vbmUnKTtcblx0XHRcdFx0JChlbClcblx0XHRcdFx0XHQuZmluZChvcGVuZXJTZWxlY3Rvcilcblx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdH07XG5cblx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50ICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQuaWQgPT09ICd0b29sdGlwc3Rlci1mcmFtZScpIHtcblx0XHRcdFx0JChyb290U2VsZWN0b3IpLm9mZignY2xpY2snLCBvcGVuZXJTZWxlY3Rvcik7XG5cdFx0XHRcdCQob3BlbmVyU2VsZWN0b3IpLmFkZENsYXNzKCdpbi10b29sdGlwJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlRydW5jYXRlZENvbnRlbnQgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdG9wZW46IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudChlbCk7XG5cdFx0fSxcblx0XHRvcGVuQWxsOiBmdW5jdGlvbigpIHtcblx0XHRcdCRhbGxUcnVuY2F0ZWQuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0b3BlblRydW5jYXRlZENvbnRlbnQoJCh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiU2FwcGhpcmVXaWRnZXRzLkNsaW5pY2lhbldvcmtBcmVhID0gZnVuY3Rpb24oY29udGFpbmVySUQpIHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9ICQoYCMke2NvbnRhaW5lcklEfWApO1xuXHRcdGNvbnN0ICR0b2dnbGVyID0gJGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlcicpO1xuXG5cdFx0aWYgKCR0b2dnbGVyLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0bGV0ICR0b2dnbGVyU3RhdGUgPSBmYWxzZTtcblxuXHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XG5cblx0XHRcdCR0b2dnbGVyLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRcdGJ1dHRvbkNsaWNrKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgYnV0dG9uQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHRvZ2dsZXJTdGF0ZSA9ICEkdG9nZ2xlclN0YXRlO1xuXG5cdFx0XHRcdGlmICgkdG9nZ2xlclN0YXRlKSB7XG5cdFx0XHRcdFx0JGNvbnRhaW5lci5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLnNob3coKTtcblx0XHRcdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxoaWRlXScpLmRhdGEoJ2xhYmVsaGlkZScpKTtcblxuXHRcdFx0XHRcdCR0b2dnbGVyLmhpZGUoKTtcblxuXHRcdFx0XHRcdGNvbnN0ICRjYW5jZWxCdXR0b24gPSAkKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCAuQnV0dG9uQ2FuY2VsU2VhcmNoJyk7XG5cdFx0XHRcdFx0JGNhbmNlbEJ1dHRvbi5jbGljaygoKSA9PiBidXR0b25DbGljaygpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY29udGFpbmVyLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkJykuaGlkZSgpO1xuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHNob3ddJykuZGF0YSgnbGFiZWxzaG93JykpO1xuXG5cdFx0XHRcdFx0JHRvZ2dsZXIuc2hvdygpO1xuXG5cdFx0XHRcdFx0Y29uc3QgJGNhbmNlbEJ1dHRvbiA9ICQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkIC5CdXR0b25DYW5jZWxTZWFyY2gnKTtcblx0XHRcdFx0XHQkY2FuY2VsQnV0dG9uLm9mZignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0pO1xufTtcbiIsIlNhcHBoaXJlV2lkZ2V0cy5RUkNvZGVTY2FubmVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXHRIdG1sNVFyY29kZS5nZXRDYW1lcmFzKClcblx0XHQudGhlbihkZXZpY2VzID0+IHtcblx0XHRcdGlmIChkZXZpY2VzICYmIGRldmljZXMubGVuZ3RoKSBzdGFydENhbWVyYShkZXZpY2VzWzBdLmlkKTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0Ly8gQXBwIGRvZXNuJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlIGNhbWVyYS4uLlxuXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Y29uc3QgJGNoZWNrYm94ID0gJCgnLkFjY2Vzc0NvZGVPcHRpb24nKTtcblxuXHRcdFx0XHQkY2hlY2tib3guYXR0cignY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdCQoJy5MYXlvdXRTY2FuQ29kZScpLmFkZENsYXNzKCdMYXlvdXRTY2FuQ29kZS0tbW9kZU9ubHlDb2RlJyk7XG5cblx0XHRcdFx0JCgnLkxheW91dFNjYW5Db2RlX19TcGxhc2gnKS5mYWRlT3V0KDUwMCk7XG5cdFx0XHR9LCA1MDApO1xuXHRcdH0pO1xuXG5cdGZ1bmN0aW9uIHN0YXJ0Q2FtZXJhKGNhbWVyYUlEKSB7XG5cdFx0Y29uc3QgaHRtbDVRckNvZGUgPSBuZXcgSHRtbDVRcmNvZGUoJ3FycmVhZGVyJyk7XG5cdFx0Y29uc3QgY29uZmlnID0geyBmcHM6IDUsIHFyYm94OiAyNTAgfTtcblxuXHRcdGNvbnN0IHN1Y2Nlc3NDYWxsYmFjayA9IHJlc3BvbnNlID0+IHtcblx0XHRcdGlmICgkKCcuTW9kZUFjY2Vzc0NvZGUnKS5sZW5ndGgpIHJldHVybjtcblxuXHRcdFx0JCgnLlNjYW5PdmVybGF5JykuYWRkQ2xhc3MoJ1NjYW5PdmVybGF5LS1jb3JyZWN0Q29kZScpO1xuXG5cdFx0XHRPc05vdGlmeVdpZGdldChvcHRpb25zLndpZGdldEZha2VOb3RpZnlJZCwgcmVzcG9uc2UpO1xuXG5cdFx0XHQvL3NldFRpbWVvdXQoKCkgPT4gaHRtbDVRckNvZGUuc3RvcCgpLCAxMDAwKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZXJyb3JDYWxsYmFjayA9IHJlc3BvbnNlID0+IHtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuXHRcdH07XG5cblx0XHRodG1sNVFyQ29kZVxuXHRcdFx0LnN0YXJ0KHsgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50JyB9LCBjb25maWcsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaylcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiAkKCcuTGF5b3V0U2NhbkNvZGVfX1NwbGFzaCcpLmZhZGVPdXQoNTAwKSwgNTAwKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRsZXQgaXNQb3J0cmFpdCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXM7XG5cdGxldCBpc09yaWVudGFyaW9uQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdCQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICgkKCcuTW9kZUFjY2Vzc0NvZGUnKS5sZW5ndGgpIHtcblx0XHRcdGlzT3JpZW50YXJpb25DaGFuZ2VkID0gd2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJykubWF0Y2hlcztcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Jc09yaWVudGFyaW9uQ2hhbmdlZCA9ICEoaXNQb3J0cmFpdCBeIGlzT3JpZW50YXJpb25DaGFuZ2VkKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0fSk7XG59O1xuXG5TYXBwaGlyZVdpZGdldHMuT25Nb2RlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCQoJy5TY2FuT3ZlcmxheScpLnJlbW92ZUNsYXNzKCdTY2FuT3ZlcmxheS0tY29ycmVjdENvZGUnKTtcblx0JCgnLlNjYW5PdmVybGF5JykucmVtb3ZlQ2xhc3MoJ1NjYW5PdmVybGF5LS1pbmNvcnJlY3RDb2RlJyk7XG5cblx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5Jc09yaWVudGFyaW9uQ2hhbmdlZCAmJiAhJCgnLk1vZGVBY2Nlc3NDb2RlJykubGVuZ3RoKSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG59O1xuXG5TYXBwaGlyZVdpZGdldHMuR29OZXh0SW5wdXQgPSBmdW5jdGlvbihjdXJyZW50SW5wdXQsIG5leHRJbnB1dENsYXNzKSB7XG5cdGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQuY2hhckNvZGU7XG5cdGNvbnN0IGlzTnVtYmVyID0gIWlzTmFOKGV2ZW50LmtleSkgJiYgIWlzTmFOKHBhcnNlRmxvYXQoZXZlbnQua2V5KSk7XG5cblx0Y29uc3QgJGN1cnIgPSAkKGN1cnJlbnRJbnB1dCk7XG5cdGNvbnN0ICRuZXh0ID0gJChgLiR7bmV4dElucHV0Q2xhc3N9YCk7XG5cdGNvbnN0ICRwcmV2ID0gJGN1cnIucHJldkFsbCgnaW5wdXQnKS5maXJzdCgpO1xuXG5cdGlmIChrZXkgPT09IDggfHwga2V5ID09PSA0Nikge1xuXHRcdCRwcmV2LmZvY3VzKCk7XG5cdFx0JGN1cnIucmVtb3ZlQ2xhc3MoJ0NvbG9yQWxwaGFCb3JkZXInKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChpc051bWJlcikge1xuXHRcdCRuZXh0LmZvY3VzKCk7XG5cdFx0JGN1cnIuYWRkQ2xhc3MoJ0NvbG9yQWxwaGFCb3JkZXInKTtcblx0XHQkKCcuVmFsaWRhdGVJbnB1dEJ1dHRvbicpLmNsaWNrKCk7XG5cdH0gZWxzZSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcbiIsIihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xuXHRcdGNvbnN0ICRoZWFkZXIgPSAkd2lkZ2V0LmZpbmQoJy5SZW1vdGVBcHBvaW50bWVudF9fSGVhZGVyJyk7XG5cdFx0Y29uc3QgJG1pbmltaXplID0gJGhlYWRlci5maW5kKCcuTWluaW1pemUnKTtcblx0XHRjb25zdCAkc21hbGxTaXplID0gJGhlYWRlci5maW5kKCcuU21hbGwnKTtcblx0XHRjb25zdCAkbWVkaXVtU2l6ZSA9ICRoZWFkZXIuZmluZCgnLk1lZGl1bScpO1xuXHRcdGNvbnN0ICRmdWxsU2NyZWVuID0gJGhlYWRlci5maW5kKCcuRnVsbFNjcmVlbicpO1xuXHRcdGNvbnN0ICRyZXN0b3JlV2luZG93ID0gJHdpZGdldC5maW5kKCcuUmVtb3RlQXBwb2ludG1lbnRfX1Jlc3RvcmVXaW5kb3cnKTtcblxuXHRcdGxldCBpc1ByZXZpb3VzU21hbGwgPSAkc21hbGxTaXplLmlzKCc6dmlzaWJsZScpO1xuXG5cdFx0JG1pbmltaXplLmNsaWNrKCgpID0+IHtcblx0XHRcdGlzUHJldmlvdXNTbWFsbCA9ICRtZWRpdW1TaXplLmlzKCc6dmlzaWJsZScpO1xuXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKHsgZGlzYWJsZWQ6IHRydWUgfSk7XG5cblx0XHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1taW5pbWl6ZWQnKTtcblx0XHRcdCRtaW5pbWl6ZS5oaWRlKCk7XG5cdFx0XHQkbWVkaXVtU2l6ZS5zaG93KCk7XG5cblx0XHRcdCR3aWRnZXQuYW5pbWF0ZShtaW5pbWl6ZWRQb3NpdGlvbigkaGVhZGVyLmhlaWdodCgpKSk7XG5cdFx0fSk7XG5cblx0XHQkc21hbGxTaXplLmNsaWNrKCgpID0+IHtcblx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1taW5pbWl6ZWQnKTtcblx0XHRcdCRtaW5pbWl6ZS5zaG93KCk7XG5cdFx0XHQkc21hbGxTaXplLmhpZGUoKTtcblx0XHRcdCRtZWRpdW1TaXplLnNob3coKTtcblxuXHRcdFx0JHdpZGdldC5hbmltYXRlKHtcblx0XHRcdFx0dG9wOiAnNTAlJyxcblx0XHRcdFx0cmlnaHQ6ICc1MCUnLFxuXHRcdFx0XHRsZWZ0OiAnNTAlJyxcblx0XHRcdFx0d2lkdGg6ICcyODBweCcsXG5cdFx0XHRcdGhlaWdodDogJzM4MHB4Jyxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JG1lZGl1bVNpemUuY2xpY2soKCkgPT4ge1xuXHRcdFx0Y29uc3QgaXNDYWxsU3RhcnRlZCA9ICR3aWRnZXQuaGFzQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1jYWxsU3RhcnRlZCcpO1xuXG5cdFx0XHQvLyR3aWRnZXQuZHJhZ2dhYmxlKCdlbmFibGUnKTtcblxuXHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLW1pbmltaXplZCcpO1xuXHRcdFx0JG1pbmltaXplLnNob3coKTtcblx0XHRcdCRtZWRpdW1TaXplLmhpZGUoKTtcblx0XHRcdGlmIChpc0NhbGxTdGFydGVkKSAkc21hbGxTaXplLnNob3coKTtcblxuXHRcdFx0JHdpZGdldC5hbmltYXRlKHtcblx0XHRcdFx0dG9wOiAnNTAlJyxcblx0XHRcdFx0cmlnaHQ6ICc1MCUnLFxuXHRcdFx0XHRsZWZ0OiAnNTAlJyxcblx0XHRcdFx0d2lkdGg6IGlzQ2FsbFN0YXJ0ZWQgPyAnNDV2dycgOiAnNDUwcHgnLFxuXHRcdFx0XHRoZWlnaHQ6IGlzQ2FsbFN0YXJ0ZWQgPyAnNDV2aCcgOiAnMjYwcHgnLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQkZnVsbFNjcmVlbi5jbGljaygoKSA9PiB7XG5cdFx0XHRjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUmVtb3RlQXBwb2ludG1lbnQgaWZyYW1lJyk7XG5cblx0XHRcdGlmIChpZnJhbWUucmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0aWZyYW1lLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0XHRpZnJhbWUud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRyZXN0b3JlV2luZG93LmNsaWNrKCgpID0+IHtcblx0XHRcdGlmIChpc1ByZXZpb3VzU21hbGwpICRzbWFsbFNpemUuY2xpY2soKTtcblx0XHRcdGVsc2UgJG1lZGl1bVNpemUuY2xpY2soKTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0JHdpZGdldC5kcmFnZ2FibGUoe1xuXHRcdFx0XHRjb250YWlubWVudDogJ3dpbmRvdycsXG5cdFx0XHRcdGhhbmRsZTogJGhlYWRlcixcblx0XHRcdFx0c2Nyb2xsOiBmYWxzZSxcblx0XHRcdFx0c25hcDogdHJ1ZSxcblx0XHRcdFx0aWZyYW1lRml4OiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdGZha2VBamF4UmVmcmVzaCgpO1xuXHRcdH0pO1xuXG5cdFx0Y2hlY2tJZnJhbWVMb2FkZWQoKTtcblx0fTtcblxuXHRjb25zdCBtaW5pbWl6ZWRQb3NpdGlvbiA9IChoZWFkZXJIZWlnaHQgPSA0OCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6ICQod2luZG93KS5oZWlnaHQoKSAtIGhlYWRlckhlaWdodCAtIDE2LFxuXHRcdFx0cmlnaHQ6ICc3NnB4Jyxcblx0XHRcdGxlZnQ6ICQod2luZG93KS53aWR0aCgpIC0gMjgwIC0gNjAgLSAxNixcblx0XHRcdHdpZHRoOiAnMjc1cHgnLFxuXHRcdFx0aGVpZ2h0OiAnNDhweCcsXG5cdFx0fTtcblx0fTtcblxuXHRjb25zdCByZXNpemVXaGVuSm9pbiA9ICgpID0+IHtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XG5cdFx0Y29uc3QgJHNtYWxsU2l6ZSA9ICR3aWRnZXQuZmluZCgnLlNtYWxsJyk7XG5cblx0XHQkc21hbGxTaXplLnNob3coKTtcblx0XHQkd2lkZ2V0LmFkZENsYXNzKCdSZW1vdGVBcHBvaW50bWVudC0tY2FsbFN0YXJ0ZWQnKTtcblxuXHRcdCR3aWRnZXQuY3NzKHtcblx0XHRcdGhlaWdodDogJzQ1dmgnLFxuXHRcdFx0d2lkdGg6ICc0NXZ3Jyxcblx0XHR9KTtcblxuXHRcdGNvbnN0IGNlbnRlclB4ID0gKCQod2luZG93LnRvcCkud2lkdGgoKSAtICR3aWRnZXQud2lkdGgoKSkgLyAyO1xuXG5cdFx0JHdpZGdldC5jc3Moe1xuXHRcdFx0aW5zZXQ6IGAyMzBweCBhdXRvIGF1dG8gJHtjZW50ZXJQeH1weGAsXG5cdFx0fSk7XG5cblx0XHRsZXQgdGltZW91dDtcblxuXHRcdGZ1bmN0aW9uIHdhcm5pbmcoZSkge1xuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIEhhY2sgdG8ga2VlcCB0aGUgY3VycmVudCB0YWIgc2VsZWN0ZWQgaWYgdXNlciBkb2Vzbid0IGdvIHRvIGFub3RoZXIgcGFnZVxuXHRcdFx0XHRjb25zdCBpZnJhbWVDb250ZW50cyA9IHdpbmRvdy50b3AuJCgnLk1haW5Db250ZW50ID4gaWZyYW1lJykuY29udGVudHMoKTtcblx0XHRcdFx0Y29uc3QgdGFiSXRlbXMgPSBpZnJhbWVDb250ZW50cy5maW5kKCcuVGFiV3JhcHBlcicpO1xuXG5cdFx0XHRcdHRhYkl0ZW1zLnJlbW92ZUNsYXNzKCdBY3RpdmUnKTtcblx0XHRcdFx0dGFiSXRlbXMuZmlyc3QoKS5hZGRDbGFzcygnQWN0aXZlJyk7XG5cdFx0XHR9LCAxMDAwKTtcblxuXHRcdFx0cmV0dXJuIChlLnJldHVyblZhbHVlID0gJ1lvdSBhcmUgbGVhdmluZyB0aGUgcGFnZScpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG5vVGltZW91dCgpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR9XG5cblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gd2FybmluZztcblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG5vVGltZW91dDtcblxuXHRcdC8qd2luZG93LnRvcC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnJldHVyblZhbHVlID0gJzEyMyc7XG5cdFx0fSk7Ki9cblx0fTtcblxuXHRjb25zdCBzZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xuXHRcdGNvbnN0ICRzbWFsbFNpemUgPSAkd2lkZ2V0LmZpbmQoJy5TbWFsbCcpO1xuXHRcdGNvbnN0ICRtZWRpdW1TaXplID0gJHdpZGdldC5maW5kKCcuTWVkaXVtJyk7XG5cblx0XHQkc21hbGxTaXplLmhpZGUoKTtcblx0XHQkbWVkaXVtU2l6ZS5oaWRlKCk7XG5cdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLWNhbGxTdGFydGVkJyk7XG5cblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XG5cdFx0d2luZG93LnRvcC5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG5cblx0XHQkKCcuUmVtb3RlQXBwb2ludG1lbnQnKS5jc3Moe1xuXHRcdFx0ZGlzcGxheTogJ2luaXRpYWwnLFxuXHRcdFx0cmlnaHQ6ICcyMiUnLFxuXHRcdFx0dG9wOiAnMzAlJyxcblx0XHRcdGhlaWdodDogJzI2MHB4Jyxcblx0XHRcdHdpZHRoOiAnNDUwcHgnLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHNldE1vZGFsTWluaW1pemVkID0gKCkgPT4ge1xuXHRcdC8vIFRvIHVzZSBvbmx5IGluc2lkZSBTYXBwaGlyZSBpRnJhbWUgcGFnZXNcblx0XHRjb25zdCAkbW9kYWxSZW1vdGVBcHB0ID0gd2luZG93LnRvcC4kKCcuUmVtb3RlQXBwb2ludG1lbnQnKTtcblxuXHRcdGlmICgkbW9kYWxSZW1vdGVBcHB0Lmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgJG1pbmltaXplTW9kYWwgPSAkbW9kYWxSZW1vdGVBcHB0LmZpbmQoJy5NaW5pbWl6ZScpO1xuXHRcdFx0JG1pbmltaXplTW9kYWwuY2xpY2soKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2hlY2tJZnJhbWVMb2FkZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgaWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnU2FwcGhpcmVGcmFtZScpWzBdO1xuXHRcdGNvbnN0IGlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cblx0XHRpZiAoaWZyYW1lRG9jLnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykge1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNldEluaXRpYWxTdGF0ZSgpO1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNoZWNrSWZyYW1lTG9hZGVkLCAxMDApO1xuXHR9O1xuXG5cdGNvbnN0IHNldENhbGxTdGFydGVkID0gKCkgPT4ge307XG5cblx0Y29uc3QgZmFrZUFqYXhSZWZyZXNoID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRpZnJhbWUgPSAkKCcuU2FwcGhpcmVGcmFtZScpO1xuXG5cdFx0JGlmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JGlmcmFtZVswXS5jb250ZW50V2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHQkKCcuRmVlZGJhY2tfQWpheFdhaXQnKS5zaG93KCk7XG5cdFx0XHR9O1xuXG5cdFx0XHQkKCcuRmVlZGJhY2tfQWpheFdhaXQnKS5oaWRlKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgb3Blbk1vZGFsTGVhdmVDb250ZXh0ID0gdXJsID0+IHtcblx0XHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQubGVhdmVVUkwgPSB1cmw7XG5cblx0XHR3aW5kb3cudG9wLnVubG9hZCA9IG51bGw7XG5cdFx0d2luZG93LnRvcC5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG5cblx0XHQkKCcuT3Blbk1vZGFsTGVhdmVDb250ZXh0JykuY2xpY2soKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuUmVtb3RlQXBwb2ludG1lbnQgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdHJlc2l6ZVdoZW5Kb2luLFxuXHRcdHNldENhbGxTdGFydGVkLFxuXHRcdHNldEluaXRpYWxTdGF0ZSxcblx0XHRmYWtlQWpheFJlZnJlc2gsXG5cdFx0c2V0TW9kYWxNaW5pbWl6ZWQsXG5cdFx0b3Blbk1vZGFsTGVhdmVDb250ZXh0LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvL1NhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgPSB3aW5kb3cuU2FwcGhpcmVXaWRnZXRzIHx8IHt9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==