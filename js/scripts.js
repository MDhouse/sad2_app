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
    },{
        name: ["test 22"],
        href: ["#test22"],
        id_a: ["test22Box"],
        id_drop: ["dropTest22"],
        id_link: ["linkTest22"],
    },{
        name: ["test 16"],
        href: ["#test16"],
        id_a: ["test16Box"],
        id_drop: ["dropTest16"],
        id_link: ["linkTest16"],
    }];

    $.each(test, function(key, value){
        $(".testBtnBox").append("<a id='"+ test[key].id_a +"' href='" + test[key].href + "' class='waves-effect waves-light btn-large'>" + test[key].name + "</a>");
        $("#dropdownTest").append("<li class='testLink'><a href='" + test[key].href  + "' id='" + test[key].id_drop + "'>" + test[key].name + "</a></li>");
        $(".side-nav").append("<a href='" + test[key].href + "' id='" + test[key].id_link + "'>" + test[key].name + "</a>");
    });

    var i = test.length;
    var _id = test[i-1].id_a;

    $("#" + _id).append("<i class='mdi mdi-checkbox-marked-circle-outline right'></i>");
    //$("#" + _id).addClass("tooltipped").attr("data-position", "bottom").attr("data-delay", "50").attr("data-tooltip", "Najnowszy test");
    $(".mdi-checkbox-marked-circle-outline").attr("style", "color:yellow");

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