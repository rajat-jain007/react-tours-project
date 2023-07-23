import React from "react";
import Cards from "./Cards";
import Title from "./Title";

function Tours() {
  return (
    <>
      {/* Tours Section */}
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />
        <Cards />
      </section>
    </>
  );
}

export default Tours;
