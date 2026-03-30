function titleCase(s) {
    s = s.split(' ')
    for (let i=0; i<s.length; i++) {
        let word = s[i]
        s[i] = word[0].toUpperCase() + word.slice(1)
    }

    return s.join(' ')

}

console.log(titleCase('ola boas'))
console.log(titleCase('hello world') === 'Hello World')
console.log(titleCase('the quick brown fox') === 'The Quick Brown Fox')
console.log(titleCase('a') === 'A')