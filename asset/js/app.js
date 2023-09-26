function comparaison() {
  let variable1 = parseFloat(document.getElementById("numero1").value);
  let variable2 = parseFloat(document.getElementById("numero2").value);
  let variable3 = parseFloat(document.getElementById("numero3").value);
  let resultat;
  switch (true) {
    case variable1 == variable2 && variable1 == variable3:
      resultat = "les trois variables sont identiques";
      break;
    case variable1 == variable2 ||
      variable1 == variable3 ||
      variable2 == variable3:
      resultat = "Deux des  variables sont de valeur egal";
      break;
    default:
      resultat = "les trois variables sont diffentes";
      break;
  }
  document.getElementById("affichage").innerHTML = "le resultat :" + resultat;
}
