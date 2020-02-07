<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" :sticky=true>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" align="center" is-nav>
                <div id="menu">
                    <ul>
                        <li class="current_page_item"><a href="javascript:void(0);" accesskey="" value="" @click="menuClicked" >Tous</a></li>
                        <li><a href="javascript:void(0);" accesskey="ligue1" value="ligue1" @click="menuClicked" >Ligue 1</a></li>
                        <li><a href="javascript:void(0);" accesskey="premierLeague" value="premierLeague" @click="menuClicked">Premier League</a></li>
                        <li><a href="javascript:void(0);" accesskey="liga" value="liga" @click="menuClicked">La Liga</a></li>
                        <li><a href="javascript:void(0);" accesskey="bundesliga" value="bundesliga" @click="menuClicked">Bundesliga</a></li>
                        <li><a href="javascript:void(0);" accesskey="serieA" value="serieA" @click="menuClicked">Serie A</a></li>
                    </ul>
                </div>
            </b-collapse>
        </b-navbar>
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