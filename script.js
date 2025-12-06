// स्क्रीनवर नंबर दाखवण्यासाठी function
function display(val) {
    document.getElementById("screen").value += val;
}

// स्क्रीन रिकामी करण्यासाठी (Clear)
function clearScreen() {
    document.getElementById("screen").value = "";
}

// शेवटचा अंक घालवण्यासाठी (Delete)
function deleteLast() {
    var currentValue = document.getElementById("screen").value;
    document.getElementById("screen").value = currentValue.slice(0, -1);
}

// बेरीज, वजाबाकी, गुणाकार करण्यासाठी
function calculate() {
    var p = document.getElementById("screen").value;
    // जर स्क्रीन रिकामी असेल तर काही करू नये
    if(p == "") {
        return;
    }
    
    try {
        var q = eval(p);
        document.getElementById("screen").value = q;
    } catch (e) {
        document.getElementById("screen").value = "Error";
    }
}
