<template>
    <tr>
        <td>{{bet.teamH}}</td>
        <td>{{bet.teamA}}</td>
        <td>{{bet.side}}</td>
        <td>{{this.amount}}€</td>
    </tr>
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