import React from "react";
import video from "../../Assets/video.mp4";

const Home = () => {
    return (
        <div className="home flex container">

            <div className="mainText">
                <h1>Create Ever-lasting Memories With Us</h1>
            </div>

            <div className="homeImages flex">

                <div className="videoDiv">
                    <video src="" className="video"></video>
                </div>

                <img src="" className="plane" />
            </div>
        </div>
    )
}

export default Home;