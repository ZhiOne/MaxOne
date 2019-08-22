
// const stop = (document.createElement('button').innerText = 'Stop').addEventListener('click',()=>{
//     clearTimeout(autoChange)
// });
// const resume = (document.createElement('button').innerText = "Resume").addEventListener('click',()=>{
//
// });
//const wrapper = document.createElement('div');
// wrapper.append(stop,resume);
//const add =  document.getElementsByTagName('div');
// add.after(wrapper);
// function abc() {
//         pics[number].classList.add('active');
//         if (pics[number].classList.contains('active')) {
//             pics[number].classList.remove('active')
//         }
//
//         setInterval(abc,10000)
//
//    currentPic = 0;
//
//         currentPic = (currentPic + 1) % pics.length
//
//     }
// abc()
// let timer = setInterval(abc,10000);

const pics = document.querySelectorAll('.image-to-show');
const wrapper = document.querySelector('.image-wrapper');
let currentPicture = 0;
let intervalOfFunction = setInterval(imageToShow,2000);

function imageToShow() {
    pics[currentPicture].classList.remove('current-img');
    currentPicture = (currentPicture + 1) % pics.length;
    pics[currentPicture].classList.add('current-img');

}

const stopBtn = document.createElement('button');
const resumeBtn = document.createElement('button');
stopBtn.classList.add('btn');
stopBtn.innerText = 'Stop';
resumeBtn.classList.add('btn');
resumeBtn.innerText = 'Resume';
const btnWrapper = document.createElement('div');
btnWrapper.classList.add('btn-wrapper');
btnWrapper.appendChild(stopBtn);
btnWrapper.appendChild(resumeBtn);
const pullWrapper = document.getElementsByTagName('script');
pullWrapper[0].before(btnWrapper);




stopBtn.addEventListener('click',()=>{
    clearInterval(intervalOfFunction);
});

resumeBtn.addEventListener('click',()=>{
   intervalOfFunction = setInterval(imageToShow,2000);
});