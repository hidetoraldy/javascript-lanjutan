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
//* Vanilla Javascript
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             } else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('satu');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('dua');

//* JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');