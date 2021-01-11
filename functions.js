/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log('Hello ' +name)
}
//let greeting = greet('Hamza');
//console.log('Hello '+greeting)

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  return n % 2 !== 0;
}
//let number = isOdd(4);
//console.log(number)

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  return parseInt(n/2);
}
//let odds = oddsSmallerThan(15);
//console.log(odds)

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n % 2 === 0) return(n*2)
  else return(Math.pow(n, 2))
}
//let SOD=squareOrDouble(5);
//console.log(SOD)

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
