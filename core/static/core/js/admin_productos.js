$("#form").validate({
  rules: {
    id: {
      required: true,
    },
    nombre: {
      required: true,
    },
    descripción: {
      required: true,
    },
    precio: {
      required: true,
      digits: true,
      number: true,
    },
    descuento: {
      required: true,
      digits: true,
      number: true,
      range: [0, 100],
    },
    oferta: {
      required: true,
      digits: true,
      number: true,
      range: [0, 100],
    },
   }, // ---> Fin de reglas
  messages: {
    id: {
      required: "tiene que ingresar una ID",
    },
    nombre: {
      required: "tiene que ingresar un nombre del producto",
    },
    descripción: {
      required: "debe ingresar la descripción del producto",
    },
    precio: {
      required: 'Debe ingresar el precio del producto',
      number: 'Debe ingresar un número',
      digits: 'Debe ingresar un número entero',
    },
    descuento: {
      required: "debe ingresar el % de descuento para el suscriptor",
      number: "debe ingresar un numero",
      digits: "debe ingresar un número entero",

      range: "tiene que ingresar un descuento entre 0 a 100",
    },
    oferta: {
      required: "tiene que ingresar si esta en oferta",
      number: 'Debe ingresar un número',
      digits: 'Debe ingresar un número entero',
      range: 'El descuento debe ser un número entre 0 y 100',
    },
  },
});