<template>
                <b-col lg="6" md="10" sm="12" style="padding-bottom: 2em" >
                    <b-card
                            border-variant="warning"
                            align="center"
                            :footer=league
                            :header=date+hour
                            footer-bg-variant="white"
                            header-bg-variant="white"
                            footer-border-variant="white"
                            header-border-variant="warning"
                    >
                        <b-card-text>
                            <b-row style="text-transform:uppercase">
                                <b-col cols="5"><b>{{H_team}}</b>
                                </b-col>
                                <b-col cols="2"><b>V</b>
                                </b-col>
                                <b-col cols="5"><b>{{A_team}}</b>
                                </b-col>
                            </b-row>
                            <hr>
                            <b-row>
                                <b-col cols="4">{{H_cote}}
                                </b-col>
                                <b-col cols="4">{{D_cote}}
                                </b-col>
                                <b-col cols="4">{{A_cote}}
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="4">
                                    <div align="center">
                                        <div class="hex hex1"><div class="hex-in1"><div class="hex-in2" :style="`background-color:${indicatorColor(H_ind)}`">{{H_ind}}</div></div></div>
                                    </div>
                                </b-col>
                                <b-col cols="4">
                                    <div align="center">
                                        <div class="hex hex1"><div class="hex-in1"><div class="hex-in2" :style="`background-color:${indicatorColor(D_ind)}`">{{D_ind}}</div></div></div>
                                    </div>
                                </b-col>
                                <b-col cols="4" style="align-content: center">
                                    <div align="center">
                                        <div class="hex hex1"><div class="hex-in1"><div class="hex-in2" :style="`background-color:${indicatorColor(A_ind)}`">{{A_ind}}</div></div></div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-text>

                    </b-card>
                </b-col>
</template>

<script>
    export default {
        name: "Match",
        props: [
            "id",
            "H_team",
            "A_team",
            "H_cote",
            "H_ind",
            "D_cote",
            "D_ind",
            "A_cote",
            "A_ind",
            "league",
            "date",
            "hour"
        ],
        methods: {
            indicatorColor: function(indicator) {
                if (indicator < 1)
                    return "#f0f0f0"
                if (indicator < 1.5)
                    return "#3AD1CA"
                if (indicator < 1.8)
                    return "#5BD8AF"
                if (indicator < 2.2)
                    return "#77DE95"
                if (indicator < 2.8)
                    return "#98E879"
                if (indicator < 3.4)
                    return "#BEEF55"
                if (indicator < 4)
                    return "#E2F834"
                return "#fae614"
            },
        }
    }
</script>

<style scoped>

</style>