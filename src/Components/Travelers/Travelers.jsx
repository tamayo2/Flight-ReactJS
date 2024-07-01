import React from "react";
import newyork from "../../assets/newyork.jpg";
import traveler1 from "../../assets/traveler1.jpg";

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
        destinationImage: newyork,
        travelerImage: traveler1,
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