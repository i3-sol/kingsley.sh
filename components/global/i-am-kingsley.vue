<template>
  <div id="photo" class="avatar" />
</template>

<script>
import $ from 'jquery'
export default {
  mounted () {
    function photoPosition (photo, { left, top }, e, photoPos) {
      const touchstart = e.type === 'touchstart' || e.type === 'touchmove'
      const event = touchstart ? e.originalEvent : e
      const pageX = touchstart ? event.targetTouches[0].pageX : event.pageX
      const pageY = touchstart ? event.targetTouches[0].pageY : event.pageY

      const coordX = pageX - left - 96
      const coordY = pageY - top - 96

      const absY = Math.abs(coordY)
      const absX = Math.abs(coordX)

      if (coordX + 96 >= 0 && coordX + 96 <= 194 && coordY + 96 >= 0 && coordY + 96 <= 194) {
        photo.css({
          'background-position': `0px ${photoPos}`,
          filter: 'grayscale(0)'
        })
      } else if (coordX >= 0 && coordY < 0) {
        photo.css('filter', 'grayscale(1)')
        if (absX / absY >= 2) {
          photo.css('background-position', `-200px ${photoPos}`)
        } else if (absY / absX >= 2) {
          photo.css('background-position', `-800px ${photoPos}`)
        } else {
          photo.css('background-position', `-1200px ${photoPos}`)
        }
      } else if (coordX >= 0 && coordY >= 0) {
        photo.css('filter', 'grayscale(1)')
        if (absX / absY >= 2) {
          photo.css('background-position', `-200px ${photoPos}`)
        } else if (absY / absX >= 2) {
          photo.css('background-position', `-600px ${photoPos}`)
        } else {
          photo.css('background-position', `-1400px ${photoPos}`)
        }
      } else if (coordX < 0 && coordY >= 0) {
        photo.css('filter', 'grayscale(1)')
        if (absX / absY >= 2) {
          photo.css('background-position', `-400px ${photoPos}`)
        } else if (absY / absX >= 2) {
          photo.css('background-position', `-600px ${photoPos}`)
        } else {
          photo.css('background-position', `-1600px ${photoPos}`)
        }
      } else if (coordX < 0 && coordY < 0) {
        photo.css('filter', 'grayscale(1)')
        if (absX / absY >= 2) {
          photo.css('background-position', `-400px ${photoPos}`)
        } else if (absY / absX >= 2) {
          photo.css('background-position', `-800px ${photoPos}`)
        } else {
          photo.css('background-position', `-1000px ${photoPos}`)
        }
      }
    }

    const photos = [{
      elem: $('#photo'),
      pos: '200px'
    }]

    photos.forEach((photo) => {
      photo.offset = photo.elem.offset()

      photo.elem.click(() => {
        photo.elem.toggleClass('incognito')
        photo.elem.css({
          'background-position': `-1800px ${photo.pos}`,
          filter: 'grayscale(0)'
        })
      })
    })

    $(document).on('mousemove touchmove', (e) => {
      photos.forEach(({ elem, offset, pos }) => {
        photoPosition(elem, offset, e, pos)
      })
    })
  }
}
</script>
