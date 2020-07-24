export function cardAnswerButtons() {
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
}
