//AUTOR: ANDRÉS ALZATE ECHEVERRY
//LINKEDING: ANDRÉS ALZATE ECHEVERRY
//FECHA 10/25/2018
//CODIGO LIBRE

//BUCLE PARA LA FUNCIONALIDAD DEL MENÚ HAMBURGUESA

$(document).ready(function(){
    $(".open-close-nav").click(function(){//Boton Cerrar menú
        $(".aae-menu-hide").hide()//Ocultando menú
        $("#absoluting").addClass("col-md-12")//La zona de videos se expande
        $(".open-close-nav").hide()//Quitando este botón de cerrar 
        $(".open-nav-show").addClass("open-nav-show-d-block")//Habilitando el botón nuevo para abrir
    });

    $(".open-nav-show").click(function(){ //Boton Abrir menú
        $(".aae-menu-hide").show() //Mostrando menú
        $("#absoluting").removeClass("col-md-12")//La zona de videos se vuelve a contraer
        $(".open-nav-show").removeClass("open-nav-show-d-block")//Desabilitando este botón para habrir
        $(".open-close-nav").show()//Habilitando el botón inicial de cerrar
    })
});