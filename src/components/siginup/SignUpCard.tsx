import React, { Component } from 'react'
import { card, Header, Icon } from '../login/LoginCard'
import SignUpForm from './SignUpForm'

export default class SignUpCard extends Component {

    handleChange(event: any, field: string){
        this.setState({...this.state, [field]: event.target.value})
    }

    render() {
        return (
            <div style={card}>
                <Icon />
                <Header />
                <SignUpForm handle={this.handleChange} />
            </div>
        )
    }
}
