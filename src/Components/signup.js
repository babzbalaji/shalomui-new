import React from "react";

export default function signup() {
  var bg = "./images/banner_image.jpg";
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgb(57 57 57 / 64%), rgb(0 0 0 / 51%)),url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="signup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h1>Sign Up</h1>

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
                  <div class="col">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Conform Password"
                    />
                  </div>
                </div>
                <div class="form-row mt-4">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="form-row mt-4">
                  <div class="col">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Date of Birth"
                    />
                  </div>
                  <div class="col">
                    <select class="form-control" name="Gender" id="">
                      <option value="male">Male</option>
                      <option value="Female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="form-row mt-4">
                  <div class="col">
                    <textarea
                      name=""
                      className="form-control"
                      placeholder="About you"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div class="form-row mt-4">
                  <div class="col">
                    <button className="btn">
                      IP info - Get Geo from IP's city
                    </button>
                  </div>
                </div>
                <div class="form-row mt-4">
                  <div class="col">
                    <select
                      class="form-control"
                      name="Select Your country"
                      id=""
                    >
                      <option value="Country1">Country1</option>
                    </select>
                  </div>
                </div>
                <div class="form-row mt-4">
                  <div class="col">
                    <label htmlFor="">Click to Upload Profile picture</label>
                    <input type="file" name="" className="form-control" id="" />
                  </div>
                </div>
                <div class="form-row mt-4">
                  <div class="col">
                    <label htmlFor="">Click to Upload Banner Profile</label>
                    <input type="file" name="" className="form-control" id="" />
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
  );
}
