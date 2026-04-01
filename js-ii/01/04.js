function getEmail() {
    const users = [
        {name: 'Ana', email: 'ana@mail.com'},
        {name: 'Bia', email: 'bia@mail.com'}
    ]
    return users.map(u => u.email)
}

console.log(getEmail())