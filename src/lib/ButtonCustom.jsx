import React from "react";
import { Spinner, Button } from "react-bootstrap";
import Radium, { StyleRoot } from 'radium';
import { fadeInLeft } from 'react-animations';
import fadeOutLeft from "react-animations/lib/fade-out-left";


let LoadingSpinner = (props) => (
    <StyleRoot style={{display: 'inline'}}>
        <div style={[loadingSpinnerStyle.base, props.pending ? loadingSpinnerStyle.fadeIn : false]}>
            <Spinner as="a" style={SpinerStyle} size="sm" animation="border" />
        </div>
    </StyleRoot>
)

export const ButtonCustom = (props) => (
    <Button {...props}>
        <LoadingSpinner pending={props.pending} />
        {props.children}
    </Button>
)

const loadingSpinnerStyle = {
    base: {
        margin: '0px 6px 0px 0px',
        display: 'none',
    },
    fadeIn: {
        animation: '0.4s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
        display: 'inline'
    }
}

const SpinerStyle = {
    color: 'white'
}
