function removeNull() {
    const dados = [1, null, 2, undefined, 3, null, 4]
    return dados.filter(d => d != null || d != undefined)
}

console.log(removeNull())