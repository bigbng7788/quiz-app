import { getAll } from './util.js'
getAll()

export function bookmarks() {
  const bookmarkList = getAll('[data-js=bookmark]')
  bookmarkList.forEach(bookmarkToggle)

  function bookmarkToggle(ausgesuchtBookmark) {
    ausgesuchtBookmark.addEventListener('click', () => {
      ausgesuchtBookmark.classList.toggle('bookmark--on')
    })
  }
}
