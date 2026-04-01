function firstNegative() {
    const nums = [5, 3, -2, 8, 1]

    return nums.findIndex(n => n < 0)
}

console.log(firstNegative())