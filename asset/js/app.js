
function valeurBinaire(){
  let quantity = parseFloat(document.getElementById('numero').value);
  let unit = document.getElementById('uniter').value;
  let result;
  
  switch (unit.toUpperCase()) {
      case 'K':
          result = quantity * 1024;
          break;
      case 'M':
          result = quantity * 1024 * 1024;
          break;
      case 'G':
          result = quantity * 1024 * 1024 * 1024;
          break;
      case 'T':
          result = quantity * 1024 * 1024 * 1024 * 1024;
          break;
      default:
          result;
          break;
  }
  document.getElementById('affichage').innerHTML = 'Votre valeur binaire est:' + result
}
