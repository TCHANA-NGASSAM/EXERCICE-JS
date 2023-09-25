function calculer() {
    let operation = document.getElementById("operation").value;
    let resultat = eval(operation);
    document.getElementById("reponse").innerHTML = "Résultat : " + resultat;
  }
  
  function afficherResultat() {
    let operation = document.getElementById("operation").value;
    let resultat = eval(operation);
    alert("Le résultat est : " + resultat);
  }