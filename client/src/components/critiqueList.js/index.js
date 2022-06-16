import React from "react";
import { Link } from "react-router-dom";

const CritiqueList = ({ critiques }) => {
  if (!critiques.length) {
    return <h3>No critique Yet</h3>;
  }
  return (
    <div>
      <h3>critique</h3>
      <Link />
      {critiques &&
        critiques.map((critiques) => (
          <div key={critiques._id} className="card m-3">
            <div class="card-body">
              <p className="card-title">
                <strong>{critiques.username}</strong> -{" "}
                <span className="fs-6 text-muted">{critiques.createdAt}</span>
              </p>
              <p class="card-text">{critiques.critiqueText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CritiqueList;
