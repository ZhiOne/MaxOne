//debugger
//
// function change() {
//
//
// const ChangeTheme = document.createElement('button');
// ChangeTheme.classList.add('change-theme-btn');
// ChangeTheme.innerText = "Switch Theme";
// const footer = document.getElementsByTagName('footer');
// footer[0].before(ChangeTheme);
//
//
//
// ChangeTheme.addEventListener('click',()=>{
//          document.body.classList.toggle('bg-color-active');
//     if(localStorage.getItem('Theme') === null){
//         localStorage.setItem('Theme', 'gogi')
//     } else {
//         localStorage.removeItem('Theme')
//     }
//     });
//
//
//
//     document.addEventListener('load', () => {
//         if (localStorage.getItem('Theme') !== null){
//             document.body.classList.toggle('bg-color-active')
//             }})
//
//
//
// }
// change();


let bodyItem = document.getElementsByTagName('body')[0];
const ChangeTheme = document.createElement('button');
ChangeTheme.classList.add('change-theme-btn');
ChangeTheme.innerText = "Switch Theme";
const footer = document.getElementsByTagName('footer');
footer[0].before(ChangeTheme);
function change(){

ChangeTheme.addEventListener('click',()=>{
    bodyItem.classList.toggle('bg-color');
    if (localStorage.getItem('bg-col') === null){
        localStorage.setItem('bg-col','bg-color')
    }else {
        localStorage.removeItem('bg-col')
    }
});
    document.addEventListener('load', () => {
        if (localStorage.getItem('bg-col') !== null) {
        bodyItem.classList.toggle('bg-col')
        }
    })
}
change();