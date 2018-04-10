document.querySelector("#tabela-pacientes").ondblclick = function(event){
    
    let tr = event.target.parentNode;
    tr.classList.add("fadeOut");

    setTimeout(() => {
        tr.remove();
    }, 500);
}