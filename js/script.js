$(function()
{



   var ScreenShot = {
                        canvas      : $("#canvas")[0],
                        width       : 760,
                        height      : 500
                };




    var canvas = $('#canvas');
    var context = canvas[0].getContext('2d');
    var señal=[];
     var z=127;
     var p=0;
     var dashList = [9, 3];
    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(100, 300);
    context.lineTo(650, 300);
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    //Flecha...
    context.beginPath();
    context.moveTo(640, 290);
    context.lineTo(650, 300);
    context.lineTo(640, 310);
    context.lineTo(640, 290);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = 'black';
    context.fill();
    context.stroke();
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("Amplitud", 60, 30);
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("Tiempo", 660, 300);
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("0", 80, 320);
    context.font = "normal 20px Arial";
    context.fillStyle = "black"
    context.fillText("1", 80, 200);




//Lineas Punteadas

   for (var i = 0; i < 6; i++) {
     
  
    
    context.moveTo(165+p, 90);
    context.lineTo(165+p, 300);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.setLineDash(dashList);
    p+=65;
   };





swal("Digite 0 o 1!", "Para graficar una señal digital")

$(document).keypress(function(event)
    {
  
        if(event.keyCode ==48 || event.keyCode == 49 )
        {

             var letraPresiona = String.fromCharCode(event.keyCode);
            señal.push(letraPresiona);
        
             swal({   title: "", imageUrl: "imagenes/lapiz.png" , type:"info", text: "Has escrito un: "+letraPresiona,   timer: 1000,   showConfirmButton: false });
           
            if (señal.length==6) {


                for (var i = 0; i < señal.length; i++) {
                context.font = "normal 20px Arial";
                context.fillStyle = "red"
                context.fillText(""+señal[i], z, 170);
                z=z+65;
                };

             
       

                swal({   title: "!Graficando!",   text: "Espere un momento.",   timer: 2000,   showConfirmButton: false });
                
                graficar();

            }

                
         }

        else{
          swal({   title: "!Oppss!",  type:"error", text: "Dato Erroneo, Solo 0 y 1",   timer: 1000,   showConfirmButton: false });
            }
    });



//graficar();

function graficar () {

  context.getLineDash(dashList);
    context.beginPath();


//Señal 1
    if (señal[0]==0) {



    
    context.moveTo(100, 300);
    context.lineTo(165, 300);
  
    };

     if (señal[0]==1) {



    context.moveTo(100, 200);
    context.lineTo(165, 200);
    

    };


//Señal 2

    if (señal[1]==0) {

        if (señal[0]==0) 
        {   
                context.lineTo(230, 300);  
        }
        
       else
        { 
               
               context.lineTo(165, 300);
               context.lineTo(230, 300);
        }

    };




     if (señal[1]==1) {

              if (señal[0]==0) 
            {

            context.lineTo(165, 200);
             context.lineTo(230, 200);

            }
        else{

             context.lineTo(230, 200);

            }
    
    };



///Señal 3
    if (señal[2]==0) 
        {

            if (señal[1]==0) 
                {
                     context.lineTo(295, 300);  
                } 
                else
                    {

                       
                        context.lineTo(230, 300);
                        context.lineTo(295, 300);

                       
                    };

        };


    if (señal[2]==1) 
        {
               if (señal[1]==0) 
                {

             context.lineTo(230, 200);
             context.lineTo(295, 200);

                }
        else{

             context.lineTo(295, 200);

            };

            
        };

   //Señal 4   
   

if (señal[3]==0) 
    {
         if (señal[2]==0) 
                {
                     context.lineTo(360, 300);  
                } 
                else
                    {

                       
                        context.lineTo(295, 300);
                        context.lineTo(360, 300);

                       
                    };

    };


if (señal[3]==1)
 {
    if (señal[2]==0) 
    {

             context.lineTo(295, 200);
             context.lineTo(360, 200);

    }
        else{

             context.lineTo(360, 200);

            };
 };


//Señal 5


if (señal[4]==0) 
    {
         if (señal[3]==0) 
                {
                     context.lineTo(425, 300);  
                } 
                else
                    {

                       
                        context.lineTo(360, 300);
                        context.lineTo(425, 300);

                       
                    };

    };


if (señal[4]==1)
 {
    if (señal[3]==0) 
    {

             context.lineTo(360, 200);
             context.lineTo(425, 200);

    }
        else{

             context.lineTo(425, 200);

            };
 };


//Señal 6

if (señal[5]==0) 
    {
         if (señal[4]==0) 
                {
                     context.lineTo(490, 300);  
                } 
                else
                    {

                       
                        context.lineTo(425, 300);
                        context.lineTo(490, 300);

                       
                    };

    };


if (señal[5]==1)
 {
    if (señal[4]==0) 
    {

             context.lineTo(425, 200);
             context.lineTo(490, 200);

    }
        else{

             context.lineTo(490, 200);

            };
 };





    context.lineWidth = 3;
    context.strokeStyle = "red";
    context.stroke();


}



 $("#guardar").click(function(event) {
        this.download =  "señal_digital.png";
        this.href = ScreenShot.canvas.toDataURL();
    });









});
