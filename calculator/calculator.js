window.onload = function () {
    // // initialize app
    // Requirement 1 - welcome user
    alert("Welcome to Tim Flucker's Calculator application!")

    welcomeUser();

    // contains 'getUserInput' and 'addUserInput' functions and while loop
    calculateNumbers();
}


/**
 * Alerts and prompts to welcome user and get their name. Requirements 1 - 3
 */
function welcomeUser() {

    // Requirement 2 - prompt vistor for their name
    let username = "";
    while (username == "") {
        username = prompt("What is your username?", "");
        document.getElementById("currentUser").innerHTML = username;
    }
    // Requirement 3 - display users name with alert (also shown on page)
    alert("Welcome " + username + "!")
}

/**
 * Container function to calculate two numbers provided by user.  
 * Initiates automatically on page load, can also be triggered by clicking 'Compute New Numbers' button.
 */
function calculateNumbers() {

    getUserInput();

    // Requirement 7 - add loop to ask users to continue or not
    while (confirm("Do you want to add two more numbers?")) {
        getUserInput();
    }
    alert("Thank you for using this application!")
}

/**
* Prompts user for input and then calls function to add numbers together.
*/
function getUserInput() {
    let validInput = false;
    while (!validInput) {
        // Requirement 4 - Prompt user for two numbers
        input = prompt("Please enter two numbers separated by a comma (example: 2,3).", "");

        // validate that user input is valid and follows the particular format
        try {

            // regex to check for any letters (lowercase or uppercase)
            var regex = /^[a-zA-Z]+$/
            if (input.match(regex)) {
                throw error;
            }

            var num1 = Number(input.split(",")[0].trim());
            var num2 = Number(input.split(",")[1].trim());

            // NaN / empty string checks
            if (num1 == "" || num2 == "" || isNaN(num1) || isNaN(num2)) {
                throw error;
            }

            validInput = true;
        } catch (error) {
            validInput = false;
            console.error(error);
            alert("Provided input was invalid. Please follow the instructions.")
        }
    }

    document.getElementById("firstNumber").innerHTML = num1;
    document.getElementById("secondNumber").innerHTML = num2;

    // function which adds numbers together and alerts user of their result.
    addUserInput(num1, num2);
}

/**
 * Adds two numbers together and then responds with an alert, and updates HTML to match input/output. Requirements 5 + 6
 * @param {Number} num1 
 * @param {Number} num2 
 */
function addUserInput(num1, num2) {

    // Requirement 5 - perform addition operation, return result as an alert message
    let result = num1 + num2;
    alert("The sum of your two numbers is: " + result);

    // Requirement 6 - add conditional logic and return alert based on numeric result
    let message = "";
    if (result > 10) {
        message = "That is a big number!";
    } else {
        message = "That is a small number!";
    }
    alert(message);

    document.getElementById("result").innerHTML = result;
}
