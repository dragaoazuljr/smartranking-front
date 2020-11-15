import React, { Component } from 'react'
import { Alert, Button, Spinner } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/bola-de-tenis.png'
import { ButtonCustom } from '../../lib/ButtonCustom'
import LoginForm from './LoginForm'
import { LoginSerivce } from './LoginService'


export function Icon() {
    return <div style={imgStyle}>
            <img className="img-fluid" src={logo} />
        </div>
}

export function Header(){
    return <h1 style={headerStyle}>Smart Ranking</h1>
}

function ErrorMessage() {
    return (
        <Alert variant="danger">
            Usuário ou senha Invalida
        </Alert>
    )
}

export default class LoginCard extends Component {
    loginService = new LoginSerivce();
    
    constructor(props){
        super(props);
        this.state = {login: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, field){
        this.setState({...this.state, [field]: event.target.value})
    }

    async sendLogin(){
        this.setState({...this.state, error: undefined, pending: 1})
        this.loginService.login(this.state.login, this.state.password)
            .then(
                (token) => this.redirect(token),
                (err) => this.validadeError(err)
            )
    }

    validadeError(err){
        console.log(err);
        this.setState({...this.state, error: true, pending: 0});
    }

    redirect(resp) {
        let token = resp.data.idToken.jwtToken;
        localStorage.setItem('accessToken', token);
        this.props.history.push('/home')
    }

    render() {
        return (
            <div style={card}>
                <Icon />
                <Header />
                <LoginForm handle={this.handleChange} />
                {this.state.error ? (
                    <ErrorMessage />
                ) : false}
                <div style={buttonDivStyle}>
                    <ButtonCustom style={buttonStyle} onClick={() => this.sendLogin()} pending={this.state.pending}>Login</ButtonCustom>
                    <NavLink to="/signup">
                        <ButtonCustom style={buttonStyle}>Cadastro</ButtonCustom>
                    </NavLink>
                </div>
            </div>
        )
    }
}



const imgStyle = {
    width: '50px'
}

const headerStyle = {
    margin: '0px'
}

const SpinerStyle = {
    color: 'white',
    marginLeft: '5px'
}

const buttonDivStyle = {
    display: 'flex'
}

export const card =  {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px'
}

const buttonStyle = {
    margin: '5px'
}
