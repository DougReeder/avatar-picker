import React from 'react';
import PropTypes from 'prop-types';

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
            <div className={classes.join(' ')} style={avatarStyle}></div>
        </div>
    );
}

Avatar.propTypes = {
    pic: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    isSelected: PropTypes.bool,
    isSpinning: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Avatar;
