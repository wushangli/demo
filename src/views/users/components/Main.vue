<template>
    <div>
        <h2 v-if="!firstView">输入用户搜索</h2>
        <h2 v-if="loading">Loading。。。</h2>
        <h2 v-if="!errmsg">{{errmsg}}</h2>
        <div class="row">
            <div class="card"
                 v-for="(user,index) in users "
                 :key="index"
            >
                <a href="user.url" target="_blank">
                    <img src="user.vv_html" style='width: 100px'/>
                </a>
                <p class="card-text">user.name</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                firstView:false,
                loading:false,
                errmsg:'',
                users:null
            }
        }
    }
</script>

<style scoped>
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }

</style>
