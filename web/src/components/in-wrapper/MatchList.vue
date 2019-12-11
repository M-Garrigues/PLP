<template>
    <div id="match-list">
        <div id="header">
            <div class="title">
                <h2>Match List</h2>
            </div>
        </div>

        <Match v-for="match of filteredMatches" :key="match.id" :H_team="match.H_team" :A_team="match.A_team" :H_cote="match.H_cote"
               :H_ind="match.H_ind" :D_cote="match.D_cote" :D_ind="match.D_ind" :A_cote="match.A_cote" :A_ind="match.A_ind" :league="match.league"></Match>
    </div>
</template>

<script>
    import Match from "./Match";
    export default {
        name: "MatchList",
        components: {Match},
        props: [
            'leagueFilter'
        ],
        data() {
            return {
                matches: [
                    {
                        id : 1,
                        H_team : "PSG",
                        A_team : "OL",
                        H_cote : 1.56,
                        H_ind  : -1.7,
                        D_cote : 3.38,
                        D_ind  : -4.8,
                        A_cote : 6.09,
                        A_ind  : 1.7,
                        league : "ligue1"
                    },
                    {
                        id : 2,
                        H_team : "Reims",
                        A_team : "OM",
                        H_cote : 2.46,
                        H_ind  : -2.9,
                        D_cote : 5.48,
                        D_ind  : 0.1,
                        A_cote : 1.99,
                        A_ind  : -2.8,
                        league : "ligue1"
                    },
                    {
                        id : 3,
                        H_team : "Nîmes",
                        A_team : "Saint-Etienne",
                        H_cote : 4.87,
                        H_ind  : 0.9,
                        D_cote : 2.32,
                        D_ind  : -4.3,
                        A_cote : 2.94,
                        A_ind  : -4.2,
                        league : "ligue1"
                    },
                    {
                        id : 4,
                        H_team : "Liverpool",
                        A_team : "Bournemouth",
                        H_cote : 1.56,
                        H_ind  : 2.1,
                        D_cote : 3.38,
                        D_ind  : 0.0,
                        A_cote : 6.09,
                        A_ind  : -4.7,
                        league : "premierLeague"
                    },
                    {
                        id : 5,
                        H_team : "Bayern Munich",
                        A_team : "RB Leipzig",
                        H_cote : 1.78,
                        H_ind  : -5.2,
                        D_cote : 3.27,
                        D_ind  : 1.2,
                        A_cote : 6.10,
                        A_ind  : -2.8,
                        league : "bundesliga"
                    },
                    {
                        id : 6,
                        H_team : "Juve",
                        A_team : "Bologna",
                        H_cote : 6.01,
                        H_ind  : 2.1,
                        D_cote : 2.19,
                        D_ind  : -2.6,
                        A_cote : 9.10,
                        A_ind  : 2,
                        league : "serieA"
                    },
                    {
                        id : 7,
                        H_team : "Fiorentina",
                        A_team : "AC Milan",
                        H_cote : 4.81,
                        H_ind  : -1.4,
                        D_cote : 1.12,
                        D_ind  : 3.5,
                        A_cote : 7.04,
                        A_ind  : 2.2,
                        league : "serieA"
                    },
                    {
                        id : 8,
                        H_team : "FC Barcelona",
                        A_team : "Eibar",
                        H_cote : 1.25,
                        H_ind  : -5.9,
                        D_cote : 4.78,
                        D_ind  : -5.3,
                        A_cote : 10.29,
                        A_ind  : 5.6,
                        league : "liga"
                    },
                    {
                        id : 9,
                        H_team : "Valencia",
                        A_team : "Real Madrid",
                        H_cote : 4.32,
                        H_ind  : -0.1,
                        D_cote : 3.82,
                        D_ind  : 1.4,
                        A_cote : 2.41,
                        A_ind  : 2.3,
                        league :"liga"
                    },
                    {
                        id : 10,
                        H_team : "Bordeaux",
                        A_team : "Rennes",
                        H_cote : 2.54,
                        H_ind  : -5.9,
                        D_cote : 3.87,
                        D_ind  : -1.7,
                        A_cote : 2.45,
                        A_ind  : 1.9,
                        league : "ligue1"
                    }
                ]
            }
        },
        computed: {
            filteredMatches: function(){
                return this.matches.filter(match => (match.league === this.leagueFilter || this.leagueFilter === ""));
            }
        }
    }
</script>

<style scoped>

</style>