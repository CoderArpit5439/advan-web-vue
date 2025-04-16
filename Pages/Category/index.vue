<template>
    <div class="site__body py-5">
        <div class="block-header block-header--has-breadcrumb block-header--has-title">
            <div class="container">
                <div class="block-header__body">
                    <!-- Breadcrumb -->
                    <nav class="" style="background-color: transparent;" aria-label="breadcrumb">
                        <ol class="breadcrumb__list">
                            <li class="breadcrumb__spaceship-safe-area" role="presentation"></li>
                            <li class="breadcrumb__item breadcrumb__item--parent breadcrumb__item--first">
                                <a href="/" class="breadcrumb__item-link">Home</a>
                            </li>
                            <li class="breadcrumb__item breadcrumb__item--current breadcrumb__item--last"
                                aria-current="page">
                                <span class="breadcrumb__item-link">Current Page</span>
                            </li>
                            <li class="breadcrumb__title-safe-area" role="presentation"></li>
                        </ol>
                    </nav>
                    <h1 class="block-header__title">All Categories</h1>

                    <!-- Categories -->
                    <div class="block block-brands">
                        <div class="container lpx-0 px-4">
                            <nav class="" style="background-color: transparent;" aria-label="breadcrumb">
                                <ol class="breadcrumb__list">
                                    <li class="breadcrumb__spaceship-safe-area" role="presentation"></li>
                                    <li v-for="(category, index) in categories" :key="category.cat_id"
                                        class="breadcrumb__item breadcrumb__item--current breadcrumb__item--last p-1">
                                        <a @click="getCategorySingleList(category.cat_id)"
                                            class="breadcrumb__item-link">
                                            {{ category.cat_name }}
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Products -->
        <!-- <div class="block block-split">
            <div class="container mt-5">
                <div class="row">
                    <div v-if="categoryList && categoryList.length" v-for="(product, index) in categoryList"
                        :key="product.p_id" class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <Card :id="product.p_id" :image="product.p_media" :name="product.p_name" />
                    </div>
                    <div v-else class="col-12">
                        <p>No products available for this category.</p>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="block-space block-space--layout--divider-nl"></div>

        <!--  PRODUCT CARD LISTING SECTION START -->
        <div class="block block-products-carousel" data-layout="grid-5">
            <div class="container">
                <div class="section-header">
                    <div class="section-header__body">
                        <h2 class="section-header__title">Product List</h2>
                        <div class="section-header__spring"></div>

                        <div class="section-header__divider"></div>
                    </div>
                </div>
                <div class="container mt-5">
                    <div class="row">
                        <div v-if="categoryList && categoryList.length" v-for="(product, index) in categoryList"
                            :key="product.p_id" >
                            <Card class="product-card product-card--layout--grid pb-2 " style="width:16rem;"
                                :id="product.p_id" :image="product.p_media" :name="product.p_name" />
                        </div>
                        <div v-else class="col-12">
                            <p>No products available for this category.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  PRODUCT CARD LISTING SECTION END -->



    </div>
</template>

<script>
import axios from 'axios';
import { Url } from '~/config/url'; // Update the correct path for `Url`

export default {
    data() {
        return {
            categories: [], // To store the categories fetched from API
            categoryList: null, // To store the product list for a selected category
        };
    },
    methods: {
        // Fetch category list from API
        async fetchCategory() {
            try {
                const response = await axios.get(Url.fetchCategoryList);
                this.categories = response.data.data;
                console.log('Categories fetched:', this.categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },

        // Fetch products for a specific category
        async getCategorySingleList(id) {
            try {
                const response = await axios.get(`${Url.fetchSingleCategory}?id=${id}`);
                this.categoryList = response.data.productArr;
                console.log('Category products fetched:', this.categoryList);
            } catch (error) {
                console.error('Error fetching category products:', error);
            }
        },
    },
    mounted() {
        this.fetchCategory();
    },
};
</script>
