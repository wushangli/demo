<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!--<TodoHeader :addTodo="addTodo"/>-->
            <!--<TodoHeader @addTodo="addTodo"/>&lt;!&ndash;给TodoHeader绑定addTodo监听&ndash;&gt;-->
            <TodoHeader ref="header"/>
            <TodoList :itemList="itemList" ></TodoList>
            <Todofooter :itemList="itemList" :delItemss="delItemss" :selectAllCheck="selectAllCheck" />
            <todofooter>
                <input type="checkbox" v-model="isShowAll" slot="checkAll"/>
                <span slot="cout">已完成{{comepleteSize}}  / 全部{{itemList.length}}</span>
                <button class="btn btn-danger" @click="delItemss" slot="delete">清除已完成任务</button>
            </todofooter>
        </div>
    </div>
</template>

<script>
    import pubSub from 'pubsub-js'
    import '../../../static/css/index.css'
    import TodoHeader from './components/TodoHeader'
    import TodoList from  './components/TodoList'
    import Todofooter from './components/Todofooter'

    export default {
        name: "App",
        components: {
            Todofooter,
            TodoHeader,
            TodoList,
            pubSub
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
        computed: {
            comepleteSize() {
                return this.itemList.reduce((pretotal,item) => pretotal+(item.comeplete?1:0),0)
            },
            isShowAll: {
                get() {

                    return this.comepleteSize === this.itemList.length && this.itemList.length>0
                },
                set(check) {
                    this.selectAllCheck(check)
                }
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

        },
        mounted() {
            // 给TodoHeader绑定addTodo监听
            this.$refs.header.$on('addTodo',this.addTodo)


            //订阅消息
            pubSub.subscribe('delItem',(msg,index)=>{
                this.delItem(index)
            })
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
