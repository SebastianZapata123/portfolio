
// lINKS


const link = ['https://wheaterappsb4ss.netlify.app/', 'https://coffe-ai.vercel.app/']
const target = '_blank'; // '_blank' para abrir en nueva ventana o pestaña, '_self' para abrir en la misma ventana

document.getElementById("clima").addEventListener('click', () => {
  window.open(link[0], target);
});

document.getElementById("coffeai").addEventListener('click', () => {
    window.open(link[1], target);
  });



// SCROLL



function createNavbar(){
    let body = document.querySelector(".root");

    // Verificamos si ya existe una navbar para evitar duplicados
    if (!document.querySelector(".navbar")) {
        const nav = document.createElement("nav");
        nav.innerHTML = `
        <nav> 
            <a class="home"href="#home" > Home </a> 
            <a class="skills"href="#skills"> Skills </a> 
            <a class="blog"> Blog </a> 
        </nav>`
        nav.classList.add("navbar");
        nav.classList.add("nav-animation");  // Agrega la animación de aparición
        
        // Insertar el nav al principio de .root
        body.insertBefore(nav, body.firstChild);
    }
}

function removeNavbar(){
    const nav = document.querySelector(".navbar");
    
    if (nav) {
        // Eliminar la animación de aparición y agregar la de eliminación
        nav.classList.remove("nav-animation");
        nav.classList.add("nav-remove");
        
        // Esperar a que termine la animación de eliminación antes de quitar el nav
        nav.addEventListener('animationend', () => {
            nav.remove();
        }, { once: true });
    }
}

function renderNavbar(){
    window.onscroll = () => {
        const position = window.scrollY;

        // Mostrar la navbar si el scroll supera los 739 px
        if (position >= 739) {
            createNavbar();
        } else if (position < 739) {
            removeNavbar();
        }
    };
}

renderNavbar();
