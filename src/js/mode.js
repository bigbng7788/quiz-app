export function mode() {
  const body = document.querySelector('body')
  const buttonLightMode = document.querySelector('.button--light')
  const buttonDarkMode = document.querySelector('.button--dark')

  buttonLightMode.addEventListener('click', () => {
    body.classList.add('body--lightmode')
    buttonDarkMode.classList.remove('dn')
    buttonLightMode.classList.add('dn')
  })

  buttonDarkMode.addEventListener('click', () => {
    body.classList.remove('body--lightmode')
    buttonDarkMode.classList.add('dn')
    buttonLightMode.classList.remove('dn')
  })
}
