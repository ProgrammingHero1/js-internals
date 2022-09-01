console.log(111111);
console.log(222222);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(444444);
console.log(555555);