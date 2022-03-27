import React from "react";
import "./Service.css";
import { LinkContainer } from "react-router-bootstrap";

function Service() {
  return (
    <div className="py-5 Service container">
      <div className="Serviceban">
        <h1>Unique Feature</h1>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-5 col-sm-12 card p-0 my-5">
              <LinkContainer to="/upload">
                <div className="cardname">
                  <h1>Upload</h1>
                  <p>
                    The following feature will help you to upload your
                    accomplishment on the main wall through which you can
                    showcase your accomplishment.
                  </p>
                </div>
              </LinkContainer>
            </div>

            <div className="col-lg-2 col-sm-0 my-5"></div>

            <LinkContainer to="/wall">
              <div className="col-lg-5 col-sm-12 card p-0 my-5">
                <div className="cardname">
                  <h1>FitWall</h1>
                  <p>
                    In the following section you can easily watch your post as
                    well as other post and through this page you can upvote
                    their post.
                  </p>
                </div>
              </div>
            </LinkContainer>

            <LinkContainer to="/blog">
              <div className="col-lg-5 col-sm-12 card p-0 ">
                <div className="cardname">
                  <h1>Blog</h1>
                  <p>
                  The following feature will help you to upload your
                    views on health and fitness. You can write blog on anything which motivate others.
                  </p>
                </div>
              </div>
            </LinkContainer>

            <div className="col-lg-2 col-sm-0"></div>
            
            <LinkContainer to="/challenge">
              <div className="col-lg-5 col-sm-12 card p-0">
                <div className="cardname">
                  <h1>Challenge Friend</h1>
                  <p>
                    Use the amazing feature by sending the challenges you did through the twilio API. Through this feature
                    you can motivate your loved one towards health and fitness.
                  </p>
                </div>
              </div>
            </LinkContainer>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
