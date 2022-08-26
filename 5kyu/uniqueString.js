// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr){
    let changed = arr.map(e => e.split(' ').join('').split('').map(e => e.toLowerCase()).sort().join(''))
    let shortest = Math.min(...changed.map(e => e.length))
    if (shortest === 0) shortest = 1
    changed = changed.map(e => e.slice(0, shortest))
    let index = changed.indexOf(changed.filter(e => changed.indexOf(e) === changed.lastIndexOf(e))[0])
    return arr[index]
}
findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) // 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) // 'foo'