// Question 2:
// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (…) added to the end if it was too long, or the original text otherwise.

// b) Write another variant of the truncate function that uses a conditional operator.

// console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...


function truncate(string, max) {
    if (string.length > max) {
      return string.substring(0, max ) + "...";
    } else {
      return string
    }
  }

  function truncateOther(string,max) {
    return string.length > max ? string.substring(0, max) + "..." : string;
  }

  console.log(truncate('This text will be truncated if it is too long',25));
  console.log(truncateOther('This text will be truncated if it is too long',35))
  console.log(truncateOther('This text will be truncated if it is too long',45))