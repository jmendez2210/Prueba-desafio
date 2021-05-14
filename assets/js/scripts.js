$(function(){

  // inicio  selectores

    var padre = $('.card-body').parent().find('a');

    var btnUno = padre.eq(0);
    var btnDos = padre.eq(1);
    var btnTres = padre.eq(2);
    var btnCuatro = padre.eq(3);


    // USO DEL METODO CHILDREN()
  	var hijos = $('.card').children();
  	console.log('Muestra los hijos--->', hijos);

   	var textoUno = hijos.eq(1).find('p.card-text').hide();
  	var textoDos = hijos.eq(3).find('p.card-text').hide();
    var textoTres = hijos.eq(5).find('p.card-text').hide();
    var textoCuatro = hijos.eq(7).find('p.card-text').hide();
    console.log('Mostrar los textos--->', textoUno,textoDos,textoTres);


    //EVENTOS EN JQUERY

    btnUno.click(function(event){
        event.preventDefault();
        console.log('Hacemos click en el boton uno');
        textoUno.fadeToggle('fast');
        hola();
      });

      btnDos.click(function(event){
          event.preventDefault();
          console.log('Hacemos click en el boton uno');
          textoDos.fadeToggle('fast');
          hola();
        });

        btnTres.click(function(event){
            event.preventDefault();
            console.log('Hacemos click en el boton uno');
            textoTres.fadeToggle('fast');
            hola();
          });

          btnCuatro.click(function(event){
              event.preventDefault();
              console.log('Hacemos click en el boton uno');
              textoCuatro.fadeToggle('fast');
              hola();
            });

      $('[data-toggle="tooltip"]').tooltip()

      $('[data-toggle="popover"]').popover()



  });
