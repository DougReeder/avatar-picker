import React from 'react';

function Avatar(props) {
    // console.log("Avatar", props);
    let classes = ["avatar"];
    if (props.isSelected) {
        classes.push("selected");
    }
    let avatarStyle = {"backgroundImage": 'url(' + props.pic + ')'};
    return (
        <div className="avatarCell" onClick={props.onClick}>
            <div className={classes.join(' ')} style={avatarStyle}></div>
        </div>
    );
}

export default Avatar;