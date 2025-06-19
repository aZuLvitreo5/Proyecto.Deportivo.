const slides = [
  {
    title: "<p>BIENVENIDOS Proyecto Deportivo X ",
    content: "Descubre cómo nuestro proyecto fomenta la actividad física y el trabajo en equipo.",
    image: "images/Imagen.001.png",
    background: "images/fondo1.png"
  },
  {
    title: "Nuestros Objetivos",
    content: "Promover la salud, la inclusión y el desarrollo personal a través del deporte.",
    image: "images/Imagen.002.jpg",
    background: "images/fondo2.png"
  },
  {
    title: "¡Participa!",
    content: "<p>Tu participación es clave para el éxito del proyecto.<p>¡Sigue avanzando para conocer más!",
    image: "images/Imagen.003.png",
    background: "images/fondo3.png"
  },
  {
    title: "¿Por qué X?",
    content: "Porque queremos escuchar todas las opiniones, aquí tod@s somos tomad@s en cuenta, queremos establecer contigo los valores, los objetivos y los alcances de este Proyecto, así cómo el nombre del equipo, el color del uniforme y todas esas cosas que van sumando para hacer una gran familia deportiva.",
    image: "images/Imagen.004.png",
    background: "images/fondo4.png"
  },
  {
    title: "Te esperamos",
    content: "Sé el cambio que quieres ver en el mundo",
    image: "images/Imagen.005.png",
    background: "images/fondo5.png"
  },
];

function renderNavBar() {
  const navBar = document.getElementById('nav-bar');
  if (!navBar) return;
  navBar.innerHTML = slides.map((slide, idx) => `
    <button class="nav-btn" onclick="scrollToSlide(${idx})">
      ${slide.title.replace(/<[^>]*>?/gm, '').slice(0, 18)}
    </button>
  `).join('');
}

window.scrollToSlide = function(idx) {
  const slide = document.querySelectorAll('.vertical-slide')[idx];
  if (slide) {
    slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function renderVerticalSlides() {
  const container = document.getElementById('vertical-slider-container');
  if (!container) return;
  let html = '<div class="vertical-slider">';
  slides.forEach((slide, idx) => {
    if (idx > 0) {
      html += `
        <div class="slide-separator">
          <div class="separator-line"></div>
          <div class="separator-circle"></div>
          <div class="separator-line"></div>
        </div>
      `;
    }
    html += `
      <div class="vertical-slide" id="slide-${idx}"
        style="${slide.background ? `
          background-image: url('${slide.background}');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          background-color: transparent;
        ` : 'background: transparent;'}">
        <div class="slide-title">${slide.title}</div>
        <img src="${slide.image}" alt="">
        <div class="slide-content">${slide.content}</div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => splash.style.display = 'none', 800);
    }
  }, 3000);
});

renderNavBar();
renderVerticalSlides();

