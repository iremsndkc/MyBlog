const searchIcon = document.getElementById('searchIcon');
const searcEngine = document.getElementById('searchEngine');
searchIcon.addEventListener('click', () => {
    searcEngine.classList.toggle('active')
})