<template>
    <div id="wrapper">
        <div id="featured-wrapper">
            <b-row>
                <b-col cols="12" md="4">
                    <SideBar :loading=this.loading :filteredMatches=this.filteredMatches :matches=this.matches></SideBar>
                </b-col>
                <b-col cols="12" md="8">
                    <MatchList :leagueFilter=this.leagueFilter :filteredMatches=this.filteredMatches :loading=this.loading></MatchList>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import SideBar from "./in-wrapper/SideBar";
    import MatchList from "./in-wrapper/MatchList";
    import MatchService from "./services/MatchService";
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
                const filtered =  this.matches.filter(match => (match.league === this.leagueFilter || this.leagueFilter === ""));
                if (this.loading) return[];
                else{
                    return filtered.sort(function(b1, b2) {
                        return new Date(b1.rawdate).getTime() - new Date(b2.rawdate).getTime();
                    });
                }

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