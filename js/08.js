function maxArray(arr) {
    return Math.max(...arr)
}

console.log(maxArray([3,1,4,1,5,9]) === 9)
console.log(maxArray([-3, -1, -4]) === -1)
console.log(maxArray([7]) === 7)