<template>
    <div>
        <img class="imging" src="@/assets/logo.png"/>
        <hello-vue></hello-vue>
    </div>

</template>

<script>
    import HelloVue from '@/components/HelloVue.vue'
    export default {
        name: "Hello",
        components: {HelloVue},
        comments: {
            HelloVue
        }
    }
</script>

<style scoped>
    .imging{
        text-align: center;
        border-top: 1px solid #42b983;
    }
</style>
