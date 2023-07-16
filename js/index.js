const grid = document.getElementById('grid-container');

function renderGrid() {
  if(Array.from(grid.children).length > 0) {
    Array.from(grid.children).forEach(square => square.remove());
  }

  const slider = document.getElementById('slider');

  const gridNumbers = document.querySelectorAll('span');

  gridNumbers.forEach((number) => number.textContent = slider.value);

  for(let i = 0; i < slider.value * slider.value; i++) {
    const square = document.createElement('div');
    square.style.width = `${100 / slider.value}%`;
    square.style.height = `${100 / slider.value}%`;
    square.classList.add('square');
    grid.appendChild(square);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
 
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
 
  return color;
}

function rainbow() {
  const squares = Array.from(grid.children);
  squares.map((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
      });
  })
}

function clear() {
  const squares = Array.from(grid.children);
  squares.map((square) => {
    square.style.backgroundColor = 'white';
  });
}

function black() {
  const squares = Array.from(grid.children);
  squares.map((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    })
  });
}

function toggleGrid() {
  const squares = Array.from(grid.children);
  squares.map((square) => {
    square.classList.toggle('square');
  })
}

const clearButton = document.getElementById('clear');
const rainbowButton = document.getElementById('rainbow');
const blackButton = document.getElementById('black');
const toggleButton = document.getElementById('toggle');
const sliderInput = document.getElementById('slider');

clearButton.onclick = clear;
rainbowButton.onclick = rainbow;
blackButton.onclick = black;
toggleButton.onclick = toggleGrid;
slider.addEventListener('input', renderGrid);
renderGrid();