//TODO mengambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//TODO memilih yang hanya memiliki title "JAVASCRIPT LANJUTAN"
let judul = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

//TODO mengambil durasi dari masing masing video yang ada
//? menggunakan metode chaining
.map(item => item.dataset.duration)

//TODO mengubah durasi yang berbentuk string menjadi int, ubah dari bentuk menit ke dalam bentuk detik
.map(waktu => {
    //* contoh durasi 10:30 lalu displit ke dalam array menjadi [10, 30]

    const pecahan = waktu.split(':').map(pecah => parseFloat(pecah));
    return (pecahan[0] * 60) + pecahan[1];
})

//TODO menjumlahkan semua detik yang ada
.reduce((total, detik) => total + detik);

//TODO mengubah format detik kembali ke bentuk menit
const jam = Math.round(judul / 3600);
judul = judul - jam * 3600;
const menit = Math.round(judul / 60);
const detik = judul - menit * 60;

//TODO simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

//TODO mengambil jumlah video dari judul yang sama
const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJumlahVideo = document.querySelector('.jumlah-video');
pJumlahVideo.textContent = `${jumlahVideo} Video`;