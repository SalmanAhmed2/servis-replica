import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="instaHead">
                <div className="line5"></div>
                FOLLOW ON INSTAGRAM
                <div className="line6"></div>
            </div>
        </div>
         <div className="footNav">
            <div className="links">
                <FacebookIcon /><InstagramIcon/>
                </div>
             <div className="copyrights">Copyrights 2021 © Servis</div>
        </div>
        </>
    )
}

export default Footer
