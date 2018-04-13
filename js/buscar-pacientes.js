document.querySelector("#buscar-paciente").onclick = function () {

    let requisicao = new XMLHttpRequest();

    requisicao.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    requisicao.addEventListener("load", function () {
        if (requisicao.status == 200) {
            document.querySelector("#erro-ajax").classList.add("invisivel");
            console.log("buscando pacientes...");

            let pacientes = JSON.parse(requisicao.responseText);
            pacientes.forEach(paciente =>{
                adicionarPaciente(paciente);
            });

        }
        else {
            document.querySelector("#erro-ajax").classList.remove("invisivel");
        }
    });

    requisicao.send();
}