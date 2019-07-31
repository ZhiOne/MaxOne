debugger;
let userName = prompt('Enter your name, please','Max');
let userAge = +prompt('Enter your age, please','18');
if (userAge < 18){
    alert('You are not allowed to visit this website')
}
     else if(userAge >= 23){
        alert('Welcome,' + userName);
     }
     else if (confirm('Are you sure you want to continue?')){
         alert('Welcome,' + userName)
}
     else {
         alert('You are not allowed to visit this website.');
}
