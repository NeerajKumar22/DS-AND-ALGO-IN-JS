// Creates a stack which is going to be function here
// have two variables

var Stack = function() {
  this.count = 0; // keep track how many items in the stack
  this.storage = {}; // empty object

  // Adds a value onto the end of the stack

  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack

  this.pop = function() {
    // if this.count === 0 then nothing in the stack i.e. stack is empty
    // and return undefined
    if (this.count === 0) {
      return undefined;
    }
    // if an element is present in the stack
    // then decrement in the count
    this.count--;
    // and store that in a variable
    var result = this.storage[this.count];
    // delete the target one
    delete this.storage[this.count];
    // and return the result variable in which that element is stored
    return result;
  };
  this.size = function() {
    return this.count;
  };

  // Returns the value at the end of the stack

  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

// test
// here we create a variable myStack = new Stack() that is the function
// which is defined up
var myStack = new Stack();

myStack.push(1); // push 1 onto myStack
myStack.push(2); // push 2 onto myStack
console.log(myStack.peek()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.peek()); // 1
myStack.push("Neeraj");
console.log(myStack.size()); // 2
console.log(myStack.peek()); // Neeraj
console.log(myStack.pop()); // Neeraj
console.log(myStack.peek()); // 1
