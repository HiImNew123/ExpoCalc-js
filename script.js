<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quadratic Equation Solver</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Quadratic Equation Solver Tutorial</h1>
        <label for="a">Enter coefficient a:</label>
        <input type="number" id="a" placeholder="Enter a">

        <label for="b">Enter coefficient b:</label>
        <input type="number" id="b" placeholder="Enter b">

        <label for="c">Enter coefficient c:</label>
        <input type="number" id="c" placeholder="Enter c">

        <button onclick="nextStep()">Next Step</button>

        <div id="result"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
