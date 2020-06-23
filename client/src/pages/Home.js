//@ts-check
/**@module */
import React from "react";
// import "./Home.css";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { connect } from 'react-redux';
import {
    AnimateWobble,
    AnimateRotateInDownLeft,
    AnimateRotateInDownRight
}
    from "../components/Animations/Animations";




/**
 * handle the Tutorial button event, play the tutorial for this app
 * @function tutorial
 */
// const jigglereact = () => {
//     // window.location.href = "https://jigglereact.herokuapp.com/";
//     window.open('https://jigglereact.herokuapp.com/', '_blank');
// }


/**
 * if route/resource not found display this page
 * @function NoMatch
 */
function Home() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Web Dev Simplified - Click a Burger, See a Solution</h1>
                        {/* <h1>
                            <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                🙄</span>
                        </h1> */}
                    </Jumbotron>
                    <Container>
                        <Row>
                            <AnimateRotateInDownLeft href="https://jigglereact.herokuapp.com/" src="./hamburger.jpg">Google Book Search</AnimateRotateInDownLeft>
                            <AnimateWobble href="https://clickyone.herokuapp.com/" src="./hamburger.jpg">Clicky Game</AnimateWobble>
                            <AnimateRotateInDownRight href="https://googlerbooksearch.herokuapp.com/" src="./hamburger.jpg">Google Book Search</AnimateRotateInDownRight>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
const mapStateToProps = (state) => {
    return {
        username: state.username,
        email: state.email,
        token: state.token,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(Home);
// export default NoMatch;
