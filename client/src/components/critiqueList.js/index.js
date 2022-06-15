import React from "react";
import { Link } from "react-router-dom";

const CritiqueList = ({ critique, title }) => {
  if (!critique.length) {
    return <h3>No critique Yet</h3>;
  }
  return (
    <div>
      <h3>critique</h3>
      {critique &&
        critique.map((critique) => (
          <div key={critique._id} className="card m-3">
            <div class="card-body">
              <p className="card-title">
                <strong>{critique.username}</strong> -{" "}
                <span className="fs-6 text-muted">{critique.createdAt}</span>
              </p>
              <p class="card-text">{critique.critiqueText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CritiqueList;
