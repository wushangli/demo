<template>
    <div>
        <p>标题</p>
        <input type="text" v-model="title"/>
        <p>内容</p>
        <input type="text" v-model="test"/>
        <div class="btn" @click="add()">添加</div>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: "Add",
        store,
        data() {
            return{
                title: '',
                test: ''
            }
        },
        methods: {
            add(){
                if(this.title !== "" && this.test !== ""){

                    store.commit('addItem',{
                        title: this.title,
                        test: this.test
                    })
                }
                this.title = "";
                this.test = "";
                this.$router.push('./home/list')
            }
        }
    }
</script>

<style scoped>

</style>
