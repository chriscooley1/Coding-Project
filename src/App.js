import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Contact Us</p>
      <div>
        <form action="/action_page.php">
          <label>Name</label>
          <input type="text" id="name" name="name" placeholder="Name" />
          
          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />

          <label>Birthdate</label>
          <input type="birthdate" name="birthdate" placeholder="Birthdate" />

          <br></br>
          <label>I agree to be contacted via email</label>
          <br></br>
          <input type="submit" value="Clear" />
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    );
  }
}

export default App;
