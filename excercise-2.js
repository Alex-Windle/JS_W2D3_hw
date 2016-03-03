//8 total exercises. I have completed 4. 
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
//TESTED A+
function max(num1, num2){
	if(num1 > num2) {
		return num1;
	} else if(num2 > num1){
		return num2;
	} else {
		return "Sorry. Values are equal!";
	};
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
//TESTED A+
function maxOfThree(num1, num2, num3) {
if (num1>num2 && num1>num3)
   return num1;
else if (num2>num3)
   return num2;
else if (num3>num2)
   return num3;
else
   return "Sorry! Detected multiple maximum values."
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
// TESTED A+
function isVowel(char) {
	if (char === "a") {
		return true;
	} else if (char === "e") {
		return true;
	} else if (char === "i") {
		return true;
	} else if (char === "o") {
		return true;
	} else if (char === "u") {
		return true;
	} else {
		return false;
	};
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
// TESTED?????????????????????

// GIVEN SYNTAX
function rovarspraket(phrase){
}

// split phrase into an array 
function rovarspraket(phrase) {
	var toArray = phrase.split('');
	return toArray;
} 
rovarspraket("The dog barks loudly.");

// test forEach method
function rovarspraket(phrase) {
	var toArray = phrase.split('');
	return toArray; 
};
rovarspraket("The dog barks loudly.");

// push something into the array 
function rovarspraket(phrase) {
	var toArray = phrase.split('');
	
	toArray.forEach(function pushG(item){

	});
} 
rovarspraket("The dog barks loudly.");




function rovarspraket(phrase) {
	var toArray = phrase.split('');
	toArray.forEach(function consonantCheck(item)){
	if (item !=== "a") {
		return true;
	} else if (item !=== "e") {
		return true;
	} else if (item !=== "i") {
		return true;
	} else if (item !=== "o") {
		return true;
	} else if (item !=== "u") {
		return true;
	} else {
		return false;
	};
	};

} 
rovarspraket("The dog barks loudly.");

	
	toArray.forEach(function consonantCheck(item){
		if (item !=== "a") {
			return true;
		} else if (item !=== "e") {
			return true;
		} else if (item !=== "i") {
			return true;
		} else if (item !=== "o") {
			return true;
		} else if (item !=== "u") {
			return true;
		} else {
			return false;
		};
	});


	if (char !=== "a") {
		return true;
	} else if (char !=== "e") {
		return true;
	} else if (char !=== "i") {
		return true;
	} else if (char !=== "o") {
		return true;
	} else if (char !=== "u") {
		return true;
	} else {
		return false;
	};


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
//TESTED A+
function reverse(string){
	var toArray = string.split('');
	var reverseArray = toArray.reverse();
	var toString = reverseArray.join("");
    return toString;
}
reverse("hello world");

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

// given syntax 
function findLongestWord(words){
    //...
}

// create an array of words
// count the length of each word
// compare the length of each word
// return the length of the longest word


function findLongestWord(words){

}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}