// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:
// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
    return s.split(' ').filter((word,idx, arr) => arr.indexOf(word) === idx).join(' ');
}

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'); // 'alpha beta gamma delta'
removeDuplicateWords("Rrsv nIp lfL lfL TXv jGvQTsOeM Rrsv eWbvWsxAvD jGvQTsOeM lfL eWbvWsxAvD eWbvWsxAvD lfL CrhJc s Rrsv NlGyQ TXv tFilrbwhnT TXv zTkumbj jGvQTsOeM qOBR tFilrbwhnT tFilrbwhnT NlGyQ CrhJc lfL WxyQG nIp CrhJc NlGyQ zeMUJR CrhJc zTkumbj lfL zTkumbj TXv Rrsv SdRwFI lfL zeMUJR TXv nIp qOBR TXv qOBR zeMUJR CrhJc Rrsv zeMUJR tFilrbwhnT WxyQG qOBR eWbvWsxAvD nIp TXv NlGyQ Rrsv WxyQG SdRwFI CrhJc zeMUJR Rrsv Rrsv jGvQTsOeM zTkumbj jGvQTsOeM zTkumbj onIMzBIiW zTkumbj SdRwFI zeMUJR jGvQTsOeM s lfL jGvQTsOeM azYYQo jGvQTsOeM lfL TXv zeMUJR TXv lmhOza qOBR eWbvWsxAvD jGvQTsOeM Rrsv jGvQTsOeM eWbvWsxAvD lfL tFilrbwhnT nIp UqEdPrZpe WxyQG onIMzBIiW onIMzBIiW qOBR WxyQG eWbvWsxAvD nIp NlGyQ nIp WxyQG tFilrbwhnT SdRwFI onIMzBIiW SdRwFI s CrhJc qOBR nIp TXv");