const form = document.querySelector("form");

// const height = document.querySelector("#height").value;
// this will cause the empty value to be subbmited

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const resultText = document.querySelector('#result-text')
  const bmi = (weight / ((height * height) / 10000)).toFixed(2)
  
  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please enter a valid height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please enter a valid height ${weight}`
  }else {
    result.innerText = bmi
  }
  if(bmi <= 18.6){
    resultText.innerHTML = 'You are under weight'
  }else if(bmi > 18.6 && bmi <= 24.9){
    resultText.innerText = 'Your weight is normal'
  }else{
    resultText.innerHTML = 'You are over weight'
  }
});
