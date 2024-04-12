const colorButtons = document.querySelectorAll(".buttons");
const body = document.querySelector("body");

colorButtons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (colorEvent) {


    // console.log(colorEvent);
    // console.log(colorEvent.target);

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

//--------------We can use if-else statements instead of switch case statements Both of these statements work ots my choice what I want to use.


// ------------------------------------------------------------------------------------------------ \\

// if(colorEvent.target.id === 'color-1'){
//   body.style.backgroundColor = 'cornflowerblue'
// }else if(colorEvent.target.id === 'color-2'){
//   body.style.backgroundColor = 'darkslateblue'
// }else if(colorEvent.target.id === 'color-3'){
//   body.style.backgroundColor = 'lightblue'
// }
// if(colorEvent.target.id === 'color-4'){
//   body.style.backgroundColor = 'khaki'
// }
