<template>
    <div id="sidebar">
        <BetsModal :bet_amount=this.bet_amount :risk=this.risk :matches=this.matches :odds_filter=this.odds_filter v-if="showModal" @close="showModal = false">
            <h3 slot="header">custom header</h3>
        </BetsModal>
        <div id="header">
            <div class="title">
                <h2>Indicateur</h2>
            </div>
        </div>
        <div id="indicator" align="center">
            <div class="hex hex2"><div class="hex-in1"><div class="hex-in2"><span>{{this.indicator}}</span></div></div></div>
        </div>


        <div class="ebox2">
            <div class="title">
                <h3>Sélecteur de paris</h3>
            </div>
        <label>
            Mise:<input v-model="bet_amount">
        </label>

            <div class="form-group" style="margin-top:30px">
                <label>Risque:</label>
                <label class="radio-inline"><input type="radio" checked="checked" name="risk_level" @click="risk = 1">Bas </label>
                <label class="radio-inline"><input type="radio" name="risk_level" @click="risk = 2">Moyen </label>
                <label class="radio-inline"><input type="radio" name="risk_level" @click="risk = 3">Elevé </label>
            </div>

            <div class="button-group" style="margin-top:30px">
                <a href="javascript:void(0);" accesskey="ligue1" class="small-button-inline" @click="flagClicked">🇫🇷</a>
                <a href="javascript:void(0);" accesskey="premierLeague" class="small-button-inline" @click="flagClicked">🏴󠁧󠁢󠁥󠁮󠁧󠁿</a>
                <a href="javascript:void(0);" accesskey="liga" class="small-button-inline" @click="flagClicked">🇪🇸</a>
                <a href="javascript:void(0);" accesskey="bundesliga" class="small-button-inline" @click="flagClicked">🇩🇪</a>
                <a href="javascript:void(0);" accesskey="serieA" class="small-button-inline" @click="flagClicked">🇮🇹</a>
            </div>
            <a href="javascript:void(0);" @click="showModal = true" class="button">Faire mes paris</a>
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
                risk: 1,
                bet_amount: 10
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
                        indicators.push(match.H_ind);
                        indicators.push(match.D_ind);
                        indicators.push(match.A_ind);
                    });
                    var sorted = indicators.sort(function(a, b) {
                        return b - a;
                    });
                    sorted = sorted.slice(0, 10);
                    let sum = indicators.reduce((previous, current) => current += previous);
                    let avg = sum / sorted.length;
                    return avg.toFixed(1);
                }
            }
        },
    }
</script>

<style scoped>

</style>