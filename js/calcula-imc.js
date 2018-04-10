let titulo = document.querySelector('.titulo-principal');
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {
    let peso    = paciente.querySelector('.info-peso').textContent;
    let altura  = paciente.querySelector('.info-altura').textContent;
    let imc;
    let tdImc   = paciente.querySelector('.info-imc');
    let pesoEHvalido = validaPeso(peso);
    let alturaEHvalido = validaAltura(altura);
    
    if (!pesoEHvalido) {
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaEHvalido) {
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEHvalido && alturaEHvalido) {
        imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
});

function calculaImc(peso,altura){
    let imc =  0;
    imc =  peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0  && peso <= 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0  && altura <= 3.00){
        return true;
    }
    else{
        return false;
    }
}