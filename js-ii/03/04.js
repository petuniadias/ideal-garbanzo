function carrinhoTotal() {
    const cart = [
        {name: 'Livro', price: 12, quantity: 2},
        {name: 'Caneta', price: 1.5, quantity: 5}
    ]

    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

console.log(carrinhoTotal())