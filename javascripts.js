let currentInput='';

function appendNnumber(number){
    currentInput += number;
    document.getElementById('result').value =  currentInput;
}


function operators(operator) {
    currentInput += operator;
    document.getElementById('result').value = currentInput;
}

function calculate(){
    const result = eval(currentInput);
    document.getElementById('result').value = result;
    currentInput =  result.toString();
}

function clearInput() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function del(){
    value = document.getElementById("result").value; //get the result
    val = document.getElementById("result").value = value.slice(0, - 1); //remove one character at the back
    currentInput = val; //set the value of current input to the result of val
    
}    

function percent(){
    mult = eval(currentInput / 100);
    total = document.getElementById('result').value = mult;
    currentInput =  total;

}

function root(){
    value = document.getElementById('result').value
    total = Math.sqrt(value)
    showTotal = document.getElementById('result').value = total;
    currentInput = showTotal
}

