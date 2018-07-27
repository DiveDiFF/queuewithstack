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

let stack1 = new Stack();

