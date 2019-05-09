<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <item v-for="(items,index) in itemVal"
                  :key="index"
                  :items="items"
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
        props:[itemVal]//只指定属性名
    }
</script>

<style scoped>
    .reply {
        margin-top: 0px;
    }

    li {
        transition: .5s;
        overflow: hidden;
    }

    .handle {
        width: 40px;
        border: 1px solid #ccc;
        background: #fff;
        position: absolute;
        right: 10px;
        top: 1px;
        text-align: center;
    }

    .handle a {
        display: block;
        text-decoration: none;
    }

    .list-group-item .centence {
        padding: 0px 50px;
    }

    .user {
        font-size: 22px;
    }
</style>
