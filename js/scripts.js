
$(document).ready(function(){


    $(".button-collapse").sideNav({
        closeOnClick: true 
    });

     $('.dropdown-button').dropdown({      
        belowOrigin: true, 
        alignment: 'right' 
    });

////Strona głowna rózne warianty
    $("#nav-mobile").on("click", "#linkIndex", function(e){
        Index();
    });
    $("#navi").on("click", "#logo-container", function(e){
        Index();
    });
     $("#naviLarge").on("click", "#linkIndexLarge", function(e){
        Index();
    });

////// Odpalenie testu 13
    $("#testBox").on("click", "#test13Box", function(e){
        Test13();
    });
    $("#dropdownTest").on("click", "#dropTest13", function(e){
        Test13();
    });
    $("#nav-mobile").on("click", "#linkTest13", function(e){
        Test13();
    });
////Pojawienie się przycisku który przesuwa do góry
      $(window).scroll(function(){
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

 

function Index(){
    $("main .section").each(function () {            
            $(this).addClass("hiddendiv");
            //$("#" + e).removeClass("hiddendiv");
            $("#index").removeClass("hiddendiv");         
        });
};

function Test13(){
    $("main .section").each(function () {            
            $(this).addClass("hiddendiv");
            $("#test13").removeClass("hiddendiv");         
        });
}