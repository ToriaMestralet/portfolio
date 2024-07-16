

function validarFormulario() {
    // Reiniciar los mensajes de error
    document.getElementById("nombreError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("asuntoError").innerHTML = "";
    document.getElementById("mensajeError").innerHTML = "";
    
    // Reiniciar los estilos de los campos
    document.forms["form"]["nombre"].style.border = "none";
    document.forms["form"]["email"].style.border = "none";
    document.forms["form"]["asunto"].style.border = "none";
    document.forms["form"]["mensaje"].style.border = "none";

    // Obtenemos los valores de los campos
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

   
    // Validamos que todos los campos estén completos
    if (nombre == "") {
        document.getElementById("nombreError").innerHTML = "Por favor, ingrese su nombre.";
        document.forms["form"]["nombre"].style.borderBottom = "2px solid rgb(248, 60, 60)";
      
        return false;
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Por favor, ingrese su correo electrónico.";
        document.forms["form"]["email"].style.border = "2px solid rgb(248, 60, 60)";
    
        return false;
    }

    if (asunto == "") {
        document.getElementById("asuntoError").innerHTML = "Por favor, ingrese un asunto.";
        document.forms["form"]["asunto"].style.border = "2px solid rgb(248, 60, 60)";
 
        return false;
    }

    if (mensaje == "") {
        document.getElementById("mensajeError").innerHTML = "Por favor, ingrese un mensaje.";
        document.forms["form"]["mensaje"].style.border = "2px solid rgb(248, 60, 60)";
     
        return false;
    }

    // Validamos el formato de email
    var emailFormato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailFormato)) {
        document.getElementById("emailError").innerHTML = "Por favor, introduzca un formato de correo electrónico válido.";
        document.forms["form"]["email"].style.border = "2px solid rgb(248, 60, 60)";
     
        return false;
    }

    // Validamos el máximo de caracteres 
    if (nombre.length > 50) {
        document.getElementById("nombreError").innerHTML = "El nombre no puede tener más de 50 caracteres.";
        document.forms["form"]["nombre"].style.border = "2px solid rgb(248, 60, 60)";
      
        return false;
    }
    if (asunto.length > 50) {
        document.getElementById("asuntoError").innerHTML = "El asunto no puede tener más de 50 caracteres.";
        document.forms["form"]["asunto"].style.border = "2px solid rgb(248, 60, 60)";
   
        return false;
    }

    if (mensaje.length > 200) {
        document.getElementById("mensajeError").innerHTML = "El mensaje no puede tener más de 300 caracteres.";
        document.forms["form"]["mensaje"].style.border = "2px solid rgb(248, 60, 60)";
   
        return false;
    }

    // Si todas las validaciones pasan, retornamos true para enviar el formulario

    return true;
}

