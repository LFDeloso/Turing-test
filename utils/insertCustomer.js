//funcion para cunsumir la api rest y retornamos un respuesta
export const insertData = (form) => {
  const response = fetch("http://localhost/apiPhp/create.php", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return response ? true : false;
};
