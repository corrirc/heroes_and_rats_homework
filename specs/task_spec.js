const assert = require ('assert');
const task = require ('../task.js');

describe("task test", function(){

  beforeEach(function(){
  task1 = new task(10, 5, 90);
})

it("task has difficulty level", function(){
  assert.strictEqual(task1.difficulty_level, 10);
})

it("task has urgency level", function(){
  assert.strictEqual(task1.urgency_level, 5);
})

it("task has reward value", function(){
  assert.strictEqual(task1.reward_value, 90);
})



})
