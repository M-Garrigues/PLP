<template>
    <div id="wrapper">
        <div id="featured-wrapper">
            <SideBar :loading=this.loading :filteredMatches=this.filteredMatches :matches=this.matches></SideBar>
            <MatchList :leagueFilter=this.leagueFilter :filteredMatches=this.filteredMatches :loading=this.loading></MatchList>
        </div>
    </div>
</template>

<script>
    import SideBar from "./in-wrapper/SideBar";
    import MatchList from "./in-wrapper/MatchList";
    import MatchService from "./in-wrapper/MatchService";
    export default {

        name: "MainWrapper",
        components: {MatchList, SideBar},
        props: [
            'leagueFilter'
        ],
        data() {
            return {
                loading: true,
                matches: []
            }
        },
        methods: {},
        computed: {
            filteredMatches: function(){
                if (this.loading) return[];
                else
                    return this.matches.filter(match => (match.league === this.leagueFilter || this.leagueFilter === ""));
            }
        },
        async mounted() {
            this.matches = await MatchService.getMatches();
            this.loading = false;
        }
    }
</script>

<style scoped>

</style>