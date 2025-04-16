<template>
    <div class="site__body py-lg-2" style="background-color: #FAFAFA;">
        <div class="block-header block-header--has-breadcrumb mt-lg-3 mb-lg-0 mb-4 mt-4">
            <div class="container">
                <div class="block-header__body">
                    <nav class="" style="background-color: transparent;" aria-label="breadcrumb">
                        <ol class="breadcrumb__list">
                            <li class="breadcrumb__spaceship-safe-area" role="presentation"></li>
                            <li class="breadcrumb__item breadcrumb__item--parent breadcrumb__item--first"><a href="/"
                                    class="breadcrumb__item-link">Home</a></li>
                            <li class="breadcrumb__item breadcrumb__item--current breadcrumb__item--last"
                                aria-current="page"><span class="breadcrumb__item-link">Current Page</span></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <div class="block-split mt-4">
            <div class="container">
                <div class="block-split__row row no-gutters">               
                    <ProductDetails v-if="product != null" :id="product.p_id" :image="product.p_media"
                        :name="product.p_name" :discription="product.p_description" :brand="product.p_brand"
                        :material="product.p_material" :moc="product.p_moc" :dimension="product.p_dimension"
                        :color="product.p_color" :weight="product.p_weight" :manufacturer="product.p_manufacturer"
                        :country="product.p_country" :drawingNo="product.p_drawing_no"
                        :finishType="product.p_finish_type" :Status="product.p_status" />
                    <!-- <ProductDetails /> -->
                </div>
            </div>
        </div>
    </div>

    <!-- Realted Products Products start -->
    <div class="block-space block-space--layout--before-footer"></div>

    <div class="block block-products-carousel" data-layout="grid-5">
        <div class="container">
            <div class="section-header">
                <div class="section-header__body">
                    <h2 class="section-header__title">Related Products</h2>
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
                <!-- <Slide v-for="(product, index) in productList" :key="(product, index)"> -->
                <div v-for="(featured, index) in featureds" :key="(featured, index)" class="keen-slider__slide">
                    <!-- JSON.parse(response.data.productArray[0].p_media) -->
                    <div @click="handleCardClick(featured.p_id)">
                        <Card class="product-card product-card--layout--grid pb-2" style="width:16rem;"
                            :id="featured.p_id" :name="featured.p_name" :image="featured.p_image" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" tabindex="-1" role="dialog" :class="{ show: showModal }"
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
                    <a href="/login" type="button" class="btn btn-danger">Login</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Realted Products Products end -->
</template>

<script>
import axios from "axios";
import { Url } from "~/config/url";
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
export default {
    data() {
        return {
            showModal: false,
            featureds: [],
            featuredSlider: null,

            product: null,
            activeIndex: 0, // First image is active by default
            startIndex: 0,   // Index to keep track of the current visible set of images
            images: [
                {
                    small: "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-orange-modern-chair-isolated-png-image_10008187.png",
                    alt: "Product Image 1",
                },
                {
                    small: "https://anandplastics.com/wp-content/uploads/2024/09/3-1.png",
                    alt: "Product Image 2",
                },
                {
                    small: "https://png.pngtree.com/png-vector/20240616/ourmid/pngtree-a-mid-century-modern-orange-egg-chair-png-image_12774691.png",
                    alt: "Product Image 3",
                },
                {
                    small: "https://static.vecteezy.com/system/resources/previews/042/235/326/non_2x/ai-generated-a-mid-century-modern-orange-egg-chair-free-png.png",
                    alt: "Product Image 4",
                },
                {
                    small: "https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-modern-chair-isolated-png-image_11519786.png",
                    alt: "Product Image 5",
                },
                {
                    small: "https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-modern-chair-isolated-png-image_11519787.png",
                    alt: "Product Image 6",
                },
            ],
            activeTab: 'description', // Default active tab

            relatedBrealPoints: {
                375: { itemsToShow: 1, snapAlign: "center" },
                // 700px and up
                700: { itemsToShow: 2, snapAlign: "center" },
                // 1024 and up
                1024: { itemsToShow: 5, snapAlign: "start" },
            },
        };
    },
    methods: {

        async getDetails() {
            var id = this.$route.params.id;
            const response = await axios.get(`${Url.fetchSingleProductDetails}?id=${id}`);
            console.log('Product full Details', response.data);
            this.product = response.data.data;
            // console.log("single-product", response);
            // this.product = response.data.product;
        },

        async fetchCategory() {
            const response = await axios.get(Url.fetchHomeCategory);
            this.featureds = response.data.productArray;
            console.log('Related Product', response.data.productArray);
            this.$nextTick(() => {
              this.initKeenSliders();
            });

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

        changeImage(index) {
            // Update the active image when a thumbnail is clicked
            this.activeIndex = index;
        },
        next() {
            // Go to the next set of images
            if (!this.isLastPage) {
                this.startIndex += 1;
                if (this.startIndex + 4 > this.images.length) {
                    this.startIndex = this.images.length - 4; // Adjust to last set
                }
            }
        },
        prev() {
            // Go to the previous set of images
            if (!this.isFirstPage) {
                this.startIndex -= 1;
                if (this.startIndex < 0) {
                    this.startIndex = 0; // Adjust to first set
                }
            }
        },

        setActiveTab(tabName) {
            this.activeTab = tabName;
        },

        // RELATED PROUDCT NEXT AND PREVIEW SLIDE BUTTON START 
        prevSlide() {
        if (this.featuredSlider) this.featuredSlider.prev();
      },
      nextSlide() {
        if (this.featuredSlider) this.featuredSlider.next();
      },
        // RELATED PROUDCT NEXT AND PREVIEW SLIDE BUTTON END 

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
        }

    },

    computed: {
        activeImage() {
            // Returns the currently active image based on activeIndex
            return this.images[this.activeIndex];
        },
        visibleImages() {
            // Returns the currently visible set of images based on startIndex
            return this.images.slice(this.startIndex, this.startIndex + 4);
        },
        isFirstPage() {
            return this.startIndex === 0;
        },
        isLastPage() {
            return this.startIndex + 4 >= this.images.length;
        },
    },
    mounted() {
        this.getDetails();
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

  
/* Main image styling */
.main-image img {
    max-height: 400px;
    object-fit: contain;
    width: 100%;
}

/* Thumbnail image styling */
.img-thumbnail {
    transition: border 0.3s ease-in-out;
}

/* Highlight the active thumbnail */
.active-thumbnail {
    border: 2px solid #007bff;
}

/* Button styling */
.btn {
    margin: 0 10px;
}

.product-tabs__item--active a {
    font-weight: 700;
    /* Example for active tab styling */
}
</style>