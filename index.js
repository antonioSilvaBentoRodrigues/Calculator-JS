const number0 = document.getElementById("number0-btn");
const number1 = document.getElementById("number1-btn");
const number2 = document.getElementById("number2-btn");
const number3 = document.getElementById("number3-btn");
const number4 = document.getElementById("number4-btn");
const number5 = document.getElementById("number5-btn");
const number6 = document.getElementById("number6-btn");
const number7 = document.getElementById("number7-btn");
const number8 = document.getElementById("number8-btn");
const number9 = document.getElementById("number9-btn");
let screenNumber = document.getElementById("screen");
let firstOperationNumber = 0;
let secondOperationNumber = 0;
let operations="";

//Insert numbers on the screen
document.getElementById("number0-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=0;
        operations="";
    }else{
        screenNumber.textContent +=0;
    }
 
};

document.getElementById("number1-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=1;
        operations="";
    }else{
        screenNumber.textContent +=1;
    }
};

document.getElementById("number2-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=2;
        operations="";
    }else{
        screenNumber.textContent +=2;
    };
};

document.getElementById("number3-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=3;
        operations="";
    }else{
        screenNumber.textContent +=3;
    }
};

document.getElementById("number4-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=4;
        operations="";
    }else{
        screenNumber.textContent +=4;
    }
};

document.getElementById("number5-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=5;
        operations="";
    }else{
        screenNumber.textContent +=5;
    }
};

document.getElementById("number6-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=6;
        operations="";
    }else{
        screenNumber.textContent +=6;
    }
};

document.getElementById("number7-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=7;
        operations="";
    }else{
        screenNumber.textContent +=7;
    }
};

document.getElementById("number8-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=8;
        operations="";
    }else{
        screenNumber.textContent +=8;
    }
};

document.getElementById("number9-btn").onclick = function(){
    if(operations == "none"){
        screenNumber.textContent = "";
        screenNumber.textContent +=9;
        operations="";
    }else{
        screenNumber.textContent +=9;
    }
};

//Operation buttons
document.getElementById("percentage-btn").onclick = function(){
    if(operations == "minus"){
        secondOperationNumber = String((Number(screenNumber.textContent)/100) * firstOperationNumber);
        screenNumber.textContent = String(Number(firstOperationNumber) - Number(secondOperationNumber)); 
        console.log(screenNumber.textContent);
        operations="none";
    }else if(operations=="plus"){
        secondOperationNumber = String((Number(screenNumber.textContent)/100) * firstOperationNumber);
        screenNumber.textContent = String(Number(firstOperationNumber) + Number(secondOperationNumber)); 
        console.log(screenNumber.textContent);
        operations="none";
    }else if(operations=='multiply'){
        secondOperationNumber = String((Number(screenNumber.textContent)/100));
        screenNumber.textContent = String(Number(firstOperationNumber) * Number(secondOperationNumber)); 
        console.log(screenNumber.textContent);
        operations="none";
    }else if(operations=="divide"){
        secondOperationNumber = String((Number(screenNumber.textContent)/100));
        screenNumber.textContent = String(Number(firstOperationNumber) / Number(secondOperationNumber)); 
        console.log(screenNumber.textContent);
        operations="none";
    }

}

document.getElementById("ce-btn").onclick = function(){
        if(firstOperationNumber!=0 && screenNumber.textContent!=""){
            secondOperationNumber = "";
            screenNumber.textContent="";
        }
};

document.getElementById("c-btn").onclick = function(){
     screenNumber.textContent="";
     firstOperationNumber = "";
     secondOperationNumber = "";
};

document.getElementById("erase-btn").onclick = function(){
    screenNumber.textContent = screenNumber.textContent.substring(0,screenNumber.textContent.length-1);
};

document.getElementById("multInv-btn").onclick = function(){
     screenNumber.textContent = String(1/Number(screenNumber.textContent));
};

document.getElementById("scndPow-btn").onclick = function(){
     screenNumber.textContent = Math.pow(Number(screenNumber.textContent),2);
     operations = "none";
}; 

document.getElementById("sqrRoot-btn").onclick = function(){
     screenNumber.textContent = Math.sqrt(Number(screenNumber.textContent));
     operations = "none";
};

document.getElementById("divide-btn").onclick = function(){
     operations = "divide";
     firstOperationNumber = screenNumber.textContent;
     screenNumber.textContent = "";
};

document.getElementById("multiply-btn").onclick = function(){
     operations = "multiply";
     firstOperationNumber = screenNumber.textContent;
     screenNumber.textContent = "";
};

document.getElementById("minus-btn").onclick = function(){
     operations = "minus";
     firstOperationNumber = screenNumber.textContent;
     screenNumber.textContent = "";
};

document.getElementById("plus-btn").onclick = function(){
     operations = "plus";
     firstOperationNumber = screenNumber.textContent;
     screenNumber.textContent = "";
};

document.getElementById("abs-btn").onclick = function(){
     
     if(Number(screenNumber.textContent)>0){
        screenNumber.textContent = `-${screenNumber.textContent}`;
     }else{
        screenNumber.textContent = Math.abs(Number(screenNumber.textContent));
     }
};

document.getElementById("comma-btn").onclick = function(){
     screenNumber.textContent = screenNumber.textContent+`.`
};

document.getElementById("equal-btn").onclick = function(){
     if (operations == "plus"){
        secondOperationNumber = screenNumber.textContent;
        screenNumber.textContent = "";
        screenNumber.textContent = String(Number(firstOperationNumber) + Number(secondOperationNumber));
        operations = "none"
    }else if(operations=="minus"){
        secondOperationNumber = screenNumber.textContent;
        screenNumber.textContent = "";
        screenNumber.textContent = String(Number(firstOperationNumber) - Number(secondOperationNumber));
        operations = "none"
    }else if(operations=="multiply"){
        secondOperationNumber = screenNumber.textContent;
        screenNumber.textContent = "";
        screenNumber.textContent = String(Number(firstOperationNumber) * Number(secondOperationNumber));
        operations = "none"

    }else if(operations=="divide"){
        secondOperationNumber = screenNumber.textContent;
        screenNumber.textContent = "";
        screenNumber.textContent = String(Number(firstOperationNumber) / Number(secondOperationNumber));
        operations = "none"

    }
}


