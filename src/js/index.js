
// Bookmarks
const bookmark1 = document.querySelector('#bookmark1')
bookmark1.addEventListener('click', () => { 
    bookmark1.classList.toggle('card__bookmark--on')
})

const bookmark2 = document.querySelector('#bookmark2')
bookmark2.addEventListener('click', () => { 
    bookmark2.classList.toggle('card__bookmark--on')
})

const bookmark3 = document.querySelector('#bookmark3')
bookmark3.addEventListener('click', () => { 
    bookmark3.classList.toggle('card__bookmark--on')
})

const bookmark4= document.querySelector('#bookmark4')
bookmark4.addEventListener('click', () => { 
    bookmark4.classList.toggle('card__bookmark--on')
})

const bookmark5= document.querySelector('#bookmark5')
bookmark5.addEventListener('click', () => { 
    bookmark5.classList.toggle('card__bookmark--on')
})

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

//Card buttons for the answers
const showAnswerButton1 = document.querySelector('.card__showanswer1')
const answerText1 = document.querySelector('.card__answer1')
const hideButton1 = document.querySelector('.card__hideanswer1')

showAnswerButton1.addEventListener('click', () => { 
    answerText1.classList.remove('dn')
    showAnswerButton1.classList.add('dn')
    hideButton1.classList.remove('dn')
})

hideButton1.addEventListener('click', () => { 
    answerText1.classList.add('dn')
    showAnswerButton1.classList.remove('dn')
    hideButton1.classList.add('dn')
})


const showAnswerButton2 = document.querySelector('.card__showanswer2')
const answerText2 = document.querySelector('.card__answer2')
const hideButton2 = document.querySelector('.card__hideanswer2')

showAnswerButton2.addEventListener('click', () => { 
    answerText2.classList.remove('dn')
    showAnswerButton2.classList.add('dn')
    hideButton2.classList.remove('dn')
})

hideButton2.addEventListener('click', () => { 
    answerText2.classList.add('dn')
    showAnswerButton2.classList.remove('dn')
    hideButton2.classList.add('dn')
})


const showAnswerButton3 = document.querySelector('.card__showanswer3')
const answerText3 = document.querySelector('.card__answer3')
const hideButton3 = document.querySelector('.card__hideanswer3')

showAnswerButton3.addEventListener('click', () => { 
    answerText3.classList.remove('dn')
    showAnswerButton3.classList.add('dn')
    hideButton3.classList.remove('dn')
})

hideButton3.addEventListener('click', () => { 
    answerText3.classList.add('dn')
    showAnswerButton3.classList.remove('dn')
    hideButton3.classList.add('dn')
})


const showAnswerButton4 = document.querySelector('.card__showanswer4')
const answerText4 = document.querySelector('.card__answer4')
const hideButton4 = document.querySelector('.card__hideanswer4')

showAnswerButton4.addEventListener('click', () => { 
    answerText4.classList.remove('dn')
    showAnswerButton4.classList.add('dn')
    hideButton4.classList.remove('dn')
})

hideButton4.addEventListener('click', () => { 
    answerText4.classList.add('dn')
    showAnswerButton4.classList.remove('dn')
    hideButton4.classList.add('dn')
})


const showAnswerButton5 = document.querySelector('.card__showanswer5')
const answerText5 = document.querySelector('.card__answer5')
const hideButton5 = document.querySelector('.card__hideanswer5')

showAnswerButton5.addEventListener('click', () => { 
    answerText5.classList.remove('dn')
    showAnswerButton5.classList.add('dn')
    hideButton5.classList.remove('dn')
})

hideButton5.addEventListener('click', () => { 
    answerText5.classList.add('dn')
    showAnswerButton5.classList.remove('dn')
    hideButton5.classList.add('dn')
})


//Create new card - use the submit button to clear inputs
const cardQuestion1 = document.querySelector('.card__question1')
const cardAnswer1 = document.querySelector('.answer1')
const cardTags1 = document.querySelector('.tags1')
const cardSubmitButton1 = document.querySelector('.createcard__button')

cardSubmitButton1.addEventListener('submit', (event) => {
    event.preventDefault ()
    cardQuestion1.value = ''
    cardAnswer1.value = ''
    cardTags1.value = ''
  })
  

  //Readmore button for the profile biography
  const showReadMoreBio = document.querySelector('.readmore__button')
  const readMoreTextBio = document.querySelector('.readmorebio__text')
  const readLessBio = document.querySelector('.readless__button')

  showReadMoreBio.addEventListener('click', () => { 
      readMoreTextBio.classList.remove('dn')
      showReadMoreBio.classList.add('dn')
      readLessBio.classList.remove('dn')
  })
  
  readLessBio.addEventListener('click', () => { 
      readMoreTextBio.classList.add('dn')
      showReadMoreBio.classList.remove('dn')
      readLessBio.classList.add('dn')
  })
