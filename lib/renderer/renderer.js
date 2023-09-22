"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WordRenderer = void 0;
var _reactReconciler = _interopRequireDefault(require("react-reconciler"));
var _createElement = require("../utils/createElement");
var _RendererHostConfig;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable */
var RendererHostConfig = (_RendererHostConfig = {
  appendInitialChild: function appendInitialChild(parentInstance, child) {
    if (parentInstance.appendChild) {
      parentInstance.appendChild(child);
    } else {
      parentInstance.document = child;
    }
  },
  createInstance: function createInstance(type, props, internalInstanceHandle) {
    return (0, _createElement.createElement)(type, props);
  },
  createTextInstance: function createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    return text;
  },
  finalizeInitialChildren: function finalizeInitialChildren(wordElement, type, props) {
    return false;
  },
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  prepareForCommit: function prepareForCommit() {
    // noop
  },
  prepareUpdate: function prepareUpdate(wordElement, type, oldProps, newProps) {
    return true;
  },
  resetAfterCommit: function resetAfterCommit() {
    // noop
  },
  resetTextContent: function resetTextContent(wordElement) {
    // Reoffice does not have a text node like DOM
  }
}, _defineProperty(_RendererHostConfig, "createInstance", function createInstance(type, props, internalInstanceHandle) {
  // 'internalInstanceHandle' is not transparent here. So use host context methods
  // to get data from roots
  return (0, _createElement.createElement)(type, props);
}), _defineProperty(_RendererHostConfig, "getRootHostContext", function getRootHostContext(instance) {
  // getHostContextNode here updates the internal state of createElement and stores a ref to current instance
  return (0, _createElement.getHostContextNode)(instance);
}), _defineProperty(_RendererHostConfig, "getChildHostContext", function getChildHostContext() {
  var context = {};
  return context;
}), _defineProperty(_RendererHostConfig, "shouldSetTextContent", function shouldSetTextContent(type, props) {
  return false; // Reoffice does not have a text node like DOM
}), _defineProperty(_RendererHostConfig, "now", function now() {
  return Date.now;
}), _defineProperty(_RendererHostConfig, "supportsMutation", true), _defineProperty(_RendererHostConfig, "appendChild", function appendChild(parentInstance, child) {
  if (parentInstance.appendChild) {
    parentInstance.appendChild(child);
  } else {
    parentInstance.document = child;
  }
}), _defineProperty(_RendererHostConfig, "appendChildToContainer", function appendChildToContainer(parentInstance, child) {
  if (parentInstance.appendChild) {
    parentInstance.appendChild(child);
  } else {
    parentInstance.document = child;
  }
}), _defineProperty(_RendererHostConfig, "removeChild", function removeChild(parentInstance, child) {
  parentInstance.removeChild(child);
}), _defineProperty(_RendererHostConfig, "removeChildFromContainer", function removeChildFromContainer(parentInstance, child) {
  parentInstance.removeChild(child);
}), _defineProperty(_RendererHostConfig, "insertBefore", function insertBefore(parentInstance, child, beforeChild) {
  // noop
}), _defineProperty(_RendererHostConfig, "commitUpdate", function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
  // noop
}), _defineProperty(_RendererHostConfig, "commitMount", function commitMount(instance, updatePayload, type, oldProps, newProps) {
  // noop
}), _defineProperty(_RendererHostConfig, "commitTextUpdate", function commitTextUpdate(textInstance, oldText, newText) {
  textInstance.children = newText;
}), _defineProperty(_RendererHostConfig, "clearContainer", function clearContainer(container) {
  // noop
}), _RendererHostConfig);
var WordRenderer = (0, _reactReconciler["default"])(RendererHostConfig);
exports.WordRenderer = WordRenderer;