import React from "react";

const Subscribe = () => {
    return (
        <div className="subscribe section">
            <div className="sectionContainer container">
                <h2>Subscribe Newsletters & get latest news</h2>
                <div className="inputDiv flex">
                    <input type="text" placeholder="Enter your email address" />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;