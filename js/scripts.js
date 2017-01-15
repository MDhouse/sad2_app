//Funkcja, która odsłania section, która zostanie wciśnieta
/*
    Opis
        id - zmienna która przekazuje id selektora, który zostanie odsąnięty    
*/
function transitionToSection(id){
    $("main .section").each(function () {          
            $(this).addClass("hiddendiv");
            $(id).removeClass("hiddendiv");         
        });
};

/*
    Funkcja ładująca dane dla odpowiednich testów
        Zmiennne:
    id - selector jaki jest aktualnie wybrany
    date - polecenia oraz ich rozwiązania
    definition - definicje i żródła
*/
function loadTest(id, date, definition){
    var _renderHtml = [];
    var _id = id.substring(0, id.indexOf("Id"));

        if(_id.indexOf("task") > 0 ) {
            _renderHtml.push("<div class='card' id='task'>");

            $.each(date, function(key){
                if(date[key].test == id.substring(0, 6)){
                    _renderHtml.push("<div class='card-content'>" +
                                            "<span class='card-title'>" + date[key].name + "</span>" +
                                            "<hr />"+
                                            "<p class='contents'>" + date[key].contentsTask + "</p></div>");    
                };
          
            });

            _renderHtml.push("</div>");
            $("#" + _id).html(_renderHtml.join(" "));
                                                                                           
        } else if(_id.indexOf("definition") > 0) {
            _renderHtml.push("<div class='card' id='definition'>");

            $.each(definition, function(key){  
                if(definition[key].test == id.substring(0, 6)){                
                    _renderHtml.push("<div class='card-content'>" +
                                            "<span class='card-title'>" + definition[key].name + "</span>" +
                                            "<hr />"+
                                            "<p class='contents'>" + definition[key].contents + "</p></div>");  	  
                };            
            });

            _renderHtml.push("</div>");

            $("#" + _id).html(_renderHtml.join(" "));
                                                                                           
        } else if(_id.indexOf("solution") > 0) {
            $.each(date, function(key){
                if(date[key].test == id.substring(0, 6)){                
                    _renderHtml.push("<div class='card'><div class='card-content'>" +
                                    "<span class='card-title'>" + date[key].name + "</span>" +
                                    "<hr /><p class='contents'>" + date[key].contentsSolution + "</p>" +
                                    "<span class='titleDefinition'>Rozwiązanie</span><br/>" +
                                    "<div class='sourceCode'>" + date[key].codeSource +"</div>" + 
                                    "<span class='titleDefinition'>Wynik</span><br/>" +
                                    "<div class='sourceCode center'>"+ date[key].result+"</div>" +	   
                                    "<span class='titleDefinition'>Podsumowanie</span>" +
                                    "<hr /><p class='contents'>" + date[key].conclusion + "</p>" +    
                                    "</div></div>");
                };
            });        

            $("#" + _id).html(_renderHtml.join(" "));

        } else if(_id.indexOf("source") > 0) {
            _renderHtml.push("<div class='card'><div class='card-content'><p class='contents' id='source'>");
          
            $.each(definition, function(key){    
                if(definition[key].test == id.substring(0, 6)){                             	
                    _renderHtml.push("<span class='sourceLink'>" + definition[key].name + "<br/>" +
                                        "<a class='sourceLink' href='" + definition[key].href + "'>" +
                                        "<span class='definitionCount'>" + definition[key].href + "</span>" + 
                                        "</a>" +
                                        "</span><br/>");          
                };      
            });

            _renderHtml.push("</p></div></div>");

            $("#" + _id).html(_renderHtml.join(" "));
        };                  
       
        jqMath.parseMath(document.body);
};