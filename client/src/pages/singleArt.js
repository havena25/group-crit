import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ART } from "../utils/queries";
import CritiqueList from "../components/critiqueList.js";
import CritiqueForm from "../components/critiqueForm";
import Auth from "../utils/auth";

const SingleArt = (props) => {
  const { id: artId } = useParams();
  const { loading, data } = useQuery(QUERY_ART, {
    variables: { id: artId },
  });
  const artwork = data?.art || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
<div>

  <div className="card mb-3">
    <p className="card-header">
      <span style={{ fontWeight: 700 }} className="text-light">
        {artwork.username}
      </span>{' '}
        {artwork.createdAt}
    </p>
    <div className="card-body">
      <p>Artwork Title: {artwork.artTitle}</p>
      <p>Artwork Description: {artwork.artDescription}</p>
      <p>Artwork Status: {artwork.artStatus}</p>
      <p>Artwork Start Date: {artwork.artStartDate}</p>
    </div>
  </div>

  {artwork.critiqueCount > 0 && <CritiqueList critiques={artwork.critique} />}
  {Auth.loggedIn() && <CritiqueForm artId={artwork._id} />}
</div>
  );
};

export default SingleArt;
