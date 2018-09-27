/**
 * @template T
 */
class TypeOptions {
  /**
   * @param {{type:T}} param0
   */
  constructor({ type }) {
    this.type = type;
    /** @type {((target:T)=>Boolean)[]} */
    this.evaluators = [];
    /** @type {number} */
    this.min = undefined;
    /** @type {number} */
    this.max = undefined;
    /** @type {Boolean} */
    this.trim = undefined;
    /** @type {Boolean} */
    this.readonly = undefined;
    /** @type {Boolean} */
    this.uppercase = undefined;
    /** @type {Boolean} */
    this.lowercase = undefined;
    /** @type {T[]} */
    this.enum = [];
    /** @type {Boolean} */
    this.required = false;
    /** @type {T} */
    this.default = undefined;
    /** @type {(valueSeted:T)=>any} */
    this.setter = undefined;
    /** @type {(origin:any)=>T} */
    this.getter = undefined;
  }
}

exports.TypeOptions = TypeOptions;
