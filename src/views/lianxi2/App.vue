<template>
    <div>
        <header class="site-header jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>请发表对Vue的评论</h1>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <add :additemVal="additemVal"></add>
            <List :itemVal="itemVal" :delItemVal="delItemVal"></List>
        </div>
    </div>

</template>

<script>
    import Add from './components/Add'
    import List from './components/List'
    import '../../../static/css/bootstrap.css'
    export default {
        name: "App",
        components: {List, Add},
        comments: {
            Add,
            List
        },
        data() {
            return {
                itemVal: [
                    {
                        user:"天下",
                        content:"我去"
                    },{
                        user:"天上",
                        content:"我走"
                    },{
                        user:"天殇",
                        content:"我到"
                    },
                ]
            }
        },
        methods: {
            //添加方法
            additemVal(val){
                this.itemVal.unshift(val)

            },
            //删除方法
            delItemVal(index){
                this.itemVal.splice(index,1)
            }

        }
    }

</script>

<style scoped>
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

</style>
