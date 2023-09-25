let variable1 = 5;
let variable2 = 8;
let variable3 = 10;

if (variable1 === variable2 && variable2 === variable3) {
    console.log("Les trois variables sont identiques.");
} else if (variable1 === variable2 || variable2 === variable3 || variable3 === variable1) {
    console.log("Deux des variables sont de valeurs égales.");
} else {
    console.log("Les trois variables sont différentes.");
}