import React from 'react';
import ReactDOM from 'react-dom';
import AvatarPicker from './AvatarPicker';

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     let avatarPicker = ReactDOM.render(<AvatarPicker />, div);
//     ReactDOM.unmountComponentAtNode(div);
// });

it('renders without crashing', () => {
    shallow(<App />);
});

it('initializes currentId from initialId', () => {
    const wrapper = mount(<AvatarPicker {...{ initialId: 1 }} />);
    expect(wrapper.state('currentId')).to.equal(1);
});