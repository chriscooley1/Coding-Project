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

          <label>Birth date</label>
          <input type="birth date" name="birth date" placeholder="Birth date" />

          <label>I agree to be contacted via email</label>
          <input type="submit" value="Clear" />
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    );
  }
}

export default App;
