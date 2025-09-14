function Enviarformulario(){
    const nombre = document.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const password = document.getElementById("password").value.trim();

    const mensaje = document.getElementById("mensajeResultado");

    mensaje.className = "alert mt-3"

    mensaje.classList.add("alert-success", "d-block");
    mensaje.innerHTML = `<i class="fa-solid fa-circle-check"></i>Gracias por enviar el mensaje <strong>${nombre}</strong><br>
    Te llamamos pronto ${correo}`;
}