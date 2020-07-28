export function readMoreButtonBio() {
  const showReadMoreBio = document.querySelector('[data-js=readmoreButton]')
  const readMoreTextBio = document.querySelector('[data-js=readmoreBioText]')
  const readLessBio = document.querySelector('[data-js=readlessButton]')

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
