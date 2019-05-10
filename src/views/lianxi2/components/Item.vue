<template>
    <li class="list-group-item">
        <div class="handle">
            <a href="javascript:;" @click="deleteItem()">删除</a>
        </div>
        <p class="user"><span >{{items.user}}</span><span>说:</span></p>
        <p class="centence">{{items.content}}</p>
    </li>


</template>

<script>
    export default {
        name: "Item",
        props: {//指定属性名和类型
            items: {
                type: Object
            },
            delItemVal: Function,
            index: Number

        },
        methods: {
            deleteItem() {
                const {items,delItemVal,index} = this

                if(window.confirm('确定要'+items.user+'删除评论吗？')){
                    this.delItemVal(index)
                }
            }
        }
    }
</script>

<style scoped>
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
