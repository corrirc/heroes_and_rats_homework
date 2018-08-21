const assert = require('assert');
const hero = require('../hero.js')

describe("hero test", function(){

  beforeEach(function(){
    hero1 = new hero("John Smeaton");
  })

  it("hero has a name", function(){
    assert.strictEqual(hero1.name, "John Smeaton");
  })

})
