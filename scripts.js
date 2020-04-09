function logarMensagem() {
    console.log("Executei a função.")
}

function listarObjetivos() {
    window.location.replace("http://localhost:8080/examples")
}

function trocarClasse() {

    var arrayDeElementosDaClasse = document.getElementsByClassName("verde")
    var classeDesejada = "vermelho";

    if (arrayDeElementosDaClasse.length == 0) {
        classeDesejada = "verde"
        arrayDeElementosDaClasse = document.getElementsByClassName("vermelho");
    }

    while (arrayDeElementosDaClasse.length > 0) {
        arrayDeElementosDaClasse[0].className = classeDesejada
    }
}

function criaListaDoBack() {

    $.getJSON( "http://localhost:8080/examples", function( data ) {
        var items = [];

        console.log(data);

        $.each( data, function( key, val ) {
          items.push( "<tr class='trJoao'> <td>" + val.exampleId + "</td><td>" + val.exampleText + "</td></tr>")
        });


        console.log(items)
        // TRANSFORMAR EM TABLE
       
        $( "<table/>", {
          "class": "my-new-table",
          html: items.join( "" )
        }).appendTo( "body" );
      });
}