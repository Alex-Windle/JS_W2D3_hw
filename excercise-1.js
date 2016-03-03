// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum (input1, input2) {
	var answer = input1 + input2;
	return answer;
};

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg (input1, input2, input3) {
	var answer = (input1 + input2 + input3)/3;
	return answer;
};

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength (item) {
	var length = item.length;
	return length;
};

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.



// function greaterThan(input1, input2) {
// 	if (input2 > input1) {
// 		return true;
// 	} else {
// 		return false;
// 	};
// };
// Do not solve with if/else. 

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(name) {
	var changeName = name.toString();
	return 'Hello, ' + changeName + '!';
};

//or 

function greet(name) {
	var changeName = String(name);
	return 'Hello, ' + changeName + '!';
};

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madLib (word1, word2, word3, word4) {
	return word1 + " went to " + word2 + " and bought a " + word3 + " and a " + word4 + ".";
};