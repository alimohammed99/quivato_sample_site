<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-10 me-auto mb-4">
          <h4 class="text-white mb-3"><router-link to="/" class="footer-link">Quivato</router-link></h4>
          <p class="" style="color:white">
            Quivato is a leading provider of bespoke website and app development solutions. Our mission is to help businesses, schools, organizations, banks, and every sector imaginable thrive in the digital world.
          </p>
          <p class="text-white mt-4">
            &copy; 2024 <strong>Quivato</strong>
          </p>
        </div>

        <div class="col-lg-5 col-8">
          <h5 class="text-white mb-3">Quick Links</h5>

          <ul class="footer-menu d-flex flex-wrap">
            <li class="footer-menu-item" style="color:white">
              <router-link to="/services" class="footer-menu-link text-white">Services</router-link>
            </li>

            <li class="footer-menu-item">
              <router-link to="/contact" class="footer-menu-link text-white">Contact Us</router-link>
            </li>

            <li class="footer-menu-item">
              <router-link to="javascript:;" class="footer-menu-link text-white">Blog</router-link>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-4">
          <h5 class="text-white mb-3">Connect with Us</h5>

          <ul class="social-icon">
            <li style="color:white"><a href="javascript:;" class="social-icon-link bi-facebook text-white"></a></li>

            <li><a href="javascript:void(0)" class="social-icon-link bi-twitter text-white"></a></li>

            <li><a href="javascript:void(0)" class="social-icon-link bi-linkedin text-white"></a></li>

            <li><a href="javascript:void(0)" class="social-icon-link bi-instagram text-white"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>
