const baseURL= "http://www.omdbapi.com/?i=tt3896198&apikey=4038c2f4"
const searchInput = document.getElementById("search-input");
const movieTitleElement = document.getElementById("movie-title")
const releasedElement = document.getElementById("released")
const actorsElement = document.getElementById("actors")
const plotElement = document.getElementById("plot")
const searchBtn = document.getElementById("search-btn")
const saveLaterBtn= document.getElementById("save-later-btn")

searchBtn.addEventListener('click', (event) => {
    const searchQuery = searchInput.value;
    console.log(searchQuery)
    searchByTitle(searchQuery)
})

saveLaterBtn.addEventListener('click', (event) => {
    if(currentResult) {
        renderSavedMovie(currentResult)
    }
})