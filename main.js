/*jslint browser: true*/
/*global $, jQuery*/

var num = 0;
var display = document.querySelector(".screen");
var formula = document.querySelector(".formula");
var enter = document.querySelector(".enter");
var buttons = document.querySelectorAll(".buttons");
var operation = [];
var result = 0;

init();

function init(){
  
  off(); //calculator is off
  checkButtons(); //probe buttons for input
  
  //if enter is pressed, calculate operation
  enter.addEventListener("click", function(){
    calculate();
    display.textContent = result;
    result = 0;
    num = 0;
    operation = [];
    
  });
  
}


function checkButtons() {
  
   for(var i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click", function(){
     
    //Turn ON
    if (this.textContent === "ON"){
      ac();
    }
    
    //Clear last entry
    if (this.textContent === "C"){
      display.textContent = operation.pop();
      formula.textContent = operation.join('');
    }
           
    //.
    if (this.textContent === "."){
      display.textContent = num + ".";
    }
      
    //π
    if (this.textContent === "π"){
      num = 3.1416;
      displayNum();
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
      displayOp("+");
        
    }
      
    //-
    if (this.textContent === "-"){
      displayOp("-");
        
    }
      
    //x
    if (this.textContent === "x"){
      displayOp("x");
        
    }
      
    //÷
    if (this.textContent === "÷"){
      displayOp("÷");
        
    }
    
    //+/-
    if (this.textContent === "+/-"){
      var inv = operation.pop();
      num = inv * -1;
      displayNum();
    }
      
      
  
});
    
  }
  
}

function off(){
  display.textContent = " ";
  formula.textContent = " ";
}


function ac(){
  num = 0;
  result = 0;
  display.textContent = num; 
  operation = [];
  formula.textContent = " ";  
}

function displayNum(){
  display.textContent = num;
  operation.push(num);
  formula.textContent = operation.join(''); 
}

function displayOp(op) {
  display.textContent = op;
  operation.push(op);
  formula.textContent = operation.join('');
}



function calculate(){
  
  result += operation[0];
  
  for(var i = 1; i < operation.length; i+=2){
    
    if(operation[i] === "+"){
      result += operation[i+1];

    }
    
    if(operation[i] === "-"){
      result -= operation[i+1];

    }
    
    if(operation[i] === "x"){
      result *= operation[i+1];

    }
    
    if(operation[i] === "÷"){
      result /= operation[i+1];

    }
    
    
       
  }
  
}






