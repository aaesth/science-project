const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const colorDisplay = document.getElementById('color-display');
const redVal = document.getElementById('redVal');
const greenVal = document.getElementById('greenVal');

function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  redVal.textContent = red;
  greenVal.textContent = green;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

updateColor();

