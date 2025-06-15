 HEAD
const slides = [
  {
    title: "Bienvenidos al Proyecto Deportivo",
    content: "Descubre cómo nuestro proyecto fomenta la actividad física y el trabajo en equipo.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Nuestros Objetivos",
    content: "Promover la salud, la inclusión y el desarrollo personal a través del deporte.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "¡Participa!",
    content: "Tu participación es clave para el éxito del proyecto. ¡Sigue avanzando para conocer más!",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  }
];

let currentSlide = 0;

function renderSlide(index) {
  const slide = slides[index];
  const container = document.getElementById('slide-container');
  container.innerHTML = `
    <div class="slide-title">${slide.title}</div>
    <img class="slide-image" src="${slide.image}" alt="Imagen de la diapositiva">
    <div class="slide-content">${slide.content}</div>
    <button class="next-btn" onclick="nextSlide()">
      ${index < slides.length - 1 ? 'Siguiente' : 'Finalizar'}
    </button>
  `;
}

window.nextSlide = function() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    renderSlide(currentSlide);
  } else {
    document.getElementById('slide-container').innerHTML = `
      <div class="slide-title">¡Gracias por tu atención!</div>
      <div class="slide-content">Has completado la presentación del proyecto. ¡Esperamos verte involucrado!</div>
    `;
  }
}

