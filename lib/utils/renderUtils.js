"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = Events;
exports.validateElement = validateElement;
exports.validatePath = validatePath;
var _path = _interopRequireDefault(require("path"));
var _minimatch = require("minimatch");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Document element
 * @param {Object} element
 */
function validateElement(element) {
  if (!element) {
    throw new Error('Render method expected an element.');
  }
  if (typeof element === 'string') {
    throw new Error("Invalid component element. Instead of passing string like 'text', pass a class or functional component. For example - <Document />");
  }
  return true;
}

/**
 * Filepath for the document
 * @param {string} filePath
 */
function validatePath(filePath) {
  if (filePath === null || filePath === undefined) {
    throw new Error('Please specify a file path for the document');
  }
  var fileName = _path["default"].basename(filePath);
  var pattern = '*.docx';
  if (!(0, _minimatch.minimatch)(fileName, pattern)) {
    throw new Error("Invalid filename '".concat(_path["default"].basename(filePath), "'. Make sure the extension is '.docx'"));
  }
  return true;
}
function Events(filePath, resolve, reject) {
  return {
    finalize: function finalize() {
      console.log("\u2728  Word document created at ".concat(_path["default"].resolve(filePath), "."));
      resolve();
    },
    error: function error() {
      console.log('An error occurred while generating the document.');
      reject();
    }
  };
}