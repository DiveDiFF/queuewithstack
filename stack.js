function Stack() {
  let items = [];

  this.push = function(element) {
    return items.push(element);
  }

  this.peek = function() {
    return items[items.length - 1];
  }

  this.size = function() {
    return items.length;
  }
}

let stack1 = new Stack();
