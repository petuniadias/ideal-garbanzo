function ordenarPreco() {
    const produtos = [
        {name: 'A', price: 30},
        {name: 'B', price: 10},
        {name: 'C', price: 50},
    ]

    return produtos.sort((a, b) => b.price - a.price)
}

console.log(ordenarPreco())