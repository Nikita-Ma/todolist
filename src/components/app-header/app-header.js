"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./app-header.css");
const AppHeader = ({ toDo, done }) => {
    return (react_1.default.createElement("div", { className: "app-header d-flex" },
        react_1.default.createElement("h1", null, "Todo List"),
        react_1.default.createElement("h2", null,
            toDo,
            " more to do, ",
            done,
            " done")));
};
exports.default = AppHeader;
