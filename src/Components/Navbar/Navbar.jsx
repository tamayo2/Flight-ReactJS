import React from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
    return (
        <div className='navBar flex'>

            <div className="navBarOne flex">
                <div>
                <SiConsul className="icon"/>
                </div>

                <div className="none flex">
                    <li className="flex"> <BsPhoneVibrateFill className="icon"/>Support</li>
                    <li className="flex"><AiOutlineGlobal className="icon"/>Languages</li>
                </div>

                <div className="atb flex">
                    <span>Sign in</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className="navBartTwo">

                <div className="logoDiv">
                    <img src={Logo} />
                </div>

                <div className="navBarMenu">
                    <ul className="menu flex">
                        <li className="listItem">Home</li>
                        <li className="listItem">About</li>
                        <li className="listItem">Offers</li>
                        <li className="listItem">Seats</li>
                        <li className="listItem">Destinations</li>
                    </ul>

                    <button className="btn flex btnOne">
                        Contact
                    </button>
                </div>

                {/* <button className="btn flex btnTwo">
                    Contact
                </button> */}

                <div className="toggleIcon">
                <CgMenuGridO />
                </div>

            </div>
        </div>

    )
}

export default Navbar;