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

  const art = data?.art || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div class="m-2">
        <h2 className="english-font text-center">{art.artTitle}</h2>
        <div className="text-center">
          <p>
            art Start Date:{" "}
            <span>
              <strong>{art.arttartDate}</strong>
            </span>
          </p>
          <p>
            art Status:{" "}
            <span>
              <strong>{art.arttatus}</strong>
            </span>
          </p>
          <p>
            Added to Cold art Central on:{" "}
            <span>
              <strong>{art.createdAt}</strong>
            </span>{" "}
            by{" "}
            <span>
              <strong>{art.username}</strong>
            </span>
          </p>
        </div>

        <div>
          <p></p>
          <p>
            <span>
              <strong>The story so far:</strong>
            </span>
          </p>
          <p className="px-3">{art.artDescription}</p>
        </div>
      </div>
      {Auth.loggedIn() && <CritiqueForm artId={art._id} />}
      {art.critiqueCount > 0 && <CritiqueList critiques={art.critiques} />}
    </div>
  );
};

export default SingleArt;
