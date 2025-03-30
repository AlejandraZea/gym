document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const mensajeEnviado = document.getElementById("mensaje-enviado");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue

        // Mostrar el mensaje de enviado
        mensajeEnviado.style.display = "block";

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            mensajeEnviado.style.display = "none";
            form.reset(); // Limpia los campos del formulario
        }, 3000);
    });
});
