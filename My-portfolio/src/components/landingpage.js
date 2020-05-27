import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="images/img-3201.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Tharun Reddy Mamillapally</h1>
              <p>Developer | Programmer | Learner | Tech-Enthusiast </p>

              <hr />

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/tharun-reddy-mamillapally-b475b2168/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/Tharun69"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>

                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
