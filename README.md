# **Amigo Secreto**

¿¿Quién será tu amigo secreto en el sorteo??

Hola Alura, esta es mi primera vez documentando código, espero que esté bien :D

Primero iniciamos una variable que almacenará los nombres de los amigos para el sorteo:
```javascript
let amigos = [];
```

Luego, creamos una función que verificará si la entrada es válida (no vacía), la cual nos alertará si es una entrada no válida y, posteriormente, la añadirá al array previamente declarado. También llamará a la función `recorrerAmigos()`, la cual se explicará más abajo.

```javascript
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre !== '') {
        amigos.push(nombre);
        console.log(amigos);
        document.querySelector('#amigo').value = '';
        recorrerAmigos();
    } else {
        alert("Por favor, inserte un nombre");
    }
}
```

La función `recorrerAmigos()` publicará en la página todos los nombres que fueron agregados al vector, actualizándose cada vez que se agregue uno nuevo. Reiniciaremos la lista para evitar valores repetidos.

```javascript
function recorrerAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
```

Y por último, la función `sortearAmigo()` verificará que la lista no esté vacía para evitar errores al momento de sortear al amigo secreto (así evitamos no sortear nada). Una vez que verificamos que la lista no esté vacía, generamos un número aleatorio que representará un índice, que luego se usará para mostrar al amigo secreto :D

```javascript
function sortearAmigo() {
    // Si queremos agregar o poner una condición de que sea de un número
    // N de amigos para la lista, podemos cambiarla aquí :D
    if (amigos.length == 0) {
        alert("Añade amigos para el sorteo");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `Tu amigo secreto sorteado es: ${amigos[indice]}`;
        listaAmigos.innerHTML = '';
    }
}
