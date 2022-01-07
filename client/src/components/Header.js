import React from "react";
import {Row, Col} from 'reactstrap'

const Header = () => {
    return (
        <div id="page-header" className="mb-3 align-me">
            <Row>
                <Col sm="6" sm="auto" className="m-auto">
                    <h1>SUYEON KIM</h1>
                    <p>Welcome here, I am back-end developer .</p>
                </Col>
            </Row>
        </div>
    )
}

export default Header;