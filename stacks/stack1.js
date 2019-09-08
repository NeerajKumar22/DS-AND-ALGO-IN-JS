// Stacks

// functions : push, pop, peek, length

var letters = []; // this is our stack

var word = "racecar"; // this is palindrome or not?

var reverseWord = "";

// Put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
console.log(letters);

// pop off the stack in reverse order

for (var i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}
console.log(reverseWord);

if (reverseWord === word) {
  console.log(word + " it is a palindrome word");
} else {
  console.log(word + " it's not a palindrome word");
}
