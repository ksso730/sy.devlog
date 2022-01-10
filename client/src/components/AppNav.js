import React, { Fragment } from 'react'
import { Navbar, Container, NavbarToggler, Collapse, Nav} from 'reactstrap'
import {Link} from 'react-router-dom'

const AppNav = () => (
    <Fragment>
        <Navbar color="dark" dark expand="lg" className='sticky-top'>
            <Container>
                <Link to ="/" className="text-white text-decoration-none">
                    SY.dev
                </Link>
                <NavbarToggler/>
                <Collapse isOpen={true} navbar>
                    <Nav id="header-nav" navbar>
                        {true? (
                            <h1 className='text-white'>authLink</h1>
                         ) : (<h1>guestLink</h1>)}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </Fragment>
)

export default AppNav;