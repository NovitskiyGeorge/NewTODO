let btn = document.querySelectorAll('#btn');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let addTask = document.querySelector('.add-task');
let taskCounter = document.querySelector('.count');
let steck = document.querySelector('.steck');

let count = 0;
let item;
let itemsList = [];
const STORAGE_ITEMS = 'storage-items';


btn.forEach(function(item, i, arr) {
    item.addEventListener('click', function() {
        overlay.style.display = 'block';     
    });
});

    



function init() {

    itemsList = JSON.parse(localStorage.getItem(STORAGE_ITEMS));

    if (itemsList) {

    itemsList.forEach(function(item, i, arr) {

        let newTask = document.createElement('div');
        newTask.className = 'new-task';
        steck.append(newTask);    
    
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check';
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
    steck.append(newTask);    

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check';
    newTask.append(checkbox);

    let p = document.createElement('p');
    p.innerHTML = text.value;
    newTask.append(p);   

    count++;
    taskCounter.innerHTML = count;    

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

});


steck.addEventListener('input', function() {
    function removeTasks() {
        let taskRemove = document.querySelectorAll('.new-task');
        let checkbox = document.querySelectorAll('.check'); 
        count--;  
        taskCounter.innerHTML = count;      
        console.log(itemsList);

        
        checkbox.forEach(function(item, i) {

            // debugger
            item.addEventListener('change', function() {      
                
                itemsList = itemsList.filter(function(item) {
                   return item.id !== i;
                });
                

                setTimeout(() => {            
                taskRemove[i].remove();            
                }, 200);    
            });
        
        });
        }
        removeTasks();
});

