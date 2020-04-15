import React from 'react';
import { Modal, Button } from 'react-materialize';
import './style.css';


const aboutTrigger = <Button className="about btns waves">About</Button>

export default function About() {
    return(
        <p>
            <Modal
                className="modal"
                actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                id="Modal-0"
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                header="About"
                trigger={aboutTrigger}>
                <br/>
                <strong>Game Design</strong>
                Andy Richard<br/>
                Robin Aguilar
                <br/><br/>
                <strong>Project Management, Back-end</strong>
                Robin Aguilar
                <br/><br/>
                <strong>Story, Front-end</strong>
                Andy Richard<br/>
                <br/>
                <strong>Copyright</strong>
                Grävy Design Co. MMXX
            </Modal>
        </p>
    )

}