const config = require("./config");
const React = require("react");

module.exports = React.createClass({
  render() {
    return(
      <div id="notification">{config.notification}</div>
    );
  }
});
