<template>
    <p> {{bet.teamH}} -- {{bet.teamA}} : Résultat <b>{{bet.side}}</b> Mise : {{this.amount}}€</p>
</template>

<script>
    export default {
        name: "Bet",
        props : [
            "bet",
            "amount"
        ]
    }
</script>

<style scoped>

</style>