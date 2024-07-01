import React from "react";
import newyork from "../../assets/newyork.jpg";
import dubai from "../../assets/dubai.jpg";
import paris from "../../assets/paris.jpg";
import colombia from "../../assets/colombia.jpg";

import traveler1 from "../../assets/traveler1.jpg";
import traveler2 from "../../assets/traveler2.jpg";
import traveler3 from "../../assets/traveler3.jpg";
import traveler4 from "../../assets/traveler4.jpg";

const travelers = [
    {
        id: 1,
        destinationImage: newyork,
        travelerImage: traveler1,
        travelerName: "John Doe",
        socialLink: "@Juan_Tamayo21"
    },

    {
        id: 2,
        destinationImage: dubai,
        travelerImage: traveler2,
        travelerName: "John Doe",
        socialLink: "@Juan_Tamayo21"
    },

    {
        id: 3,
        destinationImage: paris,
        travelerImage: traveler3,
        travelerName: "John Doe",
        socialLink: "@Juan_Tamayo21"
    },

    {
        id: 4,
        destinationImage: colombia,
        travelerImage: traveler4,
        travelerName: "John Doe",
        socialLink: "@Juan_Tamayo21"
    }

]
const Travelers = () => {
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2>
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid">

                    {
                        travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
                            return(
                                <div key={id} className="singleTraveler">
                                    <img src={destinationImage} className="destinationImage"/>

                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} className="travelerImage"/>
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Travelers;