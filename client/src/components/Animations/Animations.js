import React, { Component, useState } from "react";
import { bounce, pulse, zoomIn, fadeIn } from "react-animations";   // flipInX, flipInY see https://www.npmjs.com/package/react-animations
import styled, { keyframes } from 'styled-components';
import { Tooltip } from "reactstrap";
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

/**
 *       <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        Hello world!
      </Tooltip>
 */

/**Animation wobble effect from react-animations
 * @class
 */
const AnimateZoomIn = (props) => {

    // setTooltipOpen = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    // render() {
    return (
        <ZoomIn>
            <div style={{ color: "white" }} >
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
// }


/**Animation wobble effect from react-animations
 * @class
 */
const AnimateFadeIn = (props) => {
    // render() {
    return (
        <FadeIn>
            <div style={{ color: "white", marginLeft: "100px", fontSize: "1.5em" }}>
                {/* <h2>About Me</h2> */}
                <section>

                    <p ><strong> Best way to contact me is to text your name to 1-956-792-4128</strong></p>
                    <p >Alternatively of course, call the same number.</p>
                    <p >Or send an email to stevenbowler@yahoo.com</p>
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
// }


/**Animation wobble effect from react-animations
 * @class
 */
const AnimateWobble = (props) => {

    const toggle = () => setTooltipOpen(!tooltipOpen);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    // render() {
    return (
        <Wobble>
            <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipWobble" toggle={toggle}>
                Click to enter the Clicky One game.  Test your short term memory by clicking on the images, taking care
                not to click the same image twice, that will end the game.  Register and log in and have your scores noted
                on the top 5 board.
            </Tooltip>
            <a id="TooltipWobble" href={props.href}><img src={props.src} alt='Menu' style={{
                height,
                width
            }}></img>
            </a>
        </Wobble>
    )
    // {/* } */ }
}



const AnimateRotateInDownLeft = (props) => {
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    // render() {
    return (
        <RotateInDownLeft>
            <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipRotateInDownLeft" toggle={toggle}>
                Click to enter the Jiggle React Game.  Use the left/right/up/down keys to move the BlackBox around
                the Texas Longhorns colored gamespace.  Don't let the Fuel Thief touch you he will drain your fuel.
                Stop on top of the React fuel tank as much as possible to fuel up.
            </Tooltip>

            <a id="TooltipRotateInDownLeft" style={{ color: "white" }} href={props.href}><img src={props.src} alt='Menu' style={{
                height,
                width
            }}></img></a></RotateInDownLeft>
    )
}


const AnimateRotateInDownRight = (props) => {
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    // render() {
    return (
        <RotateInDownRight>
            <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipRotateInDownRight" toggle={toggle}>
                Click to enter the Google Book Search. From the home page save any notes you
                wish to your Saved list. Search Google Books by entering any search string from
                the Search page, then add a book to your Saved books.  Register and log
                in to maintain your own personal list.
            </Tooltip>
            <a id="TooltipRotateInDownRight" href={props.href}><img src={props.src} alt='Menu' style={{
                color: "white",
                height,
                width
            }}></img></a></RotateInDownRight >
    )
    // }
}

export { AnimateWobble, AnimateRotateInDownLeft, AnimateRotateInDownRight, AnimateZoomIn, AnimateFadeIn }





