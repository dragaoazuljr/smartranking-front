import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

export default class LoginForm extends Component {
    render() {
        return (
            <div style={formStyle}>
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

const labelStyle = {
    display: 'block'
}

export const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}