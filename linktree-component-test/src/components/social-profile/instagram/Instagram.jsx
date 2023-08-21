import React, { useState, useEffect } from "react";
import './styles.css';
import SlidableDrawer from "../../slidable-drawer/SlidableDrawer";

const Instagram = (props) => {
    const defaultData = {
        username: 'Username',
        profilePicture: 'https://images.template.net/79142/Free-Simple-Person-Vector-jpg-1.jpg',
        fullName: 'Instagram User',
    }

    const [userInfo, setUserInfo] = useState(defaultData);

    const [isVisible, setIsVisible] = useState(false);

    function openDrawer() {
        setIsVisible(true);
    }

    function closeDrawer() {
        setIsVisible(false);
    }


    useEffect(() => {
        if (!getAccessToken()) alert('Something went wrong');
    }, []);

    useEffect(() => {
        localStorage.setItem(props.username, JSON.stringify(userInfo));
        console.log('userInfo from useEffect', userInfo);
    }, [userInfo]);


    async function getAccessToken() {

        if (localStorage.getItem(props.username) !== null && localStorage.getItem(props.username) !== JSON.stringify(defaultData)) {
            setUserInfo(() => JSON.parse(localStorage.getItem(props.username)));
            console.log('userInfo from localStorage', userInfo);
            return true;
        }

        return true
        const url = "https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?ig=" + props.username + "&response_type=short&corsEnabled=false";
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f7313c1369msh0fd7e8a38e02fcfp107110jsn862440bb8ed3',
                'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
            }
        }
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log('result', result);
            const res = {
                username: result[0].username,
                profilePicture: result[0].profile_pic_url,
                fullName: result[0].full_name,
            }
            setUserInfo(() => res);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    function getInstagramIframeHtml(username) {
        const url = `https://www.instagram.com/${username}/embed/`;
        return <iframe src={url} style={{
            width: "100%",
            height: "480px",
            border: "none",
        }} title="Instagram Profile"></iframe>;
    }


    return (
        <>
            <div className="instagram-profile-btn-slider" onClick={() => openDrawer()}>
                <img src={userInfo.profilePicture} loading="lazy" crossOrigin="anonymous" alt="profile" className="instagram-profile-img" />
                <div className="instagram-profile-info">
                    <div className="instagram-profile-fullname">{userInfo.fullName}</div>
                    <div className="instagram-profile-username">@ {userInfo.username}</div>
                </div>
            </div>

            <SlidableDrawer  isVisible={isVisible} closeAction={closeDrawer} JSXcontent={getInstagramIframeHtml(props.username)} />

        </>


    );
}

export default Instagram;