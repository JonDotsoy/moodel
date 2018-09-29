
export class TypeOptions<T> {
  type:T;
  evaluators:((target:T)=>Boolean)[] = []
  min?:number
  max?:number
  trim?:boolean
  readonly?:boolean
  uppercase?:boolean
  lowercase?:boolean
  enum:T[] = []
  required?:boolean
  default?:T|(()=>T)
  setter?:(valueSeted:T)=>any
  getter?:(origin:any)=>T

  constructor(opts:{type:T}) {
    this.type = opts.type;
  }
}

