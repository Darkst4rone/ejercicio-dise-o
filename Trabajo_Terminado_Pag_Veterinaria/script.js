// Función para ocultar el loader cuando la página haya cargado completamente
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    // Elimina el loader del DOM después de que la transición se complete
    loader.addEventListener("transitionend", function() {
        loader.remove();
    });
});
