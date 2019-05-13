<template>
    <li @mouseenter="handelColor(true)" @mouseleave="handelColor(false)" :style="{background: bgColor}">
        <label>
        <input type="checkbox" v-model="content.comeplete" />
        <span>{{content.title}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow">删除</button>
    </li>

</template>
<script>
    export default {
        name: "TodoItem",
        props:{
            content: Object,
            index: Number
        },
        data() {
          return{
              bgColor:'white',
              isShow: false
          }
        },
        mounted() {
            console.log(this.content)
        },
        methods: {
            handelColor(val){
                if(val){
                    this.bgColor='#aaaaaa'
                    this.isShow=true
                }else{
                    this.bgColor='white'
                    this.isShow=false
                }
            }
        }
    }

</script>


<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        /*display: none;*/
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

</style>
