// Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the @ and . characters for their literal equivalents in brackets.

// Example 1:

// user_name@example.com
// => user_name [at] example [dot] com

obfuscate = function(email) {
    email= email.replace("@", " [at] ");
    email = email.replaceAll(".", " [dot] ");
    return email;
}

