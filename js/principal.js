let titulo = document.querySelector('.titulo-principal');
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {
    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    let imc;
    let tdImc = paciente.querySelector('.info-imc');
    let pesoEHvalido = true;
    let alturaEHvalido = true;
    
    if (peso <= 0 || peso >= 1000) {
        tdImc.textContent = "Peso inválido";
        pesoEHvalido = false;
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3) {
        tdImc.textContent = "Altura inválida";
        alturaEHvalido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEHvalido && alturaEHvalido) {
        imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
});