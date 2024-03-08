/* Espera a que el documento esté completamente cargado */
$(document).ready(function(){
    /* Cuando se hace clic en el botón de menú */
    $('#burger').click(function(){
        /* Alterna la clase 'abierto' en el menú para abrir o cerrar */
        $('.menu').toggleClass('abierto');
        /* Alterna la clase 'abierto' en el botón de menú para cambiar su apariencia */
        $('#burger').toggleClass('abierto');
    });
    
    /* Cuando se hace clic en un enlace dentro del menú */
    $('.menu-link').click(function(){
        /* Cierra el menú al alterar la clase 'abierto' */
        $('.menu').toggleClass('abierto');
        /* Restaura la apariencia del botón de menú al alterar la clase 'abierto' */
        $('#burger').toggleClass('abierto');
    });
});

// // Espera a que el documento esté completamente cargado
// document.addEventListener("DOMContentLoaded", function() {
//     // Obtiene el botón de menú y el menú
//     var burger = document.getElementById("burger");
//     var menu = document.querySelector(".menu");
//     // Obtiene todos los enlaces dentro del menú
//     var menuLinks = document.querySelectorAll(".menu-link");

//     // Agrega un event listener al botón de menú
//     burger.addEventListener("click", function() {
//         // Alterna la clase 'abierto' en el menú para abrir o cerrar
//         menu.classList.toggle("abierto");
//         // Alterna la clase 'abierto' en el botón de menú para cambiar su apariencia
//         burger.classList.toggle("abierto");
//     });

//     // Agrega un event listener a cada enlace dentro del menú
//     menuLinks.forEach(function(link) {
//         link.addEventListener("click", function() {
//             // Cierra el menú al alterar la clase 'abierto'
//             menu.classList.toggle("abierto");
//             // Restaura la apariencia del botón de menú al alterar la clase 'abierto'
//             burger.classList.toggle("abierto");
//         });
//     });
// });

