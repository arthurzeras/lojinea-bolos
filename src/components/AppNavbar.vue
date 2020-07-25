<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="@/assets/img/logo.svg" width="30" height="30" alt="logo">
      <span class=" ml-2">Lojinea de bolos</span>
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light">
            <span class="icon">
              <img src="@/assets/img/cesta.svg" alt="cesta">
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>
