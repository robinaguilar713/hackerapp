import React from 'react';
import { Button, } from 'react-materialize';
import About from '../About/About'
import Options from '../Options/Options'
import './style.css';

export default function Home() {
    return(
        <div className="container">
            <div className="glitch" id="welcome">HackerApp</div>
            <br/><br/><br/>
            <div className="wrapper center">
                <Button className="start btns waves">Start</Button><br/>
                <Options/>
                <About/>
                
            </div>
        </div>
    )

}

