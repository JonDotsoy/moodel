"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypeOptions_1 = require("./TypeOptions");
class TypeDef {
    constructor(initialDef) {
        this.typeOptions = new TypeOptions_1.TypeOptions(initialDef || { type: undefined });
    }
    get trim() {
        this.typeOptions.trim = true;
        return this;
    }
    get readonly() {
        this.typeOptions.readonly = true;
        return this;
    }
    get uppercase() {
        this.typeOptions.uppercase = true;
        return this;
    }
    get lowercase() {
        this.typeOptions.lowercase = true;
        return this;
    }
    get required() {
        this.typeOptions.required = true;
        return this;
    }
    enum(...vals) {
        // @ts-ignore
        this.typeOptions.enum = [].concat(...vals);
        return this;
    }
    default(defaultVal) {
        this.typeOptions.default = defaultVal;
        return this;
    }
    setter(setter) {
        this.typeOptions.setter = setter;
        return this;
    }
    getter(getter) {
        this.typeOptions.getter = getter;
        return this;
    }
    min(minVal) {
        this.typeOptions.min = minVal;
        return this;
    }
    max(maxVal) {
        this.typeOptions.max = maxVal;
        return this;
    }
    /** @returns {TypeOptions<T>} */
    toJSON() {
        return this.typeOptions;
    }
    // @ts-ignore
    get def() { return this; }
}
exports.TypeDef = TypeDef;
