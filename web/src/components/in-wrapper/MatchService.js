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
                    H_team: match.H_team,
                    A_team: match.A_team,
                    H_cote: match.H_cote,
                    D_cote: match.D_cote,
                    A_cote: match.A_cote,
                    league: match.league,
                    H_ind: match.H_ind,
                    A_ind: match.A_ind,
                    D_ind: match.D_ind
                }));
            });
    }
};

export default MatchService;
