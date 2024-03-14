document.getElementById ("contacto").addEventListener("submit", function(){
    var nombre = document.querySelector("#nombre").value;
    var correo = document.querySelector("#email").value;       
    var asunto = document.querySelector("#mensaje").value; 
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
    }
    else{
        alert ("nombre: "+ nombre + "\n" +  "correo: " + correo + "\n" + "asunto: "+ asunto )
    }
});  
