function maiorQueCem() {
    const a = [10, 50, 200, 30]
    const b = [10, 50, 80, 30]

    return [a.some(a => a === 100), 
           b.some(b => b === 100)]
}

console.log(maiorQueCem())