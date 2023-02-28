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

// let mahasiswa = ['Aldy Ramadhan', 'Aldy'];

// // let jumlahHuruf = mahasiswa.map(function(nama){
// //     return nama.length;
// // });
// // console.log(jumlahHuruf);

// // let jumlahHuruf = mahasiswa.map(nama => nama.length);
// // console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }));
// console.log(jumlahHuruf);

//? Constructor Function
// const Mahasiswa = function(){
//     this.nama = 'Aldy';
//     this.umur = 24;
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama} dan saya berumur ${this.umur} tahun`);
//     }
// }

// const aldy = new Mahasiswa();

//? Arrow Function
// const Mahasiswa = function(){
//     this.nama = 'Aldy';
//     this.umur = 24;
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama} dan saya berumur ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const aldy = new Mahasiswa();

// const mhs1 = {
//     nama: `Aldy`,
//     umur: 24,
//     sayHello: () => {
//         console.log(`Halo nama saya ${this.nama} dan saya berumur ${this.umur} tahun`);
//     }
// }

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';
    //let temp = '';
    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});