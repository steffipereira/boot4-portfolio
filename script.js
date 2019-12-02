let addTask = document.querySelector('button#addTask');
const newTask = document.querySelector('#new-task');
const newTaskForm = document.querySelector('.new-task');
const newItem = document.querySelector('div.todo-list.box ul');
const deleteButton = document.querySelector('.complete-list.box');
const deleteButton2 = document.querySelector('.complete-list.box ul');
//const checkbox = document.querySelectorAll('input[type="checkbox"]');
const searchTask = document.querySelector('#search-task');


let generateTemplate = (item) => {
    let html = ` <li><input type="checkbox"><label>${item}</lable></li>`;
    newItem.innerHTML +=html;
    refreshClick()
}

addTask.addEventListener('click', (e) =>{
    e.preventDefault();
    let item = newTask.value.trim();
    //console.log(item);

    if (item.length){
        generateTemplate(item);
        newTaskForm.reset();   
    }
});


deleteButton.addEventListener('click', (e)=> {  
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filteredTodo = (filterItem) => {
    //console.log(newItem.children);
Array.from(newItem.children)
    .filter(todo=>{
       console.log( !todo.textContent.includes(filterItem));
    })
    .forEach(todo => {
        todo.classList.add('hide');
    })

Array.from(newItem.children)
    .filter(todo=>{
        todo.textContent.includes(filterItem)
    })
    .forEach(todo => {
        todo.classList.remove('hide');
    })
}

searchTask.addEventListener('keyup', () => {
    const filterItem = searchTask.value.trim();
    filteredTodo(filterItem);
    //console.log(filterItem);

});

// $('input[type="checkbox"]').each(function() {
//     var el = $(this);
//     el.click(function() {
//     });
// })



var refreshClick = function() {
[].forEach.call(document.querySelectorAll('input[type="checkbox"]'), function(el) {
    el.addEventListener('change', function(e) {
      // code…
   // console.log(e.target.parentElement.tagName);
          let data = e.target.parentElement.innerText;
          e.target.parentElement.remove();
          let completeHtml = ` <li> ${data} <button class="delete">Delete</button></li>`;
          deleteButton2.innerHTML += completeHtml;
      })
    });
}
   



refreshClick()

// checkbox.addEventListener('click', (e)=>{

//     console.log(1111);
    
//    if( e.target.parentElement.tagName == 'LI'){
    
//     console.log(222);
    
//     // console.log(e.target.parentElement.tagName);
//        let data = e.target.parentElement.innerText;
//        e.target.parentElement.remove();
//        let completeHtml = ` <li> ${data} <button class="delete">Delete</button></li>`
//        deleteButton2.innerHTML += completeHtml;
//    }


// });






































// const addItem = document.querySelector('.add');
// const ul = document.querySelector('.todos');

// const generateTemplate = (todo) => {
//     let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
//     <span>${todo}</span>
//     <i class="far fa-trash-alt delete"></i>
//   </li>`;
// ul.innerHTML += html;
// }

// addItem.addEventListener('submit', (e)=> {
// e.preventDefault();

// const todo = addItem.add.value.trim();

// if (todo.length){
//     generateTemplate(todo);
//     addItem.reset();
// }


// });

// ul.addEventListener('click', (e)=>{
//     if (e.target.classList.contains('delete')){
//         e.target.parentElement.remove();
//     }
    
// });