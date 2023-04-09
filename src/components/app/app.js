"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const app_header_1 = __importDefault(require("../app-header"));
const search_panel_1 = __importDefault(require("../search-panel"));
const todo_list_1 = __importDefault(require("../todo-list"));
const item_status_filter_1 = __importDefault(require("../item-status-filter"));
const item_add_form_1 = __importDefault(require("../item-add-form"));
require("./app.css");
class App extends react_1.Component {
    constructor() {
        super(...arguments);
        this.maxId = 100;
        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have a lunch')
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                const idx = todoData.findIndex((el) => el.id === id);
                const newArray = [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ];
                return {
                    todoData: newArray
                };
            });
        };
        this.addItem = (text) => {
            const newItem = this.createTodoItem(text);
            this.setState(({ todoData }) => {
                const newArr = [
                    ...todoData,
                    newItem
                ];
                return {
                    todoData: newArr
                };
            });
        };
        this.onToggleDone = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                };
            });
        };
        this.onToggleImportant = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                };
            });
        };
        this.SearchChange = (term) => {
            this.setState({ term });
        };
        this.onFilterChange = (filter) => {
            this.setState({ filter });
        };
    }
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = Object.assign(Object.assign({}, oldItem), { [propName]: !oldItem[propName] });
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }
    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }
    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }
    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (react_1.default.createElement("div", { className: "todo-app" },
            react_1.default.createElement(app_header_1.default, { toDo: todoCount, done: doneCount }),
            react_1.default.createElement("div", { className: "top-panel d-flex" },
                react_1.default.createElement(search_panel_1.default, { onSearchChange: this.SearchChange }),
                react_1.default.createElement(item_status_filter_1.default, { filter: filter, onFilterChange: this.onFilterChange })),
            react_1.default.createElement(todo_list_1.default, { todos: visibleItems, onDeleted: this.deleteItem, onToggleImportant: this.onToggleImportant, onToggleDone: this.onToggleDone }),
            react_1.default.createElement(item_add_form_1.default, { onItemAdded: this.addItem })));
    }
}
exports.default = App;
;
