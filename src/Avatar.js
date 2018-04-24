import React from 'react';

function Avatar(props) {
    // console.log("Avatar", props);
    let classes = ["avatar"];
    if (props.isActive) {
        classes.push('active');
    } else if (props.isSelected) {
        classes.push("selected");
    } else if (props.isSpinning) {
        classes.push("spinner");
    }
    let avatarStyle = {"backgroundImage": 'url(' + props.pic + ')'};
    return (
        <div className="avatarCell" onClick={props.onClick}>
            // TODO: add another div behind pic, for a proper spinner
            <div className={classes.join(' ')} style={avatarStyle}></div>
        </div>
    );
}

export default Avatar;