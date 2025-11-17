
// Abrir ventana
document.getElementById("btnResenas").addEventListener("click", () => {
    document.getElementById("ventanaResenas").style.display = "block";
});

// Cerrar ventana
document.getElementById("cerrarVentana").addEventListener("click", () => {
    document.getElementById("ventanaResenas").style.display = "none";
});

// Estrellas
const stars = document.querySelectorAll("#estrellas i");
let puntuacion = 0;

stars.forEach(star => {
    star.addEventListener("mouseenter", () => {
        resetStars();
        highlightStars(star.dataset.value);
    });

    star.addEventListener("click", () => {
        puntuacion = star.dataset.value;
    });
});

function highlightStars(limit) {
    stars.forEach(s => {
        if (s.dataset.value <= limit) {
            s.classList.remove("bi-star");
            s.classList.add("bi-star-fill");
        }
    });
}

function resetStars() {
    stars.forEach(s => {
        s.classList.remove("bi-star-fill");
        s.classList.add("bi-star");
    });
}

// Enviar reseña
document.getElementById("enviarResena").addEventListener("click", () => {

    // Validación de la puntuación
    if (puntuacion === 0) {
        alert("Selecciona una puntuación.");
        return;
    }

    // Captura de los 10 campos
    const resena = {
        pregunta1: puntuacion,
        pregunta2: document.getElementById("gusto").value.trim(),
        pregunta3: document.getElementById("mejora").value.trim(),
        pregunta4: document.getElementById("encontrado").value,
        pregunta5: document.getElementById("navegacion").value,
        pregunta6: document.getElementById("informacion").value,
        pregunta7: document.getElementById("diseno").value,
        pregunta8: document.getElementById("molestia").value.trim(),
        pregunta9: document.getElementById("recomendar").value,
        pregunta10: document.getElementById("comentarioFinal").value.trim()
    };

    // Validación del comentario final
    if (resena.pregunta10 === "") {
        alert("Escribe un comentario final.");
        return;
    }

    // (OPCIONAL) Mostrar datos en consola
    console.log("Reseña enviada:", resena);

    alert("¡Gracias por tu reseña! 🌟");

    // Limpieza de campos
    resetStars();
    puntuacion = 0;

    document.getElementById("gusto").value = "";
    document.getElementById("mejora").value = "";
    document.getElementById("encontrado").value = "";
    document.getElementById("navegacion").value = "";
    document.getElementById("informacion").value = "";
    document.getElementById("diseno").value = "";
    document.getElementById("molestia").value = "";
    document.getElementById("recomendar").value = "";
    document.getElementById("comentarioFinal").value = "";

    // Cerrar ventana
    document.getElementById("ventanaResenas").style.display = "none";
    
});
