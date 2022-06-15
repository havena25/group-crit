import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHT } from '../utils/queries';

const SingleArt = (props) => {
  const { id: artId } = useParams();

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
