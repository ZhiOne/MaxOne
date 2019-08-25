
let tabTitle = $('.tabs-title');
console.log(tabTitle);
let $tabContent = $('.tabs-content > li');
console.log($tabContent);
tabTitle.on('click', (event) => {
    const eventTarget = $(event.target);
    $('.active-tab').removeClass('active-tab');
    $('.active-p').removeClass('active-p');
    eventTarget.addClass('active-tab');

    $tabContent.each((index , element)=>{
        if (event.target.dataset.type  === element.dataset.type){
            $(element).addClass('active-p');
        }
    })
});
