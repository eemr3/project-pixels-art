function createPaletteColor() {
  const containerPalette = document.querySelector('#color-palette');
  const basePalette = 5;
  for (let index = 1; index < basePalette; index += 1) {
    const paletteC = document.createElement('div');
    paletteC.classList.add('color');

    containerPalette.appendChild(paletteC);
  }
}
createPaletteColor();

function addColorInPalette() {
  const colors = document.querySelectorAll('.color');

  for (let index = 0; index < colors.length; index += 1) {
    const firstColor = Math.ceil(Math.random() * 250);
    const secondColor = Math.ceil(Math.random() * 250);
    const thirdColor = Math.ceil(Math.random() * 250);

    colors[
      index
    ].style.backgroundColor = `rgb(${firstColor},${secondColor}, ${thirdColor})`;
  }

  colors[0].style.backgroundColor = 'black';
}
addColorInPalette();

function clipeBoard() {
  const boardDad = document.querySelector('#paint-clipboard');
  const childBoardElement = document.createElement('div');
  childBoardElement.id = 'pixel-board';

  for (let index = 0; index < 5; index += 1) {
    const lineBord = document.createElement('div');
    for (let colunm = 0; colunm < 5; colunm += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      lineBord.appendChild(pixel);
    }
    childBoardElement.appendChild(lineBord);
  }
  boardDad.appendChild(childBoardElement);
}

clipeBoard();
