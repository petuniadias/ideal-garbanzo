function adicionarCampo() {
    const produtos = [
        {name: 'sapatinho', price: '20.00'},
        {name: 'galochas', price: '15.00'},
        {name: 'crocs', price: '50.00'}
    ]

    return produtos.map(p => ({...p, priceWithTax: p.price * 1.23}))
}

console.log(adicionarCampo())