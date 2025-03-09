// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Amigo Secreto App

// Arreglo para almacenar los nombres
let amigos = [];

// Función para agregar nombres
function agregarAmigo() {
  // Capturar el valor del campo de texto
  const nombreAmigo = document.getElementById('nombreAmigo').value;

  // Validar que no esté vacío
  if (nombreAmigo === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Agregar el nombre al arreglo
  amigos.push(nombreAmigo);

  // Actualizar la lista visual
  actualizarLista();

  // Limpiar el campo de texto
  document.getElementById('nombreAmigo').value = '';
}

// Función para actualizar la lista visible usando innerHTML
function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  // Limpiar la lista
  lista.innerHTML = '';

  // Iterar sobre el arreglo amigos
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para realizar el sorteo
function sortearAmigo() {
  // Validar que haya al menos un amigo en la lista
  if (amigos.length === 0) {
    alert('La lista está vacía. Agregue al menos un nombre.');
    return;
  }
  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  // Mostrar el resultado
  document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}
