function validacion(){

var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById('apellido').value;
var direccion = document.getElementById('direccion').value;
var email = document.getElementById('email').value;
var telefono = document.getElementById('telefono').value;

if(nombre == " "){
    alert("ingrese nombre");
   return;
}

if(apellido == " "){
    alert("ingrese apellido");
    return;
}

if(direccion == " "){
    alert("ingrese Dirección");
    return;
}

var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
if (!expresion.test(email)){
    alert("ingrese email válido");
    return;
}

if(telefono == ""){
    alert("ingrese teléfono");
    return;
}

return true;
}



function agregar(nombre, apellido, email, direccion, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
};

var datos = [];

function agregarDatos() {
 
    var persona = new agregar(nombre, apellido, email, direccion, telefono);
        
    datos.push(persona);
    console.log(datos);
}
  
function mostrarData() {
    var contenedor = document.getElementById('datos').value;
    var cliente = document.getElementById('clientes').value;
    var contenido = document.createElement("p")
    var textoP = document.createTextNode(contenedor);
    contenido.appendChild(textoP); 
    cliente.appendChild(contenido);
    var contenido = '';

   
    agregarDatos.forEach(function(persona) {
        contenido += '<div>'+ '<font color= #FFFFFF>' + '<strong>' + persona.nombre.toUpperCase(0).charAt(0) + persona.nombre.slice(1).toLowerCase() + " " + persona.apellido.toUpperCase(0).charAt(0) + persona.apellido.slice(1).toLowerCase() + '</strong>' + '<br>' +
            '<strong>' + 'Email: ' + '</strong>' + persona.email + '<br>' +
            '<strong>' + 'Dirección: ' + '</strong>' + persona.direccion + '<br>' +
            '<strong>' + 'telefono: ' + '</strong>' + persona.telefono + '</font>'+ '</div><br>';
        console.log(contenido);
    });
    innerHTML.cliente;
    }

