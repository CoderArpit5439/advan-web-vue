<template>
        <!-- Skeleton Loading Card -->
        <div class="card skeleton-card">
            <div class="card-img skeleton"></div>
            <div class="card-body">
                <h2 class="card-title skeleton"></h2>
                <h2 class="card-title skeleton"></h2>

                <!-- <p class="card-intro skeleton"></p> -->
            </div>
        </div>
</template>

<script>
export default {
    name: "CardComponent",
};
</script>

<style scoped>
/* General Styles */
.skeleton {
    background-color: #e2e5e7;
    background-image: linear-gradient(90deg,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0));
    background-size: 40px 100%;
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: shine 1s ease infinite;
}

@keyframes shine {
    to {
        background-position: right -40px top 0;
    }
}

.card {
    flex-basis: 300px;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 100%;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
    margin: 1rem;
}

.card-img {
    position: relative;
    padding-bottom: 94.25%;
    /* 16:9 aspect ratio */
}

.card-img img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-body {
    padding: 1.5rem;
}


.card-intro {
    margin-top: 0.75rem;
    line-height: 1.5;
}

.skeleton-card .card-img,
.skeleton-card .card-title,
.skeleton-card .card-intro {
    border-radius: 4px;
    min-height: 28px;
}

.skeleton-card .card-intro {
    min-height: 72px;
}
</style>