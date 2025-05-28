const plantillas = []

/* Quiero crear una instancia de template
new Template (titulo, mensaje , hashtag)
¿Que debemos hacer?
1. Capturar los elementos con los querySelector.
   1.1 Validacion de los valores try catch
2. Crear la instancia => new Template(tituloDOM,mensajeDOM,hasDom)
3. Lo inserto a mi arreglo plantillas.

*/

const botonGuardar = document.querySelector("#save-template-btn");

botonGuardar.addEventListener("click", function () {
  const inputTitulo = document.querySelector("#template-title");
  const inputContenido = document.querySelector("#template-message");
  const inputHashtag = document.querySelector("#template-hashtag");

  const titulo = inputTitulo.value.trim();
  const contenido = inputContenido.value.trim();
  const hashtag = inputHashtag.value.trim();

   const nuevaPlantilla = new Template(titulo, contenido, hashtag)

   store.plantillas = [...store.plantillas, nuevaPlantilla];

   renderPlantillas();

});

function renderPlantillas() {
  const contenedor = document.querySelector("#templates-container");
  contenedor.innerHTML = ""; // limpia el contenido anterior

  store.plantillas.forEach((plantilla, index) => {
  const div = document.createElement("div");
  div.classList.add("border", "p-4", "mb-4", "rounded", "shadow");

  div.innerHTML = `
    <h3 class="text-lg font-bold">${plantilla.titulo}</h3>
    <p>${plantilla.mensaje}</p>
    <span class="text-sm text-gray-500">${plantilla.hashtag}</span>
    <button class="text-red-500 ml-2" data-index="${index}">🗑️ Eliminar</button>
  `;

  contenedor.appendChild(div);
  const botonEliminar = div.querySelector("button");

botonEliminar.addEventListener("click", function () {
  const index = parseInt(botonEliminar.getAttribute("data-index"));

  // Crear nuevo array sin la plantilla eliminada
  store.plantillas = store.plantillas.filter((_, i) => i !== index);

  // Volver a renderizar
  renderPlantillas();
});

});

}

// Mostrar plantillas existentes al iniciar
renderPlantillas();


