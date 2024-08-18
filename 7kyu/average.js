function distancesFromAverage(arr){
    let average = arr.reduce((acc,c) => acc+c ,0) / arr.length;
    let result = arr.map(item => +(average - item).toFixed(2));
    
    return result; 
}