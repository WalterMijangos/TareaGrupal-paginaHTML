const texto = document.getElementById('texto');
const contador = document.getElementById('contador');
const maxCaracter = 200;  //maximo de caracteres


texto.addEventListener('input', function(){
    const caracterRestante = maxCaracter-texto.value.length; //restamos la cantidad maxima por cada letra que escriba el usuario
    contador.textContent = caracterRestante+' caracteres restantes';
});


const boton = document.getElementById('boton');
const lista = document.getElementById('lista')
const nombre = document.getElementById('nombre');

function agregarComentario(){
    const itemText = texto.value.trim();
    const nombrePersona = nombre.value.trim();

    if(nombrePersona !== "" && itemText !== ""){
        const li = document.createElement("li");

        //crear el texto del nombre y el comentario
        const nombreComentario = document.createElement("strong");
        nombreComentario.textContent =  'comentario de '+nombrePersona;

        const comentario = document.createElement("p");
        comentario.textContent = itemText;
        comentario.className = "mb-0";

        //mensaje de eliminar
        const mensajeEliminar = document.createElement("small");
        mensajeEliminar.textContent = "Haz doble clic para eliminarlo";
        mensajeEliminar.style.color = "gray"; // Color del mensaje
        mensajeEliminar.style.fontStyle = "italic"; // Estilo en cursiva

        //agregar el nombre y el comentario al <li>
        li.appendChild(nombreComentario);
        li.appendChild(comentario);
        li.appendChild(mensajeEliminar);
        li.className = "grupoLista-item";

        lista.appendChild(li);

        //limpiar el formulario
        nombre.value = ""
        texto.value = "";

        //reiniciar el contador de caracteres
        contador.textContent = maxCaracter+'  caracteres restantes';

        //eliminar comentario al hacer dobleClic
        li.addEventListener("dblclick", function(){
            lista.removeChild(li)
        });
    }
}

boton.addEventListener('click', agregarComentario);
texto.addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        agregarComentario();
    }
});