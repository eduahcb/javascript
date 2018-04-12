document.querySelector("#filtro").oninput = function () {

    let pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        pacientes.forEach(paciente => {
            let nome = paciente.querySelector(".info-nome").textContent;
            let expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }
            else{
                paciente.classList.remove("invisivel");
            }
        });  
    }
    else{
        pacientes.forEach(paciente =>{
            paciente.classList.remove("invisivel");
        });
    }
}