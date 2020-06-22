//@ts-check
/**@module */
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { connect } from 'react-redux';
import { Button } from "reactstrap";



/**
 * handle the Tutorial button event, play the tutorial for this app
 * @function tutorial
 */
const jigglereact = () => {
    window.location.href = "https://jigglereact.herokuapp.com/";
    // window.open('https://jigglereact.herokuapp.com/', '_blank');
}

/**
 * handle the Tutorial button event, play the tutorial for this app
 * @function tutorial
 */
const clickyone = () => {
    window.location.href = "https://clickyone.herokuapp.com/";
    // window.open('https://clickyone.herokuapp.com/', '_blank');
}

/**
 * handle the Tutorial button event, play the tutorial for this app
 * @function tutorial
 */
const googlebooksearch = () => {
    window.location.href = "https://googlerbooksearch.herokuapp.com/";
    // window.open('https://googlerbooksearch.herokuapp.com/', '_blank');
}

// /**
//  * handle the Tutorial button event, play the tutorial for this app
//  * @function testsite
//  */
// const stevenbowler = () => {
//     window.location.href = "https://googlerbooksearch.herokuapp.com/";
//     // window.open('https://googlerbooksearch.herokuapp.com/', '_blank');
// }


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
                        <h1>Home Page</h1>
                        <h1>
                            <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                🙄
              </span>
                        </h1>
                    </Jumbotron>
                    <Jumbotron>
                        <Button color="dark" float="left" display="inline" onClick={jigglereact}>Jiggle Game</Button>
                        <Button color="dark" float="left" display="inline" onClick={clickyone}>Clicky Game</Button>
                        <Button color="dark" float="left" display="inline" onClick={googlebooksearch}>Google Book Search</Button>
                    </Jumbotron>
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

export default connect(mapStateToProps)(NoMatch);
// export default NoMatch;
