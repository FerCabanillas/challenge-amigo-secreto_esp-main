// Autor: Fernanda Cabanillas

// Variables
let amigoLista = [];

// Funciones
// En la primera función, se agrega un amigo a la lista de amigos. Si el campo está vacío, se muestra un mensaje de alerta. Si no, se agrega el amigo a la lista y se limpia el campo.
function agregarAmigo() {
    let amigos = document.getElementById('amigo').value;
    if (amigos === '') {
        alert('Por favor, ingrese un nombre válido');
    } else {
        amigoLista.push(amigos);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    }
}

// En la segunda función, se muestra la lista de amigos en el HTML. Se crea una lista y se agregan los amigos a la misma.
function mostrarAmigos() {
    let list = document.getElementById('listaAmigos');
    list.innerHTML = '';
    for (let friend of amigoLista) {
        let item = document.createElement('li');
        item.innerText = friend;
        list.appendChild(item);
    }
}
// En la tercera función, se sortea un amigo de la lista. Se elige un amigo al azar y se muestra en el HTML.
function sortearAmigo() {
    let amigoSorteado = amigoLista[Math.floor(Math.random() * amigoLista.length)];

    document.getElementById('resultado').innerText = amigoSorteado;
}
