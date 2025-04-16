<template>
    <div class="product-card product-card--layout--grid pb-2 " style="box-shadow: 0 2px 8px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);" >
        <div class="product-card__image">
            <div class="product-card__image">
                <div class="image image--type--product">
                    <!-- <a :href="`/product/${id}/`" class="image__body">
                        <img class="image__tag" :src="image" alt="Hello">
                    </a> -->
                    <div class="image__body">
                        <img class="image__tag" :src="image" alt="Hello">
                    </div>
                </div>
            </div>
        </div>
        <div class="product-card__info">
            <div class="product-card__meta"><span class="product-card__meta-title">SKU:</span> 573-23743-C</div>
            <div class="product-card__name">
                <!-- <div><a :href="`/product/${id}/`">{{ name }}</a></div> -->
                <div>{{ name }}</div>
            </div>
        </div>
        <div class="product-card__footer" style="display: flex; justify-content: center">
            <button class="product-card__addtocart-icon" type="button" aria-label="Add to cart">
                <i class="fa-solid fa-cart-shopping" style="width: 20px; height: 20px;"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        id: { default: '' },
        image: { default: '' },
        name: { default: "" },
        rDescription: { default: "" },
    }
}
</script>

<!-- ON CLICK OPEN MODEL LOGIN MESSAGE MODEL START -->
<!-- <template>
    <div class="block-categories__item category-card category-card--layout--classic" @click="showModal = true">
        <div class="category-card__body">
            <div class="category-card__content row">
                <div class="category-card__image image image--type--category">
                    <a href="#" class="image__body">
                        <img class="image__tag" style="position: absolute;"
                            src="https://red-parts.html.themeforest.scompiler.ru/themes/red-ltr/images/categories/category-5-160x160.jpg"
                            alt="">
                    </a>
                </div>
                <div class="category-card__info">
                    <div class="category-card__name"><a href="#">Headlights</a></div>
                    <ul class="category-card__children">
                        <li v-for="(item, index) in paddedList" :key="index">
                            <a href="#" class="text-truncate" v-if="item" :href="item.link">{{ item.name }}</a>
                            <span v-else>&nbsp;</span>
                        </li>
                    </ul>
                    <div class="category-card__actions"><span class="category-card__link" @click="showModal = true">Shop
                            All</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    Modal
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
                    Do you want to see more products? If yes then go to the login page and login and see the details.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">
                        Close
                    </button>
                    <a href="/login" type="button" class="btn btn-danger">Login</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,

            // List of category links
            categories: [
                { name: "Headlights", link: "#" },
                { name: "Tail Lights", link: "#" },
                { name: "Fog Lights", link: "#" },
                { name: "Turn Signals", link: "#" },
                { name: "Switches & Relays", link: "#" }
            ]
        };
    },
    methods: {
        closeModal() {
            this.showModal = false;
        },
    },
    computed: {
        // Create a computed property to ensure there are at least 6 items
        paddedList() {
            const minItems = 0;
            const padded = [...this.categories]; // Clone the list
            while (padded.length < minItems) {
                padded.push(null); // Add empty items to pad the list
            }
            return padded;
        }
    }
};
</script> -->
<!-- ON CLICK OPEN MODEL LOGIN MESSAGE MODEL START -->
