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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./item-add-form.css");
class ItemAddForm extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            label: ''
        };
        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value
            });
        };
        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            });
        };
    }
    render() {
        return (react_1.default.createElement("form", { className: "item-add-form d-flex", onSubmit: this.onSubmit },
            react_1.default.createElement("input", { type: "text", className: "form-control", onChange: this.onLabelChange, placeholder: "Add task on list..", value: this.state.label }),
            react_1.default.createElement("button", { className: "btn btn-warning" }, "Add item")));
    }
}
exports.default = ItemAddForm;
