function solveQuadratic() {
    // Get coefficients from input fields
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    // Calculate discriminant
    var discriminant = b * b - 4 * a * c;

    // Display the steps
    var steps = [];

    if (discriminant > 0) {
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        steps.push(`Discriminant (b^2 - 4ac) = ${discriminant}`);

        steps.push(`Roots are real and different: x1 = ${root1}, x2 = ${root2}`);
    } else if (discriminant == 0) {
        var root = -b / (2 * a);

        steps.push(`Discriminant (b^2 - 4ac) = ${discriminant}`);

        steps.push(`Roots are real and the same: x = ${root}`);
    } else {
        var realPart = -b / (2 * a);
        var imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);

        steps.push(`Discriminant (b^2 - 4ac) = ${discriminant}`);

        steps.push(`Roots are complex and different: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`);
    }

    // Display steps
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    steps.forEach(function (step) {
        var stepElement = document.createElement('p');
        stepElement.textContent = step;
        resultContainer.appendChild(stepElement);
    });
}
