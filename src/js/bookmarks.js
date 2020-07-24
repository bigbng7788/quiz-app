
import {getAll} from './util.js'
getAll()

export function bookmarks(){
// Bookmarks
const bookmarkList = getAll('.bookmark')
bookmarkList.forEach(bookmarkToggle)

function bookmarkToggle(ausgesuchtBookmark) {
    ausgesuchtBookmark.addEventListener('click', () => {
        ausgesuchtBookmark.classList.toggle('card__bookmark--on')
    })
}
}