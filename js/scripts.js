$(document).ready(function(){

    var test = [{
        name: ["test 13"],
        href: ["#test13"],
        id_a: ["test13Box"],
        id_drop: ["dropTest13"],
        id_link: ["linkTest13"]
    }];

    $.each(test, function(key){
        $(".testBtnBox").html("<a id='"+ test[key].id_a +"' href='" + test[key].href + "' class='waves-effect waves-light btn-large'>" + test[key].name + "</a>");
        $("#dropdownTest").html("<li class='testLink'><a href='" + test[key].href  + "' id='" + test[key].id_drop + "'>" + test[key].name + "</a></li>");
        $(".nav-mobile").html("<a href='" + test[key].href + "' id='" + test[key].id_link + "'>" + test[key].name + "</a>");
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

function firstLetter(text) {
    return text.charAt(0).toUpperCase() + string.slice(1);
}

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

