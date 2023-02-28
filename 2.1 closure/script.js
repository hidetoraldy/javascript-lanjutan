// function init(){
//     // let nama = 'Aldy';
//     function tampilNama(nama){
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama(`Aldy`);

// function salam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, Selamat ${waktu}`);
//     }
// }

// let selamatPagi = salam('Pagi');
// let selamatSiang = salam('Siang');
// let selamatMalam = salam('Malam');

// selamatPagi('Aldy');

let counter = 0;
let add = function (){
    return ++counter;
}

console.log(add());