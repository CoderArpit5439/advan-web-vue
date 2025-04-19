<template>
    <div class="site__body my-5">
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
                    <h1 class="block-header__title">Wishlist</h1>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="container container--max--xl">
                <div class="wishlist">
                    <table class="wishlist__table">
                        <thead class="wishlist__head">
                            <tr class="wishlist__row wishlist__row--head">
                                <th class="wishlist__column wishlist__column--head wishlist__column--image">Image</th>
                                <th class="wishlist__column wishlist__column--head wishlist__column--product">Product
                                </th>
                                <th class="wishlist__column wishlist__column--head wishlist__column--stock">Stock status
                                </th>
                                <!-- <th class="wishlist__column wishlist__column--head wishlist__column--price">Price</th> -->
                                <th class="wishlist__column wishlist__column--head wishlist__column--button"></th>
                                <th class="wishlist__column wishlist__column--head wishlist__column--remove"></th>
                            </tr>
                        </thead>
                        <tbody class="wishlist__body">
                            <tr class="wishlist__row wishlist__row--body">
                                <td class="wishlist__column wishlist__column--body wishlist__column--image">
                                    <div class="image image--type--product"><a href="#" class="image__body"><img
                                                class="image__tag"
                                                src="https://m.media-amazon.com/images/I/41lgbKWcxPL._AC_UF350,350_QL50_.jpg"
                                                alt=""></a></div>
                                </td>
                                <td class="wishlist__column wishlist__column--body wishlist__column--product">
                                    <div class="wishlist__product-name" style="font-size: 18px; font-weight: 500;"><a
                                            href="#">Acrylic Polycarbonate</a></div>
                                    <div class="wishlist__product-rating">
                                        <div class="wishlist__product-rating-stars">
                                            <div class="rating">
                                                <div class="rating__body">
                                                    <div class="rating__star rating__star--active"></div>
                                                    <div class="rating__star rating__star--active"></div>
                                                    <div class="rating__star rating__star--active"></div>
                                                    <div class="rating__star rating__star--active"></div>
                                                    <div class="rating__star"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wishlist__product-rating-title"
                                            style="font-size: 14px; font-weight: 500;">3 reviews</div>
                                    </div>
                                </td>
                                <td class="wishlist__column wishlist__column--body wishlist__column--stock">
                                    <div class="status-badge status-badge--style--success status-badge--has-text">
                                        <div class="status-badge__body" style="padding: 4px 8px;">
                                            <div class="status-badge__text" style="font-size: 16px;">In Stock</div>
                                        </div>
                                    </div>
                                </td>
                                <!-- <td class="wishlist__column wishlist__column--body wishlist__column--price">$19.00
                                </td> -->
                                <td class="wishlist__column wishlist__column--body wishlist__column--button"><button
                                        type="button" class="btn btn-sm btn-primary">Add to cart</button></td>
                                <td class="wishlist__column wishlist__column--body wishlist__column--remove"><button
                                        type="button" class="wishlist__remove btn btn-sm btn-muted btn-icon">
                                        <i class="fa fa-xmark"></i>
                                    </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="block-space block-space--layout--before-footer"></div>
    </div><!-- site__body / end -->
</template>