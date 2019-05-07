<template>
    <div>
        <button @click="chang()">toggle</button><br>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
        <button @click="chang1()">toggle1</button><br>
        <transition name="move">
            <p v-if="show1">hello</p>
        </transition><button @click="chang2()">toggle2</button><br>
        <transition name="bounce">
            <p v-if="show2" style="display: inline-block">hello</p>
        </transition>

    </div>

</template>

<script>
    export default {
        name: "Animation",
        data() {
            return{
                show: true,
                show1: true,
                show2: true
            }
        },
        methods: {
            chang(){
                this.show = !this.show

            },
            chang1(){
                this.show1 =!this.show1
            },
            chang2(){
                this.show2 =!this.show2
            }
        }
    }
</script>

<style scoped>
    /*显示/隐藏的过滤效果*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    /*显示/隐藏时样式*/
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .move-enter-active {
        transition: opacity 3s;
    }
    .move-leave-active{
        transition: opacity 1s;
    }
    .move-enter, .move-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
