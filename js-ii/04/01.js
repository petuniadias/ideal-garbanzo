function searchByName() {
    const produtos = [
        {name: 'Rato', price: 25},
        {name: 'Teclado', price: 45}
    ]

    return produtos.find(p => p.name === 'Teclado')
}

console.log(searchByName())