// ibjeto.metodo(json)

$(document).ready(function() {

  $.validator.addMethod("rutChileno", function(value, element) {
    //eliminar punto y guion del rut 
    value = value.replace(/[.-]/g, "");

    //validar que el rut tenga 8 o 0 dígitos
    if (value.length < 8 || value.length > 9) {
      return false;
    }

    //validar que el ultimo dígito sea un numero o una "k"
    var validChar = "0123456789k";
    var lastChar = value.charAt(value.length - 1).toUpperCase();
    if (validChar.indexOf(lastChar) == 1) {
      return false;
    }

          // Calcular el dígito verificador
          var rut = parseInt(value.slice(0, -1), 10);
          var factor = 2;
          var sum = 0;
          var digit;
          while (rut > 0) {
            digit = rut % 10;
            sum += digit * factor;
            rut = Math.floor(rut / 10);
            factor = factor === 7 ? 2 : factor + 1;
          }
          var dv = 11 - (sum % 11);
          dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
      
          // Validar que el dígito verificador sea correcto
          return dv === lastChar;
        }, "Por favor ingrese un RUT válido.");


  $("#formulario_misdatos").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true
      },
      nombre: {
        required: true,
      },
      apellidos: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      dirección: {
        required: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
    }, // ---> Fin de reglas
    messages: {
      rut: {
        required: "El campo rut es obligatorio",
      },
      nombre: {
        required: "El campo nombre es obligatorio",
      },
      apellidos: {
        required: "apellido es un campo obligatorio",
      },
      email: {
        required: "El email es un campo requerido",
        email: "El email no cumple el formato de un correo",
      },
      dirección: {
        required: "la dirección es obligatoria",
      },
      password: {
        required: "La contraseña es un campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual al campo contraseña",
      },
    },
  });

});