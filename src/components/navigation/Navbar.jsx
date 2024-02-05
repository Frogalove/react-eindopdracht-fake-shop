
import {NavLink} from "react-router-dom";



//import {AuthContext} from "../../context/Auth_context.jsx";



//import React,{useContext, useState} from "react"
function Navbar (){

  return (
    <nav className="outer-container-nav">
      <div className="inner-container-navigation">
        <ul className="nav-container">

          <>
            <li>
              <NavLink to="/home"

                       className={({isActive}) => isActive === true ? "active-link" : "default-link"}
              >HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/fashion"

                       className={({isActive}) => isActive === true ? "active-link" : "default-link"}
              >FASHION
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorite"

                       className={({isActive}) => isActive === true ? "active-link" : "default-link"}
              >FAVORITE
              </NavLink>
            </li>
            <li>
              <NavLink to="/lifestyle"

                       className={({isActive}) => isActive === true ? "active-link" : "default-link"}
              >LIFESTYLE
              </NavLink>
            </li>
            <li>

            </li>


          </>
        </ul>
      </div>
    </nav>
  )


}

export default Navbar;
