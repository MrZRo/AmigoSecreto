// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    let nombre=document.getElementById('amigo').value;
    if(nombre !==''){
        amigos.push(nombre);
        console.log(amigos);
        document.querySelector('#amigo').value='';
        recorrerAmigos();
    }else{
        alert("Por favor, inserte un nombre");
    }
}

function recorrerAmigos(){
    let listaAmigos=document.getElementById('listaAmigos');
    listaAmigos.innerHTML='';
    for(let i=0;i<amigos.length;i++){
        let li=document.createElement("li");
        li.textContent=amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    //si queremos agregar o poner una condicion de que sea de un número
    //N de amigos para la lista, podemos cambiarla aquí :D
    if(amigos.length==0){
        alert("Añade amigos para el sorteo");
    }else{
        let indice=Math.floor(Math.random()*amigos.length);
        resultado.innerHTML=`Tu amigo secreto sorteado es: ${amigos[indice]}`;
        listaAmigos.innerHTML='';
    }
}