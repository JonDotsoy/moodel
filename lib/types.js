const { defaultTypes } = require("./defaultTypes");
const { customTypes } = require("./customTypes");

/** @type {customTypes & defaultTypes} */
const types = Object.assign(customTypes, defaultTypes);

module.exports.types = types;
