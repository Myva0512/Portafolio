document.getElementById ("contacto").addEventListener("submit", function(){
    var nombre = document.querySelector("#nombre").value;
    var correo = document.querySelector("#email").value;       
    var asunto = document.querySelector("#mensaje").value; 
    alert (nombre + "\n" + correo + "\n" + asunto )
});  