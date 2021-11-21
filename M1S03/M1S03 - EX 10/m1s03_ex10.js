document.getElementById("lista").innerHTML = JSON.parse(localStorage.getItem("lista"));

function cadastrar (){

    var nome = document.forms["preencher"]["nome"].value;
    var sobrenome = document.forms["preencher"]["sobrenome"].value;
    var email = document.forms["preencher"]["email"].value;
    var telefone = document.forms["preencher"]["telefone"].value;
    var endereco = document.forms["preencher"]["endereco"].value;

    var tr = document.createElement("tr");
 
    var td = document.createElement("td");
    td.innerText = nome;
    tr.appendChild(td);
    document.getElementById("lista").appendChild(tr);

    td = document.createElement("td");
    td.innerText = sobrenome;
    tr.appendChild(td);
    document.getElementById("lista").appendChild(tr);

    td = document.createElement("td");
    td.innerText = email;
    tr.appendChild(td);
    document.getElementById("lista").appendChild(tr);

    td = document.createElement("td");
    td.innerText = telefone;
    tr.appendChild(td);
    document.getElementById("lista").appendChild(tr);

    td = document.createElement("td");
    td.innerText = endereco;
    tr.appendChild(td);
    document.getElementById("lista").appendChild(tr);

    salvarLocalStorage();

}

function salvarLocalStorage() {
    localStorage.setItem("lista", JSON.stringify(document.getElementById("lista").innerHTML)) 
}