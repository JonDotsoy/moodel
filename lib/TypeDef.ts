import { TypeOptions } from './TypeOptions';
import { symbolTypeOptions } from './symbolTypeOptions';

export class TypeDef<T> {
  public typeOptions: TypeOptions<T|any>

  constructor(initialDef?:{type:T}) {
    this.typeOptions = new TypeOptions(initialDef || {type:undefined});
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
  enum(...vals:T[]) {
    // @ts-ignore
    this.typeOptions.enum = [].concat(...vals);
    return this;
  }
  default(defaultVal:T|(()=>T)) {
    this.typeOptions.default = defaultVal;
    return this;
  }
  setter(setter:(valueSeted:T|undefined)=>any) {
    this.typeOptions.setter = setter;
    return this;
  }
  getter(getter:(val:any)=>T) {
    this.typeOptions.getter = getter;
    return this;
  }
  min(minVal:number) {
    this.typeOptions.min = minVal;
    return this;
  }
  max(maxVal:number) {
    this.typeOptions.max = maxVal;
    return this;
  }
  /** @returns {TypeOptions<T>} */
  toJSON() {
    return this.typeOptions;
  }
  // @ts-ignore
  get def():InstanceType<T> { return this; }
}
