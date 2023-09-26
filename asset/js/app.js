function nombreOctets(){
  let valeur = document.getElementById('valeur').value
  let result = ''
  let index = 0


  switch (true) {
    case valeur.toLowerCase().includes('k'):
      index = valeur.indexOf('k')
      result = valeur.slice(index)
      result = result + '* 1024'
      break;
      case valeur.toLowerCase().includes('m'):
      index = valeur.indexOf('m')
      result = valeur.slice(index)
      result = result + '* 1024 * 1024'
      break;
      case valeur.toLowerCase().includes('g'):
      index = valeur.indexOf('g')
      result = valeur.slice(index)
      result = result + '* 1024 *1024 *1024'
      break;
      case valeur.toLowerCase().includes('t'):
      index = valeur.indexOf('t')
      result = valeur.slice(index)
      result = result + '* 1024 * 1024 * 1024 * 1024'
      break;
    default:
      result
      break;
  }
  document.getElementById('affichage').innerHTML = 'nombreOctets est :' + result
}