"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const index_js_1 = __importDefault(require("./components/app/index.js"));
react_dom_1.default.render(react_1.default.createElement(index_js_1.default), document.getElementById('root'));
