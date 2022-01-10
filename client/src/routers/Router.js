import React, {Fragment} from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppNav from '../components/AppNav'

const MyRouter = () => (
    <Fragment>
        <AppNav/>
        <Header />
            <h1>Hello</h1>
        <Footer />
    </Fragment>
);

export default MyRouter;

