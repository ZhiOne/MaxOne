const userInput = +prompt('Enter your number','5');

function factorial(userInput) {
    return (userInput !== 1) ? userInput * factorial(userInput - 1) : 1
}

alert(factorial(userInput));