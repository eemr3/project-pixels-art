function createPaletteColor() {
  const containerPalette = document.querySelector('#color-palette');
  for (let index = 1; index < 5; index += 1) {
    const paletteC = document.createElement('div');
    paletteC.classList.add('color');
    paletteC.style.border = '1px solid rgb(0, 0, 0)';
    paletteC.style.width = '25px';
    paletteC.style.height = '25px';
    paletteC.style.display = 'inline-block';
    containerPalette.appendChild(paletteC);
  }
}

createPaletteColor();
