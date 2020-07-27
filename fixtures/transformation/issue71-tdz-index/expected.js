import getLog from './log';

const log = _get__('getLog')('main');

export function getLogConstant() {
	return _get__('log');
}
let _DefaultExportValue = 'test';
export default _DefaultExportValue;

function _getGlobalObject() {
	try {
		if (!!global) {
			return global;
		}
	} catch (e) {
		try {
			if (!!window) {
				return window;
			}
		} catch (e) {
			return this;
		}
	}
}

;
var _RewireModuleId__ = null;

function _getRewireModuleId__() {
	if (_RewireModuleId__ === null) {
		let globalVariable = _getGlobalObject();

		if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
			globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
		}

		_RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
	}

	return _RewireModuleId__;
}

function _getRewireRegistry__() {
	let theGlobalVariable = _getGlobalObject();

	if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
		theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
	}

	return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}

function _getRewireExportsRegistry__() {
	let theGlobalVariable = _getGlobalObject();

	if (!theGlobalVariable.__$$GLOBAL_REWIRE_EXPORTS_REGISTRY__) {
		theGlobalVariable.__$$GLOBAL_REWIRE_EXPORTS_REGISTRY__ = Object.create(null);
	}

	return theGlobalVariable.__$$GLOBAL_REWIRE_EXPORTS_REGISTRY__;
}

const _sync_internal_state_with_exports__ = true;

const _exports_to_reset__ = new Map();

function _record_export_to_reset__(variableName, value) {
	if (!_sync_internal_state_with_exports__) {
		return;
	}

	if (!Object.prototype.hasOwnProperty.call(exports, variableName)) {
		return;
	}

	if (!_exports_to_reset__.has(variableName)) {
		_exports_to_reset__.set(variableName, value);
	}
}

function _restore_exports__() {
	const entries = _exports_to_reset__.entries();

	for (const [variableName, value] of entries) {
		exports[variableName] = value;
	}

	_exports_to_reset__.clear();
}

function _maybe_update_export__(variableName, value) {
	if (!_sync_internal_state_with_exports__) {
		return;
	}

	if (!Object.prototype.hasOwnProperty.call(exports, variableName)) {
		return;
	}

	_record_export_to_reset__(variableName, exports[variableName]);

	exports[variableName] = value;
}

function _getRewiredData__() {
	let moduleId = _getRewireModuleId__();

	let registry = _getRewireRegistry__();

	let rewireData = registry[moduleId];

	if (!rewireData) {
		registry[moduleId] = Object.create(null);
		rewireData = registry[moduleId];
	}

	let exportsRegistry = _getRewireExportsRegistry__();

	if (!exportsRegistry[moduleId]) {
		exportsRegistry[moduleId] = _restore_exports__;
	}

	return rewireData;
}

(function registerResetAll() {
	let theGlobalVariable = _getGlobalObject();

	if (!theGlobalVariable['__rewire_reset_all__']) {
		theGlobalVariable['__rewire_reset_all__'] = function () {
			theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);

			const exportsRegistry = _getRewireExportsRegistry__();

			for (const restoreFunc of Object.values(exportsRegistry)) {
				restoreFunc();
			}

			theGlobalVariable.__$$GLOBAL_REWIRE_EXPORTS_REGISTRY__ = Object.create(null);
		};
	}
})();

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};

(function () {
	function addPropertyToAPIObject(name, value) {
		Object.defineProperty(_RewireAPI__, name, {
			value: value,
			enumerable: false,
			configurable: true
		});
	}

	addPropertyToAPIObject('__get__', _get__);
	addPropertyToAPIObject('__GetDependency__', _get__);
	addPropertyToAPIObject('__Rewire__', _set__);
	addPropertyToAPIObject('__set__', _set__);
	addPropertyToAPIObject('__reset__', _reset__);
	addPropertyToAPIObject('__ResetDependency__', _reset__);
	addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
	let rewireData = _getRewiredData__();

	if (rewireData[variableName] === undefined) {
		return _get_original__(variableName);
	} else {
		var value = rewireData[variableName];

		if (value === INTENTIONAL_UNDEFINED) {
			return undefined;
		} else {
			return value;
		}
	}
}

function _get_original__(variableName) {
	switch (variableName) {
		case 'getLog':
			return getLog;

		case 'log':
			return log;
	}

	return undefined;
}

function _assign__(variableName, value) {
	let rewireData = _getRewiredData__();

	if (rewireData[variableName] === undefined) {
		return _set_original__(variableName, value);
	} else {
		_maybe_update_export__(variableName, value);

		return rewireData[variableName] = value;
	}
}

function _set_original__(variableName, _value) {
	switch (variableName) {}

	return undefined;
}

function _update_operation__(operation, variableName, prefix) {
	var oldValue = _get__(variableName);

	var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	_assign__(variableName, newValue);

	return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
	let rewireData = _getRewiredData__();

	if (typeof variableName === 'object') {
		Object.keys(variableName).forEach(function (name) {
			rewireData[name] = variableName[name];
		});
		return function () {
			Object.keys(variableName).forEach(function (name) {
				_reset__(variableName);
			});
		};
	} else {
		_maybe_update_export__(variableName, value);

		if (value === undefined) {
			rewireData[variableName] = INTENTIONAL_UNDEFINED;
		} else {
			rewireData[variableName] = value;
		}

		return function () {
			_reset__(variableName);
		};
	}
}

function _reset__(variableName) {
	let rewireData = _getRewiredData__();

	delete rewireData[variableName];

	if (Object.keys(rewireData).length == 0) {
		delete _getRewireRegistry__()[_getRewireModuleId__];
	}

	if (_exports_to_reset__.has(variableName)) {
		exports[variableName] = _exports_to_reset__.get(variableName);

		_exports_to_reset__.delete(variableName);
	}
}

function _with__(object) {
	let rewireData = _getRewiredData__();

	var rewiredVariableNames = Object.keys(object);
	var previousValues = {};

	function reset() {
		rewiredVariableNames.forEach(function (variableName) {
			rewireData[variableName] = previousValues[variableName];
		});
	}

	return function (callback) {
		rewiredVariableNames.forEach(function (variableName) {
			previousValues[variableName] = rewireData[variableName];
			rewireData[variableName] = object[variableName];
		});
		let result = callback();

		if (!!result && typeof result.then == 'function') {
			result.then(reset).catch(reset);
		} else {
			reset();
		}

		return result;
	};
}

let _typeOfOriginalExport = typeof _DefaultExportValue;

function addNonEnumerableProperty(name, value) {
	Object.defineProperty(_DefaultExportValue, name, {
		value: value,
		enumerable: false,
		configurable: true
	});
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(_DefaultExportValue)) {
	addNonEnumerableProperty('__get__', _get__);
	addNonEnumerableProperty('__GetDependency__', _get__);
	addNonEnumerableProperty('__Rewire__', _set__);
	addNonEnumerableProperty('__set__', _set__);
	addNonEnumerableProperty('__reset__', _reset__);
	addNonEnumerableProperty('__ResetDependency__', _reset__);
	addNonEnumerableProperty('__with__', _with__);
	addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

export { _get__ as __get__, _get__ as __GetDependency__, _set__ as __Rewire__, _set__ as __set__, _reset__ as __ResetDependency__, _RewireAPI__ as __RewireAPI__ };