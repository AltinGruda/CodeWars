// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
function generateHashtag(string){
    let finalString = string.trim()
                            .split(' ')
                            .filter( str => str !== ' ')
                            .map( str => str.charAt(0).toUpperCase() + str.slice(1))
                            .join('')
    if(finalString === "" || finalString.length >= 140)
      return false
    return `#${finalString}`
}
generateHashtag(" Hello there thanks for trying my Kata") // " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
generateHashtag("    Hello     World   ")// "    Hello     World   "                  =>  "#HelloWorld"
generateHashtag("")// "" => false
generateHashtag('Codewars')
generateHashtag("Codewars Is Nice")
generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")