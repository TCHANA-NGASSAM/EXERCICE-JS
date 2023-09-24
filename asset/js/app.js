function calculerCarre() {
    let nombre = parseFloat(document.getElementById("nombre").value);
    let carre = nombre * nombre;

    document.getElementById("resultat").innerText = "Le carre de " + nombre + " est : " + carre;
}