import React, { Component } from 'react';
import AvatarPicker from './AvatarPicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avatar Picker example</h1>
        </header>
        <p className="App-intro">
        </p>
          <div>
          {/*AvatarPicker is a {typeof AvatarPicker}*/}
          </div>
          <div>
              <AvatarPicker {...{ initialId: 1, avatars: [
                  { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
                  { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
                  { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
                  { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
                  { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
                  { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
              ] }} />
          </div>
      </div>
    );
  }
}

export default App;
