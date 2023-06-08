import React from "react";

export default function user_info() {
  var bg = "./images/banner_image.jpg";
  return (
    <div className="user_info">
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
                <h1>User Info</h1>
                <form>
                  <div class="form-row">
                    <div class="col">
                      <label for="validationCustom01">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Current User's Email"
                      />
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <label for="validationCustom01">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Current User's First Name"
                      />
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <label for="validationCustom01">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Current User's Last Name"
                      />
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <label for="validationCustom01">Date of Birth</label>
                      <input type="date" class="form-control" />
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <label for="validationCustom01">Gender</label>
                      <select class="custom-select">
                        <option selected>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <label for="validationCustom01">Bio</label>
                      <textarea
                        name=""
                        placeholder="Current User's Bio"
                        className="form-control"
                        id=""
                        cols="30"
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <label for="validationCustom01">City</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="IP info - Get Geo from IP's city"
                      />
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <label for="validationCustom01">Country</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Current User's country"
                      />
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <label for="validationCustom01">Profile Photo</label>
                      <input type="file" class="form-control" />
                    </div>
                  </div>
                  <div class="form-row mt-4">
                    <div class="col">
                      <label for="validationCustom01">Profile Banner</label>
                      <input type="file" class="form-control" />
                    </div>
                  </div>

                  <div class="form-row mt-4 text-center">
                    <div class="col">
                      <button className="btn btn-primary">Update</button>
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
