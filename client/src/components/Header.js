import React from "react";
import {Container, Row, Col} from 'reactstrap'

const Header = () => {
    return (
        // <div id="page-header" className="mb-3 align-me">
        <Container id="page-header">
            <Row>
                <Col md="6" sm="auto" className="m-auto header_text">
                    <h1>SUYEON KIM</h1>
                    <p>Welcome here, I am back-end developer .</p>
                </Col>
                <Col md="6">
                    <img id="header-back" className="rotate"
                        src="https://user-images.githubusercontent.com/28856435/148561938-34be59b5-86ca-4699-8d54-21238462500e.png"/>
                </Col>
            </Row>
        </Container>
        // </div>
    )
}

export default Header;