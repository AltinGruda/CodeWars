function boredom(staff) {
    let teams = { 'accounts'      : 1,
                  'finance'       : 2 ,
                  'canteen'       : 10, 
                  'regulation'    : 3, 
                  'trading'      : 6, 
                  'change'        : 6,
                  'IS'            : 8,
                  'retail'        : 5,
                  'cleaning'      : 4,
                  'pissing about' : 25},
    score = Object.keys(staff).map(key=>teams[staff[key]]).reduce((a,b) => a+b, 0);
                      
    return score <= 80 ? 'kill me now' : (score > 100 ? 'party time!!' : 'i can handle this');            
}