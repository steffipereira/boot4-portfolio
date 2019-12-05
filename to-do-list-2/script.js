const addItem = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.form-control');

const generateTemplate = (todo) => {
    let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
ul.innerHTML += html;
}

addItem.addEventListener('submit', (e)=> {
e.preventDefault();

const todo = addItem.add.value.trim();

if (todo.length){
    generateTemplate(todo);
    addItem.reset();
}

});

ul.addEventListener('click', (e)=>{
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    
});

const filterItems = (searchItem) => {
    //console.log(ul.children)
    Array.from(ul.children)
        .filter((list)=> !list.textContent.includes(searchItem))
        .forEach((list)=> list.classList.add('hide'));

    Array.from(ul.children)
        .filter((list)=> list.textContent.includes(searchItem))
        .forEach((list)=> list.classList.remove('hide'));
}

search.addEventListener('keyup', ()=>{
    let searchItem = search.value.trim();
    //console.log(searchItem);
    filterItems(searchItem);
});