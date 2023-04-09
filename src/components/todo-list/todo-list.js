"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const todo_list_item_1 = __importDefault(require("../todo-list-item/todo-list-item"));
require("./todo-list.css");
const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
    const elements = todos.map((item) => {
        const { id } = item, itemProps = __rest(item, ["id"]);
        return (react_1.default.createElement("li", { key: id, className: "list-group-item" },
            react_1.default.createElement(todo_list_item_1.default, Object.assign({}, itemProps, { onDeleted: () => {
                    onDeleted(id);
                }, onToggleImportant: () => onToggleImportant(id), onToggleDone: () => onToggleDone(id) }))));
    });
    return (react_1.default.createElement("ul", { className: "list-group todo-list" }, elements));
};
exports.default = TodoList;
