//TODO for ..of
// const mhs = ['Aldy Ramadhan', 'Aldy', 'Ramadhan'];

// // for (let i = 0; i < mhs.length; i++){
// //     console.log(mhs[i]);
// // }

// // mhs.forEach(m => console.log(m));

// for(const m of mhs ){
//     console.log(m);
// }

//? String
// const nama = 'Aldy';
// for(const n of nama){
//     console.log(n);
// }

// const mhs = ['Aldy Ramadhan', 'Aldy', 'Ramadhan'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

// for (const [i, m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

//? NodeList
// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent));
// for (n of liNama){
//     console.log(n.textContent);
// }

//? Arguments
// function jumlahkanAngka(){
//     // arguments.reduce((a, i) => a + i);
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for(a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahkanAngka(1,2,3,4,5));

//TODO for..in
const mhs = {
    nama: 'Aldy',
    umur: 24,
    email: 'hidetoraldy@gmail.com'
}

for (m in mhs){
    console.log(m);
}