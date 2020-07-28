
import { setButtonEvents } from './cardAnswerButtons.js'
import { get } from './util.js'

export function cards() {
  const card = [{}, {}]
  card.forEach(createCard)
}

const cardSection = get('[data-js=filledcard]')

export function createCard({question, answer, tags = []}) {

  const newCard = createElement({ className: 'card' })

  newCard.innerHTML =`<svg data-js="bookmark" class="bookmark" version="1.1" x="0px" y="0px" width="431.972px"
  height="431.972px" viewBox="0 0 431.972 431.972" style="
      enable-background: new 0 0 431.972 431.972;
      background-color: transparent;
    " xml:space="preserve">
  <g>
    <path d="M393.146,14.279c-3.713-5.333-8.713-9.233-14.989-11.707c-3.997-1.711-8.186-2.568-12.565-2.568V0H66.378
     c-4.377,0-8.562,0.857-12.56,2.568c-6.28,2.472-11.278,6.377-14.989,11.707c-3.71,5.33-5.568,11.228-5.568,17.701v368.019
     c0,6.475,1.858,12.371,5.568,17.706c3.711,5.329,8.709,9.233,14.989,11.704c3.994,1.711,8.183,2.566,12.56,2.566
     c8.949,0,16.844-3.142,23.698-9.418l125.91-121.062l125.91,121.065c6.663,6.081,14.562,9.127,23.695,9.127
     c4.76,0,8.948-0.756,12.565-2.279c6.276-2.471,11.276-6.375,14.989-11.711c3.71-5.328,5.564-11.225,5.564-17.699V31.98
     C398.71,25.507,396.852,19.609,393.146,14.279z M362.166,391.139L241.397,275.224l-25.411-24.264l-25.409,24.264L69.809,391.139
     V36.549h292.357V391.139L362.166,391.139z" />
  </g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g></svg>`


function addBookmarkLogic(bookmark) {
  bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('bookmark--on')
  }) 
}

  const questionHeadline = createElement({ type: 'h3', target: newCard })
  questionHeadline.textContent = 'Question:'

  const newQuestion = createElement({ type: 'p', target: newCard })
  newQuestion.textContent = question

  const showAnswerButton = createElement({ type: 'button', className: "hide__button", dataJs: 'showAnswerButton', target: newCard })
  showAnswerButton.textContent = "Show Answer"

  const hideButton = createElement({ type: 'button', className: "dn show__button", dataJs: 'hideAnswerButton', target: newCard })
  hideButton.textContent = "Hide Answer"

  const answerHead = createElement({ type: 'h3', className: "dn card__answer1", dataJs: 'showAnswerHead', target: newCard })
  answerHead.textContent = 'Answer:'

  const answerText = createElement({ type: 'p', className: "dn card__answer1", dataJs: 'showAnswerText', target: newCard })
  answerText.textContent = answer

  setButtonEvents({showAnswerButton, hideButton, answerHead, answerText})

  const listElementCard = createElement({ type: 'ul', className: "card__taglist", dataJs: 'tagList', target: newCard })

  tags.forEach(createTag)

  function createTag(tag) {
    const tagElement = createElement({ type: 'li', className: "card__tag", dataJs: 'tag', target: listElementCard })
    tagElement.textContent = tag
  }

}




function createElement({ type = 'section', className = '', dataJs = '', target = cardSection } = {}) {
  const el = document.createElement(type)
  el.className = className
  el.setAttribute('data-js', dataJs)
  target.appendChild(el)
  return el
}

