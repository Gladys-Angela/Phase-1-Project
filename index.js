const baseURL= "https://www.omdbapi.com/?apikey=e3eec50b&";

let currentResult = null

const searchInput = document.getElementById("search-input");
const moviePosterElement = document.getElementById("movie-poster")
const movieTitleElement = document.getElementById("movie-title")
const releasedElement = document.getElementById("released")
const actorsElement = document.getElementById("actors")
const plotElement = document.getElementById("plot")
const searchBtn = document.getElementById("search-btn")
const saveLaterBtn= document.getElementById("save-later-btn")
const savedMoviesElement = document.getElementById("saved-movies")

searchBtn.addEventListener('click', (event) => {
    const searchQuery = searchInput.value;
    console.log(searchQuery)
    searchByTitle(searchQuery)
})

searchInput.addEventListener('keyup', (event) => {
    console.log(event)
    const typedValue = event.target.value;
    searchByTitle(typedValue)
})

saveLaterBtn.addEventListener('click', (event) => {
    if(currentResult) {
        renderSavedMovie(currentResult)
    }
})

function searchByTitle(title) {
    fetch(baseURL + 't=' + title)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        moviePosterElement.src = data.Poster || ""
        movieTitleElement.innerText = data.Title || 'N/A'
        releasedElement.innerText = data.Released || 'N/A'
        actorsElement.innerText = data.Actors || 'N/A'
        plotElement.innerText = data.Plot || 'N/A'

        if(data.Poster) {
            currentResult = {
                poster: data.Poster || "",
                title: data.Title || 'N/A',
                released: data.Released || 'N/A',
            }
        }
    }
).catch(err => {
console.log('Catching our own errors', err)
})
}

function renderSavedMovie(savedMovie) {
    const liElement = document.createElement('li')
    liElement.classList.add('saved-movie-card')
    const posterImage = document.createElement('img')
    posterImage.src = savedMovie.poster;
    const titleSpan = document.createElement('span')
    titleSpan.innerText = savedMovie.title;
    const releasedSpan = document.createElement('span');
    releasedSpan.innerText = savedMovie.released;
    liElement.append(posterImage, titleSpan, releasedSpan)
    savedMoviesElement.append(liElement)
}