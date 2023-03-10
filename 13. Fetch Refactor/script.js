//* JQUERY
// $('.search-button').on('click', function(){
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=7dd29744&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
    
//             //? Ketika tombol detail di click
//             $('.modal-detail-button').on('click', function(){
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=7dd29744&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) =>{
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error: (e) =>{
//             console.log(e.responseText);
//         }
//     });
// });

//* Fetch
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function(){
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch(`http://www.omdbapi.com/?apikey=7dd29744&s=${inputKeyword.value}`)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCards(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             //? Ketika tombol lihat detail di click
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click', function(){
//                     const imdbid = this.dataset.imdbid;
//                     fetch(`http://www.omdbapi.com/?apikey=7dd29744&i=${imdbid}`)
//                         .then(response => response.json())
//                         .then(m => {
//                             const movieDetail = showMovieDetail(m);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail;
//                         });
//                 });
//             });
//         });
// });

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});

//? event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(imdbid){
    return fetch(`http://www.omdbapi.com/?apikey=7dd29744&i=${imdbid}`)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m){
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

function getMovies(keyword){
    return fetch(`http://www.omdbapi.com/?apikey=7dd29744&s=${keyword}`)
        .then(response => response.json())
        .then(response => response.Search);
}

function showCards(m){
    return `<div class="col-md-4 my-4">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#exampleModal" data-imdbid="${m.imdbID}">Lihat Detail</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Cast : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}