<template>
    <div>
        <div class="flex h-screen">
            <DashboardDashSideBar />
            <div class="flex-1 flex flex-col">
                <DashboardDashHeader />
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashSideBar",
    layout: "default",
}
</script>
