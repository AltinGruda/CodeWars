function remove (string) {
    //coding and coding....
    return string.split("").filter(item => item !== "!").join("") +"!";
}