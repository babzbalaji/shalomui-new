import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <div className="herosection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <img
                data-aos-duration="1000"
                data-aos="fade-right"
                src="./images/banner_img.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-8 align-self-center">
              <div
                data-aos-duration="1500"
                data-aos="fade-up"
                className="p-0 p-md-5"
              >
                <h1>Heading Goes here</h1>
                <p>
                  Welcome in the beliver hub. Here you get Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Facere eum architecto at
                  quibusdam, sequi reprehenderit quae aspernatur. Maxime, illum,
                  atque facilis reprehenderit voluptate obcaecati labore
                  inventore distinctio, officiis itaque iusto.
                </p>
                <Link to="/eventlist" className="herosection_events">
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="what_we_do">
        <div className="container">
          <div className="row">
            <div
              className="col-md-10 "
              data-aos-duration="1500"
              data-aos="fade-left"
            >
              <div className="section_heading">WHAT WE DO</div>
              <div className="section_desctiption">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem, consequuntur! Dolorum voluptates perspiciatis
                sit ab cum, earum explicabo enim temporibus officiis impedit
                laudantium debitis ex! Vitae aspernatur distinctio
                exercitationem praesentium!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
