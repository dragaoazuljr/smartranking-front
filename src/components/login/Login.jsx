import React, { Component } from 'react'
import LoginCard from './LoginCard'

export const backgroundStyle = {
    backgroundColor: '#214616',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

export default class Login extends Component {
    render() {
        return (
            <div style={backgroundStyle}>
                <LoginCard {...this.props} />
            </div>
        )
    }
}
