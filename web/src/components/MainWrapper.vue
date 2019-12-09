<template>
    <div id="wrapper">
        <div id="featured-wrapper">
            <SideBar></SideBar>
            <MatchList :leagueFilter=this.leagueFilter></MatchList>
        </div>
    </div>
</template>

<script>
    import SideBar from "./in-wrapper/SideBar";
    import MatchList from "./in-wrapper/MatchList";
    export default {
        name: "MainWrapper",
        components: {MatchList, SideBar},
        props: [
            'leagueFilter'
        ],
    }
</script>

<style scoped>

</style>