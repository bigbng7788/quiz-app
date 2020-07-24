export function readMoreButtonBio() {
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
}
