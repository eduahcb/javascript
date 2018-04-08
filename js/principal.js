let titulo = document.querySelector('.titulo-principal');
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector('#primeiro-paciente');

let peso = paciente.querySelector('.info-peso').textContent;
let altura = paciente.querySelector('.info-altura').textContent;
let imc;
let tdImc = paciente.querySelector('.info-imc');
let pesoEHvalido = true;
let alturaEHvalido = true;

if(peso <= 0 || peso >= 1000){
    tdImc.textContent =  "Peso inválido";
    pesoEHvalido = false;
}
if(altura <= 0 || altura >= 3){
    tdImc.textContent =  "Altura inválida";
    alturaEHvalido = false;
}

if(pesoEHvalido && alturaEHvalido){
    imc = peso / (altura * altura);
    tdImc.textContent =  imc;
}