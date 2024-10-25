
document.getElementById("btnMenu").addEventListener("click",
  function () {
    let elemento = document.getElementById("navbar");
    if (elemento.classList.contains("navbar")) {
      elemento.classList.remove("navbar");
      elemento.classList.add("no_navbar");
    } else {
      elemento.classList.remove("no_navbar");
      elemento.classList.add("navbar");
    }

  });


const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#tel");
const correo = document.querySelector("#email");
const mensaje = document.querySelector("#men");
const formulario = document.querySelector(".formulario")
formulario.addEventListener('submit', validarFormulario);


function validarFormulario(e) {
  e.preventDefault();
  if (nombre.value === "" || telefono.value === "" || mensaje.value === "" || correo.value === "") {
    mostrarError()
    return;
  }

  alert('hemos recibidos su datos, pronto nos pondremos en contacto')
  e.target.submit();

}

 function mostrarError(mensaje) {
   const alerta = document.createElement('p');
   alerta.textContent = mensaje;
   alerta.style.background= "red";
   alerta.style.color="white"

   formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    },5000);
}




























/*const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#tel");
const correo = document.querySelector("#email");
const mensaje = document.querySelector("#men");

const formulario = document.querySelector(".formulario");
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  console.log(e)
  if (nombre.value==="" || telefono.value==="" || correo.value==="" || mensaje.value==="")  {
    alert('Todos los campos son obligatorios')
    return;
  }

  alert('mensaje enviado correctamente')
  window.location.reload();

}*/
