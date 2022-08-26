// esto escucha el evento scroll en la vewntana
window.addEventListener("scroll", () => {
    // en esta parte buscamos un elemento por su id...
  const navbar = document.querySelector("#navbar-fixed");
   //en esta parte obtenemos el scroll en el eje de las Y y lo almacenamos en una constante...
  const scroll = window.scrollY;
  
  if (scroll > 0) {
    //agregarmos la clase navbar-blue cuando el scroll es mayor a 0
    navbar.classList.add("navbar-blue");
  } else {
    //agregarmos la clase navbar-blue cuando el scroll es igual o menor 0
    navbar.classList.remove("navbar-blue");
  }
});
