/*jslint browser: true*/
/*global $, jQuery*/

var num;
var display = document.querySelector(".screen");
var enter = document.querySelector(".enter");
var buttons = document.querySelectorAll(".buttons");
var operation = [];
var result = 0;

init();

function init(){
  
  off(); //calculator is off
  checkButtons(); //probe buttons for input
  
}


function checkButtons() {
  
   for(var i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click", function(){
     
    //Turn ON
    if (this.textContent === "ON"){
      ac();
    }
    
    //All clear
    if (this.textContent === "AC"){
      ac();
    }
           
    //.
    if (this.textContent === "."){
      display.textContent = num + ".";
    }
      
    //0
    if (this.textContent === "0"){
      num = 0;
      displayNum();
    }
      
    //1
    if (this.textContent === "1"){
      num = 1;
      displayNum();
    }
      
    //2
    if (this.textContent === "2"){
      num = 2;
      displayNum();
    }
      
    //3
    if (this.textContent === "3"){
      num = 3;
      displayNum();
    }
      
    //4
    if (this.textContent === "4"){
      num = 4;
      displayNum();
    }
      
    //5
    if (this.textContent === "5"){
      num = 5;
      displayNum();
    }
      
    //6
    if (this.textContent === "6"){
      num = 6;
      displayNum();
    }
      
    //7
    if (this.textContent === "7"){
      num = 7;
      displayNum();
    }
      
    //8
    if (this.textContent === "8"){
      num = 8;
      displayNum();
    }
      
    //9
    if (this.textContent === "9"){
      num = 9;
      displayNum();
    }
      
    //+
    if (this.textContent === "+"){
      operation.push("+");
        
    }

  
  
});
    
  }
  
  enter.addEventListener("click", function(){
    alert(operation);
 
  });
  
}

function off(){
  display.textContent = " ";
}


function ac(){
  num = 0;
  display.textContent = num; 
  operation = [];
  
}

function displayNum(){
  display.textContent = num;
  operation.push(num);
}


function add(){
  
}






