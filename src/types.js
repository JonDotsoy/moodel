"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultTypes_1 = require("./defaultTypes");
const customTypes_1 = require("./customTypes");
const assingned = (a, b) => {
    // @ts-ignore
    return Object.assign(a, b);
};
exports.types = assingned(customTypes_1.customTypes, defaultTypes_1.defaultTypes);
