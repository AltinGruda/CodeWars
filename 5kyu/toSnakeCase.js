// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1 -->  "1"

function toSnakeCase(parameter){
    if(typeof(parameter) === 'number')
        return parameter.toString()

    let arr = parameter.split('').filter( item => item === item.toUpperCase() && isNaN(item))
    let result = arr.map( (item, index) => index < arr.length-1 ? 
        parameter.slice(parameter.indexOf(item), parameter.indexOf(arr[index + 1])) : parameter.slice(parameter.indexOf(item)))
        .join('_')
        .toLowerCase()

    return result
}

toSnakeCase("TestController")// "TestController"  -->  "test_controller"
toSnakeCase("MoviesAndBooks")// "MoviesAndBooks"  -->  "movies_and_books"
toSnakeCase("App7Test")// "App7Test"        -->  "app7_test"
toSnakeCase(1)// 1                 -->  "1"
toSnakeCase('ThisIsBeautifulDay') // this_is_beautiful_day