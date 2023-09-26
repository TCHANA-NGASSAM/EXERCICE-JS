function afficherTableMultiplication() {
  let entier = document.getElementById("entier").value;

  for (let i = 1; i <= 10; i++) {
    let resultat = entier * i;
    document.getElementById('container').innerHTML += `${resultat}<br>`
  }
 
 
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", afficherTableMultiplication);
