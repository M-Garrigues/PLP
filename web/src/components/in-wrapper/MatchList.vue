<template>
    <div id="match-list container">
        <div id="header">
            <div class="title" style="text-align: center">
                <h3>Liste des matchs</h3>
            </div>
        </div>
        <div v-if="loading" style="text-align: center">
            <div>
                <b-spinner style="width: 3rem; height: 3rem;" variant="warning" label="Chargement..."></b-spinner>
            </div>
        </div>
        <b-row>
            <Match v-for="match of filteredMatches" :key="match.date" :H_team="match.H_team" :A_team="match.A_team" :H_cote="match.H_cote"
               :H_ind="match.H_ind" :D_cote="match.D_cote" :D_ind="match.D_ind" :A_cote="match.A_cote" :A_ind="match.A_ind" :league="match.league"
                :date="match.date" :hour="match.hour"></Match>
        </b-row>
    </div>
</template>

<script>
    import  Match from "./Match";
    export default {
        name: "MatchList",
        components: {Match},
        props: [
            'leagueFilter',
            'filteredMatches',
            'loading'
        ]
    }
</script>

<style scoped>

</style>