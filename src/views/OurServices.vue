<template>

    <!-- This code is for the pre-loader, the code is in components/PagePreloader.vue -->
    <PagePreloader :isLoading="loading" />

    <main>

        <!-- Navigation bar, the code is in components/NavBar.vue -->
        <NavBar />


        <!-- OUR SERVICES -->
        <div class="container" style="margin-top:7%; margin-bottom:4%">
            <h2 class="text-center mb-5">Our Services</h2>
            <!-- Service 1: Custom Website Design -->
            <div class="row mb-5">
                <div class="col-lg-6 d-flex align-items-center">
                    <div>
                        <h2>Custom Website Design</h2>
                        <p class="lead">Our custom website design service is tailored to meet the unique needs of your
                            business. We create visually stunning and user-friendly websites that reflect your brand
                            identity and captivate your audience.</p>
                        <p>Key features:</p>
                        <ul>
                            <li>Unique and innovative designs</li>
                            <li>Responsive and mobile-friendly layouts</li>
                            <li>Intuitive navigation and user experience</li>
                            <li>Seamless integration of brand elements</li>
                        </ul>
                        <router-link to="/contact" class="btn btn-primary animated-button zoom">Get
                            Started</router-link>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <img src="/images/slideshow/webd.jpeg" alt="Custom Website Design" class="img-fluid w-100">
                </div>
            </div>



            <!-- Service 2: Mobile App Development -->
            <div class="row mb-5">
                <div class="col-lg-6 order-lg-2 d-flex align-items-center">
                    <div>
                        <h2>Mobile App Development</h2>
                        <p class="lead">Our mobile app development service brings your ideas to life with intuitive and
                            feature-rich applications. We create scalable and secure mobile solutions that enhance user
                            engagement and drive business growth.</p>
                        <p>Key offerings:</p>
                        <ul>
                            <li>iOS and Android app development</li>
                            <li>Native and hybrid app solutions</li>
                            <li>User-centric design and interface</li>
                            <li>Integration with backend systems</li>
                        </ul>
                        <router-link to="/contact" class="btn btn-primary animated-button zoom">Request
                            Quote</router-link>
                    </div>
                </div>
                <div class="col-lg-6 order-lg-1 d-flex align-items-center">
                    <img src="/images/slideshow/mobileapp.jpeg" alt="Mobile App Development" class="img-fluid w-100">
                </div>
            </div>


            <!-- Service 3: Ecommerce Solutions -->
            <div class="row mb-5">
                <div class="col-lg-6 d-flex align-items-center">
                    <div>
                        <h2>Ecommerce Solutions</h2>
                        <p class="lead">Our ecommerce solutions empower businesses to succeed in the digital
                            marketplace. We
                            create robust and scalable online stores that drive sales, enhance customer experience, and
                            maximize profitability.</p>
                        <p>Key features:</p>
                        <ul>
                            <li>Customized ecommerce platforms</li>
                            <li>Secure payment gateways</li>
                            <li>Product management and inventory control</li>
                            <li>Integration with third-party services</li>
                        </ul>
                        <router-link to="/contact" class="btn btn-primary animated-button zoom">Learn More</router-link>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <img src="/images/slideshow/ecommerce.jpeg" alt="Ecommerce Solutions" class="img-fluid w-100">
                </div>
            </div>


            <!-- Service 4: Digital Marketing Strategy -->
            <div class="row mb-5">
                <div class="col-lg-6 order-lg-2 d-flex align-items-center">
                    <div>
                        <h2>Digital Marketing Strategy</h2>
                        <p class="lead">Our digital marketing strategy service helps businesses grow their online
                            presence
                            and reach their target audience effectively. We create comprehensive strategies that drive
                            traffic, leads, and conversions across various digital channels.</p>
                        <p>Key components:</p>
                        <ul>
                            <li>Search engine optimization (SEO)</li>
                            <li>Social media management</li>
                            <li>Email marketing campaigns</li>
                            <li>PPC advertising</li>
                        </ul>
                        <router-link to="/contact" class="btn btn-primary animated-button zoom">Get
                            Started</router-link>
                    </div>
                </div>
                <div class="col-lg-6 order-lg-1">
                    <img src="/images/slideshow/marketing.jpeg" alt="Digital Marketing Strategy"
                        class="img-fluid w-100">
                </div>
            </div>


            <!-- Service 5: UI/UX Design Optimization -->
            <div class="row">
                <div class="col-lg-6">
                    <h2>UI/UX Design Optimization</h2>
                    <p class="lead">Our UI/UX design optimization service focuses on enhancing user experience and
                        engagement across digital platforms. We analyze user behavior, conduct usability testing, and
                        implement design improvements to optimize conversion rates and satisfaction.</p>
                    <p>Our approach includes:</p>
                    <ul>
                        <li>Wireframing and prototyping</li>
                        <li>User research and testing</li>
                        <li>UI/UX design audits</li>
                        <li>Continuous optimization and iteration</li>
                    </ul>
                    <router-link to="/contact" class="btn btn-primary animated-button zoom">Learn More</router-link>
                </div>
                <div class="col-lg-6">
                    <img src="/images/slideshow/UiUx3.jpeg" alt="UI/UX Design Optimization" class="img-fluid w-100">
                </div>
            </div>

        </div>

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
    }
};
</script>

<style lang="scss" scoped>
@keyframes zoomInOut {
    0% {
        transform: scale(1);
        background-color: #007bff;
        border: none;
    }

    50% {
        transform: scale(1.1);
        background-color: #e43703ee;
        border: none;
    }

    100% {
        transform: scale(1);
        background-color: #28a745;
        border: none;
    }
}

.animated-button {
    animation: zoomInOut 1s infinite;
    transition: background-color 0.5s ease;
}

.animated-button:hover {
    animation: none;
    /* Disable zoom in and out animation on hover */
    transform: scale(1.1);
    /* Scale the button on hover */
    background-color: #ffc107;
    /* Change color on hover */
}
</style>
