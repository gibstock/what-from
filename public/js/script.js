const searchBtn = document.getElementById('searchBtn')
const artistSearch = document.getElementById('artist-search')
const searchAgainBtn = document.getElementById('search-again')
const searchNav = document.getElementById('search-nav')

function searchArtist() {
  location.assign(`/artist/${artistSearch.value}`)
}

function openSearchBox() {
  searchNav.style.display = 'block'
  searchAgainBtn.style.visibility = 'hidden'
}
if(window.location.href.includes("artist")){
  searchAgainBtn.addEventListener('click', openSearchBox)

}
searchBtn.addEventListener("click", searchArtist)
window.addEventListener('keyup', (e) => {
  if(e.key === "Enter") {
    searchArtist()
  }
})