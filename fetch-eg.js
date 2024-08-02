fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
.finally(() => console.log('finally'))
// if .finally(console.log('finally')) is used, it will be executed immediately
// if .finally(() => console.log('finally')) is used, it will be executed after the promise is resolved or rejected