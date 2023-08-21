import Drawer from "react-bottom-drawer";
import React, { useCallback } from "react";
import './styles.css';
export default function SlidableDrawer(props) {

    const onClose = useCallback(() => props.closeAction(), []);
    return (
        <Drawer
            className="drawer"
            isVisible={props.isVisible}

            onClose={onClose}
        >
            {props.JSXcontent}

        </Drawer>
    );
}