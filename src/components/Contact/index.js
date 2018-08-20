import React from 'react';
import '../../styles/contact.scss';

const Contact = () => (
  <div className="contactContainer">
    <section className="middleBox" style={{fontSize:"16px", width:"100%"}}>
        <img alt="logo" src={process.env.PUBLIC_URL + "/imgs/dieRever.png"} />
        <p style={{color:"#ff6666", fontSize:"1.5em"}}><b>Thank you for visiting! :)</b></p>
        <p>skyho31@naver.com</p>
        <a href="https://github.com/skyho31" style={{color:'black', fontSize:'1.5em', fontFamily:'Open Sans Condensed, sans-serif'}}>https://github.com/skyho31</a>
        <p>test1</p>
    </section>
  </div>
);

export default Contact;
