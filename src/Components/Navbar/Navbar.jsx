import React from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

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
                    <img src="" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Navbar;