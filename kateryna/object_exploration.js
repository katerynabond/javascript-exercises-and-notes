/* jshint esversion: 6*/
//Lets create a Car
//properties
//color, make, model, hasAC
const Car = {
  color: 'green',
  make: 'Dodge',
  model: 'Dart',
  'hasAC': false, //technically all of the left side will always be a string
  paint: function(newColor){ // functions on objects are called methods
    //Car.color = newColor;
    this.color = newColor; //inside of the object this refers to the object
  },
  fixAC: function(){
    this.hasAC = true;
  }
};

console.log('Car', Car);

//I want to fix the AC
Car.hasAC = true; // this is a shorthand
console.log('Car:', Car);
//Alternatively
Car['hasAC'] = false;
console.log('Car:', Car);

//I want ot check the color;
console.log('Color of car:', Car.color);

//Paint the color
Car.paint('orange');
console.log('Car:', Car);

//Fix the AC
Car.fixAC();
console.log('The car after AC fix', Car);




//Shirt object
//You need at least 3 properties
//You need at least 3 methods from plan
//One of your methods should modify a property such as 'paint' above
//you need to demonstrate the usage of each method
const Shirt = {
  price: 10,
  size: 14,
  inStock: true,

  isInStock: function(){
    this.inStock = true;
  },

  changeSize: function(size){
    this.size = size;
  },

  changePrice: function(price){
    this.price = price;
  }
};

Shirt.changeSize(10);
console.log('Shirt size', Shirt);

Shirt.changePrice(25);
console.log('Shirt price', Shirt);

Shirt.isInStock();
console.log('In stock?', Shirt);



























///
