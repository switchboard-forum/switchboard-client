let React = require("react");
let Notification = require("./Notification.jsx");

var styles = {
  ClassicBlue: {
    color: "maroon",
    fontFamily: "sans",
    backgroundImage: "linear-gradient(to bottom, #D1D5EE 0px, #EEF2FF 200px)",
    height: "100%"
  }
};

module.exports = React.createClass({
  render() {
    return (
      <html>
        <head>
          <title>Switchboard Prototype</title>
      <link rel="stylesheet" href="http://static.switchboard.sharkathan.com/bluetheme.css" />
        </head>
        <body>
          <img src="http://sharkathan.com/sites/switchboard/alpha.png" id="banner"/>
          <h1>/ca/ - Cancer</h1>
          <hr/>
          <Notification/>
        </body>
      </html>
    );
  }
});
