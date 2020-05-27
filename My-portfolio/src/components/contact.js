import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tharun Mamillapally</h2>
            <img
              src="images/img-3201.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Would be interested in exposure to domains providing
              intellectually challenging work in the field of computers for
              providing and enriching my knowledge and skills.
            </p>
            <p>feel free to contact me!</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "20px" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+91) 8074369722
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "20px" }}>
                    <i className="fa fa-instagram" aria-hidden="true" />
                    t_for_tan
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "20px" }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    reddytharun101@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "20px" }}>
                    <i className="fa fa-github" aria-hidden="true" />
                    https://github.com/Tharun69
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
