<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!--<TodoHeader :addTodo="addTodo"/>-->
            <TodoHeader @addTodo="addTodo"/><!--给TodoHeader绑定addTodo监听-->
            <TodoList :itemList="itemList" :delItem="delItem"></TodoList>
            <Todofooter :itemList="itemList" :delItemss="delItemss" :selectAllCheck="selectAllCheck" />
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
                // itemList: [
                    // {title: "与天博弈", comeplete: false},
                    // {title: "胜天半子", comeplete: true},
                    // {title: "博弈", comeplete: false},
                // ]
                itemList: JSON.parse(window.localStorage.getItem("item_key") || '[]')
            }
        },
        methods: {
            //添加方法
            addTodo(todo){
                this.itemList.unshift(todo)
            },
            //删除方法
            delItem(index){
                this.itemList.splice(index,1);
            },
            //全选/全部选
            selectAllCheck(check){
                this.itemList.forEach(item => item.comeplete = check)
            },
            //删除comeplete为true的
            delItemss(){
                this.itemList = this.itemList.filter(item => !item.comeplete)
            }
        },
        watch: { //监视
            itemList: {

                deep: true,//深度监视
                    handler: function (val) {
                    window.localStorage.setItem('item_key', JSON.stringify(val))
                }
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
