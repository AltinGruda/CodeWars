// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a single digit (0-9), false otherwise.

String.prototype.digit = function () {
    if (this.length > 1 || isNaN(this)) {
        return false;
    }
    const number = Number(this);
    const regex = /[0-9]/g;
    return regex.test(this);
};
