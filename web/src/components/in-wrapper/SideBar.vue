<template>
    <div id="sidebar">
        <div id="header">
            <div class="title">
                <h2>Indicateur</h2>
            </div>
        </div>
        <div id="indicator" align="center">
            <div class="hex hex2"><div class="hex-in1"><div class="hex-in2"><span>9.1</span></div></div></div>
        </div>


        <div class="ebox2">
            <div class="title">
                <h3>Sélecteur de paris</h3>
            </div>
        <label>
            Mise:<input>
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
            <a href="javascript:void(0);" class="button">Faire mes paris</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return {
                loading: true,
                odds_filter: {
                    "ligue1": true,
                    "liga": true,
                    "premierLeague": true,
                    "bundesliga": true,
                    "serieA": true
                },
                risk:1
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
        }
    }
</script>

<style scoped>

</style>