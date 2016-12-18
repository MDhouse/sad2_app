$(document).ready(function(){
  
 $("#test19-task").on("click", "li > div", function (){
     var _idT = $(this).attr("id");
     var idT = _idT.substring(0, _idT.indexOf("Id"));
     var _activeT = $(this).attr("class").indexOf("active");
     var packageT;

     if(idT.indexOf("Math") > 0) {
         packageT = tasksCalculations;
     } else {
         packageT = tasksChart;
     }  

     if (_activeT < 0) {
         $("#" + idT).html("");
     } else {
                //Ładowanie Danych do clasy Card
        $.each(packageT, function(key){
            $("#" + idT).append("<div class='card'><div class='card-content'>" +
			        		   "<span class='card-title'>" + packageT[key].number + "</span>" +
						       "<hr /><p class='contents'>" + packageT[key].contents + "</p>"+  
                               "</div></div>");
        });
        jqMath.parseMath(document.body);
     };
 });

 $("#test19-solution").on("click", "li > div", function (){
     var _idS = $(this).attr("id");
     var idS = _idS.substring(0, _idS.indexOf("Id"));
     var _activeS = $(this).attr("class").indexOf("active");
     var packageS;

     if(idS.indexOf("Math") > 0) {
         packageS = solutionMathBox;
     } else {
         packageS = solutionGrafBox;
     }  

     if (_activeS < 0) {
         $("#" + idS).html("");
     } else {

                //Ładowanie Danych do clasy Card
        $.each(packageS, function(key){

            $("#" + idS).append("<div class='card'><div class='card-content'>" +
			        		   "<span class='card-title'>" + packageS[key].name + "</span>" +
						       "<hr /><p class='contents'>" + packageS[key].contents + "</p>" +
                               "<span class='titleDefinition'>Rozwiązanie</span><br/>" +
							   "<div class='sourceCode'>" + packageS[key].codeSource +"</div>" + 
                               "<span class='titleDefinition'>Wynik</span><br/>" +
                               "<div class='sourceCode center'>"+ packageS[key].result+"</div>" +	                               
                               "</div></div>");
        });
        jqMath.parseMath(document.body);
     };
 });


$("#test19-taskSection").on("click", "li > div",function(){
    var _id = $(this).attr("id");
    var id = _id.substring(0, _id.indexOf("Id"));
    var _active = $(this).attr("class").indexOf("active");

    if (_active < 0) {
        if(id != "test19-task" && id != "test19-solution"){
            $("#" + id).html("");
        }        
    } else {
         if(id.indexOf("definition") > 0) {
            $("#" + id).append("<div class='card' id='definition'>");

            $.each(definition, function(key){  

                $("#definition").append("<div class='card-content'>" +
                                        "<span class='card-title'>" + definition[key].name + "</span>" +
                                        "<hr />"+
                                        "<p class='contents'>" + definition[key].contents + "</p></div>");      	              
            });

            $("#" + id).append("</div>");
                                                                                           
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
        } ;
                    
       
        jqMath.parseMath(document.body);
     };
    
});

                                          

var solutionMathBox = [{
    id: [1],
    name: ["Zadanie I"],
    contents: ["Wykonanie zadania i przedstawienie wyniku jest dość trywialne. " + 
                "Oblicznie wartości oczekiwanej zmiennej losowej wykorzystując środowisko R wykonujemy przy pomocy funkcji $$integrate$$."],
    codeSource: ["> c <- 1/27388.75<br/>"+
                    "> f1 <- function(x){ c *(x^3 + 18*x^2 + 108*x + 225)}<br/>"+
                    "> fm1 <- function(x){ x *f1(x)}<br/>"+
                    "> m1 <- integrate(fm1, 9, 14)$value<br/>"+
                    "> m1<br/>"],
    result: ["$$11.85085$$"]
},{
    id: [2],
    name: ["Zadanie II"],
    contents: ["Wykonanie zadania i przedstawienie wyniku jest dość trywialne. " + 
                "Oblicznie wariancji zmiennej losowej wykorzystując środowisko R wykonujemy przy pomocy funkcji $$integrate$$."],
    codeSource: ["> c <- 1/27388.75<br/>"+
                    "> f1 <- function(x){ c *(x^3 + 18*x^2 + 108*x + 225)}<br/>"+
                    "> fm1 <- function(x){ x *f1(x)}<br/>"+
                    "> m1 <- integrate(fm1, 9, 14)$value<br/>"+
                    "> fm2 <- function(x){x^2 * f1(x)}<br/>"+
                    "> EX <- m1<br/>"+
                    "> m2 <- integrate(fm2, 3, 14)$value<br/>"+
                    "> EX2 <- m2<br/>"+
                    "> EX2 - EX^2<br/>"],
    result: ["$$21.26287$$"]
},{
    id: [3],
    name: ["Zadanie III"],
    contents: ["Gęstość zmiennej losowej $$Y$$ należy obliczyć na podstawie dystrybuanty zmieennej losowej $$X$$. " +
                "Poniżej znajdują się oblicznia oraz ich wynik. Obliczenia są typowo matematyczne i nie zostały wykoanne przy pomocy R."],
    codeSource: ["$$f(x) =  c(x^4/4 + 6x^3 + 54x^2 + 225x - 17334)$$<br/>" +
                    "$$f(y^3) =  c((y^3)^4/4 + 6(y^3)^3 + 54(y^3)^2 + 225(y^3) - 17334)$$<br/>" +
                    "$$f(y^3) =  c(y^12/4 + 6y^9 + 54y^6 + 225y^3 - 17334)$$<br/>"],
    result: ["$$fy(Y) = {(3y^11 + 36y^8 + 324y^5 + 675y^2 - 17334)}/27388.75$$"]
},{
    id: [4],
    name: ["Zadanie IV"],
    contents: ["Wykonanie zadania i przedstawienie wyniku jest dość trywialne. " + 
                "Sprawdzenie czy $$EY$$ jest nierównością Jensena wykorzystując środowisko R wykonujemy przy pomocy funkcji $$integrate$$." ],   
    codeSource: ["> fy <- function(y) { c*(3*y^11 + 36*y^8 +234*y^5 + 675*y^2-17334)}<br/>" +
                    "> y1 <- 9^(1/3)<br/>" +
                    "> y2 <- 14^(1/3)<br/>" +
                    "> EY <- integrate(function(y){y*fy(y), y1,y2})$value<br/>" +
                    "> EY^3<br/>" +
                    "> EY^3 > EX"],
    result: ["[1] 2.35039<br/>" +
                "[1] FALSE"]
}];

var solutionGrafBox = [{
    id: [1],
    name: ["Zadanie I"],
    contents: ["Przedstawienie na wykresie gęstości zmiennej losowej nie jest problemem, a w środowisku R jest to dość proste."],
    codeSource: ["> png('wykres01.png', width = 640, height = 480)<br/>" +
                    "> curve(f1, xlim=c(9,14), col.lab='red')<br/>" +
                    "> title(main='Gęstość Zmiennej losowej')<br/>" +
                    "> dev.off()"],
    result: ["<img class='responsive-img' src='image/wykres01.png'/>"]

},{
    id: [2],
    name: ["Zadanie II"],
    contents: ["Przedstawienie na wykresie dystrybuanty zmiennej losowej nie jest problemem, a w środowisku R jest to dość proste.<br/>" +
    "Wartość dystrybuanta została obliczona na podstawie funkcji:<br/>" +
    "<span class='centerEquation'>$$fx(x) =  c(x^4/4 + 6x^3 + 54x^2 + 225x - 17334)$$</span>"],
    codeSource: [""],
    result: ["<img class='responsive-img' src='image/wykres02.png'/>"]
},{
    id: [3],
    name: ["Zadanie III"],
    contents: ["Przedstawienie na wykresie gęstości zmiennej losowej $$X$$ z prawdopodobieństwem $$Pr(X ∈ (11.48, 11.96))$$ nie jest problemem, a w środowisku R jest to dość proste."],
    codeSource: ["> png('wykres03.png', width = 640, height = 480)<br/>" +
                    "> curve(f1, xlim=c(9,14), col.lab='red')<br/>" +
                    "> x <- c(11.48, seq(11.48, 11.96, 0.01), 11.96)<br/>" +
                    "> y <- c(0, f1(seq(11.48, 11.96, 0.01)), 0)<br/>" +
                    "> title(main='Gęstość Zmiennej losowej z prawdopodobieństwem')<br/>" +
                    "> polygon(x, y, col='red')<br/>" +
                    "> dev.off()"],
    result: ["<img class='responsive-img' src='image/wykres03.png'/>"]
},{
    id: [4],
    name: ["Zadanie IV"],
    contents: ["Przedstawienie na wykresie dystrybuanty zmiennej losowej $$X$$ z prawdopodobieństwem $$Pr(X ∈ (10.45, 12.73))$$ nie jest problemem, a w środowisku R jest to dość proste."],
    codeSource: ["> png('wykres04.png', width = 640, height = 480)<br/>" +
                    "> curve(f2, xlim=c(9,14), col.lab='red')<br/>" +
                    "> title(main='Dystrybuanta zmiennej losowej z prawdopodobieństwem')<br/>" +
                    "> lines(c(10.45,10.45),c(f2(10.45), f2(12.73)), col='red')<br/>" +
                    "> dev.off()"],
    result: ["<img class='responsive-img' src='image/wykres04.png'/>"]
}];

var taskBox = [{
    id: [1],
    name: ["zadania matematyczne"],
    id_head: ["test19-taskMathId"],
    id_body: ["test19-taskMath"]},{
    id: [2],
    name: ["zadania graficzne"],
    id_head: ["test19-taskGrafId"],
    id_body: ["test19-taskGraf"]}];
										
var definition = [{
    id: [1],
    name: ["Zmienna losowa"],
    href: ["http://prac.im.pwr.edu.pl/~agniesz/rachunek_prawd_MAEW104/wyklady/R_Pr_MAEW104_wyklad7_zmienna_los_dystrybuanta.pdf"],
    contents: ["Zmienna losowa to funkcja $$X: Ω→R$$, dla której dla dowolnego borelowskiego zbioru $$B ⊂ R$$ zbiór:<br/>" +
                "<span class='centerEquation math'>$$\{ ω∶X(ω)∈B\}=\{X ∈B\}∈F$$</span><br/>" +
                "Innymi słowy, jest to taka funkcja $$X$$ na zbiorze zdarzeń elementarnych o wartościach liczbowych, " + 
                "dla której określone są prawdopodobieństwa przyjmowania przez $$X$$ wartości z każdego dowolnego zakresu. " +  
                "W rachunku prawdopodobieństwa interesuje nas rozkład zmiennej losowej, ewentualnie jej charakterystyki liczbowe. "]}, {
    id: [2],
    name: ["Funkcja gęstości"],
    href: ["http://home.agh.edu.pl/~adan/wyklady/rpis3.pdf"],
    contents: ["Funkcją gęstości prawdopodobieństwa zmiennej losowej typu ciągłego nazywamy funkcję <span class='math'>$$f(x)$$</span>, " + 
                "określoną na zbiorze liczb rzeczywistych, taką że: <span class='math'>$$f(x)≥0 ⋀ a ≥ b$$</span> zachodzi: " +
                "<span class='centerEquation math'>$$∫_a^b f(x)dx=P(a&lt;X&lt;b)$$</span><br/>"+
                "Własności funkcji gęstości prawdopodobieństw:<br/>" +
                "<ul class='defineList'><li>$$•\ \ $$Funkcja gęstości jest nieujemna, <span class='math'>$$f ≥0$$</span></li>" +
                "<li>$$•\ \ $$W punktach, w których f jest ciągła zachodzi równość: <span class='math'>$$f(x)= F^' (x)$$</span>, funkcja gęstości jest pochodną dystrybuanty</li>" +
                "<li>$$•\ \ $$Każda funkcja <span class='math'>$$f$$</span>, będąca gęstością prawdopodobieństwa, " +
                "wyznacza jednoznacznie pewną dystrybuantę, a tym samym rozkład prawdopodobieństwa pewnej zmiennej.</li></ul>"]}, {
    id: [3],
    name: ["Dystrybuanta"],
    href: ["http://www.statystyka-zadania.pl/dystrybuanta/"],
    contents: ["Dystrybuanta rozkładu $$X$$ w punkcie <span class='math'>$$t$$</span> to prawdopodobieństwo," + 
                "że zajdzie zdarzenie mniejsze bądź równe <span class='math'>$$t$$</span>, czyli:<br/>" +
                "<span class='centerEquation math'>$$f(t)=P(X ≤t)$$</span>" +
                "Własności dystrybuanty:<br/>" +
                    "<ul class='defineList'><li>$$•\ \ $$<span class='math'>$$f(x)∈[0,1]$$</span> - dystrybuanta przyjmuje wartości z przedziału $$[0,1]$$." + 
                "Jest to prosty fakt, wynikający z tego, że najmniejszą szansą na zajście zdarzenia jest $$0%$$(w ogóle nie zajdzie), " + 
                "a największą 100%(zajdzie na pewno)</li>" +
                    "<li>$$•\ \ $$<span class='math'>$$f(x)$$</span> – jest funkcją malejącą, czyli jeżeli weźmiemy dwa punkty " + 
                "<span class='math'>$$t_1$$</span> i <span class='math'>$$t_2$$</span>, to jeżeli <span class='math'>$$t_1 < t_2$$</span> " +
                "to <span class='math'>$$f(t_1) ≤ f(t_2)$$</span></li>" +
                    "<li>$$•\ \ $$<span class='math'>$$f(x)$$</span> prawostronnie ciągła, czyli jeżeli na wykresie wystąpi nieciągłość typu skok, " + 
                "to otwarta kropka będzie należeć do linii po lewej stronie, a zamalowana po prawej stronie</li>" +
                    "<li>$$•\ \ $$<span class='math'>$${lim}↙(n→ -∞)⁡ F_X (t) = 0$$</span></li>" + 
                    "<li>$$•\ \ $$<span class='math'>$${lim}↙(n→ ∞)⁡ F_X (t) = 1$$</span></li></ul>"]}, {
    id: [4],
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
    id: [5],
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
                "<span class='centerEquation math'>$$EX=  ∫_Ω x*f(x)dx + ∑_(i=1)^n x_i *P(X= x_i )$$</span>"]}, {
    id: [6],
    name: ["Nierówność Jensena"],
    href: ["http://wm.staszic.waw.pl/materialy/5wm/wyklady/dowod-jensena.pdf"],
    contents: ["Nierówność Jensena. Jeżeli <span class='math'>$$f$$</span>  jest funkcją wypukłą w pewnym przedziale, to dla dowolnych " +
                "liczb <span class='math'>$$x_1, x_2, ..., x_n, (x ≥ 2)$$</span>  z tego przedziału oraz liczb nieujemnych " +
                "<span class='math'>$$α_1, α_2, ..., α_n$$</span> takich, że <span class='math'>$$α_1 + α_2 + ... + α_n = 1$$</span> zachodzi nierówność:<br/>" +
                "<span class='centerEquation math'>$$f(∑↙{i = 1}↖{n} α_i \ \ f_i) ≤ ∑↙{i = 1}↖{n} α_i \ \ f(x_i)$$</span>" ]},
                ];

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
                  "<span class='centerEquation math'>$$Pr(X ∈ (11.48, 11.96))$$</span>"]
   }, {
       id: ["4"],
       number: ["Zadanie IV"],
       contents: ["Zaznaczyć na wykresie gęstości zmiennej losowej $$X$$ prawdopodobieństwo <br/>"+
                  "<span class='centerEquation math'>$$Pr(X ∈ (10.45, 12.73))$$</span>"]
   }];

});