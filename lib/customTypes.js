const { TypeDef } = require("./TypeDef");

/** @type {<T>(type:T)=>TypeDef<T>} */
const customTypes = (type) => new TypeDef({ type });

exports.customTypes = customTypes;
