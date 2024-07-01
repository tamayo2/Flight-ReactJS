import React from "react";
import newyork from "../../assets/newyork.jpg";
import traveler1 from "../../assets/traveler1.jpg";

const Travelers = () => {
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2>
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid">

                    <div className="singleTraveler">
                        <img src={newyork} className="destinationImage"/>

                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={traveler1} className="travelerImage"/>
                            </div>
                            <div className="travelerName">
                                <span>John Doe</span>
                                <p>@Juan_Tamayo21</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Travelers;