<template>
	<div class="block block-posts-carousel block-posts-carousel--layout--grid" data-layout="grid">
	  <div class="container">
		<div class="section-header">
		  <div class="section-header__body">
			<h2 class="section-header__title">Latest News</h2>
			<div class="section-header__spring"></div>
			<div class="section-header__arrows">
			  <div @click="exThreePrevSlide" class="arrow section-header__arrow section-header__arrow--prev arrow--prev">
				<button class="arrow__button" type="button">
				  <i class="fa fa-chevron-left"></i>
				</button>
			  </div>
			  <div @click="exThreeNextSlide" class="arrow section-header__arrow section-header__arrow--next arrow--next">
				<button class="arrow__button" type="button">
				  <i class="fa fa-chevron-right"></i>
				</button>
			  </div>
			</div>
			<div class="section-header__divider"></div>
		  </div>
		</div>
  
		<!-- CARD SECTION START -->
		<div class="container my-4">
		  <div class="block-posts-carousel__carousel row">
			<div ref="sliderRef" class="keen-slider">
			  <div
				class="col-lg-3 col-md-4 col-sm-6 mb-4 keen-slider__slide"
				v-for="(card, index) in cards"
				:key="index"
			  >
				<div class="block-posts-carousel__item">
				  <div class="post-card shadow">
					<div class="post-card__image">
					  <a href="/">
						<img :src="card.image" alt="" />
					  </a>
					</div>
					<div class="post-card__content" style="text-align: start">
					  <div class="post-card__category">
						<a href="/">{{ card.title }}</a>
					  </div>
					  <div class="post-card__title">
						<h2><a href="/">{{ card.excerpt }}</a></h2>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import KeenSlider from "keen-slider";
  import "keen-slider/keen-slider.min.css";
  
  export default {
	data() {
	  return {
		slider: null,
		cards: [
		  {
			image: "https://red-parts.html.themeforest.scompiler.ru/themes/red-ltr/images/posts/post-2-730x485.jpg",
			title: "Latest Title",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
			link: "post-full-width.html",
		  },
		  {
			image: "https://red-parts.html.themeforest.scompiler.ru/themes/red-ltr/images/posts/post-3-730x485.jpg",
			title: "Latest Title",
			excerpt: "Donec facilisis neque ut purus fermentum...",
			link: "post-full-width.html",
		  },
		  {
			image: "https://red-parts.html.themeforest.scompiler.ru/themes/red-ltr/images/posts/post-5-730x485.jpg",
			title: "Latest Title",
			excerpt: "Suspendisse tempor orci non sapien ullamcorper...",
			link: "post-full-width.html",
		  },
		  {
			image: "https://red-parts.html.themeforest.scompiler.ru/themes/red-ltr/images/posts/post-1-730x485.jpg",
			title: "Latest Title",
			excerpt: "Vivamus venenatis viverra iaculis non sapie...",
			link: "post-full-width.html",
		  },
		  {
			image: "https://red-parts.html.themeforest.scompiler.ru/themes/red-ltr/images/posts/post-4-730x485.jpg",
			title: "Latest Title",
			excerpt: "Suspendisse tempor orci non sapien ullamcorper...",
			link: "post-full-width.html",
		  },
		  {
			image: "https://red-parts.html.themeforest.scompiler.ru/themes/red-ltr/images/posts/post-6-730x485.jpg",
			title: "Latest Title",
			excerpt: "Vivamus venenatis viverra iaculis viverra iaculis...",
			link: "post-full-width.html",
		  },
		],
	  };
	},
	methods: {
	  exThreeNextSlide() {
		if (this.slider) this.slider.next();
	  },
	  exThreePrevSlide() {
		if (this.slider) this.slider.prev();
	  },
	},
	mounted() {
	  this.slider = new KeenSlider(this.$refs.sliderRef, {
		loop: true,
		slides: {
		  perView: 1,
		  spacing: 15,
		},
		breakpoints: {
		  "(min-width: 600px)": {
			slides: {
			  perView: 2,
			  spacing: 15,
			},
		  },
		  "(min-width: 1024px)": {
			slides: {
			  perView: 3,
			  spacing: 15,
			},
		  },
		  "(min-width: 1440px)": {
			slides: {
			  perView: 4,
			  spacing: 20,
			},
		  },
		},
	  });
	},
	beforeUnmount() {
	  if (this.slider) this.slider.destroy();
	},
  };
  </script>
  
  <style scoped></style>
  