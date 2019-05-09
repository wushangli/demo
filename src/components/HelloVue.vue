<template>
    <div>
        <p class="mmsg">{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "HelloVue",
        data() {
            return {
                msg: 'Hello Vue!!!'
            }
        }
    }
</script>

<style scoped>
    .mmsg{
        font-size: 50px;
        color: yellow;
    }
</style>
