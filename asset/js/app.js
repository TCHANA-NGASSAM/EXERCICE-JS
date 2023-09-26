function afficherLesNombrePremier() {
  let primeNumbers = []
  for(let i=1;i<=100;i++){
    const result = isPrime(i)
    if(result){
      primeNumbers.push(result)
    }
  } 
  console.log(primeNumbers)

}
afficherLesNombrePremier()
function isPrime(number) {
  let counter = 0
  for(let i=1;i<=100;i++){
    if (counter === 2){
      return number
    }
    if (number % i === 0){
      counter++
    }
  }
  return null
}