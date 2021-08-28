import React from "react";
import "./right-sidebar.styles.scss";
import CheckBox from "../checkbox/checkbox.component";

const RightSideBar = () => {
  return (
    <div className="right-sidebar">
      <div className="request-quote">
        <div className="content">
          <h1>Request a quote</h1>
          <p className="content-text">
            Get a ballpark costing on the product or idea you want to build. Be
            specific to get a more concise cost and timeline.
          </p>
          <div className="content-footer">*MANDATORY FIELDS</div>
        </div>
      </div>
      <div className="form">
        <form action="">
          <div className="selection">
            <div className="selection-label">What do you want to build?</div>
            <div className="selection-form">
              <div className="select-box">
                <CheckBox></CheckBox>
                <p>Mobile App</p>
              </div>
              <div className="select-box">
                <CheckBox></CheckBox>
                <p>Mobile App</p>
              </div>
              <div className="select-box">
                <CheckBox></CheckBox>
                <p>Mobile App</p>
              </div>
            </div>
          </div>
          <div className="requirements">
            <div className="requirements-label">
              What are the objectives, requirements and functionalities of this
              product? *
            </div>
            <textarea
              className="requirements-textarea"
              required
              placeholder="You can list down everything in point form or just paragraphs. It’s completely up to you. The more details we get, the more we can understand what you want to achieve."
            ></textarea>
            <div className="requirements-warning">
              Please fill out this field
            </div>
          </div>
          <div className="budget">
            <div className="budget-label">Do you have a budget</div>
            <input
              type="text"
              className="budget-inputbox"
              placeholder="What's your estimated cost?"
            />
            <div className="budget-warning">Please fill out this field</div>
          </div>
          <div className="budget">
            <div className="budget-label">Estimated Launch Date</div>
            <input
              type="text"
              className="budget-inputbox"
              placeholder="Deadline?"
            />
            <div className="budget-warning">Please fill out this field</div>
          </div>
          <div className="intouch">
            <label className="intouch-label">How do we get in touch</label>
            <input
              className="intouch-inputbox"
              placeholder="Your name *"
            ></input>
            <input className="intouch-inputbox" placeholder="Company"></input>
            <input
              className="intouch-inputbox"
              placeholder="Email Address"
            ></input>
            <input
              className="intouch-inputbox"
              placeholder="Contact no. *"
            ></input>
          </div>
          <div className="findus">
            <div className="findus-label">How did you find us? *</div>

            <div className="selection">
              <div className="left">
                <div className="select-box">
                  <CheckBox></CheckBox>
                  <label>Search</label>
                </div>
                <div className="select-box">
                  <CheckBox></CheckBox>
                  <p>Others</p>
                </div>
              </div>
              <div className="right">
                <div className="select-box">
                  <CheckBox></CheckBox>
                  <p>Word of Mouth</p>
                </div>
                <div className="select-box">
                  <CheckBox></CheckBox>
                  <p>Social Media</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightSideBar;
