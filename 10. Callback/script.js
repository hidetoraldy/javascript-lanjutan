//TODO Callback
//? Synchronus callback
// function halo(nama){
//     alert(`halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama :');
//     callback(nama);
// }

// tampilkanPesan(nama => {
//     alert(`halo, ${nama}`);
// });

// const mhs = [
//     {
//         "nama"          : "Aldy",
//         "nim"           : "10517082",
//         "email"         : "hidetoraldy@gmail.com",
//         "jurusan"       : "Sistem Informasi",
//         "idDosenWali"   : 1
//     },
//     {
//         "nama"          : "Ramadhan",
//         "nim"           : "02",
//         "email"         : "haruchanbrawler@gmail.com",
//         "jurusan"       : "Sistem Komputer",
//         "idDosenWali"   : 2
//     }
// ];

// mhs.forEach(m => console.log(m.nama));

//? Asynchronus Callback
//* JQuery
console.log('mulai');
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach()
    }
});