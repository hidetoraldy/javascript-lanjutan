//! Cara membuat object
//? 1. Object Literal
//TODO KEKURAGANNYA TERLALU BANYAK MEMAKAN RESOURCE
    // let mahasiswa = {
    //     nama    : 'Aldy', 
    //     energi  : 10,
    //     makan   : function(porsi){
    //         this.energi = this.energi + porsi;
    //         console.log(`Halo ${this.nama}, Itadakimasu!`);
    //     }
    // }

//? 2. Function Declaration
//* ver.1
    // function Mahasiswa(nama, energi){
    //     let mahasiswa = {};

    //     mahasiswa.nama = nama;
    //     mahasiswa.energi = energi;

    //     mahasiswa.makan = function(porsi){
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama}, Itadakimasu!`);
    //     }

    //     mahasiswa.main = function(jam){
    //         this.energi -= jam;
    //         console.log(`Halo ${this.nama}, Valo gaskeun!`);
    //     }

    //     return mahasiswa;
    // }

    // let aldy = Mahasiswa('Aldy', 10);

//* ver.2 

    // const methodMahasiswa = {
    //     makan: function(porsi){
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama}, Itadakimasu!`);
    //     },

    //     main: function(jam){
    //         this.energi -= jam;
    //         console.log(`Halo ${this.nama}, Valo gaskeun!`);
    //     },

    //     tidur: function(jam){
    //         this.energi += jam * 2;
    //         console.log(`Halo ${this.nama}, Oyasumi~~`);
    //     }
    // };

    // function Mahasiswa(nama, energi){
    //     let mahasiswa = Object.create(methodMahasiswa);

    //     mahasiswa.nama = nama;
    //     mahasiswa.energi = energi;

    //     // mahasiswa.makan = methodMahasiswa.makan;
    //     // mahasiswa.main = methodMahasiswa.main;
    //     // mahasiswa.tidur = methodMahasiswa.tidur;

    //     return mahasiswa;
    // }

    // let aldy = Mahasiswa('Aldy', 10);

//? 3. Constructor Function

//* ver.1
// function Mahasiswa(nama, energi){

//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Itadakimasu!`);
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Valo gaskeun!`);
//     }
// }

//     let aldy = new Mahasiswa('Aldy', 10);

//* ver.2
    // function Mahasiswa(nama, energi){
    //     //let mahasiswa = Object.create(methodMahasiswa);

    //     this.nama = nama;
    //     this.energi = energi;

    //     // return mahasiswa;
    // }

    // Mahasiswa.prototype.makan = function(porsi){
    //     this.energi += porsi;
    //     return `Halo ${this.nama}, Itadakimasu!`;
    // }
    // Mahasiswa.prototype.main = function(jam){
    //     this.energi -= jam;
    //     return `Halo ${this.nama}, Valo kah?`;
    // }
    // Mahasiswa.prototype.tidur = function(jam){
    //     this.energi += jam * 2;
    //     return `Halo ${this.nama}, Oyasumi~~`;
    // }

    // let aldy = new Mahasiswa('Aldy', 10);

//* ver.3

    // class Mahasiswa{
    //     constructor(nama, energi){
    //         this.nama   = nama;
    //         this.energi = energi;
    //     }
    
    //     makan (porsi){
    //         this.energi += porsi;
    //         return `Halo ${this.nama}, Itadakimasu!`;
    //     }
    //     main (jam){
    //         this.energi -= jam;
    //         return `Halo ${this.nama}, Valo kah?`;
    //     }
    //     tidur(jam){
    //         this.energi += jam * 2;
    //         return `Halo ${this.nama}, Oyasumi~~`;
    //     }
    // }

    // let aldy = new Mahasiswa('Aldy', 10);