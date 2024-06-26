import React, {useState} from "react";

import { BsPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../assets/logo.png";
import { SiConsul } from "react-icons/si";

const Navbar = () => {

    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }

    const removeNavBar = () => {
        setActive('navBarMenu')
    }


    return (
        <div className='navBar flex'>

            <div className="navBarOne flex">
                <div>
                <SiConsul className="icon"/>
                </div>

                <div className="none flex">
                    <li className="flex"><BsPhoneVibrateFill className="icon"/>Support</li>
                    <li className="flex"><AiOutlineGlobal className="icon"/>Languages</li>
                </div>

                <div className="atb flex">
                    <span>Sign in</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className="navBarTwo flex">

                <div className="logoDiv">
                    <img src={logo} className="logo"/>
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home</li>
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Offers</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">Destinations</li>
                    </ul>

                    <button onClick={removeNavBar} className="btn flex btnOne">
                        Contact
                    </button>
                </div>

                <button className="btn flex btnTwo">
                    Contact
                </button>

                <div onClick={showNavBar} className="toggleIcon">
                <CgMenuGridO className="icon"/>
                </div>

            </div>
        </div>
    )
}

export default Navbar;