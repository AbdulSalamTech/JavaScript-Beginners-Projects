const time = document.querySelector("#clock");

setInterval(function () {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString()
}, 1000);


