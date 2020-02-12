<template>
    <b-modal id="modal-tall" title="Paris sélectionnés"
             header-bg-variant="dark"
             header-text-variant="light"
             :centered=true
             size="xl"
             :hide-footer=true
             modal-class="special_modal">
        <b-table hover :items="betsToPrint"></b-table>
    </b-modal>
</template>

<script>
    export default {
        name: "BetsModal",
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
                    let ecart_zero = 0.3
                    let esperance = bet.pred * (bet.odd - 1) - (1 - bet.pred) * (-1);
                    let variance = bet.pred * (bet.odd - 1 - esperance) ** 2 + (1 - bet.pred) * (-1 - esperance) ** 2 + ecart_zero;
                    bet.credit = esperance/variance**(1 + (5-this.risk)/5);
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

            betsToPrint: function(){

                let ret = [];
                var var_dom = "";
                var var_ext = "";
                this.sortedBets.forEach(bet => {

                    if(bet.side === "A"){
                        var_dom = "";
                        var_ext = "success";
                    }
                    else if(bet.side === "H"){
                        var_dom = "success";
                        var_ext = "";
                    }
                    else{
                        var_dom = "warning";
                        var_ext = "warning";
                    }

                    ret.push({
                        Domicile: bet.teamH,
                        Extérieur: bet.teamA,
                        Mise:  (bet.credit*this.bet_amount).toFixed(2).toString()+"€",
                        _cellVariants: { "Domicile": var_dom, "Extérieur": var_ext}
                    })
                });

                return ret
            }
        }
    }

</script>

<style scoped>

</style>