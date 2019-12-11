<template>
    <div id="row">
        <div id="content">
            <table align="center" width=65%>
                <tr>
                    <th width=35% >{{H_team}}</th>
                    <th width=10%>1</th>
                    <th width=10%>N</th>
                    <th width=10%>2</th>
                    <th width=35%>{{A_team}}</th>
                </tr>
                <tr>
                    <td/>
                    <td>{{H_cote}}</td>
                    <td>{{D_cote}}</td>
                    <td>{{A_cote}}</td>
                    <td/>
                </tr>
                <tr>
                    <td/>
                    <td><div class="hexagonLittle"><span>{{H_ind}}</span></div></td>
                    <td><div class="hexagonLittle"><span>{{D_ind}}</span></div></td>
                    <td><div class="hexagonLittle"><span>{{A_ind}}</span></div></td>
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
        ]
    }
</script>

<style scoped>

</style>