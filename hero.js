const hero = function(name,health,favorite_food) {
  this.name = name;
  this.health = health;
  this.favorite_food = favorite_food;
  this.talk = function(){
    return("How yae daeing am " + this.name);
  }
  this.tasks = [];
}

module.exports = hero;
