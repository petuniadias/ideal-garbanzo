function contarPalavrasUnicas() {
    const texto = 'the cat sat on the mat the cat'
    const palavras = texto.split(' ')
    const unicas = new Set(palavras)

    const lista = [...unicas].join(', ')
    return `${unicas.size} (${lista})`
}

console.log(contarPalavrasUnicas())