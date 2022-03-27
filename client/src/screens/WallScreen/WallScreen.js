import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import "./WallScreen.css";

const WallScreen = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/walldata");
        setData(res.data);
      } catch (err) {
        const msg = err.response ? err.response.data.message : err;
        console.log(msg);
      }
    };
    fetchData();
  });
  const [data, setData] = useState([]);
  return (
    <div className="container ">
      <div className="text-center container">
      <h2 className="appreaciate">FitWall</h2><br/>
      <p className="appreaciatep ">Showcase your transformation journey and motivate others.</p>
       </div>
      <div className="container">
        <div className="row">
          {data !== null ? (
            data.map((post) => {
              return (
                <>
                  <LinkContainer to={`/images/${post._id}`}>
                    <div className="col-lg-6 col-sm-12 my-5 px-5  wallbox ">
                      <div className="wallbox1 p-3 ">
                        <div className="row">
                        <div className="col-sm-12 postname">
                          <p>{post.name}</p>
                        </div>
                        <div className="col-sm-12 postdate">
                          <p>
                            Posted On{" "}
                            <span className="spanpost">{post.date}</span>
                          </p>
                        </div>

                        <div className="col-sm-12 postdesc">
                          <p>{post.description}</p>
                        </div>
                        <div className="col-sm-12 postdesc">
                          <p>Weight : {post.weight}</p>
                        </div>
                        <div className="col-sm-12 postdesc">
                          <p>Height : {post.height}</p>
                        </div>
                        <div className="col-sm-12 postdesc">
                          <p>Age : {post.age}</p>
                        </div>

                        <div className="upvotes my-3">
                          <p>
                            Upvoted By &nbsp; <span>{post.upVotes}</span>
                          </p>
                        </div>
                        
                        <div className=" container text-center">
                          <p className="buttonwall">
                            Click To watch the Image !!!!
                          </p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </LinkContainer>
                </>
              );
            })
          ) : (
            <h3>Loading</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default WallScreen;
