<template>
			<!-- EXTRA PRODUCT TWO START -->
			<div class="block block-zone">
				<div class="container">
					<div class="block-zone__body">
						<div class="block-zone__card category-card category-card--layout--overlay">
							<div class="category-card__body">
								<div class="category-card__overlay-image"><img
										src="https://images.unsplash.com/photo-1672626922964-83f1bc86df22?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										sizes="(max-width: 575px) 530px, 305px" alt=""></div>
								<div class="category-card__overlay-image category-card__overlay-image--blur"><img
										src="https://images.unsplash.com/photo-1672626922964-83f1bc86df22?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										sizes="(max-width: 575px) 530px, 305px" alt=""></div>
								<div class="category-card__content">
									<div class="category-card__info">
										<div class="category-card__name"><a href="#">Wheels &
												Tires</a></div>
										<ul class="category-card__children">
											<li v-for="(extraTwo, index) in extraFeatTwo" :key="index">
												<a href="#">{{ extraTwo.cat_name }}</a>
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
										<h2 class="section-header__title">Extra Featured Products 2</h2>
										<div class="section-header__spring"></div>
										<div class="section-header__arrows">
											<div @click="exTwoPrevSlide"
												class="arrow section-header__arrow section-header__arrow--prev arrow--prev">
												<button class="arrow__button" type="button"><i
														class="fa fa-chevron-left"></i></button>
											</div>
											<div @click="exTwoNextSlide"
												class="arrow section-header__arrow section-header__arrow--next arrow--next">
												<button class="arrow__button" type="button"><i
														class="fa fa-chevron-right"></i></button>
											</div>
										</div>
										<div class="section-header__divider"></div>
									</div>
								</div>
								<div ref="extraProductTwoSlider" class="keen-slider">
									<div v-for="(extraTwo, index) in extraFeatTwo" :key="index"
										class="keen-slider__slide">
										<div @click="handleCardClick(extraTwo.cat_id)" class="cursor-pointer">
											<CardThree class="product-card product-card--layout--grid pb-2"
												style="width:16rem;" :name="extraTwo.cat_name" :id="extraTwo.cat_id"
												:image="extraTwo.cat_image" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- EXTRA PRODUCT TWO START -->
</template>

<script>
import axios from "axios";
import { Url } from "~/config/url";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

export default {
data() {
return {
    extraFeatTwo: [],
    extraProductTwoSlider: null,
};
},

methods: {
async fetchCategory() {
const response = await axios.get(Url.fetchHomeCategory);
this.extraFeatTwo = response.data.extraFeatureTwo;
},

initExtraSlider() {
if (this.extraProductTwoSlider) {
this.extraProductTwoSlider.destroy();
}

this.extraProductTwoSlider = new KeenSlider(this.$refs.extraProductTwoSlider, {
loop: true,
slides: { perView: 1, spacing: 15 },
breakpoints: {
"(min-width: 600px)": { slides: { perView: 2, spacing: 15 } },
"(min-width: 1024px)": { slides: { perView: 3, spacing: 15 } },
"(min-width: 1440px)": { slides: { perView: 4, spacing: 20 } },
},
});
},

exTwoPrevSlide() {
this.extraProductTwoSlider?.prev();
},

exTwoNextSlide() {
this.extraProductTwoSlider?.next();
},

handleCardClick(id) {
this.$router.push(`/product/${id}`);
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
