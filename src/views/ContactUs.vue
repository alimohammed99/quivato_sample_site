<template>

    <!-- This code is for the pre-loader, the code is in components/PagePreloader.vue -->
    <PagePreloader :isLoading="loading" />

    <main>

        <!-- Navigation bar, the code is in components/NavBar.vue -->
        <NavBar />

        <header class="site-header section-padding-img site-header-image">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-12 header-info">
                        <h1>
                            <span class="d-block text-primary bouncing-text">Say hello to us</span>
                            <span class="d-block text-dark">We'd love to hear from you</span>
                        </h1>
                    </div>
                </div>
            </div>

            <img src="/images/header/positive-european-woman-has-break-after-work.jpg" class="header-image img-fluid"
                alt="" />
        </header>

        <section class="contact section-padding" data-aos="fade-up">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <h2 class="mb-4">Let's <span>begin</span></h2>

                        <form class="contact-form me-lg-5 pe-lg-3" @submit="submitForm" role="form">
                            <div class="form-floating">
                                <input type="text" name="name" id="name" class="form-control" placeholder="Full name"
                                    required />

                                <label for="name">Full name</label>
                            </div>

                            <div class="form-floating my-4">
                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control"
                                    placeholder="Email address" required />

                                <label for="email">Email address</label>
                            </div>

                            <div class="form-floating my-4">
                                <input type="subject" name="subject" id="subject" class="form-control"
                                    placeholder="Subject" required />

                                <label for="subject">Subject</label>
                            </div>

                            <div class="form-floating mb-4">
                                <textarea id="message" name="message" class="form-control"
                                    placeholder="Leave a comment here" required style="height: 160px"></textarea>

                                <label for="message">Discuss</label>
                            </div>

                            <div class="col-lg-5 col-6">
                                <button type="submit" class="form-control">Send</button>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-6 col-12 mt-5 ms-auto">
                        <div class="row">
                            <div class="col-6 border-end contact-info">
                                <h6 class="mb-3">New Business</h6>

                                <a href="mailto:hello@quivato.com" class="custom-link">
                                    hello@quivato.com
                                    <i class="bi-arrow-right ms-2"></i>
                                </a>
                            </div>

                            <div class="col-6 contact-info">
                                <h6 class="mb-3">Main Channel</h6>

                                <a href="mailto:info@quivato.com" class="custom-link">
                                    info@quivato.com
                                    <i class="bi-arrow-right ms-2"></i>
                                </a>
                            </div>

                            <div class="col-6 border-top border-end contact-info">
                                <h6 class="mb-3">Our Office</h6>

                                <p class="text-muted">Sanghai gate, phase 2, New Delhi</p>
                            </div>

                            <div class="col-6 border-top contact-info">
                                <h6 class="mb-3">Our Socials</h6>

                                <ul class="social-icon">
                                    <li><a href="javascript:void(0)" class="social-icon-link bi-messenger"></a></li>

                                    <li><a href="javascript:void(0)" class="social-icon-link bi-youtube"></a></li>

                                    <li><a href="javascript:void(0)" class="social-icon-link bi-instagram"></a></li>

                                    <li><a href="javascript:void(0)" class="social-icon-link bi-whatsapp"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
            loading: true, // Set initial loading state to true
            formData: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            isFormSubmitted: false // Flag to track form submission
        };
    },
    methods: {
        submitForm() {
            this.isFormSubmitted = true;
            this.formData = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
            // Show alert message
            alert('Your message has been sent!');
        }
    },
    mounted() {
        // Simulate asynchronous data loading
        setTimeout(() => {
            this.loading = false; // Hide preloader after data loading is complete ( 2 seconds )
        }, 2000);

        // Initialize AOS.js
        AOS.init();
    
    }
};
</script>

<style lang="scss" scoped>
@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

.bouncing-text {
    animation: bounce 0.8s infinite;
}
</style>
