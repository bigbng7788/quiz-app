
export function form(){

//Create new card - use the submit button to clear inputs
const cardQuestion1 = document.querySelector('.card__question1')
const cardAnswer1 = document.querySelector('.answer1')
const cardTags1 = document.querySelector('.tags1')
const formCreateCard = document.querySelector('.formular__createcard')
const form = document.querySelector ('form')

formCreateCard.addEventListener('submit', function (event) {
    event.preventDefault()
    form.reset()
})
}