<template>
    <div class="footer">
        <router-view />
        <ul>
            <li><router-link class="icons" :to="{name: 'list'}">新闻列表</router-link></li>
            <li><router-link class="icons" :to="{name: 'user'}">个人中心</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="scss">
    li{
        list-style: none;
    }
    .footer{
        position: fixed;
        width: 100%;
         line-height: 60px;
        left: 0;
        bottom: 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }
    .icons{
        font-size: 16px;
        flex: 1;
        text-align: center;
        border-top: 1px solid #42b983;
    }

</style>
