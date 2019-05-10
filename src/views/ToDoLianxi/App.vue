<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <TodoHeader :addTodo="addTodo"/>
            <TodoList :itemList="itemList"></TodoList>
            <Todofooter/>
        </div>
    </div>
</template>

<script>
    import '../../../static/css/index.css'
    import TodoHeader from './components/TodoHeader'
    import TodoList from  './components/TodoList'
    import Todofooter from './components/Todofooter'
    export default {
        name: "App",
        components: {
            Todofooter,
            TodoHeader,
            TodoList
        },
        data() {
            return {
                itemList: [
                    {title: "与天博弈", comeplete: false},
                    {title: "胜天半子", comeplete: true},
                    {title: "博弈", comeplete: false},

                ]
            }
        },
        methods: {
            addTodo(todo){
                this.itemList.unshift(todo)
            }
        }

    }
</script>

<style scoped>
    /*app*/
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
