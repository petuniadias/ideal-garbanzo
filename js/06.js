function countVowels(s) {
    s = s.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for(let i=0; i<s.length; i++) {
        if (vowels.includes(s[i])) {
            count ++
        }
    }

    return count;
}

console.log(countVowels('hello') === 2)
console.log(countVowels('sky') === 0)
console.log(countVowels('AEIOU') === 5)
console.log(countVowels('') === 0)