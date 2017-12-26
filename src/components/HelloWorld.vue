<template>
  <div class="hello">
    <img class="logo" src="../assets/logo.png">
    <ul>
      <li><router-link to="/alert">Alert</router-link></li>
      <li><router-link to="/loading">Loading</router-link></li>
      <li><router-link to="/checkList">CheckList</router-link></li>
      <li><router-link to="/switch">Switch</router-link></li>
      <li><router-link to="/toast">Toast</router-link></li>
      <li><router-link to="/actionSheet">ActionSheet</router-link></li>
      <li><router-link to="/buttonTab">buttonTab</router-link></li>
      <li><router-link to="/betterScroll">betterScroll</router-link></li>
      <li><router-link to="/waterRipple">waterRipple</router-link></li>
      <li><router-link to="/dial">dial</router-link></li>
      <li><a href="https://tetegw.github.io/fepawn-ui/dist/static/readMe.html">文档说明</a></li>
    </ul>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.hello{
  margin-top: 60px;
}
.logo{
  width: 200px;
  height: 200px;
  margin: 20px auto;
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
