$('.blogsSlide').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 5000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.teamSlide').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 5000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1250:{
            items:3
        }
    }
})
$('.clientSlide').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1250:{
            items:3
        }
    }
})

$('.testimonial .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    autoplayTimeout: 5000,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});
$('.controls.right').click(function() {
    $(this).closest("section").find('.owl-carousel').trigger('next.owl.carousel');
})
$('.controls.left').click(function() {
    $(this).closest("section").find('.owl-carousel').trigger('prev.owl.carousel');
})
$(document).on('click', '.servicesPageList .servicesList', function(){
    if($(window).width() > 991){
        var html = $(this)[0].outerHTML
        $('.servicesPageList .servicesList').removeClass("d-none");
        $(this).addClass("d-none");
        $(".currentServiceView").html(html);
        $('html, body').animate({scrollTop: $(".currentServiceView").offset().top - 120});
    }
});
$(document).on('click', '.servicesView .itemCaption > a.btn', function(){
    var index = $(this).closest(".item").index() + 1;
    localStorage.setItem("service", index)
});
$(document).on('click', '.moreSocial', function(){
    $(this).closest(".socialLinks").find(".more").slideToggle();
    $(this).toggleClass("close");
});
$(window).scroll(function(){
    $(".socialLinks .more").slideUp();
    $(".moreSocial").removeClass("close");
});