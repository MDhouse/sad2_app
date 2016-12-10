$(document).ready(function () {

    $("#test22-taskSection").on("click", "li > div",function(){
    var _id = $(this).attr("id");
    var id = _id.substring(0, _id.indexOf("Id"));
    var _active = $(this).attr("class").indexOf("active");

    if (_active < 0) {    
        $("#" + id).html("");    
    } else {
        if(id.indexOf("task") > 0) {
            $("#" + id).append("<div class='card' id='task'>");

            $.each(date, function(key){  

                $("#task").append("<div class='card-content'>" +
                                        "<span class='card-title'>" + date[key].name + "</span>" +
                                        "<hr />"+
                                        "<p class='contents'>" + date[key].contentsTask + "</p></div>");      	              
            });

            $("#" + id).append("</div>");
                                                                                           
        } else if(id.indexOf("definition") > 0) {
            $("#" + id).append("<div class='card' id='definition'>");

            $.each(definition, function(key){  

                $("#definition").append("<div class='card-content'>" +
                                        "<span class='card-title'>" + definition[key].name + "</span>" +
                                        "<hr />"+
                                        "<p class='contents'>" + definition[key].contents + "</p></div>");      	              
            });

            $("#" + id).append("</div>");
                                                                                           
        } else if(id.indexOf("solution") > 0) {
            $.each(date, function(key){

                $("#" + id).append("<div class='card'><div class='card-content'>" +
                                "<span class='card-title'>" + date[key].name + "</span>" +
                                "<hr /><p class='contents'>" + date[key].contentsSolution + "</p>" +
                                "<span class='titleDefinition'>Rozwiązanie</span><br/>" +
                                "<div class='sourceCode'>" + date[key].codeSource +"</div>" + 
                                "<span class='titleDefinition'>Wynik</span><br/>" +
                                "<div class='sourceCode center'>"+ date[key].result+"</div>" +	                               
                                "</div></div>");
            });                                                                          
        } else if(id.indexOf("source") > 0) {
            $("#" + id).append("<div class='card'><div class='card-content'><p class='contents' id='source'>");

            $.each(definition, function(key){                 	

                $("#source").append("<p class='sourceLink'>" + definition[key].name + "<br/>" +
                                    "<a class='sourceLink' href='" + definition[key].href + "'>" +
                                    "<span class='definitionCount'>" + definition[key].href + "</span>" + 
                                    "</a>" +
                                    "</p>");                
            });

            $("#" + id).append("</p></div></div>");
        };                  
       
        jqMath.parseMath(document.body);
     };
    
});

    var date =[{
        id: ["1"],
        name: ["Zadanie I"],
        contentsTask: ["Zmienna losowa X przyjmuje wartości −4, 5, 10 odpowiednio z prawdopodobieństwami $$1/2, 2/5, 1/10$$. " +
                       "Naszkicuj wykres rozkładu i oblicz wartość oczekiwana i wariancje zmiennej losowej X."],
        contentsSolution: [""],
        codeSource: [""],
        result: [""] }, {
        id: ["2"],
        name: ["Zadanie II"],
        contentsTask: ["Uczeń rzuca 5 razy piłka do kosza. Prawdopodobieństwo trafienia w jednym rzucie wynosi 0,25. " +
                       "Wyznaczyć rozkład ilości trafień piłka do kosza oraz wartość oczekiwana tej liczby trafień."],
        contentsSolution: [""],
        codeSource: [""],
        result: [""] }, {
        id: ["3"],
        name: ["Zadanie III"],
        contentsTask: ["Rzucamy 300 razy kostka do gry. Za sukces w pojedynczym rzucie uznamy zdarzenia polegajacego na tym, " +
                        "że otrzymano szóstke. Jakie jest prawdopodobieństwo zdarzenia polegajacego na tym, ze liczba sukcesów " +
                        "bedzie różniła sie od 50 o wiecej niz 10?"],
        contentsSolution: [""],
        codeSource: [""],
        result: [""] }, {
        id: ["4"],
        name: ["Zadanie IV"],
        contentsTask: ["W urnie znajdują się kule z numerami 1, 2, 3, 4, 5, 6 w stosunku ilościowym odpowiednio " +
                        "3 : 5 : 4 : 2 : 1 : 3. Losujemy jedna kule i zmienna losowa X odpowiada numerowi na kuli. " +
                        "Obliczyć wartość oczekiwana i wariancje zmiennej losowej X."],
        contentsSolution: [""],
        codeSource: [""],
        result: [""] }];

   
    
    var definition = [{
            id: [1],
            name: ["Zmienna losowa"],
            href: ["http://prac.im.pwr.edu.pl/~agniesz/rachunek_prawd_MAEW104/wyklady/R_Pr_MAEW104_wyklad7_zmienna_los_dystrybuanta.pdf"],
            contents: ["Zmienna losowa to funkcja $$X: Ω→R$$, dla której dla dowolnego borelowskiego zbioru $$B ⊂ R$$ zbiór:<br/>" +
                        "<span class='centerEquation math'>$$\{ ω∶X(ω)∈B\}=\{X ∈B\}∈F$$</span><br/>" +
                        "Innymi słowy, jest to taka funkcja $$X$$ na zbiorze zdarzeń elementarnych o wartościach liczbowych, " + 
                        "dla której określone są prawdopodobieństwa przyjmowania przez $$X$$ wartości z każdego dowolnego zakresu. " +  
                        "W rachunku prawdopodobieństwa interesuje nas rozkład zmiennej losowej, ewentualnie jej charakterystyki liczbowe. "] }, {
            id: [2],
            name: ["Wariancja"],
            href: ["http://www.naukowiec.org/wiedza/statystyka/wariancja_719.html"],
            contents: ["Wariancja jest podstawową miarą zmienności obserwowanych wyników." + 
                        "Wariancja informuje o tym, jak duże jest zróżnicowanie wyników w danym zbiorze wyników." + 
                        "Inaczej mówiąc, czy wyniki są bardziej skoncentrowane wokół średniej, czy są małe różnice pomiędzy średnią" + 
                        "a poszczególnymi wynikami czy może rozproszenie wyników jest duże, duża jest różnica poszczególnych wyników od średniej.<br/>" +
                        "Jeżeli wariancja równa jest 0, to oznacza, że w nasze wyniki są identyczne, np. każdy uczeń dostał 5 z egzaminu." +
                        "Często badacze posługują się terminem wariancja do określenia niemocy analitycznej." +
                        "'Nie ma wariancji' w wynikach, oznacza, że nie ma żadnej różnicy pomiędzy zebranymi wynikami," +
                        "a to oznacza, że statystyk nie ma praktycznie nic do analizowania." +
                        "W jeszcze innym przypadku można spotkać się z prośbą o obliczenie statystyk dla jednej obserwacji." + 
                        "Jeżeli mamy jedną obserwację to nie mamy przecież żadnej zmienności." +
                        "Zmienność dotyczy zbioru danych, a nie jednej obserwacji, dlatego też statystyka to nauka o zbiorach obserwacji," + 
                        "a nie o jednym przypadku. Wariancje obliczamy z następującego wzoru:<br/>" +
                        "<span class='centerEquation math'>$$σ^2 = E(X-m)^2 = ∑_(i=1)^n(x_i-E)^2  p_i$$</span>"]}, {
            id: [3],
            name: ["Wartość oczekiwana"],
            href: ["http://www.statystyka-zadania.pl/wartosc-oczekiwana/"],
            contents: ["Wartość oczekiwana( wartość średnia, wartość przeciętna ) jest wartością spodziewaną w doświadczeniu losowym, " + 
                        "czyli w takim gdzie nie możemy z całkowitą pewnością określić wyniku. " +
                        "Wartość oczekiwana jest najprostszym i najczęściej wykorzystywanym narzędziem służącym do analizy danych. " + 
                        "Zazwyczaj wartość oczekiwaną zapisuje się jako EX lub E(X) gdzie X jest podanym rozkładem zmiennej losowej. " +
                        "Wartość oczekiwana jest wartością spodziewaną, ale rzeczywistość może być inna. " +
                        "Jednakże typując wartość oczekiwaną jako wynik zdarzenia losowego pomylimy się najmniej - tzn. wykonując kilka prób okaże się, " + 
                        "że wartość oczekiwana jest najbardziej zbliżona rzeczywistości, czyli generuje najmniejszy błąd. " +
                        "Do policzenia wartości oczekiwanej używa się następujących wzorów:<br/>" +
                            "<ul class='defineList'><li>$$•\ \ $$rozkład dyskretny</li><br/>" +
                        "<span class='centerEquation math'>$$EX= ∑_(i=1)^n x_i *P(X= x_i )= ∑_(i=1)^n x_i * p_i$$</span>" +
                            "<li>$$•\ \ $$rozkład ciągły</li><br/>" +
                        "<span class='centerEquation math'>$$EX= ∫_Ω x*f(x)dx$$</span>" +
                            "<li>$$•\ \ $$rozkład mieszany</li></ul><br/>" +
                        "<span class='centerEquation math'>$$EX=  ∫_Ω x*f(x)dx + ∑_(i=1)^n x_i *P(X= x_i )$$</span>"] }, {
            id: [4],
            name: ["Prawdopodobieństwo"],
            href: ["http://www.naukowiec.org/wiedza/matematyka/prawdopodobienstwo_834.html"],
            contents: ["Prawdopodobieństwo jest funkcją P określoną na rodzinie zdarzeń o wartościach w zbiorze liczb rzeczywistych, " +
                        "która zdarzeniu A takiemu, że A ∈ Ω (gdzie Ω jest to zbiór zdarzeń elementarnych) przyporządkowuje wartość P(A) " +
                        "spełniającą następujące warunki:" +
                            "<ul class='defineList'><li>$$•\ \ P(A) ≥ 0$$</li><br/>" +
                        "<span class='centerEquation'>Oznacza to, że prawdopodobieństwo jest liczbą dodatnią ewentualnie zerem (nie może być ujemne).</span>" +
                            "<li>$$•\ \  P(Ω) = 1$$</li><br/>" +
                        "<span class='centerEquation'>Oznacza to, że prawdopodobieństwo wystąpienia jednego z wszystkich możliwych zdarzeń wynosi 1 czyli jest pewne.</span>" +
                            "<li>$$•\ \  P(A1 υ A2 υ A3 υ…)=P(A1) + P(A2) + P(A3) +… $$</li></ul><br/>" +
                        "<span class='centerEquation'>gdzie A1, A2, A3, … są zdarzeniami losowymi parami rozłącznymi należącymi do jednej rodziny zdarzeń.</span>" +
                        "Funkcja prawdopodobieństwa posiada następujące własności:" +
                            "<ul class='defineList'><li>$$•\ \ P(∅) = 0$$</li><br/>" +
                                "<span class='centerEquation'>Zbiór wartości funkcji zawiera się w przedziale od $$<0;1>$$</span>" +
                            "<li>$$•\ \ P(A’) = 1-P(A)$$ lub $$P(A’) + P(A) = 1$$</li><br/>" +
                                "<span class='centerEquation'>suma zdarzenia A oraz zdarzenia przeciwnego wynosi jeden</span>" +   
                            "<li>$$•\ \  P(A υ B)=P(A) + P(B) - P(A ∩ B)$$</li></ul><br/>" +
                                "<span class='centerEquation'>Aby obliczyć prawdopodobieństwo sumy zdarzeń A i B należy dodać do " + 
                                "siebie prawdopodobieństwo tych zdarzeń i odjąć od nich ich prawdopodobieństwo ich części wspólnej. " +
                                "Zauważenie zjawiska występowania częstości względnej stało się fundamentem do przyjęcia postulatu, " +
                                "że każdemu zjawisku odpowiada dokładnie jedna liczba będąca teoretycznym odpowiednikiem częstości tego zdarzenia losowego, " + 
                                "co w konsekwencji daje teoretyczną miarę zajścia danego zdarzenia. Wartość prawdopodobieństwa " +
                                "wyznacza się najczęściej badając symetrię układu występowania zdarzeń elementarnych, szukając " +
                                "proporcji lub kształtu doświadczenia losowego, bywa też i tak, że wartość wylicza się na podstawie " + 
                                "wyników otrzymanych z bardzo dużej ilości powtórzonych doświadczeń losowych.</span>"] }];
});