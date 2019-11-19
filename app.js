let myArray = [{id: 1}, {id: 2, condition: 'earlyDueDate'}, {id: 3}]

myArray.forEach(value => {
    console.log(Object.keys(value))
})

myArray = myArray.filter(value => !Object.keys(value).includes('condition'))

console.log(myArray)

