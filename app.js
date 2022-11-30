
$(document).ready(
    function(){
        const titulo = document.querySelector(".titulo");
        const formulario = document.querySelector(".formulario");
        const ingresos = document.querySelector(".ingresos");
        const montodelCredito = document.querySelector(".montodelCredito");
        const formadePago = document.querySelector(".formadePago");
        const plazo = document.querySelector(".plazo");
        const boton = document.getElementById("boton");
        const resultado = document.getElementById("Titulo")
		const Cotizacion = document.getElementById("cotizacion")
        console.log("Este es el boton:" + ingresos);
        $.ajax({

                    url : './datos.txt',
                    type : 'GET',
                    data : {
                        'credito' :'aprobado'  
                    },
                    dataType:'json',
                    success : function(data) {              
                       Cotizacion.textContent = 'Cotizacion del dia ' + data.valorpeso +  ' ARG / 1 USD '
                    },
                    error : function(request,error)
                    {
                        alert("Ërror al Obtener Cotizacion , verfique Path a Datos.txt");
                    }
                });

        $(".botoncalcular").hover(
            function(){
                    $(this).css("background-color", "#176c0b");
                    }, 
            function(){
                    $(this).css("background-color", "#2ec518");
                    }
        );
        
        boton.addEventListener("click", pedirDatos);
        function pedirDatos() {    
            if(ingresos.value >= 120000){
                
                resultado.textContent = "¡Su crédito fue APROBADO!"
               
            }else{
                resultado.textContent = "UD NO CUMPLE CON LOS REQUISITOS"
            }
        }
        
});
