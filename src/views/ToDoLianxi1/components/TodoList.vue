<template>
    <ul class="todo-main">

        <TodoItem  v-for="(content,index) in itemList"
            :key="index"
            :content="content"
            :index="index"
            :delItem="delItem"
        ></TodoItem>
    </ul>
</template>

<script>
    import TodoItem from './TodoItem'
    export default {
        name: "TodoList",
        components: {TodoItem},
        comments:{
            TodoItem
        },
        props: {
            itemList: {
                type: Array
            },
            delItem: Function
        }
    }
</script>

<style scoped>


</style>
