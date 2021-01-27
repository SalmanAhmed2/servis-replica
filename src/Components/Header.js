import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../App.css'
function Header() {

        return (
            <>
              <div className="headerItems">
              <ul className="noul">
                  <li active>Home</li>
                  <li>
                  <div class="dropdown"> Browse Products<div class="dropdown-content">
                   <table>
                       <thead>
                           <tr>
                               <th>Men</th>
                               <th>Women</th>
                               <th>Kids</th>
                               <th>Accessories</th>
                           </tr>
                           </thead>
                           <tr>
                               <td>Shoes</td>
                               <td>Flat</td>
                               <td>Boys</td>
                               <td>Belts</td>
                           </tr>
                           <tr>
                                <td>Shoes</td>
                               <td>Flat</td>
                               <td>Boys</td>
                               <td>Belts</td>
                           </tr>
                           <tr>
                                <td>Sandles & Slipers</td>
                               <td>Sandles & Slipers</td>
                               <td></td>
                               <td></td>
                           </tr>
                   </table>
                  </div>
                   </div>
                  </li>
                  <li>Find a Store</li>
                </ul>
                   <img className="logo" src={('http://pakkapapita.com/servis/wp-content/uploads/2017/09/servis-logo-resized.png')} />
                  <ul className="noul2">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li><SearchIcon/></li>
              </ul>
              </div>
               <div className="headLine"></div>
            </>
    )
}

export default Header
