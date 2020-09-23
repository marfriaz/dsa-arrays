"use strict";
const Array = require("./array-class");

//=== Explore the push() method ===//

// What is the length, capacity and memory address of your array?
function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3); // length: 1, capacity: 3, ptr: 0
  arr.push(5); // length: 2, capacity: 3, ptr: 0
  arr.push(15); // length: 3, capacity: 3, ptr: 0
  arr.push(19); // length: 4, capacity: 12, ptr: 3
  arr.push(45); // length: 5, capacity: 12, ptr: 3
  arr.push(10); // length: 6, capacity: 12, ptr: 3
  // when the array length reached the initial capacity of 3,
  // capacity is increased by ((3 + 1) * 3), pointer position is moved to 3
  console.log(arr);
  // push(value) {
  //   if (this.length >= this._capacity) {
  //     this._resize((this.length + 1) * Array.SIZE_RATIO);
  //   }
  //   memory.set(this.ptr + this.length, value);
  //   this.length++;
  // }

  // set(ptr, value) {
  //   this.memory[ptr] = value;
  // }

  //=== Explore the pop() method ===//

  // What is the length, capacity, and address of your array?
  arr.pop(); // length: 5, capacity: 12, ptr: 3
  arr.pop(); // length: 4, capacity: 12, ptr: 3
  arr.pop(); // length: 3, capacity: 12, ptr: 3
  console.log(arr);
  // three items were removed from the end of the array
  // resulting in new length of 3, but the capacity and ptr stays the
  // same, as array was not resized or relocated

  //   pop() {
  //   if (this.length == 0) {
  //     throw new Error("Index error");
  //   }
  //   const value = memory.get(this.ptr + this.length - 1);
  //   this.length--;
  //   return value;
  // }

  //   get(ptr) {
  //   return this.memory[ptr];
  // }

  //=== Understanding more about how arrays work ===//
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida");
  // this returns NaN because our Memory class only accepts
  // arrays of numbers, (Float64Array)
  console.log(arr);

  // What is the purpose of the _resize() function in your Array class?
  // you resize the array so there is space for the new item using the _resize method
}
console.log(main());
