import React from "react";

export default function user_profile_banner() {
  return (
    <div className="user_profile_banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page_title">Current User profile banner</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-md-12 ">
            <div class="form-row">
              <div class="col">
                <textarea
                  name=""
                  placeholder="Current Page User's Profile Banner:Processed with imgix "
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="form-row">
              <div className="col-3">
                <button className="btn btn-primary mt-3 mb-4">
                  Send Message
                </button>
              </div>
              <div className="col-3">
                <button className="btn btn-primary mt-3 mb-4">
                  Post Chruch
                </button>
              </div>
              <div className="col-3">
                <button className="btn btn-primary mt-3 mb-4">
                  Post Event
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h1 className="page_title mb-0">
              Current Page user's First Name Current Page User's Last Name
              Posted shalom
            </h1>
          </div>
        </div>
        <div className="form-row">
          <div className="col-2">
            <button className="btn btn-primary mt-3 mb-4">Chruch</button>
          </div>
          <div className="col-2">
            <button className="btn btn-primary mt-3 mb-4">Event</button>
          </div>
          <div className="col-2">
            <button className="btn btn-primary mt-3 mb-4">Shalom</button>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-md-12 ">
            <div class="form-row">
              <div class="col">
                <textarea
                  name=""
                  placeholder="Parent group's shalom message"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <textarea
                  name=""
                  placeholder="Parent group's shalom message"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <textarea
                  name=""
                  placeholder="Parent group's shalom message"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
