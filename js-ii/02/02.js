function palavrasComp() {
    const palavras = ['gato', 'elefante', 'cão', 'abacaxi', 'pato']

    return palavras.filter(p => p.length >= 5)
}

console.log(palavrasComp())