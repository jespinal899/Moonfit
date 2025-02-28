

function toggleMenu() {
    document.getElementById("menuBar").classList.toggle("active");
}

const imagenes = ["imagenes/set1.png", "imagenes/set2.png", "imagenes/set3.png"];
let indice = 0;

function cambiarImagen(direccion) {
    indice += direccion;
    if (indice < 0) indice = imagenes.length - 1;
    if (indice >= imagenes.length) indice = 0;
    document.getElementById("productoImagen").src = imagenes[indice];
}
