<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none' v-show="this.itemVal.length==0" >暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <item v-for="(items,index) in itemVal"
                  :key="index"
                  :items="items"
                  :delItemVal="delItemVal"
                  :index="index"
                    ></item>
        </ul>
    </div>
</template>
<script>
    import Item from './Item'
    export default {
        name: "List",
        components: {Item},
        //生命接收属性：这个属性就会成为组件对象的属性
        props:['itemVal','delItemVal'],//只指定属性名
        // data() {
        //     return{
        //         index:''
        //     }
        // }
    }
</script>

<style scoped>
    .reply {
        margin-top: 0px;
    }


</style>
