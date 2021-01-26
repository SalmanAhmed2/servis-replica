import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../App.css'
function Header() {
    const nav1 = [
        {ID: 1, label: "Home"},
        {ID: 2, label:  "Browse Products"},
        {ID: 3, label: "Find a Store"},
    ]
    const nav2 =[
        {ID: 1, label: "About Us"},
        {ID: 2, label: "Contact Us"},
        {ID: 3, label: <SearchIcon/>}
    ]
    return (
          <div><div className="headerItems">
          {
          nav1.map(item =>
              <>
              <ul key={item.ID} className="noul">
                  <li>{item.label}</li>
              </ul>
              </>
          )}
          
            <img className="logo" src={('http://pakkapapita.com/servis/wp-content/uploads/2017/09/servis-logo-resized.png')} />
            {
                nav2.map(item=>
                  <>
                  <ul className="noul"><li>
                          {item.label}
                      </li>
                  </ul></>)
            }
  <div className="headLine"></div>
  </div>
  </div>
    )
}

export default Header
