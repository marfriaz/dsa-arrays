"use strict";
const Memory = require("./memory");

const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
    // (ptr is shorthand for pointer: variables containing memory addresses are known as pointers)
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
      //  Rather than resizing every time you push some data,
      // you could allocate more space than you need.
      // That way you would need to resize far less often.
      // Now as well as a length, you also have a capacity;
      // how many items you can hold without needing to resize.  In the push method,
      // if the length is greater than the capacity then you resize according to the SIZE_RATIO
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    return memory.get(this.ptr + index);
    // when pushing you can find the correct memory address by
    // simply adding the index to the start position, so retrieval is as simple as this
  }

  pop() {
    if (this.length == 0) {
      throw new Error("Index error");
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
    // To pop a value from the end of an array is similarly simple.
    // Rather than resize the array, you just leave an extra space which will
    // be filled at the next push
    // O(1) Operation
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;

    //What about if you want to insert a value into any point in an array,
    // not just the middle?  To do this, you need to shift all of the
    // values after the new value back 1 position.
    // Then you put the new value in its correct place.
    // O(n) Operation
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
    // Using the same logic as for insertion, the best-case performance
    // is O(1) (the same as popping), and the average and worst cases are O(n).
  }
}
Array.SIZE_RATIO = 3;
module.exports = Array;
