const roll = require('./roll')

/**
 * Page entrypoint logic - specifically this sets up the UX
 */
function main() {
  const btn = document.getElementById('btn-action')
  const image = document.getElementById('image')
  const article = document.getElementById('article')
  btn.innerText = btn.getAttribute('data-ready-text')
  btn.disabled = false

  btn.onclick = () => {
    btn.innerText = btn.getAttribute('data-pending-text')
    btn.disabled = true
    article.innerHTML = ''
    image.style.display = 'none'
    image.src = ''
    roll(({ points, svg }) => {
      image.src = window.URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml'}))
      image.style.display = 'initial'
      article.innerHTML = points
      btn.innerText = btn.getAttribute('data-ready-text')
      btn.disabled = false
    })
  }
}

/**
 * 
 * ACTUAL ENTRYPOINT
 * 
 */
main()