document.querySelector('#adicionar-paciente').onclick = function(event){
    event.preventDefault();
    let form = document.querySelector("#form-adiciona");
    
    let paciente = obterDadosPaciente(form);

    let pacienteTr  =   montaTr(paciente);

    document.querySelector('#tabela-pacientes').appendChild(pacienteTr);

    form.reset();
}
function obterDadosPaciente(form){
    
    paciente = {
        nome:       form.nome.value,
        peso:       form.peso.value,
        altura:     form.altura.value,
        gordura:    form.gordura.value,
        imc:        calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function montaTd(dado,classe){
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente){
    pacienteTr  =   document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(calculaImc(paciente.peso,paciente.altura),"info-imc"));

    return pacienteTr;
}



