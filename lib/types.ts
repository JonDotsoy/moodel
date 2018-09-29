import { defaultTypes } from "./defaultTypes";
import { customTypes } from "./customTypes";

const assingned = <A,B>(a:A,b:B):A&B => {
  // @ts-ignore
  return Object.assign(a, b);
}

export const types = assingned(customTypes, defaultTypes);
