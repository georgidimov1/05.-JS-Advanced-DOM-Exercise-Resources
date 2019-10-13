function solve() {
    let selected = document.getElementById("selectMenuTo")
    let option1 = document.createElement("option");
    option1.textContent = "Binary";
    option1.value = "binary";            // Insert text
    selected.appendChild(option1);
    let option2 = document.createElement("option");
    option2.textContent = "Hexadecimal";
    option2.value = "hexadecimal";            // Insert text
    selected.appendChild(option2);
    //debugger;
    document.querySelector("#container > button").addEventListener("click", calc);
    function calc() {
        let currentValue = Number(document.getElementById("input").value);
        if (selected.value === "binary") {
            let result1 = (currentValue).toString(2);
            document.getElementById("result").value = result1;
        }
        else if (selected.value === "hexadecimal") {
            let result2 = ((currentValue).toString(16));
            document.getElementById("result").value = result2.toUpperCase();
        }
    }
}