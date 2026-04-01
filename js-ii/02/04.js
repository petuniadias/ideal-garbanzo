function inStock() {
    const produtos = [
        {name: 'A', price: 30, inStock: true},
        {name: 'B', price: 60, inStock: true},
        {name: 'C', price: 20, inStock: false}
    ]

    return produtos.filter(p => p.inStock)
}

console.log(inStock())