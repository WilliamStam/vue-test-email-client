<template>

  <div id="nav">
    <router-link to="/">Inbox</router-link>
    <router-link to="/sent">Sent</router-link>
    <router-link to="/deleted">Deleted</router-link>
    <router-link to="/compose">Compose</router-link>

  </div>
  <router-view id="contents"/>
</template>

<style lang="scss">
* {
  box-sizing:border-box;
  margin:0;
  padding:0;
}
body {
    padding:0;
    margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

    display:grid;
    width: 100vw;
    height:100vh;
    padding:0;
    margin:0;
    overflow: hidden;

    grid-template-areas:
        "navigation  content";

    grid-template-columns: 200px auto;
grid-template-rows: auto;
}

#nav {
grid-area: navigation;


  a {
    font-weight: bold;
    color: #2c3e50;
      display: block;
      text-align: left;
      border: 1px solid #e1e1e1;
      padding: 1rem;
      margin-bottom: -1px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#contents {
grid-area: content;
display:grid;
    grid-template-columns: 400px auto;
    grid-template-rows: auto;
}
</style>
