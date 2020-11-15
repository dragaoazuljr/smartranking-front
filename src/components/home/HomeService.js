    import axios from '../../config/axios.instance';

    export class HomeService {
        constructor() {}

        getRanking(idCategoria, dataRef){
            return axios.get('/rankings', {params: {idCategoria, dataRef}})
        }

        async getRankingPorJogador(idJogador, categoria){
            let rankings = await this.getRanking(categoria)
            let rankingJogador = rankings.data.find((ranking => ranking.jogador == idJogador));
            return rankingJogador
        }
    }