
function inicio(){
    document.getElementById("boton").onclick=listar;
}

function listar(){
    let nombre=document.getElementById("campo").value;
    document.getElementById("respusta").innerHTML+=`${nombre}</div>`;

}

