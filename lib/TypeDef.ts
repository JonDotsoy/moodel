import { TypeOptions } from './TypeOptions';
import { symbolTypeOptions } from './symbolTypeOptions';

export class TypeDef<T> {
  public [symbolTypeOptions]: TypeOptions<T|any>

  constructor(initialDef?:{type:T}) {
    this[symbolTypeOptions] = new TypeOptions(initialDef || {type:undefined});
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
    this[symbolTypeOptions].uppercase = true;
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
  enum(...vals:T[]) {
    // @ts-ignore
    this[symbolTypeOptions].enum = [].concat(...vals);
    return this;
  }
  default(defaultVal:T|(()=>T)) {
    this[symbolTypeOptions].default = defaultVal;
    return this;
  }
  setter(setter:(valueSeted:T|undefined)=>any) {
    this[symbolTypeOptions].setter = setter;
    return this;
  }
  getter(getter:(val:any)=>T) {
    this[symbolTypeOptions].getter = getter;
    return this;
  }
  min(minVal:number) {
    this[symbolTypeOptions].min = minVal;
    return this;
  }
  max(maxVal:number) {
    this[symbolTypeOptions].max = maxVal;
    return this;
  }
  toJSON() {
    return this[symbolTypeOptions];
  }
  // @ts-ignore
  get def():InstanceType<T> { return this; }
}
