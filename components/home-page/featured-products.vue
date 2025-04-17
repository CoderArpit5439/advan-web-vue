<template>
    <div class="block block-products-carousel" data-layout="grid-5">
      <div class="container">
        <div class="section-header">
          <div class="section-header__body">
            <h2 class="section-header__title">Featured Products</h2>
            <div class="section-header__spring"></div>
            <div class="section-header__arrows">
              <div @click="prevSlide"
                class="arrow section-header__arrow section-header__arrow--prev arrow--prev">
                <button class="arrow__button" type="button"><i class="fa fa-chevron-left"></i></button>
              </div>
              <div @click="nextSlide"
                class="arrow section-header__arrow section-header__arrow--next arrow--next">
                <button class="arrow__button" type="button"><i class="fa fa-chevron-right"></i></button>
              </div>
            </div>
            <div class="section-header__divider"></div>
          </div>
        </div>
  
        <div ref="featuredSlider" class="keen-slider">
          <div v-for="(featured, index) in featureds" :key="index" class="keen-slider__slide">
            <div @click="handleCardClick(featured.p_id)">
              <Card class="product-card product-card--layout--grid pb-2" style="width: 16rem"
                :id="featured.p_id" :name="featured.p_name" :image="featured.p_image" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block-space block-space--layout--divider-nl"></div>
			<!-- (MODAL) IF THERE IS NO LOGIN AND NO TOKEN THIS MODAL WILL OPEN START-->
			<div class="modal fade" tabindex="-1" role="dialog" :class="{ show: showModal }"
				:style="showModal ? 'display: block; background-color: rgba(0,0,0,0.5)' : 'display: none'">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-body">
							Do you want to see more products? If yes, please go to the login page to view the details.
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
							<a href="/login" type="button" class="btn btn-danger">Login</a>
						</div>
					</div>
				</div>
			</div>
			<!-- (MODAL) IF THERE IS NO LOGIN AND NO TOKEN THIS MODAL WILL OPEN END-->
  </template>
  
  <script>
  import axios from 'axios';
  import { Url } from '~/config/url';
  import KeenSlider from 'keen-slider';
  import 'keen-slider/keen-slider.min.css';
  
  export default {
    data() {
      return {
        showModal: false,

        featureds: [],
        featuredSlider: null,
      };
    },
    methods: {
      async fetchCategory() {
        try {
          const response = await axios.get(Url.fetchHomeCategory);
          if (response.data.productArray) {
            this.featureds = response.data.productArray;
  
            this.$nextTick(() => {
              this.initKeenSliders();
            });
          }
        } catch (error) {
          console.error("Failed to fetch category", error);
        }
      },
  
      initKeenSliders() {
        if (this.$refs.featuredSlider) {
          this.featuredSlider = new KeenSlider(this.$refs.featuredSlider, {
            loop: true,
            slides: { perView: 1, spacing: 15 },
            breakpoints: {
              "(min-width: 600px)": { slides: { perView: 2, spacing: 15 } },
              "(min-width: 1024px)": { slides: { perView: 3, spacing: 15 } },
              "(min-width: 1440px)": { slides: { perView: 5, spacing: 20 } },
            },
          });
        }
      },
      handleCardClick(id) {
			const token = localStorage.getItem('authToken');
			if (token) {
				// Redirect to the product detail page if token exists
				window.location.href = `/product/${id}/`;
			} else {
				// Show modal if token does not exist
				this.showModal = true;
			}
		},
		closeModal() {
			this.showModal = false;
		},
  
      prevSlide() {
        if (this.featuredSlider) this.featuredSlider.prev();
      },
      nextSlide() {
        if (this.featuredSlider) this.featuredSlider.next();
      },
  
      // handleCardClick(id) {
      //   this.$router.push(`/product/${id}`);
      // }
    },
    mounted() {
      this.fetchCategory();
    }
  };
  </script>
  
  <style scoped>
  .keen-slider {
    display: flex;
    overflow: hidden;
  }
  
  .keen-slider__slide {
    min-width: 16rem;
    margin-right: 1rem;
  }
  </style>
  