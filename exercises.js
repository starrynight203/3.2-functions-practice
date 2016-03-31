/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(x, y){
    "use strict";
    if (x > y) {
      return x;
    } else {
      return y;
    }
}
console.log('larger number', max(3, 7));
console.assert(max(3,7) === 7, "max doesn't work");
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    "use strict";
    if (x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y;
    } else {
      return z;
    }
}
console.log('max of three numbers', maxOfThree(12, 3, 8));
console.assert(maxOfThree(12, 3, 8) === 12, "maxOfThree doesn't work");

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(x){
    "use strict";
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ) {
      return true;
    } else {
      return false;
    }
}
console.log('if character is a vowel', isVowel('a'));
console.assert(isVowel('a') === true, "isVowel doesn't work");
// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var splitPhrase = phrase.split('');
    var newPhrase = "";
    splitPhrase.forEach(function(char){
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        newPhrase += char;
        return;
      } else{
        char = char + 'o' + char;
        newPhrase += char;
      }
    })
    return newPhrase;
}
console.log('double consonant thing', rovarspraket('I\'m a string'));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(x, y, z){
    "use strict";
    var addSum = x + y + z;
      return addSum;
}

function multiply(x, y, z){
    "use strict";
    var multiply = x * y * z;
      return multiply;
}
console.log('sum of array', sum(2, 4, 6));
console.log('multiplication of array', multiply(2, 4, 6));
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverseWord(word){
    "use strict";
  var cat = word.split('').reverse().join('');
      return cat;
}
console.log('reversed word', reverseWord('can opener'));
console.assert(reverseWord('can opener') == 'renepo nac', "reverse doesn't work");

//console.assert(maxOfThree(12, 3, 8) === 12, "maxOfThree doesn't work");
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var length = 0;
    for (var i = 0; i < words.length; i++){
      if (words[i].length > length) {
        length = words[i].length;
      }
      return length;
    }
}
console.log(findLongestWord(['Hannah', 'Leah', 'Jake']));
console.assert(findLongestWord(['Hannah', 'Leah', 'Jake']) === 6,'findLongestWord function does not work')

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
//words, i
function filterLongWords(words, i){
    "use strict";
    var longWords = [];
    for (var x = 0; x < words.length; x++){
      words[x];
      if (words[x].length > i){
        longWords.push(words[x]);
      }
    }
    return longWords;

}
var wordList = ['cat', 'lizard', 'bird', 'orangutan']
console.log('Words longer than integer', filterLongWords(wordList, 5));
// var cheapItems = items.filter(function(item){
//   if (item.price > 14.00 && item.price < 18.00 ){
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log("Items that cost between $14.00 USD and $18.00 USD:");
// console.log(cheapItems);
//console.assert(filterLongWords(['Colton', 'Lola', 'Maynard']))
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var frequencyListing = {};
      for (var x = 0; x < string.length; x++){
        if (frequencyListing[string[x]]){
          frequencyListing[string[x]]++
        }else{
          frequencyListing[string[x]] = 1;
        }
      }
      return frequencyListing;

}
console.log('Frequency Listing',charFreq('abbabcbdbabdbdbabababcbcbab'));
