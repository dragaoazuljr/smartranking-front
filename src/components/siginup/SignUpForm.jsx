import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
import { formStyle } from '../login/LoginForm'

export default class SignUpForm extends Component {
    render() {
        return (
            <div style={formStyle}>
                <label>
                    Nome
                    <FormControl id="name" onChange={(event) => this.props.handle(event, 'name')} />
                </label>
                <label>
                    Telefone
                    <FormControl id="phone" onChange={(event) => this.props.handle(event, 'phone')} />
                </label>
                <label>
                    Email
                    <FormControl id="login" type="email" onChange={(event) => this.props.handle(event, 'login')} />
                </label>
                <label>
                    Senha
                    <FormControl id="password" type="password" onChange={(event) => this.props.handle(event, 'password')} />
                </label>

                <label>
                    Confirmar senha
                    <FormControl id="confirmPassword" type="password" onChange={(event) => this.props.handle(event, 'confirmPassword')} />
                </label>
            </div>
        )
    }
}
