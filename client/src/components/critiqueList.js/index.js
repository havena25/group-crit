import React from "react";
import { Link } from "react-router-dom";

const critiqueList = ({ critiques, title }) => {
  if (!critiques.length) {
    return <h3>No critiques Yet</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {critiques &&
        critiques.map(critiques => (
          <div key={critique._id} className="">
            <p className="">
                <Link
                to={`/profile/${critique.username}`}
                >
              {critiques.username}
              </Link>{''}
              critique on {critique.createdAt}
            </p>
            <div className="">
              <p>{critiques.critiqueText}</p>
              <p className="">
                Critiques: {critique.critiqueCount} || Click to{' '}
                {critiques.critiqueCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CritiqueList;