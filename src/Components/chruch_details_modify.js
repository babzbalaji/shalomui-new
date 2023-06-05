import React from "react";

export default function chruch_details_modify() {
  return (
    <div>
      <div className="eventpost mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page_title">Chruch details modify</h1>
            </div>
          </div>
          <form>
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Parent Group's chruch's Chruch Name"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Parent Group's chruch's Language"
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div class="col">
                <select class="custom-select">
                  <option selected>Parent Group's chruch's Type</option>
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
                  placeholder="Parent Group's chruch's Pastor"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Parent Group's chruch's Email"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Parent Group's chruch's Website"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <input
                  type="text"
                  placeholder="Parent Group's chruch's Chruch Time"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <input
                  type="text"
                  placeholder="Parent Group's chruch's Chruch Phone"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <input
                  type="text"
                  placeholder="Parent Group's chruch's Chruch Address"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <input
                  type="text"
                  placeholder="Parent Group's chruch's Chruch City"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <input
                  type="text"
                  placeholder="Parent Group's chruch's Chruch State"
                  class="form-control"
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div class="col">
                <select class="custom-select">
                  <option selected>Parent Group's chruch's Country</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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
