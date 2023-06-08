import React from "react";

export default function signin() {
  var bg = "./images/banner_image.jpg";
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgb(57 57 57 / 64%), rgb(0 0 0 / 51%)),url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="signin">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h1>Sign in</h1>
                <form>
                  <div class="form-row">
                    <div class="col">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div class="form-row mt-4 text-center">
                    <div class="col">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
