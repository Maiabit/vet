const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

// Asegura que dataLayer no se reinicie si ya existe
window.dataLayer = window.dataLayer || [];

// Mostrar el aviso si no se han aceptado cookies
if (!localStorage.getItem('cookies-aceptadas')) {
  avisoCookies.classList.add('activo');
  fondoAvisoCookies.classList.add('activo');
}

// Evento al hacer clic en "De acuerdo"
botonAceptarCookies.addEventListener('click', () => {
  avisoCookies.classList.remove('activo');
  fondoAvisoCookies.classList.remove('activo');

  localStorage.setItem('cookies-aceptadas', 'true');
  dataLayer.push({ event: 'cookies-aceptadas' });
});