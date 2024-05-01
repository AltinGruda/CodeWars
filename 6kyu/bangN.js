function bangN(n,history){
    const lines = history.split('\n');

    
    // Iterate through each line in the history
    for (const line of lines) {
        // Split each line into number and command parts
        const parts = line.trim().split(/\s+/);

        // Extract the command number and the command itself
        const commandNumber = parseInt(parts[0]);
        const command = parts.slice(1).join(' ');
        
        // Check if the command number matches the input
        if (commandNumber === n) {
            // Return the command if found
            return command;
        }
    }
    
    // If no command with the given number is found, return event not found
    return `!${n}: event not found`;

}

bangN(4,"   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me \n  6  chmod 000 me \n  7  more me\n  8  history")//, "ls")
// bangN(2,"   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me \n  6  chmod 000 me \n  7  history\n  8  more me"  )//, "more beer")
// bangN(12,"   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls \n  5  touch me \n  6  chmod 000 me \n  7  history\n  8  more me")//, "!12: event not found")
// bangN(27, "1 lost 2 more beer 3 cd /pub 4 more beer 5 more beer 6 chmod 000 me 7 less me 8 cd .. 9 cd /pub 10 cd /pub 11 lost 12 chmod 000 me 13 lost 14 touch me 15 chmod 000 me 16 chmod 000 me 17 more beer 18 cd /pub 19 more beer 20 more beer 21 more me 22 touch me 23 more beer 24 cd .. 25 cd /pub 26 cd .. 27 lost 28 more beer 29 touch me 30 cd .. 31 less me 32 less me 33 more beer 34 less me 35 chmod 000 me 36 lost 37 more me 38 cd ..")