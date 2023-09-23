function calcule(){
    let dc1 = parseFloat(document.getElementById("dc1").value)
    let dc2 = parseFloat(document.getElementById("dc2").value)
    let ds = parseFloat(document.getElementById("ds").value)

    let moyenne = (dc1 + dc2 + ds)/3

    document.getElementById("moyenne").innerHTML= "la moyenne est :"+ moyenne
}