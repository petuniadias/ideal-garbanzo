function remDuplicados() {
    const nums = [1, 2, 2, 3, 1, 4]
    return nums.filter((x, i) => nums.indexOf(x) === i)
}

console.log(remDuplicados())