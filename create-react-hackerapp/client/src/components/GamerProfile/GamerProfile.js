import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, CardPanel, Button } from "react-materialize"
import Coin from '../../images/coin.svg'
import { useAuth0 } from "../../react-auth0-spa";
import './style.css'

export default function GamerProfile(){

    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="profile">
            <br/>
            <h1 className="black-text profile-header center"><strong>Profile</strong></h1>
            <Row>
            <Col s={12}>
                <CardPanel className="account black-text center profile-card">
                    <h2 className="center"><strong>Account</strong></h2>
                    <img className="profile-pic" src={user.picture} alt="Profile" />
                    <br/><br/>
                    <strong>Name</strong><br/>
                    {user.name}<br/>
                    <br/>
                    <strong>Username</strong><br/>
                    Johnny_Cra$h<br/>
                    <br/>
                    <strong>Email:</strong><br/>
                    {user.email}<br/>
                    <br/>
                </CardPanel>
            </Col>
            </Row>
            <Row>
            <Col s={12}>
                <CardPanel className="center wallet black-text profile-card">
                    <h2 className="center"><strong>Wallet</strong></h2>
                    <strong>ID</strong> <span className="wallet-id">10981012421</span>
                    <br/>
                    <div>
                        <img alt="coin" className="coin-style" src={Coin} /> <span className="coin-amount">100000.000</span>
                    </div>
                    <br/>
                </CardPanel>
            </Col>
            </Row>
            <Row>
            <Col s={12}>
                <CardPanel className="center botnet black-text profile-card">
                    <div>
                    <h2 className="center"><strong>Botnet</strong></h2>
                    <br/>
                    <strong>Machines Infected</strong><br/>
                    15
                    <br/><br/>
                    <div><h2><strong>Data Types</strong></h2></div>
                    <br/>
                    <div className="container">
                        <span className="left"><strong>Public:</strong>&emsp;8</span>
                        <br/>
                        <span className="left"><strong>Private:</strong>&emsp;2</span>
                        <br/>
                        <span className="left"><strong>Business:</strong>&emsp;3</span>
                        <br/>
                        <span className="left"><strong>Education:</strong>&emsp;1</span>
                        <br/>
                        <span className="left"><strong>Government:</strong>&emsp;2</span>
                        <br/>
                        <span className="left"><strong>Military:</strong>&emsp;0</span>
                        <br/>
                    </div>
                    <br/>
                    </div>
                </CardPanel>
            </Col>
            </Row>
            <div className="center">
            <Link to="/">
                <Button className="white-text profile-button">Back</Button>
            </Link>
            </div>
            <br/><br/>
            <code>{JSON.stringify(user, null, 2)}</code>
        </div>
    )
}
