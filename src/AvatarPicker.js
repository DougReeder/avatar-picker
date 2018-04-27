import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

function fakeFetch(url) {
    return new Promise(function(resolve, reject) {
        let response = new Response("foo", {status: 200, statusText: "OK"});
        setTimeout(resolve, 1000, response);
    });
}

class AvatarPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: props.initialId,
            isCurrentActive: false,
            pickerDisplayed: false,
            spinnerId: null
        };
        // console.log("constructing AvatarPicker", props, this.state);
    }

    findAvatarById(avatarId) {
        return this.props.avatars.find( (avatar) => {
            return avatar.id === avatarId;
        });
    }

    clickOutside(evt) {
        // console.log("clickOutside", evt);
        this.setState({isCurrentActive: false, pickerDisplayed: false});
    }

    clickPopup(evt) {
        evt.stopPropagation();
    }

    clickCurrent(evt) {
        // console.log("clickCurrent", evt, !this.state.pickerDisplayed);
        this.setState({isCurrentActive: !this.state.pickerDisplayed, pickerDisplayed: !this.state.pickerDisplayed});
        evt.stopPropagation();
    }

    clickSelect(avatarId, evt) {
        console.log("clickSelect", avatarId);
        evt.stopPropagation();
        if (avatarId === this.state.currentId) {
            this.setState({isCurrentActive: false, pickerDisplayed: false});
            return;
        }
        this.setState({isCurrentActive: false, spinnerId: avatarId});
        fakeFetch("https://example.com/api/foo").then((response) => {
            // console.log("fetch response:", response);
            this.setState({currentId: avatarId, pickerDisplayed: false, spinnerId: null})
        });
    }

    render() {
        let currentAvatar = this.findAvatarById(this.state.currentId);
        // console.log("currentAvatar:", currentAvatar);

        let pickerClasses = ['picker'];
        if (!this.state.pickerDisplayed) {
            pickerClasses.push('hidden');
        }
        let avatars = this.props.avatars.map((avatar) => {
            return <Avatar key={avatar.src} pic={avatar.src}
                           isSelected={avatar.id === this.state.currentId}
                           isSpinning={avatar.id === this.state.spinnerId}
                           onClick={(evt) => this.clickSelect(avatar.id, evt)}/>;
        });
        let picker = (
            <div className={pickerClasses.join(' ')} onClick={(evt) => this.clickPopup(evt)}>
                <div className="centeredBoxes" style={{color:"white"}}>
                    Choose your avatar
                </div>
                <div className="wrappedBoxes">
                {avatars}
                </div>
            </div>
        );

        return (
            <div onClick={(evt) => this.clickOutside(evt)}>
                <div className="centeredBoxes">
                    <Avatar pic={currentAvatar.src} isActive={this.state.isCurrentActive} onClick={(evt) => this.clickCurrent(evt)}/>
                </div>

                {picker}
            </div>
        );
    }
}

AvatarPicker.propTypes = {
    initialId: PropTypes.number.isRequired,
    avatars: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AvatarPicker;
