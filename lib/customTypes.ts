import { TypeDef } from './TypeDef';

export const customTypes = <T>(type:T) => new TypeDef({type});
