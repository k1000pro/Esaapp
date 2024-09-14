// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
const animarQuienesSomos = document.querySelectorAll('.quienes-somos');
const animarMisionVision = document.querySelectorAll('.mision-vision');
const seccionObjetivo = document.querySelector('.quienes-somos-section');

// Función que se ejecutará cada vez que se produzca el evento scroll
function manejarScroll() {
  // Obtener la posición de la sección objetivo y la ventana

  const posicionSeccion = seccionObjetivo.offsetTop;
  const posicionVentana = (window.pageYOffset);

  // Si la posición de la ventana es mayor o igual a la de la sección objetivo
  if (posicionVentana >= posicionSeccion-700) {
    // Agregar la clase a cada elemento
    animarQuienesSomos.forEach(elemento => {
      elemento.classList.add('animate__backInLeft');
    });
    animarMisionVision.forEach(elemento => {
      elemento.classList.add('animate__backInRight');
    });
  } else {
    // Quitar la clase a cada elemento (opcional)
    animarQuienesSomos.forEach(elemento => {
      elemento.classList.remove('animate__backInLeft');
    });
    animarMisionVision.forEach(elemento => {
      elemento.classList.remove('animate__backInRight');
    });
  }
  
}
// Escuchar el evento scroll en la ventana
window.addEventListener('scroll', manejarScroll);

// Get references to the navigation tabs and cards container
const navTabs = document.querySelectorAll('.nav-link');
const cardsContainer = document.querySelector('.cards-container');

// Function to filter cards based on the selected tab
function filterCards(selectedTab) {
  if(selectedTab==""){
    selectedTab="todos"
  }
  // Get all card divs
  const cardDivs = cardsContainer.querySelectorAll('.card-div-a');

  // Hide all cards initially
  cardDivs.forEach(cardDiv => {
    cardDiv.style.display = 'none';
  });

  // Show cards based on the selected tab
  switch (selectedTab) {
    
    case 'todos':
      cardDivs.forEach(cardDiv => {
        cardDiv.style.display = 'block';
      });
      break;
    case 'software':
      cardDivs.forEach(cardDiv => {
        if (cardDiv.classList.contains('card-tripsv') ||
            cardDiv.classList.contains('card-atrasvasolo') ||
            cardDiv.classList.contains('card-chivotour')) {
          cardDiv.style.display = 'block';
        }
      });
      break;
    case 'productos':
      cardDivs.forEach(cardDiv => {
        if (cardDiv.classList.contains('card-tazas')) {
          cardDiv.style.display = 'block';
        }
      });
      break;
    case 'servicios':
      cardDivs.forEach(cardDiv => {
        if (cardDiv.classList.contains('card-atrasvasolo')) {
          cardDiv.style.display = 'block';
        }
      });
      break;
    default:
      // Handle invalid tab selection (optional)
      console.error('Invalid tab selection');
  }
}

// Add click event listeners to navigation tabs
navTabs.forEach(navTab => {
  navTab.addEventListener('click', () => {
    // Remove active class from all tabs
    navTabs.forEach(tab => {
      tab.classList.remove('active');
    });

    // Add active class to the clicked tab
    navTab.classList.add('active');

    // Filter cards based on the selected tab
    filterCards(navTab.id.replace('nav-item-', ''));
  });
});

// Initial filter (show all cards by default)
filterCards('todos');