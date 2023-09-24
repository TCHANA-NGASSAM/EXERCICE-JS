function afficherTableMultiplication() {
  let entier = document.getElementById("entier").value;

  for (let i = 1; i <= 10; i++) {
    let resultat = entier * i;
    let ul = document.createElement("ul");
    let container = document.getElementById("container");
    let li = document.createElement("li");
    li.textcontent = resultat;
    ul.appendChild(li);
    container.appendChild(ul);
  }
 
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", afficherTableMultiplication);
