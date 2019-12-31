var miniDivs = document.querySelectorAll(".mini-container");
var input = document.querySelectorAll("input");
var lastChecked = input.length-1;
var nowCheck;

for(let i=0; i<miniDivs.length; i++) {
    input[i].addEventListener("click", function (){
        if(event.shiftKey && input[i].checked) {
            nowCheck = i;
            checkRange(lastChecked, nowCheck);
        }
        else if(input[i].checked) {
            miniDivs[i].classList.add("line");
        }
        else {
            miniDivs[i].classList.remove("line");
        }
        lastChecked = i;
    });
}

function checkRange(lastChecked, nowCheck) {
    if(lastChecked <= nowCheck) {
        for(let i = lastChecked; i <= nowCheck; i++) {
            input[i].checked = true;
            miniDivs[i].classList.add("line");
    
        }
    }
    else {
        for(let i = nowCheck; i <= lastChecked; i++) {
            input[i].checked = true;
            miniDivs[i].classList.add("line");
    
        }
    }

}