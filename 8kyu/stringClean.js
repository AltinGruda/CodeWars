function stringClean(s){
    return s.split('').filter(char => !/[0-9]/.test(char)).join('');
}