import { Link } from "react-router-dom";
import React from "react";

const ArtList = ({ art }) => {
  if (!art.length) {
    return <h3>No art Yet</h3>;
  }

  return (
    <div>
      <div className="bg-dark">
        <h2 className="english-font py-2 text-center fs-2 text-white">
          Latest art
        </h2>
      </div>
      <div>
        {art &&
          art.map((art) => (
            <div key={art._id} className="py-3">
              <h3>
                <Link to={`/art/${art._id}`}>{art.artTitle}</Link>
              </h3>
              <p className="fs-6">
                <strong>{art.createdAt}</strong> by{" "}
                <strong>{art.username}</strong>
              </p>
              <div className="py-2">
                <div>
                  art Status: <strong>{art.artStatus}</strong>
                </div>
                <div>
                  art Start Date: <strong>{art.artStartDate}</strong>
                </div>
              </div>
              <div>
                <p className="art-summary">art Summary: {art.artSummary}</p>
                <p></p>
                <p className="">
                  <Link to={`/art/${art._id}`}>
                    Critiques: {art.critiquetCount} || Click to{" "}
                    {art.critiquetCount ? "see" : "start"} the discussion!
                  </Link>
                </p>
                <div className="double-border"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ArtList;
