// In music, if you double (or halve) the pitch of any note you will get to the same note again.

// "Concert A" is fixed at 440 Hz, and every other note is defined based on that. 880 Hz is also an A, as is 1760 Hz, as is 220 Hz.

// There are 12 notes in Western music: A, A#, B, C, C#, D, D#, E, F, F#, G, G#. You are given a preloaded dictionary with these 12 notes and one of the pitches that creates that note (starting at Concert A).

// Now, given a pitch (in Hz), return the corresponding note. (All inputs will be valid notes).

function getNote(pitch) {
    while(pitch<440) pitch*=2;
    while(pitch>=880) pitch/=2;
    return notesDictionary[pitch];
}

getNote(440) //, "A");
getNote(220) //, "A");
getNote(880) //, "A");