<template>
  <div class="app" id="app">
    <header>
      <nav class="navbar navbar-dark navbar-expand bg-dark">
        <a class="navbar-brand" href="/">My ImageApp</a>
         <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Login</a>
          </li>
      
        </ul>
      </nav>
    </header>
    <main class="main container-fluid py-2">
      content 
    </main>
    <footer class="footer bg-dark">
      <div class="container-fluid py-2">
        <span class="text-light">Footer</span>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  methods: {

  }
}
</script>

<style lang="scss">
  html, 
  body {
      height: 100%;
  }
  .app {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  .main{
    flex: 1;
  }

</style>

