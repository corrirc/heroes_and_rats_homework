const assert = require('assert');
const hero = require('../hero.js')

describe("hero test", function(){

  beforeEach(function(){
    hero1 = new hero("John Smeaton", "100%", "kebab");
  })

  it("hero has a name", function(){
    assert.strictEqual(hero1.name, "John Smeaton");
  })

  it("hero has health", function(){
    assert.strictEqual(hero1.health, "100%");
  })

  it("hero's favorite food", function(){
    assert.strictEqual(hero1.favorite_food, "kebab");
  })

})
