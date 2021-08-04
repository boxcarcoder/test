/*
Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. 
He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. 
The words in his note are case-sensitive and he must use only whole words available in the magazine. 
He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, 
print Yes if he can replicate his ransom note exactly using whole words from the magazine; 
otherwise, print No.

Example
magazine = "attack at dawn". 
note  = "Attack at dawn"

The magazine has all the right words, but there is a case mismatch. The answer is No.

Input is an array of strings.
*/

function checkMagazine(magazine, note) {
  let solution = 'Yes';
  let table = {};

  // keep count of words from magazine.
  for (let i = 0; i < magazine.length; i++) {
    table[magazine[i]] = table[magazine[i]] ? table[magazine[i]]++ : 1;
  }

  // Check each word in note is also in the magazine.
  for (let i = 0; i < note.length; i++) {
    if (table[note[i]] > 0) {
      // if it is, we use the word so we subtract its count.
      table[note[i]] = table[note[i]] - 1;
    } else {
      solution = 'No';
      break;
    }
  }

  console.log(solution);
}
