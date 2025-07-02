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
  // Las siguientes slides ya NO llevan la palabra "Concepto" en el título,
  // pero agregamos una propiedad extra para que sigan apareciendo en el submenú Conceptos
  {
    title: "Tlatoani Hoops",
    isConcept: true,
    content: `
      <p>Este es un posible logo para el Proyecto Deportivo X.</p>
      <p>"Tlatoani Hoops" es una propuesta de nombre para una academia de básquetbol que combina un término indígena mexicano con un concepto moderno y deportivo.</p>

</p>Tlatoani proviene del Náhuatl y significa “el que habla” o “el que manda”, era el título de los gobernantes o reyes en las culturas Mexicas/Aztecas, tenía autoridad política, militar y espiritual.</p>
</p>Era el líder máximo.</p>

🏀 ¿Por qué usar “Hoops”?
Hoops = “aros” en inglés, una forma coloquial de referirse al básquetbol.

Es moderno, se usa en branding de academias, torneos y marcas de ropa deportiva.

</p>¿Qué transmite "Tlatoani Hoops"?</p>
Liderazgo, grandeza, poder ancestral.

Ideal para una academia que forma no solo jugadores, sino líderes dentro y fuera de la cancha.

Mezcla raíces culturales con identidad deportiva contemporánea.
</p>
      <p><em>¿Tienes una propuesta de logo? ¡Compártela con nosotros!</em></p>
    `,
    image: "images/logo001.png",
    background: "images/fondo_logo.jpg"
  },
  {
    title: "Mexicas Basket",
    isConcept: true,
    content: `
      <p>Este es un posible logo para el Proyecto Deportivo X.</p>
      <p>Liderazgo ancestral, fuerza en la cancha.</p>
      <p>Este logo proyecta una imagen de orgullo nacional, ferocidad competitiva y raíces culturales profundas.</p>
      <p><em>¿Tienes una propuesta de logo? ¡Compártela con nosotros!</em></p>
    `,
    image: "images/logo002.png",
    background: "images/fondo_logo.jpg"
  },
  {
    title: "Sky Hoops",
    isConcept: true,
    content: `
      <p>¡Presentamos el concepto <strong>Sky Hoops</strong>!</p>
      <p>Un nombre que evoca altura, sueños y el deseo de alcanzar lo más alto en el deporte y en la vida.</p>
      <p><em>¿Qué opinas de este concepto? ¡Tus ideas son bienvenidas!</em></p>
    `,
    image: "images/sky-hoops.png",
    background: "images/fondo_logo.jpg"
  }
];

console.log("slides:", slides);

function renderNavBar() {
  const navBar = document.getElementById('nav-bar');
  if (!navBar) return;

  // Ahora usamos la propiedad isConcept para el submenú
  const conceptosSlides = slides
    .map((slide, idx) => ({ ...slide, idx }))
    .filter(slide => slide.isConcept);

  const normalSlides = slides
    .map((slide, idx) => ({ ...slide, idx }))
    .filter(slide => !slide.isConcept);

  let navHTML = normalSlides.map(slide => {
    // Si el título contiene "bienvenidos", solo muestra "Bienvenidos"
    let btnText = /bienvenidos/i.test(slide.title)
      ? "Bienvenidos"
      : slide.title.replace(/<[^>]*>?/gm, '').slice(0, 18);
    return `
      <button class="nav-btn" onclick="scrollToSlide(${slide.idx})">
        ${btnText}
      </button>
    `;
  }).join('');

  // Solo agrega el botón Conceptos si hay diapositivas de conceptos
  if (conceptosSlides.length > 0) {
    navHTML += `
      <div class="conceptos-menu">
        <button class="nav-btn" tabindex="0">Conceptos ▼</button>
        <div class="conceptos-submenu">
          ${conceptosSlides.map(slide => {
            // Solo muestra el título limpio
            let cleanTitle = slide.title.replace(/<[^>]*>?/gm, '').trim();
            return `
              <button class="submenu-btn" onclick="scrollToSlide(${slide.idx})">
                ${cleanTitle.slice(0, 22)}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  navBar.innerHTML = navHTML;

  // Submenu toggle for mobile (debe ir aquí, después de crear el HTML)
  const conceptosMenu = navBar.querySelector('.conceptos-menu > .nav-btn');
  const conceptosMenuDiv = navBar.querySelector('.conceptos-menu');
  const conceptosSubmenu = navBar.querySelector('.conceptos-submenu');
  if (conceptosMenu && conceptosSubmenu && conceptosMenuDiv) {
    conceptosMenu.addEventListener('click', (e) => {
      if (window.innerWidth <= 600) {
        e.preventDefault();
        conceptosMenuDiv.classList.toggle('open');
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
      // Si el menú se cierra, cierra también los submenús
      if (!navBar.classList.contains('open')) {
        document.querySelectorAll('.conceptos-menu.open').forEach(menu => {
          menu.classList.remove('open');
        });
      }
    });
    // Cierra menú y submenús al hacer clic en cualquier botón
    navBar.addEventListener('click', (e) => {
      // Detecta si es móvil/tablet
      const isMobile = window.innerWidth <= 1024;
      // Si es botón del submenú, cierra el menú (comportamiento normal)
      if (e.target.classList.contains('submenu-btn')) {
        navBar.classList.remove('open');
        document.querySelectorAll('.conceptos-menu.open').forEach(menu => {
          menu.classList.remove('open');
        });
        if (document.activeElement) document.activeElement.blur();
      }
      // Si es botón principal del menú (pero NO el de conceptos en móvil), cierra el menú
      else if (
        e.target.classList.contains('nav-btn') &&
        (!isMobile || e.target.textContent.trim() !== "Conceptos ▼")
      ) {
        navBar.classList.remove('open');
        document.querySelectorAll('.conceptos-menu.open').forEach(menu => {
          menu.classList.remove('open');
        });
        if (document.activeElement) document.activeElement.blur();
      }
    });
  }

  // Renderiza el menú y los slides
  renderNavBar();
  renderVerticalSlides();

  
  // Sticky nav-bar al hacer scroll
  const header = document.querySelector('.header');
  const navHoverArea = document.querySelector('.nav-hover-area');
  function updateNavBarPosition() {
    const headerHeight = header.offsetHeight;
    const hoverAreaHeight = 48; // Debe coincidir con el height de .nav-hover-area
    if (window.scrollY >= headerHeight) {
      navBar.style.position = 'fixed';
      navBar.style.top = hoverAreaHeight + 'px';
      if (navHoverArea) {
        navHoverArea.style.position = 'fixed';
        navHoverArea.style.top = '0';
      }
    } else {
      navBar.style.position = 'absolute';
      navBar.style.top = (headerHeight + hoverAreaHeight) + 'px';
      if (navHoverArea) {
        navHoverArea.style.position = 'absolute';
        navHoverArea.style.top = headerHeight + 'px';
      }
    }
  }
  window.addEventListener('scroll', updateNavBarPosition);
  window.addEventListener('resize', updateNavBarPosition);
  updateNavBarPosition();
});

