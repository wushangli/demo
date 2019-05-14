<template>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "App",
        data () {
            return{
                repoUrl:'',
                repoName:''
            }
        },
        mounted(){
            //发送ajax请求获取数据
            const url ='https://api.github.com/search/repositories?q=vu&sort=stars';
            // this.$http.get(url).then(
            //     response => {
            //         const result = response.data
            //         console.log(result)
            //         const repo = result.items[0]
            //         this.repoUrl= repo.html_url
            //         this.repoName= repo.name
            //     },
            //     response =>{
            //         alert("获取数据失败")
            //     }
            // )
        //使用axios发送ajax请求
            axios.get(url).then(
                response => {
                    const result = response.data
                    console.log(result)
                    const repo = result.items[0]
                    this.repoUrl= repo.html_url
                    this.repoName= repo.name
                }
            ).catch(error =>{
                alert("获取数据失败")
            }
            )

        }
    }
</script>

<style scoped>

</style>
