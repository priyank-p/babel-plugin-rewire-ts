function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Multiple variable declarators test case
export let a, b, c;
export let d = '';

let do_not_include = ':(';
export function e() {
    // To make sure rewire applies it's transformation
    // and to test his does't count as a export!
    _assign__('do_not_include', ':((((');
}

// To test that identifiers inside the class
// do not count as identifier
let do_not_include_class = ':(';
export class f {
    constructor() {
        _assign__('do_not_include_class', ':((((');
    }
}

// Export specifier's to test that we don't
// count local identifier as exported.
let g_local, h_local, i_local;
export { g_local as g, h_local as h };
export { i_local as i };

// Spread operator test. j and k should be
// recognized as exported.
const do_not_include_obj = {};
const _get__2 = _get__('do_not_include_obj'),
      { j } = _get__2,
      k = _objectWithoutProperties(_get__2, ['j']);

// Export all should be ignored
export { j, k };
export * from '';
import * as _l from '2';
export { _l as l };


export { m, n, o } from '2';
export { import1 as p, import2 as q, r } from 'd';

// This will test the function expression, and class expression
// case.
export const s = function do_not_include_func() {
    let do_not_include_2 = ':(';
},
      t = function () {
    let do_not_include_3 = ':(';
},
      u = () => {
    let do_not_include_4 = ':(';
},
      v = class DoNotIncludeClass {
    constructor() {
        let do_not_include_5 = ':(';
    }
},
      w = class {
    constructor() {
        let do_not_include_6 = ':(';
    }
};

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

function _getRewiredData__() {
    let moduleId = _getRewireModuleId__();

    let registry = _getRewireRegistry__();

    let rewireData = registry[moduleId];

    if (!rewireData) {
        registry[moduleId] = Object.create(null);
        rewireData = registry[moduleId];
    }

    return rewireData;
}

const _exports_to_reset__ = new Map();

function _record_export__(variableName, value) {
    if (!_exports_to_reset__.has(variableName)) {
        _exports_to_reset__.set(variableName, value);
    }
}

(function registerResetAll() {
    let theGlobalVariable = _getGlobalObject();

    if (!theGlobalVariable['__rewire_reset_all__']) {
        theGlobalVariable['__rewire_reset_all__'] = function () {
            theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
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
        case 'do_not_include':
            return do_not_include;

        case 'do_not_include_class':
            return do_not_include_class;

        case 'do_not_include_obj':
            return do_not_include_obj;
    }

    return undefined;
}

function _assign__(variableName, value) {
    let rewireData = _getRewiredData__();

    if (rewireData[variableName] === undefined) {
        var isExportedVar = Object.prototype.hasOwnProperty.call(exports, variableName);

        if (isExportedVar && _exports_to_reset__.has(variableName)) {
            _exports_to_reset__.set(variableName, value);
        }

        return _set_original__(variableName, value);
    } else {
        return rewireData[variableName] = value;
    }
}

function _set_original__(variableName, _value) {
    switch (variableName) {
        case 'do_not_include':
            return do_not_include = _value;

        case 'do_not_include_class':
            return do_not_include_class = _value;
    }

    return undefined;
}

function _update_operation__(operation, variableName, prefix) {
    var oldValue = _get__(variableName);

    var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

    _assign__(variableName, newValue);

    return prefix ? newValue : oldValue;
}

function _update_export__(variableName, _value) {
    switch (variableName) {
        case 'e':
            _record_export__('e', e);

            return exports.e = _value;
    }

    return undefined;
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

    if (_exports_to_reset__.has(variableName)) {
        const value = _exports_to_reset__.get(variableName);

        _update_export__(variableName, value);

        _exports_to_reset__.delete(variableName);
    }

    if (Object.keys(rewireData).length == 0) {
        delete _getRewireRegistry__()[_getRewireModuleId__];
    }

    ;
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

export { _get__ as __get__, _get__ as __GetDependency__, _set__ as __Rewire__, _set__ as __set__, _reset__ as __ResetDependency__, _RewireAPI__ as __RewireAPI__ };
export default _RewireAPI__;