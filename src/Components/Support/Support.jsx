import React from "react";
import gridImage from "../../assets/Image-Grid.jpg";

const Support = () => {
    return (
        <div className="support container section">
            <div className="sectionContainer">

                <div className="tittlesDiv">
                    <small>travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect along the journey</p>
                </div>

                <div className="infoDiv grid">

                    <div className="textDiv grid">
                        <div className="singleInfo">
                            <span className="number">01</span>
                            <h4>Travel requirements for dubai</h4>
                            <p>Find out what you need to know before you travel to Dubai</p>
                        </div>

                        <div className="singleInfo">
                            <span className="number">02</span>
                            <h4>Travel requirements for dubai</h4>
                            <p>Find out what you need to know before you travel to Dubai</p>
                        </div>

                        <div className="singleInfo">
                            <span className="number">03</span>
                            <h4>Travel requirements for dubai</h4>
                            <p>Find out what you need to know before you travel to Dubai</p>
                        </div>
                    </div>

                    <div className="imgDiv">
                        <img src={gridImage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;