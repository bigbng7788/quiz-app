export function getAll(selector) {
  return document.querySelectorAll(selector)
}

export function get(selector) {
  return document.querySelector(selector)
}

export function createElement({
  type = 'section',
  className = '',
  dataJs = '',
  target = cardSection,
} = {}) {
  const el = document.createElement(type)
  el.className = className
  el.setAttribute('data-js', dataJs)
  target.appendChild(el)
  return el
}
