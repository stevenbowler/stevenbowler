//@ts-check
/**@module */
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { connect } from 'react-redux';
import {
    AnimateZoomIn,
}
    from "../components/Animations/Animations";

/**
 * if route/resource not found display this page
 * @function NoMatch
 */
function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>About Me</h1>
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
                        <AnimateZoomIn>
                            {/* <div style={{ color: "white" }}>
                                {/* <h2>About Me</h2> */}
                            {/* <section>
                                <img src="/IMG_3192.JPG" alt="SB photo" height="100px"
                                    width="160px"></img>
                                <p ><strong> Husband to Laura, father to Alan and Eva - and we have 7
                    dogs too.</strong>
                                </p>
                                <p >I offer proven project management and hands-on technical skill, leadership, good communication, and above all, a successful addition to your team.
                    </p>
                                <p > Starting January 2020 I am enrolled in both: Masters
                                Science in Information Technology at University of Texas Rio Grande Valley; and, the Coding Bootcamp
                                program at University
                                of Texas Austin. Professional development in these areas will complement my hands-on experience and
                                enable me to provide good solutions to business problems.
                    </p>
                                <p > There are significant opportunities to solve customer or issues
                                through project management and software development.
                    </p>
                            </section>
                            </div> */}
                        </AnimateZoomIn>
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

export default connect(mapStateToProps)(NoMatch);
// export default NoMatch;
