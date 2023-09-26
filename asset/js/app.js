function displayResult(){
  let misteryNumber = parseFloat(document.getElementById('numero1').value)
  let myNumber = parseFloat(document.getElementById('numero2').value)

  let message = (myNumber === misteryNumber) ? "Congratulations !" : (myNumber < misteryNumber) ? "+" : "-";

  document.getElementById('affichage').innerHTML = 'le resultat est : ' + message
console.log(message);
}