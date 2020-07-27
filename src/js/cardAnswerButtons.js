export function setButtonEvents({showAnswerButton, hideButton, answerHead, answerText}){
  //const showAnswerButton = document.querySelector('[data-js=showAnswerButton]')
  //const answerHead = document.querySelector('[data-js=showAnswerHead]')
  //const answerText1 = document.querySelector('[data-js=showAnswerText]')
  //const hideButton1 = document.querySelector('[data-js=hideAnswerButton]')

  showAnswerButton.addEventListener('click', () => {
    answerHead.classList.remove('dn')
    answerText.classList.remove('dn')
    showAnswerButton.classList.add('dn')
    hideButton.classList.remove('dn')
  })

  hideButton.addEventListener('click', () => {
    answerHead.classList.add('dn')
    answerText.classList.add('dn')
    showAnswerButton.classList.remove('dn')
    hideButton.classList.add('dn')
  })

}
