import React from "react";
import { Link } from "react-router-dom";

const CritiqueList = ({ Crtitique, title }) => {
  if (!Crtitique.length) {
    return <h3>No Crtitique Yet</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {Crtitique &&
        Crtitique.map((Crtitique) => (
          <div key={Crtitique._id} className="">
            <p className="">
              <Link to={`/profile/${Crtitique.username}`}>
                {Crtitique.username}
              </Link>
              {""}
              Crtitique on {Crtitique.createdAt}
            </p>
            <div className="">
              <p>{Crtitique.CrtitiqueText}</p>
              <p className="">
                Crtitique: {Crtitique.CrtitiqueCount} || Click to{" "}
                {Crtitique.CrtitiqueCount ? "see" : "start"} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CritiqueList;
