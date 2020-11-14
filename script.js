let btn = document.querySelectorAll('#btn');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let addTask = document.querySelector('.add-task');
let task = document.querySelector('.new-task');
let taskCounter = document.querySelector('.count');



btn.forEach(function(item, i, arr) {
    item.addEventListener('click', function() {
        overlay.style.display = 'block';
    });

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

    taskCounter.innerHTML = `tasks: ${count}`;

});

taskCounter.append(count);


function removeTasks() {

let taskRemove = document.querySelectorAll('.new-task');
let checkbox = document.querySelectorAll('.check');

checkbox.forEach(function(item, i) {
    item.addEventListener('change', function() {

    function timeRemove() {
        taskRemove[i].remove();
    }
    setTimeout(timeRemove, 300);

    });
});

}

removeTasks();