let btn = document.querySelectorAll('#btn');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let addTask = document.querySelector('.add-task');
let task = document.querySelector('.new-task');
let taskCounter = document.querySelector('.count');

let steck = document.querySelector('.steck');



btn.forEach(function(item, i, arr) {
    item.addEventListener('click', function() {
        overlay.style.display = 'block';
    });

});



let count = 0;


function init() {

for(let i = 0; i < localStorage.length; i++) {
    
    let key = localStorage.key(i);


    if(i == 0){

        let newTask = document.createElement('div');
        newTask.className = 'new-task';
        steck.append(newTask);    
    
    
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check';
        newTask.append(checkbox);
    
    
        let p = document.createElement('p');
        p.innerHTML = localStorage.getItem(key);
        newTask.append(p);

    } else {

        let newTask = document.createElement('div');
        newTask.className = 'new-task';
        newTask.after(newTask);


        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check';
        newTask.append(checkbox);


        let p = document.createElement('p');
        p.innerHTML = localStorage.getItem(key);
        newTask.append(p);
    }
  }
    // count = localStorage.length;
    // return count;
}

init();


addTask.addEventListener('click',function() {

    let text = document.querySelector('.text');

    let newTask = document.createElement('div');
    newTask.className = 'new-task';
    steck.append(newTask);    


    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check';
    newTask.append(checkbox);


    let p = document.createElement('p');
    p.innerHTML = text.value;
    newTask.append(p);

    localStorage.setItem(count, text.value);


    text.value = '';    
    overlay.style.display = 'none';
    count++;

    taskCounter.innerHTML = `tasks: ${count}`;

    // window.location.reload();

});

taskCounter.append(count);


function removeTasks() {

let taskRemove = document.querySelectorAll('.new-task');
let checkbox = document.querySelectorAll('.check');



checkbox.forEach(function(item, i) {
    item.addEventListener('change', function() {

    function timeRemove() {
        localStorage.removeItem(i);
        console.log(i);

        taskRemove[i].remove();

    }

    setTimeout(timeRemove, 300);

    });
});

}

removeTasks();

