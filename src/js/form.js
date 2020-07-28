import { createCard } from './cards.js'

export function form() {
  //Create new card - use the submit button to clear inputs
  const cardQuestion1 = document.querySelector('[data-js=question]')
  const cardAnswer1 = document.querySelector('[data-js=answer]')
  const cardTags1 = document.querySelector('[data-js=taglist]')
  const formCreateCard = document.querySelector('[data-js=formCreateCard]')
  const form = document.querySelector('form')

  formCreateCard.addEventListener('submit', function (event) {
    const question = cardQuestion1.value
    const answer = cardAnswer1.value
    const tags = cardTags1.value.split(',').map(tags => tags.trim())
    createCard({ question, answer, tags })
    event.preventDefault()
    form.reset()
  })
}
