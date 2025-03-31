//index.js

let userInput = document.getElementById("date");
userInput.max = new Date(). toISOString(). split('T')[0];
let result = document.getElementById("result");
let timeoutId;

function calculateAge(){
    if(timeoutId){
        clearTimeout(timeoutId);
    }
    
    if(userInput.value == ""){
        result.innerHTML = "Please select a date first!";
        result.classList.add("error");
        hideError();
        return;
    }
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{ 
        y3--;
        m3 = 12 + m2 - m1; 
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInPrevMonth(y1, m1 -1) + d2 - d1;
    }

    function getDaysInPrevMonth(year, month){
        return new Date(year, month, 0).getDate();
    }

    console.log("Age is : " + y3 + " years " + m3 + " months " + d3 + " days ");
    result.classList.remove("error");
    result.innerHTML = "You are <span>"+ y3 + "</span> years <span>" + m3 + "</span> months <span>" + d3 + "</span> days old";

 }

 function hideError(){
    timeoutId = setTimeout(() => {
        result.innerHTML = "";
    }, 5000);
 }
