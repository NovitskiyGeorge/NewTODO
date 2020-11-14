let btn = document.querySelector('.btn-task');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let addTask = document.querySelector('.add-task');
let task = document.querySelector('.new-task');

btn.addEventListener('click', function() {
    console.log('done');
    overlay.style.display = 'block';



});

addTask.addEventListener('click',function() {
    let text = document.querySelector('.text');
    let newTask = task.cloneNode(true);
    newTask.style.display = 'flex';
    newTask.querySelector('p').innerHTML = text.value;
    task.after(newTask);    
    text.value = '';
    overlay.style.display = 'none';

    // let arrTasks = document.querySelectorAll();

    // localStorage.setItem( arrTasks , text.value);
});












// let steck = document.querySelector('.steck');
// let newDiv = document.createElement('div');

// newDiv.innerHTML = 'Hi!';
// steck.prepend(newDiv);
