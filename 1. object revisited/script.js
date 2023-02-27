//! Cara membuat object
//? 1. Object Literal

    // let mahasiswa = {
    //     nama    : 'Aldy', 
    //     energi  : 10,
    //     makan   : function(porsi){
    //         this.energi = this.energi + porsi;
    //         console.log(`Halo ${this.nama}, Itadakimasu!`);
    //     }
    // }

//? 2. Function Declaration

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

//? 3. Constructor Function
function Mahasiswa(nama, energi){

    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Itadakimasu!`);
    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Valo gaskeun!`);
    }
}

    let aldy = new Mahasiswa('Aldy', 10);