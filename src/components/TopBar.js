
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';


export default function TopBar(){
    return(
        <Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: '5px 0 0 20px',padding: "0 1500px 0px 0px"}} href="#home">
        <img style ={{height:"50px" }}  src="https://mms.businesswire.com/media/20210331005579/en/868438/5/instacart-logo-wordmark-4000x1600-e4f3c6f.jpg?download=1&_gl=1*pfj48n*_ga*MTY0MzQ5ODYyMS4xNjkxMzQxNTM0*_ga_ZQWF70T3FK*MTY5MTM0MTUzMy4xLjAuMTY5MTM0MTUzMy42MC4wLjA."/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button> {" "}
        </Nav>
    </Navbar.Collapse>

</Navbar>
    )
}


