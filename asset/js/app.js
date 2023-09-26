function afficherLesNombrePremier() {
  let primeNumbers = []
  for(let i=1;i<=100;i++){
    const result = isPrime(i)
    if(result){
      primeNumbers.push(result)
    }
  } 
  console.log(primeNumbers)
document.getElementById('Afficher').innerHTML = primeNumbers 
}

function isPrime(number) {
  let counter = 0
  for(let i=1;i<=100;i++){
    if (counter === 3){
      return null
    }
    if (number % i === 0){
      counter++
    }
  }
  return number
}