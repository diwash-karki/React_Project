import React from "react";
import './styles.css';
import SlidableDrawer from "../slidable-drawer/SlidableDrawer";
import { useState } from "react";

function SpotifyPreview(props) {
    const [isVisible, setIsVisible] = useState(false);

    function openDrawer() {
        setIsVisible(true);
    }

    function closeDrawer() {
        setIsVisible(false);
    }

    const iframe = (width, height) => <iframe src={props.url} width={width} height={height} frameBorder="0" loading="lazy" allowtransparency="true" allow="encrypted-media" />;
    return (
        <div className="spotify-content-holder">
            <div className="spotify-preview" onClick={() => openDrawer()}>
                {iframe("100%", "200px")}
            </div>
            <SlidableDrawer isVisible={isVisible} closeAction={closeDrawer} JSXcontent={iframe("100%", "480px")} />
        </div>

    )
}

export default SpotifyPreview;