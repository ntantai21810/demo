function Dog1 () {
    this.stomach = [];
}

Dog1.prototype.eat = function(cat) {
    this.stomach.push(cat);
}