var twosum= function(target,nums){
    let tmp = new Map()
    for(let i=0;i<nums.length;i++){
        if(tmp.has(nums[i])){
            return [tmp.get(nums[i]),i]
        }else{
            tmp.set(target-nums[i],i)
        }
    }
}