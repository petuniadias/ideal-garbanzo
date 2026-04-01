function reverseWords() {
    const frase = 'o rato roeu a rolha'
    return frase.split(' ').reverse().join(' ')
}

console.log(reverseWords())