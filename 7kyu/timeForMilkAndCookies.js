// Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.

function timeForMilkAndCookies(date){
    return date.getDate() === 24 && date.getMonth() === 11;
}