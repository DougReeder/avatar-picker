import React from 'react';

function Avatar(props) {
    // console.log("Avatar", props);
    let avatarStyle = {"backgroundImage": 'url(' + props.pic + ')'};
    return (
        <div className="avatarCell" onClick={props.onClick}>
            <div className="avatar" style={avatarStyle}></div>
        </div>
    );
}

export default Avatar;