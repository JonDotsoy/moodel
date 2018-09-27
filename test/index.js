
/* global describe,it */
const { expect } = require('chai');
const { Moodel, types } = require('../lib/moodel');
const util = require('util');

describe('Types', () => {
  it('Sample Type', () => {
    const typedef = types.Date.required;
  
    const e = types.Any.toJSON();

    types(1).def

    console.log(
      util.inspect(
        types(String)
          .required
          .enum(1, 2, 3)
          .default(3)
          .def,
        {
          colors: true,
          depth: null,
        }
      )
    )

    // expect(typedef).to.be.a('object');¡
  });
});

describe('Simplre object', () => {
  it('make a simple model', () => {
    const Model = Moodel({
      name: 'John',
    });

    expect(Model).property('protitype').property('name').eq('John');
  });
});
