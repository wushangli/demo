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
                <p class="card-text">{{user.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    import axios from 'axios'

    export default {
        name: "Main",
        data() {
            return {
                firstView:false,
                frist:'false',
                loading:false,
                errmsg:'',
                users: null

            }
        },
        watch: {
            firstView:  {
                handler: function (val) {
                    console.log(222)
                    console.log(val)
                }
            }
        },
        mounted(){
           //发布消息
           PubSub.subscribe('searchs',(msg,searchName) =>{
               const searchurl = 'https://api.github.com/search/users?q='+searchName
                //更新状态
               this.firstView = true
               this.frist = 'true'
               this.loading = true
               this.users = null
               this.errmsg = ''
               //获取数据
                axios.get(searchurl).then(response =>{

                    const result = response.data
                    console.log(result)
                    const users = result.items.map(item =>(
                        {
                            user:item.html_url,
                            vv_html:item.avatar_url,
                            name:item.login
                        }))

                    //成功
                    this.loading=false
                    this.users=users
                    console.log(this.users)
                    }).catch(error => {
                        //失败
                        this.loading=false
                        this.errmsg='请求失败'
                })
           })
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
