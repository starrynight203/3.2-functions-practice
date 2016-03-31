/*
1. Keep track of how long it has been since the user has moved their mouse.
2. after one minute of inactivity, alert a warning.
*/

//Keep track of how long it has been since the user has moved their mouse.
function keepTrackOfInactivity() {

}

setTimeout (function() {
  console.assert(inactivityDuration > 1000);
}, 1000);

//square two numbers
function square (a, b) {
  //console.log('a: ' +a+)
}
square(1, 2);

//Determine whether a word is a palindrome
function isPalindrome(word) {
  if (word.split('').reverse().join('') == word) {
    return true;
  } else {
    return false;
  }
}
console.assert( isPalindrome('hannah') );
console.assert( isPalindrome('cat') === false );




//.split('').reverse().join()


function noLookInHere(){}

var highscore = 100;

function calculateWinners() {
  console.log(highscore);

  var theWinner = 'me';

  function gameOver(){
    console.log(theWinner);
  }
  gameOver();
}

calculateWinners();
