<template>
    <div id="match-list">
        <div id="header">
            <div class="title">
                <h2>Liste des matchs</h2>
            </div>
        </div>
        <div v-if="loading">
            <h1>Chargement ...</h1>
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
            'leagueFilter',
            'filteredMatches',
            'loading'
        ]
    }
</script>

<style scoped>

</style>