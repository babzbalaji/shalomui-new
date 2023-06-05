import React from "react";

export default function eventpost() {
  return (
    <div className="eventpost mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Post Your Event</h1>
          </div>
        </div>
        <form>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Title" />
            </div>
            <div class="col">
              <select class="custom-select">
                <option selected>Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Address" />
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="IP info - Get geo from IP's City"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="IP info - Get geo from IP's Region"
              />
            </div>
            <div class="col">
              <select class="custom-select">
                <option selected>All countries - Get all countries:each</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col">
              <input type="date" class="form-control" />
            </div>
            <div class="col">
              <input type="time" class="form-control" />
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col">
              <input
                type="file"
                placeholder="Upload Event Photo Only"
                class="form-control"
              />
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="col">
              <textarea
                name=""
                className="form-control"
                placeholder="Write about Event"
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="form-row mt-3 text-center mb-4">
            <div className="col">
              <button className="btn btn-primary">Post Event</button>
            </div>
            <div className="col">
              <button className="btn btn-primary">Cancel</button>
            </div>
          </div>
        </form>

        <div className="posted-event-list">
          <div className="row">
            <div className="col-12 text-center">
              <h6>Posted Event lists</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 m-1 p-3 border border-warning d-flex justify-content-between">
              <div>Event Title</div>
              <div>Event Category</div>
              <div>Event Message</div>
              <button className="btn-danger btn">Edit</button>
            </div>
            <div className="col-md-12 m-1 p-3 border border-warning d-flex justify-content-between">
              <div>Event Title</div>
              <div>Event Category</div>
              <div>Event Message</div>
              <button className="btn-danger btn">Edit</button>
            </div>
            <div className="col-md-12 m-1 p-3 border border-warning d-flex justify-content-between">
              <div>Event Title</div>
              <div>Event Category</div>
              <div>Event Message</div>
              <button className="btn-danger btn">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
