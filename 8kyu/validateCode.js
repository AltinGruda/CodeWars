function validateCode (code) {
    return Number(code.toString()[0]) === 1 || Number(code.toString()[0]) === 2 || Number(code.toString()[0]) === 3;
}