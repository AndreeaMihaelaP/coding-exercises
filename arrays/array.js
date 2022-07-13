const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage

strings[2];

// Array methods

// push - O(1)
strings.push("i");

// pop - remove the last operations - O(1)
strings.pop();

// unshift - O(n)
strings.unshift("x");

//splice - O(n)
strings.splice(2, 0, "alien");

console.log(strings);

// Types of arrays
// When the array is dynamic the append method can be O(n)

strings.append("d");
