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
  {
    title: "Concepto TLATOANI HOOPS",
    content: `
      <p>Este es un posible logo para el Proyecto Deportivo X.</p>
      <p>El diseño busca transmitir energía, inclusión y trabajo en equipo, reflejando los valores fundamentales de nuestro proyecto.</p>
      <p><em>¿Tienes una propuesta de logo? ¡Compártela con nosotros!</em></p>
    `,
    image: "images/logo001.png", // Cambia la ruta si tu logo está en otro lugar
    background: "images/fondo_logo.jpg" // Opcional: fondo especial para esta diapositiva
  },
  {
    title: "Concepto MEXICAS BASKET",
    content: `
      <p>Este es un posible logo para el Proyecto Deportivo X.</p>
      <p>El diseño busca transmitir energía, inclusión y trabajo en equipo, reflejando los valores fundamentales de nuestro proyecto.</p>
      <p><em>¿Tienes una propuesta de logo? ¡Compártela con nosotros!</em></p>
    `,
    image: "images/logo002.png", // Cambia la ruta si tu logo está en otro lugar
    background: "images/fondo_logo.jpg" // Opcional: fondo especial para esta diapositiva
  }
];

console.log("slides:", slides);

function renderNavBar() {
  const navBar = document.getElementById('nav-bar');
  if (!navBar) return;

  const conceptosSlides = slides
    .map((slide, idx) => ({ ...slide, idx }))
    .filter(slide => slide.title && slide.title.toLowerCase().includes('concepto'));

  const normalSlides = slides
    .map((slide, idx) => ({ ...slide, idx }))
    .filter(slide => !(slide.title && slide.title.toLowerCase().includes('concepto')));

  let navHTML = normalSlides.map(slide => `
      <button class="nav-btn" onclick="scrollToSlide(${slide.idx})">
        ${slide.title.replace(/<[^>]*>?/gm, '').slice(0, 18)}
      </button>
    `).join('');

  // Solo agrega el botón Conceptos si hay diapositivas de conceptos
  if (conceptosSlides.length > 0) {
    navHTML += `
      <div class="conceptos-menu">
        <button class="nav-btn" tabindex="0">Conceptos ▼</button>
        <div class="conceptos-submenu">
          ${conceptosSlides.map(slide => `
            <button class="submenu-btn" onclick="scrollToSlide(${slide.idx})">
              ${slide.title.replace(/<[^>]*>?/gm, '').slice(0, 22)}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  navBar.innerHTML = navHTML;

  // Submenu toggle for mobile (debe ir aquí, después de crear el HTML)
  const conceptosMenu = navBar.querySelector('.conceptos-menu > .nav-btn');
  const conceptosSubmenu = navBar.querySelector('.conceptos-submenu');
  if (conceptosMenu && conceptosSubmenu) {
    conceptosMenu.addEventListener('click', (e) => {
      if (window.innerWidth <= 600) {
        e.preventDefault();
        conceptosSubmenu.style.display = conceptosSubmenu.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  }
}

function scrollToSlide(idx) {
  const slide = document.querySelectorAll('.vertical-slide')[idx];
  if (slide) {
    slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

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

document.addEventListener('DOMContentLoaded', () => {
  // Splash screen
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => splash.style.display = 'none', 800);
    }
  }, 3000);

  // Menu toggle for mobile
  const menuToggle = document.getElementById('menu-toggle');
  const navBar = document.getElementById('nav-bar');
  if (menuToggle && navBar) {
    menuToggle.addEventListener('click', () => {
      navBar.classList.toggle('open');
    });
    // Optional: close menu when a button is clicked
    navBar.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-btn')) {
        navBar.classList.remove('open');
      }
    });
  }
});

renderNavBar();
renderVerticalSlides();

