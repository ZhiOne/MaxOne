debugger;
function showHide (){
    const eyeOpen = document.querySelector('.fa-eye');
    const eyeClose = document.querySelector('.fa-eye-slash');

    eyeOpen.addEventListener('click', () =>{
        if (eyeOpen.classList.contains('fa-eye')) {
        eyeOpen.classList.replace('fa-eye', 'fa-eye-slash');
        document.getElementsByClassName('user-input')[0].type = 'text';
        }else{
            eyeOpen.classList.replace('fa-eye-slash', 'fa-eye');
            document.getElementsByClassName('user-input')[0].type = 'password';
        }
    });
    eyeClose.addEventListener('click', () =>{
        if (eyeClose.classList.contains('fa-eye-slash')) {
            eyeClose.classList.replace('fa-eye-slash', 'fa-eye');
            document.getElementsByClassName('user-input')[1].type = 'password';
        }else{
            eyeClose.classList.replace('fa-eye', 'fa-eye-slash');
            document.getElementsByClassName('user-input')[1].type = 'text';
        }
    });
    const submitBtn = document.getElementsByClassName('btn');
    const userInput = document.getElementsByTagName('input');

    submitBtn[0].addEventListener('click', (event) => {
        event.preventDefault();
        if (userInput[0].value === userInput[1].value) {
            alert('You are welcome');
        }else{
        const errorText = document.querySelector('#text') || document.createElement('div');
        errorText.id = 'text';
        const text = document.querySelector('#p-red-text') || document.createElement('p');
        text.id = 'p-red-text';
        text.innerText = 'Нужно ввести одинаковые значения';
        text.classList.add('red-color');
        errorText.appendChild(text);
        userInput[1].after(errorText);

    }
    });
}

showHide();





