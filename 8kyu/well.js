function well(x){
    let arr = x.filter(item => item === 'good');
    return arr.length <= 2 && arr.length >  0 ? 'Publish!' : arr.length > 2 ? 'I smell a series!' : 'Fail!';
}