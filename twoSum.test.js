const twoSum = require('./twoSum')

test('(twoSum([2,7,11,15], 9) = [ 0, 1 ]', () => {
    expect(twoSum([2,7,11,15], 9)).toContain(0)
    expect(twoSum([2,7,11,15], 9)).toContain(1)
})

test('(twoSum([3,2,4], 6) = [ 1, 2 ]', () => {
    expect(twoSum([3,2,4], 6)).toContain(1)
    expect(twoSum([3,2,4], 6)).toContain(2)
})

test('(twoSum([3,3], 6) = [ 0, 1 ]', () => {
    expect(twoSum([3,3], 6)).toContain(0)
    expect(twoSum([3,3], 6)).toContain(1)
})

test('(twoSum([0,4,3,0], 0) = [ 0, 3 ]', () => {
    expect(twoSum([0,4,3,0], 0)).toContain(0)
    expect(twoSum([0,4,3,0], 0)).toContain(3)
})

test('(twoSum([-1,-2,-3,-4,-5], -8) = [ 2, 4 ]', () => {
    expect(twoSum([-1,-2,-3,-4,-5], -8)).toContain(2)
    expect(twoSum([-1,-2,-3,-4,-5], -8)).toContain(4)
})
/* 


nums = [3,3], target = 6
console.log(twoSum(nums, target))
nums = [0,4,3,0], target = 0
console.log(twoSum(nums, target))
nums = [-1,-2,-3,-4,-5], target= -8
console.log(twoSum(nums, target)) */