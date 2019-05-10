<template>
    <li>
        <label>
        <input type="checkbox" v-model="content.comeplete" />
        <span>{{content.title}}</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
    </li>

</template>
<script>
    export default {
        name: "TodoItem",
        props:{
            content: Object,
            index: Number
        },

        mounted() {
            console.log(this.content)
        }
    }

</script>


<style scoped>

</style>
