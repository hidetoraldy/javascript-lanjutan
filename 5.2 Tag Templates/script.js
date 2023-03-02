//TODO Tagged Templates
// const nama = 'Aldy';
// const umur = 24;

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // })
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str = coba`Halo! nama saya ${nama}, saya berumur ${umur} tahun.`;
// console.log(str);

//? Highlight
const nama = 'Aldy';
const umur = 24;
const email = 'hidetoraldy@gmail.com'

function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

const str = highlight`Halo! nama saya ${nama}, saya berumur ${umur} tahun, dan email saya ${email}`;
// console.log(str);
document.body.innerHTML = str;