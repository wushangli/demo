<template>
    <div>
        <form v-if="!isReg">
            用户名：
            <input type="text" v-model="name"/>
            密码：
            <input type="password" v-model="password"/>
            <button type="button" @click="login()">登陆</button>
            <button type="button" @click="reg()" >注册</button><br/>
            <button type="button" @click="jump()">跳转</button><br/>
            <button type="button" @click="jumptodo()">跳转todo</button><br/>
            <button type="button" @click="jumpaxios()">跳转axios</button><br/>
            <button type="button" @click="jumpausers()">跳转users</button><br/>
        </form>
        <form v-else>
            用户名：
            <input type="text" v-model="name"/>
            密码：
            <input type="password" v-model="password"/>
            再次输入密码：
            <input type="password" v-model="repeat"/>
            <button type="button" @click="sure()">确定</button>
            <button type="button" @click="cancle()">取消</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                isReg: false,
                name: "",
                password: "",
                repeat: "",
            }
        },
        methods: {
            login(){
                console.log("1111")
                if(localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password){
                    this.name=""
                    this.password=""
                    this.$router.push('./home/list')
                }else {
                    alert("用户名密码错误")
                }
            },
            reg(){
                this.isReg = true
            },
            cancle(){
                this.isReg = false
            },
            sure(){
                if(this.password == this.repeat){

                    localStorage .setItem("name",this.name)
                    localStorage .setItem("password",this.password)
                    this.name=""
                    this.password=""
                    this.isReg = false
                }else {
                    alert("两次密码不一致")
                }
            },
            jump(){
                this.$router.push('./lianxi')
            },
            jumptodo(){
                this.$router.push('./todo')
            },
            jumpaxios(){
                this.$router.push('./axios')
            },
            jumpausers(){
                this.$router.push('./userpage')

            }
        }
    }
</script>

<style scoped>

</style>
