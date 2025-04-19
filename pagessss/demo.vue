<template>
  <div class="block block-products-carousel" data-layout="grid-5">
    <div class="container">
      <div class="section-header">
        <div class="section-header__body">
          <h2 class="section-header__title">Related Products</h2>
          <div class="section-header__spring"></div>
          <div class="section-header__arrows">
            <div @click="prevSlide" class="arrow section-header__arrow section-header__arrow--prev arrow--prev">
              <button class="arrow__button" type="button"><i class="fa fa-chevron-left"></i></button>
            </div>
            <div @click="nextSlide" class="arrow section-header__arrow section-header__arrow--next arrow--next">
              <button class="arrow__button" type="button"><i class="fa fa-chevron-right"></i></button>
            </div>
          </div>
          <div class="section-header__divider"></div>
        </div>
      </div>

      <!-- Keen Slider -->
      <div class="keen-slider" ref="slider">
        <div class="keen-slider__slide" v-for="(featured, index) in featureds" :key="index">
          <div @click="handleCardClick(featured.p_id)">
            <Card
              class="product-card product-card--layout--grid pb-2"
              style="width:16rem;"
              :id="featured.p_id"
              :name="featured.p_name"
              :image="featured.p_image"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      :class="{ show: showModal }"
      :style="showModal ? 'display: block; background-color: rgba(0,0,0,0.5)' : 'display: none'">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="closeModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Do you want to see more products? If yes, please go to the login page to view the details.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
            <a href="/login" class="btn btn-danger">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { Url } from "~/config/url";

export default {
  name: "RelatedProducts",
  components: {
    Card,
  },
  data() {
    return {
      showModal: false,
      featureds: [],
      slider: null,
    };
  },
  mounted() {
    this.fetchCategory();
    this.$nextTick(() => {
      this.initSlider();
    });
  },
  methods: {
    async fetchCategory() {
      try {
        const response = await axios.get(Url.fetchHomeCategory);
        this.featureds = response.data.productArray;
        console.log("Related Product", response.data.productArray);
      } catch (error) {
        console.error("Error fetching category", error);
      }
    },
    initSlider() {
      if (this.slider) this.slider.destroy();

      this.slider = new KeenSlider(this.$refs.slider, {
        loop: true,
        slides: { perView: 5, spacing: 15 },
        breakpoints: {
          "(max-width: 1024px)": { slides: { perView: 3, spacing: 10 } },
          "(max-width: 768px)": { slides: { perView: 2, spacing: 10 } },
          "(max-width: 480px)": { slides: { perView: 1, spacing: 5 } },
        },
      });
    },
    prevSlide() {
      if (this.slider) this.slider.prev();
    },
    nextSlide() {
      if (this.slider) this.slider.next();
    },
    handleCardClick(id) {
      const token = localStorage.getItem("authToken");
      if (token) {
        this.$router.push(`/product/${id}`);
      } else {
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
/* Optional: modal styling if not using Bootstrap */
.modal.show {
  display: block;
}
.modal .close {
  font-size: 1.5rem;
  border: none;
  background: transparent;
}
</style>
