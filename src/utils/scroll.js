/* eslint-disable no-param-reassign */

const easeInOutQuad = (t, b, c, d) => {
  t /= (d / 2)
  if (t < 1) return c / 2 * t * t + b
  t -= 1
  return -c / 2 * (t * (t - 2) - 1) + b
}

const scrollSlider = (element, change, duration) => {
  const start = element.scrollLeft
  let currentTime = 0
  const increment = 20

  const animateScroll = () => {
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)
    element.scrollLeft = val
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

export default scrollSlider
