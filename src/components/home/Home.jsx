import React, { Component } from 'react'
import { UserService } from '../user/UserService'
import HomeHeader from './HomeHeader';
import { HomeService } from './HomeService';

export default class Home extends Component {

    userService = new UserService();
    homeService = new HomeService();
    
    constructor(props){
        super (props)
        this.getLoggedUser();
        this.state = {}
    }
    
    async getUserRakings(userId, categoria) {
        let rankings = await this.homeService.getRankingPorJogador(userId, categoria);
        this.setState({...this.state, rankingJogador: rankings})
    }
    
    async getLoggedUser(){
        let userDecoded = await this.userService.getUserLoged();
        let user = await this.userService.getuserByEmail(userDecoded.email);
        this.getUserRakings(user.data._id, user.data.categoria._id);
        this.setState({...this.state, user: user.data});
    }

    render() {
        return (
            <div style={backgroundStyle}>
                {this.state.user && this.state.rankingJogador && <HomeHeader user={this.state.user} rankingJogador={this.state.rankingJogador} />}
            </div>
        )
    }
}

export const backgroundStyle = {
    backgroundColor: '#214616',
    padding: '20px',
    height: '100vh'
}
