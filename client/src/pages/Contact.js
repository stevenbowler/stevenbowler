//@ts-check
/**@module */
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { connect } from 'react-redux';
import {
    AnimateFadeIn,
}
    from "../components/Animations/Animations";

/**
 * if route/resource not found display this page
 * @function Contact
 */
function Contact() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Contact</h1>
                        <h1>
                            <span role="img" aria-label="Face With Rolling Eyes Emoji">

                            </span>
                        </h1>

                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Container>
                        <AnimateFadeIn>
                        </AnimateFadeIn>
                    </Container>
                </Col>
            </Row>
        </Container >
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

export default connect(mapStateToProps)(Contact);
// export default NoMatch;
