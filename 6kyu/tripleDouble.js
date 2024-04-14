function tripledouble(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();

    for(let i = 0; i < str1.length - 2; i++){
        let digit = str1[i];

        if(str1[i + 1] === digit && str1[i + 2] === digit) {
            for(let j = 0; j < str2.length - 1; j++){
                if(str2[j] === digit && str2[j+1] === digit) {
                    return 1;
                }
            }
        }
    }

    return 0;
}



console.log(tripledouble(451999277, 41177722899)); // Output: 1
console.log(tripledouble(1222345, 12345));         // Output: 0
console.log(tripledouble(12345, 12345));           // Output: 0
console.log(tripledouble(666789, 12345667));       // Output: 1


tripledouble(451999277,41177722899) //1
tripledouble(1222345, 12345) //,0);
tripledouble(12345, 12345) //,0);
tripledouble(666789, 12345667) //,1);
tripledouble(10560002, 100) //,1);
tripledouble(1112, 122) //,0);
tripledouble(727747775888888200, 3228458888); //1
tripledouble(71814611195555, 5613141955); //1