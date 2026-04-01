function validateForms() {
    const forms = [
        { name: "João", email: "joao@email.com", age: 25 },
        { name: "Maria", email: "", age: 30 },
        { name: "", email: "ana@email.com", age: 20 },
        { name: "Carlos", email: "carlos@email.com", age: null }
    ];

    return [forms.some(form => Object.values(form).some(campo => campo === "" || campo === null)),
            forms.every(form => Object.values(form)
                        .filter(campo => typeof campo === "string")
                        .every(campo => campo.length >= 3)
                    )
                ]
}

console.log(validateForms())