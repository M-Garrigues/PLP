<template>
    <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">
                        <h3>Répartition des paris</h3>
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        <table style="width:90%">
                            <tr>
                                <th>Domicile</th>
                                <th>Extérieur</th>
                                <th>Victoire</th>
                                <th>Paris</th>
                            </tr>
                            <Bet v-for="bet of sortedBets" :key="bet.ind" :bet="bet" :amount="(bet.credit*bet_amount).toFixed(2)"></Bet>
                        </table>
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                    <button class="button" @click="$emit('close')">
                            OK
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    import Bet from "./Bet";
    export default {
        name: "BetsModal",
        components: {Bet},
        props: [
            "risk",
            "matches",
            "odds_filter",
            "bet_amount"
        ],
        methods: {
            expectation: function (bet_amount, bets) {
                return bet_amount * bets
            }
        },
        computed: {

            filteredMatches: function(){
                return this.matches.filter(match => this.odds_filter[match.league]);
            },

            sortedBets: function () {

                var indicators = [];
                this.filteredMatches.forEach( match => {
                    if (match.H_ind >= 0)
                        indicators.push({ ind: match.H_ind,
                                    pred: match.H_pred,
                                    side: 'H',
                                    odd: match.H_cote,
                                    teamA: match.A_team,
                                    teamH : match.H_team,
                                    credit: 0});
                    if (match.D_ind >= 0)
                        indicators.push({ ind: match.D_ind,
                                    pred: match.D_pred,
                                    side: 'D',
                                    odd: match.D_cote,
                                    teamA: match.A_team,
                                    teamH : match.H_team,
                                    credit: 0});
                    if (match.A_ind >= 0)
                        indicators.push({ ind: match.A_ind,
                                    pred: match.A_pred,
                                    side: 'A',
                                    odd: match.A_cote,
                                    teamA: match.A_team,
                                    teamH : match.H_team,
                                    credit: 0});
                });

                let sliced_indicators = indicators.sort(function(b1, b2) {
                    return b2.ind - b1.ind;
                }).slice(0, indicators.length > 15? 15 : indicators.length);

                var tot = 0;

                sliced_indicators.forEach(bet => {
                    bet.credit = bet.pred * bet.pred * (bet.pred - 1/bet.odd);
                    tot += bet.credit;
                });
                sliced_indicators.forEach(bet => bet.credit = bet.credit / tot);

                return sliced_indicators.sort(function(b1, b2) {
                    return b2.credit - b1.credit;
                });
            },

            lowRiskBets: function(){
                return this.sortedBets.slice(0, 10);
            },
        }
    }

</script>

<style scoped>

</style>