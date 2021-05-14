$(document).ready(function() {

  if (window.innerWidth < 768) {
    $('.btn').addClass('btn-sm');
  }

  // Medida por defecto (Sin ningún nombre de clase)
  else if (window.innerWidth < 900) {
    $('.btn').removeClass('btn-sm');
  }

  // Si el ancho del navegador es menor a 1200 px le asigno la clase 'btn-lg'
  else if (window.innerWidth < 1200) {
    $('.btn').addClass('btn-lg');
  }

});



$(function() {
  $('[data-toggle="tooltip"]').tooltip()
});


$(document).ready(function(){
  // evento click
    $('#clic-evento').click(function(){
      alert("El correo fue enviado correctamente...");
    });
  // dblclick cambio color letra
  var toggle = true; // Toggle state
         $("h4").on({
             dblclick: function () {
                 if (toggle) {
                     // Change fonts title to red
                     $(this).css("color", "red");
                     toggle = false;
                 } else {

                      // Change fonts title to black
                     $(this).css("color", "black");
                     toggle = true;
                 }
             }
         });
         // inicio toggle
         $('#ocultar-contenido').on('click',function(){
      $('p').toggle();
   });
   // iniciotiramisu
   $('#ocultar-contenido-TIRAMISÚ').on('click',function(){
   $('p').toggle();
   });
   // inicioplateada
   $('#ocultar-contenido-PLATEADA').on('click',function(){
   $('p').toggle();
   });




     });
