import { customTypes } from './customTypes';
import { symbolTypeOptions } from './symbolTypeOptions';
import { TypeDef } from './TypeDef';
import { TypeOptions } from './TypeOptions';

export const defaultTypes = {
  get String() { return customTypes(String); },
  get Number() { return customTypes(Number); },
  get Boolean() { return customTypes(Boolean); },
  get Date() { return customTypes(Date); },
  get Any() { return customTypes(String); },

  getOwnOptions<T>(typeDef: TypeDef<T>):TypeOptions<T> {
    const typeOptions = typeDef.typeOptions;
    return typeOptions;
  }
};
