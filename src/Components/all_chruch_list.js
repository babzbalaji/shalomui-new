import React from "react";

export default function all_chruch_list() {
  return (
    <div className="all_chruch_list">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="page_title">Chruch details modify</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div class="form-row">
              <div class="col">
                <label htmlFor="">Shalom message</label>
                <textarea
                  name=""
                  placeholder="Shalom message"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div class="form-row">
              <div class="col">
                <label htmlFor="">Click to Upload an image</label>
                <input type="file" name="" className="form-control" id="" />
              </div>
            </div>
            <div class="form-row text-center">
              <div class="col">
                <button className="btn btn-primary mt-3 mb-4">
                  Post Shalom
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="page_title mb-4">Current cell shalom message</h1>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-3">
            <input
              type="text"
              placeholder="Search by anything"
              className="form-control mb-2"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-md-12 ">
            <div class="form-row">
              <div class="col">
                <textarea
                  name=""
                  placeholder="Current cell shalom message"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
