const assert = require('assert');
const food = require('../food');

describe("food test", function(){

  beforeEach(function(){
  food1 = new food("kebab", 10);
})

it("food has a name", function(){
  assert.strictEqual(food1.name, "kebab");
})

it("food has a replenishment value", function(){
  assert.strictEqual(food1.replen_value, 10);
})


})
