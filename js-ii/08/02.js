function capitalizarPrimeiraLetra() {
    const str = 'tHe QUICK brown FOX'
    return str.split(' ').map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ')
}

console.log(capitalizarPrimeiraLetra())