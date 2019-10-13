function solve() {
    let operators = ["/", "+", "-", "x", "*"]
    Array.from(document.getElementsByTagName("button")).map(x => x.addEventListener("click", calculate))
    let operation = '';
    function calculate(e) {
        let currentButton = e.target.value;
        if (currentButton == "x") { currentButton = "*" }
        if (currentButton == "=") {
            if (operators.includes(operation.slice(-2).trim())){ document.querySelector("#resultOutput").innerHTML = "NaN" }
            else { 
                document.querySelector("#resultOutput").innerHTML = String(eval(operation)); 
            }
        } else if (operators.includes(currentButton)) {
            operation += " " + currentButton + " ";
            document.querySelector("#expressionOutput").innerHTML = `${operation}`;
        } else {
            operation += currentButton;
            document.querySelector("#expressionOutput").innerHTML = `${operation}`;
        }
        document.querySelector("#calculator > div.top > button").addEventListener("click", clear)
        function clear() {
            document.querySelector("#expressionOutput").innerHTML = "";
            document.querySelector("#resultOutput").innerHTML = "";
            operation = "";
        }
    }
}


//else if(currentButton == "="&&typeof eval(operation)){document.querySelector("#resultOutput").innerText = "NaN"}


