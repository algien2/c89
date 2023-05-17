//var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var width=screen.width;
    new_with=screen.width-70;
    new_height=screen.height-300;
    if (width<992){
    document.getElementById("mycanvas").width=new_with;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";}
    color = "black";
    width_of_line = 2;

    //Define las variables "new_width" y "new_height" para almacenar el nuevo ancho y alto de la pantalla.


    /*Si el tamaño de la pantalla es inferior a 992 (significa 992 px), cambia el ancho y el alto del
     lienzo con el nuevo ancho y la nueva altura. */


    //Cambia el evento 'mousedown' por evento 'touchstart'
    canvas.addEventListener("touchstart", my_touchstart);  
    //Cambia la funcion a 'my_touchstart'  
    function my_touchstar(e)
    {
        //Muestra my_toustart en la consola.
console.log("my_touchstart")

        //Inicio de actividad adicional
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Finaliza la actividad adicional
last_position_of_x=e.touches[0].clientx-canvas.offsetleft;
last_position_of_y=y=e.touches[0].clienty-canvas.offsetleft;
        //Actualiza last_position_of_x_touch y last_position_of_y_touch aquí.
       



    }

    canvas.addEventListener("touchmove", my_touchmove);
     function my_touchmove(e) { 
        console.log("my_touchMove");
      current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
       current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        // Igual que la app pasada de pintar
         ctx.beginPath();
         ctx.strokeStyle = color;
          ctx.lineWidth = width_of_line;
           console.log("Última posición de las coordenadas X y Y = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
             ctx.moveTo(last_position_of_x, last_position_of_y);
              console.log("Posición actual de las coordenadas X y Y = ");
               console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
                ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
                 ctx.stroke();
                  last_position_of_x = current_position_of_touch_x;
                   last_position_of_y = current_position_of_touch_y;
                   // fin de la app pasada de pintar 
                } 
                // Igual que la app pasada

    //Actividad adicional para despejar el área.

    

