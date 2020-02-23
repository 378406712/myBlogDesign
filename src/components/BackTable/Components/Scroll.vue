<template>
  <div id="gototop" class="animated fadeInUp" style="display: inline;">
    <h1>❤</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    var gototop = document.getElementById('gototop')
    var timer
    var tf = true
    function showgototop() {
      var ostop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      var ch =
        document.body.clientHeight || document.documentElement.clientHeight
      if (ostop >= ch) {
        gototop.style.display = 'inline'
        gototop.className = 'animated fadeInUp'
      } else {
        gototop.className = 'animated fadeOutDown'
      }
      if (!tf) {
        clearInterval(timer)
      }
      tf = false
    }
    gototop.onclick = function() {
      timer = setInterval(function() {
        var ostop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop
        var speed = Math.ceil(ostop / 7)
        document.documentElement.scrollTop = document.body.scrollTop =
          ostop - speed
        if (ostop == 0) {
          clearInterval(timer)
        }
        tf = true
      }, 30)
    }
    window.addEventListener('scroll', showgototop)
  }
}
</script>

<style scoped>
#gototop {
    opacity: 0.6;
    position: fixed;
    left: 97%;
    top: 50%;
    width: 100px;
    cursor: pointer;
    display: none;
}
</style>