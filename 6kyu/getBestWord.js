function getBestWord(points,words){
  let by_score     = (a,b) => scoreWord(points,a) - scoreWord(points,b)
  let by_shortest  = (a,b) => b.length - a.length 
  let by_index     = (a,b) => words.indexOf(b) - words.indexOf(a)
  let sorted = words.slice().sort( (a,b) => by_score(a,b) || by_shortest(a,b) || by_index(a,b) )
  return words.indexOf(sorted.pop())
}

function scoreWord(points,word){
	return word.split('').map( c => points[c.charCodeAt(0)-65] ).reduce( (a,b) => a+b )
}