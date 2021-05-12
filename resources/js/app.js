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


// 2. Leap Year
// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

// Write a program that returns a message informing a user whether or not the year that is input is a leap year. Ex. When `isLeapYear(2000)` is called, it should return the value `2000 is a Leap Year`. Test your code by printing the funcition's output to the console.
//Write your code below this line:
    //function takes one parameter
const isLeapYear = (year) => {
   if ((0 == year %4) && (0 !== year %100) || (0 == year % 400)){
       console.log(`${year} is a Leap Year`);
   } else {
       console.log(`${year} is not a Leap Year`);
   }
}

// 3. Random Exercises
// Create a Random Exercise Generator. Build an array with the items listed below in it. Then create a function that will select a specified number of exercises (number will be passed into the function) and prints the random exercises to the console. It is ok if an exercise appears more than once in the output.

// * Array Items: Push-ups, Sit-ups, Bear Crawls, 1 mile run, 60 second plank, Burpees, Jumping Jacks, Squats, Weighted Squats, Inch Worms
//Write your code below this line:
const exerciseArray = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];
const randomExercise = (number) => {
    for (i = 1; i <= number; i++) {
        console.log(exerciseArray[Math.floor(Math.random() * exerciseArray.length)]);
    }
    } 

// 4. Perfect Square
// A perfect square is a number that can be expressed as the product of two equal integers. For example, 9 is a perfect square because it can be expressed as 3 * 3 (the product of two equal integers). 16 is a perfect square because it can be expressed as 4 * 4 (the product of two equal integers). 5 is NOT a perfect square because it cannot be expressed as the product of two equal integers. 7 is not a perfect square because you cannot express it as the product of two equal integers.

//Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.

//You may not use the built-in Math.sqrt method
//Write your code below this line:
const perfectSquare = (number) => {
    for ()
}