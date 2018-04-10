document.querySelector('#adicionar-paciente').onclick = function(event){
    event.preventDefault();
    let form = document.querySelector("#form-adiciona");
    
    let paciente = obterDadosPaciente(form);

    let pacienteTr  =   montaTr(paciente);

    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        mostraErros(erros);
        return;
    }

    document.querySelector('#tabela-pacientes').appendChild(pacienteTr);
    let ul = document.querySelector("#mensagens-erro");

    form.reset();
    ul.innerHTML =  "";
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

function validaPaciente(paciente){
    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("O percentual de gordura não pode ser em branco");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido");
    }

    return erros;
}

function mostraErros(erros){
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(erro =>{
        let li = document.createElement("li");
        li.classList.add("msg-erro");
        li.textContent = erro;
        ul.appendChild(li);
    });
}



