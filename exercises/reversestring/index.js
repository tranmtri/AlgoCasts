// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let reverseStr ='';
//   for( let i = str.length -1 ; i >=0 ; i-- ) {
//     reverseStr += str[i];
//   }
//   return reverseStr;
// }

// function reverse(str) {
//   let reversed = '';
//   for(let character of str) reversed = character + reversed;
//   return reversed;
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
//   }

function reverse(str) {
  return str.split('').reduce( (rev, char) => { return char + rev}, '' );
 
}

module.exports = reverse;
