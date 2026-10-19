/*
let jos = document.querySelector('.js-input-elementt');


function display(number) {
  console.log(number)
}


document.querySelector('.js-input-element') = number;

//function clear() {
 // display = '';
//} 

*/


let display = document.getElementById("display");

function press(num) {
  display.value += num;

  


}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
      display.value = eval(display.value);

  }  catch {
  display.value = "Error";
  
}



}

/*
let todolsitHtml = '';

let todolsit = []

for(let i = 0; i < todolsit.length; i++) {
  let todo = todolsit [i];

  let html = `
  <p>
  ${namee}
  </p>
  `;


  todolsitHtml += html;

  console.log(html)
}



function addtodo() {
 let displayResult = document.querySelector('.display');

  let name = displayResult.value;

  todo.push(name)
}

display.querySelector('.result').innerHTML = todolsit


*/

