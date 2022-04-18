let tipVal = document.getElementById("tipVal")
let people = document.getElementById("people-input")
let custom = document.getElementById("num-input")
let tipNum = document.querySelectorAll(".tip-Num")
let total = document.getElementById("total")
let amount = document.getElementById("amount")
let resetBtn = document.getElementById("reset")
let error = document.getElementById("error")


const clicked = (e)=>{
    if (people.value>0){
        let value = eval(e.target.value);

        let calcFunct =value*tipVal.value/people.value;
        let final = eval(calcFunct);

        let summary =  `${final} + ${tipVal.value}/${people.value}`;

        let totalPay =eval(summary).toFixed(2);
        amount.innerText= final.toFixed(2);
        total.textContent= totalPay;
        error.style.visibility="hidden";
            error.style.color="red";
        }

        else{
            error.style.visibility="visible";
            error.style.color="red";
        }
    };



    custom.addEventListener("keypress", function display(e){
        if(e.key==="Enter"){
        let value = eval((e.target.value)/100);

        let calcFunct =value*tipVal.value/people.value;
        let final = eval(calcFunct);

        let summary =  `${final} + ${tipVal.value}/${people.value}`;

        let totalPay =eval(summary).toFixed(2);
        amount.innerText= final.toFixed(2);
        total.textContent= totalPay;

        console.log(calcFunct);
        console.log(value);
         }}
         )
    
for (i = 0;i<tipNum.length; i++){
    tipNum[i].addEventListener("click", clicked)
    };

    const reset=()=>{
        window.location.reload() 
    }

    resetBtn.addEventListener("click", reset)
// console.log(tipVal, people, custom)