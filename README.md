const houses = [
  {
    name: 'Gryffindor',
    accent: '#b11d1d',
    icon: '🦁',
    trait: 'Valor, coraje y amor que desafía cualquier temor.'
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

const moments = [
  {
    mood: 'Feliz',
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

const housesGrid = document.getElementById('housesGrid');
const momentsGrid = document.getElementById('momentsGrid');
const sortButton = document.getElementById('sortButton');
const revealHouse = document.getElementById('revealHouse');
const sortingHat = document.getElementById('sortingHat');
const hatResult = document.getElementById('hatResult');

const renderHouses = () => {
  housesGrid.innerHTML = houses
    .map(
      (house) => `
        <article class="house-card" style="--house-accent: ${house.accent};">
          <div class="house-icon">${house.icon}</div>
          <h3>${house.name}</h3>
          <p>${house.trait}</p>
        </article>
      `
    )
    .join('');
};

const renderMoments = () => {
  momentsGrid.innerHTML = moments
    .map(
      (moment) => `
        <article class="moment-card">
          <span class="mood">${moment.mood}</span>
          <h3>${moment.title}</h3>
          <p>${moment.text}</p>
        </article>
      `
    )
    .join('');
};

const pickHouse = () => {
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  hatResult.textContent = `¡${randomHouse.name}! Te pertenece la casa del amor más mágico.`;
  sortingHat.classList.add('visible');
};

sortButton.addEventListener('click', pickHouse);
revealHouse.addEventListener('click', () => sortingHat.classList.remove('visible'));
sortingHat.addEventListener('click', (event) => {
  if (event.target === sortingHat) {
    sortingHat.classList.remove('visible');
  }
});

renderHouses();
renderMoments();
