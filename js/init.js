﻿    var test = [{
        name: ["test 13"],
        href: ["#test13"],
        id_a: ["test13Box"],
        id_drop: ["dropTest13"],
        id_link: ["linkTest13"],
    },
   /* {
        name: ["test 19"],
        href: ["#test19"],
        id_a: ["test19Box"],
        id_drop: ["dropTest19"],
        id_link: ["linkTest19"],
    },*/
    {
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

$(document).ready( function(){
    $(".button-collapse").sideNav({
        closeOnClick: true 
    });

     $('.dropdown-button').dropdown({      
        belowOrigin: true, 
        alignment: 'right' 
    });

     $(".tooltipped").tooltip();

    //Pojawienie się przycisku, który przesuwa ekran do góry
        $('.upTop').fadeOut();
    $(window).scroll( function(){
        if ($(this).scrollTop() > 100) {
            $('.upTop').fadeIn();
        } else {
            $('.upTop').fadeOut();
        };
    }); 

    //Przesunięcie ekranu do góry po kliknięciu przycisku o klasie .upTop
    $('.upTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
    });

    //Budowanie widoku z buttonó
    
    $.each(test, function(key, value){
        $(".testBtnBox").append("<a id='"+ test[key].id_a +"' href='" + test[key].href + "' class='waves-effect waves-light btn-large'>" + test[key].name + "</a>");
        $("#dropdownTest").append("<li class='testLink'><a href='" + test[key].href  + "' id='" + test[key].id_drop + "'>" + test[key].name + "</a></li>");
        $(".side-nav").append("<a href='" + test[key].href + "' id='" + test[key].id_link + "'>" + test[key].name + "</a>");
    });

    //Ikona w ostatnim teście
    var _id = test[test.length - 1].id_a;

    $("#" + _id).append("<i class='mdi mdi-checkbox-marked-circle-outline right'></i>");
    //$("#" + _id).addClass("tooltipped").attr("data-position", "bottom").attr("data-delay", "50").attr("data-tooltip", "Najnowszy test");
    $(".mdi-checkbox-marked-circle-outline").attr("style", "color:yellow");

    //Obsługa linków do section 

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

    //Obsługa testów
    $("main .section").on("click", "li > div", function(e){
        var _id = $(this).attr("id");
        //var _test = _id.substring(0, 6);

        loadTest(_id, date, definition);
    });
});


var date =[{
        id: ["1"],
        test: ["test22"],
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
        test: ["test22"],
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
        test: ["test22"],
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
        test: ["test22"],
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
                        "Możemy to wywnioskować, dzięki wartości wariancji. Mówi on o tym, że dane są skupionej wokół wartości względnej."] },{
        id: ["5"],
        test: ["test16"],
        name: ["Zadanie I"],
        contentsTask: ["Niech $X = (X1, X2 . . . , Xn)$ bedzie próba losowa prosta o rozmiarze $n = 14$ taka, ze $8$ pomiarów $(X1, X2 . . . , X8)$ pochodzi z rozkładu o gestości <p class='center-align'>$$f_1(x) = Θ exp` `{ -Θx `} ` `dla `  x > 0$$</p> i ma postać $(2.55, 3.82, 5.11, 2.24, 3.68, 3.31, 4.63, 1.05)$, a druga cześć próby $(X9, X2 . . . , X14)$ pochodzi z rozkładu o gestości <p class='center-align'>$$f_2(x) = 2/6Θ x exp` `{ -Θ/6x^2 `} ` `dla `  x > 0$$</p>i ma postać $(7.788, 3.627, 7.063, 0.946, 10.113, 8.628)$. Znależć estymator najwiekszej wiarygodności dla parametru $Θ$."],
        contentsSolution: ["Obliczenie estymatora największej wiarygodności dla parametry $Θ$ rozpocznięmy od wyznaczenia tejże funkcji, następnie wyznaczony zostanie logarytm naturalny tej funkcji. Jednym z końcowych etapów szacowania będzie wyznacznie pochodnej logarytmu, co pozwolie wyznaczyć esymator największej wiarygodności dla parametru $Θ$.<p class='solutionItem'>Funkcja Wiarygodności</p><p class='leftEquation'>$$`table L(x_1, ...,x_14;Θ) =; f_1(x_1;Θ)•...•f_1(x_8;Θ)•f_2(x_9;Θ)•...•f_2(x_14;Θ) =;Θe^{-Θx_1}•...•Θe^{-Θx_8}•2/6Θx_9e^{-Θ/6{x_9}^2}•...•2/6Θx_14e^{-Θ/6{x_14}^2} =;{Θ^14(2/6)^6(x_9•...•x_14)e}^{-Θ(x_1+...+x_8+1/6({x_9}^2+...+{x_14}^2))}$$</p><p class='solutionItem'>Logarytm Naturalny</p><p class='leftEquation'>$$`table ln` L(x_1, ...,x_14;Θ) =;ln({Θ^14(2/6)^6(x_9•...•x_14)e}^{-Θ(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2))}) =; ln` Θ^14 +ln((2/6)^6(x_9•...•x_14))+ln` e^{-Θ(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2))} =;ln` Θ^14 + ln((2/6)^6(x_9•...•x_14)) - Θ(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2))$$</p><p class='solutionItem'>Pochodna Logarytmu Naturalnego</p><p class='leftEquation'>$$h'(Θ)= 14/Θ +0 -(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2))$$</p><p class='solutionItem'>Miejsce zerowe pochodnej logarytm naturalnego parametru $Θ$</p><p class='leftEquation'>$$`table h'(0) = 0;h'(Θ)= 14/Θ +0 -(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2));14/Θ +0 - (x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2)) = 0;$$</p><p class='solutionItem'>Esymator największej wiarygodności $Θ$</p><p class='leftEquation'>$$Θ = 14/{x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2)}$$</p>Pozostałe obliczenia zostaną już wykonane w środowisku R. Dzięki wyprowadzonemu wzorowi obliczenia nie będą ciężkie."],
        codeSource: ["> X1 <- c(2.55 3.82 5.11 2.24 3.68 3.31 4.63 1.05)<br/>" +
                        "> X2 <- c(7.788  3.627  7.063  0.946 10.113  8.628)<br/>" +
                        "> teta <- 14/(sum(X1) + (sum(X2^2)/6))"],
        result: ["$Θ$ wynosi: <p class='centerEquation'>0.1827501</p>"],
        conclusion: ["Estymator największej wiarygodności parametru $Θ$ wynosi: <p class='centerEquation'>0.1827501</p>"] }, {
        id: ["6"],
        test: ["test16"],
        name: ["Zadanie II"],
        contentsTask: ["Niech $X = (X1, X2 . . . , Xn)$ bedzie próba losowa prosta o rozmiarze $n = 18$ taka, ze $10$ pomiarów $(X1, X2 . . . , X10)$ pochodzi z rozkładu jednostajnego na przedziale $$(0, Θ)$$ i ma postać <p class='center-align'>$$(2.820, 2.938, 1.657, 7.262, 3.246, 7.661, 5.529, 0.575, 6.121, 1.993)$$</p> A druga cześć próby $(X11, X2 . . . , X18)$ pochodzi z rozkładu jednostajnego na przedziale $(0, 2Θ)$ i ma postać <p class='center-align'>$(1.21, 11.83, 9.31, 12.50, 9.25, 10.69, 1.73, 4.63)$</p> Znależć estymator najwiekszej wiarygodności dla parametru."],
        contentsSolution: ["Do oszacowania estymatora największej wiarygodności w tym zadaniu należy wyznaczyć najwyższą wartość $Θ$, tegoż parametru.Nalęzy przy tym przyjąć poniższe założenia: <p class='centerEquation'>$$x_1, ..., x_10 ∈(0, Θ)$$</p><p class='centerEquation'>$$x_11, ..., x_18 ∈(0, 2Θ)$$</p> Aby to obliczyć prosto i przyjemnie wykorzystamy środowisko R."],
        codeSource: ["> X1 <- c(2.820,2.938,1.657,7.262,3.246,7.661,5.529,0.575,6.121,1.993)<br/>" +
                        "> X2 <- c(1.21,11.83,9.31,12.50,9.25,10.69,1.73,4.63)<br/>" +
                        "> mX1 <- max(X1)<br/>" +
                        "> mX2 <- max(X2)<br/>" +
                        "> theta <- max(max(mX1),max(mX2))"],
        result: ["Maksimum z pierwszego rozkładu:<p>7.661</p>Maksimum z drugiego rozkładu:<p>12.5</p>Esymator największej wiarygodności parametru $Θ$ wynosi:<p>12.5</p>"],
        conclusion: ["Estymatorem największej wiarygodności parametru $Θ$ okazało się maksimum drugiego rozkładu i wynosi:<p>12.5</p> Jest to 14 parametr próby."]}];

var definition = [{
            id: [1],
            test: ["test22"],
            name: ["Zmienna losowa"],
            href: ["http://prac.im.pwr.edu.pl/~agniesz/rachunek_prawd_MAEW104/wyklady/R_Pr_MAEW104_wyklad7_zmienna_los_dystrybuanta.pdf"],
            contents: ["Zmienna losowa to funkcja $$X: Ω→R$$, dla której dla dowolnego borelowskiego zbioru $$B ⊂ R$$ zbiór:<br/>" +
                        "<span class='centerEquation math'>$$\{ ω∶X(ω)∈B\}=\{X ∈B\}∈F$$</span><br/>" +
                        "Innymi słowy, jest to taka funkcja $$X$$ na zbiorze zdarzeń elementarnych o wartościach liczbowych, " + 
                        "dla której określone są prawdopodobieństwa przyjmowania przez $$X$$ wartości z każdego dowolnego zakresu. " +  
                        "W rachunku prawdopodobieństwa interesuje nas rozkład zmiennej losowej, ewentualnie jej charakterystyki liczbowe. "] }, {
            id: [2],
            test: ["test22"],
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
            test: ["test22"],
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
                            "<li>$$•\ \ $$rozkład mieszany</li><br/>" +
                        "<span class='centerEquation math'>$$EX=  ∫_Ω x*f(x)dx + ∑_(i=1)^n x_i *P(X= x_i )$$</span></ul>"] }, {
            id: [4],
            test: ["test22"],
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
                                "wyników otrzymanych z bardzo dużej ilości powtórzonych doświadczeń losowych.</p></ul>"] }, {
            id: [5],
            test: ["test22"],
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
            test: ["test22"],
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
            test: ["test22"],
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
                        "<li>$$•\ \ $$ Wariancja</li><br/>" + 
                        "<span class='centerEquation math'>$$E(X) = npq$$</span></ul>"] }, {

            id: [8],
            test: ["test16"],
            name: ["Prosta próba losowa"],
            href: ["http://www.statystyka-zadania.pl/proba-prosta/"],
            contents: ["Próbą prostą nazywamy podzbiór danych wybrany z populacji. Każda wartość w podzbiorze jest wybrana w sposób niezależny i losowy, tzn. że nie ważne czy losujemy wartość o numerze 1 czy numerze 100 szansa na to że będzie to wartość M wynosi tyle samo."]}, {
            id: [9],
            test: ["test16"],
            name: ["Rozkład jednostajny"],
            href: ["http://www.docsity.com/pl/e16e715b81a1f13489f192a28c8f51d1/273843/"],
            contents: ["Zmienna losowa ma rozkłąd jednostajny, jeżeli jej gęstość prawdopodobieństwa jest określona wzorem: <p class='centerEquation'>$$f(x) = `{ `table 0, `dla x &lt; a` `i` x> b, (a&lt;b); ` 1/{b-a}, `dla ` a &lt;x&lt;b $$</p>"]}, {
            id: [10],
            test: ["test16"],
            name: ["Estymacja statystyczna"],
            href: ["http://wl.sggw.pl/Members/misioo/statystyka1st_estymacja.pdf"],
            contents: ["Estymacja statystyczna jest rodzajem wnioskowania o wartościach parametrów populacji generalnej na podstawie statystyk określonych z n-elementowych prób losowych.Statystyka, na podstawie której szacujemy parametr populacji $Θ$ nazywamy estymatorem Tn parametru $Θ$.Dobry estymator to taki, który daje możliwie najlepsze oszacowanie  parametru populacji. Cechy dobrego estymatora:<ul class='defineList'><li>$$•\ \ $$ Nieobciążoność</><span class='centerEquation'>$$ETn = Θ$$</span><li>$$•\ \ $$ Zgodność</li>  <span class='centerEquation'>$${lim}↙{n→∞} P[|Tn - Θ| &lt;ε] = 1$$ &nbsp; $${lim}↙{n→∞} ETn → Θ$$</span>   <li>$$•\ \ $$ Efektywność</li><span class='centerEquation'>Estymator efektywny to taki, który ma najmniejszą zmienność.</span></ul>"]},{
            id: [11],
            test: ["test16"],
            name: ["Funkcja gęstości"],
            href: ["http://home.agh.edu.pl/~adan/wyklady/rpis3.pdf"],
            contents: ["Funkcją gęstości prawdopodobieństwa zmiennej losowej typu ciągłego nazywamy funkcję <span class='math'>$$f(x)$$</span>, określoną na zbiorze liczb rzeczywistych, taką że: <span class='math'>$$f(x)≥0 ⋀ a ≥ b$$</span> zachodzi: <span class='centerEquation math'>$$∫_a^b f(x)dx=P(a&lt;X&lt;b)$$</span><br/> Własności funkcji gęstości prawdopodobieństw:<br/><ul class='defineList'><li>$$•\ \ $$Funkcja gęstości jest nieujemna, <span class='math'>$$f ≥0$$</span></li><li>$$•\ \ $$W punktach, w których f jest ciągła zachodzi równość: <span class='math'>$$f(x)= F^' (x)$$</span>, funkcja gęstości jest pochodną dystrybuanty</li><li>$$•\ \ $$Każda funkcja <span class='math'>$$f$$</span>, będąca gęstością prawdopodobieństwa, wyznacza jednoznacznie pewną dystrybuantę, a tym samym rozkład prawdopodobieństwa pewnej zmiennej.</li></ul>"]},{
            id: [12],
            test: ["test16"],
            name: ["Funkcja wiarygodności"],
            href: ["https://www.google.pl/url?sa=t&rct=j&q=&esrc=s&source=web&cd=9&ved=0ahUKEwjcsr_f7cTRAhVmJ5oKHULhAJ4QFghPMAg&url=http%3A%2F%2Fwww.ifd.uni.wroc.pl%2F~andab%2Fstatwyk5.doc&usg=AFQjCNHsH-7dagF_umog-0GnPpupJuVobg"],
            contents: ["Funkcja wiarygodności ma charakter funkcji łącznego rozkładu prawdopodobieństwa, a posteriori dla próby  $X1,...,Xn$  przy założeniu niezależności poszczególnych pomiarów i jest dana wzorem: <p class='centerEquation'>$$L(x_1,...,x_n; Θ_1,...,Θ_k)=f(x_1; Θ_1,..., Θ_k)f(x_2; Θ_1,..., Θ_k)...f(x_3; Θ_1,..., Θ_k)$$</p> Metoda polega na przeświadczeniu, że zdarzenia o większym prawdopodobieństwie zachodzą częściej niż zdarzenia mniej prawdopodobne. Zakłada się, że uzyskana w losowaniu próba jest realizacją zdarzenia o największym prawdopodobieństwie, co jest równoważne warunkowi osiągnięcia maksimum przez funkcję wiarygodności. Jako estymatory nieznanych parametrów $Θ_1,...,Θ_k$ przyjmuje się takie $Θ↖{`^}_1,...,Θ↖{`^}_k$, dla których funkcja wiarygodności osiąga maksimum. Funkcja $ln L$ osiąga maksimum dla tych samych wartości parametrów co funkcja $L$, a łatwiej ją różniczkować. Poszukiwane jest więc maksimum logarytmicznej funkcji wiarygodności <p class='centerEquation'>$$l = ln` L =∑↖{n}↙{i = 1} ln ` f(x_1; Θ_1,..., Θ_k)$$</p>Warunek na maksimum funkcji $l$ przyjmuje postać układu równań:<p class='centerEquation'></p> Poza tym potrzeba i wystarcza, aby forma kwadratowa <p class='centerEquation'>$$∑↖{k}↙{i = 1}∑↖{k}↙{j = 1}({∂^2` l}/{∂Θ_i∂Θ_j})_{`table{Θ_i = Θ↖{`^}_i};{Θ_j = Θ↖{`^}_j}}` h_ih_j$$</p> była określona ujemnie. $h_i$ i $h_j$ są zmiennymi rzeczywistymi nie zerującymi się jednocześnie."]}]; 