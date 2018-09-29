
/* global describe,it */
const { expect } = require('chai');
const { Moodel, types } = require('../lib/moodel');
const util = require('util');

/**
 * @typedef {import('../src/TypeDef')} TypeDef
 */

describe('Types Definition', () => {
  it('should return a definition object', () => {
    const typedef = types().def;
    const symbolsFromTypeDef = Object.getOwnPropertySymbols(typedef).map(symbol => symbol.toString());

    expect(typedef).to.be.a('object');
    expect(symbolsFromTypeDef).contain('Symbol(Symbol.typeOptions)');
  });

  it('should contain a type options or type description', () => {
    const typedef = types().def;

    
  });
});

