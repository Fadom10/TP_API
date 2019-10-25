$(document).ready(function() {

    $.ajax({
        url: 'http://localhost:8080/liste',
        type: 'GET',
        datatType: 'JSON',
        success: function(resultat, statut) {
            var res = resultat.liste;
            $("#obj").append('<li>' + res + '</li>');
        },

        error: function(resultat, statut, erreur) {


        },


        complete: function(resultat, statut) {



        }

    });

    $("#submit").click(function(e) {
        var valeur = $("#info_val").val();
        var infoVal = { "Valeur": valeur };

        $.ajax({
            url: 'http://localhost:8080/liste/ajouter',
            type: 'POST',
            datatType: 'JSON',
            data: infoVal,
            success: function(resultat, statut) {

            },

            error: function(resultat, statut, erreur) {


            },


            complete: function(resultat, statut) {



            }

        });

    });

})