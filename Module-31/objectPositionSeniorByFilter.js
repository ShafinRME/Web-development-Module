const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
]

const positionSenior = instructor.filter((person) =>
    person.position === 'Senior')
    .map((sen) => sen.name)

console.log(positionSenior);