import React from "react";

export default function chruchregistration() {
  return (
    <div>
      <div className="registration_page_form mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page_title">Chruch Registration</h1>
            </div>
          </div>
          <form>
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name of the Chruch"
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div class="col">
                <select class="custom-select">
                  <option selected>Chruch Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="form-row mt-3">
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pastor Name 1"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pastor Name 2"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pastor Name 3"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <input type="text" placeholder="Address" class="form-control" />
              </div>
            </div>

            <div className="form-row mt-3">
              <div className="col">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Upload Chruch Picture"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="form-row mt-3 text-center mb-4">
              <div className="col">
                <button className="btn btn-primary">Save</button>
              </div>
              <div className="col">
                <button className="btn btn-primary">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
