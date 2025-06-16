const slides = [
  {
    title: "<p>BIENVENIDOS</p>Proyecto Deportivo X ",
    content: "Descubre cómo nuestro proyecto fomenta la actividad física y el trabajo en equipo.",
    image: "images/Imagen.001.png" // Usa la ruta relativa a la carpeta images
  },
  {
    title: "Nuestros Objetivos",
    content: "Promover la salud, la inclusión y el desarrollo personal a través del deporte.",
    image: "images/Imagen.002.jpg"
  },
  {
    title: "¡Participa!",
    content: "<p>Tu participación es clave para el éxito del proyecto.<p>¡Sigue avanzando para conocer más!",
    image: "images/Imagen.003.png" // Usa la ruta relativa a la carpeta images
  },
  {
    title: '¿Por qué "X"?',
    content: "Porque queremos escuchar todas las opiniones, aquí tod@s somos tomad@s en cuenta, queremos establecer contigo los valores, los objetivos y los alcances de este Proyecto, así cómo el nombre del equipo, el color del uniforme y todas esas cosas que van sumando para hacer una gran familia deportiva.",
    image: "images/Imagen.004.png"
  },
];

let currentSlide = 0;

function renderSlide(index) {
  const slide = slides[index];
  const container = document.getElementById('slide-container');
  let buttons = `
    <button class="prev-btn" onclick="prevSlide()" ${index === 0 ? 'disabled' : ''}>Anterior</button>
    <button class="next-btn" onclick="nextSlide()">
      ${index < slides.length - 1 ? 'Siguiente' : 'Finalizar'}
    </button>
  `;

  // Si es la última diapositiva, agrega el botón para volver al inicio
  if (index === slides.length - 1) {
    buttons += `
      <button class="restart-btn" onclick="restartSlides()">Volver al inicio</button>
    `;
  }

  container.innerHTML = `
    <div class="slide-title">${slide.title}</div>
    <img class="slide-image" src="${slide.image}" alt="${slide.title}">
    <div class="slide-content">${slide.content}</div>
    <div>${buttons}</div>
  `;
}

// Agrega la función para reiniciar las diapositivas
window.restartSlides = function() {
  currentSlide = 0;
  renderSlide(currentSlide);
};

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

window.prevSlide = function() {
  if (currentSlide > 0) {
    currentSlide--;
    renderSlide(currentSlide);
  }
};

// Agrega esta línea para mostrar la primera diapositiva al cargar
renderSlide(currentSlide);

