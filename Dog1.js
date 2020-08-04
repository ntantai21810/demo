var chalk = require('chalk');
function Dog1 (name) {
    this.name = name;
    this.stomach = [];
}

Dog1.prototype.eat = function(cat) {
    this.stomach.push(cat);
}

Dog1.prototype.sayHi = function() {
    console.log("Hello. My name is " + chalk.blue(this.name));
}

module.exports = Dog1;