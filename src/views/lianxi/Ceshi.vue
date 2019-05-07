<template>
    <div>
        <button @click="destroy()">生命周期</button>
        <P v-show="isShow"> 生命周期</P>
    </div>
</template>

<script>
    export default {
        name: "Ceshi",
        data() {
            return{
                isShow: true
            }
        },

        // 1.初始化阶段
        beforeCreate(){
            console.log("beforeCreate()")
        },
        created(){
            console.log("created()")
        },
        beforeMount() {
            console.log("beforeMount()")
        },
        mounted() {//初始化显示之后立即调用（1次）
            console.log("mounted()")

            this.intervalId = setInterval(() => {
                console.log("-------")
                this.isShow = !this.isShow
            },1000)
        },
        //2.更新阶段
        beforeUpdate(){
            console.log("beforeUpdate()")
        },
        updated(){
            console.log("updated()")
        },
        //3.死亡阶段
        beforeDestroy() {//死亡之前调用(1次)
            console.log("beforeDestroy")

            clearInterval(this.intervalId)
        },
        destroyed(){
            console.log("destroyed")
        },

    methods: {
        destroy(){
                this.$destroy()
            }

        }
    }
</script>

<style scoped>

</style>
