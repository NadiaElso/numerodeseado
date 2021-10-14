let nrodeseado: number = document.getElementById("nrodeseado");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (nrodeseado.value >=20) {
    console.log("El nùmero deseado es mayor a 20":+ nrodeseado);
  } else {
    console.log("El nùmero deseado es menor o igual a 20": + nrodeseado);
  }
});

