"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headerValidators = headerValidators;
exports.tableStyleValidators = tableStyleValidators;
exports.validateDocProps = validateDocProps;
exports.validateTableProps = validateTableProps;
exports.validateTextProps = validateTextProps;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Validates props for <Document /> component
 * @param {Object} props Component props
 */
function validateDocProps(props) {
  var info = props.info,
    align = props.align;
  var infoSchema = ['author', 'description', 'keywords', 'orientation', 'subject', 'title'];
  var infoKeys = Object.keys(info || {});
  var alignValues = ['left', 'right', 'center', 'justify'];
  if (info && _typeof(info) !== 'object') {
    throw new Error('\'info\' prop expected an information object.');
  }
  infoKeys.forEach(function (key) {
    if (!infoSchema.includes(key)) {
      throw new Error("'".concat(key, "' is an invalid property for document description."));
    }
  });
  if (align && !alignValues.includes(align)) {
    throw new Error('\'align\' prop can only take \'left\', \'right\', \'center\' and \'justify\'');
  }
}

/**
 * Validates props for <Table /> component
 * @param {Object} props Component props
 */
function validateTableProps(props) {
  var headers = props.headers,
    data = props.data,
    style = props.style;
  var knownProps = ['headers', 'data', 'style'];
  if (headers && !Array.isArray(headers)) {
    throw new Error('\'headers\' prop expected an array of object corresponding to the values for headers. For example - [{ value: \'Name\', styles: { color: \'mistyrose\' }}]');
  }
  if (data && !Array.isArray(data)) {
    throw new Error('\'data\' prop expected an array of array values for each cell in row. For example - Considering there are three headers, name, subject and marks, the values will be  [[\'A\', \'Maths\', \'30\'], [\'B\', \'Computer Science\', \'40\']]');
  }
  if (style && _typeof(style) !== 'object') {
    throw new Error('style prop expected an object of table styles.');
  }
  var keys = Object.keys(props);
  keys.forEach(function (key) {
    if (!knownProps.includes(key)) {
      throw new Error("Unknown prop '".concat(key, "' passed to <Table /> component. Supported props are headers, data and style."));
    }
  });
}

/**
 * Validates schema for headers prop in <Table /> component
 * @param {Object} props Component props
 */
function headerValidators(props) {
  var headers = props.headers;
  var headerSchema = ['value', 'styles'];
  var styleSchema = ['bold', 'size', 'color', 'align', 'vAlign', 'fontFamily', 'fill'];
  headers.forEach(function (header) {
    Object.keys(header).forEach(function (key) {
      if (!headerSchema.includes(key)) {
        throw new Error("'".concat(key, "' is not supported as a property for headers. Valid property names are 'value' and 'styles'."));
      }
    });
  });
  headers.forEach(function (header) {
    Object.keys(header.styles).forEach(function (key) {
      if (!styleSchema.includes(key)) {
        throw new Error("'".concat(key, "' is an invalid style property for header. Check the style value for header ").concat(headers.indexOf(key) + 1));
      }
    });
  });
}

/**
 * Validates schema for style prop in <Table /> component
 * (currently styles cannot be extended so style schema is needed)
 *
 * @param {Object} props Component props
 */
function tableStyleValidators(props) {
  var style = props.style;
  var styleKeys = Object.keys(style || {});
  var tableStyleSchema = ['tableColWidth', 'tableSize', 'tableColor', 'tableAlign', 'borders'];
  styleKeys.forEach(function (key) {
    if (!tableStyleSchema.includes(key)) {
      throw new Error("'".concat(key, "' is an invalid style property for table style."));
    }
  });
}

/**
 * Validates the props for Text component
 * @param {Object} props Component props
 */
function validateTextProps(props) {
  var knownProps = ['style', 'align', 'children'];
  var takesProps = Object.keys(props || {});
  takesProps.forEach(function (prop) {
    if (!knownProps.includes(prop)) {
      throw new Error("Unknown prop '".concat(prop, "' passed to Text component. Supported props are 'style' and 'align'."));
    }
  });
}