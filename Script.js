//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

(function(){
    emailjs.init("-oQgMr62XBOuBda4A"); 
})();

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("c-sharp");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("phyton");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
};

// Inicializar EmailJS
(function() {
    emailjs.init("-oQgMr62XBOuBda4A"); 
})();

// Manejo del envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        from_name: name,
        from_phone: phone,
        from_email: email,
        subject: subject,
        message: message
    };

    emailjs.send('service_z0jqxxf', 'template_cs2ww5f', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('¡Mensaje enviado!');
        }, function(error) {
           console.log('FAILED...', error);
        });
});
