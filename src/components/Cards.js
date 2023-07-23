import React from "react";
import { tours } from "../Links";

function Cards() {
  return (
    <>
      {/* Cards Section */}
      <div className="section-center featured-center">
        {tours.map((tourLink) => {
          const { id, image, date, title, text, location, days, price } =
            tourLink;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {location}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
