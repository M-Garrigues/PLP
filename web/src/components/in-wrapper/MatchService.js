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
                    D_ind: match.RI_D
                }));
            });
    }
};

export default MatchService;
