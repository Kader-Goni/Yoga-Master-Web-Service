import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container my-5">
        <h2 className="my-5 text-primary">Question and Answer</h2>
        <div className="answer text-start">
          <div className="ans" data-aos="zoom-in-right" data-aos-duration="800">
            <h6 className=" fw-bold">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h6>
            <div className="my-3">
              <p>
                Firebase Authentication provides backend services, easy-to-use
                SDKs, and ready-made UI libraries to authenticate users to your
                app. It supports authentication using passwords and many option
                so Everything can be made useful if you use your mind, can’t it
                be? Like the machine is doing with the men. many option
                implement authentication that Express, Node js, Next js, php,
                laravel etc.
              </p>
            </div>
          </div>
          <div className="ans" data-aos="zoom-in-left" data-aos-duration="800">
            <h6 className=" fw-bold">
              What other services does firebase provide other than
              authentication..?
            </h6>
            <div className="my-3">
              <p>
                However, any platform as comprehensive as Firebase is bound to
                lack advanced features.Cloud Firestore, Cloud Functions,
                Authentication, Hosting, Cloud Storage, Google Analytics,
                Predictions, Cloud Messaging, Dynamic Links, Remote Config etc.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="row text-start ans my-5"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <h6 className=" fw-bold">
            Difference between authorization and authentication..?
          </h6>
          <div className="">
          <p> Authentication vs Authorization To reiterate, authentication and authorization are separate steps in the user access provision process. We can use an analogy to demonstrate the differences. Consider a pet sitter who needs to enter the home of a family that is away on vacation. The pet sitter needs: Authentication, such as a key, keycard, or security code to enter the home. If the pet sitter has the correct piece of hardware to unlock the door, the pet sitter can enter the home. Authorization, such as the permissions and restrictions set by the family. The pet sitter has been authorized to access the living room (where the pet's leash is kept) and the kitchen (where the pet's food is stored). Once inside, the pet sitter can enter these rooms but not any other room. In this example, authentication and authorization work together. A pet sitter has the right to enter the house (authentication), and once there, she has access only to certain areas (authorization). </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
