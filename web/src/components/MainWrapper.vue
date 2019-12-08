<template>
    <div id="wrapper">
        <div id="featured-wrapper">
            <SideBar></SideBar>
            <MatchList></MatchList>
        </div>
    </div>
</template>

<script>
    import SideBar from "./in-wrapper/SideBar";
    import MatchList from "./in-wrapper/MatchList";
    export default {
        name: "MainWrapper",
        components: {MatchList, SideBar}
    }
</script>

<style scoped>

</style>