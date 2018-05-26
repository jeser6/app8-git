// JavaScript Document
//App1
$(document).ready(function (e){
 document .addEventListener("deviceready",function(){
  $('#disp table td').eq(3).text(device.model);
  $('#disp table td').eq(5).text(device.cordova);
  $('#disp table td').eq(7).text(device.platform);
  $('#disp table td').eq(9).text(device.version);
  $('#disp table td').eq(11).text(device.uuid);
 document.addEventListener("pause",function(){
  escribehistoria ('la app se pausó');
 },false);//pause
 document.addEventListener("resume",function(){
  escribehistoria ('la app se reinició');
 },false);//resume
 document.addEventListener("online", function(){
  escribehistoria ('la app se conecto a la red');
 },false);//se conecto
 document.addEventListener("offline",function(){
  escribehistoria ('la app se desconecto de la red');
 },false);//se desconecto
  
  
 },false);//ready device
  
  
 });//document
 
function escribehistoria(accion){
 $('#eHistoria').append('<li>'+accion+'</li>');
}


//App5
//tap sonar
$(document).ready(function(e){
 document.addEventListener("deviceready",function(){
  $('#sonar').tap(function(){
   navigator.notification.beep(2) 
});
//vibrar
$('#vibrar').tap(function(){
 navigator.notification.vibrate(2000);
});
 },false);//cierre deviceready
});//cierre del ready

//App7
//Ready
$(document).ready(function(e) {
   document.addEventListener("deviceready",function(){//Escuchador de enventos
	    $('#izquierda').on("swipeleft", function(){//Desliza hacia la Izquierda
			navigator.notification.alert("Deslizó hacia la Izquierda",function(){"aplicacion7","OK"});
                                                  });
		 $('#derecha').on("swiperight", function(){//Desliza hacia la derecha
			 navigator.notification.confirm("¿Qué quieres hacer?",function(op){//Aparece ek mensaje de confirmación
           switch(op)
           {
           	 case 1:
           	 navigator.notification.beep(2);//Suena el dispositivo
             break;
 
             case 2:
           	 navigator.notification.vibrate(3000);//Vibra el dispositivo
             break;  	
           }
       },"aplicacion7","Beeper,Vribrar,Cancelar");
          
                                                                                });



                                                    },false);//cierre deviceready
                                                      });//cierre del ready