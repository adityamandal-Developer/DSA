// You will be given a number N that represents where the minute hand currently is on a clock.
// Your program should return the angle that is formed by the minute hand
// and the 12 o'clock mark on the clock.


// If the input is 15 then your program should return 90 because a 90-degree angle is formed by the minute hand and the 12 o'clock mark on the clock. 
// We'll solve this challenge by first calculating what angle is created by each minute passing on a clock. 
// Once we calculate this number, we multiply it by the input to determine the final angle.
// A method to solve such problems is to consider the rate of change of the angle in degrees per minute. 
// The hour hand of a normal 12-hour analogue clock turns 360° in 12 hours (720 minutes) or 0.5° per minute. 
// The minute hand rotates through 360° in 60 minutes or 6° per minute.

const clockAngle = (n) => {
    return n * 6
}

console.log(clockAngle(15))