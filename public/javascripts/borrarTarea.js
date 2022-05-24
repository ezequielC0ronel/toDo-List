let borrarTareaForm = document.querySelectorAll('#borrarForm');

borrarTareaForm.forEach((element)=>{
    element.addEventListener('submit', (e)=>{
        e.preventDefault();
        e.target.action = `/todo/delete/${e.target[1].value}`
        e.target.submit();
    })
})