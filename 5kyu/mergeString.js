// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears
function isMerge(s, part1, part2) {
    let count = 0
    let stringLength = s.length

    part1.split('').forEach( letter => {
        if(s.indexOf(letter) !== -1)
            count++;
    })
    part2.split('').forEach( letter => {
        if(s.indexOf(letter) !== -1)
            count++;
    })

    return part1 === part2 ? false : count === stringLength
}

isMerge('codewars', 'code', 'wars') // true
isMerge('codewars', 'cdwr', 'oeas') // true
isMerge('Making progress', 'Mak pross', 'inggre') //true
isMerge('codewars', 'code', 'code') //false
isMerge('More progress', 'More ess', 'pro') //false