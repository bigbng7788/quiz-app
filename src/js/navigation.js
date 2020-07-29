export function navigation() {
  const mainHome = document.querySelector('#maindashboard')
  const mainBookmark = mainHome
  const mainCreate = document.querySelector('#maincreate')
  const mainProfile = document.querySelector('#mainprofile')

  const navHome = document.querySelector('#nav_home')
  const navBookmark = document.querySelector('#nav_bookmark')
  const navCreate = document.querySelector('#nav_create')
  const navProfile = document.querySelector('#nav_profile')

  const hideAllSections = () => {
    mainHome.classList.add('dn')
    mainBookmark.classList.add('dn')
    mainCreate.classList.add('dn')
    mainProfile.classList.add('dn')
  }

  const inactiveAllSections = () => {
    navHome.classList.remove('nav--active')
    navBookmark.classList.remove('nav--active')
    navCreate.classList.remove('nav--active')
    navProfile.classList.remove('nav--active')
  }

  navHome.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    mainHome.classList.remove('dn')
    navHome.classList.add('nav--active')
    toggleBookmarks({})
    /*const newCards = Array.from(document.querySelectorAll('[data-js="card"'))
    newCards
      .filter(card => !card.querySelector('.bookmark--on'))
      .forEach(cardoff => cardoff.classList.remove('dn'))*/
  })

  navBookmark.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    mainBookmark.classList.remove('dn')
    navBookmark.classList.add('nav--active')
    toggleBookmarks({showOnPage:false})


    /*const newCards = Array.from(document.querySelectorAll('[data-js="card"'))
    newCards
      .filter(card => !card.querySelector('.bookmark--on'))
      .forEach(cardoff.classList.add('dn'))*/
  })

  navCreate.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    mainCreate.classList.remove('dn')
    navCreate.classList.add('nav--active')
  })

  navProfile.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    mainProfile.classList.remove('dn')
    navProfile.classList.add('nav--active')
  })
}

function toggleBookmarks({ showOnPage = true }) {
  const newCards = Array.from(document.querySelectorAll('[data-js="card"'))
  newCards
    .filter((card) => !card.querySelector('.bookmark--on'))
    .forEach((cardoff) =>
      showOnPage === true
        ? cardoff.classList.remove('dn')
        : cardoff.classList.add('dn')
    )
}

/*function showInactiveBookmarks() {
  const newCards = Array.from(document.querySelectorAll('[data-js="card"'))
  newCards
    .filter(card => !card.querySelector('.bookmark--on'))
    .forEach(cardoff => cardoff.classList.remove('dn'))

}

function setBookmarkPageCardVisibility() {
  const newCards = Array.from(document.querySelectorAll('[data-js="card"'))
  newCards
    .filter(card => !card.querySelector('.bookmark--on'))
    .forEach(cardoff.classList.add('dn'))

}*/
