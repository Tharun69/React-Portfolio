import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div className="container">
        <embed
          src="images/tharun.pdf"
          type="application/pdf"
          width="100%"
          height="900px"
        />
      </div>
    );
  }
}

export default Resume;
