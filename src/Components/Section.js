import React from 'react';
import Banner from './Images/Banner.jpg';
import men from './Images/men.jpg';
import women from './Images/women.jpg';
import kids from './Images/kids.jpg'
function Section() {
    return (
        <div>
          <div className="Banner">
            <img src={Banner} className="banerIMG"  alt="image"/>
          </div>
          <div className="Categories">
            <div className="Men effect"><img src={men} className="image"/>
            <div className="title">Men</div>
            </div>
            <div className="Women effect"><img src={women}  className="image"/>
            <div className="title">Women</div>
            </div>
            <div className="Kids effect "><img src={kids}  className="image"/>
            <div className="title">Kids</div>
            </div>
          </div>
          <div className="info">
          <div className="infos">
            <h1>
            SHOES FOR EVERYONE
            </h1>
            <p>Servis has been your companion in happiness, both big and small, for over 50 years. Our roots are firmly grounded in Pakistan and with its people.</p>
            <div className="red">
              <div className="aboutUS">About Us</div>
            <div className="locator">Store Locator</div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default Section;
