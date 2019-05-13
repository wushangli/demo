<template>
    <div class="todo-footer">
        <label>
            <!--<input type="checkbox" v-model="isShowAll"/>-->
            <slot name="checkAll"></slot>
        </label>
        <span>
          <!--<span>已完成{{comepleteSize}}  / 全部{{itemList.length}}</span> -->
            <slot name="cout"></slot>
        </span>
        <!--<button class="btn btn-danger" @click="delItemss">清除已完成任务</button>-->
        <slot name="delete"></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }

</style>
