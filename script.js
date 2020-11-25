let btn = document.querySelectorAll('#btn');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let addTask = document.querySelector('.add-task');
let taskCounter = document.querySelector('.count');
let stack = document.querySelector('.stack');
let btnSwitch = document.querySelector('.switch');
let main = document.querySelector('.main');
let btnBurger = document.querySelector('.burger');
let firstLine = document.querySelector('.first');
let secondLine = document.querySelector('.second');
let thirdLine = document.querySelector('.third');
let slide = document.querySelectorAll('.day');



let count = 0;
let item;
let itemsList = [];
const STORAGE_ITEMS = 'storage-items';


btn.forEach(function(item, i, arr) {
        item.addEventListener('click', function() {
        overlay.style.display = 'block';  
        modal.classList.toggle('modal-active');  
        addTask.classList.toggle('btn-task-active');
    });
});

function init() {
    itemsList = JSON.parse(localStorage.getItem(STORAGE_ITEMS));
    if (itemsList) {
        itemsList.forEach(function(item, i, arr) {
        let newTask = document.createElement('div');
        newTask.className = 'new-task';
        newTask.id = count;
        stack.prepend(newTask);    
    
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check';
        checkbox.id = count;
        newTask.append(checkbox);    
    
        let p = document.createElement('p');
        p.innerHTML = item.text;
        newTask.append(p);   
        count++;        
    });
    }
    taskCounter.append(count);
}
init();

addTask.addEventListener('click',function() {   
    let text = document.querySelector('.text');
    let newTask = document.createElement('div');
    newTask.className = 'new-task';
    newTask.id = count;
    stack.prepend(newTask);    

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check';
    checkbox.id = count;
    newTask.append(checkbox);

    let p = document.createElement('p');
    p.innerHTML = text.value;
    newTask.append(p);   

    item = {
        id: count,
        text: text.value
    };
    if(itemsList == null) {
        itemsList = [];
    }
    itemsList.push(item);    
    localStorage.setItem(STORAGE_ITEMS, JSON.stringify(itemsList));

    text.value = '';    
    overlay.style.display = 'none';

    count++;
    taskCounter.innerHTML = count;    

    modal.classList.toggle('modal-active');  
    addTask.classList.toggle('btn-task-active');
});

document.addEventListener('click', function(e) {    
    if(e.target && e.target.className == 'check') {
            let listTask = document.querySelectorAll('.new-task');
            let id = +e.target.id;
            taskRemove = document.querySelector(`[id="${id}"]`);
            taskRemove.classList.add('remove-task');

            listTask.forEach(function(item, i) {
                if(+item.id < +id) {
                    item.classList.toggle('upper');
                }
            });

            function removeItem() {
                taskRemove.remove();                
                listTask.forEach(function(item, i) {
                    if(+item.id < +id) {
                        item.classList.toggle('upper');
                    }
                });
            }
            setTimeout(removeItem, 900);
            itemsList = itemsList.filter(item => item.id != id); 
            localStorage.setItem(STORAGE_ITEMS, JSON.stringify(itemsList));
            count--;
            taskCounter.innerHTML = count;  
    }    
});
btnSwitch.addEventListener('click', function() {
    main.classList.toggle('dark-theme');
});

btnBurger.addEventListener('click', function() {
    firstLine.classList.toggle('active');
    secondLine.classList.toggle('active');
    thirdLine.classList.toggle('active');
});
