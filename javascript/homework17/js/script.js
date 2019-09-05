const userInput = +prompt('Enter your number','5');

if (userInput >= 0) {
    function fibonachi(userInput) {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= userInput; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}else {
    function fibonachi(userInput){
        let a = -1;
        let b = -1;
        for (let i = -3;i >= userInput; i--){
            let c = a + b;
            a = b;
            b = c;
        }
        return b
    }
}



alert(fibonachi(userInput));

