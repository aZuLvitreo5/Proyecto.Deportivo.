let showingConceptsOnly = false;

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
    content: `Sé el cambio que quieres ver en el mundo
    <br><br>
    <button class="conceptos-btn" onclick="showConceptSlides()">Mira nuestros conceptos de logo</button>
  `,
    image: "images/Imagen.005.png",
    background: "images/fondo5.png"
  },
];

// Slides de conceptos (solo aquí)
const conceptSlides = [
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
  },
  {
    title: "¡Envía tu concepto!",
    isConcept: true,
    content: `
      <p>¿Tienes una idea para el logo o el nombre del proyecto?</p>
      <p><strong>¡Queremos conocer tu propuesta!</strong></p>
      <p>Muy pronto podrás enviarnos tu concepto y ser parte de la identidad de este proyecto deportivo.</p>
      <p>¡Mantente pendiente!</p>
    `,
    image: "images/ideas-concepto.png", // Puedes cambiar la imagen o dejarla vacía si prefieres
    background: "images/fondo_logo.jpg"
  }
];

console.log("slides:", slides);

function renderNavBar() {
  const navBar = document.getElementById('nav-bar');
  if (!navBar) return;

  let navHTML = slides.map((slide, idx) => {
    let btnText = /bienvenidos/i.test(slide.title)
      ? "Bienvenidos"
      : slide.title.replace(/<[^>]*>?/gm, '').slice(0, 18);
    return `
      <button class="nav-btn" onclick="showMainSlides(); scrollToSlide(${idx})">
        ${btnText}
      </button>
    `;
  }).join('');

  // Botón conceptos y submenú
  navHTML += `
    <div class="conceptos-menu">
      <button class="nav-btn" onclick="showConceptSlides()">Conceptos ▼</button>
      <div class="conceptos-submenu">
        ${conceptSlides.map((slide, i) => {
          let cleanTitle = slide.title.replace(/<[^>]*>?/gm, '').trim();
          return `
            <button class="submenu-btn" onclick="showConceptSlides(${i})">
              ${cleanTitle.slice(0, 22)}
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;

  navBar.innerHTML = navHTML;

  // Submenu toggle para móvil
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

// Renderiza slides principales o de conceptos
function renderVerticalSlides() {
  const container = document.getElementById('vertical-slider-container');
  if (!container) return;
  let html = '<div class="vertical-slider">';
  const slidesToShow = showingConceptsOnly ? conceptSlides : slides;
  slidesToShow.forEach((slide, idx) => {
    const isConcept = slide.isConcept;
    const bgSize = isConcept ? 'cover' : 'contain';
    html += `
      <div class="vertical-slide" id="slide-${idx}" ${isConcept ? 'data-concept="true"' : ''}
        style="${slide.background ? `
          background-image: url('${slide.background}');
          background-size: ${bgSize};
          background-repeat: no-repeat;
          background-position: center;
          background-color: transparent;
        ` : 'background: transparent;'}">
        <img src="${slide.image}" alt="">
        <div class="slide-title">${slide.title}</div>
        <div class="slide-content">${slide.content}</div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

// Mostrar solo conceptos
function showConceptSlides(idx) {
  showingConceptsOnly = true;
  renderVerticalSlides();
  setTimeout(() => {
    const conceptSlidesEls = document.querySelectorAll('.vertical-slide[data-concept="true"]');
    // Si hay índice, ve a ese concepto; si no, ve al primero
    const targetIdx = (typeof idx === 'number') ? idx : 0;
    if (conceptSlidesEls[targetIdx]) {
      conceptSlidesEls[targetIdx].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
}

// Mostrar solo slides principales
function showMainSlides() {
  showingConceptsOnly = false;
  renderVerticalSlides();
}

// Scroll a slide principal
function scrollToSlide(idx) {
  if (showingConceptsOnly) return; // Solo permite scroll en modo principal
  const slide = document.querySelectorAll('.vertical-slide')[idx];
  if (slide) {
    slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const splashLogo = document.getElementById('splash-logo');
  const splashBalon = document.getElementById('splash-balon');
  const appElements = [
    document.querySelector('.header'),
    document.querySelector('.nav-hover-area'),
    document.getElementById('nav-bar'),
    document.getElementById('vertical-slider-container'),
    document.getElementById('menu-toggle')
  ];

  // Oculta la app mientras está el splash
  appElements.forEach(el => { if (el) el.style.visibility = 'hidden'; });

  // Muestra splash balón y oculta splash logo
  splashBalon.style.display = 'flex';
  splashBalon.style.opacity = '1';
  splashLogo.style.display = 'none';

  // Renderiza el contenido ANTES de buscar imágenes
  renderNavBar();
  renderVerticalSlides();

  // Ahora sí, busca las imágenes de las slides
  const slideImages = Array.from(document.querySelectorAll('.vertical-slide img'));
  let loaded = 0;
  const total = slideImages.length;

  if (total === 0) finishLoading();
  else {
    slideImages.forEach(img => {
      if (img.complete) {
        loaded++;
        if (loaded === total) finishLoading();
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === total) finishLoading();
        });
        img.addEventListener('error', () => {
          loaded++;
          if (loaded === total) finishLoading();
        });
      }
    });
  }

  function finishLoading() {
    // Espera un pequeño tiempo extra para UX (opcional)
    setTimeout(() => {
      splashBalon.style.opacity = '0';
      setTimeout(() => {
        splashBalon.style.display = 'none';
        // Ahora splash logo
        splashLogo.style.display = 'flex';
        splashLogo.style.opacity = '1';
        setTimeout(() => {
          splashLogo.style.opacity = '0';
          setTimeout(() => {
            splashLogo.style.display = 'none';
            // Ahora sí, muestra la app
            appElements.forEach(el => { if (el) el.style.visibility = 'visible'; });
          }, 800);
        }, 1800); // Duración del splash del logo
      }, 800);
    }, 400); // Espera extra opcional tras cargar todo
  }

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

