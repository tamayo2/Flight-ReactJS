import React from "react";
import { RxCalendar } from "react-icons/rx";

const Info = () => {
    return (
        <div className="info section">
            <div className="infoContainer container">

                <div className="titleDiv flex">
                    <h2>Travel to Make memories all around the world</h2>
                    <button className="btn">
                        View All
                    </button>
                </div>

                <div className="cardsDiv grid">
                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                        <RxCalendar />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Info;