import React, { Component } from "react";
import { bounce, pulse } from "react-animations";   // flipInX, flipInY see https://www.npmjs.com/package/react-animations
import styled, { keyframes } from 'styled-components';
import './style.css';


const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const Wobble = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;
const RotateInDownLeft = styled.div`animation: 4.6s ${keyframes`${pulse}`} infinite`;
const RotateInDownRight = styled.div`animation: 7.7s ${keyframes`${pulse}`} infinite`;
const height = "370px";
const width = "370px";



class AnimateBounce extends Component {
    render() {
        return (
            <Bounce><a href={this.props.href}><img src={this.props.src} alt='Menu' style={{
                height,
                width
            }}></img></a></Bounce>
        );
    }
}

class AnimateWobble extends Component {
    render() {
        return (
            <Wobble><a href={this.props.href}><img src={this.props.src} alt='Menu' style={{
                height,
                width
            }}></img></a></Wobble>
        );
    }
}



class AnimateRotateInDownLeft extends Component {
    render() {
        return (
            <RotateInDownLeft><a href={this.props.href}><img src={this.props.src} alt='Menu' style={{
                height,
                width
            }}></img></a></RotateInDownLeft>
        )
    }
}


class AnimateRotateInDownRight extends Component {
    render() {
        return (
            <RotateInDownRight><a href={this.props.href}><img src={this.props.src} alt='Menu' style={{
                height,
                width
            }}></img></a></RotateInDownRight>
        )
    }
}

export { AnimateWobble, AnimateRotateInDownLeft, AnimateRotateInDownRight, AnimateBounce }





