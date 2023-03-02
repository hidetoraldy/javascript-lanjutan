//! Destructuring

// function kalkulasi(a, b){
//     return[a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);

// function kalkulasi(a, b){
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

//* Destructuring function arguments
// const mhs1 = {
//     nama: 'Aldy',
//     umur: 24,
//     email: 'hidetoraldy@gmail.com'
// }

// function cetakMhs(mhs){
//     return `Halo nama saya ${mhs.nama}, dan saya berumur ${mhs.umur} tahun.`;
// }

const mhs1 = {
    nama: 'Aldy',
    umur: 24,
    email: 'hidetoraldy@gmail.com'
}

function cetakMhs({nama, umur}){
    return `Halo nama saya ${nama}, dan saya berumur ${umur} tahun.`;
}