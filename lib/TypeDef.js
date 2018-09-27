const { TypeOptions } = require("./TypeOptions");
const { SYMBOLTYPE } = require("./SYMBOLTYPE");

/**
 * @constructor
 * @template T
 */
class TypeDef {
  /** @param {{type:T}} [initialDef] */
  constructor(initialDef = {}) {
    this.type = initialDef.type;
    this[SYMBOLTYPE] = new TypeOptions(initialDef);
  }
  get trim() {
    this[SYMBOLTYPE].trim = true;
    return this;
  }
  get readonly() {
    this[SYMBOLTYPE].readonly = true;
    return this;
  }
  get uppercase() {
    this[SYMBOLTYPE].uppercase = this;
    return this;
  }
  get lowercase() {
    this[SYMBOLTYPE].lowercase = true;
    return this;
  }
  get required() {
    this[SYMBOLTYPE].required = true;
    return this;
  }
  /** @param {T[]} vals */
  enum(...vals) {
    this[SYMBOLTYPE].enum = [].concat(...vals);
    return this;
  }
  /** @param {(val:T)=>T} defaultVal */
  default(defaultVal) {
    this[SYMBOLTYPE].default = defaultVal;
    return this;
  }
  /** @param {(val:T)=>any} setter */
  setter(setter) {
    this[SYMBOLTYPE].setter = setter;
    return this;
  }
  /** @param {(val:any)=>T} getter */
  getter(getter) {
    this[SYMBOLTYPE].getter = getter;
    return this;
  }
  /** @param {number} minVal */
  min(minVal) {
    this[SYMBOLTYPE].min = minVal;
    return this;
  }
  /** @param {number} maxVal */
  max(maxVal) {
    this[SYMBOLTYPE].max = maxVal;
    return this;
  }
  /** @returns {TypeOptions<T>} */
  toJSON() {
    return this[SYMBOLTYPE];
  }
  /** @type {InstanceType<T>} */
  get def() { return this; }
}

module.exports.TypeDef = TypeDef;
