// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));
// FUNCTIONAL PROGRAMMING
function zero(fn) {
    let num = 0
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function one(fn) {
    let num = 1
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function two(fn) {
    let num = 2
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function three(fn) {
    let num = 3
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function four(fn) {
    let num = 4
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function five(fn) {
    let num = 5
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function six(fn) {
    let num = 6
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function seven(fn) {
    let num = 7
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function eight(fn) {
    let num = 8
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function nine(fn) {
    let num = 9
    return fn ? Math.floor(eval(`${num} ${fn}`)) : num
}
function plus(number) {
    return ` + ${number}`
}
function minus(number) {
    return ` - ${number}`
}
function times(number) {
    return ` * ${number}`
}
function dividedBy(number) {
    return ` / ${number}`
}

seven(times(five())) // must return 35
four(plus(nine())) // must return 13
eight(minus(three())) // must return 5
six(dividedBy(two())) // must return 3
