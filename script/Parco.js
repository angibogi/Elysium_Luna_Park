
    $(document).ready(function(){
    $('.container>img' ).click(function(){
        $('.col-lg-6 > div img').attr('src',this.src);
        $('.col-lg-6 > div img').attr('alt',this.alt);

        $('#titolo ').text('Drop Tower')
    })
});

    $(document).ready(function(){
    $('.container>img:first-child' ).click(function(){

        $('#titolo ').text('Drop Tower')

    })
});

    $(document).ready(function(){
    $('.container>img:nth-of-type(2)' ).click(function(){

        $('#titolo ').text('FerrisWheel')
    })
});

    function rainbow() {
    document.getElementById("paragrafo").innerHTML = " La <strong>Rainbow Road </strong>sono montagne russe alimentate ad energia solore proveniente da pannelli fotovoltaici presenti nel parco.<br>\n" +
        "\n" +
        "                    Tramite un motore elettrico i vagoni vengono trainati in cima alla struttura e una volta raggiunta la fase di discesa, l’energia accomulata<br>\n" +
        "                    verrà convertita in energia cinetica. ";
}
    var btn= document.getElementById("Rainbow");
    btn.addEventListener("click", rainbow);

    function drop() {
    document.getElementById("paragrafo").innerHTML = " La <strong>Drop Tower </strong> consiste in una torre alta 50m con una cabina che viene sollevata verso l'alto e poi lasciata cadere liberamente verso il basso. Durante la caduta, gli ospiti sperimentano una forte accelerazione e una sensazione di peso zero.\n" +
        "\n ";
}
    var btn= document.getElementById("drop");
    btn.addEventListener("click", drop);

    function ruota() {
    document.getElementById("paragrafo").innerHTML = " La <strong>FerrisWheel </strong> è la ruota panoramica di Elysium ed è un'attrazione iconica del parco. La ruota è alta 30 metri e si compone di 22 capsule trasparenti che possono ospitare fino a 5 persone ciascuna. Durante la rotazione, le capsule si muovono lentamente, dando agli ospiti la possibilità di scattare foto mozzafiato.\n" +
        "\n";
}
    var btn= document.getElementById("ruota");
    btn.addEventListener("click", ruota);


    function auto() {
    document.getElementById("paragrafo").innerHTML = " La <strong>BumperCars</strong>, gli ospiti possono sperimentare il divertimento di guidare delle piccole automobili alimentate da energia solare. L'obiettivo è quello di scontrarsi con altre auto, mettendo alla prova le proprie abilità di guida. Gli ospiti possono scegliere di condividere l'auto con un altro passeggero o di prenderne il controllo da soli." +
        "\n";
}
    var btn= document.getElementById("auto");
    btn.addEventListener("click", auto);

    $(document).ready(function(){
    $('.container>img:nth-of-type(3)' ).click(function(){

        $('#titolo ').text('Rainbow road')
    })
});

    $(document).ready(function(){
    $('.container>img:nth-of-type(4)' ).click(function(){

        $('#titolo ').text('BumperCars')
    })
});

    $(document).ready(function(){
    $('.container>img:first-child').on('click', function(){
        $(this).css('border-color','red');
        $('.container>img:nth-of-type(2),.container>img:nth-of-type(3),.container>img:nth-of-type(4)').css('border-color','black');
    });
});

    $(document).ready(function(){
    $('.container>img:first-child' ).click(function(){

        $('.height strong ').text('50m')
        $('.wait strong ').text('25minuti')

    })
});
    $(document).ready(function(){
    $('.container>img:nth-of-type(2)' ).click(function(){

        $('.height strong ').text('30m')
        $('.wait strong ').text('22minuti')

    })
});
    $(document).ready(function(){
    $('.container>img:nth-of-type(3)' ).click(function(){

        $('.height strong ').text('165m')
        $('.wait strong ').text('20minuti')

    })
});
    $(document).ready(function(){
    $('.container>img:nth-of-type(4)' ).click(function(){
        $('.height strong ').text('10m')
        $('.wait strong ').text('15min')


    })
});

    $(document).ready(function(){
    $('.container>img:nth-of-type(2)').on('click', function(){
        $(this).css('border-color','#E26552');
        $('.container>img:first-child,.container>img:nth-of-type(3),.container>img:nth-of-type(4)').css('border-color','#191715');
    });
});

    $(document).ready(function(){
    $('.container>img:nth-of-type(3)').on('click', function(){
        $(this).css('border-color','#E26552');
        $('.container>img:first-child,.container>img:nth-of-type(2),.container>img:nth-of-type(4)').css('border-color','#191715');
    });
});

    $(document).ready(function(){
    $('.container>img:nth-of-type(4)').on('click', function(){
        $(this).css('border-color','#E26552');
        $('.container>img:first-child,.container>img:nth-of-type(2),.container>img:nth-of-type(3)').css('border-color','#191715');
    });
});

