function somaTotal() {
    const nums = [10, 20, 30, 40]
    return nums.reduce((acc, n) => acc + n, 0)
}

console.log(somaTotal())