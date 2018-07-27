function Stack() {
  let items = [];

  this.push = function(element) {
    return items.push(element);
  }

  this.pop = function() {
    return this.items;
  }

  this.peek = function() {
    return items[items.length - 1];
  }

  this.isEmpty = function() {
    return this.items = [];
  }

  this.size = function() {
    return items.length;
  }

  this.print = function() {
    let text = this.items.toString(items);
    console.log(text);
  }
}

function QueueWithStack() {
  let box = new Stack();
  let supplyBox = new Stack();
  let result;

  this.enqueue = function (element) {
    return box.push(element);
  }

  this.dequeue = function () {
    while (box.length > 1 ) {
      supplyBox.push(box.pop());
    }
    result = box.pop();
    while (supplyBox.lengh > 0) {
      box.push(supplyBox.pop());
    }
    return result
  }
}
