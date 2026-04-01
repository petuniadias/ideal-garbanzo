function nomeMaiusculas() {
    const nome = ['ana', 'bruno', 'carla']
    return nome.map(n => n.toUpperCase())
}

console.log(nomeMaiusculas())