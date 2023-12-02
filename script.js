function solveQuadratic() {
    // Get coefficients from input fields
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    // Calculate discriminant
    var discriminant = b * b - 4 * a * c;

    // Check the nature of roots
    if (discriminant > 0) {
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        displayResult("Roots are real and different. Root 1 = " + root1 + ", Root 2 = " + root2);
    } else if (discriminant == 0) {
        var root = -b / (2 * a);
        displayResult("Roots are real and same. Root = " + root);
    } else {
        var realPart = -b / (2 * a);
        var imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
        displayResult("Roots are complex and different. Root 1 = " + realPart + " + " + imaginaryPart + "i, Root 2 = " + realPart + " - " + imaginaryPart + "i");
    }
}

function displayResult(message) {
    document.getElementById("result").innerHTML = message;
}
