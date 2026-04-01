function ordenarNumeros() {
    const nums = [42, 5, 100, 3, 77]

    return nums.sort((a, b) => a - b)
}

console.log(ordenarNumeros())