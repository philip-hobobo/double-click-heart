const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
  if(clickTime === 0) {
      clickTime = new Date().getTime()
  } else {
      if((new Date().getTime() - clickTime) < 800) {
        createHeart(e)
        clickTime = 0
      } else {
          clickTime = new Date().getTime()
      }
  }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY
    // get position of the mouse
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    // get position of the mouse click relative to the element
    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

// removes hearts so there aren't multiples in the DOM
    setTimeout(() => heart.remove(), 1000)
}
