function doSomething(){
    console.log('third');
}

console.log('first');
console.log('second');
// const timeoutId = setTimeout(()=>{console.log('third')}, 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => { 
    console.log('response received'); 
    return response.json();
})
  .then(json => console.log(json))

console.log('fourth');
console.log('fifth');