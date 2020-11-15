import React, { Component } from 'react'

const Avatar = (props) => (
    <div>
        <div style={{...avatarStyle, backgroundImage: `url(${props.user.urlFotoJogador})`}}>
        </div>
        <h5 style={{textAlign: 'center'}}>{props.user.nome}</h5>
    </div>
) 

const Category = (props) => (
    <div>
        <h3 style={{textAlign: 'center'}}>Categoria {props.user.categoria.categoria}</h3>
        <h4 style={{textAlign: 'center'}}>{props.rankingJogador.pontuacao} Pontos</h4>
        <h5 style={{textAlign: 'center'}}>{props.rankingJogador.historicoPartidas.vitorias}-{props.rankingJogador.historicoPartidas.derrotas}(V-D)</h5>
    </div>
)

export default class HomeHeader extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={cardStyle}>
                <Avatar user={this.props.user} />
                <Category user={this.props.user} rankingJogador={this.props.rankingJogador} />
            </div>
        )
    }
}

export const avatarStyle = {
    width: '200px',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '1px solid white',
    borderRadius: '100px',
    overflow: "hidden"
}

export const cardStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
