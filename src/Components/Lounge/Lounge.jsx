import React from "react";
import imageGrid from "../../assets/image-Grid2.jpg";

const Lounge = () => {
    return (
        <div className="lounge container section">
            <div className="sectionContainer grid">

               <div className="imgDiv">
                <img src={imageGrid}/>
                </div> 

                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>

                    <div className="grids grid">

                    <div className="singleGrid">
                        <span className="gridTitle">
                            Help through the airport
                        </span>
                        <p>
                        you can also call airlines to ask about their unaccompanied minor programs.
                        </p>
                    </div>

                    <div className="singleGrid">
                        <span className="gridTitle">
                            Priority Boarding
                        </span>
                        <p>
                        you can also call airlines to ask about their unaccompanied minor programs.
                        </p>
                    </div>

                    <div className="singleGrid">
                        <span className="gridTitle">
                            Care on the flight
                        </span>
                        <p>
                        you can also call airlines to ask about their unaccompanied minor programs.
                        </p>
                    </div>

                    <div className="singleGrid">
                        <span className="gridTitle">
                            Chauffeur-drive service
                        </span>
                        <p>
                        you can also call airlines to ask about their unaccompanied minor programs.
                        </p>
                    </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Lounge;