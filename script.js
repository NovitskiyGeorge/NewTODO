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
        newTask.id = count;
        steck.append(newTask);    
    
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
    steck.append(newTask);    

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check';
    checkbox.id = count;
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

        let checkbox = document.querySelectorAll('.check'); 




document.addEventListener('click', function(e) {

    
    if(e.target && e.target.className == 'check') {

        let id = e.target.id;

        taskRemove = document.querySelector(`[id="${id}"]`);
        taskRemove.remove();



        itemsList = itemsList.filter(item => item.id !== id);

        
        

    }

});



// steck.addEventListener('input', function() {

//         let taskRemove = document.querySelectorAll('.new-task');
//         let checkbox = document.querySelectorAll('.check'); 
//         count--;  
//         taskCounter.innerHTML = count;    
//         // let id = 0;





        
// });




// checkbox.forEach(function(items, i) {

//     items.addEventListener('change', function() { 
//         setTimeout(() => {            
//         taskRemove[i].remove();            
//         }, 200);
        
        


//     });
