<template lang="pug">

nav(class="navbar navbar-expand-sm navbar-dark bg-dark")
  <div class="container p-2">
    <a class="navbar-brand" href="/"> PDFMASTER </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/"><i class="fas fa-home"></i> Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/"><i class="fas fa-envelope"></i> Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Register"><i class="fas fa-envelope"></i> Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login"><i class="fas fa-envelope"></i> Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
  export default {
    name: 'Navigation'
}
</script>

<style lang="scss">
  @import "../scss/css.scss";
</style>
