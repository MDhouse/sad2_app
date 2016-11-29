$(document).ready(function(){
    var button = [{
        name: ["test 13"],
        id: ["test13"],
        href: ["#test13"]
    }];

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
    $(".testBtnBox").on("click", "#test13Box", function(e){
        Test13();
    });
    $("#dropdownTest").on("click", "#dropTest13", function(e){
        Test13();
    });
    $("#nav-mobile").on("click", "#linkTest13", function(e){
        Test13();
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

