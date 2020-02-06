import axios from 'axios'

const MatchService = {
    getMatches: async () => {
        axios.defaults.baseURL = 'http://plp.localhost';
        return await axios
            .get('http://api.localhost/matches')
            .then(response => response.data)
            .then(response => {
                return response.map(match => ({
                    id: match._id.$oid,
                    H_team: match.teamH,
                    A_team: match.teamA,
                    H_cote: match.odd_H,
                    D_cote: match.odd_D,
                    A_cote: match.odd_A,
                    league: match.league,
                    H_ind: match.RI_H,
                    A_ind: match.RI_A,
                    D_ind: match.RI_D,
                    H_pred: match.pred_H,
                    D_pred: match.pred_D,
                    A_pred: match.pred_A,
                    date: formatDate(match.date),
                    rawdate: match.date,
                    hour: match.hour
                }));
            });
    }
};

function formatDate(date) {

    let newdate = new Date(date);
    let monthNames = [
        "Janvier", "Février", "Mars",
        "Avril", "Mai", "Juin", "Juillet",
        "Août", "Septembre", "Octobre",
        "Novembre", "Décembre"
    ];

    let dayNames = [
        "Dimanche", "Lundi", "Mardi",
        "Mercredi", "Jeudi", "Vendredi", "Samedi"
    ];

    var dayIndex = newdate.getDay();
    var monthIndex = newdate.getMonth();
    var day = newdate.getDate();
    var year = newdate.getFullYear();

    return dayNames[dayIndex] + ' ' + day + " " + monthNames[monthIndex] + " " + year +  "   - " ;
}

export default MatchService;
