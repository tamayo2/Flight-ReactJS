import React from "react";
import newyork from "../../assets/newyork.jpg";

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
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Travelers;