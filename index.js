const baseURL= "http://www.omdbapi.com/?i=tt3896198&apikey=4038c2f4"
const searchInput = document.getElementById("search-input");
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