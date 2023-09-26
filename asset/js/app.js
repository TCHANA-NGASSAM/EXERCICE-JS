function votreAge() {
  let age = parseFloat(document.getElementById('age').value)
  if(age < 0){
    alert('veuillez ressayer,age est incorrect')
    document.getElementById('age').value = ""
  }else{
    alert('votre age est correct')
    document.getElementById('affiche').innerHTML = 'votre age est : ' + age
  }
 
}