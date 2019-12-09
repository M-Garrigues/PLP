<template>
    <div id="row">
        <div id="content">
            <h3>{{H_team}}  --- {{A_team}}</h3>
            <p> {{H_cote}} - {{D_cote}} - {{A_cote}}</p>
            <p>{{league}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Match",
        props: [
            "id",
            "H_team",
            "A_team",
            "H_cote",
            "D_cote",
            "A_cote",
            "league"
        ]
    }
</script>

<style scoped>

</style>