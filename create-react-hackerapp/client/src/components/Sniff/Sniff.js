import React from 'react';
import { Button } from 'react-materialize';
import './style.css';

function Sniff() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    var element = document.getElementById("myDIV");
    element.classList.toggle("disabled pulse");
  }

  return (
    <div className="center">
      <br/><br/><br/><br/><br/>
      <Button onClick={handleClick} className="btn-floating btn-large size pulse" id="">Sniff</Button>
    </div>
  );

}

export default Sniff;