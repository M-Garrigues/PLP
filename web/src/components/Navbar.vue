<template>
    <div id="main-navbar">
        <div id="header-wrapper">
            <div id="header" class="container">
                <div id="logo">
                    <span class="icon icon-group"></span>
                    <h1><a href="#">PLP</a></h1>
                    <span>Laziness is key to <a href="https://i.kym-cdn.com/entries/icons/original/000/000/248/profit.jpg" rel="nofollow" target="_blank">profit</a></span>
                </div>
                <div id="triangle-up"></div>
            </div>
        </div>
        <div id="menu-wrapper">
            <div id="menu">
                <ul>
                    <li class="current_page_item"><a href="#" accesskey="" value="" @click="menuClicked" >Homepage</a></li>
                    <li><a href="#" accesskey="ligue1" value="ligue1" @click="menuClicked" >Ligue 1</a></li>
                    <li><a href="#" accesskey="premierLeague" value="premierLeague" @click="menuClicked">Premier League</a></li>
                    <li><a href="#" accesskey="liga" value="liga" @click="menuClicked">La Liga</a></li>
                    <li><a href="#" accesskey="bundesliga" value="bundesliga" @click="menuClicked">Bundesliga</a></li>
                    <li><a href="#" accesskey="serieA" value="serieA" @click="menuClicked">Serie A</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",

        data() {
            return {
                leagueFilter: ""
            }
        },
        methods: {
            menuClicked: function (event) {
                this.$emit('onMenuClick', event.target.accessKey)
            }
        }
    }
</script>

<style scoped>

</style>