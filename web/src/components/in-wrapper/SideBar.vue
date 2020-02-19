<template>
    <div id="sidebar">
        <BetsModal :bet_amount=this.bet_amount :risk=this.risk :matches=this.matches :odds_filter=this.odds_filter v-if="showModal" @close="showModal = false">
        </BetsModal>
        <div id="header">
            <div class="title" style="text-align: center">
                <h3>Paris</h3>
            </div>

        </div>
        <div id="indicator" align="center">
            <div class="hex hex2"><div class="hex-in1"><div class="hex-in2"><span>{{this.indicator}}</span></div></div></div>
        </div>

        <hr>
        <div class="b-container ">
            <b-row align-h="center">
                <b-col cols="8">
                    <b-form-group label-cols="4" label-cols-lg="2" label="Mise" label-for="input-bet">
                         <b-form-input v-model="bet_amount" id="input-bet"></b-form-input>
                    </b-form-group>
                </b-col>

            </b-row>

            <b-row align-h="center">
                <b-col cols="8">
                    <b-form-input id="range-2" v-model="risk" type="range" min="0" max="5" step="1"></b-form-input>
                    <div class="mt-2">Risque: {{ risk }}</div>
                </b-col>
            </b-row>

            <b-row align-h="center">
                <b-col cols="10">
                    <div class="button-group" style="margin-top:20px">
                    <a href="javascript:void(0);" accesskey="ligue1" class="small-button-inline" @click="flagClicked">FR</a>
                    <a href="javascript:void(0);" accesskey="premierLeague" class="small-button-inline" @click="flagClicked">EN</a>
                    <a href="javascript:void(0);" accesskey="liga" class="small-button-inline" @click="flagClicked">ES</a>
                    <a href="javascript:void(0);" accesskey="bundesliga" class="small-button-inline" @click="flagClicked">DE</a>
                    <a href="javascript:void(0);" accesskey="serieA" class="small-button-inline" @click="flagClicked">IT</a>
                    </div>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col cols="10">
                    <a v-b-modal.modal-tall href="javascript:void(0);" @click="showModal = true" class="button">Faire mes paris</a>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>

    import BetsModal from "../modal/BetsModal"
    export default {
        name: "SideBar",
        components: {BetsModal},
        props:[
            "loading",
            "filteredMatches",
            "matches"
        ],
        data() {
            return {
                showModal: false,
                odds_filter: {
                    "ligue1": true,
                    "liga": true,
                    "premierLeague": true,
                    "bundesliga": true,
                    "serieA": true
                },
                risk: 0,
                bet_amount: 10,
            }
        },  
        methods: {
            flagClicked: function (event) {
                let target = event.target;
                if(target.className === "small-button-inline"){
                    this.odds_filter[target.accessKey] = false;
                    target.className = "small-button-inline-toggled"
                }
                else{
                    this.odds_filter[target.accessKey] = true;
                    target.className = "small-button-inline"
                }
            }
        },
        computed: {
            indicator: function(){
                if (this.loading) return '-';
                else{
                    var indicators = [];
                    this.filteredMatches.forEach( match => {
                        if (match.H_ind > 0)
                            indicators.push(match.H_ind);
                        if (match.D_ind > 0)
                            indicators.push(match.D_ind);
                        if (match.A_ind > 0)
                            indicators.push(match.A_ind);
                    });
                    let size = indicators.length
                    let sum = indicators.reduce((previous, current) => current += previous);
                    let avg = sum / size;
                    return avg.toFixed(1);
                }
            }
        },
    }
</script>

<style scoped>

</style>