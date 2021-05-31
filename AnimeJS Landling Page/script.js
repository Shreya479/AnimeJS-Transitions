
 $(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 10){
            $("header").addClass("sticky");
        }
        else{
           $("header").removeClass("sticky");
        }
    });
    anime({
        targets : '.intro-slide',
        scaleY: [1,0],
        duration: 2000,
        easing: 'easeInOutSine',
    });
    anime({
        targets : '.topbar',
        translateY: [-50,0],
        opacity: [0,1],
        duration: 3000,
        delay: 1000,
        easing: 'easeInOutExpo',
    });
    anime({
        targets : '.banner',
        opacity: [0,1],
        duration: 5000,
        delay: 2000,
        easing: 'easeInOutExpo',
    });
    anime({
        targets : '.banner',
        opacity: [0,1],
        duration: 5000,
        delay: 2000,
        easing: 'easeInOutExpo',
    });
    anime({
        targets : '.logo',
        opacity: {
            value: [0,1],
            duration: 2000,
            delay: 4000,
        },
        translateY: {
            value: [250,0],
            duration: 2000,
            delay: 6000,
        },
        delay: 4500,
        easing: 'easeInOutExpo',
    });
    anime({
        targets : '.left li',
        translateX: [200, 0],
        opacity: [0,1],
        duration: 3000,
        delay: anime.stagger(200, {start: 7500, from: 'last'}),
        easing: 'easeInOutExpo',
    });
    anime({
        targets : '.right li',
        translateX: [-200, 0],
        opacity: [0,1],
        duration: 3000,
        delay: anime.stagger(200, {start: 7500, from: 'first'}),
        easing: 'easeInOutExpo',
    });
    anime({
        targets : '.banner-text h6',
        translateY: [50,0],
        opacity: [0,1],
        duration: 2000,
        delay: 9000,
        letterSpacing: ['15px', '6px'],
        easing: 'easeInOutExpo',
    });
    anime({
        targets : '.banner-text h1',
        translateY: [50,0],
        opacity: [0,1],
        duration: 2000,
        delay: 10000,
        letterSpacing: ['15px', '6px'],
        easing: 'easeInOutExpo',
    });
    anime({
        targets : '.scrolldown',
        translateY: [-50,0],
        opacity: [0,1],
        loop: true,
        duration: 2000,
    });
    anime({
        targets : '.slide-thumb',
        translateY: [250,0],
        opacity: [0,1],
        duration: 2000,
        delay: 11000,
        easing: easeInOutExpo,
    });
});