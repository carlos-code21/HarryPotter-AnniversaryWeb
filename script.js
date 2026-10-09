// Datos de las casas de Hogwarts
const houses = [
  {
    name: 'Gryffindor',
    accent: '#b11d1d',
    icon: '🦁',
    trait: 'Valor, coraje y un amor que desafía cualquier temor.'
  },
  {
    name: 'Hufflepuff',
    accent: '#d6a214',
    icon: '🦡',
    trait: 'Lealtad, paciencia y un corazón enorme.'
  },
  {
    name: 'Ravenclaw',
    accent: '#173d7a',
    icon: '🦅',
    trait: 'Inteligencia, creatividad y curiosidad infinita.'
  },
  {
    name: 'Slytherin',
    accent: '#1d5a3d',
    icon: '🐍',
    trait: 'Determinación, ambición y una magia irresistible.'
  }
];

// Datos del viaje temporal
const journeyEvents = [
  {
    year: '2023',
    title: 'El Comienzo',
    description: 'Cuando nuestros caminos se cruzaron y la magia comenzó.'
  },
  {
    year: '2024',
    title: 'Nuestro Vuelo',
    description: 'Aprendimos a volar juntos, superando cada obstáculo.'
  },
  {
    year: '2025',
    title: 'La Eternidad',
    description: 'Cada día confirmó que eres mi elección, siempre.'
  }
];

// Momentos mágicos
const moments = [
  {
    mood: 'Felicidad',
    title: 'Tu sonrisa',
    text: 'Toda la magia del mundo parece resumirse en esa sonrisa que ilumina todo lo que me rodea.'
  },
  {
    mood: 'Cercanía',
    title: 'Tus abrazos',
    text: 'La forma más segura de sentir que el mundo deja de ser tan grande y se vuelve nuestro.'
  },
  {
    mood: 'Sueños',
    title: 'Nuestro futuro',
    text: 'Cada día me enamora más la idea de crear recuerdos, viajes y sueños a tu lado.'
  }
];

// Galería de imágenes (emojis temáticos)
const galleryItems = [
  { emoji: '📖', title: 'Capítulo 1', description: 'La historia comienza' },
  { emoji: '🌙', title: 'Noches mágicas', description: 'Bajo las estrellas' },
  { emoji: '💫', title: 'Hechizos', description: 'Momentos de pura magia' },
  { emoji: '🦉', title: 'Mensajeros', description: 'Tus palabras me llegan siempre' },
  { emoji: '🧪', title: 'Pociones', description: 'Tu amor es mi mejor poción' },
  { emoji: '🪄', title: 'Varitas', description: 'Juntos creamos magia' }
];

// Frases románticas
const quotes = [
  {
    text: 'En un mundo lleno de magia, tú eres mi hechizo favorito.',
    author: 'Tu amor'
  },
  {
    text: 'Eres el Patronus que protege mi alma.',
    author: 'Tu corazón'
  },
  {
    text: 'Con tigo, hasta lo ordinario es extraordinario.',
    author: 'Mi eternidad'
  }
];

// Elementos del DOM
const housesGrid = document.getElementById('housesGrid');
const momentsGrid = document.getElementById('momentsGrid');
const journeyTimeline = document.getElementById('journeyTimeline');
const galleryGrid = document.getElementById('galleryGrid');
const quotesContainer = document.getElementById('quotesContainer');
const sortButton = document.getElementById('sortButton');
const revealHouse = document.getElementById('revealHouse');
const sortingHat = document.getElementById('sortingHat');
const hatResult = document.getElementById('hatResult');
const hatMessage = document.getElementById('hatMessage');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const scrollProgress = document.getElementById('scrollProgress');
const letterDate = document.getElementById('letterDate');

// Renderizar casas de Hogwarts
const renderHouses = () => {
  housesGrid.innerHTML = houses
    .map((house) => `
      <article class="house-card" style="--house-accent: ${house.accent};">
        <div class="house-icon">${house.icon}</div>
        <h3>${house.name}</h3>
        <p>${house.trait}</p>
      </article>
    `)
    .join('');
};

// Renderizar viaje temporal
const renderJourney = () => {
  journeyTimeline.innerHTML = journeyEvents
    .map((event, index) => `
      <div class="journey-item">
        <div class="journey-marker">${index + 1}</div>
        <div class="journey-content">
          <h3>${event.year}</h3>
          <h4>${event.title}</h4>
          <p>${event.description}</p>
        </div>
      </div>
    `)
    .join('');
};

// Renderizar momentos
const renderMoments = () => {
  momentsGrid.innerHTML = moments
    .map((moment) => `
      <article class="moment-card">
        <span class="mood">${moment.mood}</span>
        <h3>${moment.title}</h3>
        <p>${moment.text}</p>
      </article>
    `)
    .join('');
};

// Renderizar galería
const renderGallery = () => {
  galleryGrid.innerHTML = galleryItems
    .map((item) => `
      <div class="gallery-item">
        <div class="gallery-emoji">${item.emoji}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `)
    .join('');
};

// Renderizar frases
const renderQuotes = () => {
  quotesContainer.innerHTML = quotes
    .map((quote) => `
      <div class="quote-card">
        <p class="quote-text">"${quote.text}"</p>
        <p class="quote-author">— ${quote.author}</p>
      </div>
    `)
    .join('');
};

// Función del sombrero seleccionador
const pickHouse = () => {
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  hatResult.textContent = `¡${randomHouse.name}!`;
  hatMessage.textContent = `Te pertenece la casa del ${randomHouse.name.toLowerCase()}. ${randomHouse.trait}`;
  sortingHat.classList.add('visible');
};

// Cerrar modal del sombrero
const closeHat = () => {
  sortingHat.classList.remove('visible');
};

// Cambiar música
const toggleMusic = () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.classList.add('playing');
  } else {
    bgMusic.pause();
    musicToggle.classList.remove('playing');
  }
};

// Scroll progress
const updateScrollProgress = () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
};

// Animar elementos al hacer scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-animation');
    }
  });
}, observerOptions);

// Observar todas las tarjetas
document.querySelectorAll('.story-box, .house-card, .moment-card, .gallery-item').forEach((el) => {
  observer.observe(el);
});

// Establecer fecha en la carta
const setLetterDate = () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  letterDate.textContent = today.toLocaleDateString('es-ES', options);
};

// Event listeners
sortButton.addEventListener('click', pickHouse);
revealHouse.addEventListener('click', closeHat);
musicToggle.addEventListener('click', toggleMusic);
sortingHat.addEventListener('click', (event) => {
  if (event.target === sortingHat) {
    closeHat();
  }
});
window.addEventListener('scroll', updateScrollProgress);

// Inicializar
renderHouses();
renderJourney();
renderMoments();
renderGallery();
renderQuotes();
setLetterDate();

// CSS para animaciones de scroll (inyectadas)
const style = document.createElement('style');
style.textContent = `
  .story-box, .house-card, .moment-card, .gallery-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .story-box.visible-animation, 
  .house-card.visible-animation, 
  .moment-card.visible-animation, 
  .gallery-item.visible-animation {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #f7d185, #c08d2f);
    width: 0%;
    z-index: 999;
    transition: width 0.1s ease;
    box-shadow: 0 0 10px rgba(247, 209, 133, 0.5);
  }

  .music-toggle {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
    background: rgba(18, 21, 36, 0.95);
    border: 1px solid rgba(247, 209, 133, 0.3);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .music-toggle:hover {
    background: rgba(247, 209, 133, 0.1);
    border-color: rgba(247, 209, 133, 0.6);
    transform: scale(1.1);
  }

  .music-toggle.playing {
    animation: pulse 1s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 4px 15px rgba(247, 209, 133, 0.3); }
    50% { box-shadow: 0 4px 25px rgba(247, 209, 133, 0.6); }
  }

  .journey-item {
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
    opacity: 0;
    animation: slideIn 0.8s ease forwards;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .journey-item:nth-child(1) { animation-delay: 0.1s; }
  .journey-item:nth-child(2) { animation-delay: 0.2s; }
  .journey-item:nth-child(3) { animation-delay: 0.3s; }

  .journey-marker {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f7d185, #c08d2f);
    border-radius: 50%;
    color: #1a1205;
    font-weight: 700;
    font-size: 1.3rem;
    box-shadow: 0 4px 15px rgba(247, 209, 133, 0.3);
  }

  .journey-content {
    flex: 1;
  }

  .journey-content h3 {
    font-size: 1.3rem;
    color: #f7d185;
    margin: 0 0 5px;
  }

  .journey-content h4 {
    font-size: 1.6rem;
    color: #f5f1e7;
    margin: 0 0 10px;
    font-family: "Cormorant Garamond", serif;
  }

  .journey-content p {
    color: #d7d0bf;
    margin: 0;
    line-height: 1.6;
  }

  .gallery-item {
    text-align: center;
    padding: 30px 20px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.01);
    transition: all 0.3s ease;
  }

  .gallery-item:hover {
    background: rgba(247, 209, 133, 0.05);
    border-color: rgba(247, 209, 133, 0.3);
    transform: translateY(-5px);
  }

  .gallery-emoji {
    font-size: 3rem;
    margin-bottom: 15px;
    display: inline-block;
  }

  .gallery-item h3 {
    color: #f7d185;
    font-size: 1.3rem;
    margin: 0 0 8px;
  }

  .gallery-item p {
    color: #d7d0bf;
    margin: 0;
    font-size: 0.9rem;
  }

  .quote-card {
    text-align: center;
    padding: 40px 30px;
    border-left: 3px solid #f7d185;
    background: rgba(247, 209, 133, 0.05);
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .quote-text {
    font-size: 1.3rem;
    color: #f5f1e7;
    font-style: italic;
    margin: 0 0 15px;
    line-height: 1.8;
  }

  .quote-author {
    color: #f7d185;
    font-weight: 700;
    margin: 0;
  }

  .story-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(247, 209, 133, 0.15);
    border: 2px solid rgba(247, 209, 133, 0.4);
    color: #f7d185;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .story-emoji {
    font-size: 2.5rem;
    margin-top: 15px;
    display: inline-block;
  }

  .card-shine {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

  .floating-spell {
    position: fixed;
    width: 4px;
    height: 4px;
    background: rgba(247, 209, 133, 0.6);
    border-radius: 50%;
    pointer-events: none;
    animation: float-around 20s infinite ease-in-out;
  }

  @keyframes float-around {
    0%, 100% { transform: translate(0, 0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translate(100px, -100px); opacity: 0; }
  }

  .floating-spell:nth-child(2) {
    left: 20%;
    top: 30%;
    animation-delay: var(--delay);
  }

  .floating-spell:nth-child(3) {
    left: 80%;
    top: 60%;
    animation-delay: var(--delay);
  }

  .floating-spell:nth-child(4) {
    left: 50%;
    top: 10%;
    animation-delay: var(--delay);
  }

  .hat-animation {
    font-size: 4rem;
    animation: bounce 0.8s ease infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .letter-seal {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 70px;
    height: 70px;
    background: radial-gradient(circle, #c08d2f, #8b6914);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    box-shadow: 0 4px 15px rgba(192, 141, 47, 0.4);
    animation: sealWax 0.6s ease;
  }

  @keyframes sealWax {
    from {
      transform: scale(0) rotate(0deg);
    }
    to {
      transform: scale(1) rotate(-15deg);
    }
  }

  .letter-section {
    padding-bottom: 120px !important;
  }

  .letter-container {
    perspective: 1000px;
  }

  .letter-card.premium {
    position: relative;
    background: linear-gradient(135deg, rgba(30, 30, 50, 0.95), rgba(50, 40, 70, 0.95));
    border: 2px solid rgba(247, 209, 133, 0.2);
    max-width: 700px;
    margin: 0 auto;
  }

  .letter-header {
    border-bottom: 2px dashed rgba(247, 209, 133, 0.3);
    padding-bottom: 20px;
    margin-bottom: 30px;
  }

  .header-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 0.95rem;
  }

  .from, .to, .date {
    color: #f7d185;
  }

  .letter-content p {
    text-align: justify;
    margin-bottom: 20px;
  }

  .greeting {
    font-weight: 700;
    font-size: 1.1rem;
    color: #f5f1e7 !important;
  }

  .closing {
    margin-top: 30px;
    font-weight: 600;
    color: #f5f1e7 !important;
  }

  .letter-footer {
    margin-top: 25px;
    padding-top: 15px;
    border-top: 1px dashed rgba(247, 209, 133, 0.2);
    font-style: italic;
    color: #d7d0bf !important;
    font-size: 0.9rem;
  }

  .letter-footer p {
    margin: 0 !important;
  }

  .story-box {
    position: relative;
    padding-bottom: 40px;
  }

  .music-icon {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .music-toggle:hover .music-icon {
    transform: scale(1.2);
  }
`;

document.head.appendChild(style);

console.log('🪄 Magia activada. ¡Bienvenido a nuestro mundo mágico!');
