function Enviarformulario(){
    const nombre = document.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const password = document.getElementById("password").value.trim();

    const mensaje = document.getElementById("mensajeResultado");

    //Validar campos vacíos
    if(!nombre || !correo){
        mensaje.classList.add("alert-danger", "d-block");
        mensaje.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Por favor completa todos los campos';
        return;
    }

    if(!correo.includes("@")||!correo.includes(".") ){
        mensaje.classList.add("alert-warning", "d-block");
        mensaje.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Correo no válido';
        return
    }

    mensaje.className = "alert mt-3"

    mensaje.classList.add("alert-success", "d-block");
    mensaje.innerHTML = `<i class="fa-solid fa-circle-check"></i>inicio de sesion exitosa <strong>${nombre}</strong><br>
    ${correo}`;
}



//contador carrito
function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    document.getElementById('contadorCarrito').textContent = carrito.length;
}

// Inicializar carrito si no existe
if (!localStorage.getItem('carrito')) {
    localStorage.setItem('carrito', JSON.stringify([]));
}

// Función de agregar productos al carrito
function agregarAlCarrito(nombreProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({
        nombre: nombreProducto,
        precio: 45990, 
        img: "img/chaqueta_hombre.webp" // imagen del producto
    });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
}

// Mostrar productos en carrito
function renderCarrito() {
    const contenedor = document.getElementById('contenedorCarrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contenedor.innerHTML = '';

    if(carrito.length === 0) {
        contenedor.innerHTML = '<p>Tu carrito está vacío</p>';
        return;
    }

    carrito.forEach((producto, index) => {
        const div = document.createElement('div');
        div.className = 'caja1';
        div.innerHTML = `
            <h3 class="titulo">${producto.nombre}</h3>
            <div class="contenido">
                <img src="${producto.img}" alt="${producto.nombre}">
                <div class="descripcion">
                    <p>Precio: $${producto.precio}</p>
                    <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
                </div>
            </div>
        `;
        contenedor.appendChild(div);
    });
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderCarrito();
    actualizarContador();
}

// Vaciar carrito
document.getElementById('vaciarCarrito').addEventListener('click', () => {
    localStorage.setItem('carrito', JSON.stringify([]));
    renderCarrito();
    actualizarContador();
});

document.getElementById('comprarCarrito').addEventListener('click', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if(carrito.length === 0){
        alert("Tu carrito está vacío");
        return;
    }

    alert("Gracias por tu compra");
    localStorage.setItem('carrito', JSON.stringify([])); // vacía el carrito
    renderCarrito();
    actualizarContador();
});

// Cargar al iniciar
actualizarContador();
renderCarrito();

