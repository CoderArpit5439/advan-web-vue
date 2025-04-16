<template>
    <div class="product-card product-card--layout--grid pb-2" style="width:18rem; box-shadow: 0 2px 8px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);" >
        <div class="product-card__image">
            <div class="product-card__image">
                <div class="image image--type--product">
                    <!-- <a :href="`/product/${id}/`" class="image__body">
                        <img class="image__tag" :src="image" alt="">
                    </a> -->
                    <div class="image__body">
                        <img class="image__tag" :src="image" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="product-card__info">
            <div class="product-card__meta"><span class="product-card__meta-title">SKU:</span> 573-23743-C</div>
            <div class="product-card__name">
                <div>
                    <!-- <a :href="`/product/${id}/`">{{ name }}</a> -->
                    <div>{{ name }}</div>
                </div>
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
        id: { default: "" },
        image: { default: "" },
        name: { default: "" },
        rDescription: { default: "" },
    }
}
</script>