import React, { Component } from 'react';
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

    clickCurrent() {
        console.log("clickCurrent", !this.state.pickerDisplayed);
        this.setState({pickerDisplayed: !this.state.pickerDisplayed})
    }

    clickSelect(avatarId) {
        console.log("clickSelect", avatarId);
        if (avatarId === this.state.currentId) {
            this.setState({pickerDisplayed: false});
            return;
        }
        this.setState({spinnerId: avatarId});
        fakeFetch("https://example.com/api/foo").then((response) => {
            // console.log("fetch response:", response);
            this.setState({currentId: avatarId, pickerDisplayed: false, spinnerId: null})
        })
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
                           onClick={() => this.clickSelect(avatar.id)}/>;
        });
        let picker = (
            <div className={pickerClasses.join(' ')}>
                <div className="centeredBoxes" style={{color:"white"}}>
                    Choose your avatar
                </div>
                <div className="wrappedBoxes">
                {avatars}
                </div>
            </div>
        );

        return (
            <div>
                <div className="centeredBoxes">
                    <Avatar pic={currentAvatar.src} isSelected={true} onClick={() => this.clickCurrent()}/>
                </div>

                {picker}
            </div>
        );
    }
}

export default AvatarPicker;