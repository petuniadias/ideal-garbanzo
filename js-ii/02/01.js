function age() {
    const pessoas = [
        {name: 'Ana', age:22},
        {name: 'Bia', age:16},
        {name: 'Cau', age:18}
    ]

    return pessoas.filter(p => p.age >= 18)
}

console.log(age())