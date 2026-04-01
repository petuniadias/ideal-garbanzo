function produtoTotal() {
    const nums = [1, 2, 3, 4, 5]
    return nums.reduce((acc, n) => acc * n, 1)
}

console.log(produtoTotal())