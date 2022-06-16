import { Link } from "react-router-dom";
import React from "react";

const ArtList = ({ artworks }) => {
  if (!artworks.length) {
    return <h3>No artwork Yet</h3>;
  }

  return (
    <div>
      <div className="bg-dark">
        <h2 className="english-font py-2 text-center fs-2 text-white">Latest Artwork</h2>
      </div>
      <div>
        {artworks &&
          artworks.map(artworks => (
            <div key={artworks._id} className="py-3">
              <h3><Link to={`/art/${artworks._id}`}>
                {artworks.artTitle}
              </Link></h3>
              <p className="fs-6"><strong>{artworks.createdAt}</strong> by <strong>{artworks.username}</strong></p>
              <div className="py-2">
                <div>Art Status: <strong>{artworks.artStatus}</strong></div>
                <div>Art Start Date: <strong>{artworks.artStartDate}</strong></div>
              </div>
              <div>
                <p className="art-summary">Art Summary: {artworks.artSummary}</p>
                <p></p>
                <p className="">
                  <Link to={`/art/${artworks._id}`}>
                  Comments: {artworks.commentCount} || Click to{' '}
                  {artworks.commentCount ? 'see' : 'start'} the discussion!
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
