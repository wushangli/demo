<template>
    <div>
        <ul>
            <li v-for="(item,index) in showlists"
                :key="index">
                {{item.title}}---{{item.test}}
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: "List",
        store,
        data() {
            return {
                showlistss: []
            }
        },
        computed: {
            showlists(){
                return store.state.lists
            }
        }
    }
</script>

<style scoped>

</style>
