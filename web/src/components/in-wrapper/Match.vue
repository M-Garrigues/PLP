<template>
    <div id="row">
        <div id="content">
            <table align="center" width=65% style="border-spacing: 50px 10px">
                <tr>
                    <th width=35% >{{H_team}}</th>
                    <th width=10%>1</th>
                    <th width=10%>N</th>
                    <th width=10%>2</th>
                    <th width=35%>{{A_team}}</th>
                </tr>
                <tr>
                    <td/>
                    <td style="background-color: #FFC000">{{H_cote}}</td>
                    <td style="background-color: #FFC000">{{D_cote}}</td>
                    <td style="background-color: #FFC000">{{A_cote}}</td>
                    <td/>
                </tr>
                <tr>
                    <td/>
                    <td align="center"><div class="hex hex1"><div class="hex-in1"><div class="hex-in2" :style="`background-color:${indicatorColor(H_ind)}`"><span>{{H_ind}}</span></div></div></div></td>
                    <td align="center"><div class="hex hex1"><div class="hex-in1"><div class="hex-in2" :style="`background-color:${indicatorColor(D_ind)}`"><span>{{D_ind}}</span></div></div></div></td>
                    <td align="center"><div class="hex hex1"><div class="hex-in1"><div class="hex-in2" :style="`background-color:${indicatorColor(A_ind)}`"><span>{{A_ind}}</span></div></div></div></td>
                    <td/>
                </tr>
            </table>
            <p><i>{{league}}</i></p>
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
            "H_ind",
            "D_cote",
            "D_ind",
            "A_cote",
            "A_ind",
            "league"
        ],
        methods: {
            indicatorColor: function(indicator) {
                return indicator > 0 ? "#00CED1" : "#87CEFA";
            },
        }
    }
</script>

<style scoped>

</style>