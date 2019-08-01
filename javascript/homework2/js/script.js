
let userNumber = +prompt('Enter your Number which divides by 5','5');
    if (isNaN(userNumber)) {
        alert('Type your number, not a string:)');
    }
    else if(userNumber < 5){
        alert('Sorry, no numbers')
    }
    else {
        for(let i = 0; i <= userNumber;i++){
            if (i % 5 === 0) {
                console.log(i);
            }
        }
    }