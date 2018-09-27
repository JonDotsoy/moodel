const { customTypes } = require('./customTypes');

const defaultTypes = {
  get String() { return customTypes(String); },
  get Number() { return customTypes(Number); },
  get Boolean() { return customTypes(Boolean); },
  get Date() { return customTypes(Date); },
  get Any() { return customTypes(String); },
};

exports.defaultTypes = defaultTypes;
