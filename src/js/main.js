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
  console.log(seccionObjetivo.offsetTop)
  console.log(window.pageYOffset)
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