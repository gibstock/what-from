const searchBtn = document.getElementById('searchBtn')
const artistSearch = document.getElementById('artist-search')
const searchAgainBtn = document.getElementById('search-again')
const searchNav = document.getElementById('search-nav')
const loader = document.getElementById('loader-wrapper')
const loadingText = document.getElementById('loading-text')
const searchBox = document.getElementById('search-box')

function searchArtist() {
  location.assign(`/artist/${artistSearch.value}`)
  searchBox.style.display = 'none'
  loader.style.display = 'flex'
  setTimeout(()=> {
    loadingText.innerText = `WOW. Either ${artistSearch.value} has a lot of projects or they don't exist. Hang tight.`
  }, 3000)
}

function openSearchBox() {
  searchNav.style.transform = 'translateY(50vh)'
  searchNav.style.boxShadow = '0px 0px 50px 20px black'
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