<template>
    <div id="match-list">
        <div id="header">
            <div class="title">
                <h2>Match List</h2>
            </div>
        </div>
        <div v-if="loading">
            <h1>Loading ...</h1>
        </div>
        <Match v-for="match of filteredMatches" :key="match.id" :H_team="match.H_team" :A_team="match.A_team" :H_cote="match.H_cote"
              :D_cote="match.D_cote" :A_cote="match.A_cote" :league="match.league"></Match>
    </div>
</template>

<script>
    import Match from "./Match";
    import MatchService from "./MatchService";

    export default {
        name: "MatchList",
        components: {Match},
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
            alert("test");
        }
    }
/*

    {
        id : 1,
            H_team : "PSG",
        A_team : "OL",
        H_cote : 1.56,
        D_cote : 3.38,
        A_cote : 6.09,
        league : "ligue1"
    },
    {
        id : 2,
            H_team : "Reims",
        A_team : "OM",
        H_cote : 2.46,
        D_cote : 5.48,
        A_cote : 1.99,
        league : "ligue1"
    },
    {
        id : 3,
            H_team : "Nîmes",
        A_team : "Saint-Etienne",
        H_cote : 4.87,
        D_cote : 2.32,
        A_cote : 2.94,
        league : "ligue1"
    },
    {
        id : 4,
            H_team : "Liverpool",
        A_team : "Bournemouth",
        H_cote : 1.56,
        D_cote : 3.38,
        A_cote : 6.09,
        league : "premierLeague"
    },
    {
        id : 5,
            H_team : "Bayern Munich",
        A_team : "RB Leipzig",
        H_cote : 1.78,
        D_cote : 3.27,
        A_cote : 6.10,
        league : "bundesliga"
    },
    {
        id : 6,
            H_team : "Juve",
        A_team : "Bologna",
        H_cote : 6.01,
        D_cote : 2.19,
        A_cote : 9.10,
        league : "serieA"
    },
    {
        id : 7,
            H_team : "Fiorentina",
        A_team : "AC Milan",
        H_cote : 4.81,
        D_cote : 1.12,
        A_cote : 7.04,
        league : "serieA"
    },
    {
        id : 8,
            H_team : "FC Barcelona",
        A_team : "Eibar",
        H_cote : 1.25,
        D_cote : 4.78,
        A_cote : 10.29,
        league : "liga"
    },
    {
        id : 9,
            H_team : "Valencia",
        A_team : "Real Madrid",
        H_cote : 4.32,
        D_cote : 3.82,
        A_cote : 2.41,
        league :"liga"
    },
    {
        id : 10,
            H_team : "Bordeaux",
        A_team : "Rennes",
        H_cote : 2.54,
        D_cote : 3.87,
        A_cote : 2.45,
        league : "ligue1"
    }*/
</script>

<style scoped>

</style>