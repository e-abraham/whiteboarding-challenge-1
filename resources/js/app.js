// 1. GenBuzz Function
// * Write a function that prints (to the console) numbers from a `lowerLimit` to an `upperLimit`.
//    * For numbers divisible by 3, print “Gen”
//    * For numbers divisible by 5, print “Buzz”
//    * For numbers divisible by both 3 and 5, print “GenBuzz”
//    * Check to make sure that inputs are numbers
//    * If they are not numbers, use template literals to print the input along with a message informing that the input is not a number.
//    * Ensure that `lowerLimit` is smaller than `upperLimit`.
//    * If input for `lowerLimit` is larger than `upperLimit`, use template literals print a statement informing the user that the lowerLimit is larger than the upperLimit.
//    * <img src="resources/img/genbuzz-example.png"> 
//Write your code below this line:
    //write function that accepts 2 parameters
    const GenBuzz = (lowerLimit, upperLimit) => {
        if (typeof lowerLimit !== 'number' && typeof upperLimit !== 'number') {
            console.log(`The inputs ${lowerLimit} and ${upperLimit} are not numbers.`);
        }
        if (lowerLimit > upperLimit) {
            console.log(`The lowerLimit ${lowerLimit} is larger than the upperLimit ${upperLimit}.`);
        }
        for (i=lowerLimit; i<=upperLimit; i++) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                console.log(`${i} GenBuzz`);
            } else if (i % 3 === 0) {
                console.log(`${i} Gen`);
            } else if (i % 5 === 0) {
                console.log(`${i} Buzz`);
            } else {
                console.log(`${i}`);
            }
    }
    //check inputs are numbers
    //check numbers are divisible by both 3 & 5, print GenBuzz
    //check numbers are divisible by 3, print Gen
    //check numbers are divisible by 5, print Buzz
    //print message if inputs aren't numbers


// 2. Leap Year
// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

// Write a program that returns a message informing a user whether or not the year that is input is a leap year. Ex. When `isLeapYear(2000)` is called, it should return the value `2000 is a Leap Year`. Test your code by printing the funcition's output to the console.
//Write your code below this line:
    //function takes one parameter
const leapYear = (year) => {
   if ((0 == year %4) && (0 !== year %100) || (0 == year % 400)){
       console.log(`${year} is a Leap Year`);
   } else {
       console.log(`${year} is not a Leap Year`);
   }
}
    //check if input is number
    //check if number is divisible by 4 & 100
    //check if number is divisibly by 400


// 3. Random Exercises

//Write your code below this line:


// 4. Perfect Square

//Write your code below this line: