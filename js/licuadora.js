var estadoLicuadora = 'apagada';
var licuadora = document.getElementById('blender');
var sonidoLicuadora = document.getElementById('blender-sound');
var botonLicuadora = document.getElementById('blender-button-sound');

function controlarLicuadora() {
  if (estadoLicuadora == 'apagada') {
    estadoLicuadora = 'encendida';
    sonido();
    licuadora.classList.add('active');
  }
  else {
    estadoLicuadora = 'apagada';
    sonido();
    licuadora.classList.remove('active');
  }
}

function sonido() {
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  }
  else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}