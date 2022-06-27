"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const a = (react_1.default.createElement("div", { tabIndex: 0 },
    react_1.default.createElement("span", null, "example"),
    1 + 1));
const b = react_1.default.createElement("div", { tabIndex: 0 }, "example");
const c = react_1.default.createElement("div", { tabIndex: 0 }, "example");
// const a = <string>b; error
const d = {};
const e = d;
