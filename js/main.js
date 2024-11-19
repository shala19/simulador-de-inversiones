// Función para mostrar una notificación emergente
function mostrarMundo() {
    //variables con const conseguir del html los datos
    const campoNombre =document.getElementById("nombres").value;
    const campoTelefono =document.getElementById("telefono").value;
    const campoEmail =document.getElementById("email").value;
    const campoMontoIn = parseFloat(document.getElementById("inversion").value);
    const campoTiempoIn =document.getElementById("tiempo").value;
    const conPre = document.getElementById("pre");
    const conPost = document.getElementById("post");
    const tiempoShow = document.getElementById("tiempo-show");
    const interesShow = document.getElementById("interes-show");
    const nombresShow = document.getElementById("nombres-show");
    const emailShow = document.getElementById("email-show");
    const totalShow = document.getElementById("total-show");
    const gananciaShow = document.getElementById("ganancia-show");
    // Cálculo del interés y tiempo, todo dentro del switch
    let interes = 0; 
    let total = 0;
    //para aparecer y desparecer la imagen

    conPost.classList.remove("disabled");
    conPre.classList.add("disabled");

    nombresShow.innerText = campoNombre;
    emailShow.innerText = campoEmail;
    
    switch (campoTiempoIn) {
        case "1":
            tiempoShow.innerText ="12 Meses";
            interesShow.innerText ="0.8%";
            interes = (campoMontoIn * 0.008)*12;
            total= campoMontoIn+interes;
            gananciaShow.innerText = interes;
            totalShow.innerText = total;
           
            
            break;
        case "2":
            tiempoShow.innerText="24 Meses";
            interesShow.innerText ="1.3%";
            interes = (campoMontoIn * 0.013)*24;
            total= campoMontoIn+interes;
            gananciaShow.innerText = interes;
            totalShow.innerText = total;
        
            break;
        case "3":
            tiempoShow.innerText="36 Meses";
            interesShow.innerText ="1.7%";
            interes = (campoMontoIn * 0.017)*36;
            total= campoMontoIn+interes;
            gananciaShow.innerText = interes;
            totalShow.innerText = total;
            
            break;
    
        default:
            break;
    }
    
}

// Obtenemos el botón por su ID y le asignamos el EventListener
document.getElementById("simulador-btn").addEventListener("click", mostrarMundo);


