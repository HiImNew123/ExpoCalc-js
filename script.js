var currentStep = 0;

function solveQuadratic() {
    // Get coefficients from input fields
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    // Calculate discriminant
    var discriminant = b * b - 4 * a * c;

    // Step-by-step solution
    var steps = [];

    if (discriminant > 0) {
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // Step 1
        steps.push("Calculate Discriminant: b^2 - 4ac = " + discriminant);

        // Step 2
        steps.push("Roots are real and different.");
        steps.push("Use the quadratic formula: (-b ± √(b^2 - 4ac)) / 2a");

        // Step 3
        steps.push("Root 1 = (-" + b + " + √" + discriminant + ") / " + (2 * a) + " = " + root1);

        // Step 4
        steps.push("Root 2 = (-" + b + " - √" + discriminant + ") / " + (2 * a) + " = " + root2);
    } else if (discriminant == 0) {
        var root = -b / (2 * a);

        // Step 1
        steps.push("Calculate Discriminant: b^2 - 4ac = " + discriminant);

        // Step 2
        steps.push("Roots are real and same.");
        steps.push("Use the quadratic formula: (-b ± √(b^2 - 4ac)) / 2a");

        // Step 3
        steps.push("Root = -" + b + " / " + (2 * a) + " = " + root);
    } else {
        var realPart = -b / (2 * a);
        var imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);

        // Step 1
        steps.push("Calculate Discriminant: b^2 - 4ac = " + discriminant);

        // Step 2
        steps.push("Roots are complex and different.");
        steps.push("Use the quadratic formula: (-b ± √(b^2 - 4ac)) / 2a");

        // Step 3
        steps.push("Real part = -" + b + " / " + (2 * a) + " = " + realPart);

        // Step 4
        steps.push("Imaginary part = √" + Math.abs(discriminant) + " / " + (2 * a) + " = " + imaginaryPart);

        // Step 5
        steps.push("Root 1 = " + realPart + " + " + imaginaryPart + "i");
        steps.push("Root 2 = " + realPart + " - " + imaginaryPart + "i");
    }

    // Display steps
    displayResult(steps[currentStep]);
}

function nextStep() {
    currentStep++;
    solveQuadratic();

    // If all steps are displayed, disable the button
    if (currentStep === steps.length - 1) {
        document.querySelector("button").disabled = true;
    }
}

function displayResult(message) {
    document.getElementById("result").innerHTML = message;
}
