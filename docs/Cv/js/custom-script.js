$(window).load(function() {
    $(".site-loder").delay(2000).fadeOut('slow', function() {
        $('header .header-after').addClass('animated fadeInRight');
        $('header h1').addClass('bounceInLeft');
        $('header .banar a').addClass('bounceInRight');
    });
}); //site-loder


$(function() {

    // call slider
    (function() {
        setInterval('rotateImage()', 4000);
    }());

    // color-picker
    (function() {
        var openColorPicker = $('#open-color-picker'),
            green = $('#green'),
            blue =  $('#blue'),
            defaultColor = $('#default');

        openColorPicker.click(function() {
            $(this).parent('div').toggleClass('color-picker-show-hide');
        });

        green.click(function() {
            $("link[data-color='color']").attr('href', 'Cv/css/green.css') ;
        });

        blue.click(function() {
            $("link[data-color='color']").attr('href', 'Cv/css/blue.css') ;
            // $("script[data-color='color']").attr('src', 'js/blue.js') ;
        });

        defaultColor .click(function() {
            $("link[data-color='color']").attr('href', 'Cv/css/empty.css') ;
        });
    }());


    /*==================== back to top ====================*/
    $('body').prepend('<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>');

    var amountScrolled = 300;

    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    $('a.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });


    /*==================== Scroll ====================*/
    $("nav ul li a[href^='#']").on('click', function(e) {
        
       e.preventDefault();
       var hash = this.hash;
       
       $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 500, function(){
           window.location.hash = hash;
         });
    });


    /*==================== Tabbing ====================*/
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });


    /*==================== about me ====================*/
    $('#about-me .row .col:eq(1), #about-me .download-hire a').css({
        'opacity': 0
    });

    $('#about-me .row .col div:last').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#about-me .row .col:eq(1)').addClass('about-me-effect');
        });
    });

     $('#about-me .download-hire').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#about-me .download-hire a').addClass('fadeInLeft');
            $('#about-me .download-hire a:last').addClass('fadeInRight');
        });
    });


    

    /*==================== experience ====================*/
    $('#experience ul li:first .thumbnail, #experience ul li:eq(1) .thumbnail, #experience ul li:eq(2) .thumbnail, #experience ul li:eq(3) .thumbnail,  #experience ul li:eq(4) .thumbnail,  #experience ul li:eq(5) .thumbnail').css({
        'opacity': 0
    });

    $('#experience ul li:first .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:first .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#experience ul li:eq(1) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(1) .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#experience ul li:eq(2) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(2) .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#experience ul li:eq(3) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(3) .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#experience ul li:eq(4) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(4) .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#experience ul li:eq(5) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(5) .thumbnail').addClass('fadeInBottom');
        });
    });
    

    /*==================== previous-projects ====================*/
    $('#previous-projects').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#previous-projects #client').animateNumber({ number: 950 }, 2000);
            $('#previous-projects #project').animateNumber({ number: 1345 }, 2000);
            $('#previous-projects #exp').animateNumber({ number: 505 }, 2000);
            $('#previous-projects #code').animateNumber({ number: 1659 }, 2000);

        });
    });


    /*==================== education diploma ====================*/
    $('#education-diploma ul li:first .thumbnail, #education-diploma ul li:eq(1) .thumbnail, #education-diploma ul li:eq(2) .thumbnail, #education-diploma ul li:eq(3) .thumbnail,  #education-diploma ul li:eq(4) .thumbnail,  #education-diploma ul li:eq(5) .thumbnail').css({
        'opacity': 0
    });

    $('#education-diploma ul li:first .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:first .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#education-diploma ul li:eq(1) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(1) .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#education-diploma ul li:eq(2) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(2) .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#education-diploma ul li:eq(3) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(3) .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#education-diploma ul li:eq(4) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(4) .thumbnail').addClass('fadeInBottom');
        });
    });
    
    $('#education-diploma ul li:eq(5) .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(5) .thumbnail').addClass('fadeInBottom');
        });
    });
    

    /*==================== skill ====================*/
    $('#skill .row .col').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#circle1').circleProgress({
                value: 0.95,
                size: 220,
                thickness: "5",
                fill: {
                    color: "#f20000"
                },
                emptyFill: "transparent",
                animation: {
                    duration: 4000
                }
            });

            $('#circle2').circleProgress({
                value: 0.85,
                size: 220,
                thickness: "5",
                fill: {
                    color: "#f20000"
                },
                emptyFill: "transparent",
                animation: {
                    duration: 4000
                }
            });

            $('#circle3').circleProgress({
                value: 0.65,
                size: 220,
                thickness: "5",
                fill: {
                    color: "#f20000"
                },
                emptyFill: "transparent",
                animation: {
                    duration: 4000
                }
            });

            $('#circle4').circleProgress({
                value: 0.95,
                size: 220,
                thickness: "5",
                fill: {
                    color: "#f20000"
                },
                emptyFill: "transparent",
                animation: {
                    duration: 4000
                }
            });
        });
    });

    /*==================== portfolio ====================*/
    $('#portfolio .section-header').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#portfolio .section-header h2').addClass('animated fadeInLeft');
            $('#portfolio .section-header p').addClass('section-header-subtitle');
        });
    });

    $('#portfolio .tab-content .tab-pane').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#portfolio .tab-content .tab-pane .col:nth-child(2n+1)').addClass('galleryanimationleft');
            $('#portfolio .tab-content .tab-pane .col:nth-child(2n+2)').addClass('galleryanimationtop');
            $('#portfolio .tab-content .tab-pane .col:nth-child(3)').addClass('galleryanimationright');
        });
    });

    /*==================== pricing ====================*/
    $('#pricing .row .col .thumbnail').css({
        'opacity': 0
    });

    $('#pricing .row .col .thumbnail').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#pricing .row .col .thumbnail').addClass('fadeInBottom');
        });
    });


    /*==================== testimonail ====================*/
    $('#testimonial .before, #testimonial .after').css({
        'opacity': 0
    });

    $('#testimonial .comment').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#testimonial .before').addClass('fadeInLeft');
        });
    });

    $('#testimonial .person').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#testimonial .after').addClass('fadeInRight');
        });
    });


    // testimonial slider
    $(".testimonial-slider").owlCarousel({
        singleItem:true,
        autoPlay: true,
        mouseDrag: false
    }); 



    /*==================== contact ====================*/
    $('#contact ul li:last').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#contact ul li:last').addClass('scaleSubmitButton');
        });
    });


    /*==================== change skill meter color ====================*/
    (function() {
        var green = $('#green'),
            blue =  $('#blue'),
            defaultColor = $('#default');


           
        if (blue.click(function() {
            $('#circle1').circleProgress({
                fill: {
                    color: "#00aeef"
                }
            });

            $('#circle2').circleProgress({
                fill: {
                    color: "#00aeef"
                }
            });

            $('#circle3').circleProgress({
                fill: {
                    color: "#00aeef"
                }
            });

            $('#circle4').circleProgress({
                fill: {
                    color: "#00aeef"
                }
            });
        })) {

        };

        if (green.click(function() {
            $('#circle1').circleProgress({
                fill: {
                    color: "#adc32b"
                }
            });

            $('#circle2').circleProgress({
                fill: {
                    color: "#adc32b"
                }
            });

            $('#circle3').circleProgress({
                fill: {
                    color: "#adc32b"
                }
            });

            $('#circle4').circleProgress({
                fill: {
                    color: "#adc32b"
                }
            });
        }));


        if (defaultColor.click(function() {
            $('#circle1').circleProgress({
                fill: {
                    color: "#f20000"
                }
            });

            $('#circle2').circleProgress({
                fill: {
                    color: "#f20000"
                }
            });

            $('#circle3').circleProgress({
                fill: {
                    color: "#f20000"
                }
            });

            $('#circle4').circleProgress({
                fill: {
                    color: "#f20000"
                }
            });
        }));
    }()); // change circuler color





}); //end of document.ready

// slider
function rotateImage() {
    var currentPhoto = $('#slider .current'),
        nextPhoto = currentPhoto.next();
        if (nextPhoto.length == 0) {
            nextPhoto = $('#slider img:first');
        }
    currentPhoto.removeClass('current').addClass('previous');
    nextPhoto.css({'opacity': '0'}).addClass('current').animate({
        'opacity': '1'
    }, 3000, function() {
        currentPhoto.removeClass('previous');
    });
}

