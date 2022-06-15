import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_CRITIQUE } from '../../utils/mutations';

const CritiqueForm = () => {

  const [critiqueText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (event) => {
    if (event.target.value.length <= 500) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      await addCritique({
        variables: { critiqueText }
      });

      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`m-0 ${characterCount === 500 ? "text-error" : ""}`}>
        Character Count: {characterCount}/500
      </p>{" "}
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Tell the artist what you think of their work"
          value={critiqueText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CritiqueForm;