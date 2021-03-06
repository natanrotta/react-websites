import React from "react";
import CardItem from "../CardItem";

import "./styles.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="But I must explain to you how all this mistaken idea of denouncing pleasure"
              label="Sunset"
              path="/services"
            />

            <CardItem
              src="images/img-2.jpg"
              text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
              label="Caribe"
              path="/services"
            />
          </ul>
         
          <ul className="cards__items">
            <CardItem
              src="images/img-7.jpg"
              text="The wise man therefore always holds in these matters to this principle"
              label="Music"
              path="/services"
            />

            <CardItem
              src="images/img-8.jpg"
              text="are perfectly simple and easy to distinguish. In a free h"
              label="Dubai"
              path="/services"
            />

            <CardItem
              src="images/img-9.jpg"
              text="Explore the hiddem waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
