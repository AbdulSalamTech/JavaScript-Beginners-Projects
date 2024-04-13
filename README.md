# JavaScript-Projects
These are some of my beginner level projects of JavaScript

## JavaScript Solution Code (Project 1)
``` JavaScript

const colorButtons = document.querySelectorAll(".buttons");
const body = document.querySelector("body");

colorButtons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (colorEvent) {
    switch (colorEvent.target.id) {
      case "color-1":
        body.style.backgroundColor = "cornflowerblue";
        break;
      case "color-2":
        body.style.backgroundColor = "darkslateblue";
        break;
      case "color-3":
        body.style.backgroundColor = "lightblue";
        break;
      case "color-4":
        body.style.backgroundColor = "khaki";
        break;
      case "color-5":
        body.style.backgroundColor = "lightsalmon";
        break;
      case "color-6":
        body.style.backgroundColor = "rgb(245, 184, 18)";
        break;
    }
  });
});

