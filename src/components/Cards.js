/** @format */

import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Some Meaningful Blurb...</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul> */}
          <ul className="cards__items">
            <CardItem
              src="images/body.jpg"
              text="WHAT WE OFFER"
              label="Nutrition"
              path="/body"
            />
            <CardItem
              src="images/soul.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Wellness"
              path="/soul"
            />
            <CardItem
              src="images/mind.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Health"
              path="/mind"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
