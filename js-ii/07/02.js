function ordenerPorNome() {
    const pessoas = [
        {nome: 'Bia'},
        {nome: 'Ana'},
        {nome: 'Diana'},
        {nome: 'Cau'},
    ]

    return pessoas.sort((a, b) => a.nome.localeCompare(b.nome))
}

console.log(ordenerPorNome())