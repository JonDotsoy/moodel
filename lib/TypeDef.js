const { TypeOptions } = require("./TypeOptions");
const { symbolTypeOptions } = require("./symbolTypeOptions");

/**
 * @constructor
 * @template T
 */
class TypeDef {
  /** @param {{type:T}} [initialDef] */
  constructor(initialDef = {}) {
    this.type = initialDef.type;
    this[symbolTypeOptions] = new TypeOptions(initialDef);
  }
  get trim() {
    this[symbolTypeOptions].trim = true;
    return this;
  }
  get readonly() {
    this[symbolTypeOptions].readonly = true;
    return this;
  }
  get uppercase() {
    this[symbolTypeOptions].uppercase = this;
    return this;
  }
  get lowercase() {
    this[symbolTypeOptions].lowercase = true;
    return this;
  }
  get required() {
    this[symbolTypeOptions].required = true;
    return this;
  }
  /** @param {T[]} vals */
  enum(...vals) {
    this[symbolTypeOptions].enum = [].concat(...vals);
    return this;
  }
  /** @param {(val:T)=>T} defaultVal */
  default(defaultVal) {
    this[symbolTypeOptions].default = defaultVal;
    return this;
  }
  /** @param {(val:T)=>any} setter */
  setter(setter) {
    this[symbolTypeOptions].setter = setter;
    return this;
  }
  /** @param {(val:any)=>T} getter */
  getter(getter) {
    this[symbolTypeOptions].getter = getter;
    return this;
  }
  /** @param {number} minVal */
  min(minVal) {
    this[symbolTypeOptions].min = minVal;
    return this;
  }
  /** @param {number} maxVal */
  max(maxVal) {
    this[symbolTypeOptions].max = maxVal;
    return this;
  }
  /** @returns {TypeOptions<T>} */
  toJSON() {
    return this[symbolTypeOptions];
  }
  /** @type {InstanceType<T>} */
  get def() { return this; }
}

module.exports.TypeDef = TypeDef;
