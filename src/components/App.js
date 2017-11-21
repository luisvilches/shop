import React from 'react';
import { connect } from 'react-redux';
import {mapDispachToProps,mapStateToProps} from "../stores/all";
import { Button,ButtonToolbar } from 'react-bootstrap';

// components
import Navbar from "./navbar/navbar";


const App = ({num,sumar,restar}) => (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h1 className="App-title">Example Redux</h1>
      </header>
      <p className="App-intro">
        <h2>{num}</h2>
      </p>
      <ButtonToolbar>
        <Button onClick={() => sumar(10)}>Sumar</Button>
        <Button onClick={() => restar(10)}>Restar</Button>
      </ButtonToolbar>
    </div>
  )

export default connect(mapStateToProps,mapDispachToProps)(App);


/**
 * 
 */



 //{React.cloneElement(this.props.children, {})}