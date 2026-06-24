// Inicializa el tooltip en el botón del formulario. 
$(function() {
    $('#tooltipjs').tooltip();
});

//Muestra una alerta al hacer click en el botón con id=tooltipjs (que dice enviar en el formulario de contacto). 
$(function() {
    $('#tooltipjs').click(function() {
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
    })
});