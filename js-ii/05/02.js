function allApproved() {
    const turma = [
        {nome: 'Ana', nota: 15},
        {nome: 'Bia', nota: 12},
        {nome: 'Cau', nota: 9}
    ]

    return turma.every(aluno => aluno.nota >= 10)
}

console.log(allApproved())