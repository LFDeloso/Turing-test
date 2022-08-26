import { services, contact } from "./utils/data.js";
import { insertData } from "./utils/insertCustomer.js";

const setServices = () => {
  // map regresa un nuevo arreglo
  const columns = services
    .map(({ img, title, description }) => {
      //desestructuramos los objetos que estAN DENTRO DEL ARRGLO
      // PARA METER UNA VARIABLE DENTRO DE UN STRING USAMOS LAS COMILLAS INMVERTIDAS SIMPLES (``) Y PONEMOSM UN TAMPLE STRING (${})
      return `  
        <div class="col-md-6 col-lg-4 col-sm-12">
            <div class="card">
                <img src="${img}" class="card-img-top" alt="image">
                <div class="card-body text-trun">
                    <h6 class="card-title my-3">${title}</h6>
                    <p class="card-text">${description}</p>
                </div>
                <div class="card-footer">
                    <button class="btn-vm">Ver más</button>
                </div>
            </div>
        </div>`;
    })
    .join("");
  const tag = document.getElementById("services"); // BUSCAMOS UN ELEMENTO HTML POR ID
  tag.innerHTML = columns; // INSERTA CODIGO HTML
};

const setContact = () => {
  // sacamos las propiedades o keys del arreglo de objetos...
  const colums = contact
    .map(({ title, description, icon }) => {
      return `
        <div class="col-6">
            <p class="h5"><i class="${icon}"></i>${title}</i></p>
            <p>${description}</p>
        </div>`;
    })
    .join("");
  // n
  const tag = document.querySelector("#form");
  // insertamos en el dom el html construido de columns
  tag.innerHTML = colums;
};

// esta funcion almacena dos funciones flecha...
const functions = () => {
  setServices();
  setContact();
};

// CUANDO CARGA LA PAGINA SE EJECUTA LA FUNCION FLECHA
window.onload = functions;

// buscamos el form por id
const form = document.querySelector("#contact-form");
//Escuchamos el evento submit del form contact-form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);

  //almacenamos la informacion del formData en un json
  const values = {
    nombreCompleto: data.get("nombreCompleto"),
    email: data.get("email"),
    telefono: data.get("telefono"),
    empresa: data.get("empresa"),
    mensaje: data.get("mensaje"),
  };

  //Revisamos la respuesta y si es true hacemos reset del form y un alert con mensaje de exitoso
  // o fallido en caso de que la funcion nos arroje un false
  if (insertData(values)) {
    form.reset();
    alert("Registro Completado");
  } else {
    alert("Hubo un error, intentelo de nuevo");
  }
});
