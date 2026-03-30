function reverseStr(s) {
    let reversed = ''
    for (let i = s.length - 1; i >= 0; i--) {
        /** s.length = 4
         * i = 4
         * i > 0
         * s[1], s[2], s[3], s[4] --> dá undefined (nao existe)
         * 
         * correto:
         * s.length = 4 - 1
         * i >= 0
         */
        reversed += s[i]
    }
    return reversed
}

console.log(reverseStr('hello'))
console.log(reverseStr('abc'))
console.log(reverseStr('a'))