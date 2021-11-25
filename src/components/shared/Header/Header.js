
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container >
                    <Navbar.Brand href="#">VISSION EYE HOSPITAL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">VISSION EYE HOSPITAL</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/home" >Home</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/services">SERVICES</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/doctor" >FIND AN EYE DORCTOR</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/patientcare">PATIENT CARE</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/healthtips" >HEALTH TIPS</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/aboutus">ABOUT US</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/contact">CONATACT </Link>
                                {
                                    user.email ? <div>
                                        <h4 >{user.displayName ? user.displayName : user.email.substring(0, user.email.lastIndexOf("@"))}</h4>
                                        <Button onClick={logOut} style={{ marginTop: "15px" }}>Log Out</Button>
                                    </div> : <div>
                                        <Link style={{ textDecoration: 'none', marginRight: "15px" }} to="/login">Sign In</Link>
                                        <Link style={{ textDecoration: 'none' }} to="/register">Sign up</Link>

                                    </div>

                                }

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;