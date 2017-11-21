import React from 'react';
import { connect } from 'react-redux';
import {mapDispachToProps,mapStateToProps} from "../../stores/all";
import { Navbar,Nav,NavItem,NavDropdown,MenuItem,Button,ButtonToolbar } from 'react-bootstrap';

import Tests from "./menu";


const Navbars = ({sumar,restar}) => (
    <div>
        <div style={{backgroundColor:"#222",height:150}} ></div>
        <Tests/>
    </div>
);

export default connect(mapStateToProps,mapDispachToProps)(Navbars);