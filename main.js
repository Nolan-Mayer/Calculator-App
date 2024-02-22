// calculator data
let input1 = "";
let input2 = "";
let op = "";

function updateScreen(op) {
    if(op == "clear") {
        document.getElementById("output").innerHTML = 0;
    } else {
        document.getElementById("output").innerHTML = op;
    }
}

function addNumber(num) {
    if (op != "") {
        // add to input 2

        if (input2 == "") {
            updateScreen("clear");
        }

        input2+=num;
        updateScreen(input2);
    } else {
        // hasnt selected operation yet, input 1
        input1+=num;
        updateScreen(input1);
    }

    return true;
}

function addOperation(selectedOP) {
    op=selectedOP;
    return true;
}

function computeTotals() {
    
    console.log(input1);
    console.log(input2);
    console.log(op);

    if (input1 == "" || input2 == "" || op == "") {
        return;
    }
    
    let a = Number(input1);
    let b = Number(input2);
    var answer = 0;

    if (op == "/") {
        answer = a/b;
    } else if (op == "*") {
        answer = a*b;
    } else if (op == "-") {
        answer = a-b;
    } else if (op == "+") {
        answer = a+b;
    }

    if (answer.toString().includes('.')) {
        answer = answer.toFixed(3);
    }

    updateScreen(answer);

    input1 = answer;
    input2 = "";
    op = "";

    return true;
}

function clearOperations() {
    input1 = "";
    input2 = "";
    op = "";
    updateScreen("clear");
}
