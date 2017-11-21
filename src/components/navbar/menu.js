import React from 'react';
import { connect } from 'react-redux';
import {mapDispachToProps,mapStateToProps} from "../../stores/all";
import { Navbar,Nav,NavItem,NavDropdown,MenuItem,Button,ButtonToolbar } from 'react-bootstrap';



const Tests = ({sumar,restar,title}) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
                <NavItem eventKey={4} href="#">Link</NavItem>
                <NavItem eventKey={5} href="#">Link</NavItem>
                <NavItem eventKey={6} href="#">Link</NavItem>
                <NavItem eventKey={7} href="#">Link</NavItem>
                <NavItem eventKey={8} href="#">Link</NavItem>
                <NavItem eventKey={9} href="#">Link</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default connect(mapStateToProps,mapDispachToProps)(Tests);