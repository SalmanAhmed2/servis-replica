import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shoe1 from './Images/shoe1.jpg';
import shoe2 from './Images/shoe2.jpg';
import shoe3 from './Images/shoe3.jpg';
import shoe4 from './Images/shoe4.jpg';
import shoe5 from './Images/shoe5.jpg';
import shoe6 from './Images/shoe6.jpg';
import shoe7 from './Images/shoe7.jpg'
import shoe8 from './Images/shoe8.jpg'
import shoe9 from './Images/shoe9.jpg'
import shoe10 from './Images/shoe10.jpg'
import shoe11 from './Images/shoe11.jpg'
import shoe12 from './Images/shoe12.jpg'

function Collections() {

    return (
        <>
        <div className="collection">
            
             
              <div className="collections">
        
        <div className="line1"></div>
          <div className="colHead">LATEST COLLECTION</div>
        <div className="line2"></div>
        
            </div>
             

        <div className="shoesCollections">

        <div className="shoess1">
        <div className="shoe1 ">
            <img src={shoe1}/>
        </div>
        
        <div className="shoess2">
        
        <div className="shoe2 ">
            <img src={shoe2}/>
        </div>

        <div className="shoess34">
        
        <div className="shoe3 ">
            <img src={shoe3} />
        </div>

        <div className="shoe4 ">
            <img src={shoe4}/>
        </div>
        </div>

        </div> 
    </div>
        </div>

        <div className="shoes5678">

            <div className="shoes56">
            <div className="shoe5">
            <img src={shoe5}/>
        </div>        

        <div className="shoe6">
            <img src={shoe6}/>
        </div>
          </div>
        
        <div className="shoe78">
        <div className="shoe7">
            <img src={shoe7}/>
        </div>
        
        <div className="shoe8">
         <img src={shoe8}/>
        </div>

        </div>

        </div>

                 <div className="trending">
                <div className="trendHead">
                <div className="line3"></div>
                TRENDING THIS MONTH
                <div className="line4"></div>
                </div>
             
       
             <div className="trendItems">

              <div className="shoe91011">
              <div className="shoe9"> 
                 <img src={shoe9} className="qvIMG"/>
                 <div className="middle">
                     <div className="qv">Quick View</div>
                 </div>
                 </div>
 
                 <div className="shoe10"> 
                 <img src={shoe10} className="qvIMG"/>
                 <div className="middle">
                     <div className="qv">Quick View</div>
                 </div>
                 </div>
 
                 <div className="shoe11"> 
                 <img src={shoe11} className="qvIMG"/>
                 <div className="middle">
                     <div className="qv">Quick View</div>
                 </div>
                 </div>
              </div>
 
                 <div className="shoe12">
                 <img src={shoe12} className="qvIMG"/>
                 <div className="middle">
                     <div className="qv">Quick View</div>
                 </div>
             </div> 
 
 
        
             </div>    
             </div>
             
            
 
             </div>
        </>
    )
}

export default Collections
