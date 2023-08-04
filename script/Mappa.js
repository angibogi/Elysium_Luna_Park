
    function hideDiv() {
    document.getElementById('description').style.display = "none";
}

    function text0() {
    document.getElementById("internalp").innerHTML = "La Rainbow Road sono montagne russe alimentate ad energia solare proveniente da pannelli fotovoltaici presenti nel parco. Tramite un motore elettrico i vagoni vengono trainati in cima alla struttura e una volta raggiunta la fase di discesa, l’energia accomulata verrà convertita in energia cinetica.";
    document.getElementById("title").innerHTML = "Rainbow Road";
    document.getElementById("internalimg").src="./images/rainbow_road.png";
}

    function text1() {
    document.getElementById("internalp").innerHTML = "La drop tower consiste in una torre alta 50m con una cabina che viene sollevata verso l'alto e poi lasciata cadere liberamente verso il basso. Durante la caduta, gli ospiti sperimentano una forte accelerazione e una sensazione di peso zero.";
    document.getElementById("title").innerHTML = "Drop Tower";
    document.getElementById("internalimg").src="./images/drop_img.png";
}

    function text2() {
    document.getElementById("internalp").innerHTML = "Nel nostro ristorante, Rino si impegna a servire solo piatti preparati con ingredienti di stagione e a basso impatto ambientale. Siamo orgogliosi di lavorare a stretto contatto con i produttori locali per garantire l'approvvigionamento di ingredienti di alta qualità e sostenere pratiche sostenibili nella nostra cucina.";
    document.getElementById("title").innerHTML = "Restaurant";
    document.getElementById("internalimg").src="./images/restaurant_img.png";
}

    function text3() {
    document.getElementById("internalp").innerHTML = "Nel nostro autoscontro, gli ospiti possono sperimentare il divertimento di guidare delle piccole automobili alimentate da energia solare. L'obiettivo è quello di scontrarsi con altre auto, mettendo alla prova le proprie abilità di guida. Gli ospiti possono scegliere di condividere l'auto con un altro passeggero o di prenderne il controllo da soli.";
    document.getElementById("title").innerHTML = "Bumper Cars";
    document.getElementById("internalimg").src="./images/bumper_img.png";
}

    function text4() {
    document.getElementById("internalp").innerHTML = "La ruota panoramica di Elysium è un'attrazione iconica del parco. La ruota è alta 30 metri e si compone di 22 capsule trasparenti che possono ospitare fino a 5 persone ciascuna. Durante la rotazione, le capsule si muovono lentamente, dando agli ospiti la possibilità di scattare foto mozzafiato.";
    document.getElementById("title").innerHTML = "Ferris Wheel";
    document.getElementById("internalimg").src="./images/ferris_img.png";
}

    function text5() {
    document.getElementById("internalp").innerHTML = "Non fatevi ingannare dalla dolce melodia, la giostra dei cavalli ruota molto velocemente! Potreste sentire il vento sfrecciare tra i capelli e il cuore che batte forte mentre i cavalli salgono e scendono con agilità. Ma non preoccupatevi, la giostra è perfettamente sicura e vi farà vivere un'esperienza indimenticabile.";
    document.getElementById("title").innerHTML = "Carousel Helios";
    document.getElementById("internalimg").src="./images/carousel_img.png";
}

    function showDiv() {
    document.getElementById('description').style.display = "inline";

}

    function fire0() {
    text0();
    showDiv();
}

    function fire1() {
    text1();
    showDiv();
}

    function fire2() {
    text2();
    showDiv();
}

    function fire3() {
    text3();
    showDiv();
}

    function fire4() {
    text4();
    showDiv();
}

    function fire5() {
    text5();
    showDiv();
}

