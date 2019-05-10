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
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }


</style>
