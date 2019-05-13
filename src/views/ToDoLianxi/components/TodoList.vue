<template>
    <ul class="todo-main">

        <TodoItem  v-for="(content,index) in itemList"
            :key="index"
            :content="content"
            :index="index"
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
            }
        }
    }
</script>

<style scoped>


</style>
