//TODO Function Expression
// const tampilNama = function(nama){
//     return `Halo ${nama} !`;
// }

// console.log(tampilNama(`Aldy`));

// const tampilNama = (nama) => { return `Halo ${nama}`;}
// console.log(`Aldy Ramadhan`);

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Aldy', 'Siang'));

//? Implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log(`Aldy Ramadhan`);
//?

let mahasiswa = ['Aldy Ramadhan', 'Aldy'];

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }));
console.log(jumlahHuruf);