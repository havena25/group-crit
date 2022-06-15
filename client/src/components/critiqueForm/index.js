import React, { useState } from 'react';

const CritiqueForm = () => {
  return (
    <div>
      <p className="m-0">
        Character Count: 0/280
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch">
        <textarea
          placeholder="Tell the artist what you think of their work"
          className="form-input col-12 col-md-9"
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CritiqueForm;