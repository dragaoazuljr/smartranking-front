import React, { Component } from 'react'
import { backgroundStyle } from '../login/Login'
import SignUpCard from './SignUpCard'

export default class SignUp extends Component {
    render() {
        return (
            <div style={backgroundStyle}>
                <SignUpCard />
            </div>
        )
    }
}
