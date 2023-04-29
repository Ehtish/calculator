var buttons = document.querySelector('.btn-group');
var operators = ["+", "-", "*", "/"];
var result = document.querySelector('.result');

buttons.addEventListener('click',(e)=>{
    let btnValue = e.target.innerText;
    
    // Check if the button pressed is an operator
    if (operators.includes(btnValue)) {
        // If the last character of the result is also an operator, remove it
        if (operators.includes(result.value.slice(-1))) {
            result.value = result.value.slice(0, -1);
        }
    }

    switch (btnValue) {
        case "RESET":
            result.value = "";
            break;
        case "DEL":
            result.value = result.value.toString().slice(0,-1);
            break;
        case "=":
            result.value = eval(result.value);
            break;
        
        default:
            result.value += btnValue;
            break;
    }
});
