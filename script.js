let btn = document.querySelector('.btn-task');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let addTask = document.querySelector('.add-task');
let task = document.querySelector('.new-task');

btn.addEventListener('click', function() {
    console.log('done');
    overlay.style.display = 'block';



});

let count = 0;


function init() {
    



for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log((`${key}: ${localStorage.getItem(key)}`));
    let newTask = task.cloneNode(true);
    newTask.style.display = 'flex';
    newTask.querySelector('p').innerHTML = localStorage.getItem(key);
    task.after(newTask);    

  }


count = localStorage.length;
console.log(count);
return count;



}

init();


addTask.addEventListener('click',function() {

    let text = document.querySelector('.text');
    let newTask = task.cloneNode(true);
    newTask.style.display = 'flex';
    newTask.querySelector('p').innerHTML = text.value;
    task.after(newTask);    
    localStorage.setItem(count, text.value);

    text.value = '';    
    overlay.style.display = 'none';

    count++;


});

let circle = document.querySelector('.circle');

circle.addEventListener('click', function() {
    localStorage.clear();
});

