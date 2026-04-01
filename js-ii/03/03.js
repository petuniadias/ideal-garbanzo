function freqPalavra() {
    const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã']
    return frutas.reduce((acc, item) => {
        if (acc[item]) {
            acc[item] = acc[item] + 1
        } else {
            acc[item] = 1
        }

        return acc
    }, {})
}

console.log(freqPalavra())