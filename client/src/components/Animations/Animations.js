import React, { Component } from "react";
import { bounce, pulse, zoomIn, fadeIn } from "react-animations";   // flipInX, flipInY see https://www.npmjs.com/package/react-animations
import styled, { keyframes } from 'styled-components';
import './style.css';


const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const ZoomIn = styled.div`animation: 3s ${keyframes`${zoomIn}`}`;
const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`}`;
const Wobble = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;
const RotateInDownLeft = styled.div`animation: 4.6s ${keyframes`${pulse}`} infinite`;
const RotateInDownRight = styled.div`animation: 7.7s ${keyframes`${pulse}`} infinite`;
const height = "370px";
const width = "370px";


class AnimateBounce extends Component {
    render() {
        return (
            <Bounce><a href={this.props.href}><img src={this.props.src} alt='Menu' style={{
                color: "white",
                height,
                width
            }}></img></a></Bounce>
        );
    }
}



/**Animation wobble effect from react-animations
 * @class
 */
class AnimateZoomIn extends Component {
    render() {
        return (
            <ZoomIn>
                {/* <a href={this.props.href}><img src={this.props.src} alt='Menu' style={{
                    height,
                    width
                }}></img>
                </a> */}
                <div style={{ color: "white" }}>
                    {/* <h2>About Me</h2> */}
                    <section>
                        <img src="/IMG_3192.JPG" alt="SB photo" height="100px"
                            width="160px"></img>
                        <p ><strong> Husband to Laura, father to Alan and Eva - and we have 7
                    dogs too.</strong>
                        </p><br></br>
                        <p >I offer, proven project management and technical skill, leadership, good communication, and above all, a successful addition to your team.
                    </p><br></br>
                        <p > Starting January 2020 I am enrolled in both: Masters
                        Science in Information Technology at University of Texas Rio Grande Valley; and, the Coding Bootcamp
                        program at University
                        of Texas Austin. Professional development in these areas will complement my hands-on experience and
                        enable me to provide good solutions to business problems.
                    </p><br></br>
                        <p > There are significant opportunities to solve customer or issues
                        through project management and software development.
                    </p><br></br>
                    </section>
                </div>
            </ZoomIn>
        );
    }
}


/**Animation wobble effect from react-animations
 * @class
 */
class AnimateFadeIn extends Component {
    render() {
        return (
            <FadeIn>
                {/* <a href={this.props.href}><img src={this.props.src} alt='Menu' style={{
                    height,
                    width
                }}></img>
                </a> */}
                <div style={{ color: "white", marginLeft: "100px", fontSize: "1.5em" }}>
                    {/* <h2>About Me</h2> */}
                    <section>

                        <p ><strong> Best way to contact me is by text your name to 1-956-792-4128</strong></p>
                        <p >Alternatively of course, you can call the same number.</p>
                        <p > Or send an email to stevenbowler@yahoo.com</p>
                        <p >It will be my pleasure to help you and your team reach your goals.</p>
                        <p >Sincerely, </p>
                        <p >Steven Bowler</p>
                        <p >stevenbowler@yahoo.com</p>
                        <p >1-956-792-4128</p>
                        <br></br>
                    </section>
                </div>
            </FadeIn>
        );
    }
}


/**Animation wobble effect from react-animations
 * @class
 */
class AnimateWobble extends Component {
    render() {
        return (
            <Wobble>
                <a href={this.props.href}><img src={this.props.src} alt='Menu' style={{
                    height,
                    width
                }}></img>
                </a>
            </Wobble>
        );
    }
}



class AnimateRotateInDownLeft extends Component {
    render() {
        return (
            <RotateInDownLeft><a style={{ color: "white" }} href={this.props.href}><img src={this.props.src} alt='Menu' style={{
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
                color: "white",
                height,
                width
            }}></img></a></RotateInDownRight>
        )
    }
}

export { AnimateWobble, AnimateRotateInDownLeft, AnimateRotateInDownRight, AnimateZoomIn, AnimateFadeIn }





