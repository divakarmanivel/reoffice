"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Table = exports.PageBreak = exports.NumberItem = exports.List = exports.LineBreak = exports.Image = exports.Hr = exports.Header = exports.Footer = exports.Document = exports.BulletItem = void 0;
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function get() {
    return _render.render;
  }
});
var _render = require("./renderer/render");
/**
 * Component name (input to createElement function call after transpilation with Babel)
 */
var Text = 'TEXT';
exports.Text = Text;
var Image = 'IMAGE';
exports.Image = Image;
var List = 'LIST';
exports.List = List;
var NumberItem = 'NUMBERITEM';
exports.NumberItem = NumberItem;
var BulletItem = 'BULLETITEM';
exports.BulletItem = BulletItem;
var LineBreak = 'LINEBREAK';
exports.LineBreak = LineBreak;
var PageBreak = 'PAGEBREAK';
exports.PageBreak = PageBreak;
var Document = 'DOCUMENT';
exports.Document = Document;
var Hr = 'HR';
exports.Hr = Hr;
var Table = 'TABLE';
exports.Table = Table;
var Header = 'HEADER';
exports.Header = Header;
var Footer = 'FOOTER';

/**
 * Main export
 */
exports.Footer = Footer;