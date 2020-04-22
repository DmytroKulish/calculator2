let display = document.querySelectorAll("input")[0];

function power(){
display.value = Math.pow(display.value, 2);
}
function root(){
  display.value = Math.sqrt(display.value);
}

function addNumber(num){
display.value = display.value + num;
}

function qualy(){
display.value = eval(display.value);
}
function c(){
  display.value = '';
}
