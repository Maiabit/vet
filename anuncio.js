window.onload = function () {
    const anuncio = document.getElementById("anuncio");
    const fondo = document.getElementById("fondoAnuncio");
    const cerrar = document.getElementById("cerrarAnuncio");

    anuncio.style.display = "block";
    fondo.style.display = "block";

    cerrar.addEventListener("click", function () {
        anuncio.style.display = "none";
        fondo.style.display = "none";
    });
};
