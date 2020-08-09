var checkPossibility = function(nums) {
  var count = 0;
  
  for (var i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
          count ++;
      }
  }
  
  return count <=1;
};

console.log(checkPossibility([[3,4,2,3]]))