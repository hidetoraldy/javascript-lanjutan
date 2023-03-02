//TODO Template literals / Template String
// const nama = 'Aldy';
// const umur = 24;
// console.log(`Halo! nama saya ${nama}, dan saya berumur ${umur} tahun.`);

//TODO Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

//TODO HTML Fragments
const mhs = {
    nama: 'Aldy Ramadhan',
    umur: 24,
    nim: '10517082',
    email: 'hidetoraldy@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

console.log(el);