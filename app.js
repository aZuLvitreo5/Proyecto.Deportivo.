let showingConceptsOnly = false;
let showingConceptMenuOnly = false; // NUEVO

const slides = [
  {
    title: "<p>BIENVENIDOS Proyecto Deportivo X ",
    content: "Descubre cómo nuestro proyecto fomenta la actividad física y el trabajo en equipo.",
    image: "images/Imagen.001.png",
    background: "images/fondo1.png"
  },
  {
    title: "Misión",
    content: "<p>Formar personas y atletas a través del baloncesto, promoviendo el desarrollo físico, mental y emocional en un entorno inclusivo, competitivo y con identidad cultural. En Proyecto Deportivo X impulsamos valores como la disciplina, el trabajo en equipo y el respeto, guiando a nuestros jugadores desde la iniciación deportiva hasta el alto rendimiento.</p>",
    image: "images/Imagen.002.jpg",
    background: "images/fondo2.png"
  },
  {
    title: "Visión",
    content: "<p>Ser una academia de referencia a nivel regional y nacional en la formación integral de jugadores de baloncesto, destacando por su excelencia técnica, sentido comunitario y por honrar la fuerza, el legado y el espíritu competitivo como símbolo de identidad y poder.<p>",
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
    title: "Valores Institucionales",
    content: `
      <p><strong>1. Disciplina:</strong><br>
      La constancia vence al talento.</p>
      <p><strong>2. Trabajo en equipo:</strong><br>
      Ningún jugador gana solo.</p>
      <p><strong>3. Respeto:</strong><br>
      Por el rival, los entrenadores y uno mismo.</p>
      <p><strong>4. Identidad y orgullo cultural:</strong><br>
      Honramos nuestras raíces.</p>
      <p><strong>5. Esfuerzo y superación:</strong><br>
      Siempre mejor que ayer.</p>
      <p><strong>6. Pasión por el baloncesto:</strong><br>
      Jugamos con el corazón.</p>
      <p><strong>7. Inclusión:</strong><br>
      Espacio para todas las edades y géneros.</p>
    `,
    background: "images/fondo4.png"
  },
  {
    title: "Reglamento interno (versión preliminar)",
    content: `
      <p><strong>1. Compromiso:</strong><br>
      - Asistencia puntual obligatoria.<br>
      - 80% mínimo para competir.</p>
      <p><strong>2. Respeto:</strong><br>
      - Prohibido insultar o faltar al respeto.<br>
      - Fomentar el lenguaje positivo.</p>
      <p><strong>3. Presentación personal:</strong><br>
      - Uniforme completo requerido.<br>
      - Sin accesorios distractores.</p>
      <p><strong>4. Uso del espacio:</strong><br>
      - Cuidar instalaciones y equipo utilizado.<br>
      - Recoger material tras entrenar.</p>
      <p><strong>5. Redes sociales:</strong><br>
      - Reflejar valores de la academia.<br>
      - No se toleran publicaciones ofensivas.</p>
    `,
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
      <p>"Mexicas Basket" es una propuesta de nombre para una academia de básquetbol que combina un término indígena mexicano con un concepto moderno y deportivo.</p>
      <p>Mexicas es el Nombre  Náhuatl del pueblo Azteca y hace referencia a una sociedad organizada, guerrera y ancestral. Este titulo de las cultura Mexica/Azteca deja ver  autoridad política, militar y espiritual. </p>
      <p>Dentro de Mexicas se engloban los guerreros Águila y Jaguar y se encuentran combinados en el logo del águila con manchas de jaguar. <p>
      <p>¿Qué transmite “Mexicas Basket”? Liderazgo, grandeza, poder ancestral ideal para una academia que forma no solo jugadores, sino líderes dentro y fuera de la cancha. Mezcla raíces culturales con identidad deportiva contemporánea.</p>
      <p><em>¿Tienes una propuesta de logo? ¡Compártela con nosotros!</em></p>
    `,
    image: "images/logo002.png",
    background: "images/fondo_logo.jpg"
  },
  {
    title: "Sky Hoops",
    isConcept: true,
    content: `
      <p>Sky Hoops significa “Aros en el Cielo”</p>
      <p>Este nombre e identidad buscan un enfoque en el sentido de soñar con volar y alcanzar los aros. Refleja unas alas, estas alas te permiten lograr los objetivos con la fuerza de un corcel.</p>
      <p>Busca ser llamativo para los niños y niñas, para que puedan buscar su identidad propia</p>
      <p>¿Qué transmite?  Sueños, volar, fiereza, liderazgo, trabajo y esfuerzo, el camino hacía el cielo, enfocado en alcanzar objetivos a corto, mediano y largo plazo. </p>
    `,
    image: "images/sky-hoops.png",
    image2: "images/sky-hoops-alt.png", // Nueva imagen opcional
    background: "images/fondo_logo.jpg"
  },
  {
    title: "HillWalkers",
    isConcept: true,
    content: `
      <p>Este nombre e identidad buscan un enfoque en la colina de las Alamedas, donde para llegar a la cancha, se tiene que caminar. </p>
      <p>Busca ser llamativo para los niños y niñas, para que puedan buscar su identidad propia,  HillWalkers significa “Los que caminan colinas”. </p>
      <p>Que transmite?  Fiereza, liderazgo, trabajo y esfuerzo, el camino hacía la cima, enfocado en mejora continúa. </p>
      <p><em>¿Te identificas con este concepto? ¡Cuéntanos tu opinión!</em></p>
    `,
    image: "images/hill-walkers.png",
    image2: "images/hill-walkers-alt.png", // Nueva imagen opcional
    background: "images/fondo_logo.jpg"
  },
  {
  title: "Jaguares Basket",
  isConcept: true,
  content: `
    <p>Jaguares Basket" es una propuesta de nombre para una academia de básquetbol que combina un término indígena de un guerrero mexica con un concepto moderno y deportivo y el alma de un felino.</p>
    <p>Jaguares es el Nombre de un felino y se conjuga con la fiereza de un guerrero azteca/Mexica de gran nobleza militar, hace referencia a una sociedad militar organizada, guerrera y ancestral, deja ver  autoridad política, militar y espiritual. </p>
    <p>Dentro de Mexicas se engloban los guerreros Jaguar y se encuentran combinados en el logo con manchas de jaguar. 
    <p>¿Qué transmite “Jaguares Basket”? Liderazgo, grandeza, poder ancestral. Ideal para una academia que forma no solo jugadores, sino líderes dentro y fuera de la cancha. Mezcla raíces culturales con identidad deportiva contemporánea.</p>
    <p><em>¿Qué te inspira este concepto? ¡Compártelo con nosotros!</em></p>
  `,
  image: "images/jaguares.png",
  image2: "images/jaguares-alt.png", // Nueva imagen opcional
  background: "images/fondo_logo.jpg"
},
  {
    title: "¡Envía tu concepto!",
    isConcept: true,
    content: `
      <p>¿Tienes una idea para el logo o el nombre del proyecto?</p>
      <p><strong>¡Queremos conocer tu propuesta!</strong></p>
      <a href="formulario.html" target="_blank" class="conceptos-btn" style="margin-top:24px;display:inline-block;">Proponer logo</a>
    `,
    image: "images/ideas-concepto.png",
    background: "images/fondo_logo.jpg"
  },
  {
    title: "Vota por el mejor concepto",
    isConcept: true,
    content: `
      <div style="text-align:center;">
        <p>¡Participa votando por tu concepto de logo favorito!</p>
        <a href="votacion.html" target="_blank" class="conceptos-btn" style="margin-top:24px;display:inline-block;">Ir a votación</a>
      </div>
    `,
    image: "images/votacion.png",
    background: "images/fondo_logo.jpg"
  }
];

console.log("slides:", slides);

function renderNavBar() {
  const navBar = document.getElementById('nav-bar');
  if (!navBar) return;

  // Si estamos mostrando solo el menú de conceptos en móvil
  if (showingConceptMenuOnly && window.innerWidth <= 600) {
    // Muestra todos los conceptos y el botón de votación
    let navHTML = `
      <button class="nav-btn conceptos-toggle-btn" style="font-weight:bold;">Conceptos ▲</button>
      ${conceptSlides.slice(0, -1).map((slide, i) => `
        <button class="submenu-btn" onclick="showConceptSlides(${i}); closeConceptMenuMobile();">
          ${slide.title.replace(/<[^>]*>?/gm, '').trim().slice(0, 22)}
        </button>
      `).join('')}
      <button class="submenu-btn" onclick="showConceptSlides(${conceptSlides.length - 1}); closeConceptMenuMobile();">
        Votación
      </button>
    `;
    navBar.innerHTML = navHTML;
    navBar.classList.add('conceptos-anim'); // Aplica la clase antes de renderizar
    setTimeout(() => {
      navBar.classList.add('anim-end');
    }, 700); // Duración de la animación conceptoSube
    // Botón para volver al menú principal
    const conceptosMenu = navBar.querySelector('.conceptos-toggle-btn');
    if (conceptosMenu) {
      conceptosMenu.addEventListener('click', () => {
        showingConceptMenuOnly = false;
        navBar.classList.remove('conceptos-anim');
        navBar.classList.remove('anim-end');
        // Agrega animación al volver al menú normal
        navBar.classList.add('menu-normal-anim');
        renderNavBar();
        if (window.innerWidth <= 600) {
          navBar.classList.add('open');
        }
        // Quita la clase de animación después de que termine
        setTimeout(() => navBar.classList.remove('menu-normal-anim'), 400);
      });
    }
    return;
  } else {
    navBar.classList.remove('conceptos-anim');
  }

  // Menú normal (NO incluyas el submenú si es móvil y está mostrando solo conceptos)
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

  // Solo incluye el submenú en escritorio o si NO está mostrando solo conceptos en móvil
  if (!(window.innerWidth <= 600 && showingConceptMenuOnly)) {
    navHTML += `
      <div class="conceptos-menu">
        <button class="nav-btn conceptos-toggle-btn">Conceptos ▼</button>
        <div class="conceptos-submenu">
          ${conceptSlides.slice(0, -1).map((slide, i) => {
            let cleanTitle = slide.title.replace(/<[^>]*>?/gm, '').trim();
            return `
              <button class="submenu-btn" onclick="showConceptSlides(${i})">
                ${cleanTitle.slice(0, 22)}
              </button>
            `;
          }).join('')}
          <button class="submenu-btn" onclick="showConceptSlides(${conceptSlides.length - 1})">
            Votación
          </button>
        </div>
      </div>
    `;
  }

  navBar.innerHTML = navHTML;

  // Submenu toggle para móvil
  const conceptosMenu = navBar.querySelector('.conceptos-toggle-btn');
  const conceptosMenuDiv = navBar.querySelector('.conceptos-menu');
  const conceptosSubmenu = navBar.querySelector('.conceptos-submenu');
  if (conceptosMenu && conceptosSubmenu && conceptosMenuDiv) {
    conceptosMenu.addEventListener('click', (e) => {
      if (window.innerWidth <= 600) {
        e.preventDefault();
        // Alterna entre menú normal y menú de conceptos
        showingConceptMenuOnly = !showingConceptMenuOnly;
        renderNavBar();
      } else {
        showConceptSlides();
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

    // --- NUEVO: Lógica para mostrar más en textos largos ---
    let content = slide.content;
const maxLength = 420; // Puedes ajustar el límite de caracteres

if (isConcept || slide.title === "Valores Institucionales") {
  // Solo mostrar "Mostrar más" en móviles
  const isMobile = window.innerWidth <= 600;
  // Quita etiquetas HTML para contar solo texto
  const plainText = content.replace(/<[^>]+>/g, '');
  if (plainText.length > maxLength && isMobile) {
    // Solo muestra el botón si hay texto oculto
    let visibleText = plainText.slice(0, maxLength);
    let cutIdx = content.indexOf(visibleText) + visibleText.length;
    let nextPClose = content.indexOf('</p>', cutIdx);
    if (nextPClose !== -1) cutIdx = nextPClose + 4;
    let shortContent = content.slice(0, cutIdx);

    // Verifica si realmente hay texto oculto
    const shortPlain = shortContent.replace(/<[^>]+>/g, '').trim();
    if (shortPlain.length < plainText.trim().length) {
      content = `
        <div class="concept-bg-box">
          <div class="slide-content-short">${shortContent}
            <button class="show-more-btn" data-slide="${idx}">Mostrar más...</button>
          </div>
          <div class="slide-content-full" style="display:none;">
            ${slide.content}
            <button class="show-less-btn" data-slide="${idx}">Mostrar menos</button>
          </div>
        </div>
      `;
    } else {
      content = `<div class="concept-bg-box"><div class="slide-content">${slide.content}</div></div>`;
    }
  } else {
    content = `<div class="concept-bg-box"><div class="slide-content">${slide.content}</div></div>`;
  }
} else {
  content = `<div class="slide-content">${slide.content}</div>`;
}

    let imageHTML = '';
if (slide.image) {
  imageHTML += `<div class="slide-image-box"><img src="${slide.image}" class="slide-image"></div>`;
}
if (slide.image2) {
  imageHTML += `<div class="slide-image-box"><img src="${slide.image2}" class="slide-image"></div>`;
}

    html += `
      <div class="vertical-slide" id="slide-${idx}" ${isConcept ? 'data-concept="true"' : ''}
        style="${slide.background ? `
          background-image: url('${slide.background}');
          background-size: ${bgSize};
          background-repeat: no-repeat;
          background-position: center;
          background-color: transparent;
        ` : 'background: transparent;'}">
        ${imageHTML}
        <div class="slide-title">${slide.title}</div>
        ${content}
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;

  // --- NUEVO: Listeners para mostrar más/menos ---
  document.querySelectorAll('.show-more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = this.getAttribute('data-slide');
      const slide = document.getElementById('slide-' + idx);
      if (slide) {
        slide.querySelector('.slide-content-short').style.display = 'none';
        slide.querySelector('.slide-content-full').style.display = 'block';
      }
    });
  });
  document.querySelectorAll('.show-less-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = this.getAttribute('data-slide');
      const slide = document.getElementById('slide-' + idx);
      if (slide) {
        slide.querySelector('.slide-content-short').style.display = 'block';
        slide.querySelector('.slide-content-full').style.display = 'none';
      }
    });
  });
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

  // --- NUEVO: Guarda el tiempo de inicio ---
  const splashStart = Date.now();

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
    // --- NUEVO: Calcula cuánto falta para 3 segundos ---
    const elapsed = Date.now() - splashStart;
    const minSplash = 3000; // 3 segundos
    const wait = Math.max(0, minSplash - elapsed);

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
            // Muestra el modal SOLO después del splash y carga
            showMobileModal();
          }, 800);
        }, 1800); // Duración del splash del logo
      }, 800);
    }, wait); // Espera lo necesario para completar 3 segundos
  }

  // Mobile experience warning
  function showMobileWarning() {
    const warning = document.getElementById('mobile-experience-warning');
    // El modal de abajo nunca se muestra
    if (warning) warning.style.display = 'none';
  }
  showMobileWarning();
  window.addEventListener('resize', showMobileWarning);

  const hideBtn = document.getElementById('hide-mobile-warning');
  if (hideBtn) {
    hideBtn.addEventListener('click', () => {
      localStorage.setItem('hideMobileWarning', '1');
      document.getElementById('mobile-experience-warning').style.display = 'none';
    });
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
        (!isMobile || (
          e.target.textContent.trim() !== "Conceptos ▼" &&
          e.target.textContent.trim() !== "Conceptos ▲"
        ))
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

  // Mobile experience modal (bloquea navegación)
  function showMobileModal() {
    const modal = document.getElementById('mobile-experience-modal');
    if (
      window.innerWidth <= 600 &&
      modal &&
      !localStorage.getItem('hideMobileModal')
    ) {
      modal.style.display = 'block';
      // Bloquea scroll y navegación
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
      modal.style.pointerEvents = 'auto';
    }
  }

  function hideMobileModal() {
    const modal = document.getElementById('mobile-experience-modal');
    if (modal) modal.style.display = 'none';
    localStorage.setItem('hideMobileModal', '1');
    document.body.style.overflow = '';
    document.body.style.pointerEvents = '';
  }

  document.getElementById('hide-mobile-modal')?.addEventListener('click', hideMobileModal);
  document.getElementById('close-mobile-modal')?.addEventListener('click', () => {
    const modal = document.getElementById('mobile-experience-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.pointerEvents = '';
    // No guardar nada en localStorage
  });
});

function closeConceptMenuMobile() {
  if (window.innerWidth <= 600) {
    showingConceptMenuOnly = false;
    renderNavBar();
    // Asegura que el menú hamburguesa siga abierto
    const navBar = document.getElementById('nav-bar');
    if (navBar) navBar.classList.add('open');
  }
}

// --- Votación de conceptos ---
function renderVotacionConceptos() {
  const cont = document.getElementById('votacion-conceptos');
  if (!cont) return;

  // Solo conceptos con logo
  const conceptos = conceptSlides.slice(0, -2); // Excluye "¡Envía tu concepto!" y "Vota por el mejor concepto"
  cont.innerHTML = `
    <div style="margin-bottom:22px;color:#de0707;font-weight:bold;">
      Los resultados se revelarán al final de la votación
    </div>
    ${conceptos.map((slide, idx) => `
      <div style="margin-bottom:22px;display:flex;align-items:center;gap:16px;justify-content:center;flex-wrap:wrap;">
        <img src="${slide.image}" alt="Logo ${slide.title}" style="width:64px;height:64px;object-fit:contain;background:#fff;border-radius:10px;box-shadow:0 2px 8px #0001;">
        <div style="min-width:120px;">
          <div style="font-weight:bold;font-size:1.08em;margin-bottom:6px;">${slide.title}</div>
          <button class="btn-votar-concepto" data-concepto="${slide.title}" style="
            background:linear-gradient(90deg,#43e97b 0%,#38f9d7 100%);
            color:#23272e;border:none;border-radius:8px;padding:8px 18px;
            font-size:1em;font-weight:600;cursor:pointer;box-shadow:0 2px 8px #43e97b22;
          ">Votar</button>
        </div>
      </div>
    `).join('')}
  `;
  agregarEventosVotacion();
}

// Firebase config (usa el mismo que en tu votacion.html)
const firebaseConfigVotacion = {
  apiKey: "AIzaSyDBwrRgJve6tN7ivUgzQx9Bu2n2_R48szk",
  authDomain: "proyecto-deportivo-x.firebaseapp.com",
  databaseURL: "https://proyecto-deportivo-x-default-rtdb.firebaseio.com",
  projectId: "proyecto-deportivo-x",
  storageBucket: "proyecto-deportivo-x.appspot.com",
  messagingSenderId: "698413793325",
  appId: "1:698413793325:web:cb96dcd3b9f7ca4cbcf8a4"
};

let firebaseAppVotacion, dbVotacion;
function initFirebaseVotacion() {
  if (!window.firebase) {
    const script = document.createElement('script');
    script.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
    script.onload = () => {
      const script2 = document.createElement('script');
      script2.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js";
      script2.onload = () => {
        firebaseAppVotacion = firebase.initializeApp(firebaseConfigVotacion, "votacionApp");
        dbVotacion = firebaseAppVotacion.database();
        cargarVotosConceptos();
      };
      document.body.appendChild(script2);
    };
    document.body.appendChild(script);
  } else {
    if (!firebase.apps.length) {
      firebaseAppVotacion = firebase.initializeApp(firebaseConfigVotacion, "votacionApp");
    } else {
      firebaseAppVotacion = firebase.app("votacionApp");
    }
    dbVotacion = firebaseAppVotacion.database();
    cargarVotosConceptos();
  }
}

function cargarVotosConceptos() {
  // Vacío: ya no se muestran votos
}

function agregarEventosVotacion() {
  document.querySelectorAll('.btn-votar-concepto').forEach(btn => {
    btn.onclick = function() {
      const concepto = this.getAttribute('data-concepto');
      if (localStorage.getItem('votoConcepto')) {
        document.getElementById('votacion-status').textContent = "¡Ya has votado!";
        return;
      }
      if (!window.firebase || !dbVotacion) {
        document.getElementById('votacion-status').textContent = "Cargando sistema de votos...";
        return;
      }
      const votoRef = dbVotacion.ref('votos/' + concepto);
      votoRef.transaction(current => (current || 0) + 1);
      localStorage.setItem('votoConcepto', concepto);
      document.getElementById('votacion-status').textContent = "¡Gracias por tu voto!";
    };
  });
}

// Llama a renderVotacionConceptos cuando se muestre la slide de votación
const observerVotacion = new MutationObserver(() => {
  const votacionDiv = document.getElementById('votacion-conceptos');
  if (votacionDiv && votacionDiv.childElementCount === 0) {
    renderVotacionConceptos();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  observerVotacion.observe(document.body, { childList: true, subtree: true });
});
