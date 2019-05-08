<template>
    <!--<div>当前时间为：{{currentime | datefilter }}</div>-->
    <div>
        <p>{{currentime}}</p>
        <span>{{currentime|datefilter}}</span><br>
        <p>当前时间 1 为: {{currentime | datefilter}}</p>
        <p>当前时间 2 为: {{currentime | datefilter('YYYY-MM-DD')}}</p>
        <p>当前时间 3 为: {{currentime | datefilter('HH:mm:ss')}}</p>
    </div>

</template>

<script>
    import moment from 'moment'//导入文件

    export default {
        name: "aaa",
        data() {

            return{
                currentime: new Date()

            }
        },
        filters:{
            datefilter:function(value,format){
                return moment(value).format( format || 'MMMM Do YYYY, h:mm:ss a');
            }
        }
    }
</script>

<style scoped>

</style>
