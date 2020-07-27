
import { setButtonEvents } from './cardAnswerButtons.js'

export function cards() {
  const card = [{},{}, {}
  ]
  card.forEach(createCard)

}

const cardSection = get('[data-js=filledcard]')

export function createCard({question, answer, tags = ['tag', 'tag2', 'tag3','tag4']}) {

  const newCard = createElement({ className: 'card' })

  /* const bookmark = createSvg({ type: 'svg', className:"bookmark", x:"0px", y:"0px"})
   bookmark.textContent = ''
   */

  const questionHeadline = createElement({ type: 'h3', target: newCard })
  questionHeadline.textContent = 'Question:'

  const newQuestion = createElement({ type: 'p', target: newCard })
  newQuestion.textContent = question || 'Question: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremqueaspernatur mollitia cum ratione quaerat. Illo esse, dolor, aliquid ipsa officia quibusdam dolore dolorum tempora reprehenderit adipiscinumquam nesciunt. Explicabo, dolorem!'




  
  const showAnswerButton = createElement({ type: 'button', className: "hide__button", dataJs: 'showAnswerButton', target: newCard })
  showAnswerButton.textContent = "Show Answer"

  const hideButton = createElement({ type: 'button', className: "dn show__button", dataJs: 'hideAnswerButton', target: newCard })
  hideButton.textContent = "Hide Answer"


  const answerHead = createElement({ type: 'h3', className: "dn card__answer1", dataJs: 'showAnswerHead', target: newCard })
  answerHead.textContent = 'Answer:'

  const answerText = createElement({ type: 'p', className: "dn card__answer1", dataJs: 'showAnswerText', target: newCard })
 answerText.textContent = answer || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dol '

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

function createSvg({ type = 'section', className = '', dataJs = '', target = cardSection } = {}) {
  const el = document.createElement(type)
  el.className = className
  el.setAttribute('data-js', dataJs)
  svg.setAttribute('width', '432')
  svg.setAttribute('height', '432')
  svg.setAttribute('viewBox', '0 0 432 432') 
  target.appendChild(el)
  return el
}

function get(selector) {
  return document.querySelector(selector)
}


