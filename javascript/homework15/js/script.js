$('.logo-bg').on('click',(event)=>{
    $(event.currentTarget).toggleClass('active-slider-top');
    $('.nav-menu-top').slideToggle();
});


$(document).scroll(function () {
    const $scrinHeight = $(window).innerHeight();
    const $scrollPosition = $(window).scrollTop();
    console.log($scrollPosition);


    if ($scrollPosition > $scrinHeight){
        console.log("Братан, ты проскролили всю Жизнь!!!!!");
        if (!$('.scroll-top-btn').length){
            const $scrollTopBtn = $('<button  class="scroll-top-btn"></button>');
            $('script:first').before($scrollTopBtn);
            $scrollTopBtn.click(()=>{
                $('body , html').animate({
                    scrollTop: 0
                },1000);
            })
        }

    }else {
        $('.scroll-top-btn').fadeOut(1500,()=>{
            $('.scroll-top-btn').remove();
        })
    }
});


const $showSectionBtn = $('<button class="show-news-btn">Show Hot News</button>');
$('.gallery').after($showSectionBtn);
$showSectionBtn.click(()=>{
    $('.hot-news-section').slideToggle();
});

