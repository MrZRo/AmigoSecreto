# AmigoSecreto
¿¿Quien será tu amigo secreto en el sorteo??

Hola Alura, esta es mi primera vez documentando codigo espero que si este bien :D

Primero iniciamos una variable la cual almacenara los nombres de los amigoa para el sorteo
let amigos=[];

Luego crearemos una funcion la cual verificara si la entrada es valida (No vacio) el cual nos alertara si es una entrada no valida y posterior a eso lo añadira en el array anteriormente declarado. Tambien este llamara ala funcion recorrerAmigos() la cual se explicara más abajo.

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

la funcion recorrerAmigos() publicara en la pagina todos los nombres que fueron agregados al vector actualizandose cada que se vaya añadiendo alguno, reiniciando la lista para evitrar valores repetidos

function recorrerAmigos(){
    let listaAmigos=document.getElementById('listaAmigos');
    listaAmigos.innerHTML='';
    for(let i=0;i<amigos.length;i++){
        let li=document.createElement("li");
        li.textContent=amigos[i];
        listaAmigos.appendChild(li);
    }
}

Y por ultimo la funcion de sorteatAmigo() verificara que la lista no este vacia para evitar errores al momento de sortear al amigo secreto (evitamos no sortear nada). Una vez nosotros verificamos que la lista no este vacia generamos un numero aleatorio el cual representara un indice que despues sera usado para mostrar al amigo secreto :D

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
