<template>
    <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
        <div class="modal-wrapper">
            <div class="modal-container">

                <div class="modal-header">
                    <slot name="header">
                        default header
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        default body
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        {{lowRiskBets}}
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
    export default {
        name: "BetsModal",
        props: [
            "risk",
            "matches",
            "odds_filter",
            "bet_amount"
        ],
        methods: {
            expectation: function (bet, bets) {
                let target = event.target;
                if (target.className === "small-button-inline") {
                    this.odds_filter[target.accessKey] = false;
                    target.className = "small-button-inline-toggled"
                } else {
                    this.odds_filter[target.accessKey] = true;
                    target.className = "small-button-inline"
                }
            }
        },
        computed: {

            filteredMatches: function(){

                return this.matches.filter(match => this.odds_filter[match.league]);
            },

            sortedBets: function () {

                var indicators = [];
                this.filteredMatches.forEach( match => {
                    indicators.push({ ind: match.H_ind,
                                      pred: match.H_pred,
                                      side: 'H',
                                      match: match});
                    indicators.push({ ind: match.D_ind,
                                      pred: match.D_pred,
                                      side: 'D',
                                      match: match});
                    indicators.push({ ind: match.A_ind,
                                      pred: match.A_pred,
                                      side: 'A',
                                      match: match});
                });
                return indicators.sort(function(b1, b2) {
                    return b2.ind*b2.pred - b1.ind*b1.pred ;
                });
            },

            lowRiskBets: function(){
                return this.sortedBets.slice(0, 1);
            },


        }
    }

</script>

<style scoped>

</style>