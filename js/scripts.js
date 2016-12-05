$(document).ready(function(){

    var test = [{
        name: ["test 13"],
        href: ["#test13"],
        id_a: ["test13Box"],
        id_drop: ["dropTest13"],
        id_link: ["linkTest13"],
    },{
        name: ["test 19"],
        href: ["#test19"],
        id_a: ["test19Box"],
        id_drop: ["dropTest19"],
        id_link: ["linkTest19"],
    }];

    $.each(test, function(key, value){
        $(".testBtnBox").append("<a id='"+ test[key].id_a +"' href='" + test[key].href + "' class='waves-effect waves-light btn-large'>" + test[key].name + "</a>");
        $("#dropdownTest").append("<li class='testLink'><a href='" + test[key].href  + "' id='" + test[key].id_drop + "'>" + test[key].name + "</a></li>");
        $(".side-nav").append("<a href='" + test[key].href + "' id='" + test[key].id_link + "'>" + test[key].name + "</a>");
    });



    $("#navi").on("click", "#logo-container", function(e){
        transitionToSection("#index");
    });
     $("#naviLarge").on("click", "#linkIndexLarge", function(e){
        transitionToSection("#index");
    });

    $(".testBtnBox").on("click", "a", function(e){
        var _id = $(this).attr("href");
        transitionToSection(_id);
    });

    $("#dropdownTest").on("click", "a", function(e){
        var _id = $(this).attr("href");
        transitionToSection(_id);
    });

    $(".side-nav").on("click", "a", function(e){
        var _id = $(this).attr("href");
        if (_id.length < 10){
            transitionToSection(_id);
        }
    });
});

function transitionToSection(id){
    $("main .section").each(function () {          
            $(this).addClass("hiddendiv");
            $(id).removeClass("hiddendiv");         
        });
};