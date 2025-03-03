let input;
let slider;
let iframe;
let dropdown;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(CENTER, CENTER);
  
  input = createInput("這是一段文字");
  input.position(10, 10);
  input.size(200);
  
  slider = createSlider(10, 100, 32);
  slider.position(10, 50);
  
  iframe = createElement('iframe');
  iframe.attribute('src', 'https://example.com'); // 替換為你想要的 URL
  iframe.position(100, 100);
  iframe.size(windowWidth - 200, windowHeight - 200);
  
  dropdown = createSelect();
  dropdown.position(10, 90);
  dropdown.option('https://hackmd.io/@tIuNl62QQFahUpnLqMPLnQ/SJtBBYzoJl');
  dropdown.option('https://another-example.com');
  dropdown.option('https://yet-another-example.com');
  dropdown.changed(updateIframe);
}

function draw() {
  background(220);
  let textToDisplay = input.value();
  let textSizeValue = slider.value();
  textSize(textSizeValue);
  
  let rows = height / textSizeValue;
  let cols = width / textWidth(textToDisplay);
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      text(textToDisplay, j * textWidth(textToDisplay), i * textSizeValue);
    }
  }
}

function updateIframe() {
  let url = dropdown.value();
  iframe.attribute('src', url);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  iframe.position(100, 100);
  iframe.size(windowWidth - 200, windowHeight - 200);
}
