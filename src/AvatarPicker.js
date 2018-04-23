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
        fakeFetch("https://example.com/api/foo").then((response) => {
            // console.log("fetch response:", response);
            this.setState({currentId: avatarId, pickerDisplayed: false})
        })
    }

    render() {
        let currentAvatar = this.findAvatarById(this.state.currentId);
        // console.log("currentAvatar:", currentAvatar);

        let picker;
        if (this.state.pickerDisplayed) {
            let avatars = this.props.avatars.map((avatar) => {
                return <Avatar key={avatar.src} pic={avatar.src} isSelected={avatar.id === this.state.currentId} onClick={() => this.clickSelect(avatar.id)}/>;
            });
            picker = (
                <div className="picker">
                    <div className="centeredBoxes" style={{color:"white"}}>
                        Choose your avatar
                    </div>
                    <div className="wrappedBoxes">
                    {avatars}
                    </div>
                </div>
            );
            // let rows = [<div key="ABC">Choose your avatar</div>];
            // for (let i=0; i<this.props.avatars.length % 4; ++i) {
            //     let cells = [];
            //     for (let j=0; j<4; ++j) {
            //         let avatar = this.props.avatars[i*4+j];
            //         if (avatar) {
            //             cells.push(<Avatar key={avatar.src} pic={avatar.src}/>)
            //         } else {
            //             cells.push(<div class="avatarCell"/>)
            //         }
            //     }
            //     rows.push(
            //         <div key={i}>
            //             {cells}
            //         </div>
            //     )
            // }
        }
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