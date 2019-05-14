<template>
    <div id="app">
        <div class="container">
            <search/>
            <user-main/>
        </div>
    </div>

</template>

<script>
    import '../../../static/css/bootstrap.css'
    import Main from './components/Main'
    import Search from './components/Search'
    export default {
        name: "App",
        components: {
            Search,
            UserMain:Main
        }
    }
</script>

<style scoped>

</style>
