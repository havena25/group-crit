import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ART } from '../utils/queries';

const SingleArt = (props) => {
  const { id: artId } = useParams();

  const { loading, data } = useQuery(QUERY_ART, {
    variables: { id: artId },
  });

  const artworks = data?.art || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
          {artworks.username}
          </span>{' '}
          art exploring {artworks.createdAt}
        </p>
              <div className="card-body">
                <p>{artworks.artText}</p>
      </div>
              </div>
    </div>
  )
  },
const SingleArt = (props) => {
  return (
    <div>
      <div>
        <p className="card-header">
          <span>Username</span> critique on createdAt
        </p>
        <div className="card-body">
          <p>Art Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleArt;
