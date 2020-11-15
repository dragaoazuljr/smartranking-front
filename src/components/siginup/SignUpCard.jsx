import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import { ButtonCustom } from '../../lib/ButtonCustom'
import { card, Header, Icon } from '../login/LoginCard'
import { LoginSerivce } from '../login/LoginService'
import SignUpForm from './SignUpForm'

export default class SignUpCard extends Component {

    loginService = new LoginSerivce();

    constructor(props){
        super(props);
        this.state = {pending: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, field){
        this.setState({...this.state, [field]: event.target.value})
        setTimeout(() => this.validatePassword(), 200)
    }

    validatePassword(){
        let {password, confirmPassword} = this.state;
        
        if(password !== confirmPassword) {
            this.setState({...this.state, error: 'Senha nao conferem'})
        } else {
            this.setState({...this.state, error: undefined})
        }
    }

    signUp(){
        this.setState({...this.state, pending: 1})
        const {name, phone, login, password} = this.state

        this.loginService.signup(login, password, name, phone)
            .then(() => this.validateSignUp())
            .catch((err) => this.validateError(err))
    }

    validateSignUp(){

    }

    validateError(err){
        console.log(err.response);
        if(err.response.status === 400){
            this.setState({...this.state, pending: 0, error: err.response.data.error.message.join(', ')})
        } else {
            this.setState({...this.state, pending: 0, error: 'Email já cadastrado'})
        }
    }

    cancel(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div style={card}>
                <Icon />
                <Header />
                <SignUpForm handle={this.handleChange} />
                {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
                <Buttons pending={this.state.pending} disabled={this.state.error} signUp={() => this.signUp()} cancel={() => this.cancel()}></Buttons>
            </div>
        )
    }
}

const Buttons = (props) => (
    <div>
        <ButtonCustom style={ButtonsStyle} pending={props.pending} disabled={props.disabled} onClick={() => props.signUp()}>Cadastrar</ButtonCustom>
        <ButtonCustom style={ButtonsStyle} onClick={() => props.cancel()}>Cancelar</ButtonCustom>
    </div>
)

const ButtonsStyle ={
    margin: '0 5px'
}
