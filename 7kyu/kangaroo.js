// Two kangaroos are jumping on a line. They start out at different points on the line, and jump in the same direction at different speeds. Your task is to determine whether or not they'll ever land in the same spot at the same time (you'll just have to suspend disbelief for a moment and accept that two kangaroos, for the purpose of this kata, can occupy the same space at the same time :)
// Your function is given four arguments (kanga1, rate1, kanga2, rate2); the first kangaroo's starting point, the first kangaroo's speed, the second kangaroo's starting point, and the second kangaroo's speed.
// Return true if the above conditions are met, else false. Starting location and speed may vary wildly. The first kangaroo will usually start behind the second one and travel faster, but not always. Starting locations may be negative, but speeds will always be > 0.
function kangaroo(kanga1, rate1, kanga2, rate2) {
    // jump until they reach the same point
    // if they reach the same point return at the same jump return true
    // else return false

    // firstKangarooJump += rate1, secondKangarooJump += rate2
    // check if positionofKangaroo1 === positionOfKangaroo2
    // if yes, return true
    // else continue to the next step
    let firstKangarooJump = kanga1;
    let secondKangarooJump = kanga2;
    if (firstKangarooJump < secondKangarooJump && rate1 <= rate2) return false;
    while (firstKangarooJump < secondKangarooJump) {
        firstKangarooJump += rate1;
        secondKangarooJump += rate2;
        if (firstKangarooJump === secondKangarooJump) return true;
    }

    return false;
}

kangaroo(0, 3, 4, 2) //, true)
kangaroo(0, 9, 16, 4) //, false)
kangaroo(0, 2, 5, 3) //, false)
kangaroo(1571, 4240, 9023, 4234) //, true)
kangaroo(-1571, 4240, 9023, 4234)//, false)
