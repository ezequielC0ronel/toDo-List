let formularioTarea = document.querySelector('form');
let listaTareas = document.querySelector('#listaTareas');
let inputTarea = document.querySelector('input[type="text"]');

formularioTarea.addEventListener('submit', (e)=>{
    e.preventDefault();
    let tarea = document.createElement('li');
    tarea.innerText = inputTarea.value;
    listaTareas.appendChild(tarea);
    inputTarea.value = "";
})