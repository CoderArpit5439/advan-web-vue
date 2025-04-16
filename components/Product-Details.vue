<template>
    <div class="block-split__item block-split__item-content col-auto">
        <div class="product product--layout--full">
            <div class="product__body">
                <div class="product__card product__card--one"></div>
                <div class="product__card product__card--two"></div>
                <!-- IMAGE SECTION START -->
                <!-- <div class="product-gallery product-gallery--layout--product-full product__gallery"
                    data-layout="product-full">
                    <div class="product-gallery__featured">
                        <button type="button" class="product-gallery__zoom">
                            <i class="fa-solid fa-magnifying-glass-plus" style="font-size: 32px;"></i>
                        </button>
                        <div class="owl-carousel">
                            <a class="image image--type--product" href="" target="_blank" data-width="700"
                                data-height="700">
                                <div class="image__body"><img class="image__tag" :src="activeImage.small"
                                        :alt="activeImage.alt"></div>
                            </a>
                        </div>
                    </div>
                    <div class="row" style="display: flex; justify-content: space-between; align-items: center; ">
                        <i @click="prev" :disabled="isFirstPage" class="fa fa-chevron-left"
                            style="color: red; background-color: red; padding: 6px; font-size: 20px; color: white; border-radius: 4px;"></i>

                        <div v-for="(image, index) in visibleImages" :key="index" class="col-2">
                            <img width="55" height="60" :src="image.small" :alt="image.alt" class=""
                                :class="{ 'active-thumbnail': activeIndex === index + startIndex }"
                                @click="changeImage(index + startIndex)" />
                        </div>

                        <i @click="next" :disabled="isLastPage" class="fa fa-chevron-right"
                            style="color: red; background-color: red; padding: 6px; font-size: 20px; color: white; border-radius: 4px;"></i>
                    </div>
                </div> -->

                <div class="product-gallery product-gallery--layout--product-full product__gallery"
                    data-layout="product-full">
                    <div class="product-gallery__featured"><button type="button" class="product-gallery__zoom">
                            <svg width="24" height="24">
                                <path
                                    d="M15,18c-2,0-3.8-0.6-5.2-1.7c-1,1.3-2.1,2.8-3.5,4.6c-2.2,2.8-3.4,1.9-3.4,1.9s-0.6-0.3-1.1-0.7 c-0.4-0.4-0.7-1-0.7-1s-0.9-1.2,1.9-3.3c1.8-1.4,3.3-2.5,4.6-3.5C6.6,12.8,6,11,6,9c0-5,4-9,9-9s9,4,9,9S20,18,15,18z M15,2 c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S18.9,2,15,2z M16,13h-2v-3h-3V8h3V5h2v3h3v2h-3V13z" />
                            </svg>
                        </button>
                        <div class="owl-carousel">
                            <a class="image image--type--product"
                                href="https://images.unsplash.com/photo-1723511577246-03455db5636b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4OXx8fGVufDB8fHx8fA%3D%3D"
                                target="_blank" data-width="700" data-height="700">
                                <div class="image__body">
                                    <img class="image__tag" :src="activeImage.small" :alt="activeImage.alt">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="product-gallery__thumbnails">
                        <div class="row" style="display: flex; justify-content: space-between; align-items: center; ">
                            <button @click="prev" :disabled="isFirstPage" class="fa fa-chevron-left"
                                style="color: red; background-color: red; padding: 4px; font-size: 20px; color: white; border-radius: 4px;"></button>

                            <div v-for="(image, index) in visibleImages" :key="index" class="col-2">
                                <img width="55" height="60" :src="image.small" :alt="image.alt" class=""
                                    :class="{ 'active-thumbnail': activeIndex === index + startIndex }"
                                    @click="changeImage(index + startIndex)" />
                            </div>

                            <button @click="next" :disabled="isLastPage" class="fa fa-chevron-right"
                                style="color: red; background-color: red; padding: 4px; font-size: 20px; color: white; border-radius: 4px;"></button>
                        </div>
                    </div>
                </div>
                <!-- IMAGE SECTION END -->
                <div class="product__header">
                    <h1 class="product__title">{{ name }}</h1>
                    <div class="product__subtitle">
                        <div
                            class="status-badge status-badge--style--success product__fit status-badge--has-icon status-badge--has-text">
                            <div class="status-badge__body">
                                <div class="status-badge__icon">
                                    <svg width="13" height="13">
                                        <path d="M12,4.4L5.5,11L1,6.5l1.4-1.4l3.1,3.1L10.6,3L12,4.4z" />
                                    </svg>
                                </div>
                                <div class="status-badge__text">Part Fit for 2011 Ford Focus S</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product__main">
                    <div class="product__excerpt">{{ discription }}
                    </div>
                    <div class="product__features">
                        <div class="product__features-title">Key Features:</div>
                        <ul>
                            <li>Brand: <span>{{ brand }}</span></li>
                            <li>Material: <span>{{ material }}</span></li>
                            <li>product dimensions: <span>{{ weight }}</span></li>
                            <li>Finish Type: <span>{{ finishType }}</span></li>
                            <li>Color: <span>{{ color }}</span></li>
                        </ul>
                    </div>
                </div>
                <div class="product__info">
                    <div class="product__info-card">
                        <div class="product__info-body">
                            <div class="product__prices-stock">
                                <div
                                    class="status-badge status-badge--style--success product__stock status-badge--has-text">
                                    <div class="status-badge__body">
                                        <div class="status-badge__text">In Stock</div>
                                        <div class="status-badge__tooltip" tabindex="0" data-toggle="tooltip"
                                            title="In&#x20;Stock"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="product__meta">
                                <table>
                                    <tr>
                                        <th style="font-size: 16px;">Brand </th>
                                        <td style="font-size: 16px;">{{ brand }}</td>
                                    </tr>
                                    <tr>
                                        <th style="font-size: 16px;">Material</th>
                                        <td style="font-size: 16px;"><a href="#">{{ material }}</a></td>
                                    </tr>
                                    <tr>
                                        <th style="font-size: 16px;">Product Dimensions</th>
                                        <td style="font-size: 16px;">{{ dimension }}</td>
                                    </tr>
                                    <tr>
                                        <th style="font-size: 16px;">Style</th>
                                        <td style="font-size: 16px;">GWS 600</td>
                                    </tr>
                                    <tr>
                                        <th style="font-size: 16px;">Power Source </th>
                                        <td style="font-size: 16px;">Carded Electric</td>
                                    </tr>
                                    <tr>
                                        <th style="font-size: 16px;">Color</th>
                                        <td style="font-size: 16px;">{{ color }}</td>
                                    </tr>
                                    <tr>
                                        <th style="font-size: 16px;">Item Width</th>
                                        <td style="font-size: 16px;">{{ weight }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="product__actions">
                            <div class="product__actions-item product__actions-item--quantity">
                                <div class="input-number">
                                    <input type="number" v-model="quantity" min="1" readonly
                                        class="input-number__input form-control form-control-lg">
                                    <div @click="incrementQuantity" class="input-number__add"></div>
                                    <div @click="decrementQuantity" :disabled="quantity <= 1" class="input-number__sub">
                                    </div>
                                </div>
                            </div>
                            <div class="product__actions-item product__actions-item--addtocart">
                                <a href="#" @click.prevent="getAddToCart" class="btn btn-primary btn-lg btn-block">Add
                                    to cart</a>


                            </div>
                            <div class="product__actions-divider"></div>
                            <button class="product__actions-item product__actions-item--wishlist" type="button"><i
                                    class="fa fa-heart mr-2"></i><span>Add to wishlist</span></button>
                        </div>
                    </div>

                    <div class="product__shop-features shop-features">
                        <ul class="shop-features__list">
                            <li class="shop-features__item" v-for="cont in conts">
                                <div class="shop-features__item-icon"><img width="75" :src="cont.image" alt=""></div>
                                <div class="shop-features__info">
                                    <div class="shop-features__item-title " style="font-size: 16px;">{{ cont.name }}
                                    </div>
                                    <div class="shop-features__item-subtitle">{{ cont.subName }}</div>
                                </div>
                            </li>
                            <li class="shop-features__divider" role="presentation"></li>
                        </ul>
                    </div>
                </div>

                <div class="product__tabs product-tabs product-tabs--layout--full">
                    <ul class="nav nav-tabs product-tabs__list" role="tablist">
                        <li class="product-tabs__item "
                            :class="{ 'product-tabs__item--active': activeTab === 'tabs-1' }"><a
                                @click.prevent="setActiveTab('tabs-1')" href="#tabs-1" role="tab">Description</a>
                        </li>
                    </ul>
                    <!-- Tabs Content -->
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane p-3" :class="{ active: activeTab === 'tabs-1' }" id="tabs-1"
                            role="tabpanel">
                            <p>{{ discription }}</p>
                        </div>
                        <div class="tab-pane p-3" :class="{ active: activeTab === 'tabs-2' }" id="tabs-2"
                            role="tabpanel">
                            <p>Second Panel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-space block-space--layout--divider-nl"></div>

    </div>
</template>
<script>
import axios from 'axios';
import { Url } from '~/config/url';
export default {
    data() {
        return {
            quantity: 1,
            conts: [
                { image: "https://png.pngtree.com/png-clipart/20230120/ourmid/pngtree-free-delivery-truck-icon-png-image_6565580.png", name: "Free Shipping", subName: "For orders from $50" },
                { image: "https://static.vecteezy.com/system/resources/previews/016/314/360/non_2x/transparent-24-hour-service-free-png.png", name: "Support 24/7", subName: "Call us anytime" },
                { image: "https://png.pngtree.com/png-vector/20221009/ourmid/pngtree-original-guaranteed-stamp-and-badget-design-red-grunge-png-image_6293839.png", name: "100% Safety", subName: "Only secure payments" },
                { image: "https://png.pngtree.com/png-vector/20240417/ourmid/pngtree-fire-icon-vector-design-png-image_12288010.png", name: "Hot Offers", subName: "Discounts up to 90%" },

            ],

            breakpoints: {
                375: { itemsToShow: 1, snapAlign: "center" },
                // 700px and up
                700: { itemsToShow: 2, snapAlign: "center" },
                // 1024 and up
                1024: { itemsToShow: 1, snapAlign: "start" },
            },
            activeIndex: 0, // First image is active by default
            startIndex: 0,   // Index to keep track of the current visible set of images
            images: [
                {
                    small: "https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-steel-cabinet-furniture-wooden-with-separate-storage-drawers-on-a-white-png-image_11593718.png",
                    alt: "Product Image 1",
                },
                {
                    small: "https://png.pngtree.com/png-vector/20231006/ourmid/pngtree-versatile-steel-cabinet-ideal-for-factories-schools-gyms-png-image_10079349.png",
                    alt: "Product Image 2",
                },
                {
                    small: "https://www.furnituremanila.com.ph/wp-content/uploads/2023/09/bf02-filing-cabinet-3.png",
                    alt: "Product Image 3",
                },
                {
                    small: "https://m.media-amazon.com/images/I/61j5e65xNEL._AC_UF1000,1000_QL80_.jpg",
                    alt: "Product Image 4",
                },
                {
                    small: "https://f31.sg/wp-content/uploads/2018/06/products-lm13.jpg",
                    alt: "Product Image 5",
                },
                {
                    small: "https://i.ebayimg.com/images/g/P4wAAOSw91pcr1nF/s-l1200.jpg",
                    alt: "Product Image 6",
                },
            ],
            activeTab: 'description' // Default active tab
        };
    },
    props: {
        id: {
            default: "",
        },
        name: {
            default: "",
        },
        image: {
            default: "",
        },
        discription: {
            default: "",
        },
        brand: {
            default: "",
        },
        material: {
            default: "",
        },
        moc: {
            default: "",
        },
        dimension: {
            default: "",
        },
        name: {
            default: "",
        },
        discription: {
            default: "",
        },
        color: {
            default: "",
        },
        weight: {
            default: "",
        },
        manufacturer: {
            default: "",
        },
        country: {
            default: "",
        },
        drawingNo: {
            default: "",
        },
        Status: {
            default: "",
        },
        finishType: {
            default: "",
        }

    },
    methods: {

        incrementQuantity() {
            this.quantity++;
        },
        decrementQuantity() {
            if (this.quantity > 1) this.quantity--;
        },

        async getAddToCart() {
            const token = localStorage.getItem("authToken");
            var id = this.$route.params.id;
            try {
                const response = await axios.get(`${Url.fetchCustomerAddToCart}?proId=${id}`, {
                    headers: {
                        "Authorization": "Bearer " + token
                    },
                });
                console.log("Add to Cart Response:", response.data);
                this.$router.push("/shopping_cart");

            } catch (error) {
                console.error("Error adding to cart:", error.response?.data || error.message);
            }
        },



        // async getAddToCart() {
        //     // const token = localStorage.getItem("authToken");
        //     // const id = this.$route.params.id;

        //     const token = localStorage.getItem("authToken");
        //     var id = this.$route.params.id;

        //     try {
        //         const response = await axios.get(`${Url.fetchCustomerAddToCart}?proId=${id}`,{ quantity: this.quantity, }, {
        //             headers: {
        //                 "Authorization": "Bearer " + token
        //             },
        //         });
        //         console.log("Add to Cart Response:", response.data);
        //         // this.$router.push("/shopping_cart");
        //     } catch (error) {
        //         // console.error("Error adding to cart:", error.response?.data || error.message);
        //     }
        // },




        changeImage(index) {
            // Update the active image when a thumbnail is clicked
            this.activeIndex = index;
        },
        next() {
            // Go to the next set of images
            if (!this.isLastPage) {
                this.startIndex += 1;
                if (this.startIndex + 3 > this.images.length) {
                    this.startIndex = this.images.length - 3; // Adjust to last set
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
            this.$refs.related.prev();
        },
        nextSlide() {
            this.$refs.related.next();
        },
        // RELATED PROUDCT NEXT AND PREVIEW SLIDE BUTTON END 

    },

    computed: {
        activeImage() {
            // Returns the currently active image based on activeIndex
            return this.images[this.activeIndex];
        },
        visibleImages() {
            // Returns the currently visible set of images based on startIndex
            return this.images.slice(this.startIndex, this.startIndex + 3);
        },
        isFirstPage() {
            return this.startIndex === 0;
        },
        isLastPage() {
            return this.startIndex + 3 >= this.images.length;
        },
    },
    mounted() {
    }
};
</script>

<style scoped>
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