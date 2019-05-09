<template>
    <li class="list-group-item">
        <div class="handle">
            <a href="javascript:;">删除</a>
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
            }
        }
    }
</script>

<style scoped>

</style>
