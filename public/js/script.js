const searchBtn = document.getElementById('searchBtn')
const artistSearch = document.getElementById('artist-search')
const searchAgainBtn = document.getElementById('search-again')
const searchNav = document.getElementById('search-nav')
const loader = document.getElementById('loader-wrapper')
const searchBox = document.getElementById('search-box')

function searchArtist() {
  location.assign(`/artist/${artistSearch.value}`)
  searchBox.style.display = 'none'
  loader.style.display = 'flex'
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