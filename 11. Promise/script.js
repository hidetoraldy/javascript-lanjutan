//TODO Promise
//* JQUERY
// $.ajax({
// url: 'http://www.omdbapi.com/?apikey=7dd29744&s=crows',
//     success: movies => console.log(movies)
// });

//*Vanilla Javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(this.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         } else {
//             console.log(xhr.responseText);
//         }
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=7dd29744&s=crows');
// xhr.send();

//* Fetch
// fetch('http://www.omdbapi.com/?apikey=7dd29744&s=crows')
//     .then(response => response.json())
//     .then(response => console.log(response));

//* Promise
//! Object yang merepresentasikan suatu keberhasilan atau kegagalan dari sebuah event yang asynchronus di masa yang akan datang
//! janji (terpenuhi / ingkar)
//! states (fulfilled / rejected / pending)
//! callback (resolve / reject / finally)
//! aksi (then / catch)
//? Contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Janji telah dipenuhi');
//     }else{
//         reject('Ingkar janji!!');
//     }
// });

// janji1
//     .then(response => console.log(`OK! ${response}`))
//     .catch(response => console.log(`NOT OK! ${response}`));
//? Contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// janji2
//     .finally(() => console.log(`selesai menunggu`))
//     .then(response => console.log(`OK! ${response}`))
//     .catch(response => console.log(`NOT OK! ${response}`));
// console.log('selesai');

//* Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Crows Zero',
            sutradara: 'Aldy',
            pemeran: 'Ramadhan'
        }])
    }, 2000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Toarushi',
            temp: '16',
            kondisi: 'Cerah dingin'
        }])
    }, 1000);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// Promise.all([film, cuaca]).then(response => console.log(response));
Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });