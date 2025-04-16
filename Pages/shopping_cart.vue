<template>
    <div class="site__body py-lg-5">
        <div class="block-header block-header--has-breadcrumb block-header--has-title">
            <div class="container pt-4">
                <div class="block-header__body">
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
                    <h1 class="block-header__title">Shopping Cart</h1>
                </div>
            </div>
        </div>
        <div class="block mt-5">
            <div class="container">
                <div class="cart">
                    <div class="cart__table cart-table">
                        <table class="cart-table__table">
                            <thead class="cart-table__head">
                                <tr class="cart-table__row">
                                    <th class="cart-table__column cart-table__column--image">Image</th>
                                    <th class="cart-table__column cart-table__column--product">Product</th>
                                    <th class="cart-table__column cart-table__column--price">Price</th>
                                    <th class="cart-table__column cart-table__column--quantity">Quantity</th>
                                    <th class="cart-table__column cart-table__column--total">Total</th>
                                </tr>
                            </thead>

                            <tbody class="cart-table__body" >
                                <tr class="cart-table__row"  v-if="CartList != null" >
                                    <td class="cart-table__column cart-table__column--image">
                                        <div class="image image--type--product">
                                            <a href="product-full.html" class="image__body">
                                                <img class="image__tag" :src="CartList.p_image" alt="">
                                            </a>
                                        </div>
                                    </td>
                                    <td class="cart-table__column cart-table__column--product"><a href="#"
                                            class="cart-table__product-name">{{ CartList.p_name }}</a>
                                    </td>
                                    <td class="cart-table__column cart-table__column--price" data-title="Price">
                                        PRODUCT</td>
                                    <!-- <td class="cart-table__column cart-table__column--price" data-title="Price">
                                        {{ product.price.toFixed(2) }}</td> -->
                                    <td class="cart-table__column cart-table__column--quantity" data-title="Quantity">
                                        <div class="cart-table__quantity input-number">
                                            <input type="number" v-model="quantity" min="1" readonly
                                                class="form-control input-number__input">
                                            <div @click="incrementQuantity" class="input-number__add"></div>
                                            <div @click="decrementQuantity" :disabled="quantity <= 1"
                                                class="input-number__sub"></div>
                                        </div>
                                    </td>
                                    <!-- <td class="cart-table__column cart-table__column--total" data-title="Total">
                                        {{ (product.price * product.quantity).toFixed(2) }}</td> -->
                                    <td class="cart-table__column cart-table__column--total" data-title="Total">
                                        DEMO COUNTING</td>
                                    <td class="cart-table__column cart-table__column--remove">
                                        <button  type="button"
                                            class="cart-table__remove btn btn-sm btn-icon btn-muted">
                                            <i class="fa fa-xmark" style="height: 12px; width: 12px;"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="cart__totals">
                        <div class="card">
                            <div class="card-body card-body--padding--2">
                                <h3 class="card-title">Cart Totals</h3>
                                <table class="cart__totals-table">
                                    <thead>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>15,877.00</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>125.00<div><a href="#" style="color: #cb1818;">Calculate shipping</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Tax</th>
                                            <td>10.00</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Total</th>
                                            <td>15,902.00</td>
                                        </tr>
                                    </tfoot>
                                </table><a class="btn btn-primary btn-xl btn-block" href="#"
                                    style="background-color: #E52727; border-color: #E52727;">Get Inquiry</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-space block-space--layout--before-footer"></div>
    </div>
</template>
<script>
import axios from 'axios';
import { Url } from '~/config/url';
export default {
    data() {
        return {quantity: 1,CartList:[],}
    },
    methods: {

        async doCartList() {
            const token = localStorage.getItem("authToken");
            const response = await axios.get(Url.fetchCartList, {
                headers: {
                    "Authorization": "Bearer " + token
                },
            });
            console.log(48, response.data.data.product_details);
            this.CartList = response.data.data.product_details;
        },

        incrementQuantity() {
            this.quantity++;
        },
        decrementQuantity() {
            if (this.quantity > 1) this.quantity--;
        },

    },
    mounted() {
        this.doCartList();
    }
}
</script>

<style scoped>
.cart-table__remove i {
    cursor: pointer;
    color: #999;
}

.cart-table__remove i:hover {
    color: #dc3545;
    /* Bootstrap danger color */
}
</style>


<!-- <template>
    <div class="site__body py-lg-5">
        <div class="block-header block-header--has-breadcrumb block-header--has-title ">
            <div class="container">
                <div class="block-header__body ">
                    <nav class="" style="background-color: transparent;" aria-label="breadcrumb ">
                        <ol class="breadcrumb__list">
                            <li class="breadcrumb__spaceship-safe-area" role="presentation"></li>
                            <li class="breadcrumb__product breadcrumb__product--parent breadcrumb__product--first"><a
                                    href="/" class="breadcrumb__product-link">Home</a></li>
                            <li class="breadcrumb__product breadcrumb__product--current breadcrumb__product--last"
                                aria-current="page"><span class="breadcrumb__product-link">Current Page</span></li>
                        </ol>
                    </nav>
                    <h1 class="block-header__title">Shopping Cart</h1>
                </div>
            </div>
        </div>
        <div class="block mt-5">
            <div class="container">
                <div class="cart">
                    <div class="cart__table cart-table">
                        <table class="cart-table__table">
                            <thead class="cart-table__head">
                                <tr class="cart-table__row">
                                    <th class="cart-table__column cart-table__column--image">Image</th>
                                    <th class="cart-table__column cart-table__column--product">Product</th>
                                    <th class="cart-table__column cart-table__column--price">Price</th>
                                    <th class="cart-table__column cart-table__column--quantity">Quantity</th>
                                    <th class="cart-table__column cart-table__column--total">Total</th>
                                </tr>
                            </thead>
                            <tbody class="cart-table__body">
                                <tr class="cart-table__row" v-if="product != null">
                                    <td class="cart-table__column cart-table__column--image">
                                        <div class="image image--type--product">
                                            <a href="product-full.html" class="image__body">
                                                <img class="image__tag" :src="product.p_image" alt="">
                                            </a>
                                        </div>
                                    </td>
                                    <td class="cart-table__column cart-table__column--product">
                                        <a href="#" class="cart-table__product-name">{{ product.p_name }}</a>
                                    </td>

                                    <td class="cart-table__column cart-table__column--quantity" data-title="Quantity">
                                        <div class="cart-table__quantity input-number">
                                            <input type="number" v-model="quantity" min="1" readonly
                                                class="form-control input-number__input">
                                            <div @click="incrementQuantity" class="input-number__add"></div>
                                            <div @click="decrementQuantity" :disabled="quantity <= 1"
                                                class="input-number__sub"></div>
                                        </div>
                                    </td>
                                    <td class="cart-table__column cart-table__column--total" data-title="Total">
                                        {{ quantity }}</td>
                                    <td class="cart-table__column cart-table__column--remove">
                                        <button @click="removeItem(index)" type="button"
                                            class="cart-table__remove btn btn-sm btn-icon btn-muted">
                                            <i class="fa fa-xmark" style="height: 12px; width: 12px;"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="cart__totals">
                        <div class="card">
                            <div class="card-body card-body--padding--2">
                                <h3 class="card-title">Cart Totals</h3>
                                <table class="cart__totals-table">
                                    <thead>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>15,877.00</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>125.00
                                                <div><a href="#" style="color: #cb1818;">Calculate shipping</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Tax</th>
                                            <td>10.00</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Total</th>
                                            <td>15,902.00</td>
                                        </tr>
                                    </tfoot>
                                </table><a class="btn btn-primary btn-xl btn-block" href="#"
                                    style="background-color: #E52727; border-color: #E52727;">Get Inquiry</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-space block-space--layout--before-footer"></div>
    </div>
</template>

<script>
import axios from 'axios';
import { Url } from '~/config/url';
export default {
    data() {
        return {
            quantity: 1,
            product: null,

        }
    },
    methods: {
        async fetchCartList() {
            const token = localStorage.getItem("authToken");

            const response = await axios.get(Url.fetchCartList, {
                headers: {
                    "Authorization": "Bearer " + token
                },
            });
            console.log(48, response.data.data.product_details);
            this.product = response.data.data.product_details;
        },

        removeItem(index) {
            this.cartItems.splice(index, 1);
        },


        incrementQuantity() {
            this.quantity++;
        },
        decrementQuantity() {
            if (this.quantity > 1) this.quantity--;
        },

    },
    mounted() {
        this.fetchCartList();
    }
}
</script>

<style scoped>
.cart-table__remove i {
    cursor: pointer;
    color: #999;
}

.cart-table__remove i:hover {
    color: #dc3545;
    /* Bootstrap danger color */
}
</style> -->