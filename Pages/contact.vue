<template>
    <div class="site__body">
        <div class="container-fluid full-background"></div>
        <div class="block-header block-header--has-breadcrumb block-header--has-title">
            <div class="container">
                <div class="block-header__body">
                    <h1 class="block-header__title">Contact Us</h1>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="container container--max--lg">

                <div class="card" style="padding: 0px 24px;">
                    <!-- Alert Messages -->
                    <div class="card-body card-body--padding--2">
                        <div class="row">
                            <div class="col-12 col-lg-6 pb-4 pb-lg-0">
                                <div class="mr-1">
                                    <h4 class="contact-us__header card-title my-3" style="font-size: 28px;">Our Address
                                    </h4>
                                    <div class="contact-us__address my-4">
                                        <p style="font-size: 18px;">
                                            N.H. 47 Choudhary Market Tejaji Nagar Khandwa Road Indore (M.P)<br />
                                            Email: info@example.com<br />
                                            Phone Number: +91 94253 11328
                                        </p>
                                        <p style="font-size: 18px;">
                                            <strong>Opening Hours</strong><br />
                                            Monday to Friday: 8am-8pm<br />
                                            Saturday: 8am-6pm<br />
                                            Sunday: 10am-4pm
                                        </p>
                                        <p style="font-size: 18px;">
                                            <strong>Comment</strong><br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit
                                            mi, non tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="ml-1">
                                    <h4 class="contact-us__header card-title my-3" style="font-size: 28px;">Leave us a
                                        Message</h4>
                                    <form @submit.prevent="doInquiry">
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="form-name" style="font-size: 18px;">Your Name</label>
                                                <input type="text" id="form-name" v-model="userName"
                                                    class="form-control"
                                                    style="background-color: #EBEBEB; font-size: 18px;"
                                                    placeholder="Your Name" required />
                                            </div>

                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="email" style="font-size: 18px;">Your Email</label>
                                                <input type="email" id="email" v-model="email" class="form-control"
                                                    style="background-color: #EBEBEB; font-size: 18px;"
                                                    placeholder="Your Email" required />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="form-phone" style="font-size: 18px;">Your Phone
                                                    Number</label>
                                                <input type="tel" id="form-phone" v-model="mobileNumber" maxlength="10"
                                                    class="form-control"
                                                    style="background-color: #EBEBEB; font-size: 18px;"
                                                    placeholder="Phone Number" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="form-message" style="font-size: 18px;">Message</label>
                                            <textarea id="form-message" v-model="message" rows="4" class="form-control"
                                                style="background-color: #EBEBEB; font-size: 18px;" required></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-primary mt-3 px-3"
                                            style="font-weight: 600; font-size: 18px; background-color: #E52727; border-color: #E52727;">
                                            Send Message
                                        </button>
                                    </form>
                                    <transition name="slide-fade">
                                        <div v-if="error.has || success.has" class="px-4 py-2 z-50">
                                            <div :class="{
                                                'alert alert-danger': error.has,
                                                'alert alert-success': success.has,
                                            }"
                                                class="max-w-screen-md mx-auto shadow-lg rounded-lg py-3 px-6 d-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-center">
                                                    <i :class="{
                                                        'fa fa-times-circle text-black': error.has,
                                                        'fa fa-check-circle text-black': success.has,
                                                    }" aria-hidden="true"></i>
                                                    <span class="ml-3 text-black">
                                                        {{ error.has ? error.message : success.message }}
                                                    </span>
                                                </div>
                                                <button @click="closeAlert" class="text-danger btn-close">
                                                    <i class="fa fa-times" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-space block-space--layout--before-footer"></div>
    </div>
</template>

<script>
import axios from 'axios';
import { Url } from '~/config/url';

export default {
    data() {
        return {
            userName: "",
            mobileNumber: "",
            // email: "",
            message: "",
            success: {
                has: false,
                message: "",
            },
            error: {
                has: false,
                message: "",
            }
        };
    },
    methods: {
        async doInquiry() {
            if (this.userName && this.mobileNumber && this.message) {
                const token = localStorage.getItem("authToken");
                const formData = new FormData();
                formData.append("inq_name", this.userName);
                formData.append("inq_contact", this.mobileNumber);
                // formData.append("inq_email", this.email);
                formData.append("inq_message", this.message);
                try {
                    const response = await axios.post(Url.fetchInquiryData, formData, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    if (response.status === 200 && response.data.status) {
                        this.success.has = true;
                        this.success.message = "Message sent successfully!";
                        this.resetForm();
                    } else {
                        this.error.has = true;
                        this.error.message = response.data.message || "Submission failed.";
                    }
                } catch (error) {
                    this.error.has = true;
                    this.error.message = "An error occurred. Please try again.";
                }
                setTimeout(() => {
                    this.clearAlerts();
                }, 3000); // Clear alerts after 3 seconds
            }
        },
        resetForm() {
            this.userName = "";
            this.mobileNumber = "";
            this.message = "";
            // this.email = "";
        },
        clearAlerts() {
            this.success.has = false;
            this.error.has = false;
        },
    }
};
</script>

<style>
.full-background {
    background-image: url('/images/contact-image.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    position: relative;
}

.container {
    max-width: 1000px;
}

.card {
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 16px;
}

.card-title {
    font-weight: 500;
    font-size: 28px;
}

.alert-danger {
    background-color: rgb(255, 56, 56);
}

.alert-success {
    background-color: rgb(23, 124, 23);
}

.form-check-input {
    width: 16px;
    height: 16px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>


<style>
.full-background {
    background-image: url('/images/contact-image.jpeg');
    /* Replace with your image URL */
    background-size: cover;
    /* Ensure the image covers the entire container */
    background-position: center;
    /* Center the image */
    background-repeat: no-repeat;
    /* Prevent the background from repeating */
    height: 100vh;
    /* Full viewport height */
    width: 100vw;
    /* Full viewport width */
    position: relative;
    /* Maintain positioning */
}

.site__body {
    background-color: #f8f9fa;
    /* Light background color */
}

.card {
    border-radius: 0.5rem;
    /* Rounded corners for the card */
}

.card-title {
    font-weight: bold;
    /* Bold title */
}

.contact-us__header {
    margin-bottom: 1rem;
    /* Margin below the header */
}

.btn-danger {
    background-color: #E52727;
    /* Red button */
    border: none;
    /* Remove border */
}

.btn-danger:hover {
    background-color: #333333;
    /* Darker red on hover */
}

.block-map {
    margin-bottom: 2rem;
    /* Spacing below the map */
}

.block-header__title {
    font-size: 2rem;
    /* Title size */
    font-weight: bold;
    /* Bold title */
}













@media (-webkit-max-device-pixel-ratio: 1),
(max-resolution: 1dppx) {
    .footer-contacts__title {
        font-weight: 400;
    }
}

.footer-contacts__text {
    line-height: 22px;
    list-style: none;
    margin: 0;
    font-size: 15px;
}

.footer-contacts__text a {
    color: inherit;
}

.footer-contacts__contacts {
    font-size: 14px;
    line-height: 20px;
    list-style: none;
    padding: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.footer-contacts__contacts a {
    color: inherit;
}

.footer-contacts__contacts dt {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 2px;
}

.footer-contacts__contacts dd {
    color: #fff;
    margin: 0;
    font-weight: 500;
}

@media (-webkit-max-device-pixel-ratio: 1),
(max-resolution: 1dppx) {
    .footer-contacts__contacts dd {
        font-weight: 400;
    }
}

.footer-contacts__icon {
    display: inline-block;
    text-align: center;
    width: 22px;
    margin-right: 2px;
}

@media (min-width: 1400px) {
    .footer-contacts {
        padding-right: 36px;
    }
}

@media (min-width: 1200px) {
    .footer-contacts__contacts {
        margin: 24px -15px 0;
    }

    .footer-contacts__contacts dl {
        width: calc(100% / 2 - 30px - 1px);
        margin: 0 15px;
    }

    .footer-contacts__contacts dl:nth-child(n + 3) {
        margin-top: 18px;
    }
}

@media (max-width: 1199.98px) {
    .footer-contacts__contacts {
        margin: -6px;
    }

    .footer-contacts__contacts dl {
        width: calc(100% / 4 - 12px);
        margin: 6px;
    }

    .footer-contacts {
        text-align: center;
        margin-bottom: 42px;
    }

    .footer-contacts__title {
        font-size: 24px;
        margin-bottom: 12px;
    }

    .footer-contacts__contacts {
        padding-top: 28px;
    }

    .footer-contacts__contacts dl {
        background: hsla(0, 0%, 100%, 0.05);
        padding: 16px 12px;
        border-radius: 3px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: center;
        justify-content: center;
    }
}

@media (max-width: 991.98px) {
    .footer-contacts__contacts {
        margin: -6px;
    }

    .footer-contacts__contacts dl {
        width: calc(100% / 2 - 12px);
        margin: 6px;
        padding: 20px 16px;
    }
}

@media (max-width: 767.98px) {
    .footer-contacts__contacts dl {
        padding: 16px;
    }
}

@media (max-width: 479px) {
    .footer-contacts__contacts {
        margin: -4px;
    }

    .footer-contacts__contacts dl {
        width: calc(100% / 1 - 8px);
        margin: 4px;
    }
}

.contacts__map {
    position: relative;
    height: 400px;
}

.contacts__map iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

@media (max-width: 991.98px) {
    .contacts__map {
        height: 380px;
    }
}

@media (max-width: 767.98px) {
    .contacts__map {
        height: 360px;
    }
}
</style>
