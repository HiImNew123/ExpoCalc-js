let currentStep = 0;

function solveQuadratic() {
    currentStep = 0;

    // Get coefficients from user input
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    // Calculate the discriminant
    const discriminant = b ** 2 - 4 * a * c;

    // Display the quadratic equation
    const equation = `${a}x^2 + ${b}x + ${c} = 0`;
    document.getElementById("result").innerHTML = `Solving the quadratic equation: ${equation} <br><br>`;

    // Check the nature of roots
    if (discriminant > 0) {
        // Two real roots
        document.getElementById("result").innerHTML += "Step 1: Calculate Discriminant (b^2 - 4ac) <br>";
        document.getElementById("result").innerHTML += `   Discriminant = ${b}^2 - 4 * ${a} * ${c} = ${discriminant} <br><br>`;

        document.getElementById("result").innerHTML += "Step 2: Calculate Roots using Quadratic Formula <br>";
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").innerHTML += `   Root 1 = (-${b} + √${discriminant}) / (2 * ${a}) = ${root1.toFixed(2)} <br>`;
        document.getElementById("result").innerHTML += `   Root 2 = (-${b} - √${discriminant}) / (2 * ${a}) = ${root2.toFixed(2)} <br><br>`;

        document.getElementById("result").innerHTML += "Therefore, the equation has two real roots.";
    } else if (discriminant === 0) {
        // One real root
        document.getElementById("result").innerHTML += "Step 1: Calculate Discriminant (b^2 - 4ac) <br>";
        document.getElementById("result").innerHTML += `   Discriminant = ${b}^2 - 4 * ${a} * ${c} = ${discriminant} <br><br>`;

        document.getElementById("result").innerHTML += "Step 2: Calculate Root using Quadratic Formula <br>";
        const root = -b / (2 * a);
        document.getElementById("result").innerHTML += `   Root = -${b} / (2 * ${a}) = ${root.toFixed(2)} <br><br>`;

        document.getElementById("result").innerHTML += "Therefore, the equation has one real root.";
    } else {
        // No real roots
        document.getElementById("result").innerHTML += "Step 1: Calculate Discriminant (b^2 - 4ac) <br>";
        document.getElementById("result").innerHTML += `   Discriminant = ${b}^2 - 4 * ${a} * ${c} = ${discriminant} <br><br>`;

        document.getElementById("result").innerHTML += "Since the discriminant is negative, there are no real roots.";
    }

    // Show the "Next Step" button
    document.getElementById("nextButton").style.display = "inline";
}

function nextStep() {
    // Increment the current step
    currentStep++;

    // Hide the "Next Step" button if all steps are displayed
    if (currentStep === 2) {
        document.getElementById("nextButton").style.display = "none";
    }

    // Show the next step based on the current step value
    switch (currentStep) {
        case 1:
            document.getElementById("result").innerHTML += "<br>Step 3: Substitute coefficients into the Quadratic Formula<br>";
            document.getElementById("result").innerHTML += "   Quadratic Formula: x = (-b ± √(b^2 - 4ac)) / (2a)<br>";
            document.getElementById("result").innerHTML += `   For Root 1: x = (-${b} + √${discriminant}) / (2 * ${a})<br>`;
            document.getElementById("result").innerHTML += `   For Root 2: x = (-${b} - √${discriminant}) / (2 * ${a})<br><br>`;
            break;
        default:
            break;
    }
}
