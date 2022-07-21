// console.log("correcto")

document.querySelector("#boton").addEventListener('click', traerDatos);

function traerDatos() {
  // console.log("correcto en funcion");

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "./variables.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      let datos = [JSON.parse(this.responseText)];
    //   console.log(datos);
      let res = document.querySelector("#res");
    //   res.innerHTML = "";

      for (let item of datos) {
        console.log(item.sensores);
        res.innerHTML += `
            <p>${item.sensores.humedad}</p>
        `
      }
    }
  };
}
