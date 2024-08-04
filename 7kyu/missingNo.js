function missingNo(nums) {
    nums.sort((a, b) => a-b);
    for(let i = 0; i <= 100; i++){
      if(nums[i] !== i){
        return i;
      }
    }
}