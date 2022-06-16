import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";

import { ADD_CRITIQUE } from "../../utils/mutation";
import auth from "../../utils/auth";

const CritiqueForm = ({ artId }) => {
  const [critiqueText, setCritiqueText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addCritique, { error }] = useMutation(ADD_CRITIQUE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addCritique({
        variables: { critiqueText, artId },
      });

      setCritiqueText("");
      setCharacterCount(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "critiqueText" && value.length <= 100000) {
      setCritiqueText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What are your thought on this Art?</h4>

      {auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 100000 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/100000
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                placeholder="Tell the artist what you think of their work"
                value={critiqueText}
                className="form-input col-12 col-md-9"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};
export default CritiqueForm;
