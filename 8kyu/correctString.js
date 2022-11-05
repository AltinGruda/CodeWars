// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
function correct(string) {
    string = string.split('')
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i] === '5' ? 'S' : string[i] === '0' ? 'O' : string[i] === '1' ? 'I' : string[i]
    }
    return string.join('')
}

correct("L0ND0N") //,"LONDON");
correct("DUBL1N") //,"DUBLIN");
correct("51NGAP0RE") //,"SINGAPORE");
correct("BUDAPE5T") //,"BUDAPEST");
correct("PAR15") //,"PARIS");