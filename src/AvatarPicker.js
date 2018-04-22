import React, { Component } from 'react';
import Avatar from './Avatar';

class AvatarPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: props.initialId,
            pickerDisplayed: false,
        };
        // console.log("constructing AvatarPicker", props, this.state);
    }

    clickCurrent() {
        console.log("clickCurrent", !this.state.pickerDisplayed);
        this.setState({pickerDisplayed: !this.state.pickerDisplayed})
    }

    render() {
        let currentAvatar = this.props.avatars.find( (avatar) => {
            return avatar.id === this.state.currentId;
        });
        // console.log("currentAvatar:", currentAvatar);

        let picker;
        if (this.state.pickerDisplayed) {
            let avatars = this.props.avatars.map((avatar) => {
                return <Avatar key={avatar.src} pic={avatar.src}/>;
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
                    <Avatar pic={currentAvatar.src} onClick={() => this.clickCurrent()}/>
                </div>

                {picker}
            </div>
        );
    }
}

export default AvatarPicker;