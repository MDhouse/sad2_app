$(document).ready( function(){
    $(".button-collapse").sideNav({
        closeOnClick: true 
    });

     $('.dropdown-button').dropdown({      
        belowOrigin: true, 
        alignment: 'right' 
    });

    //////////Zmienne z danymi//////////////////
    ////Pojawienie się przycisku który przesuwa do góry
    $(window).scroll( function(){
        if ($(this).scrollTop() > 100) {
            $('.upTop').fadeIn();
        } else {
            $('.upTop').fadeOut();
            }
        }); 

    $('.upTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
});