import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    var myStyle = {
      fontSize: 50,
      color: '#FF0000'
    }

    return (
      <div>
        <h1>This the Header!</h1>
        <h2>More stuff.</h2>
        <h3 style = {myStyle}>Stuff below is in app body.</h3>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    var i = 2;

    return (
      <div>
        <h2>Content</h2>
        <p>Content text!</p>
        <p data-myattribute = "somevalue">This is the content!</p>
        <h1>{i == 2 ? 'True,bro!' : 'Nah!'}</h1>
        {
          //this is a line comment.
        }
        {/*Multiline comment here.. */}
      </div>
    );
  }
}

export default App;
