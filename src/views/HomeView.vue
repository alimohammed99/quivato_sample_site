<template>

  <!-- This code is for the pre-loader, the code is in components/PagePreloader.vue -->
  <PagePreloader :isLoading="loading" />


  <main>

    <!-- Navigation bar, the code is in components/NavBar.vue -->
    <NavBar />

    <!-- BANNER -->
    <section class="slick-slideshow">
      <div class="slick-custom">
        <img src="/images/slideshow/medium-shot-business-women-high-five.jpeg" class="img-fluid banner_home" alt="" />

        <div class="slick-bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-10">
                <!-- Wrap the text content inside a div with overflow -->
                <div class="scrollable-content" style="max-height:; margin-bottom: 30px;">

                  <!-- Swipe up Indicator  -->
                  <div class="mobile-indicator pt-2">
                    <p style="font-size: 14px; color: white;">Swipe up to read more</p>
                  </div>

                  <h1 class="slick-title mt-3 pt-4" style="">Welcome to Quivato - Where
                    Digital Innovation
                    Meets Excellence!</h1>

                  <p class="lead text-white mt-lg-3 mb-lg-5" style="font-weight:bold; padding-bottom:20px">
                    At Quivato, we're passionate about turning your vision into reality. As a leading provider of
                    bespoke
                    website and app development solutions, we're dedicated to helping businesses, schools,
                    organizations,
                    banks, and every sector imaginable thrive in the digital world.

                    With a team of skilled professionals and a commitment to excellence, we specialize in crafting
                    cutting-edge digital experiences that captivate audiences, drive engagement, and deliver results.
                    From
                    sleek and intuitive user interfaces to robust backend systems, our tailored solutions are designed
                    to
                    meet your unique needs and exceed your expectations.
                    <router-link to="/services" class="btn btn-success mt-3">Learn more about us</router-link>
                  </p>
                </div>
                <!-- Button moved outside the scrollable area -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- GET STARTED WITH QUIVATO -->
    <section class="about section-padding" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="mb-5">Get started with <span>Quivato</span> </h2>
          </div>

          <div class="col-lg-2 col-12 mt-auto mb-auto">
            <ul class="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab"
              role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                  type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                  Introduction
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-youtube-tab" data-bs-toggle="pill" data-bs-target="#pills-youtube"
                  type="button" role="tab" aria-controls="pills-youtube" aria-selected="true">
                  How we work?
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill"
                  type="button" role="tab" aria-controls="pills-skill" aria-selected="false">
                  Capabilites
                </button>
              </li>
            </ul>
          </div>

          <div class="col-lg-10 col-12">
            <div class="tab-content mt-2" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                  <div class="col-lg-7 col-12">
                    <img src="/images/pim-chu-z6NZ76_UTDI-unsplash.jpeg" class="img-fluid" alt="" />
                  </div>

                  <div class="col-lg-5 col-12">
                    <div class="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                      <h4 class="mb-3">
                        Embark on a journey of digital transformation with <span>Quivato</span>.
                      </h4>

                      <p>
                        Discover innovative solutions tailored to your needs, designed to propel your business forward.
                        From captivating websites to intuitive apps, we're here to bring your vision to life. Let's
                        redefine success together.
                      </p>

                      <p>
                        Welcome to Quivato.
                      </p>

                      <div class="mt-2 mt-lg-auto">

                        <router-link to="/services" class="custom-link mb-2">
                          Learn more about us
                          <i class="bi-arrow-right ms-2"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="pills-youtube" role="tabpanel" aria-labelledby="pills-youtube-tab">
                <div class="row">
                  <div class="col-lg-7 col-12">
                    <div class="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/watch?v=Hzi3PDz1AWU&pp=ygUPaG93IHRvIG1lZGl0YXRl"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                  </div>

                  <div class="col-lg-5 col-12">
                    <div class="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                      <h4 class="mb-3">Life at <span>Quivato</span></h4>

                      <p>
                        At Quivato, our approach is simple yet effective. We begin by understanding your unique goals
                        and requirements, conducting in-depth analysis and research to craft tailored solutions. Our
                        team of experts then collaborates closely with you throughout the development process, ensuring
                        transparency, communication, and feedback at every stage.
                      </p>


                      <div class="mt-2 mt-lg-auto">
                        <router-link to="/contact" class="custom-link mb-2">
                          Work with us
                          <i class="bi-arrow-right ms-2"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab">
                <div class="row">
                  <div class="col-lg-7 col-12">
                    <img src="/images/who-img.jpg" class="img-fluid" alt="" />
                  </div>

                  <div class="col-lg-5 col-12">
                    <div class="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                      <h4 class="mb-3">What can we help you with?</h4>

                      <p>
                        Over the past three years in business, we've had the opportunity to work on a variety of
                        projects...
                      </p>

                      <div class="skill-thumb mt-3">
                        <strong>Branding</strong>
                        <span class="float-end">90%</span>
                        <div class="progress">
                          <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90"
                            aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
                        </div>

                        <strong>Design & Stragety</strong>
                        <span class="float-end">70%</span>
                        <div class="progress">
                          <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70"
                            aria-valuemin="0" aria-valuemax="100" style="width: 70%"></div>
                        </div>

                        <strong>Online Prescence</strong>
                        <span class="float-end">80%</span>
                        <div class="progress">
                          <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100" style="width: 80%"></div>
                        </div>
                      </div>

                      <div class="mt-2 mt-lg-auto">
                        <router-link to="/services" class="custom-link mb-2">
                          Explore more
                          <i class="bi-arrow-right ms-2"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- WHAT WE DO - OUR SERVICES -->
    <section class="do_section layout_padding mb-4" data-aos="fade-up">
      <div class="container">
        <div class="heading_container">
          <h2>
            What we do
          </h2>
          <p>
            Empowering businesses with innovative digital strategies.
          </p>
        </div>

        <div class="do_container">
          <router-link to="/services" class="box arrow-start arrow_bg" style="cursor: pointer">
            <div class="img-box">
              <img src="/images/d-3.png" alt="">
            </div>
            <div class="detail-box" style="cursor: pointer">
              <h6>Custom <br> Website Design</h6>
            </div>
          </router-link>
          <router-link to="/services" class="box arrow-middle arrow_bg" style="cursor: pointer">
            <div class="img-box">
              <img src="/images/d-2.png" alt="">
            </div>
            <div class="detail-box" style="cursor: pointer">
              <h6>Mobile App <br> Development</h6>
            </div>
          </router-link>
          <router-link to="/services" class="box arrow-middle arrow_bg" style="cursor: pointer">
            <div class="img-box">
              <img src="/images/d-4.png" alt="">
            </div>
            <div class="detail-box" style="cursor: pointer">
              <h6>E-commerce <br> Solutions</h6>
            </div>
          </router-link>
          <router-link to="/services" class="box arrow-end arrow_bg" style="cursor: pointer">
            <div class="img-box">
              <img src="/images/d-1.png" alt="">
            </div>
            <div class="detail-box" style="cursor: pointer">
              <h6>Digital <br> Marketing Strategy</h6>
            </div>
          </router-link>
          <router-link to="/services" class="box" style="cursor: pointer">
            <div class="img-box">
              <img src="/images/d-5.png" alt="">
            </div>
            <div class="detail-box" style="cursor: pointer">
              <h6>UI/UX <br> Design Optimization</h6>
            </div>
          </router-link>
        </div>

      </div>
    </section>

    <!-- TESTIMONIAL section -->
    <div class="container" style="margin-top: 7%" data-aos="fade-up">
      <h2 class="text-center mb-4">What Customers Say</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body">
              <p class="card-text">"Quivato helped us create a stunning website for our business. Their team was
                professional, efficient, and attentive to our needs. We highly recommend their services."</p>
            </div>
            <div class="card-footer text-muted d-flex align-items-center justify-content-between">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-person-fill me-1" viewBox="0 0 16 16">
                  <path d="M7.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path
                    d="M0 16a9 9 0 0 1 9-9h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3V7a7 7 0 0 0-7 7zm8.14-9a7 7 0 0 0-6.28 0A7 7 0 0 0 8 14.87a7 7 0 0 0 6.28-8.74A7 7 0 0 0 8.14 7z" />
                </svg>
                <strong>Ahmad Singh</strong><br>
                CEO, ALBASS Company
              </div>
              <div>
                <a href="#" class="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-facebook" viewBox="0 0 16 16">
                    <path
                      d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5v-6H7V7.46h1.5V5.61C8.5 3.18 9.55 0 12.87 0H16v2h-1.13C13.27 2 13 2.64 13 3.45V5h2.5l-.33 2H13v6h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  </svg>
                </a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-twitter" viewBox="0 0 16 16">
                    <path
                      d="M15.036 4.935c.01.23.015.462.015.69 0 7.07-5.384 15.215-15.215 15.215A15.237 15.237 0 0 1 0 13.658c1.006.117 2.037.177 3.068.177 5.926 0 9.137-4.914 9.137-9.138 0-.139-.004-.278-.01-.415A10.352 10.352 0 0 0 16 2.306a10.23 10.23 0 0 1-2.965.81 5.133 5.133 0 0 0 2.12-2.843 10.303 10.303 0 0 1-3.252 1.245A5.11 5.11 0 0 0 8.258 0C3.662 0 .508 3.156.508 7.752c0 .39.044.772.13 1.15a14.652 14.652 0 0 0 11.088-5.013 5.193 5.193 0 0 0-.772-.062c-1.508 0-2.915.51-4.04 1.374A5.036 5.036 0 0 0 5.39 6.51v.064a5.143 5.143 0 0 0 2.317.638 5.055 5.055 0 0 1-1.51 4.251 5.078 5.078 0 0 0 2.306-.64 5.038 5.038 0 0 1-1.256 4.217A10.156 10.156 0 0 0 12.712 16c6.61 0 10.243-5.518 10.243-10.26 0-.156-.004-.312-.01-.467a7.39 7.39 0 0 0 1.81-1.887 7.55 7.55 0 0 1-2.405.923z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body">
              <p class="card-text">"Working with Quivato was a fantastic experience. They delivered a high-quality
                website that perfectly captures our brand identity. Their attention to detail exceeded our expectations.
              </p>
            </div>
            <div class="card-footer text-muted d-flex align-items-center justify-content-between">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-person-fill me-1" viewBox="0 0 16 16">
                  <path d="M7.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path
                    d="M0 16a9 9 0 0 1 9-9h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3V7a7 7 0 0 0-7 7zm8.14-9a7 7 0 0 0-6.28 0A7 7 0 0 0 8 14.87a7 7 0 0 0 6.28-8.74A7 7 0 0 0 8.14 7z" />
                </svg>
                <strong>Amitabh Surat</strong><br>
                G.Manager, Acme Corporation
              </div>
              <div>
                <a href="#" class="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-facebook" viewBox="0 0 16 16">
                    <path
                      d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5v-6H7V7.46h1.5V5.61C8.5 3.18 9.55 0 12.87 0H16v2h-1.13C13.27 2 13 2.64 13 3.45V5h2.5l-.33 2H13v6h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  </svg>
                </a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-twitter" viewBox="0 0 16 16">
                    <path
                      d="M15.036 4.935c.01.23.015.462.015.69 0 7.07-5.384 15.215-15.215 15.215A15.237 15.237 0 0 1 0 13.658c1.006.117 2.037.177 3.068.177 5.926 0 9.137-4.914 9.137-9.138 0-.139-.004-.278-.01-.415A10.352 10.352 0 0 0 16 2.306a10.23 10.23 0 0 1-2.965.81 5.133 5.133 0 0 0 2.12-2.843 10.303 10.303 0 0 1-3.252 1.245A5.11 5.11 0 0 0 8.258 0C3.662 0 .508 3.156.508 7.752c0 .39.044.772.13 1.15a14.652 14.652 0 0 0 11.088-5.013 5.193 5.193 0 0 0-.772-.062c-1.508 0-2.915.51-4.04 1.374A5.036 5.036 0 0 0 5.39 6.51v.064a5.143 5.143 0 0 0 2.317.638 5.055 5.055 0 0 1-1.51 4.251 5.078 5.078 0 0 0 2.306-.64 5.038 5.038 0 0 1-1.256 4.217A10.156 10.156 0 0 0 12.712 16c6.61 0 10.243-5.518 10.243-10.26 0-.156-.004-.312-.01-.467a7.39 7.39 0 0 0 1.81-1.887 7.55 7.55 0 0 1-2.405.923z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body">
              <p class="card-text">"We're extremely satisfied with the mobile app developed by Quivato. It's
                user-friendly, visually appealing, and has helped us reach a wider audience. Thank you for your
                excellent work!"</p>
            </div>
            <div class="card-footer text-muted d-flex align-items-center justify-content-between">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-person-fill me-1" viewBox="0 0 16 16">
                  <path d="M7.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path
                    d="M0 16a9 9 0 0 1 9-9h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3V7a7 7 0 0 0-7 7zm8.14-9a7 7 0 0 0-6.28 0A7 7 0 0 0 8 14.87a7 7 0 0 0 6.28-8.74A7 7 0 0 0 8.14 7z" />
                </svg>
                <strong>Arjun Ismail</strong><br>
                Founder, ACUTE Organization
              </div>
              <div>
                <a href="#" class="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-facebook" viewBox="0 0 16 16">
                    <path
                      d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5v-6H7V7.46h1.5V5.61C8.5 3.18 9.55 0 12.87 0H16v2h-1.13C13.27 2 13 2.64 13 3.45V5h2.5l-.33 2H13v6h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  </svg>
                </a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-twitter" viewBox="0 0 16 16">
                    <path
                      d="M15.036 4.935c.01.23.015.462.015.69 0 7.07-5.384 15.215-15.215 15.215A15.237 15.237 0 0 1 0 13.658c1.006.117 2.037.177 3.068.177 5.926 0 9.137-4.914 9.137-9.138 0-.139-.004-.278-.01-.415A10.352 10.352 0 0 0 16 2.306a10.23 10.23 0 0 1-2.965.81 5.133 5.133 0 0 0 2.12-2.843 10.303 10.303 0 0 1-3.252 1.245A5.11 5.11 0 0 0 8.258 0C3.662 0 .508 3.156.508 7.752c0 .39.044.772.13 1.15a14.652 14.652 0 0 0 11.088-5.013 5.193 5.193 0 0 0-.772-.062c-1.508 0-2.915.51-4.04 1.374A5.036 5.036 0 0 0 5.39 6.51v.064a5.143 5.143 0 0 0 2.317.638 5.055 5.055 0 0 1-1.51 4.251 5.078 5.078 0 0 0 2.306-.64 5.038 5.038 0 0 1-1.256 4.217A10.156 10.156 0 0 0 12.712 16c6.61 0 10.243-5.518 10.243-10.26 0-.156-.004-.312-.01-.467a7.39 7.39 0 0 0 1.81-1.887 7.55 7.55 0 0 1-2.405.923z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!--MISSION AND VALUES SECTION -->
    <section class="mission-values-section text-center py-5" data-aos="fade-up">
      <div class="container">
        <h2 class="mb-4">Our Mission & Values</h2>
        <p class="mb-4">At Quivato, our mission is to empower businesses and organizations with innovative digital
          solutions that drive success and growth. We are committed to:</p>
        <ul class="list-unstyled">
          <li class="mb-2"><i class="bi bi-arrow-right"></i> Delivering exceptional quality in all our services</li>
          <li class="mb-2"><i class="bi bi-arrow-right"></i> Fostering creativity and innovation in every project</li>
          <li class="mb-2"><i class="bi bi-arrow-right"></i> Building strong, lasting relationships with our clients
          </li>
          <li class="mb-2"><i class="bi bi-arrow-right"></i> Embracing diversity, inclusivity, and equality
          </li>
          <li class="mb-2"><i class="bi bi-arrow-right"></i> Continuously learning and adapting to new technologies
          </li>
        </ul>
      </div>
    </section>



    <!-- CALL TO ACTION SECTION -->
    <section class="cta-section text-center py-5 mt-4">
      <div class="container">
        <h2 class="mb-4">Explore Our Services or Contact Us</h2>
        <p class="mb-4">Ready to take your digital presence to the next level? Explore our services or get in touch with
          us to discuss your project!</p>
        <a href="/services" class="btn btn-primary me-3 animated-button bounce">Explore Services</a>
        <a href="/contact" class="btn btn-secondary animated-button bounce">Contact Us</a>
      </div>
    </section>


  </main>

  <!-- The Footer section, the code is in components/FooterSection.vue -->
  <FooterSection />

</template>

<script>
// Importing our different Components
import PagePreloader from '@/components/PagePreloader.vue';
import NavBar from '@/components/NavBar.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'HomeView',
  components: {
    PagePreloader,
    NavBar,
    FooterSection
  },
  data() {
    return {
      loading: true // Set initial loading state to true
    };
  },
  mounted() {
    // Simulate asynchronous data loading
    setTimeout(() => {
      this.loading = false; // Hide preloader after data loading is complete ( 2 seconds )
    }, 2000);

    // Initialize AOS.js
    AOS.init();
  }
}


</script>


<style poped>
@media screen and (max-width: 767px) {
  .scrollable-content {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 30px;
  }
}


@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

/* Media query to show indicator only on mobile screens */
/* Hide the indicator by default */
.mobile-indicator {
  display: none;
}

/* Media query to show indicator only on mobile screens */
@media only screen and (max-width: 991px) {
  .mobile-indicator {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    animation: bounce 1s infinite;
    /* Display the indicator on small screens */
    display: block;
  }
}

/* Bounce animation */
@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

/* Apply animation to buttons */
.animated-button {
  animation: bounce 0.7s infinite;
}

/* Add hover effect */
.animated-button:hover {
  animation: none;
  /* Disable bounce animation on hover */
  transform: scale(1.1);
  /* Scale the button on hover */
}
</style>
