$(document).ready(() =>{
    if ($(window).scrollTop>300){
      $(".scroll-top").css({
          display: "none"
      })
    }

    $('a').click((e) =>{
        /*e.preventDefault()*/
        if(e.target.id==="link1"){
            $("html, body").animate({
                scrollTop: $("#div2").offset().top - 50

            },900)
        }
        else if (e.target.id==="link2"){
            $("html, body").animate({
                scrollTop:$("#div3").offset().top - 100
            },900)
        }
        else if(e.target.id==="link3"){
            $("html, body").animate({
                scrollTop:$("#div5").offset().top - 50
            },900)
        }

    })

    $('.scroll-top').click(() => {
        $("html, body").animate({
            scrollTop:50
        },900)
    })
    $(window).scroll(function (){
        if ($(window).scrollTop()>300){
            $(".scroll-top").css({
                display: "block"
            })
        } else {
            $(".scroll-top").css({
                display: "none"
            })
        }
    })
})

let animation = anime.timeline({
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
});

animation.add({
    targets: '.two',
    translateY: -30,
})

/*
let animation1 = anime.timeline({
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
});
animation1.add({
    targets: '.img-svg',
    translateY: -40,
    easing: 'linear'
})*/

/*
anime({
    targets: '#img-svg',
    translateX: 150,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
});

anime({
    targets: '.img-svg',
    translateX: 150,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
});*/
