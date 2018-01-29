<template>
  <div class="hello">
    <div class="logo">
       <svg class="social" width="304px" height="309px" viewBox="20 -5 304 309" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 40.2 (33826) - http://www.bohemiancoding.com/sketch -->
            <desc>Created with Sketch.</desc>
            <defs>
                <defs>
                    <linearGradient x1="0%" y1="50%" x2="56.3844873%" y2="50%" id="linearGradient-1">
                        <stop stop-color="#5BA67C" offset="0%"></stop>
                        <stop stop-color="#296166" offset="94.8441486%"></stop>
                    </linearGradient>
                </defs>
            </defs>
            <polygon  class="path" id="背景" stroke="#979797" stroke-width="1" fill="url(#linearGradient-1)" points="198.450079 303 198.450079 297.449219 198.450079 284.056641 198.450079 273.640625 198.450079 159.322266 292.293602 159.322266 292.293602 133.782759 292.293602 127.165414 198.450079 127.165414 198.450079 29.0800781 301.293602 29.0800781 301.293602 -4 172.674257 -4 151.45146 -4 151.45146 3.33935547 151.45146 6.1171875 151.45146 8.46206373 151.45146 114.165414 151.45146 115.975586 151.45146 117.577148 151.45146 120.782759 151.45146 126.387538 151.45146 291.02537 151.45146 295.357422 151.45146 297.449219 151.45146 303"></polygon>
        </svg>
    </div>
    <ul>
      <li><router-link to="/alert">Alert</router-link></li>
      <li><router-link to="/loading">Loading</router-link></li>
      <li><router-link to="/checkList">CheckList</router-link></li>
      <li><router-link to="/switch">Switch</router-link></li>
      <li><router-link to="/toast">Toast</router-link></li>
      <li><router-link to="/actionSheet">ActionSheet</router-link></li>
      <li><router-link to="/buttonTab">ButtonTab</router-link></li>
      <li><router-link to="/betterScroll">BetterScroll</router-link></li>
      <li><router-link to="/waterRipple">WaterRipple</router-link></li>
      <li><router-link to="/dial">Dial</router-link></li>
      <li><router-link to="/countUp">CountUp</router-link></li>
      <li><router-link to="/range">Range</router-link></li>
      <li><router-link to="/security">Security</router-link></li>
      <li><router-link to="/codeTest">CodeTest</router-link></li>
      <li><a href="https://tetegw.github.io/fepawn-ui/dist/static/readMe.html">文档说明</a></li>
    </ul>
  </div>
</template>


<script>
import anime from 'animejs'
export default {
  mounted () {
    var socialTimeline = anime.timeline({
      autoplay: true
    })

    socialTimeline
      .add({
        targets: '.social',
        opacity: 1,
        duration: 500
      })
      .add({
        targets: '.path',
        points: {
          value: [
            '198.450079 303 198.450079 297.449219 198.450079 284.056641 198.450079 273.640625 198.450079 159.322266 292.293602 159.322266 292.293602 133.782759 292.293602 127.165414 198.450079 127.165414 198.450079 29.0800781 301.293602 29.0800781 301.293602 -4 172.674257 -4 151.45146 -4 151.45146 3.33935547 151.45146 6.1171875 151.45146 8.46206373 151.45146 114.165414 151.45146 115.975586 151.45146 117.577148 151.45146 120.782759 151.45146 126.387538 151.45146 291.02537 151.45146 295.357422 151.45146 297.449219 151.45146 303',
            '198.450079 303 301.293602 303 301.293602 273.640625 198.450079 273.640625 198.450079 159.322266 292.293602 159.322266 292.293602 133.782759 292.293602 127.165414 198.450079 127.165414 198.450079 29.0800781 301.293602 29.0800781 301.293602 -4 172.674257 -4 151.45146 -4 151.45146 3.33935547 151.45146 6.1171875 151.45146 8.46206373 151.45146 114.165414 151.45146 115.975586 151.45146 117.577148 151.45146 120.782759 151.45146 126.387538 151.45146 291.02537 151.45146 295.357422 151.45146 297.449219 151.45146 303'
          ],
          duration: 700,
          delay: 200,
          easing: 'easeInOutQuart'
        }
      })
      .add({
        targets: '.path',
        points: {
          value: [
            '198.450079 303 301.293602 303 301.293602 273.640625 198.450079 273.640625 198.450079 159.322266 292.293602 159.322266 292.293602 133.782759 292.293602 127.165414 198.450079 127.165414 198.450079 29.0800781 301.293602 29.0800781 301.293602 -4 172.674257 -4 151.45146 -4 151.45146 3.33935547 151.45146 6.1171875 151.45146 8.46206373 151.45146 114.165414 151.45146 115.975586 151.45146 117.577148 151.45146 120.782759 151.45146 126.387538 151.45146 291.02537 151.45146 295.357422 151.45146 297.449219 151.45146 303',
            '318.533161 303 317.181529 281.158662 305.042783 264.240085 290.795205 248.526267 198.450079 146.677764 301.293602 146.677764 322.462991 120.782759 301.293602 94.4616056 199.404281 94.4616056 212.875153 79.1607117 252.308761 34.3700383 218.695837 -4 172.674257 -4 90.3816041 -4 85.8384908 2.31440874 90.3816041 8.46206373 151.45146 8.46206373 151.45146 114.165414 25.6403864 114.165414 21 120.782759 25.6403864 126.387538 151.45146 126.387538 151.45146 291.02537 25.6403864 291.02537 21 297.19248 25.6403864 303'
          ],
          duration: 700,
          delay: 500,
          easing: 'easeInOutQuart'
        }
      })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.hello {
  margin-top: 60px;
}
.logo {
  width: 200px;
  height: 200px;
  margin: 20px auto;
}
.logo svg {
  width: 100%;
  height: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 5px 10px;
}

a {
  color: #42b983;
}
</style>
