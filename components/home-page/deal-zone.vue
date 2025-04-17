<template>
			<div class="block block-sale">
				<div class="block-sale__content">
					<div class="block-sale__header">
						<div class="block-sale__title">Attention! Deal Zone</div>
						<div class="block-sale__subtitle">Hurry up! Discounts up to 70%</div>
						<div class="block-sale__controls">
							<div @click="dZPrevSlide"
								class="arrow block-sale__arrow block-sale__arrow--prev arrow--prev">
								<button class="arrow__button" type="button">
									<i class="fa fa-chevron-left"></i>
								</button>
							</div>
							<div class="block-sale__link"><a href="#">View All Available Offers</a></div>
							<div @click="dZNextSlide"
								class="arrow block-sale__arrow block-sale__arrow--next arrow--next">
								<button class="arrow__button" type="button">
									<i class="fa fa-chevron-right"></i>
								</button>
							</div>
							<div class="decor block-sale__header-decor decor--type--center">
								<div class="decor__body">
									<div class="decor__start"></div>
									<div class="decor__end"></div>
									<div class="decor__center"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="block-sale__body">
						<div class="decor block-sale__body-decor decor--type--bottom">
							<div class="decor__body">
								<div class="decor__start"></div>
								<div class="decor__end"></div>
								<div class="decor__center"></div>
							</div>
						</div>
						<div class="block-sale__image"
							style="background-image: url('https://images.unsplash.com/photo-1642010654727-56755234ae72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
						</div>

						<div class="container">
							<div class="block-sale__carousel">
								<div ref="dealZoneSlider" class="keen-slider">
									<div v-for="(deal, index) in dealZone" :key="index"
										class="keen-slider__slide">
										<div @click="handleCardClick(deal.p_id)" class="cursor-pointer">
											<Card class="product-card product-card--layout--grid pb-2"
												style="width:16rem;" :name="deal.p_name" :id="deal.p_id"
												:image="deal.p_image" />
										</div>
									</div>
								</div>
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
  import KeenSlider from "keen-slider";
  import "keen-slider/keen-slider.min.css";
  import { nextTick } from 'vue';
  
  export default {
    data() {
      return {
        showModal: false,

        dealZone: [],
        dealZoneSlider: null,
      };
    },
    methods: {
      async fetchCategory() {
        try {
          const response = await axios.get(Url.fetchHomeCategory);
          this.dealZone = response.data.dealZone;
  
          // Wait until DOM renders dealZone before initializing slider
          await nextTick();
          this.initKeenSliders();
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      initKeenSliders() {
        if (this.$refs.dealZoneSlider) {
          this.dealZoneSlider = new KeenSlider(this.$refs.dealZoneSlider, {
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
      dZPrevSlide() {
        this.dealZoneSlider?.prev();
      },
      dZNextSlide() {
        this.dealZoneSlider?.next();
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
    },
    mounted() {
      this.fetchCategory();
    }
  }
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
  