/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum =(nums, target) =>{
    let savedValues = new Map();
    let result = []
    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];
        
        if(savedValues.has(complement)){
            result[0] = savedValues.get(complement);
            result[1] = i;
            return result;
        }  
        savedValues.set(nums[i],i);
    }
}

