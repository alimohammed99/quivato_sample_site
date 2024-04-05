<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link @click.native="closeNavbar" to="/" class="navbar-brand">
        <strong><span>QUIVATO</span></strong>
      </router-link>

      <!-- Close button for responsive mode -->
      <button class="btn btn-link d-lg-none" style="visibility: hidden;" @click="closeNavbar">Close</button>

      <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item" :class="{ 'active': isRouteActive('/') }">
            <router-link @click.native="closeNavbar" to="/" class="nav-link" exact>Home</router-link>
          </li>

          <li class="nav-item" :class="{ 'active': isRouteActive('/services') }">
            <router-link @click.native="closeNavbar" to="/services" class="nav-link">Services</router-link>
          </li>

          <li class="nav-item" :class="{ 'active': isRouteActive('/contact') }">
            <router-link @click.native="closeNavbar" to="/contact" class="nav-link">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false
    };
  },
  methods: {
    closeNavbar() {
      // Close the navbar collapse when a link is clicked or close button is clicked
      this.isNavbarOpen = false;
    },
    toggleNavbar() {
      // Toggle the navbar collapse when the hamburger icon is clicked
      this.isNavbarOpen = !this.isNavbarOpen;
      // Show or hide the close button dynamically
      const closeButton = document.querySelector('.navbar .btn-link');
      if (closeButton) {
        closeButton.style.visibility = this.isNavbarOpen ? 'visible' : 'hidden';
      }
    },
    isRouteActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>

<style lang="scss" scoped>
/* Additional styles if needed */
</style>
