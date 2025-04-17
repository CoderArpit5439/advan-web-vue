<template>
   						<!-- EXTRA PRODUCT THREE START -->
			<div class="block block-zone">
				<div class="container">
					<div class="block-zone__body">
						<div class="block-zone__card category-card category-card--layout--overlay">
							<div class="category-card__body">
								<div class="category-card__overlay-image"><img
										src="https://images.unsplash.com/photo-1654633147734-19458b964f6d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										sizes="(max-width: 575px) 530px, 305px" alt=""></div>
								<div class="category-card__overlay-image category-card__overlay-image--blur"><img
										src="https://images.unsplash.com/photo-1654633147734-19458b964f6d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										sizes="(max-width: 575px) 530px, 305px" alt=""></div>
								<div class="category-card__content">
									<div class="category-card__info">
										<div class="category-card__name"><a href="#">Wheels &
												Tires</a></div>
										<ul class="category-card__children">
											<li v-for="(extraThree, index) in extraFeatThree"
												:key="(extraThree, index)">
												<a href="#">{{ extraThree.cat_name }}</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="block-zone__widget">
							<div class="container">
								<div class="section-header">
									<div class="section-header__body">
										<h2 class="section-header__title">Extra Featured Products 3</h2>
										<div class="section-header__spring"></div>
										<div class="section-header__arrows">
											<div @click="exThreePrevSlide"
												class="arrow section-header__arrow section-header__arrow--prev arrow--prev">
												<button class="arrow__button" type="button"><i
														class="fa fa-chevron-left"></i></button>
											</div>
											<div @click="exThreeNextSlide"
												class="arrow section-header__arrow section-header__arrow--next arrow--next">
												<button class="arrow__button" type="button"><i
														class="fa fa-chevron-right"></i></button>
											</div>
										</div>
										<div class="section-header__divider"></div>
									</div>
								</div>
								<div ref="extraProductThreeSlider" class="keen-slider">
									<div v-for="(extraThree, index) in extraFeatThree" :key="(extraThree, index)"
										class="keen-slider__slide">
										<div @click="handleCardClick(extraThree.cat_id)" class="cursor-pointer">
											<CardThree class="product-card product-card--layout--grid pb-2"
												style="width:16rem;" :name="extraThree.cat_name" :id="extraThree.cat_id"
												:image="extraThree.cat_image" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- EXTRA PRODUCT THREE START -->
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
import axios from "axios";
import { Url } from "~/config/url";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

export default {
data() {
return {
	showModal: false,
    extraFeatThree: [],
    extraProductThreeSlider: null,
};
},

methods: {
async fetchCategory() {
const response = await axios.get(Url.fetchHomeCategory);
this.extraFeatThree = response.data.extraFeatureThree;
},

initExtraSlider() {
if (this.extraProductThreeSlider) {
this.extraProductThreeSlider.destroy();
}

this.extraProductThreeSlider = new KeenSlider(this.$refs.extraProductThreeSlider, {
loop: true,
slides: { perView: 1, spacing: 15 },
breakpoints: {
"(min-width: 600px)": { slides: { perView: 2, spacing: 15 } },
"(min-width: 1024px)": { slides: { perView: 3, spacing: 15 } },
"(min-width: 1440px)": { slides: { perView: 4, spacing: 20 } },
},
});
},

exThreePrevSlide() {
this.extraProductThreeSlider?.prev();
},

exThreeNextSlide() {
this.extraProductThreeSlider?.next();
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

async mounted() {
await this.fetchCategory();
this.initExtraSlider();

},


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
