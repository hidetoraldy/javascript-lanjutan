//TODO Destructuring Assignment
//? Destructuring Array

// const perkenalan = ['Halo!', 'nama', 'saya', 'Aldy'];
// const [a, b, c, d] = perkenalan;
// // const [a, , , d] = perkenalan //*skipping element
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//* swapping beetween elements
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//* return  value pada array
// function coba(){
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

//* Rest parameter
// const [a, ...b] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a);
// console.log(b);

//? Destructuring Object
// const mhs = {
//     nama: 'Aldy',
//     umur: 24
// }

// const {nama, umur} = mhs;
// console.log(nama);

//* Assignment tanpa deklarasi object
// ({nama, umur} = {
//     nama: 'Aldy',
//     umur: 24
// });
// console.log(nama);

//* Assignment ke dalam variabel baru
// const mhs = {
//     nama: 'Aldy',
//     umur: 24
// }

// const {nama: n, umur: u} = mhs;
// console.log(u);

//* Memberikan default value
// const mhs = {
//     nama: 'Aldy',
//     umur: 24
// }

// const {nama, umur, email = `hidetoraldy@gmail.com`} = mhs;
// console.log(email);

//* Memberi nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'Aldy',
//     umur: 24
// }

// const {nama: n, umur:u , email: e = `hidetoraldy@gmail.com`} = mhs;
// console.log(e);

//* Rest Parameter
// const mhs = {
//     nama: 'Aldy',
//     umur: 24
// }

// const {nama, ...n} = mhs;
// console.log(n);

//? Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 111,
    nama: 'Aldy Ramadhan',
    umur: 24,
    email: 'hidetoraldy@gmail.com'
}

function getIdMhs({id}){
    return id;
}

console.log(getIdMhs(mhs));