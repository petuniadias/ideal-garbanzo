function searchAndUpdate() {
    const tasks = [
        {id: 1, text: 'A', done: false},
        {id: 2, text: 'B', done: false},
        {id: 3, text: 'c', done: false}
    ]

    const taskId = tasks.findIndex(t => t.id === 3)
    tasks[taskId].done = true;
    return tasks
}

console.log(searchAndUpdate())