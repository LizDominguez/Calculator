/*jslint browser: true*/
/*global $, jQuery*/

var num = 0;
var display = document.querySelector(".screen");
var enter = document.querySelector(".enter");
var buttons = document.querySelectorAll(".buttons");

init();

function init(){
  
  display.textContent = " ";
  
  for(var i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click", function(){
    if (this.textContent === "ON"){
      ac();
    }
  
  
});
    
  }
  
  
}

function ac(){
  num = 0;
  display.textContent = num;
}

enter.addEventListener("click", function(){
  
  
});

function add(num) {
  var number = 0;
  number += num;
}

function subtract(num) {
  var number = 0;
  number -= num;
}