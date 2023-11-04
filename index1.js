// Question 1:
// Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

// console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(str) {  
    let names = str.split(" ");
    for (let i = 0; i < names.length; i++) {
      names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    }
    return names.join(" ");
  }

  console.log(ucFirstLetters("los angeles"));
  console.log(ucFirstLetters("new orleans"));
  console.log(ucFirstLetters("Sean Lewis"));
  console.log(ucFirstLetters("lafayette"));