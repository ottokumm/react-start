import * as React from 'react';
import logo from 'assets/logo.svg'
import { useStyles } from './styles';

export const LandingPage = () => {
    const classes = useStyles();
    
    return (
      <div className="App">
        <header className={classes.header}>
          <img src={logo} className={classes.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={classes.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }