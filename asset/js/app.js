var quantity = 2;
var unit = 'K';
var result;

switch (unit) {
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
        console.log("Unité invalide");
        break;
}

console.log(result);