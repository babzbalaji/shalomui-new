import React from "react";

export default function Homepage() {
  var bg = "./images/banner_image.jpg";

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgb(57 57 57 / 83%), rgba(0, 0, 0, 0.78)),url(${bg})`,
        height: "95vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="herosection"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Grace and Truth</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus totam, illo in ratione veritatis recusandae dolor
              minima itaque. Eum, dolor? Temporibus maiores nesciunt aliquid
              quo, odit at culpa inventore iste? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Soluta blanditiis quod vero sapiente
              minima. Placeat vel fuga necessitatibus, in deserunt veniam
              beatae, asperiores et consectetur eligendi ipsum possimus sapiente
              eaque?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
