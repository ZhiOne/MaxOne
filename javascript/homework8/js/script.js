const fragment = document.createDocumentFragment();
const userInput = document.createElement('input');
document.getElementsByTagName("input").placeholder = 'Price';


fragment.append(userInput);
document.querySelector('script').before(fragment);

const object = document.createElement('div');
const currentPrice = document.createElement('span');
const spanButton = document.createElement('button');

userInput.onfocus = () => {
    userInput.classList.add('focused');
};

spanButton.onclick = () => {
    object.style.display = 'none';
    userInput.value = '';
};

userInput.onblur = () => {
    if (!Number(userInput.value) || userInput.value < 0){
        const errorText = document.createElement('div');
        errorText.innerText = 'Please enter correct price!';
        errorText.classList.add('error');
        userInput.after(errorText);
    }else if(userInput.value >= 0){
        object.appendChild(currentPrice);
        object.appendChild(spanButton);
        object.classList.add('object');
        spanButton.innerText = 'X';
        spanButton.id = 'button';
        currentPrice.id = 'span';
        currentPrice.innerText = `Current price : ${userInput.value}`;
        userInput.classList.add('blur');
        userInput.classList.remove('focused');
        userInput.after(object);
        }
    };

