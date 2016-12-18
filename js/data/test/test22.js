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
                                "<span class='titleDefinition'>Podsumowanie</span>" +
                                "<hr /><p class='contents'>" + date[key].conclusion + "</p>" +                                                             
                                "</div></div>");
            });                                                                          
        } else if(id.indexOf("source") > 0) {
            $("#" + id).append("<div class='card'><div class='card-content'><p class='contents' id='source'>");

            $.each(definition, function(key){                 	

                $("#source").append("<span class='sourceLink'>" + definition[key].name + "<br/>" +
                                    "<a class='sourceLink' href='" + definition[key].href + "'>" +
                                    "<span class='definitionCount'>" + definition[key].href + "</span>" + 
                                    "</a>" +
                                    "</span><br/>");                
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
        contentsSolution: ["Z treści zadania wynika, iż badany jest rozkład zmiennej losowej skokowej. "+
                            "Wartości oraz prawdopodbieństwa wystapień ich również zostały podane. Pozostało obliczyć " +
                            "wartość oczekianą oraz wariancje. Dzięki takim danym narysowanie wykresu nie powinno sprawić problemu. " +
                            "Środowisko R umożliwia ogromny wachlarz do interpretacji graficznej wyników. Poniżej kod potrzebny do wykonania obliczeń oraz wykresu."],
        codeSource: ["> xi = c(-4, 5, 10)<br/>" +
                        "> pi = c(0.5, 0.4, 0.1)<br/>" +
                        "> EX = sum(xi*pi)<br/>" +
                        "> VAR = sum(xi^2*pi) - EX^2<br/>" +
                        "> png('wykres01.png', width = 640, height = 480)<br/>" +
                        "> plot(xi, pi, col='blue', xlab='Wartości', ylab='Prawdopodobieństwa', pch=16)<br/>" +
                        "> for(i in 1:3){lines(xi, pi, type='h', lty=2)}<br/>" +
                        "> title(main='Rozkład prawdopodobieństwa zmiennej ')<br/>" +
                        "> dev.off()<br/>"],
        result: ["WARTOŚĆ OCZEKIWANA<br/>" +
                "1<br/>" +
                "WARIANCJA<br/>" +
                "27<br/><br/>"+
                "<img class='responsive-img' src='image/test22/wykres01.png'/>"],
        conclusion: ["Na podstwie wyników oraz wykresu wywnioskować można, że wartością spodziwaną jest 1. Wariancja mówi o tym, iż dane są mocno \"rozrzucone\" względem wartości oczekiwanej."] }, {
        id: ["2"],
        name: ["Zadanie II"],
        contentsTask: ["Uczeń rzuca 5 razy piłka do kosza. Prawdopodobieństwo trafienia w jednym rzucie wynosi 0,25. " +
                       "Wyznaczyć rozkład ilości trafień piłka do kosza oraz wartość oczekiwana tej liczby trafień."],
        contentsSolution: ["Do uzyskania wartości oczekiwanej potrzebny jest rozkład ilości trafień do kosza. Zmienna losowa jest dyskretna, tak więc do " +
                            "wyznaczenia rozkładu użyto wzoru na rozkład dwumianowy. Następnie możliwe będzie wyznacznie wartości oczekiwanej."],
        codeSource: ["> p = 0.25<br/>" +
                        "> q = 1 - p<br/>" +
                        "> x <- c(0:5)<br/>" +
                        "> binomal <- function(){factorial(5)}<br/>" +
                        "> divider <- function(x){factorial(x)*factorial(5-x)}<br/>" +
                        "> denominator <- function(){factorial(5)}<br/>" +
                        "> binomal <- function(){denominator()/divider(x)}<br/>" +
                        "> schedule <- function(X){binomal() * p^x * q^(5-x)}<br/>" +
                        "> probability <- schedule(x)<br/>" +
                        "> sum(probability)<br/>" +
                        "> EX = sum(x*probability)"],
        result: ["ROZKŁAD<br/>" +
                    "<table class='tableScore center sourceCode bordered responsive-table'><tr><td>$$x_i$$</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>" +
	                "<tr><td>$$p_i$$</td><td>0.2373000</td><td>0.3955000</td><td>0.2637000</td><td>0.0878900</td><td>0.0146500</td><td>0.0009766</td></tr></table>" +
                    "<br/><br/>" +
                    "WARTOŚĆ OCZEKIWANA<br/>" +
                    "1.25"],
        conclusion: ["Według rozkładu oraz wartości oczekiwanej spodziewać się należy, iż uczeń trafi do kosza 1.25 razy."] }, {
        id: ["3"],
        name: ["Zadanie III"],
        contentsTask: ["Rzucamy 300 razy kostka do gry. Za sukces w pojedynczym rzucie uznamy zdarzenia polegajacego na tym, " +
                        "że otrzymano szóstke. Jakie jest prawdopodobieństwo zdarzenia polegajacego na tym, ze liczba sukcesów " +
                        "bedzie różniła sie od 50 o wiecej niz 10?"],
        contentsSolution: ["Prawdopodobieństwo zdarzenia polegającego na uzyskaniu liczby sukcesów spełniajacych zależność " +
                            "$$|X - 50| ≥ 10$$. Do obliczenie tej wartości należy użyć nierówności Czebyszewa-Bienaymé. Obliczając wariancje dla rozkładu " +
                            "otrzymamy prawdopodbieństwo zdarzenia. Po podstawieniu wartości do równania: $$P(|X - E(X)| ≥ ε) ≤ {E(X)}/ε^2$$, otrzymana wartości " +
                            "przedstawi prawdopodbieństwo zajścia zdefiniowanego zdarzenia."],
        codeSource: ["> n = 300<br/>" +
                        "> p = 1/6<br/>" +
                        "> q = 1 - p<br/>" +
                        "> eps = 10<br/>" +
                        "> deviation = n*p*q<br/>" +
                        "> probability <- deviation/eps^2<br/>" +
                        "> round(probability, 3)<br/>"],
        result: ["PRAWDOPODOBIEŃSTWO<br/>" +
                    "0.417"],
        conclusion: ["Prawdopodobieństwo wyrzucenia kostka 'szóstki' w 300 rzutach i przy założeniu, że liczba tych sukcesów będzie różniła się od 50 " +
                        "o więcej niż 10 wynosi 0.417."] }, {
        id: ["4"],
        name: ["Zadanie IV"],
        contentsTask: ["W urnie znajdują się kule z numerami 1, 2, 3, 4, 5, 6 w stosunku ilościowym odpowiednio " +
                        "3 : 5 : 4 : 2 : 1 : 3. Losujemy jedna kule i zmienna losowa X odpowiada numerowi na kuli. " +
                        "Obliczyć wartość oczekiwana i wariancje zmiennej losowej X."],
        contentsSolution: ["Dla powyższego zadania nie posiadamy rozkładu należy go wyznaczyć jest to stosunkowo proste." +
                            "Uzyskując rozkład możemy obliczyć wartość oczekiana oraz wariancje rozkłądu. Otóż w środowisku " +
                            "R robi się to w sposób pokazany niżej."],
        codeSource: ["> xi <- c(1:6)<br/>" +
                        "> i <- c(3,5,4,2,1,3)<br/>" +
                        "> pi <- xi*i<br/>" +
                        "> sumI <- sum(i)<br/>" +
                        "> pi <- i/sumI<br/>" +
                        "> EX <- sum(xi*pi)<br/>" +
                        "> VAR <- sum(xi^2*pi) - EX^2<br/>" +
                        "> round(pi, 3)<br/>" +
                        "> round(EX, 3)<br/>" +
                        "> round(VAR, 3)<br/>" ],
        result: ["ROZKŁAD<br/>" +
                    "<table class='tableScore center sourceCode bordered responsive-table'><tr><td>$$x_i$$</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>" +
	                "<tr><td>$$p_i$$</td><td>0.167</td><td>0.278</td><td>0.222</td><td>0.111</td><td>0.056</td><td>0.167</td></tr></table>" +
                    "WARTOŚĆ OCZEKIWANA<br/>" +
                    "3.111<br/>" +
                    "WARIANCJA<br/>" +
                    "2.765"        ],
        conclusion: ["Wartość oczekwiana wynosi 3.111, w puli nie ma kuli o takiej wartości. Defacto możemy spodziewać się kuli o wartości 3. " +
                        "Możemy to wywnioskować, dzięki wartości wariancji. Mówi on o tym, że dane są skupionej wokół wartości względnej."] }];

   
    
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
                        "<p class='contents'>Oznacza to, że prawdopodobieństwo jest liczbą dodatnią ewentualnie zerem (nie może być ujemne).</p>" +
                            "<li>$$•\ \  P(Ω) = 1$$</li><br/>" +
                        "<p class='contents'>Oznacza to, że prawdopodobieństwo wystąpienia jednego z wszystkich możliwych zdarzeń wynosi 1 czyli jest pewne.</p>" +
                            "<li>$$•\ \  P(A1 υ A2 υ A3 υ…)=P(A1) + P(A2) + P(A3) +… $$</li></ul><br/>" +
                        "<p class='contents'>gdzie A1, A2, A3, … są zdarzeniami losowymi parami rozłącznymi należącymi do jednej rodziny zdarzeń." +
                        "Funkcja prawdopodobieństwa posiada następujące własności:</p>" +
                            "<ul class='defineList'><li>$$•\ \ P(∅) = 0$$</li><br/>" +
                                "<p class='contents'>Zbiór wartości funkcji zawiera się w przedziale od $$<0;1>$$</p>" +
                            "<li>$$•\ \ P(A’) = 1-P(A)$$ lub $$P(A’) + P(A) = 1$$</li><br/>" +
                                "<p class='contents'>suma zdarzenia A oraz zdarzenia przeciwnego wynosi jeden</p>" +   
                            "<li>$$•\ \  P(A υ B)=P(A) + P(B) - P(A ∩ B)$$</li></ul><br/>" +
                                "<p class='contents'>Aby obliczyć prawdopodobieństwo sumy zdarzeń A i B należy dodać do " + 
                                "siebie prawdopodobieństwo tych zdarzeń i odjąć od nich ich prawdopodobieństwo ich części wspólnej. " +
                                "Zauważenie zjawiska występowania częstości względnej stało się fundamentem do przyjęcia postulatu, " +
                                "że każdemu zjawisku odpowiada dokładnie jedna liczba będąca teoretycznym odpowiednikiem częstości tego zdarzenia losowego, " + 
                                "co w konsekwencji daje teoretyczną miarę zajścia danego zdarzenia. Wartość prawdopodobieństwa " +
                                "wyznacza się najczęściej badając symetrię układu występowania zdarzeń elementarnych, szukając " +
                                "proporcji lub kształtu doświadczenia losowego, bywa też i tak, że wartość wylicza się na podstawie " + 
                                "wyników otrzymanych z bardzo dużej ilości powtórzonych doświadczeń losowych.</p>"] }, {
            id: [5],
            name: ["Nierówność Czebyszewa"],
            href: ["http://encyklopedia.naukowy.pl/Nierówność_Czebyszewa"],
            contents: ["Nierówność Czebyszewa podaje górne ograniczenie prawdopodobieństwa zdarzenia, " +
            "że wartość nieujemnej zmiennej losowej jest większa lub równa od z góry ustalonej dodatniej liczby. <br/>" +
            "Jedynym warunkiem na rozkład zmiennej losowej jest jej nieujemność. Nierówność ta jest więc bardzo ogólnym ograniczeniem. " +
            "Nierówność Czebyszewa-Bienayme jest odpowiednikiem nierówności Czebyszewa także dla zmiennych nie spełniających tego warunku " +
            "i często również jest nazywana po prostu nierównością Czebyszewa, co może prowadzić do nieporozumień.<br/>" +
            "Dla każdej zmiennej losowej $$X$$ spełniającej warunek $$P{X<0}=0$$ o wartości oczekiwanej $$E(X)$$ dla każdego $$ε > 0$$ zachodzi: <br/>" +
            "<span class='centerEquation math'>$$P\ \{ X ≥ ε\} ≤ {E(X)}/ε$$</span>"] }, {
            id: [6],
            name: ["Nierówność Czebyszewa-Bienaymé"],
            href: ["http://encyklopedia.naukowy.pl/Nier%C3%B3wno%C5%9B%C4%87_Czebyszewa-Bienayme"],
            contents: ["Nierówność Czebyszewa-Bienaymé podaje górne ograniczenie prawdopodobieństwa zdarzenia, że wartość zmiennej " +
                        "losowej ze skończoną wariancją leży poza pewnym przedziałem wokół jej wartości oczekiwanej.<br/>" +
                        "Nierówność ta jest prawdziwa niezależnie od rozkładu zmiennej losowej, jest więc bardzo ogólnym ograniczeniem. " +
                        "Dla konkretnych rozkładów (np. rozkładu normalnego) można podać znacznie lepsze ograniczenia. " +
                        "Nierówność Czebyszewa-Bienaymé wynika bezpośrednio z Nierówności Czebyszewa.<br/>" +
                        "Dla każdej zmiennej losowej $X$ o wartości oczekiwanej $E(X)$ i skończonej wariancji " +
                        "$σ^2 = E(X - E(X))^2$ i dla każdego $ε > 0$ zachodzi:<br/>" +
                        "<span class='centerEquation math'>$$P(|X - E(X)| ≥ ε) ≤ {E(X)}/ε^2$$</span>"] }, {
            id: [7],
            name: ["Rozkład dwumianowy"],
            href: ["http://www.statystycy.pl/p16814_rozklad_dwumianowy_bernoulliego.php"],
            contents: ["Jest to jeden z podstawowych rozkładów dyskretnych w statystyce. Opisuje on  sukcesów w  próbach. Najważniejsze cechy tego rozkładu to:<br/>" + 
                        "<span><ul class='defineList'><li>$$•\ \ $$w wyniku każdego doświadczenia możemy uzyskać dwa wyniki: sukces lub porażkę</li><br/>" + 
                        "<li>$$•\ \ $$zdarzenia są niezależne</li><br/>" +
                        "<li>$$•\ \ $$prawdopodobieństwo sukcesu lub porażki w każdej próbie jest stałe</li><br/>" +
                        "<li>$$•\ \ $$schemat losowania ze zwracaniem</li></ul></span><br/>" + 
                        "<p class='contents'>Oznacza się go zapisem $$B(n, p)$$ gdzie:</p><br/>" +
                        "<ul class='defineList'><li>$$•\ \ n$$- liczba prób </li><br/>" +
                        "<li>$$•\ \ p$$ - prawdopodobieństwo sukcesu</li></ul><br/>" + 
                        "<p class='contents'>Te dwie liczby pozwolą nam policzyć prawdopodobieństwo $$k$$ sukcesów w $$n$$ próbach, które wyraża się wzorem:<br/>" + 
                        "<span class='centerEquation math'>$$P(x = k) = ( {\ ↖n\ ↙k} ) p^kq^{n-k}$$</span><br/>" +
                        "Innymi słowy powyższy wzór jest to funkcja rozkładu prawdopodobieństwa. Podstawowe charakterystyki rozkładu:</p><br/>" +
                        "<ul class='defineList'><li>$$•\ \ $$ Wartość oczekiana </li><br/>" +
                        "<span class='centerEquation math'>$$E(X) = np$$</span>" +
                        "<li>$$•\ \ $$ Wariancja</li></ul><br/>" + 
                        "<span class='centerEquation math'>$$E(X) = npq$$</span>"] }];
});