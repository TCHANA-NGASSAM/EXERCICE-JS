function resultValeur() {
  let valeur = Number(document.getElementById("valeur").value);
  let result;
  switch (valeur) {
    case 1:
      result = 'La valeur est supérieure  0';
      break;
    case 2:
      result = 'La valeur est supérieure à 1';
      break;
    case 0:
      result = 'La valeur est egal à 0';
      break;
    default:
      result;
      break;
  }
  document.getElementById("affichage").innerHTML =
    "le resultat  est : " + result;
}
