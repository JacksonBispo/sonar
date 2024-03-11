const assert = require('assert');
const soma = require('../app');

describe('Testes da função soma', function() {
  it('Deve retornar a soma de dois números', function() {
    assert.strictEqual(soma(1, 2), 4);
  });
});