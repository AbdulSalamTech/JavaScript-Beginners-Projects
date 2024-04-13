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
  if (!intervalColor) {
    intervalColor = setInterval(colorBg, 1000);
  }

  function colorBg () {
    document.querySelector("body").style.backgroundColor = randomColor();
  };
};

const stopChangingColor = function () {
  clearInterval(intervalColor);
  intervalColor = null;
};

const startButton = document.querySelector("#start");
startButton.addEventListener("click", startChangingColor);

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", stopChangingColor);