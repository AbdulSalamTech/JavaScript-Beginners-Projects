const randomColor = function () {
  const hexColors = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    color += hexColors[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalColor;

const startChangingColor = function () {
  const colorBG = function () {
    document.querySelector("body").style.backgroundColor = randomColor()
  }
  intervalColor = setInterval(colorBG, 1000)
};

const stopChangingColor = function () {
  clearInterval(intervalColor)
}

const startButton = document.querySelector("#start");
startButton.addEventListener("click", startChangingColor);

const stopButton = document.querySelector("#stop")
stopButton.addEventListener("click", stopChangingColor)
