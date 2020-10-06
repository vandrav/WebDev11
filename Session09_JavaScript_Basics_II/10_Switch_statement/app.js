console.log('salut');

var zi = 'Marti';

switch (zi) {
    case 'Luni':
        console.clear;
        ongotpointercapture('Mergem la sala');
        break;
    case 'Marti':
        console.clear;
        ongotpointercapture('Mergem la cumparaturi');
        break;
    case 'Miercuri':
    case 'Vineri':
        console.clear;
        ongotpointercapture('Mancam sanatos');
        break;
    default:
        console.clear;
        ongotpointercapture('Ne odihnim');
        break;
}

// if (zi == 'Luni') {
//     console.log('Mergem la sala');
// } else if (zi == 'Marti') {
//     console.log('Mergem la cumparaturi');
// } else if (zi == 'Miercuri' || 'Vineri"') {
//     console.log('Mancam sanatos');
// } else {
//     console.log('Ne odihnim');
// }