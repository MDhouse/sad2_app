$(document).ready(function(){
   var id;

   $("#test19-tasksMathBox").on("click", "div", function(){
       var _id = $(this).attr("id");  
       var _active = $(this).attr("class").indexOf("active");
       var _package= tasksCalculations; 
       id = _id.substring(0, _id.indexOf("Id"));
       if(_active > 0){
           $("#" + id).html("");
       } else {
          tasks(id, _package);
           jqMath.parseMath(document.body);
       }
   }); 
    $("#test19-tasksGrafBox").on("click", "div", function(){
       var _id = $(this).attr("id");  
       var _active = $(this).attr("class").indexOf("active");             
       var _package =  tasksChart;  
       id = _id.substring(0, _id.indexOf("Id"));
       if(_active > 0){
           $("#" + id).html("");
       } else {
          tasks(id, _package);
           jqMath.parseMath(document.body);
       }
   }); 
});

function tasks(id, package) {    
    $.each(package, function(key, value){
       $("#"+ id).append("<div class='card'><div class='card-content'>" +
						 "<span class='card-title'>" + package[key].number + "</span>" +
						 "<hr /><p class='contents'>" + package[key].contents + "</p></div></div>")
   }); 
};

   var tasksChart = [{
       id: ["1"],
       number: ["Zadanie I"],
       contents: ["Naszkicować wykres gęstości zmiennej losowej $$X$$"]
   }, {
       id: ["2"],
       number: ["Zadanie II"],
       contents: ["Naszkicować wykres dystrybuanty zmiennej losowej $$X$$"]
   }, {
       id: ["3"],
       number: ["Zadanie III"],
       contents: ["Zaznaczyć na wykresie gęstości zmiennej losowej $$X$$ prawdopodobieństwo <br/>"+
                  "Pr(X ∈ (11.48, 11.96))"]
   }, {
       id: ["4"],
       number: ["Zadanie IV"],
       contents: ["Zaznaczyć na wykresie gęstości zmiennej losowej $$X$$ prawdopodobieństwo <br/>"+
                  "Pr(X ∈ (10.45, 12.73))"]
   }];


   var tasksCalculations = [{
       id: ["1"],
       number: ["Zadanie I"],
       contents: ["Obliczyć wartość oczekiwaną zmiennej losowej o gęstości $$fx(·)$$"]
   },{
       id: ["2"],
       number: ["Zadanie II"],
       contents: ["Obliczyć wariancję zmiennej losowej o gęstości $$fx(·)$$"]
   },{
       id: ["3"],
       number: ["Zadanie III"],
       contents: ["Znaleźć gęstość zmiennej losowej $Y = √^3X$"]
   },{
       id: ["4"],
       number: ["Zadanie IV"],
       contents: ["Obliczyć $$EY$$ i sprawdzić, czy $$(EY)^3\ \>\ \EX$$ (nierówność Jensena)"]
   }];