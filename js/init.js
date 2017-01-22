    var test = [{
        name: ["test 13"],
        href: ["#test13"],
        id_a: ["test13Box"],
        id_drop: ["dropTest13"],
        id_link: ["linkTest13"],
    },
    {
        name: ["test 19"],
        href: ["#test19"],
        id_a: ["test19Box"],
        id_drop: ["dropTest19"],
        id_link: ["linkTest19"],
    },
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
    },{
        name: ["test 09"],
        href: ["#test09"],
        id_a: ["test09Box"],
        id_drop: ["dropTest09"],
        id_link: ["linkTest09"],
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

    //Budowanie widoku z buttonów    
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
        loadTest(_id, date, definition);
    });
});


var date =[{
        id: [1],
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
        id: [2],
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
        id: [3],
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
        id: [4],
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
        id: [5],
        test: ["test16"],
        name: ["Zadanie I"],
        contentsTask: ["Niech $X = (X1, X2 . . . , Xn)$ bedzie próba losowa prosta o rozmiarze $n = 14$ taka, ze $8$ pomiarów $(X1, X2 . . . , X8)$ pochodzi z rozkładu o gestości <p class='center-align'>$$f_1(x) = Θ exp` `{ -Θx `} ` `dla `  x > 0$$</p> i ma postać $(2.55, 3.82, 5.11, 2.24, 3.68, 3.31, 4.63, 1.05)$, a druga cześć próby $(X9, X2 . . . , X14)$ pochodzi z rozkładu o gestości <p class='center-align'>$$f_2(x) = 2/6Θ x exp` `{ -Θ/6x^2 `} ` `dla `  x > 0$$</p>i ma postać $(7.788, 3.627, 7.063, 0.946, 10.113, 8.628)$. Znależć estymator najwiekszej wiarygodności dla parametru $Θ$."],
        contentsSolution: ["Obliczenie estymatora największej wiarygodności dla parametry $Θ$ rozpocznięmy od wyznaczenia tejże funkcji, następnie wyznaczony zostanie logarytm naturalny tej funkcji. Jednym z końcowych etapów szacowania będzie wyznacznie pochodnej logarytmu, co pozwolie wyznaczyć esymator największej wiarygodności dla parametru $Θ$.<p class='solutionItem'>Funkcja Wiarygodności</p><p class='leftEquation'>$$`table L(x_1, ...,x_14;Θ) =; f_1(x_1;Θ)•...•f_1(x_8;Θ)•f_2(x_9;Θ)•...•f_2(x_14;Θ) =;Θe^{-Θx_1}•...•Θe^{-Θx_8}•2/6Θx_9e^{-Θ/6{x_9}^2}•...•2/6Θx_14e^{-Θ/6{x_14}^2} =;{Θ^14(2/6)^6(x_9•...•x_14)e}^{-Θ(x_1+...+x_8+1/6({x_9}^2+...+{x_14}^2))}$$</p><p class='solutionItem'>Logarytm Naturalny</p><p class='leftEquation'>$$`table ln` L(x_1, ...,x_14;Θ) =;ln({Θ^14(2/6)^6(x_9•...•x_14)e}^{-Θ(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2))}) =; ln` Θ^14 +ln((2/6)^6(x_9•...•x_14))+ln` e^{-Θ(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2))} =;ln` Θ^14 + ln((2/6)^6(x_9•...•x_14)) - Θ(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2))$$</p><p class='solutionItem'>Pochodna Logarytmu Naturalnego</p><p class='leftEquation'>$$h'(Θ)= 14/Θ +0 -(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2))$$</p><p class='solutionItem'>Miejsce zerowe pochodnej logarytm naturalnego parametru $Θ$</p><p class='leftEquation'>$$`table h'(0) = 0;h'(Θ)= 14/Θ +0 -(x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2));14/Θ +0 - (x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2)) = 0;$$</p><p class='solutionItem'>Esymator największej wiarygodności $Θ$</p><p class='leftEquation'>$$Θ = 14/{x_1+...+x_7+1/6({x_9}^2+...+{x_14}^2)}$$</p>Pozostałe obliczenia zostaną już wykonane w środowisku R. Dzięki wyprowadzonemu wzorowi obliczenia nie będą ciężkie."],
        codeSource: ["> X1 <- c(2.55 3.82 5.11 2.24 3.68 3.31 4.63 1.05)<br/>" +
                        "> X2 <- c(7.788  3.627  7.063  0.946 10.113  8.628)<br/>" +
                        "> teta <- 14/(sum(X1) + (sum(X2^2)/6))"],
        result: ["$Θ$ wynosi: <p class='centerEquation'>0.1827501</p>"],
        conclusion: ["Estymator największej wiarygodności parametru $Θ$ wynosi: <p class='centerEquation'>0.1827501</p>"] }, {
        id: [6],
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
        conclusion: ["Estymatorem największej wiarygodności parametru $Θ$ okazało się maksimum drugiego rozkładu i wynosi:<p>12.5</p> Jest to 14 parametr próby."]}, {
        id: [7],
        test: ["test19"],
        name: ["Zadanie I"],
        contentsTask: ["Obliczyć wartość oczekiwaną zmiennej losowej o gęstości $$fx(·)$$"],
        contentsSolution: ["Wykonanie zadania i przedstawienie wyniku jest dość trywialne. Oblicznie wartości oczekiwanej zmiennej losowej wykorzystując środowisko R wykonujemy przy pomocy funkcji $$integrate$$."],
        codeSource:["> c <- 1/27388.75<br/>"+
                    "> f1 <- function(x){ c *(x^3 + 18*x^2 + 108*x + 225)}<br/>"+
                    "> fm1 <- function(x){ x *f1(x)}<br/>"+
                    "> m1 <- integrate(fm1, 9, 14)$value<br/>"+
                    "> m1<br/>"],
        result: ["$$11.85085$$"],
        conclusion: ["Wartość oczekiana zmiennej losowej wynosi: $11.85085$."]}, {
        id: [8],
        test: ["test19"],
        name: ["Zadanie II"],
        contentsTask: ["Naszkicować wykres gęstości zmiennej losowej $$X$$"],
        contentsSolution: ["Przedstawienie na wykresie gęstości zmiennej losowej nie jest problemem, a w środowisku R jest to dość proste."],
        codeSource:["> png('wykres01.png', width = 640, height = 480)<br/>" +
                    "> curve(f1, xlim=c(9,14), col.lab='red')<br/>" +
                    "> title(main='Gęstość Zmiennej losowej')<br/>" +
                    "> dev.off()"],
        result: ["<img class='responsive-img' src='image/wykres01.png'/>"],                   
        conclusion: ["Wykres powyżej przedstawia gęstość zmienną losową."]}, {
        id: [9],
        test: ["test19"],
        name: ["Zadanie III"],
        contentsTask: ["Obliczyć wariancję zmiennej losowej o gęstości $$fx(·)$$"],
        contentsSolution: ["Wykonanie zadania i przedstawienie wyniku jest dość trywialne. Oblicznie wariancji zmiennej losowej wykorzystując środowisko R wykonujemy przy pomocy funkcji $$integrate$$."],
        codeSource:["> c <- 1/27388.75<br/>"+
                    "> f1 <- function(x){ c *(x^3 + 18*x^2 + 108*x + 225)}<br/>"+
                    "> fm1 <- function(x){ x *f1(x)}<br/>"+
                    "> m1 <- integrate(fm1, 9, 14)$value<br/>"+
                    "> fm2 <- function(x){x^2 * f1(x)}<br/>"+
                    "> EX <- m1<br/>"+
                    "> m2 <- integrate(fm2, 3, 14)$value<br/>"+
                    "> EX2 <- m2<br/>"+
                    "> EX2 - EX^2<br/>"],
        result: ["$$21.26287$$"],
        conclusion: ["Wariancja zmiennej losowej wynosi: $21.26287$."]}, {
        id: [10],
        test: ["test19"],
        name: ["Zadanie IV"],
        contentsTask: ["Naszkicować wykres dystrybuanty zmiennej losowej $$X$$"],
        contentsSolution: ["Przedstawienie na wykresie dystrybuanty zmiennej losowej nie jest problemem, a w środowisku R jest to dość proste.<br/> Wartość dystrybuanta została obliczona na podstawie funkcji:<br/> <span class='centerEquation'>$$fx(x) =  c(x^4/4 + 6x^3 + 54x^2 + 225x - 12413.25)$$</span>"],
        codeSource:["> png('wykres02.png', width = 640, height = 480)<br/>" +
                    "> curve(f2, xlim=c(9,14), col.lab='red')<br/>" +
                    "> title(main='Dystrybuanta Zmiennej losowej')<br/>" +
                    "> dev.off()"],
        result: ["<img class='responsive-img' src='image/wykres02.png'/>"],
        conclusion: ["Wykres powyżej przedstawia dystrybuantę zmienną losową."]}, {
        id: [11],
        test: ["test19"],
        name: ["Zadanie V"],
        contentsTask: ["Zaznaczyć na wykresie gęstości zmiennej losowej $$X$$ prawdopodobieństwo <br/><span class='centerEquation math'>$$Pr(X ∈ (11.48, 11.96))$$</span>"],
        contentsSolution: ["Przedstawienie na wykresie gęstości zmiennej losowej $$X$$ z prawdopodobieństwem $$Pr(X ∈ (11.48, 11.96))$$ nie jest problemem, a w środowisku R jest to dość proste."],
        codeSource:["> png('wykres03.png', width = 640, height = 480)<br/>" +
                    "> curve(f1, xlim=c(9,14), col.lab='red')<br/>" +
                    "> x <- c(11.48, seq(11.48, 11.96, 0.01), 11.96)<br/>" +
                    "> y <- c(0, f1(seq(11.48, 11.96, 0.01)), 0)<br/>" +
                    "> title(main='Gęstość Zmiennej losowej z prawdopodobieństwem')<br/>" +
                    "> polygon(x, y, col='red')<br/>" +
                    "> dev.off()"],
        result: ["<img class='responsive-img' src='image/wykres03.png'/>"],
        conclusion: ["Wykres powyżej przedstawia gęstość zmiennej losowej z prawdopodobieństwem $$Pr(X ∈ (11.48, 11.96))$$."]}, {
        id: [12],
        test: ["test19"],
        name: ["Zadanie VI"],
        contentsTask: ["Zaznaczyć na wykresie gęstości zmiennej losowej $$X$$ prawdopodobieństwo <br/><span class='centerEquation math'>$$Pr(X ∈ (10.45, 12.73))$$</span>"],
        contentsSolution: ["Przedstawienie na wykresie dystrybuanty zmiennej losowej $$X$$ z prawdopodobieństwem $$Pr(X ∈ (10.45, 12.73))$$ nie jest problemem, a w środowisku R jest to dość proste."],
        codeSource:["> png('wykres04.png', width = 640, height = 480)<br/>" +
                    "> curve(f2, xlim=c(9,14), col.lab='red')<br/>" +
                    "> title(main='Dystrybuanta zmiennej losowej z prawdopodobieństwem')<br/>" +
                    "> lines(c(10.45,10.45),c(f2(10.45), f2(12.73)), col='red')<br/>" +
                    "> dev.off()"],
        result: ["<img class='responsive-img' src='image/wykres04.png'/>"],
        conclusion: ["Wykres powyżej przedstawia dystrybuantę zmiennej losowej z prawdopodobieństwem $$Pr(X ∈ (10.45, 12.73))$$."]}, {
        id: [13],
        test: ["test19"],
        name: ["Zadanie VII"],
        contentsTask: ["Znaleźć gęstość zmiennej losowej $Y = √^3X$"],
        contentsSolution: ["Gęstość zmiennej losowej $$Y$$ należy obliczyć na podstawie dystrybuanty zmieennej losowej $$X$$. Poniżej znajdują się oblicznia oraz ich wynik. Obliczenia są typowo matematyczne i nie zostały wykoanne przy pomocy R."],
        codeSource:["$$f(x) =  c(x^4/4 + 6x^3 + 54x^2 + 225x - 12413.25)$$<br/>" +
                    "$$f(y^3) =  c((y^3)^4/4 + 6(y^3)^3 + 54(y^3)^2 + 225(y^3) - 12413.25)$$<br/>" +
                    "$$f(y^3) =  c(y^12/4 + 6y^9 + 54y^6 + 225y^3 - 12413.25)$$<br/>" +
                    "$$f(y^3) =  c(3y^11 + 54y^8 + 324y^5 + 675y^2)$$<br/>"],
        result: ["$$fy(Y) = 3y^11 + 54y^8 + 324y^5 + 675y^2$$"],
        conclusion: ["Według wykonanych działań matematycznych do obliczenia gęstości losowej nalezy użyć funkcji: $$3y^11 + 54y^8 + 324y^5 + 675y^2$$"]}, {
        id: [14],
        test: ["test19"],
        name: ["Zadanie VIII"],
        contentsTask: ["Obliczyć $$EY$$ i sprawdzić, czy $$(EY)^3 > EX$$ (nierówność Jensena)"],
        contentsSolution: ["Wykonanie zadania i przedstawienie wyniku jest dość trywialne. Sprawdzenie czy $$EY$$ jest nierównością Jensena wykorzystując środowisko R wykonujemy przy pomocy funkcji $$integrate$$." ],
        codeSource:["> fy <- function(y) { c*(3*y^11 + 54*y^8 +234*y^5 + 675*y^2)}<br/>" +
                    "> y1 <- 9^(1/3)<br/>" +
                    "> y2 <- 14^(1/3)<br/>" +
                    "> EY <- integrate(function(y){y*fy(y)}, y1,y2)$value<br/>" +
                    "> EY^3<br/>" +
                    "> EY^3 > EX"],
        result: ["9.711832<br/> FALSE"],
        conclusion: ["$EY$ wynosi: $9.711832$. A badanie nierówności Jensena dało wynik FALSE."]}, {
        id: [15],
        test: ["test09"],
        name: ["Zadanie"],
        contentsTask: ["W wyniku analizy strukrury demograficznej, gospodarczej i społecznej wybranej pewnej grupy gmin w Polsce ustalono, ze w grupie tej poziom wydatków inwestycyjnych na jednego mieszkanca gminy powinien przekroczyc 459.7 PLN. Zbadano wyniki wydatków inwestycyjnych w 20 gminach i otrzymano następujące wyniki:<br/><table class='responsive-table highlight'><thead><tr><td></td><td>A</td><td>B</td><td>C</td><td>D</td><td>F</td></tr></thead><tbody><tr><td>Dane 1 - 5</td><td>461.93</td><td>458.77</td><td>460.06</td><td>461.88</td><td>462.66</td></tr><tr><td>Dane 6 - 10</td><td>459.65</td><td>459.06</td>     <td>461.52</td><td>461.45</td><td>460.41</td></tr><tr><td>Dane 11 - 15</td><td>458.54</td><td>460.21</td><td>459.07</td><td>459.96</td>          <td>458.94</td></tr><tr><td>Dane 16- 20</td><td>459.78</td><td>459.75</td><td>458.20</td><td>459.91</td><td>458.69</td></tr></table> Chcemy odpowiedzieć na pytanie: Czy poziom wydatków inwestycyjnych satystycznie istotnie wzrósł? Skonstruowac odpowiednia hipoteze i jej alternatywe, a nastepnie zweryfikować hipoteze zerową i odpowiedzieć na postawione pytanie badawcze.<br/><br/>Potrzebne wzory:<div class='centerEquationBox'><span>$x↖{-} = 1/n` ∑↖{n}↙{i = 1}` x_i$</span><span>$s^2 = 1/{n -1}` ∑↖{n}↙{i = 1}` (x_i - x↖{-})^2$</span><span>$t_{n-1} = {x↖{-} - μ_0}/s √{n}$</span></div>"],
        contentsSolution: ["Istotą badań jest poziom wydatków inwestycyjnych przypadający na jednego mieszkańca,  w jednej z 20 gmin. Anliza struktury demograficznej, gospodarczej i społecznej pozwoliła wusunąć wniosek, taki iż poziom wydatków nie powinien przekroczyć 459.70 złotych na jednego mieszkańca. Poniżej przeprowadzaone zostanei badanie potwierdzające lub obalające powyższy wniosek. Prawidłowy przebieg badań możliwy będzie po postawieńu hipotezy zerowej i alternatywnej. A o to one: <ul class='defineList'><li>$$•` $$ Hipoteza zerowa</li><p class='hipotez'>„Poziom wydatków inwestycyjnych na jednego mieszkańca gminy nie przekroczył 459.70 zł.”</p><span class='centerEquation'>$H_0: μ_0 ≤ 459.7$</span><li>$$•` $$ Hipoteza alternatywna</li><p class='hipotez'>„Poziom wydatków inwestycyjnych na jednego mieszkańca gminy przekroczył 459.70 zł.”</p><span class='centerEquation'>$H_1: μ_1 > 459.7$</span></ul><p></p>Kolejnym krokiem w przebiegu badań jest przeprowadzenie testów. A oto działania jakie na ten krok się składają:<ul class='defineList'><li>$$•` $$ Średnia arytmtyczna</li><span class='centerEquation'>$x↖{-} = 1/n` ∑↖{n}↙{i = 1}` x_i$</span><li>$$•` $$ Esymator nieobciążony wariancji</li><span class='centerEquation'>$s^2 = 1/{n -1}` ∑↖{n}↙{i = 1}` (x_i - x↖{-})^2$</span><li>$$•` $$ Test t studenta</li><span class='centerEquation'>$t_{n-1} = {x↖{-} - μ_0}/s √{n}$</span></ul>Obliczenia dla tych działań zostaną wykonane w środowisku R i będą widoczne w dolnej części strony.<br/> Aby dopełnić nasze badanie należy ustalić poziom istotności, zazwyczaj jest to 5%. Zbiór danych wynosi 20, a co za tym idzie stopień swobody wynosi 19. Posiadając takie dane możemy odczytać wartość krytyczną z tablicy statystycznej. <span style='text-transform: none;'>$α$</span> dla badanego zbioru i takiej istotności wynosi $1.729$. Ta wartości pozwala nam wyznaczyć obszar krytyczny, a wynosi on $(1.729; + ∞)$"],
        codeSource:["> x <- c(461.93, 458.77, 460.06, 461.88, 462.66, 459.65, 459.06, 461.52, 461.45, 460.41, 458.54, 460.21, 459.07, 459.96, 458.94, 459.78, 459.75, 458.20, 459.91, 458.69)<br/>> mean <- mean(x)<br/>> var <- var(x)<br/>> t.test(x, y = null, alternative = c(\"greater\"), 459.7, paired = false, var.equal = true, conf.level = 0.95 )"],
        result: ["Średnia arytmetyczna<br/>$460.02$<br/>Estymator obciążony wariancji<br/>$1.614196$<br/>Test t studenta<br/>data:  x<br/>$t = 1.1334$, $df = 19$, $p-value = 0.1356$<br/>alternative hypothesis: true mean is greater than $459.7$<br/>95 percent confidence interval: 459.5308<br/>Inf sample estimates: mean of x $460.02$"],
        conclusion: ["Wyniki badań infrmują o tym, iż hipoteza $H_0$ jest nieprawdziwa. Jedną z przesłanem skłaniającom nas do tego wniosku jest wartość t, wynosi ona $1.1334$ i ta wartość nie „mieści się” w obszarze krytycznym. Przyjęta zostałą hipoteza alternatywna mówiąca o tym, iż poziom wydatków statystycznie wzrósł ponad poziom 459.70 zł. Na poziomie ufności wynoszącym 95% stwierdzić można, że rzeczywisty poziom wydatków inwestycyjnych znajduje się w przedziale $459.53 ÷ +∞$. Średni wydatek dla próby wynosi $460.02$ zł " ]
        }];

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
            contents: ["Funkcja wiarygodności ma charakter funkcji łącznego rozkładu prawdopodobieństwa, a posteriori dla próby  $X1,...,Xn$  przy założeniu niezależności poszczególnych pomiarów i jest dana wzorem: <p class='centerEquation'>$$L(x_1,...,x_n; Θ_1,...,Θ_k)=f(x_1; Θ_1,..., Θ_k)f(x_2; Θ_1,..., Θ_k)...f(x_3; Θ_1,..., Θ_k)$$</p> Metoda polega na przeświadczeniu, że zdarzenia o większym prawdopodobieństwie zachodzą częściej niż zdarzenia mniej prawdopodobne. Zakłada się, że uzyskana w losowaniu próba jest realizacją zdarzenia o największym prawdopodobieństwie, co jest równoważne warunkowi osiągnięcia maksimum przez funkcję wiarygodności. Jako estymatory nieznanych parametrów $Θ_1,...,Θ_k$ przyjmuje się takie $Θ↖{`^}_1,...,Θ↖{`^}_k$, dla których funkcja wiarygodności osiąga maksimum. Funkcja $ln L$ osiąga maksimum dla tych samych wartości parametrów co funkcja $L$, a łatwiej ją różniczkować. Poszukiwane jest więc maksimum logarytmicznej funkcji wiarygodności <p class='centerEquation'>$$l = ln` L =∑↖{n}↙{i = 1} ln ` f(x_1; Θ_1,..., Θ_k)$$</p>Warunek na maksimum funkcji $l$ przyjmuje postać układu równań:<p class='centerEquation'></p> Poza tym potrzeba i wystarcza, aby forma kwadratowa <p class='centerEquation'>$$∑↖{k}↙{i = 1}∑↖{k}↙{j = 1}({∂^2` l}/{∂Θ_i∂Θ_j})_{`table{Θ_i = Θ↖{`^}_i};{Θ_j = Θ↖{`^}_j}}` h_ih_j$$</p> była określona ujemnie. $h_i$ i $h_j$ są zmiennymi rzeczywistymi nie zerującymi się jednocześnie."]},{
            id: [13],
            test: ["test19"],
            name: ["Zmienna losowa"],
            href: ["http://prac.im.pwr.edu.pl/~agniesz/rachunek_prawd_MAEW104/wyklady/R_Pr_MAEW104_wyklad7_zmienna_los_dystrybuanta.pdf"],
            contents: ["Zmienna losowa to funkcja $$X: Ω→R$$, dla której dla dowolnego borelowskiego zbioru $$B ⊂ R$$ zbiór:<br/>" +
                        "<span class='centerEquation math'>$$\{ ω∶X(ω)∈B\}=\{X ∈B\}∈F$$</span><br/>" +
                        "Innymi słowy, jest to taka funkcja $$X$$ na zbiorze zdarzeń elementarnych o wartościach liczbowych, " + 
                        "dla której określone są prawdopodobieństwa przyjmowania przez $$X$$ wartości z każdego dowolnego zakresu. " +  
                        "W rachunku prawdopodobieństwa interesuje nas rozkład zmiennej losowej, ewentualnie jej charakterystyki liczbowe. "]}, {
            id: [14],
            test: ["test19"],
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
            id: [15],
            test: ["test19"],
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
            id: [16],
            test: ["test19"],
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
            id: [17],
            test: ["test19"],
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
            id: [18],
            test: ["test19"],
            name: ["Nierówność Jensena"],
            href: ["http://wm.staszic.waw.pl/materialy/5wm/wyklady/dowod-jensena.pdf"],
            contents: ["Nierówność Jensena. Jeżeli <span class='math'>$$f$$</span>  jest funkcją wypukłą w pewnym przedziale, to dla dowolnych " +
                        "liczb <span class='math'>$$x_1, x_2, ..., x_n, (x ≥ 2)$$</span>  z tego przedziału oraz liczb nieujemnych " +
                        "<span class='math'>$$α_1, α_2, ..., α_n$$</span> takich, że <span class='math'>$$α_1 + α_2 + ... + α_n = 1$$</span> zachodzi nierówność:<br/>" +
                        "<span class='centerEquation math'>$$f(∑↙{i = 1}↖{n} α_i \ \ f_i) ≤ ∑↙{i = 1}↖{n} α_i \ \ f(x_i)$$</span>" ]}, {
            id: [19],
            test: ["test09"],
            name: ["Hipoteza"],
            href: ["http://www.naukowiec.org/wiedza/metodologia/hipoteza_642.html"],
            contents: ["Hipotezą możemy nazwać przypuszczenie dotyczące pewnych prawidłowości w świecie. Każdy z nas bardzo często stawia hipotezy. Ale hipotezy to tylko przypuszczenia. W   momencie, gdy zdobywamy dowód dla naszych przypuszczeń hipoteza staje się prawdą. W statystyce takimi dowodami są wyniki testów statystycznych, które wykonuje się, aby zweryfikować prawdziwość postawionych hipotez. Często jednak, od tego jak postawimy hipotezę, zależy to czy będziemy mogli uzyskać na nią odpowiedź. Zdarza się, że stawiane są hipotezy, które zawierają fragmenty wykluczające się, albo też są zbyt rozbudowane. Hipotezy stawiane są na podstawie przesłanek teoretycznych. Hipotezy można podzielić na: zerowe i badawcze; na: kierunkowe i niekierunkowe. <br/> Podział hipotez na: zerową i badawczą jest rozróżnieniem teoretycznym lub też metodologicznym. Otóż hipoteza zerowa informuje o tym co już wiadomo. Natomiast hipoteza badawcza stawiana jest, by sprawdzić nową teorię. Można to rozumieć w dwojaki sposób. Hipoteza zerowa to reguła, który obowiązuje do czasu, gdy badania pokażą, że jest inaczej. Najczęściej stosuje się tą drugą formę, w szczególności w badaniach akademickich. Hipoteza zerowa świadczy o braku zależności, a hipoteza badawcza zakłada istnienie zależności. <br/>Hipoteza kierunkowa zakłada jakiś kierunek zależności. Hipoteza niekierunkowa ma formę eksploracyjną. Pierwsza hipoteza zakłada jakiś kierunek zależności, że dana grupa jest lepsza lub gorsza. W przypadku hipotezy niekierunkowej nie zakładamy żadnego kierunku różnic. Stwierdzamy tylko, że one będą, ale nie wiemy, w którą stronę. Gdy mam podstawy teoretyczne, tzw. przesłanki powinniśmy stawiać hipotezy kierunkowe. Gdy chcemy sprawdzić, czy mogą być jakieś różnice, choć nie wiemy na czyją korzyść powinniśmy postawić hipotezę niekierunkową. Stawianie hipotez kierunkowych i niekierunkowych uzależnia potem wybór rodzaju istotności w testowaniu uzyskanego wyniku w teście statystycznym.<br/>Test statystyczny przeprowadza się w czterech etapach:<ul class='defineList'><li>$$•` $$Sformułowanie hipotez: zerowej i alternatywnej.</li><br/><li>$$•` $$Obliczenie tzw. sprawdzianu testowego.</li><br/><li>$$•` $$Ustalenie poziomu istotności (a), obliczenie liczby stopni swobody (df), a następnie – na podstawie tych dwu wielkości – odczytanie z odpowiedniej tabeli tzw. wartości krytycznej.</li><br/><li>$$•` $$Podjęcie decyzji weryfikacyjnej.</li></ul>"]}, {
            id: [20],
            test: ["test09"],
            name: ["Test t Studenta"],
            href: ["http://pogotowiestatystyczne.pl/slowniczek/test-t-studenta/"],
            contents: ["Test t Studenta jest metodą statystyczną służącą do porównania dwóch średnich między sobą jeśli znamy liczbę badanych osób, średnią arytmetyczną oraz wartość odchylenia standardowego lub wariancji.<br/>Jest to jeden z mniej skomplikowanych i bardzo często wykorzystywanych testów statystycznych używanych do weryfikacji hipotez. Dzięki niemu możemy dowiedzieć się czy dwie różne średnie są różne „niechcący” czy są różne istotnie statystycznie.<br/>Oto najczęściej wykorzystywanej wersji test t Studenta:<br/><ul class='defineList'><li>$$•` $$test t Studenta dla jednej próby </li><br/><li>$$•` $$ test t Studenta dla prób niezależnych </li><br/><li>$$•` $$ test t Studenta dla prób zależnych</li></ul>"]}, {
            id: [21],
            test: ["test09"],
            name: ["P i wnioskowanie"],
            href: ["http://www.ltw.com.pl/stat/egz/stata_lekcja3_part1.pdf"],
            contents: ["P w badaniach naukowych oznacza graniczny poziom istotności statystycznej. Wartość poziomu pokreśla wynik wiarygodności rezultatu. Im wyższy p, tym mniejsza pewność, że relacja obserwowana w próbie odzwierciedla relacje pomiędzy badanymi zmiennymi w populacji generalnej. Poziom istotności p to inaczej prawdopodobieństwo popełnienia błędu nieprawidłowego przyjęcia hipotezy alternatywnej. Podczas wnioskowania statystycznego możemy popełnić 2 poważne błędy (i trzeci mało istotny) :<br/><ul class='defineList'><li>$$•` $$Błąd pierwszego rodzaju (<span class='math'>$α$</span>): Polega na odrzuceniu hipotezy zerowej, gdy tak naprawdę jest ona prawdziwa. Czyli gdy tak strasznie nam się spieszy do hipotezy alternatywnej, że nie patrząc na dane odrzucamy $H_0$</li><br/><li>$$•` $$Błąd drugiego rodzaju (<span class='math'>$β$</span>): Jest odwrotny, czyli gdy przyjmujemy na przekór wszystkiemu $H_0$. </li><br/><li>$$•` $$ Błąd trzeciego rodzaju (<span class='math'>$γ$</span>): Powstaje, gdy postawimy zła hipotezę kierunkową.</li></ul>"]}, {
            id: [22],
            test: ["test09"],
            name: ["Obszar odrzucenia"],
            href: ["https://mfiles.pl/pl/index.php/Obszar_odrzucenia"],
            contents: ["Obszarem odrzucenia hipotezy statystycznej jest taki zbiór liczb że jeżeli sprawdzian przyjmie wartość z tego zbioru, to hipotezę zerową odrzucimy. Obszar odrzucenia nazywa się też obszarem krytycznym, który wyznaczają punkty (wartości) krytyczne. Obszar krytyczny ustalany jest tak, by przed pobraniem próby prawdopodobieństwo <span class='math'>$α$</span>, że sprawdzian znajdzie się w tym obszarze, przy założeniu, że hipoteza zerowa jest prawdziwa, było równe <span class='math'>$α$</span>. Wartość współczynnika <span class='math'>$α$</span> jest umowna. Zwykle przyjmuje się <span class='math'>$α=0.05$</span>, <span class='math'>$α=0.01$</span> lub <span class='math'>$α=0,001$</span>. Sprawia to, że ta sama hipoteza statystyczna może być istotna przy przyjętej,a priori większej wartości <span class='math'>$α$</span> i nieistotna przy mniejszej. Z tego powodu coraz częściej zamiast ustalać wartość <span class='math'>$α$</span> i podawać dwustanowo, że dana hipoteza jest istotna lub nieistotna np. na poziomie $0.05$, podaje się p-wartość (ang. p-value), czyli prawdopodobieństwo odrzucenia hipotezy i mówi np., że hipoteza jest istotna na poziomie $0.043$. Daje to więcej informacji i uniezależnia wyniki analizy od arbitralnie wybranego progu."]}, {
            id: [23],
            test: ["test09"],
            name: ["Średnia arytmetyczna"],
            href: ["http://www.naukowiec.org/wiedza/statystyka/srednia-arytmetyczna_716.html"],
            contents: ["Średnia (arytmetyczna) jest najpopularniejszą statystyką należącą do grupy statystyk opisowych. Jest najbardziej znanym pojęciem statystycznym. Posiadając zbiór obserwacji, pochodzący np. z odpowiedzi 100 osób nie przedstawiamy wyniku dla każdej z nich z osobna. Podajemy za to jedną wartość która opisuje niejako całą naszą przebadaną grupę. Tą wartością właśnie jest średnia. Wartość średnia pochodzi z sumowania poszczególnych wyników i podzielenie tej sumy przez liczbę naszych obserwacji."]}, {
            id: [24],
            test: ["test09"],
            name: [" Wariancja"],
            href: ["http://www.naukowiec.org/wiedza/statystyka/wariancja_719.html"],
            contents: ["Wariancja jest podstawową miarą zmienności obserwowanych wyników. Wariancja informuje o tym, jak duże jest zróżnicowanie wyników w danym zbiorze wyników (zmiennej). Inaczej mówiąc, czy wyniki są bardziej skoncentrowane wokół średniej, czy są małe różnice pomiędzy średnią a poszczególnymi wynikami czy może rozproszenie"]} ]; 