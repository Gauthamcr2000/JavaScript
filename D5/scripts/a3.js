console.log("promises/async await/fetch!");

id = prompt("Enter the user id between 1 to 200 : ",1);
fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(json => console.log(json));