function allTags() {
    const posts = [
        {title: 'A', tags: ['js', 'node']},
        {title: 'B', tags: ['css', 'html']},
        {title: 'C', tags: ['js', 'css']}
    ]

    return posts.flatMap(post => post.tags)
}

console.log(allTags())