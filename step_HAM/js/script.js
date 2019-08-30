const searchIcon = document.querySelector('.header-search');
const inputSlider = document.querySelector('.input-slider');
const findBtn = document.querySelector('.find-btn-top');
searchIcon.addEventListener('click',()=>{
    if (inputSlider.hidden) {
        inputSlider.hidden = false;
        findBtn.hidden = false;

    }else {
        inputSlider.hidden = true;
        findBtn.hidden = true
    }
});
//find


let tabNames = $('.tabs-names');
let $serviceContent = $('.container-option > li');


tabNames.on('click', (event) => {
    const eventTarget = $(event.target);
    $('.arrow').removeClass('arrow');
    $('.active-services-tab').removeClass('active-services-tab');
    $('.active-services-content').removeClass('active-services-content');
    eventTarget.addClass('active-services-tab');
    eventTarget.addClass('arrow');

    $serviceContent.each((index ,  element)=>{
        if (event.target.dataset.type  === element.dataset.type){
            $(element).addClass('active-services-content')
        }
    })
});

// tabs


// loadImages();


const loadBtn = document.querySelector('.generate');
let allDivs = document.querySelectorAll('.img-wrapper');
let loadCounter = 1;

loadBtn.addEventListener('click',()=>{
   load()
});
function load() {
    let hiddenDivs = document.querySelectorAll('.all');
    if (hiddenDivs.length === 12) {

        for (let i = hiddenDivs.length; i < hiddenDivs.length +12; i++) {
            allDivs[i].hidden = false;
            allDivs[i].classList.add('all');
        }
    } else {
        let newDiv = document.querySelectorAll('.all');
        for (let i = newDiv.length; i < newDiv.length + 12 ; i++) {
            allDivs[i].hidden = false;
            allDivs[i].classList.add('all');
        }
        loadCounter++;
        if (loadCounter === 2) {
            loadBtn.remove();
        }
    }
}


let filter = document.querySelector('.amazing-work-tabs');
filter.addEventListener('click',(event)=> {debugger
        let againNewDiv = document.querySelectorAll('.all');
        if (event.target.tagName === "LI") {
            document.querySelector('.active-filter').classList.remove('active-filter');
            event.target.classList.add('active-filter');
        }

        if (event.target.dataset.theme === 'all') {
            againNewDiv.forEach((elem)=>{
                elem.classList.remove('hidden')
            });
            againNewDiv.classList.remove('hidden');
        }else{
        againNewDiv.forEach((element)=> {
            element.classList.remove('hidden');
            if (event.target.dataset.theme !== element.dataset.theme) {
                element.classList.add('hidden');
            }
        })
        }
        });






//
// const generateBtn = document.querySelector('#generate');
// const imagesAll = document.querySelectorAll('.all');
// const arrayTheme = [{
//     theme:'Graphic Design',
//     src:'img/graphic%20design/',
//     p:'CREATIVE DESIGN',
//
//
// }, 'web', 'pages', 'wordpress'];
//
//
// const filterPanel = document.querySelectorAll('.filter');
// filterPanel.forEach((element)=>{
//     element.addEventListener('click',(target)=>{
//
//     })
// });
//
//
// generateBtn.addEventListener('click',()=>{
//     generate()
// });
//
// function generate() {
//     function getDivPattern(source, p, span) {
//         const divPlace = document.querySelector('.content-wrapper');
//         divPlace.innerHTML += `<div class="img-wrapper all"><img src=${source} alt=""></div><div class="pop-up-img"><a href="#" class="hover-circles chain"><i class="fas fa-link"></i></a>
// \t\t\t\t\t<a href="#" class="hover-circles"><i class="fas fa-search"></i></a><p>${p}</p><span>${span}</span></div></div>`
//     }
//
//     function loadImages() {
//         if (imagesAll.length) {
//             let i = imagesAll.length / 4;
//             while (i < (imagesAll.length / 4) + 4) {
//                 arrayTheme.forEach(function (item) {
//                     getDivPattern(`${item.src}${i}.jpg`, item.theme, item.hover)
//                 });
//                 i++;
//             }
//         }
//
//     }
//
//     loadImages();
//
//     if (imagesAll.length === 36) {
//         generateBtn.remove()
//     }
// }

//amazing work

const carousel = document.querySelectorAll('.person-list');
const mainContent = document.querySelectorAll('.people-say-content');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

let currentSlide = 0;

function goToSlide(nextSlide) {
    mainContent[currentSlide].classList.remove('people-say-content-active');
    carousel[currentSlide].classList.remove('active-person');

    mainContent[nextSlide].classList.add('people-say-content-active');
    carousel[nextSlide].classList.add('active-person');

    currentSlide = nextSlide;
}

previous.onclick = function() {
    const nextSlide = currentSlide === 0 ? mainContent.length - 1 : currentSlide - 1;
    goToSlide(nextSlide);
};

next.onclick = function() {
    const nextSlide = currentSlide === mainContent.length - 1 ? 0 : currentSlide + 1;
    goToSlide(nextSlide);
};

carousel.forEach((listItem, index) => {listItem.addEventListener('click', function(event) {
    goToSlide(index);
})})

//slider