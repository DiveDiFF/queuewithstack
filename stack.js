function Stack() {

  let items = [];

  this.pop = function() {

    return this.items;
  }

  this.isEmpty = function() {
    
    return this.items = [];
  }

  this.print = function() {

    let text = this.items.toString(items);
    console.log(text);
  }
}