export function setButtonEvents({
  showAnswerButton,
  hideButton,
  answerHead,
  answerText,
}) {
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
