
const body = document.body;
const listaProyectos = document.querySelectorAll('.lista-proyectos');


//cambio de icono de dark mode
const darkIcono = document.getElementById("icono-dark-mode");

darkIcono.addEventListener("click", () => {
    if (darkIcono.getAttribute("src") === "assets/brillo.png") {
        darkIcono.setAttribute("src", "assets/oscuro.png");
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('body').style.color = "black";
        listaProyectos.forEach(element => {
            element.style.backgroundColor = "white";
            element.style.boxShadow = "-9px 9px 18px #5a5a5a", +
                "9px -9px 18px #ffffff";

        });
        document.getElementById("profile").style.boxShadow = "0px 0px 18px 2px  rgb(27, 0, 35)";

    } else {
        darkIcono.setAttribute("src", "assets/brillo.png");
        document.querySelector('body').style.backgroundColor = "#16161d";
        document.querySelector('body').style.color = "white";
        listaProyectos.forEach(element => {
            element.style.backgroundColor = "#151515";
            element.style.boxShadow = "0px 0px 18px 2px rgb(27, 0, 35)";
        });
        document.getElementById("profile").style.boxShadow = "0px 0px 18px 2px  rgb(27, 0, 35)";
    }
});


//alerta repo privado 
document.getElementById("repo-privado").addEventListener("click", () => {
    Swal.fire("Repository private",
        "that repository is private, you can't see the code by intellectual property rights of the author",
        "warning");
});


//pantalla de carga de inicio 
//ToDo

// menu responsivo 

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuResponsive = document.getElementById("menu-responsive");
    menuToggle.classList.toggle("desactivado");

    menuToggle.addEventListener("click", () => {
       if(menuResponsive.style.display === "none" || menuResponsive.style.display === ""){
           menuResponsive.style.display = "block";
           menuToggle.classList.toggle("active");
            
       }else{
              menuResponsive.style.display = "none";
              menuToggle.classList.toggle("active");
       }

    });

    const menuItems = document.querySelectorAll("#menu-item-selected");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuResponsive.style.display = "none";
            menuToggle.classList.toggle("active");
        });
    });

   
});










