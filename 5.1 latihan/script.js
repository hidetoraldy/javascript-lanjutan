//TODO 1. HTML Fragments
// const mhs = {
//     nama: 'Aldy Ramadhan',
//     umur: 24,
//     nim: '10517082',
//     email: 'hidetoraldy@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`

//TODO 2. Looping
// const mhs = [
//     {
//         nama: 'Aldy Ramadhan',
//         email: 'hidetoraldy@gmail.com'
//     },
//     {
//         nama: 'Aldy',
//         email: 'hidetoraldy@gmail.com'
//     },
//     {
//         nama: 'Ramadhan',
//         email: 'hidetoraldy@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

//TODO 3. Conditionals
//? ternary
// const lagu = {
//     judul: `Wicked`,
//     penyanyi: 'Hoshimachi Suisei',
//     feat: 'Mori Calliope'
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

//TODO 4. Nested HTML Fragments
const mhs = {
    nama: 'Aldy Ramadhan',
    semester: 8,
    mataKuliah: [
        'Skripsi',
        'Attitude dan Perilaku',
        'Kewirausahaan'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `
}

const el = `<div class="lagu">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;