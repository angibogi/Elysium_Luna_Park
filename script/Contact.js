
    function myFunction() {
    alert("Il messaggio è stato inviato correttamente, verrai ricontattato a breve!");
}




    function mostraMessaggio() {
    window.alert("Il messaggio è stato inviato correttamente!");
}
    //-->



    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
