debugger;
let numberOne = prompt('Enter number one','1');
while (isNaN(numberOne) || numberOne ==='' || numberOne === null){
    numberOne = prompt('Enter number one again, please','1')
}

let numberTwo = prompt('Enter number two','2');
while (isNaN(numberTwo) || numberTwo ==='' || numberTwo === null){
    numberTwo = prompt('Enter number one again, please','2')
}

let userAction = prompt('Enter your action','+');
while (userAction !== '+' && userAction !== '-' && userAction !== '*' && userAction !== '/') {
    userAction = prompt('Enter operation again ,please','+')
}

switch (userAction) {
    case '+':
        alert(+numberOne + +numberTwo);
        break;
    case '-':
        alert(numberOne - numberTwo);
        break;
    case '*':
        alert(numberOne * numberTwo);
        break;
    case '/':
        alert(numberOne / numberTwo);
        break;
}