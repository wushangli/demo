<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isShowAll"/>
        </label>
        <span>
          <span>已完成{{comepleteSize}}</span> / 全部{{itemList.length}}
        </span>
        <button class="btn btn-danger" @click="delItemss">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: "Todofooter",
        props: {
            itemList: Array,
            selectAllCheck: Function,
            delItemss: Function
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
        }
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
