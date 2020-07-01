$(document).ready(function () {

    $(function () {

        //Use smooth scrolling when clicking on navigation
        $('.navbar-nav a').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target[0].id !== "firm") {
                    if (target.length) {

                        $('html,body').animate({
    
                            scrollTop: target.offset().top - 60
    
                        }, 700);
    
                        return false;
                    } //target.length
                }
                else {
                    if (target.length) {

                        $('html,body').animate({
    
                            scrollTop: target.offset().top - 90
    
                        }, 700);
    
                        return false;
                    } //target.length
                }

                
            } //click function
        }); //smooth scrolling

    });

    //closes the navbar toggler after selection. Uses because first section was overlapping with open list before the style was applied
    $(".navbar-nav a").on('click', function(){

        $('.navbar-toggler').click();
    })

    $("#mainQuote").fadeIn(3000);

});