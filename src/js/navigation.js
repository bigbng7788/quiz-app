
export function navigation () {
//Navigation const
const mainHome = document.querySelector('#maindashboard')
const mainBookmark = document.querySelector('#mainbookmark')
const mainCreate = document.querySelector('#maincreate')
const mainProfile = document.querySelector('#mainprofile')

const navHome = document.querySelector('#nav_home')
const navBookmark = document.querySelector('#nav_bookmark')
const navCreate = document.querySelector('#nav_create')
const navProfile = document.querySelector('#nav_profile')

//Hide all pages
const hideAllSections = () => {
    mainHome.classList.add('dn')
    mainBookmark.classList.add('dn')
    mainCreate.classList.add('dn')
    mainProfile.classList.add('dn')
}

//Remove all active colors of the navigation
const inactiveAllSections = () => {
    navHome.classList.remove('nav--active')
    navBookmark.classList.remove('nav--active')
    navCreate.classList.remove('nav--active')
    navProfile.classList.remove('nav--active')
}

//Navigation functions
navHome.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    mainHome.classList.remove('dn')
    navHome.classList.add('nav--active')
})

navBookmark.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    mainBookmark.classList.remove('dn')
    navBookmark.classList.add('nav--active')
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