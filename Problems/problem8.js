//Question8:- A number is 477. Check whether it is even or odd using `%`. If it is even, multiply it by 3; otherwise, subtract 5 from it.

// number % 2 === 0; even
// number % 2 !== 0; odd

let number = 477;

if (number % 2 === 0) {

  number = number * 3;

} else {

  number = number - 5;
}

console.log(number);
