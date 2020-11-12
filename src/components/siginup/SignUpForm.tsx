import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
import { formStyle } from '../login/LoginForm'

export default class SignUpForm extends Component<{handle: Function}, {}> {
    render() {
        return (
            <div style={formStyle}>
                <label>
                    Nome
                    <FormControl onChange={(event) => this.props.handle(event, 'name')} />
                </label>
                <label>
                    Telefone
                    <FormControl onChange={(event) => this.props.handle(event, 'phone')} />
                </label>
                <label>
                    Login
                    <FormControl onChange={(event) => this.props.handle(event, 'login')} />
                </label>
                <label>
                    Password
                    <FormControl type="password" onChange={(event) => this.props.handle(event, 'password')} />
                </label>
            </div>
        )
    }
}
