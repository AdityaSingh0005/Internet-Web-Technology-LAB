console.log("Scientific Calculator Started");


let expression = "";

let memory = 0;


const expressionBox = document.getElementById("expression");

const resultBox = document.getElementById("result");

const buttons = document.querySelectorAll("button");




// ===============================
// Button Click
// ===============================


buttons.forEach(button => {


    button.addEventListener("click",()=>{


        let value = button.dataset.value;


        if(!value) return;


        handleInput(value);


    });


});





// ===============================
// Handle Input
// ===============================


function handleInput(value){



    switch(value){



        case "clear":

            expression="";

            expressionBox.innerText="";

            resultBox.innerText="0";

            break;




        case "delete":

            expression =
            expression.slice(0,-1);

            expressionBox.innerText=expression;

            break;




        case "=":

            calculate();

            break;




        case "sin":

expression += "sin(";

expressionBox.innerText = expression;

break;



case "cos":

expression += "cos(";

expressionBox.innerText = expression;

break;



case "tan":

expression += "tan(";

expressionBox.innerText = expression;

break;



case "log":

expression += "log(";

expressionBox.innerText = expression;

break;



case "ln":

expression += "ln(";

expressionBox.innerText = expression;

break;



case "sqrt":

expression += "sqrt(";

expressionBox.innerText = expression;

break;



case "square":

expression += "^2";

expressionBox.innerText = expression;

break;



case "power":

expression += "^";

expressionBox.innerText = expression;

break;



case "pi":

expression += "Math.PI";

expressionBox.innerText = expression;

break;



case "e":

expression += "Math.E";

expressionBox.innerText = expression;

break;
        




        default:


            expression += value;


            expressionBox.innerText=expression;


    }


}







// ===============================
// Calculation
// ===============================


function calculate(){



try{


let exp = expression;



// Scientific conversion


exp = exp.replace(
/sin\((.*?)\)/g,
"Math.sin($1*Math.PI/180)"
);



exp = exp.replace(
/cos\((.*?)\)/g,
"Math.cos($1*Math.PI/180)"
);



exp = exp.replace(
/tan\((.*?)\)/g,
"Math.tan($1*Math.PI/180)"
);



exp = exp.replace(
/sqrt\((.*?)\)/g,
"Math.sqrt($1)"
);



exp = exp.replace(
/log\((.*?)\)/g,
"Math.log10($1)"
);



exp = exp.replace(
/ln\((.*?)\)/g,
"Math.log($1)"
);




let result = eval(exp);



result = Number(result.toFixed(10));



resultBox.innerText=result;



saveHistory(
expression,
result
);



expression=result.toString();


expressionBox.innerText=expression;



}


catch(error){


console.log(error);


resultBox.innerText="Error";


}



}







// ===============================
// History Save
// ===============================


function saveHistory(exp,result){



let history =
JSON.parse(
localStorage.getItem("calcHistory")
) || [];



history.unshift({

exp:exp,

result:result

});



if(history.length>15)

history.pop();



localStorage.setItem(
"calcHistory",
JSON.stringify(history)
);



showHistory();


}








// ===============================
// Show History
// ===============================


function showHistory(){



let historyBox =
document.getElementById("historyList");



if(!historyBox) return;



historyBox.innerHTML="";



let history =
JSON.parse(
localStorage.getItem("calcHistory")
) || [];



history.forEach(item=>{


let p=document.createElement("p");


p.innerText =
item.exp+" = "+item.result;


historyBox.appendChild(p);



});



}



showHistory();







// ===============================
// Clear History
// ===============================


let clearBtn =
document.getElementById("clearHistory");



if(clearBtn){


clearBtn.onclick=function(){


localStorage.removeItem(
"calcHistory"
);


showHistory();


};


}







// ===============================
// Keyboard
// ===============================


document.addEventListener(
"keydown",
(e)=>{


let key=e.key;



if(
(key>="0" && key<="9")
||
["+","-","*","/","."].includes(key)

){


expression+=key;

expressionBox.innerText=expression;


}



if(key==="Enter"){

calculate();

}



if(key==="Backspace"){


expression =
expression.slice(0,-1);


expressionBox.innerText=expression;


}



if(key==="Escape"){


expression="";


expressionBox.innerText="";


resultBox.innerText="0";


}



});