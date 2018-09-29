"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customTypes_1 = require("./customTypes");
exports.defaultTypes = {
    get String() { return customTypes_1.customTypes(String); },
    get Number() { return customTypes_1.customTypes(Number); },
    get Boolean() { return customTypes_1.customTypes(Boolean); },
    get Date() { return customTypes_1.customTypes(Date); },
    get Any() { return customTypes_1.customTypes(String); },
    getOwnOptions(typeDef) {
        const typeOptions = typeDef.typeOptions;
        return typeOptions;
    }
};
