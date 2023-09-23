function day () {
    let numbermonth = document.getElementById('month').value
    let year = document.getElementById("year").value

    let numberOfDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (year % 4 == 0 ){
        numberOfDay[1] = 29;
    }

    let Day = "Le mois " + numbermonth  + " de l'annee " + year + " a " + numberOfDay[numbermonth - 1] + " jours.";

    document.getElementById("displaynumber").innerHTML = Day;
}