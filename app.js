// Autor: Fernanda Cabanillas

// Variables
let amigoLista = [];

// Funciones
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

function mostrarAmigos() {
    let list = document.getElementById('listaAmigos');
    list.innerHTML = '';
    for (let friend of amigoLista) {
        let item = document.createElement('li');
        item.innerText = friend;
        list.appendChild(item);
    }
}

function sortearAmigo() {
    let amigoSorteado = amigoLista[Math.floor(Math.random() * amigoLista.length)];

    document.getElementById('resultado').innerText = amigoSorteado;
}