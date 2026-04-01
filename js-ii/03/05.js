function arrayId() {
    const users = [
        {id: 1, name: 'Ana'},
        {id: 2, name: 'Bia'},
        {id: 3, name: 'Cau'},
    ]

    return users.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, {})
}

console.log(arrayId())